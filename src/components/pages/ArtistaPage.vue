<template>
    <base-layout :pageTitle="nombre" :pageDefaultBackLink="`/artistas`">
        <ion-img :src="foto" style="margin-bottom: 10px"></ion-img>
        <ion-buttons mode="ios">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-button 
                        :router-link="`/canciones/artista/${artistaId}`" 
                        style="height: 40px; margin-left: 7px" 
                        expand="block">Canciones</ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button 
                        :router-link="`/discos/artista/${artistaId}`" 
                        style="height: 40px; margin-right: 7px" 
                        expand="block">Discos</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-buttons>
        <ion-card style="margin-top:10px" mode="ios">
            <ion-card-header>
                <ion-card-title>
                    {{ nombre }}
                </ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>{{ bio }}</p>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import BaseLayout from '../base/BaseLayout.vue';
import { IonImg, IonCard, IonButtons, IonButton, IonCol, IonRow, IonGrid } from '@ionic/vue';


export default {
  components: { 
        BaseLayout ,
        IonImg,
        IonCard,
        IonButtons,
        IonButton,
        IonGrid,
        IonRow,
        IonCol
    },
    data() {
        return {
            artistaId: this.$route.params.id,
            nombre: null,
            foto: null,
            bio: null,
        }
    },
    mounted() {
        this.getArtista();
    },
    methods: {
        getArtista() {
            const url = 'https://proyecto-isw.herokuapp.com/api/v1/artista/' + this.artistaId;

            axios
                .get(url)
                    .then(response => {
                        this.nombre = response.data.data.nombre,
                        this.foto = response.data.data.foto,
                        this.bio = response.data.data.bio
                    })
                    .catch(e => {
                        console.log(e)
                    });
        }
    },
}
</script>

<style>
    ion-button {
        --background: #1C1C1D;
        --color: #FFFFFF;
    }
</style>