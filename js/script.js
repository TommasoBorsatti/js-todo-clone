
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

// IMPOSTARE L'AGGIUNTA DI NUOVI ELEMENTI ALLA LISTA
// Uso la funzione keydown e la metto in ascolto su un evento nel campo Input #add-activity;
//Con event.which faccio in modo di mettere un controllo if:
// Se il tasto premuto è il 13, ossia invio, allora aggiungo il testo dell'input.
// Il testo è salvato in una variabile testo identificata con il metodo val() applicato al $this (ossia sempre il campo input #add-activity)
// .val() prende il valore nell input e lo assegna a Testo.
// Successivamente faccio un controllo if in cui, se il testo inserito non è nullo,
// Uso il sistema di prima per fare un clone del Template item cui aggiungo Testo con prepend.
//Infine lo aggiungo con append all UL .TO-DO-LIST

$("#add-activity").keydown(function(event){

  if (event.which == 13) {

    var testo = $(this).val();

    if (testo != "") {

      var templateItem = $(".template > li").clone();
      templateItem.prepend(testo);
      $(".to-do").append(templateItem);
      $(this).val("");
    }
  }

});

// AGGIUNGO UNA FUNZIONE PER RIMUOVERE UN'ATTIVITA CLICCANDO SULLA X

$(".to-do").on("click", ".delete-item", function(){
  $(this).parent("li").remove()
});
