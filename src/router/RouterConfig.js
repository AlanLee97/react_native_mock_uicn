import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/commons/LoginPage";
import AppContainer from "../pages/commons/AppContainer";
import TestNetwork from "../pages/test/TestNetwork";
import RegisterPage from '../pages/commons/RegisterPage';

const routes = [
  {
    name: 'AppContainer',
    component: AppContainer,
    options: {
      header: () => null,
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true,
    }
  },
  {
    name: 'HomePage',
    component: HomePage,
    options: {
      header: () => null,
    }
  },
  {
    name: "LoginPage",
    component: LoginPage,
    options: {
      header: () => null,
    }
  },
  {
    name: "RegisterPage",
    component: RegisterPage,
    options: {
      header: () => null,
    }
  },
  {
    name: "TestNetwork",
    component: TestNetwork,
    options: {
      header: () => null,
    }
  }
];

export default routes;
