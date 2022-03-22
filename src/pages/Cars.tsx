import { CreateAnimation, createAnimation, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { menuOutline } from 'ionicons/icons';
import './Cars.css';
import { useEffect, useState } from 'react';
import React from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const animationBuilder = (baseEl: any, opts: any) => {
  console.log("ahí vamos")
  console.log(opts)
  console.log("elemento")
  console.log(baseEl)

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

const Cars: React.FC = () => {

  const [showMenu, setShowMenu] = useState(false);

  const squareARef: React.RefObject<CreateAnimation> = React.createRef();

  useEffect(() => {
    if (showMenu) {
      console.log("hola holita")
      squareARef.current?.animation.play();
    }
  }, [showMenu]);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* <IonMenu side="start" menuId="first" contentId="my-main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu> */}

      <IonPage>
        <IonHeader>
          <IonToolbar>
            {/* <IonMenuButton slot="end"></IonMenuButton>  */}
            <IonIcon slot="end" icon={menuOutline} size="large" onClick={handleClick}></IonIcon>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>



        <IonContent fullscreen class="my-home">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <IonButton routerLink='/bicycles'>
            Show bicycles
          </IonButton> */}

          {showMenu ?
          <CreateAnimation
            ref={squareARef}
            fill="none"
            duration={2000}
            keyframes={[
              { offset: 0, transform: 'translateY(-400px)' },
              { offset: 0.5, transform: 'translateY(100px)' },
              { offset: 1, transform: 'translateY(50px)' }
            ]}
          >

            <IonCard id="my-ion-card" className="my-overall">
              <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
            </IonCard>
            
          </CreateAnimation>
          : <></>
        }

        </IonContent>
        {/* <IonRouterOutlet id="my-main"></IonRouterOutlet> */}

        

      </IonPage>
    </>
  );
};

export default Cars;
