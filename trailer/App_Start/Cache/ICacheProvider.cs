using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.App_Start.Cache
{
    public interface ICacheProvider
    {
        object Get(string key);

        void Put(string key, object value, int duration);

        bool Contains(string key);
    }
}