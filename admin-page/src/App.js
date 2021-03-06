import './App.css';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './Admin';

function App(){
  return(
    <Router>
      <Switch>
        <Route path="/login">
          <Login />  
        </Route>
        <Route path='/'>
          <Admin />  
        </Route>
      </Switch>
    </Router>

  );
}


export default App;





// import {useState} from 'react';
// import Main from './components/main/Main';
// import Navbar from './components/navbar/Navbar';
// import Sidebar from './components/sidebar/Sidebar';

// const App = () => {

// const [sidebarOpen, setSidebarOpen] = useState(false);

// const openSidebar = () => {
//   setSidebarOpen(true);
// }

// const closeSidebar = () => {
//   setSidebarOpen(false);
// }

//   return (
//     <div className="container">
//     <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
//       <Main />
//       <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
//       {/* <Chart /> */}
//     </div>
//   );
// }

// export default App;
