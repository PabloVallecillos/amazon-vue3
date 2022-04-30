<script>
export default {
  name: "CDrawer",
  props: {
    // vModel: Boolean,
    side: "left" | "right",
  },
};
</script>

<template>
  <q-drawer
    bordered
    :side="side"
  >
    <q-scroll-area class="fit">
      <div class="q-pa-sm">
        <div v-for="n in 1" :key="n">Drawer {{ n }}</div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>
