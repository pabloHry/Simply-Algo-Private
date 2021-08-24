import React, { useContext } from 'react';
// import { NavBar, Footer } from './Pages/layout/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Choose from './Pages/Coures/Choose';
import { myContext } from './Pages/Context';
import Register from './Pages/Register';
import CoursJs from './Pages/Coures/CoursJs';
import Forum from './Pages/Forum/Forum';
import './main.css';
import ForumJavaScript from './Pages/Forum/components/ForumJavaScript';
import CreateMessages from './Pages/Forum/components/CreateMessages';
function App() {
  const ctx = useContext(myContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        {ctx ? (
          <>
            {ctx.isAdmin ? <Route path="/admin" component={AdminPage} /> : null}
            <Route path="/profile" component={Profile} />
            <Route path="/choose" component={Choose} />
            <Route path="/js" component={CoursJs} />
            <Route path="/forum" component={Forum} />
            <Route path="/javascript" component={ForumJavaScript} />
            <Route path="/topic" component={CreateMessages} />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
