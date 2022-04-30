<template>
  <q-btn flat round icon="settings">
    <q-menu>
      <q-list style="min-width: 200px">
        <q-item clickable v-ripple @click="toggleTheme">
          <q-item-section avatar>
            <q-icon :name="$q.dark.isActive ? 'light_mode' : 'dark_mode'" />
          </q-item-section>
          <q-item-section>{{ $q.dark.isActive ? 'Tema claro' : 'Tema oscuro' }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="toggleLeftDrawer">
          <q-item-section avatar>
            <q-icon name="format_align_left" />
          </q-item-section>
          <q-item-section>Ocultar / Mostrar panel izquierdo</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="toggleRightDrawer">
          <q-item-section avatar>
            <q-icon name="format_align_right" />
          </q-item-section>
          <q-item-section>Ocultar / Mostrar panel derecho</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
const $q = useQuasar();
const { $leftDrawerOpen, $rightDrawerOpen } = appContext.config.globalProperties;

const toggleTheme = () => {
  const dark = localStorage.getItem("dark");
  if (!dark || dark === "false") setTheme(true);
  else setTheme(false);
};

const setTheme = (theme: boolean) => {
  $q.dark.set(theme);
  localStorage.setItem("dark", String(theme));
};

const toggleLeftDrawer = () => $leftDrawerOpen.value = !$leftDrawerOpen.value;
const toggleRightDrawer = () => $rightDrawerOpen.value = !$rightDrawerOpen.value;
</script>
