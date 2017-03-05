/*------------------------------
 * Copyright 2015 Willians Martins
 * http://www.williansmartins.com
 *
 * 
------------------------------*/

$(document).ready(function() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-3749716-2', 'auto');
	ga('send', 'pageview');
	
	ga('send', 'event', 'entrou_na_pagina', $("body").attr('data-page'), 'entrou mesmo');

	$("a").click(function(e){
		// e.preventDefault();
		ga('send', 'event', 'click', $(this).attr('href') , '');
		// alert($(this).attr('href'));
	});

	$("input,textarea").jqBootstrapValidation({
            preventSubmit: true,
            
            submitSuccess: function($form, event) {
                event.preventDefault(); // prevent default submit behaviour
                // get values from FORM
                var firstname = $("input#firstname").val();
                var phone = $("input#phone").val();
                var email = $("input#email").val();
                var message = $("textarea#message").val();
    
                $.ajax({
                    url: "/send.php",
                    type: "POST",
                    data: {
                        firstname: firstname,
                        phone: phone,
                        email: email,
                        message: message
                    },
                    cache: false,
                    success: function() {
                        // Success message
                        $('.contact-alert').html("<div class='alert alert-success'>");
                        $('.contact-alert > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'><i class='fa fa-times'></i></button><strong>Mensagem enviada com sucesso.</strong></div>");
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                    error: function() {
                        // Fail message
                        $('.contact-alert').html("<div class='alert alert-danger'>");
                        $('.contact-alert > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'><i class='fa fa-times'></i></button><strong>Ixi, acho que ocorreu um erro no servidor. Por favor, tente mais tarde.</strong></div>");
                        //clear all fields
                        //$('#contactForm').trigger("reset");
                    },
                })
            }
    });

	terminou=false;	

	var $gallery = $('<div>').hide().appendTo('body');
	var imagensPhotoshop = [
				'image/portifolio/photoshop/imagem1.jpg', 
				'image/portifolio/photoshop/imagem2.jpg', 
				'image/portifolio/photoshop/imagem3.jpg', 
				'image/portifolio/photoshop/imagem4.jpg', 
				'image/portifolio/photoshop/imagem5.jpg', 
				'image/portifolio/photoshop/imagem6.jpg', 
				'image/portifolio/photoshop/imagem7.jpg', 
				'image/portifolio/photoshop/imagem8.jpg', 
				'image/portifolio/photoshop/imagem9.jpg', 
				];

	var titulosPhotoshop = [
				'', 
				'', 
				'',
				'',
				'',
				'',
				'',
				'',
				''
				];

	var imagensvetorial = [
				'image/portifolio/vetor/imagem1.jpg', 
				'image/portifolio/vetor/imagem2.jpg', 
				'image/portifolio/vetor/imagem3.jpg', 
				'image/portifolio/vetor/imagem4.jpg', 
				'image/portifolio/vetor/imagem5.jpg', 
				'image/portifolio/vetor/imagem6.jpg', 
				'image/portifolio/vetor/imagem7.jpg', 
				'image/portifolio/vetor/imagem8.jpg', 
				'image/portifolio/vetor/imagem9.jpg', 
				'image/portifolio/vetor/imagem10.jpg', 
				'image/portifolio/vetor/imagem11.jpg', 
				'image/portifolio/vetor/imagem12.jpg', 
				'image/portifolio/vetor/imagem14.jpg', 
				'image/portifolio/vetor/imagem15.jpg', 
				'image/portifolio/vetor/imagem16.jpg', 
				'image/portifolio/vetor/imagem17.jpg', 
				'image/portifolio/vetor/imagem18.jpg', 
				'image/portifolio/vetor/imagem19.jpg', 
				'image/portifolio/vetor/imagem20.jpg', 
				'image/portifolio/vetor/imagem21.jpg', 
				'image/portifolio/vetor/imagem22.jpg', 
				];

	var titulosvetorial = [
				'', 
				'', 
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				];

	var imagenssite = [
				'image/portifolio/site/acqualife.jpg', 
				'image/portifolio/site/ane.jpg', 
				'image/portifolio/site/blissnet.jpg', 
				'image/portifolio/site/memphis.jpg', 
				'image/portifolio/site/odontologia.jpg'
				];

	var titulossite = [
				'', 
				'', 
				'',
				'',
				''
				];				

	var imagens3d = [
				'image/portifolio/3d/imagem1.jpg', 
				'image/portifolio/3d/imagem2.jpg', 
				'image/portifolio/3d/imagem5.jpg', 
				'image/portifolio/3d/imagem6.jpg', 
				'image/portifolio/3d/imagem7.jpg', 
				'image/portifolio/3d/imagem8.jpg', 
				'image/portifolio/3d/imagem9.jpg', 
				'image/portifolio/3d/imagem10.jpg', 
				'image/portifolio/3d/imagem11.jpg', 
				'image/portifolio/3d/imagem12.jpg', 
				'image/portifolio/3d/imagem14.jpg', 
				'image/portifolio/3d/imagem15.jpg', 
				'image/portifolio/3d/imagem16.jpg', 
				'image/portifolio/3d/imagem17.jpg', 
				'image/portifolio/3d/imagem18.jpg', 
				'image/portifolio/3d/imagem19.jpg', 
				'image/portifolio/3d/imagem20.jpg', 
				'image/portifolio/3d/imagem21.jpg', 
				'image/portifolio/3d/imagem22.jpg', 
				'image/portifolio/3d/imagem23.jpg'
				];
	
	var titulos3d = [
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				'', 
				];


	var imagenssistema = [
				'image/portifolio/sistema/sistema_java.jpg', 
				'image/portifolio/sistema/sistema_sanear.jpg'
				];

	var titulossistema = [
				'',
				''
				];	

	$.each(imagensPhotoshop, function(i){
		$('<a class="photoshop" oncli href="'+imagensPhotoshop[i]+'" title="'+titulosPhotoshop[i]+'"></a>').appendTo($gallery);
	});

	$.each(imagenssistema, function(i){
		$('<a class="sistema" href="'+imagenssistema[i]+'" title="'+titulossistema[i]+'"></a>').appendTo($gallery);
	});

	$.each(imagensvetorial, function(i){
		$('<a class="vetorial" href="'+imagensvetorial[i]+'" title="'+titulosvetorial[i]+'"></a>').appendTo($gallery);
	});

	$.each(imagens3d, function(i){
		$('<a class="3d" href="'+imagens3d[i]+'" title="'+titulos3d[i]+'"></a>').appendTo($gallery);
	});

	$.each(imagens3d, function(i){
		$('<a class="3d" href="'+imagens3d[i]+'" title="'+titulos3d[i]+'"></a>').appendTo($gallery);
	});

	

	$('#exemplos-bitmap, .exemplos-bitmap').click(function(e){
		e.preventDefault();
		$gallery.find('a.photoshop').colorbox({rel:'photoshop', open:true});	
	});

	$('#exemplos-sistema, .exemplos-sistema').click(function(e){
		e.preventDefault();
		$gallery.find('a.sistema').colorbox({rel:'sistema', open:true});	
	});

	$('#exemplos-vetorial, .exemplos-vetorial').click(function(e){
		e.preventDefault();
		$gallery.find('a.vetorial').colorbox({rel:'vetorial', open:true});	
	});

	$('#exemplos-site, .exemplos-site').click(function(e){
		e.preventDefault();
		$gallery.find('a.site').colorbox({rel:'site', open:true});	
	});

	$('#exemplos-3d, .exemplos-3d').click(function(e){
		e.preventDefault();
		$gallery.find('a.3d').colorbox({rel:'3d', open:true});	
	});

	$('.sorteio .btn-sortear').click(function(e){
		e.preventDefault();
		terminou = false;
		
		//capturar os nomes vindo do textarea
		var nomes_val = $(".sorteio #textos").val()

		//criar um vetor 
		var nomes_array = [];

		//adicionar todos os nomes no vetor
		$.each(nomes_val.split(/\n/), function (i, nome) {     
		      if($.trim(nome) != ""){
		          nomes_array.push(nome.toUpperCase());
		      }        
		});

		//gerar um número aleatório com no máximo a quantidade de nomes
		var numero = Math.floor(Math.random()*nomes_array.length);

		//apresentar a quantidade de nomes
		console.error(numero);

		//apresentar o nome da posiçao do vetor, baseada no numero gerado
		console.info(nomes_array[numero]);
		// console.info(nomes_val);

// debugger;
		$('.resultado').flightboard('destroy');
		$('.resultado').flightboard({
			messages: ['CAPTURANDO NOMES DIGITADOS', 
			'TOTAL DE PARTICIPANTES ' + nomes_array.length,
			'SORTEANDO UM DOS NOMES',
			$.trim( nomes_array[numero].toUpperCase())],
			maxLength: 30,
			afterFlip: endedFlip,
			shading: true,
			speed: 100,
			// repeat: false,
			lettersImage: 'flightBoardLarge.png',
			shadingImages: ['flightBoardHigh.png', 'flightBoardShad.png']
		});

		$('.resultado').flightboard('start');
	});

	// Iniciando a lib i18n
	  i18n.init({
	    fallbackLng: 'pt-BR' //fallback quando não definir linguagem
	    ,debug: true //debug do plugin
	    ,fixLng: true //preserva o cookie quando a linguagem for definida
	    ,load: 'current' //define a forma correta de declarar linguagens
	  },
	  
	  function(translation) {
	    $('[data-i18n]').i18n();
	    // var appName = translation('app.name');
	  });

	  // espanhol
	  $('#btn-es').on('click', function() {
	    i18n.setLng('es', {fixLng: true}, function(translation){
	      $('[data-i18n]').i18n();
	    });
	  });

	  // inglês
	  $('#btn-en').on('click', function() {
	    i18n.setLng('en-US', {fixLng: true}, function(translation){
	      	$('[data-i18n]').i18n();
	      	var $inputs = $(".form-control");
			$inputs.jqBootstrapValidation();
	    });
	  });

	  // português
	  $('#btn-pt').on('click', function() {
	    i18n.setLng('pt-BR', {fixLng: true}, function(translation){
	      	$('[data-i18n]').i18n();
	      	var $inputs = $(".form-control");
			$inputs.jqBootstrapValidation();
	    });
	  });

	i18n.setLng('en-US', {fixLng: true}, function(translation){
    	$('[data-i18n]').i18n();
    });

});

function endedFlip(current, next) { 
	console.info(terminou);
	if(current == "SORTEANDO UM DOS NOMES"){
    	terminou = true;
	}
	
	if(terminou){
    	$('.resultado').flightboard('stop');
	}
}


