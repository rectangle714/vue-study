<template>
  <div id="layout" >
    <HeaderLayout />
    <div v-if="shouldUseLayout" class="layout-content">
      <SidebarLayout />
      <main>
        <router-view /> <!-- 페이지 콘텐츠가 여기에 표시됨 -->
      </main>
    </div>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
import SidebarLayout from './SidebarLayout.vue';
import FooterLayout from './FooterLayout.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderLayout,
    SidebarLayout,
    FooterLayout,
  },
  computed: {
    shouldUseLayout() {
      return this.$route.meta.layout !== null;
    }
  },
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