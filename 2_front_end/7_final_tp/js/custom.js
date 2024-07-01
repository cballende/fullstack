
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
	----------Page Const -------------
*/
/* header */
const titleTab="Kwik-E-Mart";
const title="DIGITAL";
const shop="Kwik-E-Mart";
const legend='"Since 1945 against Capital, every year more poor"';
const aut=" Jea Pepe."
/* social media */
const tabs=["HOME","SHOP","CONTACT"];
/* footer */
const legendF="The first Springfield's digital supermarket";
const add="742 EverGreen Terrace";
const zip="(01101)";
const city="Springfield";
const pho="(413)456-5221";
const emailCont="info@Kwik-E-Mart.com";
/* social media */
const lk="";
const tw="";
const ins="";

/* Page suit */

$(document).ready(function(){

	$("#title_pg").html(titleTab);
	$("#title").html(title);
	$("#shop").html(shop);
	$("#legend span").eq(0).html(legend);
	$("#legend span").eq(1).html(aut);
  
	$(".tabTitle").each(function(index){
		$(this).html(tabs[index]);
		//alert($(this).attr("name"));
	});


	//$("#title_tab").html(titleTab);
	$("#shop_F").html(shop);
	$("#legend_F").html(legendF);
	$("#add").html(add);
	$("#zip").html(zip);
	$("#city").html(city);
	$("#pho").attr("href","tel:+"+pho).html(pho);
	$("#emailCont").html(emailCont);

});


/*
	----------Page Events --------------
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