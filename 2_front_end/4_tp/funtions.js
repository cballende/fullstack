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
  $("#"+pageName).css("display" , "block");

  // Add the specific color to the button used to open the tab content
  elmnt.css("backgroundColor" , "color");

}

function closeTap(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].css("display" , "none");
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
    $("#"+pageName).css("display" , "");
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
