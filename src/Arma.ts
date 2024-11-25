class Arma {
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

const espadaLonga = new Arma("Espada Enferrujada Longa", 50, "Uma espada com marcas do tempo, forjada em aço, ideal para combate corpo a corpo.");
console.log(espadaLonga.getNome()); 
console.log(espadaLonga.getDescricao()); 
console.log(espadaLonga.getDano()); 

espadaLonga.setDano(60);
console.log(espadaLonga.getDano()); 

// tentativa de valor inválido (gera erro)
// espadaLonga.setDano(-10); // Gera um erro: "O valor de dano não pode ser negativo."
