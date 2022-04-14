<script lang="ts">
import Setting from "@/components/icons/Setting.vue";

export default {
  name: "CHeader",
  components: {
    Setting,
  },
};
</script>

<template>
  <q-header elevated height-hint="98">
    <q-toolbar>
      <q-toolbar-title> Amazon </q-toolbar-title>
      <Setting />
    </q-toolbar>
  </q-header>
</template>
