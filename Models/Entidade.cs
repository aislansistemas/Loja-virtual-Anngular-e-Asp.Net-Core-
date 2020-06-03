using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Backend.Entidades
{
    public abstract class Entidade
    {
        public List<string> _MensagensValidacao { get; set; }
        protected List<string> MensagemValidacao
        {
            get { return _MensagensValidacao ?? (_MensagensValidacao = new List<string>()); }
        }

        public abstract void Validate();
        protected bool EhValido { get{ return !MensagemValidacao.Any(); } }
        
    }

    
}
