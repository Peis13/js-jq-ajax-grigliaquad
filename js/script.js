$(document).ready(
  function() {
    generaQuadrati();

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
            quadratoCliccato.removeClass('giallo verde');

            var classe;
            if (numeroRicevuto > 5) {
              classe = 'verde';
            } else {
              classe = 'giallo';
            }
            quadratoCliccato.addClass(classe);
          },
          error: function(risultato, stato, errore) {
            alert('Errore: ' + errore);
          }
        }
      );
    });

    // Genera i quadrati per la griglia
    function generaQuadrati() {
      var source = $("#square-template").html();
      var template = Handlebars.compile(source);
      var html = template({});

      for (var i = 0; i < 36; i++) {
        $('.container').append(html);
      }
    }
  }
);
