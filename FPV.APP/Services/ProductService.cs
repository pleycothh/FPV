
using FPV.APP.Contracts;
using FPV.APP.Models;

namespace FPV.APP.Services
{
  public class ProductService : IProductService
  {
    private readonly IProductRepository _productRepository;
    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }
    public async Task<ProductEntity> Change(ProductEntity ProductEntity)
    {

        return await Task.FromResult(ProductEntity);
    }
    public async Task<ProductEntity> Calc(ProductEntity ProductEntity)
    {
      ProductEntity.sum = ProductEntity.factor1 + ProductEntity.factor2;
      return await Task.FromResult(ProductEntity);
    }
  }
}
