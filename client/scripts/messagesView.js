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

  render: function() {
    // TODO: Render _all_ the messages.
    let messages = Messages._getAllMessages();

    // render only if new messages are added.
    for (let id in messages) {
      if (!this._prevID.has(id)) {
        this.renderMessage(messages[id]);
        this._prevID.add(id);
      }
    }
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