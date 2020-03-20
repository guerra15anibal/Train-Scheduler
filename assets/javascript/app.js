// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBitabwyS0x_NkJvVreF1ADkfi_G3eTIIQ",
  authDomain: "train-hw-876cc.firebaseapp.com",
  databaseURL: "https://train-hw-876cc.firebaseio.com",
  projectId: "train-hw-876cc",
  storageBucket: "train-hw-876cc.appspot.com",
  messagingSenderId: "819351940808",
  appId: "1:819351940808:web:b7a9b0218601f92cad7ffd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database();

//Vars
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = 0;
var nextArrival = 0;
var minutesAway = 0;

$("#submit").on("click", function(event) {
  event.preventDefauld();

  trainName = $("nameInput")
    .val()
    .trim();
  destination = $("destinationInput")
    .val()
    .trim();
  firstTrainTime = $("trainTimeInput")
    .val()
    .trim();
  frequency = $("frequencyInput")
    .val()
    .trim();

  dataRef.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dateadded: firebase.database.Servervalue.TIMESTAMP
  });
});

dataRef.ref().on("child_added", function(thigs) {
  console.log(thing.val().trainName);
});
