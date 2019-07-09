import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { Home, About, Contact } from './pages';

function Routes({ location, history }) {

  // Pages
  const pages = [
    {
      component: <Home />,
      route: '/',
      isExact: true,
    },
    {
      component: <About />,
      route: '/pageone',
      isExact: false,
    },
    {
      component: <Contact />,
      route: '/pagetwo',
      isExact: false,
    },
  ]

  // Workaround for Redirect combined with react-transition-group
  const DefaultRoute = ({ action, children }) => (action === 'REPLACE') ? null : children

  return (
    <TransitionGroup id="_Routes" className="_Routes">
      <Transition
        key={location.key}
        timeout={{ enter: 2000, exit: 2000 }}
      >
        <Switch location={location}>
          {pages.map((page, i) =>
            <Route key={i} exact={page.isExact} path={page.route}>
              {page.component}
            </Route>
          )}
          <Route
            render={() =>
              <DefaultRoute action={history.action}>
                <Redirect to="/" />
              </DefaultRoute>
            }
          />
        </Switch>
      </Transition>
    </TransitionGroup>
  );
}

export default withRouter(Routes);
