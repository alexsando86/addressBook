import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AddrDataBase from "./server/db";

const addressDB = new AddrDataBase();

ReactDOM.render(
	<React.StrictMode>
		<App addressDB={addressDB} />
	</React.StrictMode>,
	document.getElementById("root")
);
