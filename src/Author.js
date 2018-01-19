import React, {Component} from 'react';

class Author extends Component{
	render(){
		return(
			<div>
				<em>Written By: {this.props.author}</em>
			</div>
		);
	}
}

export default Author;
