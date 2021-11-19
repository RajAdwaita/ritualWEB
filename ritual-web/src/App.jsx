import './App.css';
import Navbar from './components/Navbar';
// import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
// import Card from './components/Card';
import Services from './components/Services';
import CardTextSection from './components/CardTextSection';
import Capsule from './components/Capsule';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Card /> */}
      <Services />
      <CardTextSection />
      <Capsule />



    </div>
  );
}

export default App;
