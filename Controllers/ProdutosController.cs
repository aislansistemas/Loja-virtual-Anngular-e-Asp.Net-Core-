using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickBuy.Backend.Entidades;
using QuickBuy.Context;

namespace QuickBuy.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ProdutosController : Controller
    {
        private readonly QuickBuyContext _context;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;

        public ProdutosController(QuickBuyContext context,
            IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult> GetProdutos()
        {
            return Json(await _context.Produtos.OrderByDescending(x=>x.Id).ToListAsync());
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        // PUT: api/Produtos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(int id, Produto produto)
        {
            if (id != produto.Id)
            {
                return BadRequest();
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtos
        [HttpPost]
        public async Task<ActionResult> PostProduto([FromBody] Produto produto)
        {
            try
            {
                
                if (produto.Id > 0)
                {
                    _context.Produtos.Update(produto);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    _context.Produtos.Add(produto);
                    await _context.SaveChangesAsync();
                }
                return Created("api/produtos", produto);
            }
            catch (Exception e)
            {
                return BadRequest("Erro na operação");
            }
        }

        // DELETE: api/Produtos/5
        [HttpPost("Deletar")]
        public async Task<ActionResult<Produto>> DeleteProduto([FromBody] Produto produto)
        {
            try
            {
                _context.Remove(produto);
                await _context.SaveChangesAsync();
                return Json(await _context.Produtos.OrderByDescending(p => p.Id).ToListAsync()); ;
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("EnviarArquivo")]
        public async Task<IActionResult> EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var NomeArquivo = formFile.FileName;
                var extensao = NomeArquivo.Split(".").Last();
                var arrayNomeCompacto = Path.GetFileNameWithoutExtension(NomeArquivo).Take(10).ToArray();
                var novoNomeArquivo = new String(arrayNomeCompacto).Replace(" ","-");
                novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensao}";
                var pastaArquivos = _hostingEnvironment.WebRootPath+"\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {
                return BadRequest("não deu certo");
            }
        }

        private bool ProdutoExists(int id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
