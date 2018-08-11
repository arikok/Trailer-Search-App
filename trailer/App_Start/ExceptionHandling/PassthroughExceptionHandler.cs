using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ExceptionServices;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.ExceptionHandling;

namespace trailer.App_Start.ExceptionHandling
{
    //Exceptions from WebApi Middleware, sended to OwinExceptionHandlerMiddleware
    public class PassthroughExceptionHandler : IExceptionHandler
    {
        public Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
        {
            // don't just throw the exception; that will ruin the stack trace
            var info = ExceptionDispatchInfo.Capture(context.Exception);
            info.Throw();
            return Task.CompletedTask;
        }
    }
}