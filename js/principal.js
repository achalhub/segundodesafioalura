/*
Apertando o botao começar a Jogar
*/

palavraSegredo = palavraSecreta().toLowerCase();

criaBarra(palavraSegredo);
teclaRepetida = []
letraCorreta = []
mesclaLetra = []
primeiroCiclo = 1
letraAcertada=[]

qntdAcertada = 0
qntdErrada = 0
vidas = 0
vidaSalva = 0
unicoClique = []
listaExiste = []
venceu = false
perdeu = false






function botaoComecarJogar() {
    var botaoComecarJogar = document.querySelector(".botaoComecarJogar");
    return botaoComecarJogar;
}

function apertandobotaoComecarJogar() {
    var apertandobotaoComecarJogar = botaoComecarJogar().addEventListener("click",comecarJogar);
    
    return apertandobotaoComecarJogar;
}

function comecarJogar() {
    vidas = 0
    vidaSalva = 0
    unicoClique = []
    teclaRepetida = []
    listaExiste = []
    venceu = false
    perdeu = false

    document.getElementById("idposte").style.display = "none";
    document.getElementById("idpostebarra").style.display = "none";
    document.getElementById("idcorda").style.display = "none";
    document.getElementById("idcabeca").style.display = "none";
    document.getElementById("idtronco").style.display = "none";
    document.getElementById("idpernaEsquerda").style.display = "none";
    document.getElementById("idpernaDireita").style.display = "none";
    document.getElementById("idbracoEsquerdo").style.display = "none";
    document.getElementById("idbracoDireito").style.display = "none";
    document.getElementById("idmensagem").style.display = "none";

    document.getElementById("idmensagem").style.display = "none";
    document.getElementById("idbotaoComecarNovaPalavra").style.display = "none";
    document.getElementById("idbotaoNovoJogoDesistir").style.display = "initial";
    document.getElementById("idsecaoDeAdicionarPalavra").style.display = "none";
    console.log("Apertando1");


    
    palavraSegredo = palavraSecreta().toLowerCase();
    console.log ("0000000000000000000000000 " + palavraSegredo)
    criaBarra(palavraSegredo);
    teclaRepetida = []


    var teclaApertada = document.querySelector(".teclasApertadas");
    teclaApertada.innerHTML = "Bem vindo ao jogo! <br> Aperte qualquer tecla para começar: "


    var letraAcertada = document.querySelector(".letraAcertada");
    letraAcertada.innerHTML = ""
    letraCorreta = []
    mesclaLetra = []
    primeiroCiclo = 1
    letraAcertada=[]

    palavraSecreta()


    console.log("000000000000000000000" + palavraSecreta())
}


/*
Escolhe uma palavra Aleatória numa lista de Array
*/
function palavraSecreta() {
    var lista = ["Abacate","Abacaxi","Abiu","Abrico","Abrunho","Açai","Acerola","Ameixa","Amendoa","Amora","Arando","Avela","Banana","Cacau","Caja","Caju","Caqui","Castanha","Cereja","Coco","Cupuaçu","Damasco","Dende","Figo","Goiaba","Graviola","Groselha","Guarana","Jaca","Jamelao","Jatoba","Laranja","Lichia","Lima","Limao","Maça","Mamao","Manga","Maracuja","Melancia","Melao","Mexerica","Morango","Pera","Pessego","Pistache","Pitaia","Pitanga","Tamara","Uva"];
    /*var lista = ["pist", "pist"]*/



    var totaldalista = lista.length-1;
    console.log("TOTAL da lista eh : " + totaldalista)



    for (var i = 0; i < totaldalista; i = Math.round(Math.random()*totaldalista) ) {
        var numerosorteado = i;
    }
    
    console.log("lista: "+lista);
    console.log("numero sorteado: "+numerosorteado);
    console.log("palavra sorteada: "+lista[numerosorteado]);
    console.log("quantidade de letras: "+lista[numerosorteado].length);
    console.log("primeiro i: "+numerosorteado);

    var palavraSecreta = lista[numerosorteado];
    palavraSecreta = palavraSecreta.toLowerCase()
    return palavraSecreta.toLowerCase();
}



/*
Função para criar barras de acertos no jogo
*/
function criaBarra(palavraSegredo) {


    var barra = document.querySelector(".barra");
    var umaBarra = '<img src="img/Rectangle.png"></img> '
    var totalBarra = ""
    var palavra = palavraSegredo;

    for (var i = 0; i < palavra.length; i++) {
        var totalBarra = totalBarra + umaBarra        
    }
      
    console.log("Palavra secreta eh: "+palavra)
    console.log("segundo  i: "+i)


    barra.innerHTML = totalBarra
}




/*
função para escutar o teclado
*/

function escutaTeclado() {
    var escutaTeclado = document.addEventListener("keypress", qualTecla);
    return escutaTeclado;
}

