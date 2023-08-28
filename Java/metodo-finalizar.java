/*Dado o trecho de código abaixo:

public static void metodo01() {
Class.forName("ClasseQueNaoExiste");
}
public static void metodo02() {
java.io.File.createTempFile("pre", "suf");
}
public static void metodo03() {
Integer.class.newInstance();
}
public static void main(String[] args) {
metodo01();
metodo02();
metodo03();
}

Uma classe com estes quatro métodos não compila. Quais passos são necessários para fazê-la compilar?
Altere o código para que a classe compile sem erros.
*/
import java.util.Scanner;

public class metodo {
    public static void metodo01() throws ClassNotFoundException {
        Class.forName("fixo");
    }

    public static void metodo02() throws IOException {
        java.io.File.createTempFile("pre", "suf");
    }

    public static void metodo03() throws InstantiationException, IllegalAccessException {
        Integer.class.newInstance();
    }

    public static void main(String[] args) {
        try {
            metodo01();
            metodo02();
            metodo03();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
