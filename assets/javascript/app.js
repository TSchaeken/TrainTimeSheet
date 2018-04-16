// Initialize Firebase
var config = {
  apiKey: "AIzaSyAf0eG3wQgcc59Wa3JaCQhwgpHIM_I11EY",
  authDomain: "literallythebestproject.firebaseapp.com",
  databaseURL: "https://literallythebestproject.firebaseio.com",
  projectId: "literallythebestproject",
  storageBucket: "literallythebestproject.appspot.com",
  messagingSenderId: "550980575030"
};
firebase.initializeApp(config);
const database = firebase.database();

$(".submit-form").on("click", "#Submit-Btn", function(event) {
  event.preventDefault();
  console.log("setting!")
  var trainName = $("#train-name").val();
  var trainDestination = $("#train-destination").val();
  var trainStart = $("#train-start").val();
  var trainInterval = $("#train-interval").val();
  var trainNotes = $("#train-notes").val();
  set(trainName, trainDestination, trainStart, trainInterval, trainNotes)
});

function set(name, destination, start, interval, note) {
  database.ref().set({
    Name: name,
    Destination: destination,
    StartTime: start,
    intervalTime: interval,
    Note: note
  });
}
