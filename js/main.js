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

                    // funzione per intervallo 'nextSlide'di 2 secondi
    //setInterval(function(){
        //nextSlide();
    //}, 2000);
                        //AIUTATO DA NIKOLAS
                    // funzione che termina dopo 10 secondi
    var secondiMax = 0;
    var interval = setInterval(function(){ //Setto una variabile che "contiene" l'interval
        nextSlide();
        secondiMax += 2000; //Incremento di 2000 ad ogni giro perchè l'interval gira ogni 2 secondi
        if (secondiMax == 10000) {
        clearInterval(interval); //fermo l'interval con la variabile che lo contiene
        }
    }, 2000);
                //si ferma quando si preme una freccia (.prev .next)
    //$('.prev , .next').click(function(){
        //clearInterval(interval);

    //});
                // si ferma quando si passa col puntatore nell'immagine
    $('.images').mouseenter(function(){
        clearInterval(interval);
    });
    $('.images').mouseeleave(function(){ // non sono riuscito a far ripartire le slide...


    });


});
