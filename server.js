var http = require("http"); // Import Node.js core module

var a = require("firebase/app");
var b = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyAIJoxBkGBw5rv5GebUlWZqA_B0CbQtUbo",
  authDomain: "testproject-9b953.firebaseapp.com",
  databaseURL: "https://testproject-9b953-default-rtdb.firebaseio.com/",
  projectId: "testproject-9b953",
  storageBucket: "testproject-9b953.appspot.com",
  messagingSenderId: "38297805107",
  appId: "1:38297805107:web:51465844c6c734bdc11e46",
};

const firebaseConfig2 = {
  apiKey: "AIzaSyDZmb4Rgmr5vk9zDkjkhsLU3kV2LqSnl8M",
  authDomain: "dbtest-b5bc5.firebaseapp.com",
  databaseURL: "https://dbtest-b5bc5-default-rtdb.firebaseio.com/",
  projectId: "dbtest-b5bc5",
  storageBucket: "dbtest-b5bc5.appspot.com",
  messagingSenderId: "64730436103",
  appId: "1:64730436103:web:01e97513eed12abe3fd0a2",
};

const firebaseConfig3 = {
  apiKey: "AIzaSyBlBwbDzZYeme07xkd6LYr1VRdmZuYvTYg",
  authDomain: "food-database-ebcae.firebaseapp.com",
  databaseURL: "https://food-database-ebcae-default-rtdb.firebaseio.com",
  projectId: "food-database-ebcae",
  storageBucket: "food-database-ebcae.appspot.com",
  messagingSenderId: "185184958573",
  appId: "1:185184958573:web:2fd2e1c0ebd2ed9ffa6764"
};

const app = a.initializeApp(firebaseConfig3);

query(app);

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/test") {
    res.setHeader("Content-Type", "application/json");
    var data = JSON.stringify(["albedo", "aloy", "amber"]);

    res.end(data);
  } else {
    res.end("Invalid Request!");
  }
});

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5001 is running..");

async function query(app) {
  console.log("query");

  const db = b.getFirestore(app);
  //const col = b.collection(db, "food");
  const col = b.collection(db, "newChoices");
  const citySnapshot = await b.getDocs(col);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
}