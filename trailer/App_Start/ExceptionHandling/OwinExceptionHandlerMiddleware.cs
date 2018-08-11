using Microsoft.Owin;
using Newtonsoft.Json;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using trailer.Common;
using trailer.Utils;

namespace trailer.App_Start.ExceptionHandling
{
    //Exceptions from WebApi and Owin Middlewares
    public class OwinExceptionHandlerMiddleware : OwinMiddleware
    {

        private static Logger logger = LogManager.GetCurrentClassLogger();

        public OwinExceptionHandlerMiddleware(OwinMiddleware next)
            : base(next)
        { }

        public async override Task Invoke(IOwinContext context)
        {
            try
            {
                await Next.Invoke(context);
            }
            catch (Exception ex)
            {
                HandleException(ex, context);
            }
        }

        private void HandleException(Exception ex, IOwinContext context)
        {
            var request = context.Request;

            string ip = request.RemoteIpAddress;
            string stackTrace = ex.StackTrace;
            // add user details
            //Store error details to database and get a ID 
            string errorId = "123";

            logger.Error(stackTrace);

            TrailerResponseObject errorResponse = new TrailerResponseObject();
            errorResponse.hasError = true;
            errorResponse.message = "Error details can be found with Error Id : " + errorId;

            context.Response.StatusCode = (int)HttpStatusCode.OK;
            context.Response.ContentType = "application/json";
            context.Response.Write(JsonUtils.SerializeObject(errorResponse));

        }
    }
}