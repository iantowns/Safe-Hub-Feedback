var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : process.env.PG_HOST,
        user     : process.env.PG_USERNAME,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_NAME
      }
});

// Submit a Feedback submission to the database.
var submitFeedback = function() {
    // This method should take, as arguments, whichever data points will
    // be committed to the database, as well as a callback function
    // that meets the signature: function(err, id).
    //
    // It should execute the callback function upon a successful commit.
}