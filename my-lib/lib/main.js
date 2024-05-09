import HelloWorld from '../src/HelloWorld.vue'
import { createApp } from 'vue'
export default {
  setUI: (id) => {
    {
      const app = createApp(HelloWorld)
      app.mount(id)
    }
  }
}
