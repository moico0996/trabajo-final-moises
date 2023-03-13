function entrar(){
    let uname= document.getElementById("uname").value; 
    let un; 
     
    if(uname==null|| uname==0 || uname.length<1|| uname.length>15 ){
        un="completa tu usuario";

    }
    else{
        un="gracias, completaste lo solicitado";
    }

    document.getElementById("usu").style.color="red"; 
    document.getElementById("usu").innerHTML=un; 






    let psw=document.getElementById("psw").value; 
    let unl; 
    if(psw==null|| psw==0 || psw.length<1|| psw.length>15 ){
        unl="completa tu usuario";

    }
    else{
        unl="gracias, completaste lo solicitado";
    }

    document.getElementById("clv").style.color="red"; 
    document.getElementById("clv").innerHTML=unl; 



}