const button = document.getElementById("btn_teste").onclick = function(){
    var campo = document.getElementById("campo").value;
    eel.nova_tabela()((output)=>{
        window.alert(output)
    });
}

function finalizar(){
    close();
    /* window.open("https://web.whatsapp.com/") */
}

setTimeout(()=>{
    window.alert(`width : ${screen.width} || height : ${screen.height}`)
},5000);
