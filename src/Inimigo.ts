import { Arma } from './Arma';
import { Personagem } from './Personagem';

export class Inimigo extends Personagem {
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma);
    }

    // Sobrescrevendo o método atacar com 20% de chance de falha
    public atacar(alvo: Personagem): void {
        if (Math.random() < 0.2) {
            console.log(`${this.getNome()} tentou atacar ${alvo.getNome()}, mas falhou.`);
            return;
        }

        const dano = this.calcularDano();
        console.log(`${this.getNome()} atacou ${alvo.getNome()} causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }

    // Método para definir comportamento aleatório
    public comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random();
        if (acao < 0.5) {
            console.log(`${this.getNome()} decide atacar!`);
            this.atacar(jogador);
        } else {
            console.log(`${this.getNome()} está observando ${jogador.getNome()}...`);
        }
    }
}
