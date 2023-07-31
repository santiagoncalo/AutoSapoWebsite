const enviar = document.querySelector('.botaovenda');

enviar.addEventListener("click", function(e){
    e.preventDefault();

    //ir buscar as diferentes caracteristicas do carro
var marca = document.getElementById("marca").value;
var modelo = document.getElementById("modelo").value;
var preco1 = document.getElementById("precoaquisicao").value;
var ano = document.getElementById("ano").value;
var kms = document.getElementById("kms").value;


});



var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];


let carmarca1 = document.querySelector(".carmarca1");
let carmodelo1 = document.querySelector(".carmodelo1");
let carpreco1 = document.querySelector(".carpreco1");
let carano1 = document.querySelector(".carano1");
let carkms1 = document.querySelector(".carkms1");

let carmarca2 = document.querySelector(".carmarca2");
let carmodelo2 = document.querySelector(".carmodelo2");
let carpreco2 = document.querySelector(".carpreco2");
let carano2 = document.querySelector(".carano2");
let carkms2 = document.querySelector(".carkms2");

let carmarca3 = document.querySelector(".carmarca3");
let carmodelo3 = document.querySelector(".carmodelo3");
let carpreco3 = document.querySelector(".carpreco3");
let carano3 = document.querySelector(".carano3");
let carkms3 = document.querySelector(".carkms3");


function simulacao(){


    list1[0] = document.getElementById("marca").value;
	list2[0] = document.getElementById("modelo").value;
	list3[0] = document.getElementById("precoaquisicao").value;
	list4[0] = document.getElementById("ano").value;
    list5[0] = document.getElementById("kms").value;    
}


let precof1=document.querySelector(".precof1");
let precof2=document.querySelector(".precof2");
let precof3=document.querySelector(".precof3");


document.querySelector(".botaovenda").addEventListener("click", function (){
    var anomatricula = document.getElementById("ano").value;
    var kms1 = document.getElementById("kms").value;
    var preco1 = document.getElementById("precoaquisicao").value;
    var anos = 2022 - anomatricula;
    var c1 = 0;
    var c2 = 0;

    if(anos>10)
    {
        c1 = 0.05;

    }
    else
    {
        c1 = 0.04;
    }


    if(kms1 <= 30000)
    {
        c2 = 1
    }
    else
    {
        if(kms1 > 70000)
        {
            c2 = 0.9;
        }
        else
        {
            c2 = 0.95;
        }
    }

    precofinal = preco1*(1 - anos * c1) * c2;

    precof1.innerHTML = Math.round(precofinal * 0.6) + '€';
    precof2.innerHTML = Math.round(precofinal) + '€';
    precof3.innerHTML = Math.round(precofinal * 1.1) +'€';

    console.log(carmarca1.value);
    console.log(preco1);
    console.log(anomatricula);
    console.log(kms);
})


// cenario1.addEventListener("mouseover", function () {
//     cenario1.setAttribute("style", "display:block");  
//     cenarios1_hover.setAttribute("style", "background: #21a4b8; border: 2px solid #e8f6f8; color: #fff;");
// });