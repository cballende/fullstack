
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


function updateCart(id,q,ck) {
  // Hide all elements with class="tabcontent" by default */
  if (totalCart.cart.some(myFunc_1)) {
    if(ck){
      /*update*/      
      totalCart.cart[totalCart.cart.findIndex(myFunc_1)].q=q;
    }else{
      /*clear*/
      totalCart.cart.splice(totalCart.cart.findIndex(myFunc_1),1);
    }
    
  }else{
    /*create*/
    if(ck){
      totalCart.cart.push({"id":id,"q":q});
      console.log(totalCart);

    }
  }
  
  function myFunc_1(value, index, array){
    return value.id==id;
  }
  function myFunc_2(value, index, array) {
  } 
}
