 
 var setaDireita=window.document.getElementById("seta-direita")
 var leonardo=window.document.getElementById("leonardo")
 var Samantha = window.document.getElementById("Samantha")
 var bruna=window.document.getElementById("bruna")
 var setaEsquerda=window.document.getElementById("seta-esquerda")

 function RolarParaDireita()  {
    bruna.style ="display:none"
    Samantha.style = "display:flex"
    setaDireita.style=" display:none"
    setaEsquerda.style="display:flex; margin-top:55px"
    
 }

 function RolarParaEsquerda()  { 
    bruna.style ="display:flex"
    Samantha.style = "display:none"
    setaDireita.style=" display:flex"
    setaEsquerda.style="display:none"
 }

