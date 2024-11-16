import "./App.css";
import Layout from "./client/layout/Layout";
import { Routes, Route } from "react-router-dom";
import PostPage from "./client/pages/PostPage/PostPage";
import PostsPage from "./client/pages/PostsPage/PostsPage";
import { userRoutes } from "./client/Routes/userRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          {userRoutes.map(
            ({ path, id, Component, componentAdditionalProps, strict }) => {
              return (
                <Route
                  key={id}
                  path={path}
                  element={
                    !strict ? (
                      <Component {...componentAdditionalProps} />
                    ) : (
                      <Component {...componentAdditionalProps} />
                    )
                  }
                ></Route>
              );
            }
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