function qualTecla() {

    var tecla = event.keyCode;
    console.log(tecla);
    /*97 até 122 e o Ç é 231*/
    listaAlfabetica = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç"]
    listaNumerica = ["97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","231"]

    var testandoNumero = -1
    if(tecla == 227 || tecla == 225) {
        tecla = listaAlfabetica[0]

    }


    if (tecla == 231 ) {

        tecla = listaAlfabetica[26]
        console.log(testandoNumero)
        console.log(listaAlfabetica[26])
    } else {
        if (((tecla >= 97) && (tecla <= 122))) {
            for (var i = 97; i <= tecla; i ++) {
                testandoNumero = testandoNumero + 1                 
            }
            tecla = listaAlfabetica[(testandoNumero)]
            console.log(listaAlfabetica[testandoNumero])
        }
    }



    console.log("escutaTeclado()" + tecla + " qual palavra secreta"+ palavraSegredo)
    console.log("escutaTeclado()" + tecla + "qual palavra secreta"+ palavraSegredo[0])
    console.log("escutaTeclado() " + palavraSegredo)

    /* funciona comparando tecla com a palavra, devemos comparar todas as letras
    if (palavraSegredo[0] == tecla[0]) {
        console.log("ACERTOUU ");
    } else {
        console.log("ERROUUU " + typeof palavraSegredo);
    }*/


    
    




    
    for (var i = 0; i < palavraSegredo.length; i++) {
        

        if (palavraSegredo[i] == tecla[0]) {
            /*console.log("ACERTOUU ");
            letraCorreta.push(i)
            console.log("LETRA CORRETA: "+letraCorreta)*/
            
            for (var i = 0; i < palavraSegredo.length; i++) {
                

                /*
                Acertando a quantidade de objetos na 
                lista de letras da Palavra segredo
                */
                if (primeiroCiclo == 1) {
                    while( primeiroCiclo - 1 < palavraSegredo.length) {
                        letraCorreta.push("W")
                        primeiroCiclo++
                    }
                    letraAcertada = letraCorreta
                    letraCorreta = []
                    console.log("PRIMEIRO CICLOOOOOOOOOOOOOOOOOOOOOOOOOO "+primeiroCiclo++)
                }
                


                /*
                Achando as letras corretas e colocando na lista
                */
                letraCorreta = []
                for (var z = 0; z < palavraSegredo.length; z++) {
                    if(tecla[0] == palavraSegredo[z]) {
                        letraCorreta.push(palavraSegredo[z])
                    } else {
                        letraCorreta.push("W")
                    }
                }
                console.log("letraCorretaletletraCorretaletletraCorretaletletraCorretaletletraCorretaletletraCorretalet "+ letraCorreta)
                

                /*
                Mesclando as listas
                */
                for (var y = 0; y < palavraSegredo.length; y++){
                    if ((letraAcertada[y] !== "W") || (letraCorreta[y] !== "W")) {
                        if(letraAcertada[y] !== "W") {
                            letraAcertada[y] = letraAcertada[y]
                        } else {
                            letraAcertada[y] = letraCorreta[y]
                        }
                    } else {
                        letraAcertada[y] = "W"
                    }
                }
   
            }
            console.log("travando2 "+ palavraSegredo)
            console.log("travando2 "+ letraAcertada)
            console.log("travando2 "+ letraCorreta) 

            /*letraAcertada = ["A" , "A" ,"A" ,"A" ,"A" ,"A" ,"A" ,"A" ]*/

            if ( perdeu == false) {
                if ( letraAcertada.length <= 6 ) {
                    var letraAcertadaHtml = document.querySelector(".letraAcertada");
                    letraAcertadaHtml.innerHTML = letraAcertada.toString().toUpperCase().replace(/W,/g,'&nbsp<font color="white">W</font>&nbsp').replace(/W/g,'<font color="white">W</font>&nbsp').replace(/,/g,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
                } else {
                    var letraAcertadaHtml = document.querySelector(".letraAcertada");
                    letraAcertadaHtml.innerHTML = letraAcertada.toString().toUpperCase().replace(/W,/g,'<font color="white">W</font>&nbsp&nbsp').replace(/W/g,'&nbsp<font color="white">W</font>').replace(/,/g,'&nbsp&nbsp&nbsp;&nbsp;&nbsp;')
                }
            }


        
            console.log("LETRACORRETA letraCorreta     "+ letraCorreta)
            console.log("LETRACORRETA letraAcertada    "+ letraAcertada)
            console.log("LETRACORRETA mesclaLetra    "+ mesclaLetra)


            console.log("TECLAREPETIDA AQUI!!! " + teclaRepetida)
            console.log("TECLAREPETIDA AQUI!!! " + letraAcertada)





            /*
            verifica as letras repitidas no if
            */
            var existeRepetida = ""

            for (var x = 0; x <= teclaRepetida.length + 1; x++) {
                
                if (tecla[0] == teclaRepetida[x]) {
                    existeRepetida++;
                    console.log("EXISTEEE");
                } 
            }
            if (venceu == false && perdeu == false) {
                if (existeRepetida == "") {
                    teclaRepetida.push(tecla);
                    
                    var teclaApertada = document.querySelector(".teclasApertadas");
                    teclaApertada.innerHTML = teclaRepetida.toString().toUpperCase().replace(/,/g,", ");
                }
            }
        } else {
            /*
            verifica as letras repitidas no ELSE
            */
            var existeRepetida = ""

            for (var x = 0; x <= teclaRepetida.length + 1; x++) {
                
                if (tecla[0] == teclaRepetida[x]) {
                    existeRepetida++;
                    console.log("EXISTEEE");
                } 
            }
            if (venceu == false && perdeu == false){
                if (existeRepetida == "") {
                    teclaRepetida.push(tecla);
                    
                    var teclaApertada = document.querySelector(".teclasApertadas");
                    teclaApertada.innerHTML = teclaRepetida.toString().toUpperCase().replace(/,/g,", ");
                }
            }
            console.log("palavra segredo " + palavraSegredo);
            console.log("for contando: "+i)
            console.log("array tecla repetida "+teclaRepetida)

            


            
            
        }  
    }


    /*
    Calculando Vidas
    */
    var jaExiste = false
    var contExiste = false
    var formatoletraAcertada = letraAcertada.toString().replace(/W/g,"")
    
    console.log("!!!!!!!!! "+ formatoletraAcertada )
    qntdAcertada = 0
    vidas = -1
    for (var i = 0 ; i <= teclaRepetida.length; i++) {
        for( var x = 0 ; x <= formatoletraAcertada.length ; x++) {
            if (teclaRepetida[i] == formatoletraAcertada[x]) {
                jaExiste = true
            }
            if (jaExiste == true && x == formatoletraAcertada.length) {
                qntdAcertada = 1
                vidas = vidas + qntdAcertada
                console.log("TECLAREPETIDA AQUI!!! Teclaaaaaaajaextite " + jaExiste)
                jaExiste = false
            }
        }
        jaExiste = false
    }
    /*
    Total de vidas restantes
    */
   
    vidas = vidas - teclaRepetida.length



    console.log("TECLAREPETIDA AQUI!!! Teclaaaaaaa " + jaExiste)
    console.log("TECLAREPETIDA AQUI!!! Teclaaaaaaa " + tecla[0])
    console.log("TECLAREPETIDA AQUI!!! VIDAAAAAAAASALVA " + vidaSalva)
    console.log("TECLAREPETIDA AQUI!!! qntdAcertada " + qntdAcertada)
    console.log("TECLAREPETIDA AQUI!!! qntdErrada " + qntdErrada)
    console.log("TECLAREPETIDA AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! teclarepetida " + (teclaRepetida.length))
    console.log("TECLAREPETIDA AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! letraAcertada " + letraAcertada)
    console.log("TECLAREPETIDA AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VIDA " + vidas)


    /*
    Eliminando as vidas
    */
    
    if (venceu == false && perdeu == false) {
        if (vidas == -1) {
            document.getElementById("idposte").style.display = "initial";
        }
        if (vidas <= -2) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
        }
        if (vidas <= -3) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            
        }
        if (vidas <= -4) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
        }
        if (vidas <= -5) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
            document.getElementById("idtronco").style.display = "initial";
        }
        if (vidas <= -6) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
            document.getElementById("idtronco").style.display = "initial";
            document.getElementById("idpernaEsquerda").style.display = "initial";
        }
        if (vidas <= -7) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
            document.getElementById("idtronco").style.display = "initial";
            document.getElementById("idpernaEsquerda").style.display = "initial";
            document.getElementById("idpernaDireita").style.display = "initial";
        }
        if (vidas <= -8) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
            document.getElementById("idtronco").style.display = "initial";
            document.getElementById("idpernaEsquerda").style.display = "initial";
            document.getElementById("idpernaDireita").style.display = "initial";
            document.getElementById("idbracoEsquerdo").style.display = "initial";
        }
        if (vidas <= -9) {
            document.getElementById("idposte").style.display = "initial";
            document.getElementById("idpostebarra").style.display = "initial";
            document.getElementById("idcorda").style.display = "initial";
            document.getElementById("idcabeca").style.display = "initial";
            document.getElementById("idtronco").style.display = "initial";
            document.getElementById("idpernaEsquerda").style.display = "initial";
            document.getElementById("idpernaDireita").style.display = "initial";
            document.getElementById("idbracoEsquerdo").style.display = "initial";
            document.getElementById("idbracoDireito").style.display = "initial";
            document.getElementById("idmensagem").style.display = "initial";
            document.getElementById("idmensagem").style.color = "red";

            perdeu = true

            var vcPerdeu = document.querySelector(".mensagem");
            vcPerdeu.innerHTML = "Que Pena ! ! Você Perdeu ! ! !";

        }
    }

    var stringAcertada = letraAcertada.toString().replace(/,/g,"")
    console.log("TECLAREPETIDA AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VIDA " + stringAcertada)
    console.log("TECLAREPETIDA AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VIDA " + palavraSegredo)

    if (stringAcertada == palavraSegredo && perdeu == false) {
        document.getElementById("idmensagem").style.display = "initial";
        document.getElementById("idmensagem").style.color = "green";
        /*
        document.getElementsByClassName(".letraAcertada").style.color = "green";*/
       

        var vcPerdeu = document.querySelector(".mensagem");

        vcPerdeu.innerHTML = "Parabéns ! ! Você Venceu ! ! !";
        venceu = true
    }

}

