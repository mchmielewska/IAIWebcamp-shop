(function( $ ){
	$.customSelect = function(options){
		if(typeof options.identifier === "undefined" || options.identifier == ""){
			options.identifier = Math.floor((Math.random() * 8645));
		}
	
		$(options.selector).after(
			"<div id='jqcs_s_"+options.identifier+"' class='jqcs_select "+options.cssClass+"'>"+
				"<div class='jqcs_value'><p class='jqcs_placeholder'>"+options.placeholder+"</p></div>"+
				"<div class='jqcs_arrow'></div>"+
			"</div>"+
			"<div id='jqcs_o_"+options.identifier+"' class='jqcs_options'></div>"
		);
		
		$('#jqcs_s_'+options.identifier+' .jqcs_arrow').width($('#jqcs_s_'+options.identifier).height());
		
		
		for(var i = 0; i < options.options.length; i++){
			var currenthtml = $('#jqcs_o_'+options.identifier).html();
			var template = options.template;
			
			for(var j = 0; j < options.options[i].length; j++){
				var regex = new RegExp("\\$"+j, "g");
				template = template.replace(regex, options.options[i][j]);
			}
										
			$('#jqcs_o_'+options.identifier).html(currenthtml + template);
		}
		
		$('#jqcs_s_'+options.identifier).click(function(e){
			e.stopPropagation();
			if($('#jqcs_o_'+options.identifier).css('display') == "block"){
				$('#jqcs_o_'+options.identifier).slideUp();
				$($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).removeClass('rotated');
			}else{
				$('#jqcs_o_'+options.identifier).slideDown();
				$($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).addClass('rotated');
			}
		});
		
		$('#jqcs_o_'+options.identifier+' .jqcs_option').click(function(e){
			$('input#sizeSelect')[0].value = $(this).data('select-value');
			$($('#jqcs_s_'+options.identifier+' .jqcs_value')[0]).html(this.outerHTML);
		});
		
		$(window).click(function(e){
			$('#jqcs_o_'+options.identifier).slideUp();
			$($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).removeClass('rotated');
		});
	}
})( jQuery );


const sizeSelect = document.getElementById("sizeSelect");
sizeSelect.value = '';

(function($){
	$.customSelect({
		identifier: 'select',
		selector: '#sizeSelect',
		value: '',
		placeholder: 'Wybierz romiar',
		options: [
			['36', 'red.png', 'Rozmiar 36 | Niedostępne', 'notavailable'],
			['37', 'green.png', 'Rozmiar 37 | Dostępne', 'available'],
			['38', 'green.png', 'Rozmiar 38 | Dostępne', 'available'],
			['39', 'red.png', 'Rozmiar 39 | Niedostępne', 'notavailable'],
			['40', 'green.png', 'Rozmiar 40 | Dostępne', 'available'],
			['41', 'red.png', 'Rozmiar 41 | Niedostępne', 'notavailable'],
		],
		template: "<div class='jqcs_option' data-select-value='$0 $3' style='background-image:url(../assets/$1);'>$2</div>"
	});
})(jQuery);
