import React, { Component } from "react";
import "./About.css";
import cptimg from "../../containers/rawpixel-com-550994.jpg";

class About extends Component {
	render() {
		return(
			<div className="about">
	            <div className="component-image"><img src={cptimg} alt="#"/></div>
				<div className="about-image">
					<img src='#' alt="Eva Lieu"/>
				</div>
				<div className="about-biography">
					<p>Present: Eva Lieu is a web developer versed in data science and data visualization. She has worked previously worked in at a tech startup called SueYa as a front-end web developer and is currently working at a tea company called Bird Pick Tea & Herb as their General and Operations Manager.</p>
					<p>Past: UCLA Alumni, English Major and Labor and Workplace Studies minor; Coding Bootcamp with UCLA Extension for Full Stack Web development</p>
					<p>Interests: Data Visualization, Public Policy, Business Logic, Storytelling</p>
				</div>
				<div className="about-info">
					<p>Skills: HTML3, CSS3, Javascript, Node.js, Express, React, MySQL, MongoDB, Python, APIs</p>
					<p>Experience: Sueya, Bird Pick Tea & Herb, Teafographic</p>
				</div>
			</div>
		);
	}
}

export default About;