/*
Função para adicionar as palavras apertadas
*/
function teclaApertada() {console.log("TECLAREPETIDA AQUI!!! qntdAcertada " + qntdAcertada)


    var teclaApertada = document.querySelector(".teclasApertadas");
    teclaApertada.innerHTML = "testando";
}















/*
Apertando Botao Novo Jogo
*/
function botaoNovoJogo() {
    var botaoNovoJogo = document.querySelector(".botaoNovoJogo");
    return botaoNovoJogo;
}

function apertandobotaoNovoJogo() {
    var apertandobotaoNovoJogo = botaoNovoJogo().addEventListener("click", comecarJogar);
    return apertandobotaoNovoJogo;
}



/*
Apertando Botao Desistir!
*/
function botaoDesistir() {
    var botaoDesistir = document.querySelector(".botaoDesistir");
    return botaoDesistir;
}

function apertandobotaoDesistir() {
    var apertandobotaoDesistir = botaoDesistir().addEventListener("click", desistir);
    return apertandobotaoDesistir;
}

function desistir() {
    document.getElementById("idbotaoComecarNovaPalavra").style.display = "initial";
    document.getElementById("idbotaoNovoJogoDesistir").style.display = "none";
    document.getElementById("idsecaoDeAdicionarPalavra").style.display = "none";
    console.log("Apertando2");
}


