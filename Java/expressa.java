/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
(Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)
 */

 import java.util.Scanner;

 public class expressa {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double idade, meses, dias, total;
        
        System.out.print("Digite sua idade em anos: ");
        idade = sc.nextDouble();
        System.out.print("Digite sua idade em meses: ");
        meses = sc.nextDouble();
        System.out.print("Digite sua idade em dias: ");
        dias = sc.nextDouble();

        total = (idade * 365) + (meses * 30) + dias;
        System.out.print("Sua idade completa é de: "+ total + " dias.");
        sc.close();
    }
 }