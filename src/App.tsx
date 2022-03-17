import { Redirect, Route } from 'react-router-dom';
import { createAnimation, IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Bicycles from './pages/Bicycles';

setupIonicReact();

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const animationBuilder = (baseEl: any, opts: any) => {

  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .fromTo('transform', `translateY(-${getWindowDimensions().height}px)`, 'translateY(0px)')
    .beforeRemoveClass(['ion-page-invisible'])
    .duration(1000);

  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .fromTo('transform', 'translateY(0px)', `translateY(${getWindowDimensions().height}px)`)
    .beforeRemoveClass(['ion-page-invisible'])
    .duration(1000);

  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation);

  return animation;
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet animation={animationBuilder} >
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/bicycles">
          <Bicycles />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
