function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();   

}

const ListaDeTeclas = document. querySelectorAll('.tecla');

let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<ListaDeTeclas.length){
    const tecla = tecla [contador]
    const instrumento = tecla.classList
    tecla.onclick = function(){
        const idAudio = `#som_${instrumento}`

    }
    contador = contador + 1;
    console.log(instrumento)


}
