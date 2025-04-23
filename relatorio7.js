
class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    printInfo() {
      console.log(`Nome: ${this.nome} | Idade: ${this.idade} | Espécie: ${this.especie}`);
    }
  }
  

  class Cachorro extends Animal {
    #raca; 

    constructor(nome, idade, raca) {
      super(nome, idade, 'Cachorro');
      this.#raca = raca;
    }

    printInfo() {
      super.printInfo();
      console.log(`Raça: ${this.#raca}`);
    }
  }


    class Gato extends Animal {
    constructor(nome, idade, cores) {
      super(nome, idade, 'Gato');
      this.cores = cores; 
    }
  
    printInfo() {
      super.printInfo();
      console.log(`Cores: ${this.cores.join(', ')}`);
    }
  }
  
  
  const animalGenerico = new Animal('Bicho-Papão', 4, 'Criatura');
  const meuCachorro   = new Cachorro('Bolt', 2, 'Border Collie');
  const meuGato       = new Gato('Mingau', 3, ['branco', 'cinza']);
  
  animalGenerico.printInfo();
  console.log('----------------------------');
  meuCachorro.printInfo();
  console.log('----------------------------');
  meuGato.printInfo();
  