import java.util.Scanner;

public class delta {
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
    sc.close();
    }
}