let Counter = 0;

/* FUNÇÃO QUE FAZ COM QUE O ITEM SELECIONADO RECEBA UM FOCO */
function select(){
};

function unselect(){
};

/* FUNCÃO QUE FAZ COM QUE QUANDO O BOTÃO DE ESCREVA FOR APERTADO ELE CRIE UMA DIV COM UM PARÁGRAFO
EDITÁVEL COM O FOCO NELE E QUANDO PASSE O MOUSE EM CIMA ELE RECEBA UM FOCO */
    function textcreate (){
        /* Criando e declarando as variáveis como uma tag */
        var CreateDiv = document.createElement("div");
        var Paragraph = document.createElement("p");
        Counter++;

        /* Dando uma classe para as variáveis */
        CreateDiv.classList.add('textmodule');
        Paragraph.classList.add('paragraph','selected');

        /* Torna o Módulo arrastável, selecionável e dá um id único. */
        CreateDiv.setAttribute('draggable', true);
        CreateDiv.setAttribute('onmouseover', "select()");
        CreateDiv.setAttribute('onmouseout', "unselect()");
        CreateDiv.setAttribute('id', 'textdiv' + Counter);
        Paragraph.setAttribute('contentEditable', true);
        Paragraph.setAttribute('placeholder', "Digite aqui!");

        /* Coloca as Variáveis ao código quando o botão é apertado. */
        document.getElementById('board').appendChild(CreateDiv);
        document.getElementById('textdiv' + Counter).appendChild(Paragraph).focus();
    };

    /* FAZ COM QUE O BOTÃO MÍDIA SEJA UM INPUT FILE */
    function execfilefield(){
        document.getElementById("botaomidia").click();
    }
    /* FUNCÃO QUE FAZ COM QUE QUANDO O BOTÃO DE MÍDIA FOR APERTADO ELE CRIE UMA DIV ONDE PODERÁ SER INSERI
    DA UMA MÍDIA COM O FOCO NELE, E QUANDO PASSE O MOUSE EM CIMA ELE RECEBA UM FOCO */
    function midiacreate() {
        image = document.getElementById("botaomidia").value;
        
        
        /* Torna a Div e tudo que está em seu interior arrastável */
        var CreateDiv = document.createElement("div");
        var Media = document.createElement("img");

        CreateDiv.setAttribute('draggable', true);
        CreateDiv.setAttribute('onmouseover', "select()");
        CreateDiv.setAttribute('onmouseout', "unselect()");
        CreateDiv.setAttribute('id', 'midiadiv' + Counter);
        Media.setAttribute('src', ""),('alt', "noimage");
        Media.setAttribute('id', 'media' + Counter);

        /* Coloca as Variáveis ao código quando o botão é apertado. */
        document.getElementById('board').appendChild(CreateDiv);
        document.getElementById('midiadiv' + Counter).appendChild(Media);

        /* Adiciona um ao contador, para que os elementos sejam diferentes. */
        Counter++;
        };