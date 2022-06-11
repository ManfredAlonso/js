function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length==0 || Number(fano.value)>ano){
        window.alert(`[ERROR] verifique os dados e tente novamente!`)
    }else{
        var fsex=document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gênero=``
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero=`Homem`
            if(idade>=0&& idade <10){
                //criança
                img.setAttribute('src','bebemasculino.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','jovemmasculino.jpg')
            }else if (idade<50){
                //adulto
                img.setAttribute('src','adultomasculino.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosomasculino.jpg')
            }
            
        }else if(fsex[1].checked){
            gênero=`Mulher`
            if(idade>=0&& idade <10){
                //criança
                img.setAttribute('src','bebefeminino.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','jovemfeminino.jpg')
            }else if (idade<50){
                //adulta
                img.setAttribute('src','adultafeminino.jpg')
            }else{
                //idosa
                img.setAttribute('src','idosamasculina.jpg')
            }
        }
        res.style.textAlign='center'
        img.style.width='250px'
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}