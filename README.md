Miglioriamo EpiBooks:
In questo esercizio lavorerai nuovamente sul tuo progetto EpiBooks, implementando funzionalità come lo state e le props per refactorare il codice e renderlo maggiormente riutilizzabile.

 1) Crea un componente SingleBook utilizzando una funzione. Questo componente dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json che hai ricevuto ieri).



2) Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.


3) [EXTRA] Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati 
solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).




4) Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.



5) Un click sulla copertina del libro dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente (potresti ad esempio utilizzare un bordo rosso).
