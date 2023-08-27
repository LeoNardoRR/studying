/*Fazer um programa para ler uma duração de tempo em segundos, 
daí imprimir na tela esta duração no 
formato horas:minutos:segundos. 
 */

import java.util.Scanner;

public class tempo {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite a quantidade de segundos: ");
        int segundos = sc.nextInt();
        
        int horas = segundos / 3600; 
        int minutos = (segundos % 3600) / 60; 
        int segundosRestantes = segundos % 60;
        
        System.out.println("Equivalente: " + horas + "h " + minutos + "m " + segundosRestantes + "s");
        
        sc.close();
    }
}
