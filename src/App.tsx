import "./App.css";
import MakeAddr from "./components/MakeAddr";

function App({ addressDB }: any) {
	return (
		<>
			<h1 className="App">Son's friends contact Address Book</h1>
			<MakeAddr addressDB={addressDB} />
		</>
	);
}

export default App;
