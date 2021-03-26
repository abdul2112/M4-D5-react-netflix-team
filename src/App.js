import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
