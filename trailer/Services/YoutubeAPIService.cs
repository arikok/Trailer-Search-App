using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using trailer.App_Start.Cache;
using trailer.Models;

namespace trailer.Services
{
    public interface YoutubeAPIService 
    {
        YoutubeAPIModel SearchQuery(YoutubeAPIModel input);
        YoutubeAPIModel RelatedVideos(YoutubeAPIModel input);
    }
}
