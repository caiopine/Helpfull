let Counter = 0;

        /* FUNÇÃO QUE FAZ COM QUE O ITEM SELECIONADO RECEBA UM FOCO */
        function select(){
            document.;
        };

        function unselect(){
            console.log("fora");
        };

        /* FUNCÃO QUE FAZ COM QUE QUANDO O BOTÃO DE ESCREVA FOR APERTADO ELE CRIE UMA DIV COM UM PARÁGRAFO
        EDITÁVEL COM O FOCO NELE E QUANDO PASSE O MOUSE EM CIMA ELE RECEBA UM FOCO */
        function textcreate (){
            /* Criando e declarando as variáveis como uma tag */
            var CreateDiv = document.createElement("div");
            var Paragraph = document.createElement("p");
            Counter++;

            /* Dando uma classe para as variáveis */
            CreateDiv.classList.add('textmodule' + Counter);
            Paragraph.classList.add('paragraph');

            /* Torna a Div e tudo que está em seu interior arrastável */
            CreateDiv.setAttribute('draggable', true);
            CreateDiv.setAttribute('onmouseover', "select()");
            CreateDiv.setAttribute('onmouseout', "unselect()");
            CreateDiv.setAttribute('id', 'textdiv' + Counter);
            Paragraph.setAttribute('contentEditable', true);

            /* Coloca as Variáveis ao código quando o botão é apertado. */
            document.getElementById('board').appendChild(CreateDiv);
            document.getElementById('textdiv' + Counter).appendChild(Paragraph).focus();
        };

        /* FUNCÃO QUE FAZ COM QUE QUANDO O BOTÃO DE MÍDIA FOR APERTADO ELE CRIE UMA DIV ONDE PODERÁ SER INSERI
        DA UMA MÍDIA COM O FOCO NELE, E QUANDO PASSE O MOUSE EM CIMA ELE RECEBA UM FOCO */
        function midiacreate (){
            /* FAZ COM QUE O BOTÃO MÍDIA SEJA UM INPUT FILE */
            const realfile = document.getElementById("real-midiabutton");
            const custombutton = document.getElementById("midia");
            realfile.click();

            /* SALVANDO O ARQUIVO DO USUÁRIO */
            document.querySelector("#real-midiabutton").addEventListener("change", function(){
                const reader = new FileReader();

                reader.addEventListener("load", () => {

                })

                reader.readAsDataURL(this.files[0]);
            });

            var CreateDiv = document.createElement("div");
            Counter++;

            CreateDiv.classList.add('midiamodule');

            /* Torna a Div e tudo que está em seu interior arrastável */
            CreateDiv.setAttribute('draggable', true);
            CreateDiv.setAttribute('onmouseover', "select()");
            CreateDiv.setAttribute('onmouseout', "unselect()");
            CreateDiv.setAttribute('id', 'midiadiv' + Counter);

            /* Coloca as Variáveis ao código quando o botão é apertado. */
            document.getElementById('board').appendChild(CreateDiv);

        };