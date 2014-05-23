(function( $ ){

	$(function() {
		$('#form1').each(function(){
			var form = $(this),
				btn1 = form.find('.btn_submit1');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn1.hasClass('disabled')){
						return false
					} else {
                        btn1.addClass('disabled')
					}
				} else {
                    btn1.removeClass('disabled')
				}
			},500);

			btn1.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
            type: 'POST',
            url: '/orders.json',
            data: $('#form1').serialize(),
            success: function () {

            }
          });
            $("#form1 #name").val("");
            $("#form1 #phone").val("");
            $("#form1 #date").val("");
            alert('Спасибо! Ваша заявка отправлена.');
				}
			});
			
		});
		
		
		$('#form2').each(function(){
			var form = $(this),
				btn2 = form.find('.btn_submit2');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn2.hasClass('disabled')){
						return false
					} else {
                        btn2.addClass('disabled')
					}
				} else {
                    btn2.removeClass('disabled')
				}
			},500);

			btn2.on ('click', function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					$.ajax({
            type: 'POST',
            url: '/orders.json',
            data: $('#form2').serialize(),
            success: function () {
            }
          });
            $("#form2 #name").val("");
            $("#form2 #phone").val("");
            $("#form2 #date").val("");
            alert('Спасибо! Ваша заявка отправлена.');
				}
			});
			
		});
		
	});

})( jQuery );