function selectMethod(element){

let methods = document.querySelectorAll(".method");

methods.forEach(m=>{
m.classList.remove("selected");
});

element.classList.add("selected");

}
