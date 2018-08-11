using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.Models
{
    public class YoutubeAPIModelItem
    {
        public String Title { get; set; }
        public string YoutubeVideoId { get; set; }
        public string ChannelTitle { get; set; }
        public String ChannelId { get; set; }
        public String ThumbnailUrl { get; set; }
        
    }
}