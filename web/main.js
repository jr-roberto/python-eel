const main = document.getElementById("main");
main.style.width = "100vw";
main.style.height = "100vh";
main.style.minWidth = String(`${screen.width * 0.5}px`)

function telaInicial(){
    main.innerHTML = "";

    var fun_names = ["nova_Tabela","editar_Tabela"];

    var funcoes = document.createElement("div");
    funcoes.className = "funcoes-iniciais";

    for (var i=0 ; i < fun_names.length ; i++){
        var fun = document.createElement("div");
        fun.id = fun_names[i];

        fun.innerHTML = fun_names[i];
        
        fun.addEventListener('click',config_tabelas);

        funcoes.appendChild(fun);
    }

    main.appendChild(funcoes);

}

function config_tabelas(){
    main.innerHTML = "";

    var display = document.createElement("div");
    display.className = "tela-config-tabela";

    var id_fun = document.createElement("div");
    id_fun.id = this.id;

    var displayTitle = document.createElement("div");
    var displayTitleText = document.createElement("h1");
    displayTitle.id = "display-title";
    displayTitle.style.padding = "10px 0";

    var btn_home = document.createElement("div");
    btn_home.innerHTML = " < "
    btn_home.className = "btn_home";
    btn_home.addEventListener('click',telaInicial);

    displayTitle.appendChild(displayTitleText);
    display.appendChild(id_fun);
    display.appendChild(displayTitle);
    display.appendChild(btn_home);

    if (id_fun.id === "nova_Tabela" ){
        displayTitleText.innerHTML = "-- Criando uma nova Tabela --";
        displayTitle.style.background = "#2113cc";


        
    }

    if (id_fun.id === "editar_Tabela" ){
        displayTitleText.innerHTML = "-- Editando uma tabela existente --";
        displayTitle.style.background = "#056202";



    }

    main.appendChild(display);
}

setTimeout(telaInicial,100);

// enviando comando para python e recebendo resposta
/* const button = document.getElementById("btn_teste").onclick = function(){
    eel.nova_tabela()((output)=>{
        window.alert(output)
    });
} */
