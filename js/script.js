let collorset = document.getElementById("inicio");
collorset.style.height = "325px";
collorset.style.width = "80%";
collorset.style.textAlign = "left";


let title = document.querySelector("#title");
title.style.textAlign = "center"

let menu = document.getElementById("menu");
menu.style.textAlign = "center"



let btn = document.getElementById("btns");
btn.style.display = "none";

let picture = document.querySelectorAll(".tecnolgs");
picture[0].style.display = "none";
picture[1].style.display = "none";
picture[2].style.display = "none";
picture[3].style.display = "none";

let textOfPicture =document.querySelectorAll(".textAbout");
textOfPicture[0].style.display = "none";
textOfPicture[1].style.display = "none";
textOfPicture[2].style.display = "none";
textOfPicture[3].style.display = "none";



var ImgOfHTML = document.getElementById("agni");
ImgOfHTML.style.display = "inherit";
ImgOfHTML.style.opacity = "0"
ImgOfHTML.style.float = "left";
ImgOfHTML.style.width = "250px";
ImgOfHTML.style.marginLeft = "80px";

var textOfImg = document.getElementById("textDisplay");
textOfImg.style.display = "inherit";
textOfImg.style.color = "#fff"
textOfImg.style.padding= "65px";
textOfImg.style.textAlign = "justify";


var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'imgs/icons8-git.svg',
'imgs/icons8-css3.svg',
'imgs/icons8-html-5.svg',
'imgs/icons8-javascript.svg'
];
var textSrcArray = [ //textos das imgs 
//acrescentar textos as imagens 
//acrescentar experiencia que tem com cada tecnologia 
'AAA',
'BBB',
'CCC',
'DDD'
];


let passImgTx = document.getElementById("pass");
passImgTx.style.margin ="0";
passImgTx.style.borderRadius = "0 55px 55px 0";
passImgTx.style.padding = "30px";
passImgTx.style.border = "none";
passImgTx.style.display ="inline";

function trocar(){

  if((currentImgIndex == ImgSrcArray.length) || (currentImgIndex == textSrcArray.length)) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  ImgOfHTML.src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
  textOfImg.innerHTML= textSrcArray[currentImgIndex]; //altera o texto do elemento "texxx" de acordo com o indice
  ImgOfHTML.style.opacity = "1"
  currentImgIndex++; // incrementa a nossa referencia

}

//fazer um botão e alinhar ele a tela com JS
//editar texto