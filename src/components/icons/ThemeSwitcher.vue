<script setup lang="ts">
import { onMounted, ref } from "vue";
import Moon from "@/components/icons/Moon.vue";
import Sun from "@/components/icons/Sun.vue";

const active = ref(true);

// const emit = defineEmits<{
//   (e: 'selected', v: boolean): void;
// }>();

// watch(active, (v, p) => {
//   emit('selected', v)
// })

const currTheme = ref("");
const theme = ref("light");

onMounted(() => {
  theme.value = localStorage.getItem("theme") ?? "light";
  setDataTheme(localStorage.getItem("theme") ?? "light");
});

function setDataTheme(value: string) {
  document.documentElement.setAttribute("data-theme", value);
}

function toggle(value: string) {
  currTheme.value = value;
  setDataTheme(currTheme.value);
  localStorage.setItem("theme", currTheme.value);
}

function toggleTheme(v: boolean) {
  toggle(v ? "light" : "dark");
}
</script>

<template>
  <div
    class="theme-switcher"
    @click="
      active = !active;
      toggleTheme(active);
    "
  >
    <Moon v-if="active || theme" />
    <Sun v-else />
  </div>
</template>

<style scoped></style>
