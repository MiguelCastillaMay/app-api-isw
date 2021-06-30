<template>
    <ion-card mode="ios" :router-link="`/disco/${disco.id}/canciones`">
        <ion-img :src="`${disco.portada}`"></ion-img>
        <ion-card-header>
            <ion-card-subtitle>
                Fecha de lanzamiento {{ disco.fecha_lanzamiento }}
            </ion-card-subtitle>
            <ion-card-title>
                {{ disco.nombre }}
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{ disco.artista }}
        </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonImg} from '@ionic/vue';

export default {
    props: ['disco'],
    components: {
        IonCard,
        IonImg
    }
}
</script>

<style>

</style>