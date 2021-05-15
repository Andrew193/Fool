
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MainPageContainer from "./components/mainPage/index"
function App() {
  const[DarkMode,setDarlMode]=useState(true);
  return (
    <div className="App">
     <Switch>
       <Route path="/">
         <MainPageContainer DarkMode={DarkMode} setDarlMode={setDarlMode}/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
