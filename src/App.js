import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './Components/Home'
import Four from './Components/Four'
import Red from './Components/Red'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route exact path={"/:id"} component={Four} />
        <Route path={"/:word/:tc/:bc"} component={Red} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
