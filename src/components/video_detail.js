import React from "react";


const VideoDetail = ({video})=>{

	//To wait for the query to avoid havign video empty
	if(!video){
		return <div> Loading.... </div>
	}
    //get video Id from youtube API
	const videoId  			= video.id.videoId;
    const videoTitle 		= video.snippet.title;
    const videoDescription 	= video.snippet.description;

	//The request string
	const url =`https://www.youtube.com/embed/${videoId}`;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{videoTitle}</div>
				<div>{videoDescription}</div>
			</div>
			
		</div>


		);

};

export default VideoDetail;