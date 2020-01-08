$(document).ready(function() {
 //
 // add your jQuery code here
$("#button1").on("mouseenter", function() {
    $("#button1").removeClass("makeRed").addClass("makeBorder");
    });
$("#button1").on("mouseleave", function() {
    $("#button1").removeClass("makeBorder").addClass("makeRed");
    });
$("#button1").on("click", function() {
    $('#para1').toggle(400);
    });
$("#button2").on("mouseenter", function() {
    $("#button2").removeClass("makeRed").addClass("makeBorder");
    });
$("#button2").on("mouseleave", function() {
    $("#button2").removeClass("makeBorder").addClass("makeRed");
    });
$("#button2").on("click", function() {
    $('#para2').fadeToggle(400);
    });
}); 