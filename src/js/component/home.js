import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [color, setcolor] = useState("red");

	return (
		<div className="Traffic Light with React">
			{color}
			<div
				className={"red light" + (color == "red" ? " selected" : "")}
				onClick={() => setcolor("red")}
			/>
			<div
				className={
					"yellow light" + (color == "yellow" ? " selected" : "")
				}
				onClick={() => setcolor("yellow")}
			/>
			<div
				className={
					"green light" + (color == "green" ? " selected" : "")
				}
				onClick={() => setcolor("green")}
			/>
		</div>
	);
}
