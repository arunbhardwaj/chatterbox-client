// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  _prevID: new Set(),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // setTimeout(() => { this.render(); }, 100);
    this.render();
  },

  render: function(roomName) {
    // TODO: Render _all_ the messages.
    let messages = Messages._getAllMessages();

    // $(".room-options").children("option:selected").val();
    // render only if new messages are added.
    for (let id in messages) {
      var message = messages[id];
      if (!this._prevID.has(id) && message.roomname === roomName) {
        this.renderMessage(message);
        this._prevID.add(id);
      } else {
        this.renderMessage(message);
        this._prevID.add(id);
      }
      // else {
      //   this.derenderMessage(message);
      //   this._prevID.delete(id);
      // }
    }

  },

  // TODO: implement this so we don't have to empty chat every time
  derenderRoom: function(room) {
    this.$chats.empty();
    this._prevID = new Set();
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    $(MessageView.render(message)).prependTo(this.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};