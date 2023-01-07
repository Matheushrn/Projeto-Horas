# Projeto-Horas
 Projeto do cuso de JavaScript do CursoemVideo

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hora do Dia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body onload="carregar()">
    <header>
        <h1>Hora do Dia</h1>
    </header>
    <section>
        <div id="msg">
            testando
        </div>
        <div>
            <img id="imagem" src="Dia.PNG" alt="imagem do dia">
        </div>
    </section>
    <footer><p>&copy;Matheushrnque</p></footer>

    <script src="script.js"></script>
</body>
</html>

@charset "UTF-8";

body{
    background-color: steelblue;
}
header > h1{
    text-align: center;
    color: white;
    font-size:5em;
}
section{
    width:500px;
    background: white;
    border-radius:10px;
    padding:15px;
    margin: auto;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.53);
}
div#msg{
    text-align: center;
    font-size:2em;
}

footer{
    text-align: center;
    color:white;
    font-style: italic;
}

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
