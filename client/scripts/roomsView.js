// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    Rooms._updateList(RoomsView.$select);


  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    var $option = $('<option>').val(roomName).text(roomName);
    RoomsView.$select.append($option);
    MessagesView.derenderRoom(roomName);
    MessagesView.render(roomName);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var room = RoomsView.$select.val();
    RoomsView.renderRoom(room);
  },

  handleClick: function(event) {
    // TODO: Make this function actually send a room to the Parse API.
    // TODO: Handle the user clicking the "Add Room" button.
    var roomName = prompt('Add a room');
    if (roomName) {
      RoomsView.renderRoom(roomName);
    }

  }

};
