// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


//Require https module
const https = require ('https');
const username = "nathanielasfaw";


//function to print message to console
function printMessage (username, badgeCount, points) {
  const message = `${username} has ${badgeCount} badges and ${points} points in  javaScript;`
  
  console.log(message);
}
printMessage(username, 200, 2000);
//Connect to the API url (https://teamtreehouse.com/$nathanielasfaw.json)

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
	//when inputing the url use " ` "(bakcticks) instead of " ' "(singlequots)
  console.dir(response.statusCode);
  //Read the data
  //Parse the data
  //Print the data
});

//Read the data
//Parse the data
//Print the data
