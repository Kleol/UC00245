import { Component } from '@angular/core';

@Component({
  selector: 'app-aula03',
  standalone: true,
  templateUrl: './Aula03.html',
  styleUrls: ['./Aula03.css']
})
export class Aula03Component {

  exerciciosParaFazer = () => {
    console.clear();

    // Exercício 7
    console.log('Exercício 7: Compare dois números e diga se são iguais.');
    let num1 = 10, num2 = 10;
    console.log(`${num1} e ${num2} são iguais?`, num1 === num2);

    // Exercício 8
    console.log('Exercício 8: Compare se um número é maior que o outro.');
    let a = 15, b = 8;
    console.log(`${a} é maior que ${b}?`, a > b);

    // Exercício 9
    console.log('Exercício 9: Compare se dois textos são diferentes.');
    let texto1 = 'Angular', texto2 = 'React';
    console.log(`"${texto1}" e "${texto2}" são diferentes?`, texto1 !== texto2);

    // Exercício 10 — Operadores lógicos
    console.log('Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');
    let temIdade = true;
    let temCarta = false;
    console.log(`Pode dirigir?`, temIdade && temCarta);

    // Exercício 11
    console.log('Exercício 11: Verifique se o acesso é permitido (logado || admin).');
    let logado = false;
    let admin = true;
    console.log(`Acesso permitido?`, logado || admin);

    // Exercício 12
    console.log('Exercício 12: Inverta o valor de uma variável booleana.');
    let ativo = true;
    ativo = !ativo;
    console.log(`Valor invertido:`, ativo);
  };
}
