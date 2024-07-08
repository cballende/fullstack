
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
      //console.log(totalCart);
    }
  }
  function myFunc_1(value, index, array){
    return value.id==id;
  }  
}

function updateDetails(){
  
  o=fnInvoice();
  $("#pt").html(o.id);
  $("#qt").html(o.q);   
}

function fnInvoice(){

  let f=false;
  let o={};

  if (totalCart.cart.length<1){
    o.id=0;
    o.q=0;
    //console.log("empty");
  }else if (totalCart.cart.length==1){    
    o = { "id":Number(items.inventory[totalCart.cart[0].id].price)*Number(totalCart.cart[0].q),
          "q" :Number(totalCart.cart[0].q),};
    //console.log("one");
  }
  else{
    o=totalCart.cart.reduce(myFunc_2);    
  }

  return o;

  function myFunc_2(total, value, index, array){
    //console.log(f);
    if(f){
      total = { "id":Number(total.id)+Number(items.inventory[value.id].price)*Number(value.q),
                "q" :Number(total.q)+Number(value.q),};
      //console.log("rest");

    }else{
      //console.log("first");

      //console.log(Number(items.inventory[value.id].price));

      total = { "id":Number(items.inventory[total.id].price)*Number(total.q)+Number(items.inventory[value.id].price)*Number(value.q),
                "q" :Number(total.q)+Number(value.q),};
      f=true;
    }
      
      return total;

  }
}

function checkoutCart(params) {
  if (totalCart.cart.some(myFunc_1)){
    /*Alert outStock*/
    window.alert("¡Some products is out stock!");
  }else if(totalCart.cart.some(myFunc_2)){
    /*Alert not item*/
    window.alert("¡Some products is set whitout amount!");
  } else if(!totalCart.cart.length){
    window.alert("¡Please add some product to the cart!");
  }else {
    window.alert("¡Thanks for you purchase!. You have a invoice of $"+fnInvoice().id);
  }

  function myFunc_1(value, index, array){
    return Number(value.q)>Number(items.inventory[value.id].stock);
  }
  function myFunc_2(value, index, array){
    return Number(value.q)<1;
  }
}


/**
 * Esta función se encarga de formatear los datos en Json string,
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return s:string cadena que contienen datos en formato Json.
*/
function fnArrToJson(v){

  let i;
  let s="{'data':[";  
  //let v=fnModel("read");
      for ( i in v){
         s=s+"{'item':'"+v[i][0]+"','price':'"+v[i][1]+"'},"; 
        }
        s=s+"]}";
  return s;      
}

/**
 * Esta función se encarga de realizar C.R.U.D. sobre archivos
 * Se llama a la funcion de formateo de datos.
 * @param sOp es un arreglo con el parametro de la operación a realizar sobre un archivo
 * 
 * @return void
*/
function fnFile(sOp){
   switch (sOp){
    case 'read':      
      break;
    case 'create':
      console.log('Created!');
      break;
    case 'update':
      fnWriteFile('contact.txt',fnArrToJson());
      break;
    case 'delete':
      console.log('Deleted!');
      break;
    case 'rename':
      console.log('Renamed!');
      break;  
  
    default:
      console.log('No operation!');
      break;
  }
  return;
}

function fnWriteFile(fileName,sJson){
  const link = document.createElement("a");
  const fname = $("#first_name").val();
  const lname = $("#last_name").val();
  const mail = $("#email").val();
  const pho = $("#phone").val();
  const msg = $("#message").val();
  const json= "{'data':['fname':'"+fname+"','lnama':'"+lname+"','email':'"+mail+"','phone':'"+pho+"','message':'"+msg+"',]}";
  const file = new Blob([json], { type: 'text/json' });
  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}