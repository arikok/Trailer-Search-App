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

namespace trailer.ServicesImpl
{
    public class YoutubeAPIServiceImpl : YoutubeAPIService
    {
        public YoutubeAPIModel SearchQuery(string Query, string NextPageKey)
        {
            var youtubeService = new YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = "AIzaSyCczMd56kQuJ6Bpj21DVAz14C2jUG8ZLfw",
                ApplicationName = "trailer"
            });

            var searchListRequest = youtubeService.Search.List("snippet");
            searchListRequest.Q = Query;
            searchListRequest.MaxResults = 24;

            var searchListResponse = searchListRequest.Execute();

            YoutubeAPIModel results = new YoutubeAPIModel();
            results.Query = Query;

            List<YoutubeAPIModelItem> videos = new List<YoutubeAPIModelItem>();
            
            foreach (var searchResult in searchListResponse.Items)
            {
                switch (searchResult.Id.Kind)
                {
                    case "youtube#video":
                        YoutubeAPIModelItem item = new YoutubeAPIModelItem();
                        item.Title = searchResult.Snippet.Title;
                        item.YoutubeVideoId  = searchResult.Id.VideoId;
                        item.ChannelTitle = searchResult.Snippet.ChannelTitle;
                        item.ChannelId = searchResult.Snippet.ChannelId;
                        item.ThumbnailUrl = searchResult.Snippet.Thumbnails.High.Url;
                        videos.Add(item);
                        break;                    
                }
            }

            return results;

        }
        public YoutubeAPIModel HomePageVideos(string NextPageKey)
        {
            return null;
        }
    }
}