<h1>Desafio de projeto do Lua: Drag Race.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Rupaul drag race" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Drag Race,js é uma série de jogos de corrida desenvolvida baseado na corrida de drags masi famosa do mundo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas com o reality, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Valentina</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 5</p>
                <p>Snatch Game: 1</p>
                <p>Maxichallenge: 4</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Denali</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 4</p>
                <p>Snatch Game: 3</p>
                <p>Maxichallenge: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Gottmilk</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 3</p>
                <p>Snatch Game: 4</p>
                <p>Maxichallenge: 5</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bianca Del Rio</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 2</p>
                <p>Snatch Game: 5</p>
                <p>Maxichallenge: 3</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Nicky Doll</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 4</p>
                <p>Snatch Game: 2</p>
                <p>Maxichallenge: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Brooke Lynn Hytes</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>CatWalk: 5</p>
                <p>Snatch Game: 3</p>
                <p>Maxichallenge: 4</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>As Queens:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Categoria:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão concorrer em uma categoria aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado uma categoria da de estilos que pode ser uma Catwalk, Snatch game ou Maxichallenge</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso a categoria seja uma Catwalk, a queen deve jogar um dado de 6 lados e somar o atributo CATWALK, quem vencer ganha um RUbrooche</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso a categoria seja uma Snatch game, a queen deve jogar um dado de 6 lados e somar o atributo COMEDYQUEEN, quem vencer ganha um RUbrooche</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso categoria seja um Maxichallenge, a queen deve jogar um dado de 6 lados e somar o atributo LOOK, quem perder, perde um RUbrooche</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhuma das queens pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais RUbrooche</label>
