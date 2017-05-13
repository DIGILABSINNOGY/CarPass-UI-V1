import LoginPage from './containers/LoginPage.jsx';


const routes = {
  // base component (wrapper for the whole application).
  
  childRoutes: [
    {
      path: '/',
      component: LoginPage
    }
  ]
};

export default routes;
