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