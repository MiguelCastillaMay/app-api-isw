<template>
    <ion-item :router-link="`/cancion/${cancion.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="cancion.portada"></ion-img>
        </ion-thumbnail>
        <ion-label>
            <h2>{{ cancion.nombre }}</h2>
            <h3>{{ cancion.disco }}</h3>
        </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue';

export default {
    props: ['cancion'],
    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel
    }
}
</script>

<style>
</style>