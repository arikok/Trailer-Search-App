using System;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.ExceptionHandling;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using trailer.App_Start.DependencyInjection;
using trailer.App_Start.ExceptionHandling;
using trailer.App_Start.Filter;

[assembly: OwinStartup(typeof(trailer.App_Start.Startup))]

namespace trailer.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfig = new HttpConfiguration();

            httpConfig.EnableCors();

            httpConfig.MapHttpAttributeRoutes();

            httpConfig.Filters.Add(new ResponseActionFilter());

            httpConfig.Services.Replace(typeof(IExceptionHandler), new PassthroughExceptionHandler());

            CastleWindsorHelper.ConfigureWindsor(httpConfig);

            app.Use<OwinExceptionHandlerMiddleware>();

            app.UseCors(CorsOptions.AllowAll);

            app.UseWebApi(httpConfig);

            
        }
    }
}
