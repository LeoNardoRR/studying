/*Desenvolva um algoritmo em Java que leia um número inteiro e imprima o seu
antecessor e seu sucessor.*/

import java.util.Scanner;

public class antesuce {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double numero, antecessor, sucessor;

        System.out.print("Digite um numero: ");
        numero = sc.nextDouble();

        antecessor = numero - 1;
        sucessor = numero + 1;

        System.out.println("O numero digitado foi " + numero + ", seu antecessor e " + antecessor + " e seu sucessor e " + sucessor);
        sc.close();
    }
}
