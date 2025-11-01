<script>
export default {
  name: 'VbindExample',
  data(){
    return{
        isDisabled:true,
        imgUrl:'https://vuejs.org/images/logo.png',
        link:'https://vuejs.org/',
        size:100,
        dynamicClassName:'my-class',
        attrName:'',
        attrValue:'',
        customAttrValue:{}
    }
  },
  methods:{
    toggleDisabled(){
        this.isDisabled=!this.isDisabled
    },
    dynamicExample(){
        this.attrName='src'
        this.attrValue='https://vuejs.org/images/logo.png'
        this.customAttrValue={
            src:'https://vuejs.org/images/logo.png',
            alt:'VueJS Logo',
            width:'200'
        }
    }
  }
};
</script>

<template>

<div>
    <img :src="imgUrl" />
    <button v-bind:disabled="isDisabled">Disabled</button>
    <button  @click="toggleDisabled">Change To Disabled</button>
    <a :href="link" :target="'_blank'">VueJS Link</a>

    <a v-bind="{href:link,title:'test',target:'_blank'}">Link</a>

    <div :style="{ width: size + 'px', height: size + 'px', backgroundColor:'red' }"></div>
    <div :class="dynamicClassName"></div>


     <img v-bind:[attrName]="attrValue" />


       <img v-bind="customAttrValue" />

     <button @click="dynamicExample">Dinamik attrb</button>


    
</div>
</template>