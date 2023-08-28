/*Escrever um algoritmo que lê:
- a porcentagem do IPI a ser acrescido no valor das peças
- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)
*/

/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

import java.util.Scanner;

public class ipi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double ipi, valor1, quant1, valor2, quant2, total;

        System.out.println("Calculo de IPI");

        System.out.print("Digite o valor do IPI: ");
        ipi = sc.nextDouble();

        System.out.print("Digite o valor unitario da peca 1: ");
        valor1 = sc.nextDouble();

        System.out.print("Digite a quantidade de pecas 1: ");
        quant1 = sc.nextDouble();

        System.out.print("Digite o valor unitario da peca 2: ");
        valor2 = sc.nextDouble();

        System.out.print("Digite a quantidade de pecas 2: ");
        quant2 = sc.nextDouble();

        total = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);
        System.out.println("O valor total a ser pago e: " + total);

        sc.close();
    }
}