using Microsoft.EntityFrameworkCore;
using QuickBuy.Backend.Entidades;
using QuickBuy.Backend.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Context
{
    public class QuickBuyContext:DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
        public virtual DbSet<FormaPagamento> FormaPagamentos { get; set; }

        public QuickBuyContext(DbContextOptions<QuickBuyContext> options) : base(options)
        {
        }
    }
}
