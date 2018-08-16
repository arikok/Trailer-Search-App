using Castle.Core;
using Castle.DynamicProxy;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using trailer.App_Start.Cache;
using trailer.Services;
using trailer.ServicesImpl;

namespace trailer.App_Start.DependencyInjection
{
    public class ServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                            .BasedOn<IHttpController>()
                            .LifestylePerWebRequest());

            //Component.For<IInterceptor>().ImplementedBy<ExceptionLoggerInterceptor>().Named("exceptionLogger"),

            var cacheInterceptor = new[] { InterceptorReference.ForKey("CacheInterceptor") };


            container.Register(
                Component.For<IInterceptor>().ImplementedBy<CacheResultInterceptor>().Named("CacheInterceptor"),
                Component.For<ICacheProvider>().ImplementedBy<MemoryCacheProvider>().LifestyleSingleton(),                
                Component.For<YoutubeAPIService>().ImplementedBy<YoutubeAPIServiceImpl>().Interceptors(
                        cacheInterceptor).First
                );


        }
    }
}