<template>
    <ion-card 
    mode="ios" 
    :router-link="`/artista/${artista.id}`">
        <ion-img :src="`${artista.foto}`"></ion-img>
        <ion-card-header>
            <ion-card-title>{{ artista.nombre }}</ion-card-title>
        </ion-card-header>
    </ion-card>
</template>

<script>
import { IonCard, IonImg } from '@ionic/vue';

export default {
    props: ['artista'],
    components: {
        IonCard,
        IonImg,
    }
}
</script>

<style>
</style>