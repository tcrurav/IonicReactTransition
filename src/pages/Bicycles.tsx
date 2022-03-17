import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Bicycles.css';

const Bicycles: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Bicycles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="my-bicycles">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bicycles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Bicycles;
