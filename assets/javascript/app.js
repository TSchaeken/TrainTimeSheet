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

// $(document).ready(function(){
//   database.ref().set({
//     item:""
//   });
// })

$(".submit-form").on("click", "#Submit-Btn", function(event) {
  event.preventDefault();
  set();

});

function set() {
  var key = database.ref().push().key;

  var trainData = {
    id: key,
    Name: $("#train-name").val(),
    Destination: $("#train-destination").val(),
    StartTime: $("#train-start").val(),
    intervalTime: $("#train-interval").val(),
    Note: $("#train-notes").val()
  };

  database.ref(key).set(trainData);
}

function table() {
  var row = $("<tr>")
}
