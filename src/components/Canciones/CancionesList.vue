<template>
    <ion-list lines="none">
        <canciones-list-item 
        v-for="cancion in canciones" 
        :key="cancion.id" 
        :cancion="cancion"
        ></canciones-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import CancionesListItem from '../Canciones/CancionesListItem.vue';

export default {
    props: ['canciones'],
    components: {
        CancionesListItem,
        IonList,
    }
}
</script>

<style>
</style>