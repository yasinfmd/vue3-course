<style scoped>

.app-container{
  max-width:600px;
  margin:0 auto;
  padding:2rem;
  text-align:center;
  font-family:Avenir,Helvetica,Arial,sans-serif;
}
.app-container h1{
  color:#42b983;
}
.app-container button{
  padding:0.5rem 1rem;
  font-size:1rem;
  background-color:#42b983;
  color:#fff;
  border:none;
  border-radius:4px;
  cursor:pointer;
}
.app-container button:hover{
  background-color:#369870;
}
.counter{
  font-size:2rem;
  margin-top:1rem;
}
</style>

<template>

<div class="app-container">
  <CounterAppExample />
  <!-- <button @click="removeComponentFromDom">Remove</button> -->
  <!-- <LifeCycleHooksExample v-if="!removeComponent" /> -->
  <!-- <ClassStyleBindingExample /> -->
  <!-- <ListRenderingExample /> -->
  <!-- <ConditionalRenderExample /> -->
  <!-- <WatchExample /> -->
  <!-- <Computed /> -->
  <!-- <EventHandlerExample />
  <TwoWayDataBindExample/>
  <VbindExample />
  <ReactivityExample />
  <TemplateSyntax/>
  <h1>{{title}}</h1>
  <p>{{message}}</p>
  <p>Count: {{count}}</p>
  <button @click="increment">Increment</button>
  <HelloWorld msg="Bu, HelloWorld bileşeninden gelen bir mesajdır."/> -->
</div>

</template>


<script>
import HelloWorld from './components/HelloWorld.vue';
import ReactivityExample from './components/ReactivityExample.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import VbindExample from './components/VbindExample.vue';
import TwoWayDataBindExample from './components/TwoWayDataBindExample.vue';
import EventHandlerExample from './components/EventHandlerExample.vue';
import Computed from './components/Computed.vue';
import WatchExample from './components/WatchExample.vue';
import ConditionalRenderExample from './components/ConditionalRenderExample.vue';
import ListRenderingExample from './components/ListRenderingExample.vue';
import ClassStyleBindingExample from './components/ClassStyleBindingExample.vue';
import LifeCycleHooksExample from './components/LifeCycleHooksExample.vue';
import CounterAppExample from './counterappexample/CounterAppExample.vue';

export default{
  name:'App',
  components:{
    CounterAppExample,
    LifeCycleHooksExample,
    ClassStyleBindingExample,
    ListRenderingExample,
    ConditionalRenderExample,
    WatchExample,
    Computed,
    EventHandlerExample,
    TwoWayDataBindExample,
    HelloWorld,
    TemplateSyntax,
    ReactivityExample,
    VbindExample
  },
  data(){
    return{
      removeComponent:false,
      message:'Merhaba Dünya',
      title:'Vite + Vue',
      count:0
    }
  },
  methods:{
    increment(){
      this.count++
    },
    removeComponentFromDom(){
      this.removeComponent=!this.removeComponent
    }
  },
  mounted(){
      console.log('AppComponent Yüklendi')
      console.log('ilk mesaj:',this.message)
  }

}
</script>