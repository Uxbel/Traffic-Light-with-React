import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [selecteColor, setSelectedColor] = useState("green");
	return (
		<div className="container">
			<div className="d-flex flex-row bd-highlight mb-3 card m-5 p-5 bg-light">
				<div className="col-3 ml-5">
					<div className="traffic-light">
						<div
							onClick={() => setSelectedColor("red")}
							className={
								"light red" +
								(selecteColor === "red" ? " glow" : "")
							}></div>
						<div
							onClick={() => setSelectedColor("yellow")}
							className={
								"light yellow" +
								(selecteColor === "yellow" ? " glow" : "")
							}></div>
						<div
							onClick={() => setSelectedColor("green")}
							className={
								"light green" +
								(selecteColor === "green" ? " glow" : "")
							}></div>
					</div>
				</div>
				<div className="col-9 m-5">
					<h1>Traffic Light with React</h1>
					<br />
					<p>Click on the circle to turn on the light</p>
					<br />
					<br />
					<p className="mt-5">
						Made by <a href="http://www.github.com/uxbel">Uxbel</a>,
						<i className="far fa-heart"></i> with love!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
