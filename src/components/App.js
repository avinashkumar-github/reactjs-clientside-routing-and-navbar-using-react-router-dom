import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import Footer from './Footer';
import Header from './Header';

const App = () =>{
    return (
        <Router>
            <Header />
            <AppRouter />
            <Footer />
        </Router>
    )
}


export default App;