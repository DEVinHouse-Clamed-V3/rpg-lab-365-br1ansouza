import { Arma } from './Arma';
import { Personagem } from './Personagem';
import { Inimigo } from './Inimigo';

// criando armas
const espadaLonga = new Arma("Espada Enferrujada Longa", 50, "Uma espada antiga, forjada em aço.");
const espadaCurta = new Arma("Espada Curta", 15, "Uma espada simples, mas eficiente.");

// criando personagens
const guerreiro = new Personagem("Guerreiro", 100, 20, espadaLonga);
const goblin = new Inimigo("Goblin", 60, 10, espadaCurta);

// combate
console.log("Início do combate!");
goblin.comportamentoAleatorio(guerreiro);
guerreiro.atacar(goblin);
