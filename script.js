
/* =========================================
   PIPO HAPPY
   JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURAÇÃO DOS PRODUTOS
========================================= */

const produtos = {

    1: {
        nome: "Pipoca 1",

        resumo:
            "Uma combinação especial de ingredientes selecionados para uma experiência deliciosa.",

        descricao:
            "Uma pipoca gourmet preparada artesanalmente com ingredientes selecionados e muito carinho. Uma combinação pensada para transformar uma simples pipoca em um momento especial.",

        foto1: "pipoca-1-foto-1.jpg",
        foto2: "pipoca-1-foto-2.jpg",
        foto3: "pipoca-1-foto-3.jpg"
    },


    2: {
        nome: "Pipoca 2",

        resumo:
            "Um sabor especial preparado com equilíbrio e aquele toque único da Pipo Happy.",

        descricao:
            "Uma pipoca gourmet feita para quem gosta de experimentar novos sabores. Cada detalhe é preparado com cuidado para entregar uma experiência saborosa e marcante.",

        foto1: "pipoca-2-foto-1.jpg",
        foto2: "pipoca-2-foto-2.jpg",
        foto3: "pipoca-2-foto-3.jpg"
    },


    3: {
        nome: "Pipoca 3",

        resumo:
            "Uma criação especial para quem gosta de descobrir novos sabores.",

        descricao:
            "Uma opção especial da Pipo Happy, preparada artesanalmente para combinar sabor, textura e uma apresentação diferenciada.",

        foto1: "pipoca-3-foto-1.jpg",
        foto2: "pipoca-3-foto-2.jpg",
        foto3: "pipoca-3-foto-3.jpg"
    },


    4: {
        nome: "Pipoca 4",

        resumo:
            "Uma criação especial feita para surpreender pelo sabor.",

        descricao:
            "Uma das criações da Pipo Happy. Uma pipoca preparada com atenção aos detalhes para proporcionar uma experiência deliciosa do primeiro ao último pedacinho.",

        foto1: "pipoca-4-foto-1.jpg",
        foto2: "pipoca-4-foto-2.jpg",
        foto3: "pipoca-4-foto-3.jpg"
    }

};


/* =========================================
   WHATSAPP
========================================= */

const LINK_WHATSAPP = "LINK-DO-WHATSAPP-AQUI";


/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        inicializarSite();

    }
);


/* =========================================
   INICIALIZAR SITE
========================================= */

function inicializarSite() {

    criarProdutos();

    configurarMenu();

    configurarLinksMenu();

    configurarModal();

    configurarHash();

}


/* =========================================
   CRIAR CARDS DOS PRODUTOS
========================================= */

function criarProdutos() {

    const grade =
        document.getElementById("grade-produtos");


    /*
       Se a grade não existir nesta página,
       simplesmente não faz nada.
    */

    if (!grade) {

        return;

    }


    grade.innerHTML = "";


    Object.keys(produtos).forEach(
        function (numero) {

            const produto =
                produtos[numero];


            const card =
                document.createElement("article");


            card.className =
                "card-produto";


            /*
               Ao clicar no card,
               abre a página do produto.
            */

            card.addEventListener(
                "click",
                function () {

                    abrirProduto(numero);

                }
            );


            card.innerHTML = `

                <div class="card-imagem">

                    <img
                        src="${produto.foto1}"
                        alt="${produto.nome}"
                        loading="lazy"
                    >

                </div>

                <div class="card-conteudo">

                    <h3>
                        ${produto.nome}
                    </h3>

                    <p>
                        ${produto.resumo}
                    </p>

                    <span class="card-link">
                        Conhecer sabor →
                    </span>

                </div>

            `;


            grade.appendChild(card);

        }
    );

}


/* =========================================
   ABRIR PRODUTO
========================================= */

