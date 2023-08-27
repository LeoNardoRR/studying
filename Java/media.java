/*Fazer um programa para ler três medidas A, B e C. Em seguida, 
calcular e mostrar (imprimir os dados 
com quatro casas decimais): 
a) a área do quadrado que tem lado A 
b) a área do triângulo retângulo que base A e altura B 
c) a área do trapézio que tem bases A e B, e altura C 
 */

import java.util.Scanner;

public class media {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double A, B, C;

        System.out.print("Digite valor de A: ");
        A = sc.nextDouble();
        System.out.print("Digite valor de B: ");
        B = sc.nextDouble();
        System.out.print("Digite valor de C: ");
        C = sc.nextDouble();

        double areaQuadrado = A * A;
        System.out.println("A área do quadrado é igual a: " + areaQuadrado);

        double areaTriangulo = (A * B) / 2;
        System.out.println("A área do triângulo é igual a: " + areaTriangulo);
        
        double areaTrapezio = ((A + B) * C) / 2;  // Corrigido: Adicionar parênteses
        System.out.println("A área do trapézio é igual a: " + areaTrapezio);
        sc.close();
    }
}
