import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from "./config/routes";

const App = () => {
	return (
		<BrowserRouter>
			<RoutesConfig />
		</BrowserRouter>
	)
};

export default App;
