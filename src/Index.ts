import { Arma } from './Arma';
import { Inimigo } from './Inimigo';
import { Personagem } from './Personagem';
import { Chefe } from './Chefe';

// criando 3 armas
const espadaLonga = new Arma("Espada Enferrujada Longa", 50, "Uma espada clássica de metal, com marcas severas do tempo, e ideal para combates de média distância.");
const machadoDeGuerra = new Arma("Machado de Guerra", 70, "Um machado pesado, perfeito para cortes devastadores.");
const arcoCurto = new Arma("Arco Curto", 30, "Um arco leve e prático para ataques à distância.");

// detalhes das armas
console.log(`\nArma 1: ${espadaLonga.getNome()} - Dano: ${espadaLonga.getDano()}, Descrição: ${espadaLonga.getDescricao()}`);
console.log(`Arma 2: ${machadoDeGuerra.getNome()} - Dano: ${machadoDeGuerra.getDano()}, Descrição: ${machadoDeGuerra.getDescricao()}`);
console.log(`Arma 3: ${arcoCurto.getNome()} - Dano: ${arcoCurto.getDano()}, Descrição: ${arcoCurto.getDescricao()}`);

// personagem principal
const heroi = new Personagem("Herói", 400, 50);
heroi.equiparArma(espadaLonga);
console.log(`\nPersonagem criado: ${heroi.getNome()} com vida ${heroi.getVida()} e arma ${heroi.getArma()?.getNome()}`);

// criando inimigos
const goblin = new Inimigo("Goblin", 100, 10, machadoDeGuerra);
const orc = new Inimigo("Orc", 150, 25, arcoCurto);
const chefe = new Chefe("Dragão", 400, 50, machadoDeGuerra);

// interações
console.log("\n=== INÍCIO DO COMBATE ===");

while (heroi.getVida() > 0 && (goblin.getVida() > 0 || orc.getVida() > 0 || chefe.getVida() > 0)) {
    if (goblin.getVida() > 0) {
        console.log(`\n${heroi.getNome()} ataca ${goblin.getNome()}!`);
        heroi.atacar(goblin);

        if (goblin.getVida() > 0) {
            console.log(`${goblin.getNome()} contra-ataca ${heroi.getNome()}!`);
            goblin.atacar(heroi);
        }
    }

    if (orc.getVida() > 0) {
        console.log(`\n${heroi.getNome()} ataca ${orc.getNome()}!`);
        heroi.atacar(orc);

        if (orc.getVida() > 0) {
            console.log(`${orc.getNome()} contra-ataca ${heroi.getNome()}!`);
            orc.atacar(heroi);
        }
    }

    if (chefe.getVida() > 0) {
        console.log(`\n${heroi.getNome()} ataca ${chefe.getNome()}!`);
        heroi.atacar(chefe);

        if (chefe.getVida() > 0) {
            console.log(`${chefe.getNome()} contra-ataca ${heroi.getNome()}!`);
            chefe.atacar(heroi);
        }
    }
}


// resultado final
if (heroi.getVida() > 0) {
    console.log("\n=== O HERÓI VENCEU! Todos os inimigos foram derrotados. ===");
} else {
    console.log("\n=== O HERÓI FOI DERROTADO! Os inimigos venceram. ===");
}