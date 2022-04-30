<script setup lang="ts">
import { RouterView } from "vue-router";
import { getCurrentInstance, onBeforeMount, ref } from "vue";
import { useQuasar } from "quasar";
import CHeader from "@/components/layout/header/Header.vue";
import CFooter from "@/components/layout/footer/Footer.vue";
import CDrawer from "@/components/layout/drawer/Drawer.vue";

const $q = useQuasar();

onBeforeMount(() => {
  const dark = localStorage.getItem("dark");
  if (dark === "true") {
    $q.dark.set(true);
  }
});
</script>

<template>
  <q-layout view="hHh LpR fFF">
    <CHeader />
    <CDrawer v-model="$leftDrawerOpen.value" side="left" />
    <CDrawer v-model="$rightDrawerOpen.value" side="right" />
    <q-page-container>
      <RouterView />
    </q-page-container>
    <CFooter />
  </q-layout>
</template>

<style>
@import "@/assets/base.css";
</style>
