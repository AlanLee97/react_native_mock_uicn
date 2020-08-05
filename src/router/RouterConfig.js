import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/commons/LoginPage";
import AppContainer from "../pages/commons/AppContainer";
import TestNetwork from "../pages/test/TestNetwork";

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
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true,
    }
  },
  {
    name: "LoginPage",
    component: LoginPage,
    options: {
      header: () => null,
      headerStyle: {
        backgroundColor: 'transparent'
      },
    }
  },
  {
    name: "TestNetwork",
    component: TestNetwork,
    options: {
      header: () => null,
      headerStyle: {
        backgroundColor: 'transparent'
      },
    }
  }
];

export default routes;
