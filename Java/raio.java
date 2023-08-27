/*Fazer um programa para ler o valor "r" do raio de um círculo, 
e depois mostrar o valor da área do 
círculo com três casas decimais. A fórmula da área do círculo é 
a seguinte: 𝑎𝑟𝑒𝑎 = 𝜋. 𝑟
ଶ
. Você pode 
usar o valor de 𝜋 fornecido pela biblioteca da sua linguagem de 
programação, ou então, se preferir, 
use diretamente o valor 3.14159. */

import java.util.Scanner;

public class raio {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double area, pi, r;
        
        System.out.print("Digite o valor de r: ");
        r = sc.nextDouble();
        pi = 3.14159;
        area = pi * r * r; 
        
        System.out.print("O valor da área é igual a: " + area);
        sc.close();
    }
}
