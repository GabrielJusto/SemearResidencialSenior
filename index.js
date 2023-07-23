function abreEquipe(div){
   
    const aberto = document.getElementById(div).style.display == 'block';

    if(aberto)
        document.getElementById(div).style.display = 'none';
    else	
        document.getElementById(div).style.display = 'block'
}