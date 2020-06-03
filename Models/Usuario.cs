using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Backend.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }

    }
}
