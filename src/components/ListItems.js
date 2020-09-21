import React from "react";
import { Paper } from "@material-ui/core";

const ListItems = ({ setState, name, fieldName }) => {
	return (
		<Paper
			onClick={() => setState(fieldName, name)}
			style={{
				padding: ".5em",
			}}
		>
			<h4>{name}</h4>
		</Paper>
	);
};

export default ListItems;
