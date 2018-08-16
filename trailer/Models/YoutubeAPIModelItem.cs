using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.Models
{
    public class YoutubeAPIModelItem
    {
        public string Title { get; set; }
        public string YoutubeVideoId { get; set; }
        public string Description { get; set; }
        public string ChannelTitle { get; set; }
        public string ChannelId { get; set; }
        public string ThumbnailUrl { get; set; }

        //"publishedAt": "2017-04-09T17:18:44.000Z",
        
    }
}