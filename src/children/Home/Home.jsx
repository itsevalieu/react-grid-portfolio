import React, { Component } from 'react';
import './Home.css';
import cptimg from '../../containers/abbie-bernet-237683.jpg';

class Home extends Component {

	render() {
		return(
			<div className='home'>
			 	<div className='component-image'><img src={cptimg} alt='#'/></div>
				<div>Eva L Lieu</div>
				<div>Web Developer</div>
			</div>
		);
	}
}

export default Home;