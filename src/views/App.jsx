/** @format */

// import "../assets/styles/index.scss";

// import React from "react";
// import Recipes from "./Recipes";

// import photo from "../assets/images/pic.jpg";
// function App() {
//   return (
//     <>
//       <section className="hero"></section>
//       <main>
//         <section>
//           <h1>I'm with React, mahdi</h1>
//         </section>
//         <img src={photo} alt="photo" width="250" />
//         <Recipes />
//       </main>
//     </>
//   );
// }

// export default App;
import React from "react";
import "../assets/styles/index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Loading from "components/infrastructure/Loading";
// import PublicRoute from "../routers/PublicRoute";
// import Login from "../components/Hybrids/Login";
import HomePage from "./Web";
// import AdminLayout from "views/admin/Layouts/index"

function App() {
  return (
      <BrowserRouter>
        <React.Suspense /*fallback={<Loading />}*/>
          <Switch>
            {/* <Redirect exact={true} from="/admin" to={`/admin-login`} /> */}
            {/* <Route
            path="/admin"
            name="Panel-amin"
            render={(props) => <AdminLayout {...props}/>}
          /> */}
            {/* <PublicRoute
          restricted={false}
          component={Login}
          path="/login"
          exact={true}
        /> */}
            <Route
              path="/"
              name="HomePage"
              render={(props) => <HomePage {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
  );
}

export default App;
