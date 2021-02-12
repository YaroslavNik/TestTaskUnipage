import {Switch, Route, Redirect} from 'react-router-dom'
import './Styles/App.sass'
import PageExercise from './Pages/PageExercise/PageExercise';
import { useEffect, useState } from 'react';
import { appAPI } from './API/API';

const App = () => {

  const [fullText, setFullText] = useState('')
  useEffect(() => {
    const fetchData = () => {
      appAPI.getRandomText(1)
        .then(response => setFullText(response.data.text))
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <Switch>
        <Route exact path = '/' render = {() => <PageExercise fullText = {fullText}/>}/>
        <Route path = '*'><Redirect to = '/'/></Route>
      </Switch>
    </div>
  );
}

export default App;
