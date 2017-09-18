import React , {Component} 	from 'react';
import ReactDOM 			from 'react-dom';
import YTSearch 			from 'youtube-api-search';
import _					from 'lodash';

import SearchBar 			from './components/search_bar';
import VideoList 			from './components/video_list' ;
import VideoDetail 			from './components/video_detail';

const API_KEY = "AIzaSyBHXs4yUB7L2X5xY6_1Yj8e_d1ducmmVpw";


// Create a new component to produce some html
class  App  extends Component{

	constructor(props){
		super(props);


		this.state = { 
			videos : [] ,
			selectedVideo : null
		};

		this.videoSearch('');
		
	}

	videoSearch(term) {

		YTSearch ({key: API_KEY , term : term} , (videos) =>{
			this.setState({ 
				videos 			: videos , 
				selectedVideo 	: videos[0] //select the first result to play first
			});
			//this.setState({videos : videos})
		});
	}

	render(){

        //Use the lodash package to call a function during a specific time frame
        //it is like runnable in Java
		const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

			return (
				<div>

					<SearchBar 
						onSearchTermChange={videoSearch}/>

					<VideoDetail 
						video  ={this.state.selectedVideo}/>
					
					<VideoList   
						onVideoSelect ={(selectedVideo) => this.setState({selectedVideo})}
						videos ={this.state.videos} />
				</div>
			);
	}
	
}


//Take the component's generated HTML 
//and put it pn the page ( In the DOM)
ReactDOM.render(<App /> , document.querySelector('.container')); //convert the class to instance
