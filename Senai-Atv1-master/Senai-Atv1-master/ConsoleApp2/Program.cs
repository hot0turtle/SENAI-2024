using System;
class program
{
    static void Main(string[] args) { 
        Console.WriteLine("Qual funcao?\n 1= Hello World\n 2=Calculadora \n 3= Par ou Impar");
        int funcao = Convert.ToInt16(Console.ReadLine());
        if (funcao == 1)
            World();
        else if (funcao == 2)
            Calcul();
        else if (funcao == 3)
            ParImpar();
        else
            Console.WriteLine("Escolha uma funcao valida");
    }
    static void World()
    {

        Console.WriteLine("Hello, World!");
    }


    static void Calcul()
    {
        Console.WriteLine("Calculadora Básica");

        Console.Write("Digite o primeiro número: ");
        double num1 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Digite um operador (+, -, *, /): ");
        char op = Console.ReadKey().KeyChar;
        Console.WriteLine();

        Console.Write("Digite o segundo número: ");
        double num2 = Convert.ToDouble(Console.ReadLine());

        double resultado = 0;
        bool operacaoValida = true;

        switch (op)
        {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 != 0)
                {
                    resultado = num1 / num2;
                }
                else
                {
                    Console.WriteLine("Erro: Divisao por zero.");
                    operacaoValida = false;
                }
                break;
            default:
                Console.WriteLine("Erro: Operador invalido.");
                operacaoValida = false;
                break;
        }

        if (operacaoValida)
        {
            Console.WriteLine($"Resultado: {num1} {op} {num2} = {resultado}");
        }
    }



    static void ParImpar()
    {
        Console.WriteLine("Teste de Par ou Ímpar");

        Console.Write("Digite um número: ");
        int numero = Convert.ToInt32(Console.ReadLine());

        if (numero % 2 == 0)
        {
            Console.WriteLine($"O número {numero} é par.");
        }
        else
        {
            Console.WriteLine($"O número {numero} é ímpar.");
        }
    }

}