function abrirProduto(numero) {

    const produto =
        produtos[numero];


    if (!produto) {

        return;

    }


    const inicio =
        document.getElementById("inicio");

    const paginaProduto =
        document.getElementById("pagina-produto");


    /*
       Verifica se as duas áreas existem.
    */

    if (!inicio || !paginaProduto) {

        console.error(
            "Não foi possível abrir o produto. Verifique se #inicio e #pagina-produto existem no HTML."
        );

        return;

    }


    /* =====================================
       ATUALIZA TÍTULO
    ===================================== */

    const titulo =
        document.getElementById(
            "produto-titulo"
        );


    if (titulo) {

        titulo.textContent =
            produto.nome;

    }


    /* =====================================
       ATUALIZA RESUMO
    ===================================== */

    const resumo =
        document.getElementById(
            "produto-resumo"
        );


    if (resumo) {

        resumo.textContent =
            produto.resumo;

    }


    /* =====================================
       ATUALIZA DESCRIÇÃO
    ===================================== */

    const descricao =
        document.getElementById(
            "produto-descricao"
        );


    if (descricao) {

        descricao.textContent =
            produto.descricao;

    }


    /* =====================================
       ATUALIZA FOTOS
    ===================================== */

    const foto1 =
        document.getElementById(
            "produto-foto-1"
        );

    const foto2 =
        document.getElementById(
            "produto-foto-2"
        );

    const foto3 =
        document.getElementById(
            "produto-foto-3"
        );


    if (foto1) {

        foto1.src =
            produto.foto1;

        foto1.alt =
            produto.nome;

    }


    if (foto2) {

        foto2.src =
            produto.foto2;

        foto2.alt =
            produto.nome;

    }


    if (foto3) {

        foto3.src =
            produto.foto3;

        foto3.alt =
            produto.nome;

    }


    /* =====================================
       WHATSAPP
    ===================================== */

    const botaoWhatsApp =
        document.getElementById(
            "produto-whatsapp"
        );


    if (botaoWhatsApp) {

        const mensagem =
            encodeURIComponent(
                `Olá! Gostaria de fazer um pedido da Pipo Happy. Tenho interesse na ${produto.nome}.`
            );


        if (
            LINK_WHATSAPP &&
            LINK_WHATSAPP !==
            "LINK-DO-WHATSAPP-AQUI"
        ) {

            botaoWhatsApp.href =
                `${LINK_WHATSAPP}?text=${mensagem}`;

            botaoWhatsApp.onclick = null;

        } else {

            botaoWhatsApp.href =
                "#";


            botaoWhatsApp.onclick =
                function (evento) {

                    evento.preventDefault();


                    alert(
                        "O link do WhatsApp ainda precisa ser configurado."
                    );

                };

        }

    }


    /* =====================================
       TROCAR PÁGINA
    ===================================== */

    inicio.style.display =
        "none";


    paginaProduto.style.display =
        "block";


    /* =====================================
       FECHAR MENU
    ===================================== */

    fecharMenu();


    /* =====================================
       ATUALIZAR URL
    ===================================== */

    window.location.hash =
        `produto-${numero}`;


    /* =====================================
       VOLTAR PARA O TOPO
    ===================================== */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   VOLTAR PARA INÍCIO
========================================= */

function mostrarInicio() {

    const inicio =
        document.getElementById("inicio");

    const paginaProduto =
        document.getElementById("pagina-produto");


    if (paginaProduto) {

        paginaProduto.style.display =
            "none";

    }


    if (inicio) {

        inicio.style.display =
            "block";

    }


    fecharMenu();


    /*
       Remove o hash da URL.
    */

    history.replaceState(
        null,
        "",
        window.location.pathname
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   CONFIGURAR MENU
========================================= */

function configurarMenu() {

    const botaoMenu =
        document.getElementById("botao-menu");

    const menu =
        document.getElementById("menu");


    /*
       Se não houver menu ou botão,
       não gera erro.
    */

    if (!botaoMenu || !menu) {

        return;

    }


    botaoMenu.addEventListener(
        "click",
        function () {

            menu.classList.toggle(
                "aberto"
            );

        }
    );

}


/* =========================================
   FECHAR MENU
========================================= */

function fecharMenu() {

    const menu =
        document.getElementById("menu");


    if (!menu) {

        return;

    }


    menu.classList.remove(
        "aberto"
    );

}


/* =========================================
   LINKS DO MENU
========================================= */

function configurarLinksMenu() {

    const links =
        document.querySelectorAll(
            ".menu-link"
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    fecharMenu();

                }
            );

        }
    );

}


/* =========================================
   VERIFICAR HASH
========================================= */

function verificarHash() {

    const hash =
        window.location.hash;


    if (
        !hash.startsWith("#produto-")
    ) {

        return;

    }


    const numero =
        hash.replace(
            "#produto-",
            ""
        );


    if (
        produtos[numero]
    ) {

        abrirProduto(numero);

    }

}


/* =========================================
   CONFIGURAR HASH
========================================= */

function configurarHash() {

    verificarHash();


    window.addEventListener(
        "hashchange",
        function () {

            verificarHash();

        }
    );

}


/* =========================================
   MODAL DE IMAGEM
========================================= */

function abrirImagem(src) {

    const modal =
        document.getElementById(
            "modal-imagem"
        );

    const imagem =
        document.getElementById(
            "imagem-ampliada"
        );


    if (!modal || !imagem) {

        return;

    }


    imagem.src =
        src;


    modal.classList.add(
        "ativo"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   FECHAR MODAL
========================================= */

function fecharImagem() {

    const modal =
        document.getElementById(
            "modal-imagem"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "ativo"
    );


    document.body.style.overflow =
        "";

}


/* =========================================
   ESC PARA FECHAR MODAL
========================================= */

function configurarModal() {

    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Escape"
            ) {

                fecharImagem();

            }

        }
    );

}
