import './App.css';
import React from 'react';
import List from './List'
import Alert from './Alert'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [buttonName, setButtonName] = React.useState('Submit')
  const [goalList, setGoalList] = React.useState([])
  const [alert, setAlert] = React.useState({
    msg: '',
    state: '',
    show: false
  })

  return (
    <div className="center-div">
      <h1 id="app-title">Goal Tracker</h1>
      <Alert />
      <form className="form-div">
        <input id="input-box" type="text" defaultValue="Enter Goal Here..."/>
        <button variant="primary" type="submit" class="btn btn-primary">{buttonName}</button>
      </form>
      <List list={goalList}/>
    </div>
  );
}

export default App;
