<script>
import HelloTxt from './HelloTxt.vue';

export default {
    name:'ListRender',
    components:{
        HelloTxt
    },
    data(){
        return {
            user:{
                name:'ahmet',
                surname:'yılmaz',
                address:{
                    city:'Ankara'
                }
            },
            strings:['a','b'],
            numbers:[1,2,3,4],
            todos:[
                {id:1,name:'task1'},
                {id:2,name:'task2'},
                {id:3,name:'task3'},
                {id:4,name:'task4'},

            ]
        }
    },
    methods:{
        addNumber(){
                this.numbers.push(Math.random())
        },
        handleTodo(t){
            console.log(t)
            t.name=Math.random()
        },
        removeTodo(id){
            this.todos=this.todos.filter((item)=>item.id!==id)
        },
        moveTodo(i){
                    if(i===0) return
                    const arr=this.todos
                    const [item]=arr.splice(i,1)
                        arr.splice(i-1,0,item)
                }
    }
}
</script>


<template>
    <div v-for="value in [1,2,3]">
        {{ value }}
    </div>
    <div v-for="item in numbers">
        <HelloTxt :key="item" />
    </div>
    <div>
         <div v-for="item in numbers">
            <div v-for="subItem in strings">
                {{ item }} x {{ subItem }}
            </div>
           </div>
           -------------------------------
        <button @click="addNumber">Sayı Ekle</button>
        <div v-for="(value,key,i) in user">
            {{ typeof value ==='object' ? user[key].city:value }} - {{ key }} -{{ i }}
        </div>
        <ul>
            <li v-for="value in numbers">Selam , {{ value }}</li>
        </ul>
        <div v-for="(value,i) in todos" :key="i">
           <div>
            index: {{ i }},  {{ value.name }}
           </div>
           <button @click="handleTodo(value)">
                    Change random name
           </button>


              <button @click="removeTodo(value.id)">
                    Remove todo
           </button>

           <button @click="moveTodo(i)">
                    Move  todo
           </button>


          
        </div>
    </div>
</template>