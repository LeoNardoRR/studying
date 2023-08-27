import java.util.Scanner;

public class preco {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double largura, comprimento, area, preco;

        System.out.println("Digite a largura do terreno: ");
        largura = sc.nextDouble();
        System.out.println("Digite o comprimento do terreno: ");
        comprimento = sc.nextDouble();
        System.out.println("Digite o preço do metro quadrado: "); 
        preco = sc.nextDouble();
        area = largura * comprimento;
        double precoTotal = area * preco; 
        System.out.println("A área do terreno é: " + area);
        System.out.println("O preço do terreno é: " + precoTotal);
        sc.close();
    }
}
