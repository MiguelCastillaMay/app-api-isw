<template>
    <base-layout :page-title='artista ? artista : "Discos"' page-default-back-link="/artistas">
        <discos-list :discos="discos"></discos-list>
    </base-layout>
</template>

<script>
import axios from 'axios';
import DiscosList from '../Discos/DiscosList.vue';
// import { IonImg } from '@ionic/vue';

export default {
    components: {
        // IonImg,
        DiscosList,
    },
    data() {
        return {
            artistaId: null,
            discos: null,
            url: null,
            artista: null
        }
    },
    mounted() {
        this.getId();
        this.getDiscos();
    },
    methods: {
        getDiscos() {
            if (this.artistaId) {
                this.url = 'https://proyecto-isw.herokuapp.com/api/v1/disco/artista/' + this.artistaId;
                this.getArtista();
            } else {
                this.url = 'https://proyecto-isw.herokuapp.com/api/v1/disco';
            }
            axios
                .get(this.url)
                    .then(response => {
                        this.discos = response.data.data
                    })
                    .catch(e => console.log(e));
        },
        getId() {
            if (this.$route.params.id) {
                this.artistaId = this.$route.params.id;
            }
        },
        getArtista() {
            const url = 'https://proyecto-isw.herokuapp.com/api/v1/artista/' + this.artistaId;
            axios
                .get(url)
                    .then(response => {
                        this.artista = response.data.data.nombre
                    })
                    .catch(e => console.log(e));
        }
    }
}
</script>

<style>

</style>