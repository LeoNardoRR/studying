/*Fazer um programa para ler o nome de um(a) funcionário(a), 
o valor que ele(a) recebe por hora, e a 
quantidade de horas trabalhadas por ele(a). Ao final, 
mostrar o valor do pagamento do funcionário com 
uma mensagem explicativa */

import java.util.Scanner;

public class pagamento {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String nome;
        double valorhora, quantidadehoras, pagamento;
        
        System.out.print("Digite seu nome: ");
        nome = sc.nextLine();
        System.out.print("Digite o valor da hora trabalhada: ");
        valorhora = sc.nextDouble();
        System.out.print("Digite a quantidade de horas trabalhadas: ");
        quantidadehoras = sc.nextDouble();

        pagamento = valorhora * quantidadehoras;

        System.out.println("O pagamento para " + nome + " deve ser de: " + pagamento);
        sc.close();
    }
}
