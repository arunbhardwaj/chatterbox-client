// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('submit', RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    Rooms._updateList(RoomsView.$select);


  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var room = RoomsView.$select.val();
    MessagesView.derenderRoom(room);
    MessagesView.render(room);
  },

  handleClick: function(event) {
    // TODO: Make this function actually send a room to the Parse API.
    // TODO: Handle the user clicking the "Add Room" button.
    // Rooms._addRoom();
  }

};
