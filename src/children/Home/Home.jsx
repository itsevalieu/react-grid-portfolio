import React, { Component } from "react";
import "./Home.css";
import cptimg from "../../containers/abbie-bernet-237683.jpg";

class Home extends Component {

	render() {
		return(
			<div className="home">
			 	<div className="component-image"><img src={cptimg} alt="#"/></div>
				HOME
			</div>
		);
	}
}

export default Home;