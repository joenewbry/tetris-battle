$(document).ready( function() {
  var socket = io('localhost:5001');

  socket.on('user-created', function(user) {
    alert('Welcome ' + user.role);
  });
});
