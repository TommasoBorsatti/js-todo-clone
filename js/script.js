
// definisco l'oggetto con gli elementi li di partenza.

var activities = [
"Connettersi alla classe Boolean alle 9:30",
"Pranzo alle 13:15",
"Fare l'esercizio sulla To Do list (sperando di non cannarlo): ADESSO"
];


for (var i = 0; i < activities.length; i++) {

  var templateItem = $(".template-item").clone();
  templateItem.prepend(activities[i]);
  $(".to-do").append(templateItem);
}
