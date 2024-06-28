
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
	
	$('.openTab').click(function(){

		//e.preventDefault();		
		console.log('open');

		openTap(
			$(this).children().first().attr("id"), 
			$(this), 
			$(this).children().first().attr("color")
			);
	
	});

	$(".closeTab").on({

		click:function(){

			closeTap($(this));
			event.stopImmediatePropagation();
		},

		mouseenter:function(){

			$(this).children().first().attr("class","fa fa-circle");		
			
		},
		mouseleave:function(){

			$(this).children().first().attr("class","fa fa-times");		
			
		}

	});

	$("#newTab").click(function () {
		newTab();
	});


	$("#defaultOpen").click(); 

});