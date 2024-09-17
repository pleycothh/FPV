

namespace FPV.APP.Models
{
  public class ProductEntity
  {
    public string Id { get; set; }

    // amount
    public int factor1 { get; set; }
    public int factor2 { get; set; }
    public int sum { get; set; }
 //   public string Name { get; set; }
 //   public WeightUnit WeightUnit { get; set; }
//    public LengthUnit LengthUnit { get; set; }
    public DateTime LastUpdateDate { get; set; }
 //   public ComponentEntity ComponentEntity { get; set; }

  }

  public enum WeightUnit
  {
    None = 0,
    mg = 1,
    g = 2,
    kg = 3,
  }
  public enum LengthUnit
  {
    None = 0,
    mm = 1,
    cm = 2,
    m = 3,
  }
}
