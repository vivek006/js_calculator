

let input_1 = '';
let input_2 = '';
let operator = '';
let total = '';

jQuery(document).ready(function() {

    jQuery('.input_enter').on('click', function(e) {

    	if(jQuery(this).val() == 'AC'){
    		input_1 = input_2 = operator = total = '';
    		$('.bind_value').val('');
    		$('.bind_value2').val('');
    		return;
    	}
     	
    	display_value(jQuery(this).val());
    	flag_input(jQuery(this).val());

    });

    function display_value(num,refresh = 0) {
    	var new_val = '';

    	console.log('refresh : '+ refresh);

    	if(refresh == 1){
    		$('.bind_value').val(num);
    		return;
    	}

    	if($('.bind_value').val()){
    		new_val = $('.bind_value').val();
    		new_val = new_val+num;

    		$('.bind_value').val(new_val);
    	}else{
    		console.log(num);
    		total = 0;
    		$('.bind_value').val(num);
    	}
	}

	function flag_input(num) {

		var pre_val = $('.bind_value2').val() + num;

		if (isNaN(num)){
			if (input_1 === '') {
				input_1 = parseFloat(pre_val);
			} else {
				input_2 = parseFloat(pre_val);
			}
			pre_val = '';
			run_operator(num);
		}

		$('.bind_value2').val(pre_val);
	}

	function run_operator(op) {


	if (operator === '') {
		operator = op;
		
	} else {
		switch (operator) {
			case '+':
				total = +input_1 + +input_2;
			break;
			case '-':
				total = +input_1 - +input_2;
			break;
			case 'X':
				total = +input_1 * +input_2;
			break;
			default:
				
			break;
		}

		input_1 = total;
		input_2 = '';
		operator = op;
		if(op === '='){
			operator = '';
			display_value(total,1);
		}
	}
}



});