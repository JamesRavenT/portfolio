import './App.css';
import Navbar from './C01-Navbar/Navbar.jsx'
import Header from './C02-Header/Header.jsx'
import Body from './C03-Body/Body.jsx';

//App Builder
export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            Hello World!
        </div>
    )
}