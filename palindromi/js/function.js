
let result = "";
let parolaContrario = "";


function palindroma(parola){

    for(let i = parola.length - 1; i >=0; i--){
        let currItem = parola[i];

        parolaContrario += currItem;

    }

    if(parola === parolaContrario){
        result = `la parola ${parola} è palindroma`;
    }else{

        result = `la parola ${parola} non è palindroma`;
    }

    return result;
}