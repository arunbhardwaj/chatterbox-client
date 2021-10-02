// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  _prevID: new Set(),
  users: $('.username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // setTimeout(() => { this.render(); }, 100);
    this.render();
    $('#chats').delegate('.username', 'click', this.handleClick);

  },

  render: function(roomName) {
    // TODO: Render _all_ the messages.
    let messages = Messages._getAllMessages();

    // render only if new messages are added.
    for (let id in messages) {
      var message = messages[id];
      if (!this._prevID.has(id) && message.roomname === roomName) {
        this.renderMessage(message);
        this._prevID.add(id);
      }
    }


  },

  // TODO: implement this so we don't have to empty chat every time
  derenderRoom: function(room) {
    this.$chats.empty();
    this._prevID = new Set();
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var templateMessage = $(MessageView.render(message));
    templateMessage.prependTo(this.$chats);

    // TODO: get the DOM to change the color for friends immediately after
    // friending or defriending instead of having us to load up a different
    // room.
    if (Friends.isFriend(message.username)) {
      templateMessage.addClass('friend');
    } else {
      templateMessage.removeClass('friend');
    }

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(this).text();
    Friends.toggleStatus(username);
  }

};