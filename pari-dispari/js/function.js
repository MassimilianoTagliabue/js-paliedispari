

function numeroRandom(min, max){

    let numeroComputer = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroComputer;
}


function pariDispari(somma , sceltaPariDispari){
    let message;
    let risposta;

    if(somma % 2 === 0){

        message = "pari";
    }else{
        message = "dipari";
    }

    if(message === sceltaPariDispari){
      
        risposta ="hai vinto";
    }else{

        risposta ="hai perso";
    }

    return risposta
}