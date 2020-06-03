using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Backend.Entidades;
using QuickBuy.Context;
using QuickBuy.Repositorio;
using System;

namespace QuickBuy
{
    [Route("api/[Controller]")]
   // [EnableCors("AllowSpecificOrigin")]
    public class UsuarioController:Controller{

        private readonly UsuarioRpositorio usuarioRepositorio;
        public UsuarioController(UsuarioRpositorio context)
        {
            usuarioRepositorio = context;
        }

        [HttpGet]
        public ActionResult Get(){
            try{
                return Ok();
            }catch(Exception ex){
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioRetorno = usuarioRepositorio.Obter(usuario.Email,usuario.Senha);
                if (usuarioRetorno != null)
                  return Ok(usuarioRetorno);
                
                return BadRequest("Usuario invalido");
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost()]
        public ActionResult CadastroUsuario([FromBody] Usuario usuario)
        {
            try
            {
                usuarioRepositorio.CadastraUsuarios(usuario);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}