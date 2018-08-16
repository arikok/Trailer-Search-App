using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using trailer.Models;
using trailer.Services;

using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Upload;
using Google.Apis.Util;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using trailer.App_Start.Cache;

namespace trailer.ServicesImpl
{
    public class YoutubeAPIServiceImpl : YoutubeAPIService
    {
        
        private YoutubeAPIModel SearchCore(string Query, string RelatedToVideoId,string NextPageToken)
        {
            var youtubeService = new YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = "AIzaSyCczMd56kQuJ6Bpj21DVAz14C2jUG8ZLfw",
                ApplicationName = "trailer"
            });

            var searchListRequest = youtubeService.Search.List("snippet");
            searchListRequest.MaxResults = 32;
            searchListRequest.Type = "video";

            if (Query != null && !Query.Equals(""))
            {
                searchListRequest.Q = Query;
            }
            
            if (NextPageToken != null && !NextPageToken.Equals(""))
            {
                searchListRequest.PageToken = NextPageToken;
            }

            if (RelatedToVideoId != null && !RelatedToVideoId.Equals(""))
            {
                searchListRequest.RelatedToVideoId = RelatedToVideoId;
            }
            
            var searchListResponse = searchListRequest.Execute();

            YoutubeAPIModel results = new YoutubeAPIModel();
            results.Query = Query;
            results.NextPageToken = searchListResponse.NextPageToken;

            List<YoutubeAPIModelItem> videos = new List<YoutubeAPIModelItem>();

            foreach (var searchResult in searchListResponse.Items)
            {
                switch (searchResult.Id.Kind)
                {
                    case "youtube#video":
                        YoutubeAPIModelItem item = new YoutubeAPIModelItem();
                        item.Title = searchResult.Snippet.Title;
                        item.YoutubeVideoId = searchResult.Id.VideoId;
                        item.ChannelTitle = searchResult.Snippet.ChannelTitle;
                        item.ChannelId = searchResult.Snippet.ChannelId;
                        item.ThumbnailUrl = searchResult.Snippet.Thumbnails.High.Url;
                        videos.Add(item);
                        break;
                }
            }

            results.Videos = videos;

            return results;
        }


        [CacheResult(Duration = 100000)]
        public YoutubeAPIModel SearchQuery(YoutubeAPIModel input)
        {            
            return SearchCore(input.Query, null, input.NextPageToken);
        }

        [CacheResult(Duration = 100000)]
        public YoutubeAPIModel RelatedVideos(YoutubeAPIModel input)
        {
            return SearchCore(null, input.RelatedToVideoId, input.NextPageToken);
        }
    }
}