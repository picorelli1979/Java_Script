function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()

var hora = 14

msg.innerHTML = `AGORA SÃO ${hora}horas.`
    if (hora >= 0 && hora < 12) {
    // BOM DIA 
    img.src = "dia.jpg"
    document.body.style.background ='yellow' 
}   else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = "tarde.jpg"
    document.body.style.background = 'orange'
}   else {  
    //BOA NOITE
    img.src = "noite.jpg"    
    document.body.style.background = 'gray'
}

}