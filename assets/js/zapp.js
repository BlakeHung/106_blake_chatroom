/*
[2016-12-05 19:39:11] local.INFO: array (
  'sender' =>
  array (
    'id' => '1417733044905246',
  ),
  'recipient' =>
  array (
    'id' => '1842507179366248',
  ),
  'timestamp' => 1480937950685,
  'message' =>
  array (
    'mid' => 'mid.1480937950685:c9b7dd7801',
    'seq' => 22,
    'attachments' =>
    array (
      0 =>
      array (
        'type' => 'audio',
        'payload' =>
        array (
          'url' => 'https://cdn.fbsbx.com/v/t59.3654-21/15203966_1233708096665853_6728172728538365952_n.aac/audioclip-1480937947439-1478.aac?oh=057443cef17aa9c19b1ca8f4759e0f46&oe=5847B772',
        ),
      ),
    ),
  ),
)
*/

var userData = {
  1010001:{
    member   : true,
    userId   : 1021314,
    userName  : 'Amy Chen',
    avatarSrc : '/img/man.png',
  },
  1021314:{
    isActive : true,
    channelId: 1021314,
    userId   : 1021314,
    userName  : 'Amy Chen',
    avatarSrc : '/img/man.png',
    lastMessage: 'Hello Vue! I\'m Amy Chen.'
  },
  1021315:{
    isActive : false,
    channelId: 1021315,
    userId   : 1021315,
    userName  : 'Boch Ko',
    avatarSrc : '/img/man.png',
    lastMessage: 'Hello Vue! I\'m Boch Ko. '
  },
  1021316:{
    isActive : false,
    channelId: 1021316,
    userId   : 1021316,
    userName  : 'Zoe Lu',
    avatarSrc : '/img/man.png',
    lastMessage: 'Hello Vue! I\'m Zoe Lu.'
  },
  1021317:{
    isActive : false,
    channelId: 1021317,
    userId   : 1021317,
    userName  : 'Mogran Wang',
    avatarSrc : '/img/man.png',
    lastMessage: 'Hello Vue! I\'m Mogran Wang.'
  }
};
/*
{
  "sender":{
    "id":"USER_ID"
  },
  "recipient":{
    "id":"PAGE_ID"
  },
  "timestamp":1458692752478,
  "message":{
    "mid":"mid.1457764197618:41d102a3e1ae206a38",
    "seq":73,
    "text":"hello, world!",
    "quick_reply": {
      "payload": "DEVELOPER_DEFINED_PAYLOAD"
    }
  }
}
 * */
var channelData = {
  1021314:[
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021314,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021314,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <br> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021314,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    }

  ],
  1021315:[
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021315,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. 火 火 火Donec lacinia congue felis in faucibus. <br> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021315,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    }

  ],
  1021315:[
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021315,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021315,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <br> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021315,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. 水水水Donec lacinia congue felis in faucibus."
      }
    }

  ],

  1021316:[
    {
      sender    : 1021316,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021316,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021316,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021316,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel 木木 metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <br> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021316,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla 木 vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    }

  ],
  1021317:[
    {
      sender    : 1021317,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. <br><br>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021317,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021317,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida 金 金 金nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1021317,
      recipient : 1010001,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi 金 vulputate fringilla. Donec lacinia congue felis in faucibus. <br> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    },
    {
      sender    : 1010001,
      recipient : 1021317,
      timestamp : 1417733044905246,
      message   : {
        text : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
      }
    }

  ]
};

