// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


//Require https module
const https = require ('https');




//function to print message to console
function printMessage (username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badges and ${points} points in  javaScript`;
  
  console.log(message);
}

function getProfile (username) {
//Connect to the API url (https://teamtreehouse.com/$nathanielasfaw.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
                          
 let body = "";
  //Read the data
  response.on('data', data => {
body += data.toString();
  });
response.on('end', () => {
  //Parse the data
  const profile = JSON.parse(body);
  
  //Print the data
  printMessage(username, profile.badges.length, profile.points.JavaScript);
})
  
});

}
const users = process.argv.slice(2);
users.forEach(username => {
  getProfile(username);
}
  
);

/* In this step we just added process.argv for the user input. So now the user can lookup
any member of teamtreehouse. All the need to do is write *node app6.js username* username should be the user's
name they want to look up. It's pretty dope. */

/* One more step togo. Make the app throw out an error message if the username they looked up does not exist 
the database. */




