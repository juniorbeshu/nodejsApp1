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

/* We could have done it line by line like this

  getprofile("nathanielasfaw");
  getProfile("Chalkers"); 


But it's easier to store the names in an array and make a callback fun like below
 */ 
const users = ["Chalkers", "nathanielasfaw"];


//The comment right below this code is refering to this code
users.forEach(username => {
  getProfile(username);
}

);

/*
we can also write the above code as(since getProgile fun takes one parameter and
 forEach passes one in we can just pass it as below)

  users.foreach(getProfile);


*/


/*
In this step what we did was just add more people in an array. instead of just adding people and trying
to get info, we just created an array and did our job (like a for loop kinda thing)
*/




