import { Arma } from './Arma';
import { Inimigo } from './Inimigo';
import { Personagem } from './Personagem';

export class Chefe extends Inimigo {
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma);
    }

    // sobrescreve o método atacar para causar o dobro de dano
    public atacar(alvo: Personagem): void {
        if (Math.random() < 0.2) {
            console.log(`${this.getNome()} tentou atacar ${alvo.getNome()}, mas falhou.`);
            return;
        }

        const dano = this.calcularDano() * 2; // Dano dobrado
        console.log(`${this.getNome()} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }

    // comportamento ao chegar a zero de vida
    public receberDano(dano: number): void {
        super.receberDano(dano);

        if (this.getVida() <= 0 && Math.random() < 0.2) {
            console.log(`${this.getNome()} foi derrotado, mas realizou uma última ação antes de cair!`);
            this.ultimaAcao();
        }
    }

    private ultimaAcao(): void {
        const acao = Math.random();

        if (acao < 0.5) {
            console.log(`${this.getNome()} soltou um grito ensurdecedor, assustando os adversários!`);
        } else {
            console.log(`${this.getNome()} lançou uma última explosão, causando dano em área!`);
        }
    }
}
