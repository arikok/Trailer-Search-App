# Youtube-Trailer-Search-WebAPI-Angular

Trailer Zone - Trailer Search Engine - Aug 2018
 .NET Web API 2 and Angular 6 Project

GOALS 

- Create a search and viewer application for movie trailers using movie dbs and video services 
- Caching mechanism for performance
- Seperate backend and frontend
- Nice and user-friendly front-end

.NET WebAPI 2 + Angular 6 

.NET WebAPI 2 Project 
	- .NET WebAPI 2 
	- Owin
	- Core features can be found in App_Start 
	- Dependency Injection with Windsor Castle
	- Service Layer Caching with MemoryCache with AOP - App_Start/Cache folder and YoutubeServiceImpl.SearchQuery method
	- Global Exception Handling
	- Nlog logging
	- Server side paging
	
Angular 6 Project 
	- Angular
	- Angular Material Components
	- Bootstrap 4 for responsive layouting
	- Multi-language support
	- Theme support
	- Font Awesome icons
	- Page transitions animations
	
Installation : 

	Prerequisite : 
		- nodejs and npm
		- Angular CLI
		- Visual Studio 2017

	Dependencies : 
		
		- This project contains two sub project, one for .net other one for angular. These project must be started seperately.
			-trailer : .NET WebAPI 2 Project
			-trailer-ngapp : Angular Project
	
		- To install nuget dependencies : open trailer.sln in Visual Studio 2017
			- in Package Manager Console run below command
			Update-Package -reinstall
			
		- To install NPM dependencies : Open command line and go to trailer-ngapp folder
			run below command 
			npm install

	To Run : 
		- Start trailer project in VS2017
		- Open Command line and go to trailer-ngapp
			-Run below command
			ng serve
		- Open a browser and go to localhost:4200
		
ToDo:

-Create GetDetailByYoutubeVideoId service for getting video details like description,title,channel title. After this share button urls can be replaced with ours.
-Youtube embed mobile screen issue
-Show related videos viewing page 
-Move search bar to top of page
 
 
 


