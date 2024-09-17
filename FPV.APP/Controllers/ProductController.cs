using FPV.APP.Contracts;
using FPV.APP.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FPV.APP.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class ProductController : ControllerBase
    {

        private readonly IProductService _productService;
        public ProductController(IProductService actionService) => _productService = actionService;


        [HttpPost("change")]
        public async Task<IActionResult> GetAllProducts([FromBody] ProductEntity productEntity)
        {
           var products = await _productService.Change(productEntity);
            return Ok(products);
        }

        [HttpPost("calc")]
        public async Task<IActionResult> AddProduct([FromBody]ProductEntity productEntity)
        {
            var productId = await _productService.Calc(productEntity);
            return Ok(productId);
        }
    }
}
