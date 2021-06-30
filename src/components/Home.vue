<template>
    <base-layout page-title="Menú">
        <ion-card 
        mode="ios"
        v-for="dato in datos" 
        :key="dato.id" :router-link="`${dato.destino}`">
            <ion-img :src="`${dato.url}`"></ion-img>
            <ion-card-header>
                <ion-card-title>{{ dato.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ dato.desc }}
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import { IonCard, IonImg } from '@ionic/vue';

export default {
    data() {
        return {
            datos: [
                {
                    id: 1,
                    title: 'Artistas',
                    url: 'https://photosmenuapp.s3.us-east-2.amazonaws.com/KENDRICK-S3.jpg',
                    desc: 'Los artistas del momento',
                    destino: '/artistas'
                },
                {
                    id: 2,
                    title: 'Discos',
                    url: 'https://photosmenuapp.s3.us-east-2.amazonaws.com/pexels-lopsan-2191013.jpg',
                    desc: 'Los discos del momento',
                    destino: '/discos'
                },
                {
                    id: 3,
                    title: 'Canciones',
                    url: 'https://photosmenuapp.s3.us-east-2.amazonaws.com/pexels-stas-knop-1626481.jpg',
                    desc: 'Las canciones del momento',
                    destino: '/canciones'
                }
            ]
        }
    },
    components: {
      IonCard,
      IonImg
    },

}
</script>

<style>

</style>