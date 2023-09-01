import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import View from "./components/user/View";
import Edit from "./components/user/Edit";

function App() {
  
  return (
    
    <>
      <BrowserRouter >
        <Switch className="app-container">
          <Route exact path="/" component={Inicio} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
