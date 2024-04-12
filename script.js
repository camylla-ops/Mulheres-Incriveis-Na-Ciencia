function carregaDicionario() {
    var mulheresIncriveis = {
        mulher01: {
            nome: "Marie Curie",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/300px-Marie_Curie_c1920.jpg",
            descricao: "Marie Skłodowska Curie foi uma física e química polonesa, posteriormente naturalizada francesa. Foi a primeira pessoa a receber dois Prêmios Nobel em diferentes áreas científicas: Física e Química.",
            citacao: "Nada na vida deve ser temido, apenas compreendido. Agora é hora de compreender mais, para temer menos."
        },
        mulher02: {
            nome: "Rosalind Franklin",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/97/Rosalind_Franklin.jpg/300px-Rosalind_Franklin.jpg",
            descricao: "Rosalind Elsie Franklin foi uma química e cristalógrafa britânica, cujo trabalho foi fundamental para a compreensão da estrutura do DNA, RNA, vírus, carvão e grafite.",
            citacao: "A ciência e a vida moderna como um todo são inseparáveis. Quem quer que pense em aplicar a ciência para sua própria vida precisa reconhecer a responsabilidade moral."
        },
        mulher03: {
            nome: "Ada Lovelace",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/240px-Ada_Lovelace_portrait.jpg",
            descricao: "Augusta Ada King, Condessa de Lovelace, foi uma matemática e escritora britânica. Foi a primeira pessoa a reconhecer que os computadores tinham aplicações além de cálculos matemáticos, e criou o primeiro algoritmo destinado a ser processado por uma máquina.",
            citacao: "A submissão é um crime contra a razão e a natureza humana."
        },
        mulher04: {
            nome: "Emmy Noether",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Noether.jpg/300px-Noether.jpg",
            descricao: "Amalie Emmy Noether foi uma matemática alemã que fez contribuições fundamentais para a álgebra abstrata e teoria dos números.",
            citacao: "O desenvolvimento da matemática é impulsionado pelo desejo de resolver um problema em particular, não pela necessidade de desenvolver um campo."
        },
        mulher05: {
            nome: "Jane Goodall",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jane-goodall.jpg/300px-Jane-goodall.jpg",
            descricao: "Dame Jane Morris Goodall é uma primatóloga, etóloga, antropóloga e mensageira da paz da ONU britânica.",
            citacao: "O importante é que você nunca pare de fazer perguntas."
        },
        mulher06: {
            nome: "Katherine Johnson",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Katherine_Johnson_in_2008.jpg/405px-Katherine_Johnson_in_2008.jpg",
            descricao: "Katherine Coleman Goble Johnson foi uma matemática e física norte-americana que fez contribuições importantes para o programa espacial dos Estados Unidos.",
            citacao: "Eu mudaria o mundo hoje."
        },
        // Adicione mais mulheres incríveis aqui
    };

    var content = document.getElementById("content");

    for (var mulher in mulheresIncriveis) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' + mulheresIncriveis[mulher].imagem + '"/>' +
            "<details>" +
            "<summary>" + mulheresIncriveis[mulher].nome + "</summary>" +
            "<p>" + mulheresIncriveis[mulher].descricao + "</p>" +
            "<blockquote><q>" + mulheresIncriveis[mulher].citacao + "</q></blockquote>" +
            "</details></div>";
    }
}

carregaDicionario();
