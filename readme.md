# Memória descritiva

##### Conceito
Utilizando o input de teclado, quero utilizar a animação generativa, onde o output será um jogo

ingredientes escolhidos (input, expressão, output), relação com o projeto de DPI, e eventuais recursos a LLMs utilizados.


tenho uma ideia. quero fazer um jogo para o projeto final onde aparecem formas na tela, onde dentro delas tem uma palavra que o user deve escrever antes da forma "explodir" no ecra. ou seja, a forma está a aproximar-se de nós e temos q acertar na digitação da palavra dentro, de não perdemos o jogo.



• as formas vêm de onde p onde? spawnam em pontos aleatórios e crescem (zoom) ou movem-se do fundo p a frente?
• vida das formas: timer ou tamanho máximo? quando "explodem" perdes vida ou pontos?
• palavra parcial: letras certas ficam a verde e erradas reiniciam, ou tens de escrever a palavra toda sem erro?
• lista de palavras: tens ficheiro próprio ou é array no sketch?


p/ o movimento "do fundo p frente" o truque é cada forma ter um z (distância) que vai diminuindo no draw. o tamanho no ecrã = tamanhoBase / z (quanto menor z, maior aparece). a posição x,y também podes escalar a partir do centro p dar sensação de aproximação.

p/ o piscar que intensifica: mapeias o z ao alpha ou à frequência do piscar com map() — ex: frameCount % intervalo, onde intervalo diminui com z.

estrutura: classe Forma com {x, y, z, palavra, progresso}. array de formas ativas. quando z < limite → explode → vidas--.



oq irei escrever aq ->

pedi ajuda ao copilot para me explicar como fazer a minha ideia, pois não sabia como concretiza-la. para cada lane, é definido uma constante com as coordenadas de inicio e fim e a letra para premir. crio tbm uma variavel para os circulos/notas.
Para adicionar um circulo periodicamente, uso o if com a frameCount, onde dentro aleatoriza onde sai uma nota e a sua lane. Para a acelaração do circulo e o seu crescimento ao aproximar-se, uso for (const note of notes) e dentro tem a const lane, com a const x, y e diameter, 