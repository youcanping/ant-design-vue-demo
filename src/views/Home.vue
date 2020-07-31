<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary">Button</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'ant-design-vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name]: Button
  }
}
</script>
