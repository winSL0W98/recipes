import React from "react";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import { Redirect, Route, Switch } from "react-router";
import RecipesDetailingPage from "../pages/RecipesDetailingPage/RecipesDetailingPage";

/**
 * Разметка и роутинг основной страницы
 * @returns {JSX.Element}
 */
const MainLayout = () => {
  return (
    <Switch>
      <Route exact path="/" component={RecipesPage} />
      <Route
        exact
        path="/viewRecipe/:recipesId"
        component={RecipesDetailingPage}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default MainLayout;
