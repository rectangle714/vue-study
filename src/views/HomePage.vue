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
import { getTest } from '@/api/test.js';

export default {
    name: 'HomePage',
    components: {
      CustomButton
    },
    methods: {
        clickHandler() {
          getTest({email: 'test', password: '123'}, console.log('성공'), console.log('실패'));
        }
    },
    data() {
      return {
        items: ['A','B','C']
      }
    }
}
</script>