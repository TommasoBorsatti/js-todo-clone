
// definisco l'oggetto con gli elementi li di partenza.

var activities = [
"Connettersi alla classe Boolean alle 9:30",
"Pranzo alle 13:15",
"Fare l'esercizio sulla To Do list (sperando di non cannarlo): ADESSO"
];

// In un ciclo for definisco templateItem assegnando il li di template e clonandolo n volte quante è lungo l array delle attività.
// a ogni clone vado a iniettare gli indici dell array activities.
// Uso prepend in modo da non sovrascrivere le attività, ma da aggiungerle in modo consequenziale come primo elemento di li.
// Seleziono l UL to-do e ci aggiungo con append l insieme dei li clonati (templateItem)
for (var i = 0; i < activities.length; i++) {

  var templateItem = $(".template > li").clone();
  templateItem.prepend(activities[i]);
  $(".to-do").append(templateItem);
}
