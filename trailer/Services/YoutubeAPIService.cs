using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using trailer.Models;

namespace trailer.Services
{
    public interface YoutubeAPIService 
    {
        YoutubeAPIModel SearchQuery(string Query, string NextPageKey);
        YoutubeAPIModel RelatedVideos(string RelatedToVideoId, string NextPageKey);
        YoutubeAPIModel HomePageVideos(string NextPageKey);
    }
}
