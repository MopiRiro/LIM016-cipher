 const cipher = {
	encode: (offset,txt)=>{
		if (isNaN(offset) || offset ===null || offset===0){
			throw new TypeError(); //se usa cuando un parametro no es valido
		}
		let msjCifrado="";
		
		//Recorre los caracteres del string
		for (let i=0; i<txt.length; i++){
			// console.log(txt);
			if(txt[i]===' '){
				msjCifrado+=' ';
			}else{
			let cod=txt[i];
			//console.log(cod);
			cod=String.fromCharCode((txt.charCodeAt(i)-65+ parseInt(offset))%26+65);
			msjCifrado += cod;
			//console.log(msjCifrado);
			}
		}
	
		//console.log(msjCifrado);
		return msjCifrado;
	},
	decode: (offset,txt)=>{

		if (isNaN(offset) || offset ===null || offset===0){
			throw new TypeError(); //se usa cuando un parametro no es valido
		}
		
		let msjCifrado ="";
	
		for (let i=0; i<txt.length; i++){
			if(txt[i]===' '){
				msjCifrado+=' ';
			}else{
			let cod=txt[i];
			cod=String.fromCharCode((txt.charCodeAt(i)+65- parseInt(offset))%26+65);
			msjCifrado += cod;
		}
	}
		return msjCifrado;
	}
 };

export default cipher;
