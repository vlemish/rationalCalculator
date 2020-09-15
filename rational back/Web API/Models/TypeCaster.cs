namespace Web_API.Models
{
    public class TypeCaster
    {
        private string _value;
        public string Value
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value == "" ? "0.0/0" : value;
            }
        }
    }
}