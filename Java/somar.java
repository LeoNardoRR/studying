/*Fazer um programa para ler dois valores inteiros X e Y, 
e depois mostrar na tela o valor da soma destes 
números.*/

import java.util.Scanner;

public class somar {

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double x, y;

        System.out.print("Digite o valor de x: ");
        x = sc.nextDouble();
        System.out.print("Digite o valor de y: ");
        y = sc.nextDouble();
        double soma = x + y;

        System.out.print("A soma dos valores digitados e igual a: " + soma);
        
        sc.close();        
    }
}
