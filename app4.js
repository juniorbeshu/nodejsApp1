// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


//Require https module
const https = require ('https');
const username = "nathanielasfaw";



//function to print message to console
function printMessage (username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badges and ${points} points in  javaScript`;
  
  console.log(message);
}
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


/*This one is all done, but it's not dinamic yet. You have to set the var username yourself. 
Let's try and make it dinamic. */