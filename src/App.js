
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import LoginPage from './Components/LoginPage/login';


const App = () => {
return <>
<BrowserRouter>
<LoginPage/>
</BrowserRouter>
</>
}

export default App;
