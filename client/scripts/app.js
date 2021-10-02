// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // imports methods
    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(() => {
      App.fetch(() => {
        MessagesView.render();
        RoomsView.render();
      });

    }, 1000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // TODO: for some reason, it doesn't fetch from the server sometimes
      // and the only way to fix that hiccup is to log the data?
      // console.log(data);


      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      if (data && data.length) {
        for (var obj of data) {
          Messages._store(obj);
        }
      }
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
