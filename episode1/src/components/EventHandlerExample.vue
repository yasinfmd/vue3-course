<script>
export default {
  name: 'EventHandlerExample',
  data(){
    return{
      isHover:false
    }
  },
  methods: {
    handleClickDiv(){
        alert('Div clicked!');
    },
    handleClickBtn(e){
        alert('Button clicked!');
    },
    handleClick(p,e) {
      alert('Button clicked!');
      alert('Parameter value: ' + p);
    }
  }
};
</script>

<template>
  <div>
    <button v-on:click="handleClick">Click Me</button>

       <button @click="handleClick">Click Me</button>


          <button @click="handleClick(10,$event)">Click Me</button>


          <button v-on:mouseover="isHover=true" @mouseleave="isHover=false"> Fare üzerinde : {{ isHover }}</button>


          <div @click.capture="handleClickDiv" class="wrapper">
            <button @click.stop.prevent="handleClickBtn">Tıkla</button>
          </div>

          <div @click.self="handleClickDiv" style="padding: 16px;background-color: red;">
            <button>Tıkla 1</button>
          </div>


           <button @click.left="handleClickBtn">Tıkla Left</button>
           <button @click.right="handleClickBtn">Tıkla Right</button>
           <button @click.middle="handleClickBtn">Tıkla Middle</button>


           <button @click.ctrl="handleClickBtn">Tıkla Ctrl</button>


           <input type="text" @keyup.left="handleClickBtn" placeholder="Enter a key"/>


          <form>
            <button @click.prevent="handleClickBtn">Submit</button>
          </form>


          <button @click.once="handleClickBtn">1 kere calısır</button>

  </div>
  </template>

  <style scoped>
    .wrapper{
      margin-top:1rem;
      padding:1rem;
      border:2px solid #333;
      display:inline-block;
      cursor:pointer;
    }
</style>