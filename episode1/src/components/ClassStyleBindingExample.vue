<script>
export default{
    name:'ClassStyle',
    data(){
        return{
            green:'green',
            colorTxt:'background:purple;',
            btnStyle:{
                    fontWeight:'bold',
                    display:'flex',
                    color:this.green,
                    padding:"16px"
            },
            isActive:false,
            h1Class:'red',
            hasError:false,
            multipleClass:['text-red','text-underline']
        }
    },
    methods:{
        handleToggleClass(){
            this.h1Class=this.h1Class==='red'?'blue':'red'
        },
        handleChangeActive(){
            this.isActive=!this.isActive
            this.hasError=!this.hasError
        }
    },
    created(){
        this.btnStyle={
            ...this.btnStyle,
            color:this.green
        }
    }
}
</script>

<template>
    <div>
        <button :style="btnStyle">Button</button>
        <button @click="handleChangeActive">Active Toggle</button>

        <button @click="handleToggleClass">Class Toggle</button>

        <h1 :style="colorTxt">Inline Style</h1>

        <h1
        :class="[multipleClass,'big-text',{active:isActive,error:hasError}]"
        >Mix</h1>
        <p :class="{active:isActive,error:hasError}"> Durum :{{ isActive?'Aktif':'Pasif' }}</p>

        <h1 :class="multipleClass">Multiple</h1>



        <h1 :class="['big-text',h1Class]" >Multiplşe 2</h1>
        <h1 v-bind:class="h1Class">Merhaba</h1>
    </div>
</template>

<style scoped>
.red{
    color: red;
}
.blue{
    color: blue;
}

.text-red{
    color: red;
}
.text-underline{
    text-decoration: underline;
}

.big-text{
    font-size: 60px;
    font-weight: bold;
}

.active{
    color: aqua;
}

.error{
    font-weight: bold;
    text-decoration: line-through;
}
</style>