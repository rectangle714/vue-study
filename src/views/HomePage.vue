<template>
  <fragment>
    <div>
      <v-list lines="two">
        <v-list-item
          v-for="n in items"
          :key="n"
          :title="'Item ' + n"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        >테스트 list</v-list-item>
      </v-list>
    </div>
    <v-container>
      <CustomButton @click="clickHandler" :type="'outlined'" :value="'버튼'" />
    </v-container>
  </fragment>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import { login } from '@/api/auth.js';

export default {
    name: 'HomePage',
    components: {
      CustomButton
    },
    methods: {
        clickHandler() {
          login('test', '123');
        }
    },
    data() {
      return {
        items: ['A','B','C']
      }
    }
}
</script>