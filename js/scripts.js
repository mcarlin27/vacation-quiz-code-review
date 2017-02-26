// Business (or back-end) logic:
var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
   event.preventDefault();

   var size = parseInt($("#size").val());
   var drink = parseInt($("#drink").val());
   var coffee = parseInt($("input:radio[name=coffee]:checked").val());
   var flavor = parseInt($("#flavor").val());
   var time = parseInt($("#time").val());

   var result = add(size, drink, coffee, flavor, time);

   if (result >=5 && result <=9) {
     $("#ethiopia").hide();
     $("#honduras").hide();
     $("#vietnam").hide();
     $("#hawaii").show();
   } else if (result >=10 && result <=14) {
     $("#hawaii").hide();
     $("#honduras").hide();
     $("#vietnam").hide();
     $("#ethiopia").show();
   } else if (result >=15 && result <=18) {
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
 });
});
