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
  //This sees if the block of code works if it doesn't it prints out an error message.
  try {
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
//Throw error message to the console of the user's input doesn't exist in the database
request.on('error', error => console.error(`Problem with request: ${error.message}`));
}
//The try method endes right here (after catch). It's actually pretty cool!
catch (error) {
  console.error(error.message);
}
}
const users = process.argv.slice(2);
users.forEach(username => {
  getProfile(username);
});


/*This step is about the try/catch error handler and the request.on('error')
look the comments to get more sense out of it. And try it out
*/

