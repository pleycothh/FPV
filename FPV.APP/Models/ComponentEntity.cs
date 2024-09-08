namespace FPV.APP.Models
{
    public class ComponentEntity
    {
        public int TotalItems { get; set; }
        public bool IsFit { get; set; }
        public MotorEntity MotorEntity { get; set; }
        public BatteryEntity BatteryEntity { get; set; }
        public FramEntity FramEntity { get; set; }
        public PropsEntity PropsEntity { get; set; }
        public FlightControlEntity FlightControlEntity { get; set; }

    }
    public class MotorEntity
    {
        public bool IsFit { get; set; }
        public PhisicEntity PhisicEntity { get; set; }

    }
    public class BatteryEntity
    {
        public bool IsFit { get; set; }
        public PhisicEntity PhisicEntity { get; set; }
    }
    public class FramEntity
    {
        public bool IsFit { get; set; }
        public PhisicEntity PhisicEntity { get; set; }
    }
    public class PropsEntity
    {
        public bool IsFit { get; set; }
        public PhisicEntity PhisicEntity { get; set; }
    }
    public class FlightControlEntity
    {
        public bool IsFit { get; set; }
        public PhisicEntity PhisicEntity { get; set; }
    }
}
