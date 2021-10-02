// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
  $selected: $('#rooms select'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // imports methods
    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(() => {
      App.fetch(() => {
        MessagesView.render(App.$selected.val());
        RoomsView.render();
        App.stopSpinner();
      });
    }, 1000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
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
