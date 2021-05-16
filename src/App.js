
import { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import Deck from './components/deck';
import MainPageContainer from "./components/mainPage/index"
function App() {
  const [DarkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
        <Route exact path="/" render={() => <MainPageContainer DarkMode={DarkMode} setDarkMode={setDarkMode} />}></Route>
        <Route exact path="/game" render={(props) =>{
        console.log(props);
        <Deck {...props.location.state} />}}></Route>
    </div>
  );
}

export default App;
