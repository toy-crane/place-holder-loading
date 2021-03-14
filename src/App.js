import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./Card";

const AppContainer = styled.div`
	width: 1024px;
	margin: 0 auto;
`;

const CardContainer = styled.div`
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(2, 1fr);
`;

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => setLoading((loading) => !loading), 1000);
		return () => clearTimeout(timeout);
	}, [setLoading]);
	return (
		<AppContainer>
			<h1>CARD Sample</h1>
			<CardContainer>
				<Card loading={loading}></Card>
				<Card loading={loading}></Card>
				<Card loading={loading}></Card>
				<Card loading={loading}></Card>
			</CardContainer>
		</AppContainer>
	);
}

export default App;
