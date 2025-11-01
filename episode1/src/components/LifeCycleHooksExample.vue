<script>
export default {
    name:'LifeCycleHooks',
    data(){
        return{
            name:'ahmet'
        }
    },
    methods:{
        handleLogs(){
            this.$refs.myInput.focus()
            console.log(this.$refs.myInput.value)
                console.log(this.$refs)
        }
    },
    beforeCreate(){
        // data ve methods mevcut degildir
            console.log('vue instance olusturulmadan önce ')
        console.log(this.name)

    },
    created(){
        // data , computed , methods
        console.log('Vue instance olusturuldugunda çağırılır')
        console.log(this.name)
        console.log(document.getElementById('h1id'))
        // dom yok this.$el referanslar vb
    },
    beforeMount(){
        //son hazırlıklar veriyi dogrula güncelle vb vb
        console.log('template doma baglanmadan önce calısır')
    },
    mounted(){
        //api call , document queryselector elementbyid third party lbirary data compuıted vs 
        console.log('template dom eklendi')
        console.log(document.getElementById('h1id'))
         console.log(this.$refs)
    },
    beforeUpdate(){
        // güncellemeleri izleyebilirim
        console.log('data değişip dom güncellenmeden hemen önce calısır')
    },

    updated(){
        //dom güncellendikten sonra bi işlem yapacak isem
        console.log('dom guncellendi')
    },
    beforeUnmount(){
        //clear cleanup remove vs
        console.log('bileşen domdanm kaldırılmadan önce')
    },
    unmounted(){
        //event listerni kaldır timer temizle 
            console.log('bileşen domdan kaldırıldı')
    }
}
</script>

<template>
    <div>
        <div v-for="item in [1,2,3,4]" ref="divs">
            div element {{ item }}
        </div>
            <button @click="name=Math.random()">Tıkla</button>
            <button @click="handleLogs">Log to Refs</button>
            <input ref="myInput" />
        <h1 ref="h1ElementRef" id="h1id">Merhaba</h1>
        <h1>{{ name }}</h1>
    </div>
</template>