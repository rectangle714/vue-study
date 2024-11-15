<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
  @font-face {
    font-family: 'Noto Sans';
    src: url('@/assets/fonts/NotoSansKR-ExtraLight.ttf') format('truetype');
    font-weight: 200; /* Extra Light */
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('@/assets/fonts/NotoSansKR-Regular.ttf') format('truetype');
    font-weight: 400; /* Regular */
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('@/assets/fonts/NotoSansKR-Bold.ttf') format('truetype');
    font-weight: 700; /* Bold */
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('@/assets/fonts/NotoSansKR-ExtraBold.ttf') format('truetype');
    font-weight: 800; /* Extra Bold */
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('@/assets/fonts/NotoSansKR-Black.ttf') format('truetype');
    font-weight: 900; /* Black */
    font-style: normal;
  }


  body {
    font-family: 'Noto Sans', sans-serif;
  }
</style>