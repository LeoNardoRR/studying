/*Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula 
de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais, 
conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem. */

import java.util.Scanner;

public class baskara {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double a, b, c, delta;

    System.out.println("Digite o valor de a: ");
    a = sc.nextDouble();
    System.out.println("Digite o valor de b: ");
    b = sc.nextDouble();
    System.out.println("Digite o valor de c: ");
    c = sc.nextDouble();
    delta = Math.pow(b, 2) - 4 * a * c;
    System.out.println("O valor de delta é: " + delta);

    double x1, x2;
    if (delta >= 0) {

    x1 = ((-(b) + Math.sqrt(delta)) / 2 * a);
    x2 = ((-(b) - Math.sqrt(delta)) / 2 * a);
        
    System.out.println("x1 = " + x1);
    System.out.println("x2 = " + x2);
        
    } else 
        {
        System.out.println("Delta não possui raiz!");
        System.exit(0);
        
        }
    }
}