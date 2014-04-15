if (Meteor.isClient) {
  var _isTrackingTime = false;
  var _isTrackingTimeListeners = new Deps.Dependency();

  ///
  /// Properties
  ///
  isTrackingTime = function() {
    _isTrackingTimeListeners.depend();
    return _isTrackingTime;
  }

  setTrackingTime = function(isTrackingTime) {
    _isTrackingTime = isTrackingTime;
    _isTrackingTimeListeners.changed();
  }

  toggleTrackingTime = function() {
    setTrackingTime(!isTrackingTime());
  }

  ///
  /// Return the elapsed time
  ///
  Template.timeTrackerForm.elapsedTime = function() {
    return isTrackingTime() ? 'Tracking time...' : 'Stopped';
  };
  
  /**
   * @return label for the start/stop time tracking button
   */
  Template.timeTrackerForm.trackingButtonLabel = function() {
    return isTrackingTime() ? 'Stop' : 'Start';
  }

  ///
  /// Events
  ///
  Template.timeTrackerForm.events({
    ///
    /// Handle the "click on button" event
    ///
    'click button#btnToggleTrackingStatus': function() {
      toggleTrackingTime();
    }
  });

}

if (Meteor.isServer) {
}

/*
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to time-tracker.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/