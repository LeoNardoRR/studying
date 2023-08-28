/*Crie um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário,
calcule a quantidade de salários mínimos esse usuário ganha e imprima o resultado.*/

import java.util.Scanner;

public class Salario {
    public static void main(String[] args) {
        double salarioMinimo = 1550.0;
        double salarioUsuario;
        Scanner sc = new Scanner(System.in); 

        System.out.print("Digite seu salário: ");
        salarioUsuario = sc.nextDouble();

        double total = salarioUsuario / salarioMinimo;

        if (total > 1) {
            System.out.println("Parabéns, você é rico e recebe " + total + " salários mínimos");
        } else {
            System.out.println("Pobre fudido!");
        }

        sc.close();
    }
}

