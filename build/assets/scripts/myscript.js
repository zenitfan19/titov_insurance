//Переключение табов

$(document).ready(function () { 
  var form_btn_counter = 0;
    $('.form-next-btn').click(function(event) {
        event.preventDefault(); 
        form_btn_counter++;
        if(form_btn_counter === 1)
        $('.insurance-form-progress-bar-green').css('width', '208px'); 
        else if(form_btn_counter === 2)
        $('.insurance-form-progress-bar-green').css('width', '100%').css('border-radius', '50px');
      });
});