namespace RationalNumberLib
{
    public class RationalNumber
    {
        private int _numerator;
        private int _denumerator;
        private int _integer;


        public int Numerator
        {
            get
            {
                ToProper();
                return _numerator;
            }
        }

        public int Denumerator
        {
            get
            {
                ToProper();
                return _denumerator;
            }
        }

        public int Integer
        {
            get
            {
                ToProper();
                return _integer;
            }
        }

     
        #region Constructors
        public RationalNumber() { }

        public RationalNumber(int numerator, int denumerator) //for right RationalNumbers
        {
            _numerator = numerator;
            _denumerator = denumerator;
        }

        public RationalNumber(int integer, int num, int denum) : this(num, denum) //for mixed fraction
        {
            _integer = integer;
            if (_integer > 0)
            {
                _numerator = ToImproper(_integer, _numerator, _denumerator);
                _integer = 0;
            }

        }
        #endregion


        #region Overloading operators '+.../'

        #region +
        public static RationalNumber operator +(RationalNumber r1, RationalNumber r2)
        {
            int lcm = GetLCM(r1._denumerator, r2._denumerator);
            int af1 = AdditionalFactor(r1._denumerator, lcm);
            int af2 = AdditionalFactor(r2._denumerator, lcm);
            return new RationalNumber { _numerator = (r1._numerator * af1) + (r2._numerator * af2), _denumerator = lcm };
        }

        #endregion

        #region -

        public static RationalNumber operator -(RationalNumber r1, RationalNumber r2)
        {
            int lcm = GetLCM(r1._denumerator, r2._denumerator);
            int af1 = AdditionalFactor(r1._denumerator, lcm);
            int af2 = AdditionalFactor(r2._denumerator, lcm);

            return new RationalNumber { _numerator = (r1._numerator* af1) - (r2._numerator* af2), _denumerator= lcm };
        }

        #endregion;

        #region *
        public static RationalNumber operator *(RationalNumber r1, RationalNumber r2)
        {
            return new RationalNumber { _numerator = r1._numerator * r2._numerator, _denumerator= r1._denumerator * r2._denumerator};
        }

        #endregion

        #region /
        public static RationalNumber operator /(RationalNumber r1, RationalNumber r2)
        {
            return new RationalNumber { _numerator = r1._numerator * r2._denumerator, _denumerator= r2._numerator * r1._denumerator};
        }

        #endregion

        #region implicit overloading
        public static implicit operator RationalNumber(int x)
        {
            return new RationalNumber
            {
                _numerator = x,
                _denumerator = 1
            };
        }
        #endregion
        #endregion

        #region Methods
        public static int GetLCM(int x, int y) //to find theLowestCommonMultiplier
        {

            return (x * y) / GetGCD(x, y);
        }

        public static int GetGCD(int x, int y) //to find theGretestCommonDivisor
        {
            while (x != 0 && y != 0)
            {
                if (x > y)
                {
                    x %= y;
                }
                else
                {
                    y %= x;
                }
            }
            return x + y;
        }



        public static int AdditionalFactor(int denum, int lcm) //to find AdditioanlFactor
        {
            return lcm / denum;
        }

        public static int ReduceFraction(int x, int y) // to reduce the fraction
        {
            int point;
            if (x > y)
            {
                point = x;
            }
            else
            {
                point = y;
            }
            for (int i = point; i > 1; i--)
            {
                if (x % i == 0 && y % i == 0)
                {
                    return i;
                }
            }
            return 1;
        }

        public static int ToImproper(int integer, int num, int denum)
        {
            return (integer * denum) + num;
        }

        private void ToProper()
        {
            int point = 0;


            if (_numerator > _denumerator)
            {
                _integer = _numerator / _denumerator;
                _numerator %= _denumerator;
                point = ReduceFraction(_numerator, _denumerator);
                _numerator /= point;
            }

            else
            {
                point = ReduceFraction(_numerator, _denumerator);
                _numerator /= point;
                _denumerator /= point;
            }

        }

        #endregion

    }

}
