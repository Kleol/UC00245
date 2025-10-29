import { Component } from '@angular/core';

@Component({
  selector: 'app-aula04',
  standalone: true,
  templateUrl: './aula04.html',
  styleUrls: ['./aula04.css']
})
export class Aula04Component {

  // Exercícios com if, else if, else e switch
  exerciciosParaFazer = () => {
    console.clear();
    console.log('--- Exercícios: Estruturas de Decisão (If, Else If, Else e Switch) ---');

    // Nota e aprovação
    let nota = 75;
    if (nota >= 60) {
      console.log(`Ex1 → Nota ${nota}: Aprovado`);
    } else {
      console.log(`Ex1 → Nota ${nota}: Reprovado`);
    }

    // Mensagem conforme faixa etária
    let idade = 25;
    if (idade < 12) {
      console.log(`Ex2 → Idade ${idade}: Criança`);
    } else if (idade < 18) {
      console.log(`Ex2 → Idade ${idade}: Adolescente`);
    } else if (idade < 65) {
      console.log(`Ex2 → Idade ${idade}: Adulto`);
    } else {
      console.log(`Ex2 → Idade ${idade}: Idoso`);
    }

    // Temperatura com operador ternário
    let temperatura = 22;
    let clima =
      temperatura < 15 ? 'Frioo' :
      temperatura <= 28 ? 'Agradável' :
      'Quente';
    console.log(`Ex3 → Temperatura ${temperatura}°C: ${clima}`);

    // Dia da semana (Switch)
    let dia = 3;
    let nomeDia = '';
    switch (dia) {
      case 1: nomeDia = 'Segunda-feira'; break;
      case 2: nomeDia = 'Terça-feira'; break;
      case 3: nomeDia = 'Quarta-feira'; break;
      case 4: nomeDia = 'Quinta-feira'; break;
      case 5: nomeDia = 'Sexta-feira'; break;
      case 6: nomeDia = 'Sábado'; break;
      case 7: nomeDia = 'Domingo'; break;
      default: nomeDia = 'Número inválido';
    }
    console.log(`Ex4 → Dia ${dia}: ${nomeDia}`);

    // Menu de operações matemáticas
    let operacao = 'multiplicar';
    let x = 6, y = 3;
    switch (operacao) {
      case 'somar':
        console.log(`Ex5 → ${x} + ${y} = ${x + y}`);
        break;
      case 'subtrair':
        console.log(`Ex5 → ${x} - ${y} = ${x - y}`);
        break;
      case 'multiplicar':
        console.log(`Ex5 → ${x} * ${y} = ${x * y}`);
        break;
      case 'dividir':
        console.log(`Ex5 → ${x} / ${y} = ${x / y}`);
        break;
      default:
        console.log('Ex5 → Operação inválida');
    }

    // Classificar cor
    let cor = 'verde';
    switch (cor) {
      case 'vermelho':
        console.log('Ex6 → Cor quente');
        break;
      case 'verde':
        console.log('Ex6 → Cor natural');
        break;
      case 'azul':
        console.log('Ex6 → Cor fria');
        break;
      default:
        console.log('Ex6 → Outra cor');
    }

  
  };

  // Demonstrações com operador ternário
  ternario = () => {
    console.clear();
    console.log('--- Exercícios Práticos com Ternário ---');

    // Ex1: Verificador de Maioridade
    let idade = 20;
    let resultado = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
    console.log(`Ex1 → ${idade} anos: ${resultado}`);

    // Ex2: Verificador de Par ou Ímpar
    let numero = 7;
    let tipo = numero % 2 === 0 ? 'Par ' : 'Ímpar';
    console.log(`Ex2 → ${numero} é ${tipo}`);

    // Ex3: Verificador de Login
    let logado = false;
    let mensagem = logado ? 'Bem-vindo, está logado!' : 'Não está logado, por favor, faça login.';
    console.log(`Ex3 → ${mensagem}`);

    // Ex extra: Classificação com ternário encadeado
    let nota = 92;
    let conceito =
      nota >= 90 ? 'A' :
      nota >= 80 ? 'B' :
      nota >= 70 ? 'C' :
      nota >= 60 ? 'D' : 'F';
    console.log(`Extra → Nota ${nota}: Conceito ${conceito}`);
  };
}
