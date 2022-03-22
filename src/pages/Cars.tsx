import { CreateAnimation, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import './Cars.css';
import { useEffect, useState } from 'react';
import React from 'react';

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
      <IonPage>
        <IonHeader>
          <IonToolbar>
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

          {showMenu ?
            <CreateAnimation
              ref={squareARef}
              duration={2000}
              keyframes={[
                { offset: 0, opacity: 0, transform: 'translateY(-200px)' },
                { offset: 0.5, opacity: 1, transform: 'translateY(100px)' },
                { offset: 1, opacity: 1, transform: 'translateY(0px)' }
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

      </IonPage>
    </>
  );
};

export default Cars;
