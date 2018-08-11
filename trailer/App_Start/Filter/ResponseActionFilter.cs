using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http.Filters;
using trailer.Common;

namespace trailer.App_Start.Filter
{
    public class ResponseActionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            var objectContent = actionExecutedContext.Response.Content as ObjectContent;
            if (objectContent != null)
            {
                var type = objectContent.ObjectType; //type of the returned object
                var value = objectContent.Value; //holding the returned value
                if (value.GetType() != typeof(TrailerResponseObject))
                {
                    TrailerResponseObject responseObject = new TrailerResponseObject();
                    responseObject.dataObject = value;
                    responseObject.hasError = false;
                    objectContent.Value = responseObject;
                }

            }
        }
    }
}