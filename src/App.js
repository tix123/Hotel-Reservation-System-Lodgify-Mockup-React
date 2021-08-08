import ReservationsPage from './pages/ReservationsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ReservationsPage} exact />
      </Switch>
    </Router>

  );
}

export default App;
