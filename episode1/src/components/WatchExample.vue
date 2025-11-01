<script>
export default{
    name:'Watch',
    data(){
        return{
            user:{name:'Yasin',adress:{city:'Ankara'}},
            message:'Hello Vue.js'
        }
    },
    watch:{
        message(newVal,oldVal){
            console.log('message değişti:',oldVal,'->',newVal);
        },
        user:{
            handler(newVal,oldVal){
                console.log('user değişti:',oldVal,'->',newVal);
            },
            immediate:true,
            deep:true,
            //dom guncellenmeden önce çalişir pre 
            // dom guncellendikten sonra çalişir post document.getlementbyid a a.getBNoudingcleintrect
            // sync reaktif degisikliklerde çalişir
            flush:'sync',
            onTrack(e){
                console.log('user izleniyor:',e);
            },
            onTrigger(e){
                console.log('user tetiklendi:',e);
            }
            // once:true
        }
        // user(newVal,oldVal){
        //     console.log('user değişti:',oldVal,'->',newVal);
        // }
    },
    mounted(){
        this._unwatch = this.$watch('message',(newVal,oldVal)=>{
            console.log('message değişti (manual watcher):',oldVal,'->',newVal);
        });
        this.$watch(()=>[this.user.name,this.user.adress.city],(newVal,oldVal)=>{
            console.log('user name veya city değişti (manual watcher):',oldVal,'->',newVal);
        });
    },
    beforeUnmount(){
        console.log('Watch bileşeni kaldırılıyor');
    }
}
</script>

<template>
    <div>
        <h1>Watch</h1>
        {{ user }}
        <button @click="user.name = 'Mehmet'">Change Name</button>
        <button @click="user.adress.city = 'İstanbul'">Change City</button>
        <input type="text" v-model="message" placeholder="Mesajınızı girin"/>
        <p>Mesajınız: {{ message }}</p>
    </div>
</template>