import { Arma } from './Arma';
import { Inimigo } from './Inimigo';
import { Personagem } from './Personagem';

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

// criando 5 inimigos
const inimigo1 = new Inimigo("Goblin", 100, 10, machadoDeGuerra);
const inimigo2 = new Inimigo("Orc", 150, 15, arcoCurto);
const inimigo3 = new Inimigo("Troll", 180, 20);
const inimigo4 = new Inimigo("Esqueleto", 80, 12, machadoDeGuerra);
const inimigo5 = new Inimigo("Dragão", 500, 50);

console.log(`\nInimigos criados:`);
console.log(`${inimigo1.getNome()} com vida ${inimigo1.getVida()} e arma ${inimigo1.getArma()?.getNome()}`);
console.log(`${inimigo2.getNome()} com vida ${inimigo2.getVida()} e arma ${inimigo2.getArma()?.getNome()}`);
console.log(`${inimigo3.getNome()} com vida ${inimigo3.getVida()} e arma ${inimigo3.getArma()?.getNome() || "Nenhuma"}`);
console.log(`${inimigo4.getNome()} com vida ${inimigo4.getVida()} e arma ${inimigo4.getArma()?.getNome()}`);
console.log(`${inimigo5.getNome()} com vida ${inimigo5.getVida()} e arma ${inimigo5.getArma()?.getNome() || "Nenhuma"}`);

const inimigos = [inimigo1, inimigo2, inimigo3, inimigo4, inimigo5];

// interações
console.log("\n=== INÍCIO DO COMBATE ===");


while (heroi.getVida() > 0 && inimigos.some((inimigo) => inimigo.getVida() > 0)) {
    const inimigoAtual = inimigos.find((inimigo) => inimigo.getVida() > 0);

    if (inimigoAtual) {
        console.log(`\n${heroi.getNome()} ataca ${inimigoAtual.getNome()}!`);
        heroi.atacar(inimigoAtual);

        if (inimigoAtual.getVida() <= 0) {
            console.log(`${inimigoAtual.getNome()} foi derrotado!`);
        } else {
            console.log(`${inimigoAtual.getNome()} contra-ataca ${heroi.getNome()}!`);
            inimigoAtual.atacar(heroi);
        }
    }
}


// resultado final
if (heroi.getVida() > 0) {
    console.log("\n=== O HERÓI VENCEU! Todos os inimigos foram derrotados. ===");
} else {
    console.log("\n=== O HERÓI FOI DERROTADO! Os inimigos venceram. ===");
}