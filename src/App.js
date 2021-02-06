import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Route, Switch } from "react-router-dom"
import TodoList from "./TodoList";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="pageContent">
        <Switch>
          <Route path="/todo" component={TodoList} />
          <Route path="/contact" component={Contact} />
          {/* <Route exact path="/" component={Home}/> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
