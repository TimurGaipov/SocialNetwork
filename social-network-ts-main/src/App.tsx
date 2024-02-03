import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Container } from "./components/Container/Container";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PostPage } from "./pages/PostPage/PostPage";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/registration',
    element: <RegistrationPage />
  },
  {
    path: '/main',
    element: <MainPage />
  },
  {
    path: 'posts/:postId',
    element: <PostPage />
  }
])

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <RouterProvider router={routerConfig} />
        </Container>
      </Provider>
    </div>
  );
};

export default App;
