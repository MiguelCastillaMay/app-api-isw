<template>
    <base-layout page-title="Artistas">
        <artistas-list :artistas="artistas"></artistas-list>
    </base-layout>
</template>

<script>
import axios from 'axios';
import ArtistasList from '../Artistas/ArtistasList.vue';

export default {
    components: {
        ArtistasList,
    },
    data() {
        return {
            artistas: null,
        }
    },
    mounted() {
        this.getArtistas();
    },
    methods: {
        getArtistas() {
            axios
                .get('https://proyecto-isw.herokuapp.com/api/v1/artista')
                    .then(response => {
                        this.artistas =  response.data.data
                    })
                    .catch(e => console.log(e));
        }
    }
}
</script>