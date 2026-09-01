class Veiculo {
    constructor(chassi, marca, modelo, ano, preco, status, cor, placa) {
        this.chassi = chassi;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
        this.status = status;
        this.cor = cor;
        this.placa = placa;
    }

    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
    }

    alterarStatus(novoStatus) {
        this.status = novoStatus;
    }
}

class Carro extends Veiculo {
    constructor(
        chassi,
        marca,
        modelo,
        ano,
        preco,
        status,
        cor,
        placa,
        quantidadePortas,
        tipoCombustivel,
        possuiArCondicionado
    ) {
        super(chassi, marca, modelo, ano, preco, status, cor, placa);

        this.quantidadePortas = quantidadePortas;
        this.tipoCombustivel = tipoCombustivel;
        this.possuiArCondicionado = possuiArCondicionado;
    }

    calcularIPVA() {
        return this.preco * 0.04;
    }

    verificarOpcionais() {
        if (this.possuiArCondicionado) {
            return "O veículo possui ar-condicionado.";
        } else {
            return "O veículo não possui ar-condicionado.";
        }
    }
}


class Moto extends Veiculo {
    constructor(
        chassi,
        marca,
        modelo,
        ano,
        preco,
        status,
        cor,
        placa,
        cilindradas,
        tipoPartida,
        estilo
    ) {
        super(chassi, marca, modelo, ano, preco, status, cor, placa);

        this.cilindradas = cilindradas;
        this.tipoPartida = tipoPartida;
        this.estilo = estilo;
    }

    calcularIPVA() {
        return this.preco * 0.02;
    }

    verificarCategoriaCNH() {
        if (this.cilindradas > 50) {
            return "Categoria A.";
        } else {
            return "Pode ser conduzida com categoria A, conforme a legislação aplicável.";
        }
    }
}


class Caminhao extends Veiculo {
    constructor(
        chassi,
        marca,
        modelo,
        ano,
        preco,
        status,
        cor,
        placa,
        capacidadeCargaTonas,
        quantidadeEixos,
        tipoCarroceria
    ) {
        super(chassi, marca, modelo, ano, preco, status, cor, placa);

        this.capacidadeCargaTonas = capacidadeCargaTonas;
        this.quantidadeEixos = quantidadeEixos;
        this.tipoCarroceria = tipoCarroceria;
    }

    calcularIPVA() {
        return this.preco * 0.01;
    }

    verificarPermissaoCirculacao() {
        if (this.quantidadeEixos >= 2 && this.capacidadeCargaTonas > 0) {
            return true;
        } else {
            return false;
        }
    }
}
const carro = new Carro(
    "9BWZZZ377VT004251",
    "Volkswagen",
    "Gol",
    2020,
    45000,
    "Disponível",
    "Prata",
    "ABC-1234",
    4,
    "Flex",
    true
);

const moto = new Moto(
    "9C2KC0810LR000001",
    "Honda",
    "CG 160",
    2022,
    18000,
    "Disponível",
    "Preta",
    "XYZ-5678",
    160,
    "Elétrica",
    "Street"
);

const caminhao = new Caminhao(
    "9BWSU42X0DR000001",
    "Volkswagen",
    "Delivery",
    2021,
    180000,
    "Disponível",
    "Branco",
    "DEF-9012",
    5,
    2,
    "Baú"
);

console.log(" CARRO ");
console.log(carro);
console.log("IPVA:", carro.calcularIPVA());
console.log("Opcionais:", carro.verificarOpcionais());

console.log("\n MOTO ");
console.log(moto);
console.log("IPVA:", moto.calcularIPVA());
console.log("Categoria CNH:", moto.verificarCategoriaCNH());

console.log("\n CAMINHÃO ");
console.log(caminhao);
console.log("IPVA:", caminhao.calcularIPVA());
console.log("Permissão de circulação:",caminhao.verificarPermissaoCirculacao()
);

console.log("\n ATUALIZAÇÕES ");

carro.atualizarPreco(47000);
console.log("Novo preço do carro:", carro.preco);

moto.alterarStatus("Vendido");
console.log("Novo status da moto:", moto.status);

caminhao.alterarStatus("Vendido");
console.log("Novo status do caminhão:", caminhao.status);