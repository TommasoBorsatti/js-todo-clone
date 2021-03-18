
// PROVO A DEFINIIRE UNA FUNZIONE PER NON RIPETERE SEMPRE LA CLONAZIONE:
// Miracolo: ha funzionato XD

function clonaAggiungi(clone, aggiunta, posto){
  var templateItem = $(clone).clone();
  templateItem.prepend(aggiunta);
  $(posto).append(templateItem);
}


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

  // qui uso la funzione fatta ad hoc come prova
  clonaAggiungi(".template > li", activities[i], ".to-do");

}

//  QUESTO COMMENTATO ERA IL METODO ORIGINALE CORRETTO

//   var templateItem = $(".template > li").clone();
//   templateItem.prepend(activities[i]);
//   $(".to-do").append(templateItem);
// }

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

      // qui uso la funzione fatta ad hoc come prova
      clonaAggiungi(".template > li", testo, ".to-do" );
      $(this).val("");

      //  QUESTO COMMENTATO ERA IL METODO ORIGINALE CORRETTO

      // var templateItem = $(".template > li").clone();
      // templateItem.prepend(testo);
      // $(".to-do").append(templateItem);
      // $(this).val("");
    }
  }

});

// AGGIUNGO UNA FUNZIONE PER RIMUOVERE UN'ATTIVITA CLICCANDO SULLA X

// uso ON. per mettere in ascolto l'UL to - do al click;
// Il click deve avvenire sullo span .delete-item e triggera la funzione evento definita, prossima
// rimuovo con .remove() il genitore del this (ossia il LI che contiene lo SPAN su cui si è cliccato).
//In questo modo è possibile rimuovere anche elementi successivamente inseriti alla lista tramite l Input
// questo perché on click fa rimanere in ascolto un elemento anche dopo che la pagina è stata caricata e
// lo script di base eseguito.

$(".to-do").on("click", ".delete-item", function(){
  $(this).parent("li").remove()
});
