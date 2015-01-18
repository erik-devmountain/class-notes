$('#getUsers').on('click', function() {
  return $.ajax({
    method: 'GET', //HTTP request (in caps)
    url: 'http://repdrive.com/api/v1/users' //endpoint
  });
});

// C - Create  - POST
// R - Read    - GET
// U - Update  - PUT
// D - Destroy - DELETE

// POST, GET, PUT, DELETE are HTTP requests

//reqr.es/api/users

//https://www.reddit.com/r/javascript.json

// C - cross
// O - origin
// R - resource
// S - sharing

// <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>





















