// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // unique, not overwritable
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  // Add rooms
  add: (roomName, $selectTag) => {
    if (!Rooms._hasRoom(roomName)) {
      Rooms._data.add(roomName);
      var roomObj = {'room': roomName};
      $(RoomView.render(roomObj)).prependTo($selectTag);
    }
  },

  _getRooms: () => {
    return Rooms._data;
  },

  _hasRoom: (roomName) => {
    return Rooms._getRooms().has(roomName);
  },

  // Update the list of rooms to the View
  _updateList: ($selectTag) => {
    var messages = Messages._getAllMessages();
    for (let id in messages) {
      let room = messages[id].roomname;
      if (room !== null) {
        Rooms.add(room, $selectTag);
      }
    }
  },

  // Mark a room as selected
  // $("select.room-options").change(function(){
  //   // $("").children("option:selected").val();
  // });


};