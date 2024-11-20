<template>
  <div id="layout" >
    <HeaderLayout />
    <div class="layout-content">
      <main>
        <router-view />
      </main>
    </div>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
import FooterLayout from './FooterLayout.vue';

export default {
  name: 'AuthLayout',
  components: {
    HeaderLayout,
    FooterLayout,
  }
};
</script>

<style scoped>
  #layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .layout-content {
    display: flex;
    flex: 1;
  }

  main {
    flex: 1;
    padding: 20px;
  }
</style>