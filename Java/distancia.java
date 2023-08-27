/* Fazer um programa para ler a distância total (em km) 
percorrida por um carro, bem como o total de 
combustível gasto por este carro ao percorrer tal distância. 
Seu programa deve mostrar o consumo 
médio do carro, com três casas decimais. */
import java.util.Scanner;

public class distancia {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        double distancia, combustivel, consumo;

        System.out.print("Digite a distancia percorrida: ");
        distancia = sc.nextDouble();
        System.out.print("Digite a quantidade de combustivel gasto: ");
        combustivel = sc.nextDouble();

        consumo = distancia / combustivel;

        System.out.print("O consumo medio do seu carro e igual a: "+ consumo);
        sc.close();
    }
}
