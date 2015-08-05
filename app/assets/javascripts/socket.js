$(document).ready( function() {
  var socket = io('localhost:5001');

  socket.on('user-created', function(user) {
    alert('Welcome ' + user.role);
  });

  $.ajax({url: "new_direction",
         type: "PATCH",
         dataType: "json",
         data: { direction: "1"},
         complete: function() {},
         success: function(data, textStatus, xhr) {},
         error: function() { alert("Ajax error") } 
  });
});
