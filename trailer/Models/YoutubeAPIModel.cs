using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.Models
{
    public class YoutubeAPIModel : BaseServiceModel
    {
        public String Query { get; set; }
        public String NextPageToken { get; set; }
        public bool HasNext { get; set; }
        public List<YoutubeAPIModelItem> Videos { get; set; }
    }
}