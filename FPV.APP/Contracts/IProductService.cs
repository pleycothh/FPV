using FPV.APP.Models;

namespace FPV.APP.Contracts
{
    public interface IProductService
    {
        Task<ProductEntity> Change(ProductEntity ProductEntity);
        Task<ProductEntity> Calc(ProductEntity ProductEntity);
    }
}