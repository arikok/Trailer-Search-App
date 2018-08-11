using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.Common
{
    public class TrailerResponseObject
    {
        public bool hasError { get; set; }
        public string message { get; set; }
        public Object dataObject { get; set; }



    }
}