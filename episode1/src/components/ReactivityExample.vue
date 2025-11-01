<script>
const deneme=()=>{
    console.log("deneme fonksiyonu çalıştı")
}
export default {
  name: 'ReactivityExample',
  data(){
    return{
        numbers:[1,2,3],
        count:0
    }
  },
  methods:{
    customArrow:()=>{
      alert("customArrow fonksiyonu çalıştı")
      console.log(this.count)
    },
    logNumbers(){
        console.log(this.numbers)
    },
    addNumber(){
        const arr=[...this.numbers]
        arr.push(arr.length + 1)
        this.numbers=arr
        console.log(this.numbers)
        console.log(arr)
       // this.numbers.push(this.numbers.length + 1);
    },
    increment(){
        let number=this.count
        number++
        this.count=number
    },
    logToParams(id){
      alert("ID: " + id)  
    },
    logToEvent(event){
      console.log(event.target)
    },
     async logToEventWithParameter(event,p){
      console.log(event,p)
    }
  }
};
</script>

<template>
    <div>
      {{ this.logNumbers() }}
        <h1>Reactivity Example</h1>
        <p>Array: {{ numbers }}</p>
        <p>count: {{count  }}</p>
        <button @click="this.addNumber">Array Push</button>

        <button @click="increment">Increment Count</button>
        <button @click="deneme">Test</button>

        <button @click="customArrow">Custom Arrow Function</button>

        <button @click="logToParams(count)">Log To Params</button>

        <button @click="logToEvent">Log to Event</button>


           <button @click="logToEventWithParameter($event,100)">Log to Event with Parameter</button>


    </div>
</template>  