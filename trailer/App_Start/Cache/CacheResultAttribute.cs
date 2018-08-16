using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.App_Start.Cache
{
    public class CacheResultAttribute : Attribute
    {
        public int Duration { get; set; }
    }
}