<template>
    <base-layout :page-title="nombre" page-default-back-link="/canciones">
        <ion-img :src="portada"></ion-img>
        <ion-card mode="ios">
            <ion-card-header>
                <ion-card-subtitle>
                    {{ disco }}
                </ion-card-subtitle>
                <ion-card-title>
                    {{ nombre }}
                </ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>
                    {{ letra }}
                </p>
            </ion-card-content>
        </ion-card>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button :href="link" 
                style="
                    margin-bottom: 10px; 
                    margin-right: 10px;
                    width: 70px;
                    height: 70px;">
                <ion-icon :icon="logoYoutube"
                    style="
                        width: 34px;
                        height: 34px;"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonImg, IonCard, IonFab } from '@ionic/vue';
import { logoYoutube } from 'ionicons/icons';

export default {
    components: {
        IonImg,
        IonCard,
        IonFab,
    },
    data() {
        return {
            cancionId: this.$route.params.id,
            letra: null,
            portada: null,
            nombre: null,
            disco: null,
            link: null,
            logoYoutube
        }
    },
    mounted() {
        this.getCancion();
    },
    methods: {
        getCancion() {
            const url = 'https://proyecto-isw.herokuapp.com/api/v1/cancion/' + this.cancionId;
            axios
                .get(url)
                    .then(response => {
                        this.letra = response.data.data.letra,
                        this.portada = response.data.data.portada,
                        this.nombre = response.data.data.nombre,
                        this.disco = response.data.data.disco,
                        this.link = response.data.data.link
                    })
                    .catch(e => console.log(e));
        }
    }
}
</script>

<style>
    ion-fab-button {
        --background: #0D0D0D;
    }
</style>