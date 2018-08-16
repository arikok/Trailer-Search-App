using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace trailer.Models
{
    public class YoutubeAPIModel : BaseServiceModel
    {
        public string Query { get; set; }
        public string RelatedToVideoId { get; set; }
        public string NextPageToken { get; set; }
        public bool HasNext { get; set; }
        public YoutubeAPIModelItem VideoDetail { get; set; }
        public List<YoutubeAPIModelItem> Videos { get; set; }

        public override string GetCacheKey()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("±");
            builder.Append(Query != null ? Query : "");
            builder.Append("±");
            builder.Append(RelatedToVideoId != null ? RelatedToVideoId : "");
            builder.Append("±");
            builder.Append(NextPageToken != null ? NextPageToken : "");
            builder.Append("±");            
            return builder.ToString();
        }
    }
}