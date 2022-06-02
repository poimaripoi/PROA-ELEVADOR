class Elevador {
    constructor(
      terreo,
      andarAtual,
      totalAndares,
      capacidadeElevador,
      quantidadeAtual
    ) {
      this.terreo = terreo
      this.andarAtual = andarAtual
      this.totalAndares = totalAndares
      this.capacidadeElevador = capacidadeElevador
      this.quantidadeAtual = quantidadeAtual
    }

    entrar(quantidadeAtual, capacidadeElevador) {
      if (quantidadeAtual < capacidadeElevador) {
        var maisPessoas = quantidadeAtual++
        console.log('Indo ao destino.')
      } else {
        console.log('Capacidade máxima atingida.')
      }
    }

    sair(quantidadeAtual) {
      if (quantidadeAtual == 0) {
        console.log('Não há pessoas no elevador.')
      } else {
        var menosPessoas = quantidadeAtual--
        console.log('Alguém chegou ao destino.')
      }
    }

    subir(andarAtual, totalAndares) {
      if (andarAtual == totalAndares) {
        console.log('O elevador está no último andar. Aperte para descer!')
      } else {
        var subidaElevador = andarAtual++
        console.log(
          'Você subiu e agora está no ' + subidaElevador + 'º andar.'
        )
      }
    }

    descer(andarAtual) {
      if (andarAtual == 0) {
        console.log('O elevador está no térreo. Aperte para subir!.')
      } else {
        var descidaElevador = andarAtual--
        console.log(
          'Você desceu e agora está no ' + descidaElevador + 'º andar.'
        )
      }
    }
  }

  var resultado = new Elevador(0, 2, 12, 5, 4)
  resultado.entrar(2, 5)
  resultado.sair(0)
  resultado.subir(5, 12)
  resultado.descer(0, 12)