
import { Route, Switch } from 'react-router';
import './App.css';
import MainPageContainer from "./components/mainPage/index"
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/">
         <MainPageContainer />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
