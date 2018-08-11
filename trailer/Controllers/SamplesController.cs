using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using trailer.Models;
using trailer.Services;

namespace trailer.Controllers
{
    public class SamplesController : AbstractBaseApiController
    {

        private static Logger logger = LogManager.GetCurrentClassLogger();

        private readonly SampleService sampleService;
        public SamplesController(SampleService sampleService)
        {
            this.sampleService = sampleService;
        }
        
        
        [Route("sample")]
        [HttpPost]
        public SampleServiceModel sample(SampleServiceModel sampleServiceInput)
        {
            string outputkey = sampleService.getString();

            SampleServiceModel outputModel = new SampleServiceModel();

            outputModel.outputString = outputkey;

            logger.Error("error");
            logger.Info("info");
            
            return outputModel;
        }

    }
}