/*
Botão de adicionar nova palavra
*/
function botaoAdicionarPalavra() {
    var botaoAdicionarPalavra = document.querySelector(".botaoAdicionarPalavra");
    return botaoAdicionarPalavra;
}

function apertandobotaoAdicionarPalavra() {
    var apertandobotaoAdicionarPalavra = botaoAdicionarPalavra().addEventListener("click", adicionarPalavra);
    return apertandobotaoAdicionarPalavra;
}

function adicionarPalavra() {
    document.getElementById("idbotaoComecarNovaPalavra").style.display = "none";
    document.getElementById("idbotaoNovoJogoDesistir").style.display = "none";
    document.getElementById("idsecaoDeAdicionarPalavra").style.display = "initial";

}


/*
Botao para salvar a nova palavra q começar a jogar;
*/

function botaoSalvarComecar() {
    var botaoSalvarComecar = document.querySelector(".botaoSalvarComecar");
    return botaoSalvarComecar;
}

function apertandobotaoSalvarComecar() {
    var apertandobotaoSalvarComecar = botaoSalvarComecar().addEventListener("click", salvarPalavra);
    return apertandobotaoSalvarComecar;
}


function salvarPalavra() {
    function palavraDigitada() {
        var palavraDigitada = document.querySelector("textArea");
        return palavraDigitada;
    }

    console.log("aqui eu digitei as palavras que eu escrevi "+palavraDigitada().value)

    palavraDigitada().value = ""
    





    document.getElementById("idbotaoComecarNovaPalavra").style.display = "none";
    document.getElementById("idbotaoNovoJogoDesistir").style.display = "initial";
    document.getElementById("idsecaoDeAdicionarPalavra").style.display = "none";
    
    comecarJogar();
    return palavraDigitada;

}






/*
apertando botao cancelar na janela de adicionar palavra
*/
function botaoCancelar() {
    var botaoCancelar = document.querySelector(".botaoCancelar");
    return botaoCancelar;
}

function apertandobotaoCancelar() {
    var apertandobotaoCancelar = botaoCancelar().addEventListener("click", desistir);
    return apertandobotaoCancelar;
}









apertandobotaoComecarJogar();
apertandobotaoDesistir();
apertandobotaoAdicionarPalavra();
apertandobotaoCancelar();
apertandobotaoNovoJogo();
apertandobotaoSalvarComecar();
escutaTeclado();
