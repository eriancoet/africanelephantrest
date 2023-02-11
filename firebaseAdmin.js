const admin = require("firebase-admin");
const serviceAccount = require("./secrets.json");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myblog81-b89ea-default-rtdb.firebaseio.com"
});
