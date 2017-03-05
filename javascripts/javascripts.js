jQuery(document).ready(function($){
  $("#menu-topo-principal .itens a").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 150}, 1000);
  });

  window.onscroll = function() {scrollMenuFixo()};

  function scrollMenuFixo() {
     if ($(window).scrollTop() > 0){
      $(".itens .seta-identificacao").hide();
      $("#item-1 .seta-identificacao").show();
    }
    if ($(window).scrollTop() > 350){
      $(".itens .seta-identificacao").hide();
      $("#item-2 .seta-identificacao").show();
    }
    if ($(window).scrollTop() > 850){
      $(".itens .seta-identificacao").hide();
      $("#item-3 .seta-identificacao").show();
    }
    if ($(window).scrollTop() > 1350){
      $(".itens .seta-identificacao").hide();
      $("#item-4 .seta-identificacao").show();
    }
    if ($(window).scrollTop() > 1850){
      $(".itens .seta-identificacao").hide();
      $("#item-5 .seta-identificacao").show();
    }
  }
});