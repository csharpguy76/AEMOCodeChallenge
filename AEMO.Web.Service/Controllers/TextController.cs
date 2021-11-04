using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using AEMO.Web.Service.Models;

namespace AEMO.Web.Service.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TextController : ControllerBase
    {
        /// <summary>
        /// This operation MatchString will find matching instances of a substring and it's index position
        /// </summary>
        /// <param name="text">string of text</param>
        /// <param name="subText">string to match</param>
        /// <returns>return JSON</returns>
        [HttpGet("MatchString")]
        public MatchTextResultModel MatchString([FromQuery] string text, [FromQuery] string subText)
        {
            var total = 0;
            var positions = new List<int>();

            for (var idx = 0; idx < text.Length; idx++)
            {
                if (text.Substring(idx).StartsWith(subText, true, CultureInfo.CurrentCulture))
                {
                    total++;
                    positions.Add(idx);
                }

            }

            return new MatchTextResultModel()
            {
                Total = total,
                Positions = positions
            };

        }
    }
}
