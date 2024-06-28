function agregar_NewGeneracion(generacion){

	$( "#descripcionEdit" ).clone().attr('id', $( "#descripcionEdit" ).attr("id")+(++s)).appendTo( "#editCargos" );
	$( "#descripcionEdit"+s ).css("display","");

	gen=number(generacion);

	$("#editFolder-nav-tabs li:last" ).child("a:first").attr("onclick","'agregar_NewGeneracion('"+(++gen)+ "');'");
		
	$("#descripcionEdit"+s+" input" ).each(function(index){
		$(this).attr("name",$(this).attr("name")+s);
		//alert($(this).attr("name"));
	});

	$("#descripcionEdit"+s+" div" ).each(function(index){
		$(this).attr("id",$(this).attr("id")+s);
		//alert($(this).attr("name"));
	});


	$("INPUT[name='cantEditCargo]").each
	(
    function(index, element)
    {
    $(this).val(s);
    }
	);
	document.getElementById("cantEditCargo").value = s;

}	

function newTab() {
  //console.log($(".openTab:last"));
  let a=$("#defaultOpen").clone();
  let b=$("#generation_0").clone();
  let openTabs = $(".openTab");
  let tabcontents = $(".tabContent");

  for (i = 0; i < openTabs.length; i++) {
    openTabs[i].style.backgroundColor = "";
  }
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  a.attr({'id':''});
  a.css({
    "backgroundColor" : "#"+Math.floor(Math.random() * 10)+Math.floor(Math.random() * 10)*Math.floor(Math.random() * 10),
    "display":"block",
  });
  let n=Number(openTabs.last().children().attr('id'))+1;
  a.children('a').first().attr('id',n).html('Generation '+n);
  $("#newTab").before(a);

  b.attr('id','generation_'+n).children().first().html('Generation '+n);
  $(".tabContent").last().after(b);
}


function openTap(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = $(".tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = $(".tabLink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  // Add the specific color to the button used to open the tab content
  $("#generation_"+pageName).css({"display":"block","backgroundColor" : color});
  elmnt.css("backgroundColor" , color);
  
}

function closeTap(elmnt) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  elmnt.parent().css("display" , "none");

  tabcontent = $(".tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "";
  }
  
  // hide the specific tab
    elmnt.parent().css("display" , "none");
}

// Get the element with id="defaultOpen" and click on it
