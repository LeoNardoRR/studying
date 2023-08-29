/*Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de 
uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no 
ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a 
mensagem "REPROVADO", conforme exemplos.*/

import java.util.Scanner;

public class nota {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double nota1, nota2, soma;

        System.out.print("Digite a primeira nota: ");
        nota1 = sc.nextDouble();
        System.out.print("Digite a segunda nota: ");
        nota2 = sc.nextDouble();

        soma = nota1 + nota2;

        if (soma >= 60) {
            System.out.printf("Sua nota final foi %.2f e você foi aprovado!", soma);
        } else {
            System.out.printf("Sua nota final foi %.2f e você foi reprovado.", soma);
        }
        sc.close();
    }
}
