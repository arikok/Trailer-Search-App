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
        public YoutubeAPIModel Search(YoutubeAPIModel input)
        {
            string query = input.Query;
            if (!query.Contains("trailer"))
            {
                query += " trailer";
            }
            YoutubeAPIModel response = youtubeAPIService.SearchQuery(query, input.NextPageToken);
            return response;
        }

        [Route("youtube/homepage")]
        [HttpPost]
        public YoutubeAPIModel Home(YoutubeAPIModel input)
        {
            YoutubeAPIModel response = youtubeAPIService.HomePageVideos(input==null ? null : input.NextPageToken);
            return response;
        }

    }
}
