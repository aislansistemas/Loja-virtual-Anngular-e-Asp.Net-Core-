using QuickBuy.Backend.Entidades;
using QuickBuy.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Repositorio
{
    public class UsuarioRpositorio
    {
        private readonly QuickBuyContext _context;
        public UsuarioRpositorio(QuickBuyContext context)
        {
            _context = context;
        }

        public Usuario Obter(string email,string senha)
        {
            return _context.Usuarios.FirstOrDefault(x=>x.Email == email && x.Senha==senha);
        }
        public void CadastraUsuarios(Usuario usuario) {
            _context.Add(usuario);
            _context.SaveChanges();
        }

    }
}
