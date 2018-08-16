using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Web;

namespace trailer.App_Start.Cache
{
    public class MemoryCacheProvider : ICacheProvider
    {
        public object Get(string key)
        {
            return MemoryCache.Default[key];
        }

        public void Put(string key, object value, int duration)
        {
            if (duration <= 0)
                throw new ArgumentException("Duration cannot be less or equal to zero", "duration");

            var policy = new CacheItemPolicy
            {
                AbsoluteExpiration = DateTime.Now.AddMilliseconds(duration)
            };

            MemoryCache.Default.Set(key, value, policy);
        }

        public bool Contains(string key)
        {
            return MemoryCache.Default[key] != null;
        }
    }
}