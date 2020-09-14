using RationalNumberLib;

namespace RationalNumbersMultiple.Expressions
{
    interface IExpression
    {
        int Priority { get; }

        RationalNumber Solve();
    }
}
