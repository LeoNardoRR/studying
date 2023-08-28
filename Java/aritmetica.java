/*Fazer um programa que imprima a média aritmética dos números 8,9 e 7. A média dos
números 4, 5 e 6. A soma das duas médias. A média das médias.*/

import java.util.Scanner;

public class aritmetica {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double media1, media2, soma, mediaFinal;
        
        media1 = (8 + 9 + 7) / 3;
        media2 = (4 + 5 + 6) / 3;
        soma = media1 + media2;

        mediaFinal = soma / 2;
        System.out.print("A media final é: " + mediaFinal);
        sc.close();
    }
}