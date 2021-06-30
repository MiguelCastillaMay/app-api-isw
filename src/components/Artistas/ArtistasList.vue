<template>
    <artistas-list-item
        v-for="artista in artistas"
        :key="artista.id"
        :artista="artista"></artistas-list-item>
</template>

<script>
import ArtistasListItem from '../Artistas/ArtistasListItem.vue';

export default {
    props: ['artistas'],
    components: {
        ArtistasListItem,
    }
}
</script>

<style>
</style>