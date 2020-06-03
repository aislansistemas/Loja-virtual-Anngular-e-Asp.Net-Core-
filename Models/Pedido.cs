using QuickBuy.Backend.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Backend.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public string NumeroEndereco { get; set; }
        public int FormaPagamentoId {get; set; }
        public FormaPagamento FormaPagamento { get; set; }
        public virtual ICollection<ItemPedido> ItensPedidos { get; set; }

    }
}
