import { Provider } from 'react-redux'
import store from './redux/store'
import SiteList from './pages/SiteList'
import Details from './pages/Details'
import Header from './components/Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={SiteList} />
            <Route exact path="/info/:id" component={Details} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}


export default App;
