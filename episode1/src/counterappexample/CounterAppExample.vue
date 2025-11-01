<script>
export default{
    data(){
        return{
             count:0,
             minLimit:0,
             maxLimit:10
        }
    },
    methods:{
        decreaseCount(){
               if(this.count>this.minLimit){
            this.count--
                
            }

        },
        increateCount(){
                if(this.count<this.maxLimit){
            this.count++
                
            }
        }
    },
    computed:{
        countClass(){
            return{
                high:this.count>=this.maxLimit,
                low:this.count<=this.minLimit
            }
        },
        statusMessage(){
            if(this.count===this.maxLimit) return "Max Sınır " + this.count
            if(this.count===this.minLimit) return "Min Sınır" + this.count
            return "Sayaç Değeri Normal"
        }
    },
    created(){
        this.count=Math.random()>0.5 ? 1:9
    }
}
</script>

<template>
    <div>
        <h1>Counter App</h1>
        <div class="counter-btns">
             <button @click="decreaseCount" class="btn">Azalt</button>
        <button @click="increateCount" class="btn">Arttır</button>

        </div>
        <p class="count" :class="countClass"> Değer : {{  count }}</p>
        <h1>Durumu : {{ statusMessage }}</h1>
    </div>
</template>

<style scoped>
.count{
    font-size: 32px;
    margin-top: 20px;
    transition: color 0.5s;
}
.count.low{
color: aquamarine;
}
.count.high{
    color: red;
}

.btn{
    padding: 8px 16px;
    display: flex;
    align-items: center;
    background-color: crimson;
    color: #fff;
    outline: none;
    border: none;
}

.counter-btns{
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
}
</style>