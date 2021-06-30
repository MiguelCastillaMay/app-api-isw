<template>
    <!-- ionpage para poder usar elementos de ionic -->
    <ion-page>
        <ion-header mode="ios">
            <!-- iontoolbar es la barra superior -->
            <ion-toolbar mode="ios">
                <!-- ionbuttons es para poder usar etiquetas ionbutton y sus derivador -->
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink" mode="md"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';

export default {
    props: ['pageTitle', 'pageDefaultBackLink'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>

<style>

</style>