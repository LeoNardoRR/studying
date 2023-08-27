/*Fazer um programa para ler o nome e idade de duas pessoas. 
Ao final mostrar uma mensagem com os 
nomes e a idade média entre essas pessoas, com uma casa decimal.*/
import java.util.Scanner;

public class idade {
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String nome1, nome2;
        double idade1, idade2;

        System.out.println("Digite o nome da primeira pessoa: ");
        nome1 = sc.nextLine();
        System.out.println("Digite a idade da primeira pessoa: ");
        idade1 = sc.nextDouble();
        sc.nextLine();  //Limpar o buffer após leitura de double
        System.out.println("Digite o nome da segunda pessoa: ");
        nome2 = sc.nextLine();
        System.out.println("Digite a idade da segunda pessoa: ");
        idade2 = sc.nextDouble();
        
        double media = (idade1 + idade2) / 2; 
        
        System.out.println("A primeira pessoa chama " + nome1 + ", a segunda pessoa chama " + nome2 + 
                           " e a idade média entre elas é: " + media);
        sc.close();
    }
}
