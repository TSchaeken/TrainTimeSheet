// Initialize Firebase
const config = {
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
  set();
  table();
   console.log((parseInt(moment().format("HH")*60)+parseInt(moment().format("mm")))%22)
});

function set() {
  const key = database.ref().push().key;
  const trainData = {
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
  const row = $("<tr>");
  var name = $("<td>").text($("#train-name").val());
  var dest = $("<td>").text($("#train-destination").val());
  var next = $("<td>").text(parseInt($("#train-interval").val())-((parseInt(moment().format("HH")*60) + parseInt(moment().format("mm")))%parseInt($("#train-interval").val())));
  var start = $("<td>").text($("#train-start").val());
  var notes = $("<td>").text($("#train-notes").val());
  var int = $("<td>").text($("#train-interval").val());
  row.append(name, dest, start, int, next, notes)
  $("#tbody").prepend(row)
  console.log(next)
}
