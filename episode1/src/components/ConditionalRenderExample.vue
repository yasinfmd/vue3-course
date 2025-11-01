<script>
export default{
    name:'ConditionalRenderExample',
    data(){
        return{
            showMessage:true,
            count:0,
            showBox:false
        }
    },
    methods:{
        handleShowBox(){
            this.showBox = !this.showBox;
        },
        handleShow(){
            this.showMessage = !this.showMessage;
        },
        increment(){
            this.count++
        }
    }
}
</script>
<template>
    <div>
        <h1>v-if example</h1>
        {{ showMessage }}
        <button @click="increment">Count: {{count}}</button>
        <button @click="handleShow">Göster/Gizle</button>


        <button @click="handleShowBox">Box Göster/Gizle</button>


        <div v-show="showBox" class="box"></div>
        <p v-if="showMessage">Burada bir metin yer alıyor ama şarta bağlı oalrak ekranda olacak</p>
         <h1 v-if="!showMessage">ShowMessage true değilse görunur</h1>
       
         <h1 class="zero" v-if="count===0">Sayı 0 ise</h1>
         <h1 class="two" v-else-if="count===2">Sayı 2 ise</h1>
         <h1 class="four" v-else-if="count===4">Sayı 4 ise</h1>
         <h1 class="other" v-else>Sayı 0 2 ve 4 değil ise</h1>



    </div>
</template>

<style scoped>

.box{
    width:100px;
    height:100px;
    background-color:lightblue;
    margin:10px 0;
}
</style>