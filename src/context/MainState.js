import React, { useReducer } from "react";
import MainContext from "./MainContext";
import MainReducer from "./MainReducer";

const TodoState = props => {
	const incialState = {
		provinces: [
			{ id: 1, name: "EASTERN_CAPE" },
			{ id: 2, name: "FREE_STATE" },
			{ id: 3, name: "GAUTENG" },
			{ id: 4, name: "KWAZULU_NATAL" },
			{ id: 5, name: "LIMPOPO" },
			{ id: 6, name: "MPUMALANGA" },
			{ id: 7, name: "NORTH_WEST" },
			{ id: 8, name: "NORTHERN_CAPE" },
			{ id: 9, name: "WESTERN_CAPE" },
		],
		manispal: [
			{
				id: 351,
				name: "Mossel Bay",
				_id: "4nNbEQ8j4UOZvOUq",
			},
			{
				id: 357,
				name: "Swartland",
				_id: "5e0QvOJODFit7sTw",
			},
			{
				id: 354,
				name: "Prince Albert",
				_id: "5wcMq6mvTvhlEANH",
			},
			{
				id: 339,
				name: "Breede Valley",
				_id: "6VcxrJLJ7q4BGLIe",
			},
			{
				id: 338,
				name: "Bitou",
				_id: "6YaszC78uNslU7Jg",
			},
			{
				id: 339,
				name: "Breede Valley",
				_id: "6baVuEoePgTmRJlv",
			},
			{
				id: 348,
				name: "Laingsburg",
				_id: "7FoVx8As2p9uXDsD",
			},
			{
				id: 347,
				name: "Knysna",
				_id: "7kKGJBDMiXjZwTsU",
			},
		],
		surbub: [
			{
				id: 338,
				name: "Bitou",
				_id: "6YaszC78uNslU7Jg",
			},
			{
				id: 339,
				name: "Breede Valley",
				_id: "6baVuEoePgTmRJlv",
			},
			{
				id: 348,
				name: "Laingsburg",
				_id: "7FoVx8As2p9uXDsD",
			},
			{
				id: 347,
				name: "Knysna",
				_id: "7kKGJBDMiXjZwTsU",
			},
		],
		shudule: null,
	};
	const [state, dispatch] = useReducer(MainReducer, incialState);

	return (
		<MainContext.Provider
			value={{
				provinces: state.provinces,
				manispal: state.manispal,
				surbub: state.surbub,
				shudule: state.shudule,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export default TodoState;
