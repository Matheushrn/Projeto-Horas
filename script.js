function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    //msg.innerHTML = `Agora são ${hora}Horas.`
    if (hora >= 5 && hora < 12){
        msg.innerHTML = `Bom dia agora são ${hora}Horas.`
        document.body.style.background = "#42A5E4"
        img.src = 'Dia.PNG'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde agora são ${hora}Horas`
        document.body.style.background = "#2B1B1A"
        img.src = 'Tarde.png'
    } else if (hora >= 18 && hora < 23){
        msg.innerHTML = `Boa noite agora são ${hora}Horas.`
        document.body.style.background = "#301B2D"
        img.src = 'noite2.png'
    } else {
        msg.innerHTML = `Boa Madrugada agora são ${hora}Horas.`
        document.body.style.background = "#332217"
        img.src = 'madrugada.png'
    }
}