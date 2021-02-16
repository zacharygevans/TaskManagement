import logo from './logo.svg';
import { FormspreeProvider } from '@formspree/react';
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
          <FormspreeProvider project={process.env.REACT_APP_PROJECT_ID}>
            <Route path="/contact" component={Contact} />
          </FormspreeProvider>    
          {/* <Route exact path="/" component={Home}/> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
