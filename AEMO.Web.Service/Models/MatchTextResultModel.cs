using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AEMO.Web.Service.Models
{
    public class MatchTextResultModel
    {
        public int Total { get; set; }
        public List<int> Positions { get; set; }

    }
}
