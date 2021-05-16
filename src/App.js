
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MainPageContainer from "./components/mainPage/index"
function App() {
  const[DarkMode,setDarkMode]=useState(true);
  return (
    <div className="App">
     <Switch>
       <Route path="/">
         <MainPageContainer DarkMode={DarkMode} setDarkMode={setDarkMode}/>
       </Route>
       <Route path="/deck">
         
       </Route>
     </Switch>
    </div>
  );
}

export default App;
