const botaoMobile = document.querySelector("#menu-mobile");
const menuMobile = document.querySelector(".header__menu--mobile");
const botaoUsuario = document.querySelector("#botaoUsuario");
const menuUsuario = document.querySelector(".header__user--container");


function exibirElemento(elemento){
    elemento.classList.remove("is-hidden");
}

function ocultarElemento(elemento){
    elemento.classList.add("is-hidden");
}

botaoMobile.addEventListener("click", ()=>{
    if(menuMobile.classList.contains("is-hidden")){
        exibirElemento(menuMobile);
    }else{
        ocultarElemento(menuMobile);
    }
});

botaoUsuario.addEventListener("click", ()=>{
    if(menuUsuario.classList.contains("is-hidden")){
        exibirElemento(menuUsuario);
    }else{
        ocultarElemento(menuUsuario);
    }
});