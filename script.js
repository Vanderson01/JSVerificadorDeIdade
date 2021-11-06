function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {  /* COMENTARIO 1 - preenchimento 0*/
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >=0 && idade < 10){
                    // criança
                    img.setAttribute('src','img/bebe_m.jpg')
                } else if (idade<21) {
                    // jovem
                    img.setAttribute('src','img/jovem_m.jpg')
                } else if (idade<50) {
                    // adulto
                    img.setAttribute('src','img/adulto_m.jpg')
                } else {
                    // idoso
                    img.setAttribute('src','img/idoso_m.jpg')
                }
            } else {
                genero = 'Mulher'
                if (idade >=0 && idade < 10){
                    // criança
                    img.setAttribute('src','img/bebe_f.jpg')
                } else if (idade<21) {
                    // jovem
                    img.setAttribute('src','img/jovem_f.jpg')
                } else if (idade<50) {
                    // adulto
                    img.setAttribute('src','img/adulto_f.jpg')
                } else {
                    // idoso
                    img.setAttribute('src','img/idoso_f.jpg')
                }
            }
            res.style.textAlign = 'center' /* COMENTARIO 2 - alinhamento de texto*/
            res.innerHTML = `Detectamos ${genero} ${idade} anos <br>`
            res.appendChild(img)

        }
    }


/*
COMENTARIOS
COMENTARIO 1 - Este 0 não significa preencher o valor 0 no campo; o significado é para não ficar vazio; caso teste o preenchimento com o valor 0 não apresentará erro
COMENTARIO 2 - Alinhamento de texto via JavaScript visando teste, prática e conhecimento de JS
*/