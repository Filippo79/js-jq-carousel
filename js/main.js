$(document).ready(function() {

    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva


    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {// l'ultima slide attiva

            $('.images img.active').removeClass('active');// rimuovi la classe active
            $('.images img.first').addClass('active');//aggiungi la classe acitve ripartendo da first'la prima


            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // (Rimuovo l'active) Variabile images img.active
            var prossimaImg = $('.images img.active').next();//variabile 'images img.active'Next=successiva slide

            imgAttiva.removeClass('active');//rimuovo la classe 'active '
            prossimaImg.addClass('active');//aggiungo la classe ' active'

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimoPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimoPallino.addClass('active');
        }
    }

    $('.prev').click(prevSlide);// richiamo funzione per freccia sinistra

    function prevSlide() {//funzione per far scorrere a sinistra le slide
        if ( $('.images img.active').hasClass('last') ) {// se l'ultima slide active 'last '

            $('.images img.active').removeClass('active');// rimuovi la classe 'active'
            $('.images img.first').addClass('active');// aggiungi la classe 'active'

            //pallini !!!! ma non vanno in direzione della freccia
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');



        }else {
            var imgAttiva = $('.images img.active');// (Rimuovo l'active) Variabile images img.active
            var prossimaImg = $('.images img.active').prev();//variabile 'images img.active'Next=successiva slide

            imgAttiva.removeClass('active');//rimuovo la classe 'active '
            prossimaImg.addClass('active');//aggiungo la classe ' active'

            //pallini !!!! ma non vanno in direzione della freccia
            var pallinoAttivo = $('.slider-nav i.active'); // (Rimuovo l'active) variabile slider-nav i.active
            var prossimoPallino = $('.slider-nav i.active').prev();//variabile 'slider-nav i.active' next= pallini successivo

            pallinoAttivo.removeClass('active');//rimuovo la classe
            prossimoPallino.addClass('active');//aggiungo la classe
        }
    }




    var secondiMax = 0;
    setInterval(function(){
        nextSlide();
        if (secondiMax == 10000) {
            clearInterval(nextSlide);
        }

    }, 2000);




});
