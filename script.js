$(document).ready(function() {

    $(".btn-success").click(function(){
        $('h1').html("Ciências da natureza (Química, Física e Biologia)");
        $('article p').html("QUÍMICA: Ligações, modelos e estruturas atômicas e propriedades periódicas. FÍSICA: Termologia, dilatação, calorimetria, gases ideais e movimento. BIOLOGIA: Organização celular, ecologia e suas relações, ODS da ONU e transformações energéticas.");
      });

    $(".btn-danger").click(function(){
        $('h1').html("Ciências Humanas");
        $('article p').html("Teorias das necessidades, meio técnico-científico-informacional, sistema capitalista, revolução industrial, obsolescência, ODS e produção e consumo.");
      });

    $(".btn-primary").click(function(){
        $('h1').html("Matemática");
        $('article p').html("Funções, equações, propriedades, métodos de resolução, logaritmos e geogebra.");
      });

    $(".btn-info").click(function(){
        $('h1').html("Linguagens (Português e Inglês)");
        $('article p').html("PORTUGUÊS: Literatura, mitos e preconceitos linguísticos, tipologia, gêneros, entrevista, notícia, crônica e uso dos porquês. INGLÊS: pronomes, pronomes objetivos, possessivos, palavras comuns nas linguagens HTML e CSS e tecnologia da comunicação e informação. Educação Física, estudamos ginástica, dança, brincadeira e esportes.");
      });

    $(".btn-warning").click(function(){
      $('h1').html("Projeto de Vida");
      $('article p').html("Soft skills, CHAve, criação de currículos, técnicas de estudo e cronogramas.");
      });

    $(".btn-dark").click(function(){
      $('h1').html("Projeto Profissional");
      $('article p').html("Memorando, carta e bilhete, criação de currículos, entrevista de emprego, aplicativos office, aplicativos de organização e abertura de empresas.");
      });
      
        $(".btn-secondary").click(function(){
            $('h1').html("Técnico");
            $('article p').html("História da computação, navegadores, VSCode, HTML, CSS, tabelas, pseudo-classes e pseudo-elementos, Github, repositórios, formulários e frameworks, Javascript e JQuery.");
    });
})