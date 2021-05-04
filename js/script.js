    function erro(){
    window.alert('Verifique os dados e tente novamente!')
}

function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        return erro();
    }else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
            if(fano.value <1900){
                return erro();
            }
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        
        if(sexo[0].checked){
            genero = 'um Homem'
            if(idade >=0 && idade <12){
                img.setAttribute('src', 'img/foto-bebe-m.png');
            }else if(idade <21){
                img.setAttribute('src', 'img/foto-jovem-m.png');
            }else if(idade <50){
                img.setAttribute('src', 'img/foto-adulto-m.png');
            }else {
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }
                
        }else if(sexo[1].checked){
            genero = 'uma Mulher'
            if(idade >=0 && idade <12){
                img.setAttribute('src', 'img/foto-bebe-f.png');
            }else if(idade <21){
                img.setAttribute('src', 'img/foto-jovem-f.png');
            }else if(idade <50){
                img.setAttribute('src', 'img/foto-adulto-f.png');
            }else {
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
}