import React, { useState, useContext } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import ListItems from "./ListItems";
import MainContext from "../context/MainContext";
const Home = () => {
	const { manispal, surbub, provinces } = useContext(MainContext);
	const [province, setProvince] = useState(null);
	const [selectedProvince, setSelectedProvince] = useState("");
	const [manu, setManu] = useState("");
	const [surb, setSurb] = useState("");
	const setState = (field, name) => {
		console.log(field, name);
	};
	const handleChange = e => {
		const { value, name } = e.target;
		if (name === "province") {
			let displayedArr;
			if (value === "") {
				displayedArr = [];
			} else {
				displayedArr = provinces.filter(element =>
					element.name.includes(value.toUpperCase())
				);
				displayedArr = displayedArr.map(element => (
					<ListItems
						fieldName={name}
						setState={setState}
						id={element.id}
						name={element.name}
					/>
				));
			}
			setProvince(displayedArr);
		} else if (name === "manupality") {
			let temp;
			if (value === "") {
				temp = [];
			} else {
				temp = manispal.filter(element =>
					element.name.toUpperCase().includes(value.toUpperCase())
				);
				temp = temp.map(element => (
					<ListItems
						setSelectedProvince={setSelectedProvince}
						id={element.id}
						name={element.name}
					/>
				));
			}
			setManu(temp);
		}
	};

	const classes = useStayles();
	return (
		<div className={classes.homewrap}>
			<form>
				<TextField
					name="province"
					className={classes.fields}
					label="Enter a province"
					onChange={handleChange}
				/>
				<div className={classes.listWrap}>
					{province ? province : null}
				</div>
				<TextField
					name="manupality"
					className={classes.fields}
					label="Enter Manupality"
					onChange={handleChange}
				/>
				<div className={classes.listWrap}>{manu ? manu : null}</div>
				<TextField
					name="surbarb"
					className={classes.fields}
					label="Enter a Subarbu"
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					color="secondary"
					className={classes.search}
				>
					Search
				</Button>
			</form>
		</div>
	);
};

const useStayles = makeStyles({
	homewrap: {
		padding: "2em",
	},
	fields: {
		width: "100%",
		margin: ".5em 0",
	},
	search: {
		width: "50%",
	},
	listWrap: {
		maxHeight: "20vh",
		display: "grid",
		gridTemplateColumns: "1fr",
		gridRowGap: "10px",
		overflowY: "scroll",
	},
});

export default Home;
