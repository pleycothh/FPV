
using FPV.APP.Contracts;
using FPV.APP.Models;

namespace FPV.APP.Services
{
  public class Calculator : ICalculator
  {
    public Calculator()
    {

    }


    public void Calculate(ProductEntity productEntity)
    {
      var result = new ResultEntity();

      // Step 1: Calculate total weight of the drone
      result.Weight = productEntity.FramEntity.Weight
          + productEntity.MotorEntity.Weight
          + productEntity.PropsEntity.Weight
          + productEntity.FlightControlEntity.Weight
          + productEntity.BatteryEntity.Weight;

      // Step 2: Hover time calculation
      var thrustRequiredToHover = result.Weight * PhysicsConstants.g; // Thrust required to hover (N)

      // Power required to hover
      productEntity.PropsEntity.Efficiency = 1;
      var powerHover = thrustRequiredToHover / productEntity.PropsEntity.Efficiency; // Power at hover (W)

      // Current required to hover
      if(productEntity.BatteryEntity.TotalVotages == 0)
      {
        productEntity.BatteryEntity.CellNumber = 1;
        productEntity.BatteryEntity.VotagePerCell = 3.8m;
      }
      var currentHover = powerHover / productEntity.BatteryEntity.TotalVotages; // Hover current (A)

      // Hover time calculation in hours (Battery capacity in Ah)
      result.HoverTime = (productEntity.BatteryEntity.Capacity / 1000m) / currentHover; // Battery capacity is in mAh, so convert to Ah

      // Step 3: Max speed calculation
      var thrustMax = productEntity.MotorEntity.Torque * productEntity.PropsEntity.Efficiency; // Max thrust (N)
      var dragArea = productEntity.PropsEntity.Drag * productEntity.PropsEntity.Diameter * productEntity.PropsEntity.Diameter;
      result.MaxSpeed = (decimal)Math.Sqrt((double)(2 * productEntity.MotorEntity.Power / (PhysicsConstants.AirDensity * dragArea))); // Max speed (m/s)

      // Step 4: Max rise speed calculation
      var excessThrust = thrustMax - thrustRequiredToHover; // Excess thrust for vertical acceleration (N)
      decimal acceleration = Math.Round(excessThrust / result.Weight, 4); // Acceleration (m/s²)

      if(acceleration > 0)
      {
        result.MaxRiseSpeed = (decimal)Math.Sqrt(2 * (double)acceleration); // Max rise speed (m/s)
      }

      productEntity.ResultEntity = result;
    }
  }
}
