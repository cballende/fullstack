
/* Selector for set something*/

/*
$("#editFolder-nav-tabs li:last" ).child("a:first").attr("onclick","'agregar_NewGeneracion('"+(++gen)+ "');'");
		
$("#descripcionEdit"+s+" input" ).each(function(index){
	$(this).attr("name",$(this).attr("name")+s);
	//alert($(this).attr("name"));
});

$("#descripcionEdit"+s+" div" ).each(function(index){
	$(this).attr("id",$(this).attr("id")+s);
	//alert($(this).attr("name"));
});
*/

/*
	Page Events 
*/

$(document).ready(function(){

	/* ---------- Submenu  ---------- */
	
	$('.openTab').click(function(e){

		//e.preventDefault();
		console.log('Ingresa');
		console.log($(this));

		//$(this).parent().find('ul').slideToggle();
		openTap($(this).children().first().html(), $(this), $(this).attr("color"));
	
	});

	$(".closeTab").click(function(e){
		closeTap($(this).prev().html(), $(this));
		
	});

	$("#defaultOpen").click(); 

});