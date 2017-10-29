import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import chilitomte from "./assets/chilitomte.jpg";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<p>Hej</p>
			/*
			<div className="row">
				<div className="col-lg-8 offset-lg-2">

					<div className="img-container">
						<a href="#">
						<img src={chilitomte} className="image" />
						<div className="middle">
							<div className="text">Chilitomten</div>
						</div>
						</a>
						<h4>Christmas card Chilitomten</h4>
						<p>Hejsan från home.</p>
					</div>
				</div>
			</div>*/
		);
	}
}

export default Home;
