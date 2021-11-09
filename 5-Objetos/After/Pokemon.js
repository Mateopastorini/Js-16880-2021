
class Pokemon {
    constructor(nombre, tipo, vidas, ataqueBasico) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidas = vidas;
        this.ataqueBasico = ataqueBasico;
        this.nivel = 1
    }

    atacar(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} esta atacando al pokemon ${pokemonAtacado.nombre} con un daño de ${this.ataqueBasico}`)
        pokemonAtacado.recibirAtaque(this.ataqueBasico)
    }

    recibirAtaque(dañoAtaque) {
        this.vidas -= dañoAtaque // this.vidas = this.vidas - dañoAtaque
        if(this.vidas <= 0) {
            console.log(`El pokemon ${this.nombre} ha sido derrotado`)
        } else {
            console.log(`El pokemon ${this.nombre} aun sigue peleando con ${this.vidas} de vida`)
        }
    }
}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, ataqueBasico, dañoImpactrueno ) {
        super(nombre,tipo,vidas,ataqueBasico)
        this.dañoImpactrueno = dañoImpactrueno;
    }

    deciPika() {
        console.log(`El pikachu con nombre ${this.nombre} dice Pika pika`)
    }

    impactrueno(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo impactrueno al pokemon ${pokemonAtacado.nombre} con un daño de ${this.dañoImpactrueno}`)
        if(pokemonAtacado.tipo == "agua") {
            pokemonAtacado.recibirAtaque(this.dañoImpactrueno * 2)
        } else {
            pokemonAtacado.recibirAtaque(this.dañoImpactrueno)
        }
    }
}

class Squirtle extends Pokemon {
    constructor(nombre, tipo, vidas, ataqueBasico, dañoTorrente ) {
        super(nombre,tipo,vidas,ataqueBasico)
        this.dañoTorrente = dañoTorrente;
    }

    torrente(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo torrente al pokemon ${pokemonAtacado.nombre} con un daño de ${this.dañoTorrente}`)
        if(pokemonAtacado.tipo == "fuego") {
            pokemonAtacado.recibirAtaque(this.dañoTorrente * 2)
        } else {
            pokemonAtacado.recibirAtaque(this.dañoTorrente)
        }
    }
}

class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, ataqueBasico, dañoLlamarada ) {
        super(nombre,tipo,vidas,ataqueBasico)
        this.dañoLlamarada = dañoLlamarada;
    }

    llamarada(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo llamarada al pokemon ${pokemonAtacado.nombre} con un daño de ${this.dañoLlamarada}`)
        if(pokemonAtacado.tipo == "planta") {
            pokemonAtacado.recibirAtaque(this.dañoLlamarada * 2)
        } else {
            pokemonAtacado.recibirAtaque(this.dañoLlamarada)
        }
    }
}
