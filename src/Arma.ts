export class Arma {
    private readonly nome: string;
    private readonly descricao: string;
    private dano: number;

    constructor(nome: string, dano: number, descricao: string) {
        if (dano < 0) {
            throw new Error("O valor de dano não pode ser negativo.");
        }
        this.nome = nome;
        this.dano = dano;
        this.descricao = descricao;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDano(): number {
        return this.dano;
    }

    // setter para o dano, com validação
    public setDano(novoDano: number): void {
        if (novoDano < 0) {
            throw new Error("O valor de dano não pode ser negativo.");
        }
        this.dano = novoDano;
    }
}