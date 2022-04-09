import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import MainScreen from "../pages/MainScreen";

const Router = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route path="/mainscreen" component={MainScreen} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </Suspense>
  );
};

export default Router;
