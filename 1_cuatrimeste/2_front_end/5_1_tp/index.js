let btn = document.getElementById("btn-new");
let inputJob = document.getElementById("input-job");

let item = document.querySelectorAll(".newelementList")[0];
let parrafos = document.querySelectorAll("p");

btn.addEventListener("click",function(e){ 
    let job = inputJob.value;
    let ln=item.cloneNode();
    ln.textContent=job;
    if (job) {
        inputJob.value="";
        ln.classList.remove("hide");
        document.getElementById("elementsList").appendChild(ln);
    }
});
