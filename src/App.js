import {Switch, Route, Redirect} from 'react-router-dom'
import './Styles/App.sass'
import PageExercise from './Pages/PageExercise/PageExercise';

const App = () => {

  return (
    <div className="container">
      <Switch>
        <Route exact path = '/' component = {PageExercise}/>
        <Route path = '*'><Redirect to = '/'/></Route>
      </Switch>
    </div>
  );
}

export default App;
