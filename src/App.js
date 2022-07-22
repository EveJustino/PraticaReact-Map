//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import React, { Component } from "react";

export default class Map extends Component {
  state = {
    objects: [
      { nome: "Larissa", idade: 27, comida: "lasanha" },
      {
        nome: "Evelyn",
        idade: 20,
        comida: "nhoque"
      },
      {
        nome: "Bru",
        idade: 18,
        comida: "escondidinho"
      },
      {
        nome: "Levi",
        idade: 30,
        comida: "feijoada"
      },
      {
        nome: "Ciça",
        idade: 35,
        comida: "sorvete"
      },
      {
        nome: "Filó",
        idade: 22,
        comida: "moqueca"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.objects.map((item) => (
          <div>
            <p>
              Meu nome é {item.nome}, tenho {item.idade} anos e minha comida
              preferida é {item.comida}!
            </p>
          </div>
        ))}
      </div>
    );
  }
}