var chat_app = new Vue({
  el: '#sis-chat-app',
  data: {
    channelLogs:[],
    channelId: null,
    userData: null,
    user: null,
    newMsg:'',
    activeIndex: 0,
    channelList: [
      {
        isActive : true,
        channelId: 'open-chat-room',
        userId   : 'open-chat-room',
        userName  : '聊天大廳',
        avatarSrc : '/img/man.png',
        lastMessage: '',
        timestamp: '',
      }
    ],
    channelData: {},
    knowledges:[
      {
        id         : 1,
        title      : "安安卡",
        keywords   : "打招呼",
        description: "安安~",
        imageSrc   : ""
      },
      {
        id         : 2,
        title      : "洗澡卡",
        keywords   : "掰掰",
        description: "我要去洗澡了，掰掰",
        imageSrc   : ""
      },
      {
        id         : 3,
        title      : "表情卡",
        keywords   : "顏文字",
        description: "‷̗ↂ凸ↂ‴̖",
        imageSrc   : ""
      },
      {
        id         : 4,
        title      : "表情卡",
        keywords   : "顏文字",
        description: 'ლ（´∀`ლ）',
        imageSrc   : ""
      },
    ]
  },
  methods:{
    openChannel : function ( index ) {
      console.log('open '+index+' channel');
      var currActive = this.activeIndex;
      this.activeIndex = index;
      this.channelList[ currActive ].isActive = false ;
      this.channelList[ index ].isActive = true ;

      var channelId = this.channelList[ index ].channelId ;
      //console.log( channelData );
      this.channelId   = channelId;
      this.channelLogs = this.channelData[ channelId ];
      this.$nextTick(function() {
        this.scrollToEnd();
      });
      //console.log( this.channelLogs);
      //console.log( this.channelId );
      //console.log( this.userData );
    },
    openUserChannel: function  (user) {
      // check out chatroom exist or not
      if( user.userId !== this.user.userId) {
        var channelId = user.userId;
        if(this.channelData[ channelId ] === undefined){
          // new channel
          this.channelList.push({
            isActive : false,
            channelId: channelId,
            userId   : user.userId,
            userName  : user.userName,
            avatarSrc : '/img/man.png',
            lastMessage: '',
            timestamp: '',
          });
          this.channelData[ channelId ] = [];

          var channelIdLast = this.channelList.length - 1 ;
          this.openChannel(channelIdLast);
        } else {
          // exist channel
        }
      }
    },
    scrollToEnd: function() {
      //var container = this.$el.querySelector("#sis-chat-log");
      //this.$el.scrollTop = container.scrollHeight;
      $("#sis-chat-messagebox").animate({
        scrollTop: $("#sis-chat-log").height()
      }, 400)
    },
    sendNewMsg: function  ( msg ) {
      this.sendTargetNewMsg( this.channelId , msg );
      this.$nextTick(function() {
        this.scrollToEnd();
      });
      this.newMsg = '';
    },
    sendTargetNewMsg: function  ( channelId , msg ) {
      if( msg != "\n") {
        io.socket.post('/chat/talk',{
          sender    : this.user,
          recipient : channelId ,
          timestamp : new Date().valueOf(),
          message   : {
            text : msg
          }
        }, function (resData, jwres) {
        });

        this.channelLogs.push( {
          sender    : this.user,
          recipient : channelId ,
          timestamp : new Date().valueOf(),
          message   : {
            text : msg
          }
        });
      }
    },
    insertThis: function  ( index ) {
      var msg = this.knowledges[ index ].description;
      this.sendNewMsg( msg );
    },
    receiveMsg: function  ( msg ) {
      var channelId = msg.recipient;
      console.log('receiveMsg = ', msg);
      if( channelId === this.user.userId) {
        channelId = msg.sender.userId;
      }

      if(this.channelData[ channelId ] !== undefined) {
        this.channelData[ channelId ].push(msg);

        // TODO :
        // update channel status
      } else {
        // update channel status
        this.channelList.push({
          isActive : false,
          channelId: channelId,
          userId   : msg.sender.userId,
          userName  : msg.sender.userName,
          avatarSrc : '/img/man.png',
          lastMessage: msg.message.text,
          timestamp: msg.timestamp,
        });
        this.channelData[ channelId ] = [];
        this.channelData[ channelId ].push(msg);
      }
      this.$nextTick(function() {
        this.scrollToEnd();
      });
    }
  }
});
io.socket.on('connect', function(){
  io.socket.get('/chat/messages');
});

io.socket.on('disconnect', function(){
  console.log('Lost connection to server');
});

io.socket.on('message',function( msg ) {
  console.log('EVENT message', msg );
  chat_app.receiveMsg(msg);
});
io.socket.on('join',function( user ) {
  console.log('EVENT join', user );
  chat_app.userData[user.userId] = user;
});
io.socket.on('leave',function( user) {
  console.log('EVENT leave', user );
  if(chat_app.userData[ user.userId ]){
    delete chat_app.userData[ user.userId ];
  }
});

function getUserName() {
  var userName = prompt("請輸入您的暱稱：", "Harry Potter");
  if (userName != null) {
    console.log('I am '+ userName);
    io.socket.post('/chat/auth',{
      userName: userName,
    }, function (resData, jwres) {
      console.log(resData);

      console.log('user channelId = ', resData.user.userId );
      chat_app.user = resData.user;
      chat_app.userData = resData.userData;
      chat_app.channelData = resData.channelData;
      chat_app.channelList = resData.channelList;
      chat_app.openChannel(0);
      $( "#sis-chat-textbox input" ).select();
      $( "#sis-chat-textbox").click(function() {
        $( "#sis-chat-textbox input" ).select();
      });
    });
  } else {
    getUserName();
  }
}

$(function() {
  getUserName();
});

$(window).on("beforeunload", function() {
  io.socket.post('/chat/disconnect');
    return inFormOrLink ? "Do you really want to close?" : null;
})
