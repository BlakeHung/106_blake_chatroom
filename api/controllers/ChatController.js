/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const uuidv4 = require('uuid/v4');

var users = {};

// only log last 50 chat logs of open-chat-room
var chatLogs = {
  'open-chat-room': [
    {
      sender    : {
        userName: 'system service',
      },
      recipient : 'open-chat-room',
      timestamp : 1417733044905246,
      message   : {
        text : "請遵守網路社交禮儀 :P"
      }
    },
  ]
};
// only log open-chat-room status !
var openChatRoom ={
  isActive : true,
  channelId: 'open-chat-room',
  userId   : 'open-chat-room',
  userName  : '聊天大廳',
  avatarSrc : '/img/man.png',
  lastMessage: '',
  timestamp: '',
};

module.exports = {
  disconnect : function(req, res) {
    sails.log.info('disconnect', req.body);

    var user = req.session.user;
    sails.sockets.leave(req, 'open-chat-room');
    // Broadcast a "hello" message to all the cot sockets.
    // This message will be sent to all sockets in the "cotSockets" room,
    // but will be ignored by any client sockets that are not listening-- i.e. that didn't call `io.socket.on('hello', ...)`
    // The data of the message ({} object) is the "data" in io.socket.on('hello', cotction gotHelloMessage (data)
    if(user !== undefined) {
      sails.sockets.broadcast('open-chat-room', 'leave', user, req);
      sails.sockets.broadcast('open-chat-room', 'message',{
        sender    : {
          userName: 'system service',
        },
        recipient : 'open-chat-room',
        timestamp : 1417733044905246,
        message   : {
          text : `${user.userName} 離開聊天室`,
        }
      }, req);
    }
    // Respond to the request with an a-ok message
    // The object returned here is "body" in io.socket.get('/say/hello', function gotResponse(body, response)
    if(user && users[ user.userId ]){
      delete users[ user.userId ];
    }
  },
  auth : function(req, res) {
    // Make sure this is a socket request (not traditional HTTP)
    if (!req.isSocket) {return res.badRequest();}
    // Have the socket which made the request join the "funSockets" room

    sails.log.info('auth', req.body);

    var data = req.body;
    var userName = data.userName;
    var userId = uuidv4();
    var user = {
      userId: userId,
      userName: userName
    };
    req.session.user = user;

    users[ user.userId ] = user;

    sails.sockets.join(req, 'open-chat-room');
    sails.sockets.join(req, userId);
    // Broadcast a "hello" message to all the cot sockets.
    // This message will be sent to all sockets in the "cotSockets" room,
    // but will be ignored by any client sockets that are not listening-- i.e. that didn't call `io.socket.on('hello', ...)`
    // The data of the message ({} object) is the "data" in io.socket.on('hello', cotction gotHelloMessage (data)
    sails.sockets.broadcast('open-chat-room', 'join', user, req);
    sails.sockets.broadcast('open-chat-room', 'message',{
      sender    : {
        userName: 'system service',
      },
      recipient : 'open-chat-room',
      timestamp : 1417733044905246,
      message   : {
        text : `歡迎 ${user.userName} 加入聊天室`,
      }
    }, req);
    // Respond to the request with an a-ok message
    // The object returned here is "body" in io.socket.get('/say/hello', function gotResponse(body, response)
    //

    // get users
    // get chat log from open-chat-room channel
    return res.ok({
      user: user,
      userData: users,
      channelList: [
        openChatRoom,
      ],
      channelData: chatLogs,
    });
  },
  talk: function (req, res) {
    // Make sure this is a socket request (not traditional HTTP)
    if (!req.isSocket) {return res.badRequest();}
    // Have the socket which made the request join the "funSockets" room

    sails.log.info('talk get', req.body);

    var msg = req.body;

    if(msg.message.text != "\n"){
      /*
    {
        sender    : this.user,
        recipient : channelId ,
        timestamp : new Date().valueOf(),
        message   : {
          text : msg
        }
    }
    */

      var channelID = msg.recipient;
      sails.log.info('talk broadcast:', req.body);
      sails.sockets.broadcast(channelID , 'message', msg, req);

      //sails.sockets.join(req, msg.recipient+'-'+msg.sender.userId);
      //sails.sockets.join(req, msg.sender.userId+'-'+msg.recipient);

      if(channelID === 'open-chat-room') {
        chatLogs['open-chat-room'].push(msg);
        if(chatLogs['open-chat-room'].length > 50) {
          chatLogs['open-chat-room'].shift();
        };
        openChatRoom.timestamp = msg.timestamp;
        openChatRoom.lastMessage = msg.message.text;
      }

    }
  },


};

