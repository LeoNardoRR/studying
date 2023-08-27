import java.util.Scanner;
import java.lang.Math;

public class area {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double base, altura, area, perimetro, diagonal;

        System.out.println("Digite a base do retângulo: ");
        base = sc.nextDouble();
        System.out.println("Digite a altura do retângulo: ");
        altura = sc.nextDouble();
        area = base * altura;
        perimetro = 2 * (base + altura);
        diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
        System.out.println("A área do retângulo é: " + area);
        System.out.println("O perímetro do retângulo é: " + perimetro);
        System.out.println("A diagonal do retângulo é: " + diagonal);
        sc.close();
    }
}
