exports.commands = {
  meme: 'memes',
  memes: function (target, room, user) {
    if (!this.canBroadcast()) return;
    // List of memes. The target to call specific memes is the key and the HTML to be shown is the property.
    var memes_List = {
        // For example: 'meme': '<h1>This is a meme.</h1>'
        'roasted': '<img src=http://cdn.meme.am/instances/500x/52488002.jpg width=300 height=300 title="ROASTED" />',
        'rekt': '<img src=http://i.imgur.com/i8SpBem.gif?noredirect width=460 height=300 title="OSHET" />'
     };
    if (!target) {
      var memes_Table = '<table border="1" cellspacing="0" cellpadding="3" width="100%"><th> List of Memes (by megas4ever :])</th><tr><td>';
      var keys = Object.keys(memes_List);
      for (var count = 0; count < keys.length; count++) 
        memes_Table += '<li>' + keys[count] + '</li>';
      memes_Table += '</td></tr></table>';
      this.sendReplyBox(memes_Table);
    }
    else if (memes_List.hasOwnProperty(target)) this.sendReplyBox(memes_List[target]);
    else this.errorReply('Meme does not exist.');
  },
};
//
