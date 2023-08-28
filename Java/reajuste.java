/*Informar um saldo e imprimir o saldo com reajuste de 1%*/

import java.util.Scanner;

public class reajuste {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double saldo, reajuste;

        System.out.print("Digite o saldo: ");
        saldo = sc.nextDouble();

        reajuste = saldo * 1.01;
        System.out.print("O saldo com reajuste é: " + reajuste);
        sc.close();
    }
}   