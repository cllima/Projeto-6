function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /* var hora = 8 // => comando para testar */

    msg.innerHTML = `Agora são ${hora} horas!!!`

    if (hora >= 0 && hora < 12){  
        img.src = 'imagens/foto_manha.png'
        document.body.style.background = '#fed4a4'
        
    } else if(hora >= 12 && hora <= 18){  
        img.src = 'imagens/foto_tarde.png'
        document.body.style.background = '#fd8785'

    } else { 
        img.src = 'imagens/foto_noite.png'
        document.body.style.background = '#694768'
    }}