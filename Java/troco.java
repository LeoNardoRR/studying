/*Fazer um programa para calcular o troco no processo de 
pagamento de um produto de uma mercearia. 
O programa deve ler o preço unitário do produto, a quantidade 
de unidades compradas deste produto, 
e o valor em dinheiro dado pelo cliente (suponha que haja 
dinheiro suficiente). Seu programa deve 
mostrar o valor do troco a ser devolvido ao cliente. */

import java.util.Scanner;

public class troco {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double unitario, quantidade, valor;

        System.out.print("Digite o preço unitário do produto: ");
        unitario = sc.nextDouble();
        System.out.print("Digite a quantidade de itens comprados: ");
        quantidade = sc.nextDouble();
        System.out.print("Digite o valor que o cliente entregou: ");
        valor = sc.nextDouble();
        
        double soma = unitario * quantidade;
        double troco = valor - soma;
        
        System.out.println("O valor total da compra foi de: " + soma);
        System.out.println("O troco a ser entregue ao cliente é de: " + troco);

        sc.close();
    }
}
