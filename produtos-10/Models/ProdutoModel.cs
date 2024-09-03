namespace WebApplication1.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Cat { get; set; } = string.Empty;
        public string Nome { get; set; } = string.Empty;
        public decimal Valor { get; set; }
        public string Desc { get; set; } = string.Empty;
        public DateTime Data { get; set; }
    }
}
