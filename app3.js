// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


//Require https module
const https = require ('https');
const username = "nathanielasfaw";



//function to print message to console
function printMessage (username, badgeCount, points) {
  const message = '${username} has ${badgeCount} badges and ${points} points in  javaScript.;'
  
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
  console.dir(profile);
  //Print the data
})
  
});


/*
This is just to parse the JSON obj and see what we got inside it. As you can see 
(run the program), we're getting just the number of pts. Now we need to print everything
to it on the next part. 
*/