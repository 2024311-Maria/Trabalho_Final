# Memória descritiva

##### Conceito
Utilizando o input de teclado, quero utilizar a animação generativa, onde o output será um jogo do estilo de jogo de ritmo.

##### Processo
Comecei por desenhar cinco linhas em perspetiva para delimitar as quatro colunas onde as notas aparecem, e seguidamente as quatro linhas, ou "lanes" que as formas percorrem. Utizando o tamanho da canvas o da janela, todos os parâmetros incluem `windowWidth` ou `windowHeight` e a `function windowResized`.

Posteriormente, desenhei um circulo sujo diâmetro aumenta com o tempo. Para o circulo se mover nas lanes, adcionei-as como constantes (e a tecla correspondente). Aqui pedi ajuda ao Copilot pois estava a ter dificuldades em ter o código a funcionar.
Para adicionar um circulo periodicamente, uso o `if` com a `frameCount`, onde dentro aleatoriza onde sai uma nota e a sua lane. Para a aceleração do circulo e o seu crescimento ao aproximar-se, uso `for (const note of notes)` e dentro tem a `const lane`, com a `const x`, `y` e `diameter`. 

O Copilot também assistiu-me com o "hit or miss" das notas/circulo, onde um `if` verifica se o resultado está correto ou não e atribui a cor. Para saber se a tecla premida é a correta, uso a `function keyPressed`, onde vê onde é a linha para clicar e atribui um delay (`hitWindow`). Dentro desta constante, pedi ajuda ao Copilot porque não estava a conseguir perceber como por esta passo a funcionar. Adicionou-se então uma constante que verifica qual é o circulo/nota mais próximo da `hitWindow`, onde `filter` por proximidade à linha e `sort` por nota mais próxima. Se não tiver nenhuma nota próxima, não faz nada (`if (!candidate) return;`).
Para a verificação se a tecla que está a ser pressionada é a correta, cria-se `const expectedKey` onde compara a tecla premida com a correspondente à lane da nota, marcando-a como correta ou errada.

Também adicionei um sistema de pontuação, onde conta as notas acertadas.