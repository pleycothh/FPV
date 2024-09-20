
using FPV.APP.Contracts;
using FPV.APP.Models;

namespace FPV.APP.Services
{
  public class ProductService : IProductService
  {
    private readonly IProductRepository _productRepository;
    private readonly ICalculator _calculator;
    public ProductService(IProductRepository productRepository, ICalculator calculator)
    {
      _productRepository = productRepository;
      _calculator = calculator;
    }
    public async Task<ProductEntity> Change(ProductEntity ProductEntity)
    {

        return await Task.FromResult(ProductEntity);
    }
    public async Task<ProductEntity> Calc(ProductEntity ProductEntity)
    {
      _calculator.Calculate(ProductEntity);
      return await Task.FromResult(ProductEntity);
    }
  }
}
