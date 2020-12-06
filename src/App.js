import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Radar from "./pages/Radar";
import Bar from "./pages/Bar";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='main-div'>
          <Switch>
            <Route exact path='/radar' component={Radar} />
            <Route path='/bar' component={Bar} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
