let main = document.querySelector("main");
main.style.height = "350px";

var img = document.querySelectorAll(".hbld");
for(var i = 0; i < img.length; i++){
    img[i].style.display = "none";
}

let fot = document.querySelector(".refrence");
fot.style.height = "10%";
fot.style.position = "absolute";
fot.style.bottom = "0";
fot.style.left = "0";

var pass = document.querySelector(".pass");
pass.style.display = "inherit";
pass.style.height = "15%"

var styBtn = document.querySelectorAll(".sty");
var  styBtns = document.querySelector(".hblds");

styBtns.style.display ="inherit";

for(var i = 0; i < styBtn.length; i++){
    styBtn[i].style.padding = "15px";
    styBtn[i].style.borderRadius = "25px";
    styBtn[i].style.textTransform = "uppercase";
    styBtn[i].style.border = "1px solid transparent"
}   

var ImgOfHTML = document.getElementById("agni");
ImgOfHTML.style.display = "inherit";
ImgOfHTML.style.opacity = "0"
ImgOfHTML.style.float = "left";
ImgOfHTML.style.width = "250px";
ImgOfHTML.style.marginLeft = "80px";

var textOfImg = document.getElementById("textDisplay");
textOfImg.style.display = "inherit";
textOfImg.style.color = "#aaa"
textOfImg.style.padding= "65px";
textOfImg.style.textAlign = "justify";
textOfImg.style.letterSpacing = "2px";

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
'Git uma ferramenta que comecei a estudar em 0 meses, ferramenta que tenho uma habilidade basica para poder fazer os versionamentos.',
'CSS3 uma ferramenta de estilo que tenho cerca de um ano, venho trabalhando para conseguir usar API`s que compoem',
'HTML5 uma ferramenta que tenho cerca de 1 ano.',
'Javascript é uma lingaugem de programação que venho estudando a 6 meses e venho sempre aprimorando e estudando'
];



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
