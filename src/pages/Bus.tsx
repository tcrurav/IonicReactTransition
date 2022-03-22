import { createAnimation, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Bus.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Bus: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  const enterAnimation = (baseEl: any) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.popover-wrapper'))
      .keyframes([
        {
          offset: 0, opacity: '1', transform: `translate(-${getWindowDimensions().width / 2}px, -${getWindowDimensions().height}px)`
        },
        {
          offset: 1, opacity: '1', transform: `translate(-${getWindowDimensions().width / 2}px, ${60 - getWindowDimensions().height / 2}px)`
        }
      ]);

    return createAnimation()
      .addElement(baseEl)
      // .easing('ease-out')
      .duration(500)
      .addAnimation([
        // backdropAnimation, 
        wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }

  const handleClick = () => {
    setShowPopover(!showPopover);
  }

  return (
    <IonPage>
      <IonHeader className="my-header">
        <IonToolbar>
          <IonButtons slot="end">
            <IonIcon icon={menuOutline} size="large" onClick={handleClick}></IonIcon>
          </IonButtons>
          <IonTitle>Bus</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="my-content">
        <IonHeader collapse="condense" className="my-header">
          <IonToolbar>
            <IonTitle>Bus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonPopover id="my-menu"
          // animated={true}
          // size='auto'
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
          isOpen={showPopover}
          onDidDismiss={handleClick}
          showBackdrop={false}
        // alignment="center"
        // side="top"
        >
          {/* <IonContent> */}
          <IonList id="my-list">
            <IonItem lines="none" className="my-item" routerLink='/cars'><IonLabel>Cars</IonLabel></IonItem>
            <IonItem lines="none" className="my-item" routerLink='/bicycles'><IonLabel>Bicycles</IonLabel></IonItem>
            <IonItem lines="none" className="my-item" routerLink='/bus'><IonLabel>Bus</IonLabel></IonItem>
          </IonList>
          {/* </IonContent> */}
        </IonPopover>
        {/* <IonList>
          <IonItem lines="none" className="my-item" routerLink='/cars'><IonLabel>Cars</IonLabel></IonItem>
          <IonItem lines="none" className="my-item" routerLink='/bicycles'><IonLabel>Bicycles</IonLabel></IonItem>
          <IonItem lines="none" className="my-item" routerLink='/bus'><IonLabel>Bus</IonLabel></IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default Bus;
