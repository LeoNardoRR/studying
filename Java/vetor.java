/*1) Dado o trecho de código abaixo:

int[] vetor = new int[] { 2, 4, 6, 8, 10, 12 };
for (int i = 0; i <= 12; i++) {
System.out.println(vetor[i]);
}

Implemente um programa em Java que execute este trecho. Execute o programa e veja a exceção
produzida por acesso a posição fora dos limites do vetor. Trate esta exceção, imprimindo na tela uma
mensagem dizendo que o vetor acabou.*/

import java.util.Scanner;

public class vetor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] vetor = new int[] { 2, 4, 6, 8, 10, 12 };
        for (int i = 0; i < vetor.length; i++) { 
            System.out.println(vetor[i]);
        }
        System.out.println("O vetor acabou!");
        sc.close();
    }
}

