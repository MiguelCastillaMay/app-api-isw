<template>
    <base-layout :page-title='titulo ? titulo : "Canciones"'>
        <canciones-list :canciones="canciones"></canciones-list>
    </base-layout>
</template>

<script>
import axios from 'axios';
import CancionesList from '../Canciones/CancionesList.vue';

export default {
    components: { 
        CancionesList,
    },
    data() {
        return {
            canciones: null,
            discoId: null,
            artistaId: null,
            url: null,
            titulo: null,
            tituloUrl: null,
        }
    },
    mounted() {
        this.getDiscoId();
        this.getArtistaId();
        this.getCanciones();
    },
    methods: {
        getCanciones() {
            if (this.discoId) {
                this.url = 'https://proyecto-isw.herokuapp.com/api/v1/disco/' + this.discoId + '/canciones';
                this.getTitulo();
            } else if(this.artistaId) {
                this.url = 'https://proyecto-isw.herokuapp.com/api/v1/artista/' + this.artistaId + '/canciones';
                this.getTitulo();
            } else {
                this.url = 'https://proyecto-isw.herokuapp.com/api/v1/cancion';
            }
            axios
                .get(this.url)
                    .then(response => {
                        this.canciones = response.data.data
                    })
                    .catch(e => console.log(e));
        },
        getDiscoId() {
            if (this.$route.params.id) {
                this.discoId = this.$route.params.id;
            }
        },
        getArtistaId() {
            if (this.$route.params.artistaId) {
                this.artistaId = this.$route.params.artistaId;
            }
        },
        getTitulo() {            
            if (this.discoId) {
                this.tituloUrl = 'https://proyecto-isw.herokuapp.com/api/v1/disco/' + this.discoId;
            } else {
                this.tituloUrl = 'https://proyecto-isw.herokuapp.com/api/v1/artista/' + this.artistaId;
            }
            axios
                .get(this.tituloUrl)
                    .then(response => {
                        this.titulo = response.data.data.nombre
                        // console.log(response.data.data.nombre)
                    });
        }
    }
}
</script>

<style>

</style>