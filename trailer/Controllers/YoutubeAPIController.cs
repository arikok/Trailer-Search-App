using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using trailer.Services;

namespace trailer.Controllers
{
    public class YoutubeAPIController : AbstractBaseApiController
    {
        private readonly YoutubeAPIService youtubeAPIService;
        public YoutubeAPIController(YoutubeAPIService youtubeAPIService)
        {
            this.youtubeAPIService = youtubeAPIService;
        }



    }
}