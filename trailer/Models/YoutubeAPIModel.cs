using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace trailer.Models
{
    public class YoutubeAPIModel : BaseServiceModel
    {
        public string Query { get; set; }
        public string RelatedToVideoId { get; set; }
        public string NextPageToken { get; set; }
        public bool HasNext { get; set; }
        public List<YoutubeAPIModelItem> Videos { get; set; }

        public override string GetCacheKey()
        {
            string key = "";
            key += "±" + (Query != null ? Query : "");
            key += "±" + RelatedToVideoId != null ? RelatedToVideoId : "";
            key += "±" + NextPageToken != null ? NextPageToken : "";
            return key;
        }
    }
}