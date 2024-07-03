
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
const pho="(413) 456-5221";
const emailCont="info@Kwik-E-Mart.com";
/* social media */
const lk="";
const tw="";
const ins="";
/* items */ 
// Json {"name":"","brand":"","code":"","price":"","stock":""}
const items={"inventory":[
													{"name":"Hotdog","brand":"Crosty","code":"1","price":"10","stock":"100"},
													{"name":"Dun","brand":"Dunky","code":"2","price":"12","stock":"10"},
													{"name":"Ticket","brand":"Loto6","code":"3","price":"5","stock":"12"},
													{"name":"Icecrem","brand":"Stimpy","code":"4","price":"20","stock":"100"},]};
//const obj=JSON.parse(items);
console.log(items.inventory);
/* Page suit */

$(document).ready(function(){

	/* Main data */
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
	$(".add").html(add);
	$(".zip").html(zip);
	$(".city").html(city);
	$(".pho").attr("href","tel:+"+pho).html(pho);
	$(".emailCont").html(emailCont);

	/* data for table */
	
	items.inventory.each(function(index){
		let rw=$("#inventory tbody").children().clone();
		let item=this;

		rw.children().eq(0).attr("value",index);
		rw.children().eq(1).html(this.code);
		rw.children().eq(2).html(this.name);
		rw.children().eq(3).html(this.brand);
		rw.children().eq(4).html(this.price);
		rw.ccs("diplay","");
		$(this).html(tabs[index]);
		//alert($(this).attr("name"));
		$("#inventory tbody").append(rw);
	});

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