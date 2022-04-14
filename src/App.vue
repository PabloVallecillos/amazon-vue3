<script setup lang="ts">
import { RouterView } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { useQuasar } from "quasar";
import CHeader from "@/components/layout/header/Header.vue";
import CFooter from "@/components/layout/footer/Footer.vue";

const $q = useQuasar();

onBeforeMount(() => {
  const dark = localStorage.getItem("dark");
  if (dark === "true") {
    $q.dark.set(true);
  }
});
</script>

<template>
  <q-layout view="hHh LpR fFF" class="bg-white">
    <CHeader />
    <q-drawer
      v-model="$leftDrawerOpen.value"
      show-if-above
      bordered
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 1" :key="n">Drawer {{ n }}</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="$rightDrawerOpen.value"
      show-if-above
      bordered
      side="right"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 1" :key="n">Drawer {{ n }}</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>
    <CFooter />
  </q-layout>
</template>

<style>
@import "@/assets/base.css";
</style>
