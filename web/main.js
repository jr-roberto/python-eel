// enviando comando para python e recebendo resposta
const button = document.getElementById("btn_teste").onclick = function(){
    eel.nova_tabela()((output)=>{
        window.alert(output)
    });
}
