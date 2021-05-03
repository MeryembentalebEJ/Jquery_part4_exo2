var counter = 20;

$(document).ready(function(){
    $('#btn').click(function(){
        counter++;
        $('input').val(counter);
    });
    $('#btn1').click(function(){
        counter--;
        $('input').val(counter);
    });
  });