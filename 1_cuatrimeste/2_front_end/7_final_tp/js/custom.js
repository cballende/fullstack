
/* Selector for set something*/


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

/* 
-----------------Global variables---------------------
*/
/* items */ 
// Json {"name":"","brand":"","code":"","price":"","stock":""}
const items={"inventory":[
													{"name":"Hotdog","brand":"Crosty","code":"2","price":"10","stock":"100"},
													{"name":"Dun","brand":"Dunky","code":"1","price":"12","stock":"10"},
													{"name":"Ticket","brand":"Loto6","code":"4","price":"5","stock":"12"},
													{"name":"Icecrem","brand":"Stimpy","code":"3","price":"20","stock":"100"},]};
//const obj=JSON.parse(items);
//console.log(items.inventory);
/* BK */
// element : {"id":"i","q":"i"}
let totalCart={"cart":[]};
//console.log(totalCart);

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
	
	items.inventory.forEach(function(value, index, array){
		let rw=$("#inventory tbody").children().first().clone();
		let rb=rw.children();
		rw.attr("id",index);

		rb.eq(0).attr("value",index);
		rb.eq(0).children(":first").attr("value",index);

		rb.eq(1).html(value.code);
		rb.eq(2).html(value.name);
		rb.eq(3).html(value.brand);
		rb.eq(4).html(value.price);
		rw.css("display","block");
		//$(this).html(tabs[index]);
		$("#inventory tbody").append(rw);
		//alert($(this).attr("name"));
	});

});


/*
	----------Page Events --------------
*/

$(document).ready(function(){

	/* ---------- Submenu  ---------- */
	
	$('.openTab').click(function(){

		//e.preventDefault();		
		//console.log('open');
		openTap(
			$(this).children().first().attr("id"), 
			$(this), 
			$(this).children().first().attr("color")
			);
	});

	$(".closeTab").on({

		click:function(){

			closeTap($(this));
			/* deprecated, must to reemplace ): */
			event.stopImmediatePropagation();
		},

		mouseenter:function(){

			$(this).children().first().attr("class","fa fa-circle");		
			
		},
		mouseleave:function(){

			$(this).children().first().attr("class","fa fa-times");		
			
		}

	});
	/* setup */
	// Get the element with id="defaultOpen" and click on it
	$("#defaultOpen").click(); 

	/* ---------- Table  ---------- */

	/* check*/
	//let ck= $("#inventory tr:gt(1) :checkbox");

	$("#inventory tr:gt(1) :checkbox").change(function(e){
		let id,q,ck;
		id=$(this).val();
		q = $(this).parent().siblings(":last").children().val(); 
		ck= this.checked;
		//console.log(id ,q ,ck );
		updateCart(id ,q ,ck );
		updateDetails();

	});

	$("#inventory tr:gt(1) :text").change(function(e){
		let id,q,ck;
		q=$(this).val();
		id = $(this).parent().parent().attr("id");
		ck = $(this).parent().siblings(":first").children().is(":checked"); 
		if (ck) {
			updateCart(id ,q ,ck);
			//console.log(id ,q,ck);
		}
		updateDetails();
	});

	$("#buy_cart").click(function(e){
		checkoutCart();
	});
	
	$("#clr_cart");

	$("#ask").click(function(e){
		fnFile("update");
	});

});