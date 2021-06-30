<template>
    <discos-list-item 
        v-for="disco in discos" 
        :key="disco.id" 
        :disco="disco"
        ></discos-list-item>
</template>

<script>
import DiscosListItem from '../Discos/DiscosListItem.vue';

export default {
    props: ['discos'],
    components: {
        DiscosListItem,
    }
}
</script>

<style>

</style>