using Castle.DynamicProxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using trailer.Models;

namespace trailer.App_Start.Cache
{
    public class CacheResultInterceptor : IInterceptor
    {
        private readonly ICacheProvider _cache;

        public CacheResultInterceptor(ICacheProvider cache)
        {
            _cache = cache;
        }

        public CacheResultAttribute GetCacheResultAttribute(IInvocation invocation)
        {
            return Attribute.GetCustomAttribute(
                invocation.MethodInvocationTarget,
                typeof(CacheResultAttribute)
            )
            as CacheResultAttribute;
        }

        public string GetInvocationSignature(IInvocation invocation)
        {
            string key = ((BaseServiceModel)invocation.Arguments.First()).GetCacheKey();

            return String.Format("{0}-{1}-{2}",
                invocation.TargetType.FullName,
                invocation.Method.Name,
                key
            );
        }

        public void Intercept(IInvocation invocation)
        {
            var cacheAttr = GetCacheResultAttribute(invocation);

            if (cacheAttr == null)
            {
                invocation.Proceed();
                return;
            }

            string key = GetInvocationSignature(invocation);

            if (_cache.Contains(key))
            {
                invocation.ReturnValue = _cache.Get(key);
                return;
            }

            invocation.Proceed();
            var result = invocation.ReturnValue;

            if (result != null)
            {
                _cache.Put(key, result, cacheAttr.Duration);
            }
        }
    }
}