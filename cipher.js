const cipher = {
  encode: (offset, txt) => {
    if (isNaN(offset) || offset === null || offset === 0) {
      throw new TypeError(); //se usa cuando un parametro no es valido
    }
    let msjCifrado = "";

    //Recorre los caracteres del txt
    for (let i = 0; i < txt.length; i++) {
      let cod = txt[i];
      /* ESPACIOS EN BLANCO */
      if (txt[i] === " ") {
        msjCifrado += " ";
        /* MAYUSCULAS */
      } else if (txt.charCodeAt(i) > 64 && txt.charCodeAt(i) < 91) {
        cod = String.fromCharCode(((txt.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
        msjCifrado += cod;
        /* MINUSCULAS*/
      } else if (txt.charCodeAt(i) > 96 && txt.charCodeAt(i) < 123) {
        cod = String.fromCharCode(((txt.charCodeAt(i) - 97 + parseInt(offset)) % 26) + 97);
        msjCifrado += cod;
      }else{
        cod = txt[i];
        msjCifrado += cod;
      }
    }

    //console.log(msjCifrado);
    return msjCifrado;
  },
  decode: (offset, txt) => {
    if (isNaN(offset) || offset === null || offset === 0) {
      throw new TypeError(); //se usa cuando un parametro no es valido
    }
    let msjCifrado = "";
    for (let i = 0; i < txt.length; i++) {
      let cod = txt[i];
      if (txt[i] === " ") {
        msjCifrado += " ";
      } else if (txt.charCodeAt(i)>64 && txt.charCodeAt(i)<91) {
        cod = String.fromCharCode((txt.charCodeAt(i)-90- parseInt(offset))%26+90);
        msjCifrado += cod;
      } else if (txt.charCodeAt(i) > 96 && txt.charCodeAt(i) < 123) {
        cod = String.fromCharCode((txt.charCodeAt(i)-122- parseInt(offset))%26+122);
        msjCifrado += cod;
      } else{
        cod = txt[i];
        msjCifrado += cod;
      }
    }
    return msjCifrado;
  },
};

export default cipher;
