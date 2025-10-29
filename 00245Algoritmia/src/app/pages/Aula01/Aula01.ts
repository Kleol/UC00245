import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './Aula01.html',
  styleUrl: './Aula01.css'
})
export class Home implements OnInit {

  varriavelGlobal: string = ""; //vazia
  varriavelGlobal2!: string; //nao startada
  varriavelGlobal3?: string; //nao startada e pode ser indefinida
  varriavelGlobal4: number =  0; //nao startada e pode ser indefinida
  arrayGlobal: string[] = []; 

  ngOnInit(): void {
    this.exemploVariaveisETipos();
    this.exemploVariaveisETipos2();
    this.exemploOperadoresAritmeticos();
    this.exemploOperadoresComparacao();
  }

// ======================================================
// 🔹 1. VARIÁVEIS E TIPOS DE DADOS
// ======================================================
exemploVariaveisETipos(): void {

  console.clear(); 
  console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
  console.log('--------------------------------');

  // 📘 Exemplo de código:

  let nome1: string = 'João';
  let idade1: number = 25;
  const ativo1: boolean = true;
  const valor: any = 'pode ser qualquer tipo';
  this.varriavelGlobal = "São as que começam dom THIS."

  console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  }

  exemploVariaveisETipos2 = () => {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.varriavelGlobal = "São as que começam dom THIS."

    console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  }


  // ======================================================
  // 🔹 2. OPERADORES ARITMÉTICOS
  // ======================================================
  exemploOperadoresAritmeticos(): void {
    console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let num1 = 10;
    let num2 = 3;
 
    console.log(num1 + num2); // Adição
    console.log(num1 - num2); // Subtração
    console.log(num1 * num2); // Multiplicação
    console.log(num1 / num2); // Divisão
    console.log(num1 % num2); // Resto da divisão
  }


    /* Operadores de  comparação  -- aula 03 */ 
 
  exemploOperadoresComparacao(): void {
    console.log('\n🧩 3️⃣ OPERADORES DE COMPARAÇÃO');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let x = 5;
    let y = 10;
 
    console.log(x === y); // Igualdade  -- 3 iguais ele compara os valores, compara por tipo 
    console.log(x != y); // Diferença
    console.log(x > y); // Maior que
    console.log(x < y); // Menor que
    console.log(x >= y); // Maior ou igual
    console.log(x <= y); // Menor ou igual
 
  }

// ==========================================================
  // 1️⃣ Estruturas de Decisão Complexas
  // ==========================================================
  exemploEstruturasDecisao(): void {
    console.log('--- Exemplo: Estruturas de Decisão Complexas ---');
 
    let nota: number = 85;
    if (nota >= 90) {
      console.log('Excelente - A');
    } else if (nota >= 80) {
      console.log('Muito Bom - B');
    } else if (nota >= 70) {
      console.log('Bom - C');
    } else if (nota >= 50) {
      console.log('Suficiente - D');
    } else {
      console.log('Insuficiente - F');
    }
 
    let classificacao =
      nota >= 90
        ? 'A'
        : nota >= 80
        ? 'B'
        : nota >= 70
        ? 'C'
        : nota >= 50
        ? 'D'
        : 'F';
    console.log('Classificação (ternário): ' + classificacao);
 
    let temperatura: number = 28;
    let estadoClima: string;
 
    if (temperatura > 35) {
      estadoClima = 'Extremamente quente';
    } else if (temperatura > 25) {
      estadoClima = 'Quente';
    } else if (temperatura > 15) {
      estadoClima = 'Ameno';
    } else if (temperatura > 5) {
      estadoClima = 'Frio';
    } else {
      estadoClima = 'Muito frio';
    }
    console.log('Estado do clima:', estadoClima);
  }
   // ==========================================================
  // 2️⃣ Estrutura Switch
  // ==========================================================
  exemploSwitch(): void {
    console.log('--- Exemplo: Estrutura Switch ---');
 
    let diaSemana: number = 3;
    let nomeDia: string;
 
    switch (diaSemana) {
      case 1:
        nomeDia = 'Segunda-feira';
        break;
      case 2:
        nomeDia = 'Terça-feira';
        break;
      case 3:
        nomeDia = 'Quarta-feira';
        break;
      case 4:
        nomeDia = 'Quinta-feira';
        break;
      case 5:
        nomeDia = 'Sexta-feira';
        break;
      case 6:
        nomeDia = 'Sábado';
        break;
      case 7:
        nomeDia = 'Domingo';
        break;
      default:
        nomeDia = 'Dia desconhecido';
    }
    console.log('Dia da semana:', nomeDia);
 
    let operacao: string = 'somar';
    let resultado: number;
 
    switch (operacao) {
      case 'somar':
        resultado = 10 + 5;
        break;
      case 'subtrair':
        resultado = 10 - 5;
        break;
      case 'multiplicar':
        resultado = 10 * 5;
        break;
      case 'dividir':
        resultado = 10 / 5;
        break;
      default:
        resultado = 0;
    }
    console.log('Resultado:', resultado);
  }
 
  ternario = () => {
    let nota: number = 85;
    let classificacao = nota >= 90 ? 'A' : nota >= 80 ? 'B' : nota >= 70 ? 'C' : nota >= 50 ? 'D' : 'F';
 
    console.log('Classificação: ' + classificacao);
  }

}