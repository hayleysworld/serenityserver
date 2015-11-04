exports.commands = {
  tm: 'terminalmessage',
  terminalmessage: function (target, room, user, cmd) {
    if (user.name === 'megas4ever || user.name === 'hayleysworld' || user.name === 'Yuuki X') {
        if (target) console.log('Message from ' + user.name + ': ' + target);
        if (!target) return this.parse('/tmhelp');
  }
  else if (cmd == '/terminalmessage') return this.errorReply('/terminalmessage - access denied');
  else if (cmd == '/tm') return this.errorReply('/tm - access denied');
  else if (user.name !== 'megas4ever' && user.name !== 'hayleysworld' && user.name !== 'Yuuki X') return this.errorReply('You do not have permission to use this command.');
},
  tmhelp: function () {
    return this.sendReply('/tm message or /terminalmessage message- sends a message to the terminal / console');
  },
    terminalmessagehelp: function () {
      return this.parse('/tmhelp');
    },
};
