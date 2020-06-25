$(document).ready(
  function() {

    // Ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
    // Se è <= 5 il quadrato diventa giallo,
    // se è > di 5 il quadrato diventa verde.
    // Il numero ottenuto appare al centro del quadrato
    $(document).on('click', '.quadrato', function() {

      var quadratoCliccato = $(this);

      $.ajax(
        {
          url:'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function(data) {
            var numeroRicevuto = data.response;
            quadratoCliccato.children().css(
              {
                'font-size':'50px',
                'font-weight':'bold',
                'color':'darkblue'
              }
            ).text(numeroRicevuto);

            if (numeroRicevuto > 5) {
              quadratoCliccato.removeClass('giallo');
              quadratoCliccato.addClass('verde');

            } else {
              quadratoCliccato.removeClass('verde');
              quadratoCliccato.addClass('giallo');
            }
          },
          error: function(risultato, stato, errore) {
            alert('Errore: ' + errore);
          }
        }
      );
    });
  }
);
