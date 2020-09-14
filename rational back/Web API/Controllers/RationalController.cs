using RationalNumberLib;
using RationalNumbersMultiple;
using System.Web.Http;
using System.Web.Http.Description;
using Web_API.Models;

namespace Web_API.Controllers
{
    [RoutePrefix("api/rational")]
    public class RationalController : ApiController
    {
        [HttpGet, Route("")]
        public string GetString()
        {
            return "Routing works!";
        }

        //POST: /api/rational
        [HttpPost, Route("")]
        [ResponseType(typeof(RationalNumber))]
        public IHttpActionResult GetResult(TypeCaster typeCaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //gets data from client side and adds it to the Context
            var expression = typeCaster.Value;
            Context context = new Context(expression); // parses string and adds it to the tree 

            var rationalNumber = context.Solve(); // gets the result of calculation

            return Ok(new { integer = rationalNumber.Integer, numerator = rationalNumber.Numerator, denumerator = rationalNumber.Denumerator }); // sends the response to the request and converts data from Pascal Case to camelCase
        }
    }
}
