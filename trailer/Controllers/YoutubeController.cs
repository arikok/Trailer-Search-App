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
    public class YoutubeController : AbstractBaseApiController
    {

        private static Logger logger = LogManager.GetCurrentClassLogger();
        
        private readonly YoutubeAPIService youtubeAPIService;
        public YoutubeController(YoutubeAPIService youtubeAPIService)
        {
            this.youtubeAPIService = youtubeAPIService;
        }
        
        [Route("youtube/search")]
        [HttpPost]
        public YoutubeAPIModel Search([FromBody] YoutubeAPIModel input)
        {
            if (input == null || input.Query == null)
            {
                input = new YoutubeAPIModel();
                input.Query = "trailer";
            }
            
            if (!input.Query.Contains("trailer"))
            {
                input.Query += " trailer";
            }
            YoutubeAPIModel response = youtubeAPIService.SearchQuery(input);
            return response;
        }
        

    }
}
