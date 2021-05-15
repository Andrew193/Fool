
import { Route, Switch } from 'react-router';
import './App.css';
import MainPage from "./components/mainPage/index"
function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/">
         <MainPage />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
