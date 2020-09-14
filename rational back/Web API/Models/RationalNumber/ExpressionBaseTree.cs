using RationalNumbersMultiple.Expressions;

namespace RationalNumbersMultiple
{
    class ExpressionBaseTree
    {
        private IExpression _root;

        public IExpression RootNode
        {
            get
            {
                return _root;
            }
        }

        public void Add(IExpression currentExpression)
        {
            Add(currentExpression, ref _root);
        }

        private void Add(IExpression currentExpression, ref IExpression root)
        {
            if (root == null)
            {
                root = currentExpression;
                return;
            }

            if (root.Priority > currentExpression.Priority || root.Priority < currentExpression.Priority && root.Priority != 0)
            {
                var temp = (root as ExpressionBinary).RightOperand;
                Add(currentExpression, ref temp);
                (root as ExpressionBinary).RightOperand = temp;
                return;
            }

            else
            {
                (currentExpression as ExpressionBinary).LeftOperand = root;
                root = currentExpression;
                return;
            }
        }
    }
}
