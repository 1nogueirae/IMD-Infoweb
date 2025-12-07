

Em grupos de até 3 pessoas:

Criem uma página web utilizando HTML, CSS e JS para exibir uma playlist de um álbum da taylor swift. No site deve ser possível

    listar todas as músicas
    a partir de um menu, acessar uma galeria de imagens (referenciadas por link), a galeria de vídeos e lista de músicas
    ver as letras das músicas
    tocar os vídeos das músicas internamente
    os vídeos devem ser referências de vídeos no youtube
    a aparência do site deve seguir o padrão estético do álbum escolhido

    usando métodos jQuery, faça os vídeos reagirem a eventos de cursor do mouse para que, quando o cursor ficar em cima do link/imagem do vídeo, a miniatura seja destacada, e quando o cursor sair, a miniatura volte ao normal ou desapareça

    utilize onde preferir efeito de aparecer/desaparecer deve ser feito com show/hide do jQuery, com tempo de animação de 2000ms.

A imagem do vídeo deve ser um script Javascript para:
● Crie um array contendo todos os links (dos vídeos e das imagens) dessa página utilizando a biblioteca jQuery.
● Percorra todos os elementos do array. Para cada elemento:

o Encontre o atributo href e armazene em uma variável.
o Gere a URL referente ao thumbnail (miniatura do vídeo) utilizando o método youtube.generateThumbnailUrl(url), um método incluído na biblioteca js <http://www.teachingmaterials.org/common/youtube.js> (importe a biblioteca para poder utilizá-la em seu código).
o Crie um elemento <img> utilizando a biblioteca jQuery.
o Defina o atributo src com o valor da URL do thumbnail do elemento img usando jQuery.
o Adicione elemento img ao link com prepend().

Utilize a api <https://taylor-swift-api.sarbo.workers.dev> para pegar os nomes das músicas e as letras.

Documentação da api <https://github.com/sarbor/taylor_swift_api>
