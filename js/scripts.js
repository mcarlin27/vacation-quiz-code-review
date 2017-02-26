// Business (or back-end) logic:
var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
   event.preventDefault();

   var size = parseInt($("#size").val());
   var drink = parseInt($("#drink").val());
   var coffee = parseInt($("input:radio[name=coffee]:checked").val());
   var flavor = parseInt($("#flavor").val());
   var time = parseInt($("#time").val());

   var result = add(size, drink, coffee, flavor, time);

   if (result >=5 && <=9) {
     $("#ethiopia").hide();
     $("#honduras").hide();
     $("#vietnam").hide();
     $("#hawaii").show();
   } else if (result >=10 && <=14) {
     $("#hawaii").hide();
     $("#honduras").hide();
     $("#vietnam").hide();
     $("#ethiopia").show();
   } else if (result >=15 && <=18) {
     $("#hawaii").hide();
     $("#ethiopia").hide();
     $("#vietnam").hide();
     $("#honduras").show();
   } else if (result === 19 || result === 20) {
     $("#hawaii").hide();
     $("#ethiopia").hide();
     $("#honduras").hide();
     $("#vietnam").show();
   }



  $(".clickable").click(function() {
    $("#ethiopia-hidden").toggle();
    $("#ethiopia-showing").toggle();
  });

  $("#ethiopia-click").click(function() {
      $("img").toggleClass("ethiopia-image");
  });
});
