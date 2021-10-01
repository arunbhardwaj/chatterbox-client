// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    var messages = Messages._getAllMessages();
    console.log('All messages', messages);
    console.log({'messages': messages.length, 'type': typeof messages});

    for (var msg in messages) {
      console.log('called');
      this.renderMessage(msg);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // var $ele = $(<span></span>);
    $(MessageView.render(message)).appendTo($chats);
    console.log(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};