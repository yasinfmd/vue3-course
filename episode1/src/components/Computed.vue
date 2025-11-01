<script>
export default{
    name:'Computed',
    data(){
        return{
            firstName:'John',
            lastName:'Doe',
            testModel:'Test Vue.js'
        }
    },
    methods:{
        getFullName(){
            console.log('getFullName çağrıldı');
            return this.firstName + ' ' + this.lastName;
        }
    },
    computed:{
        // fullName(){
        //     console.log('fullName hesaplandı');
        //     return this.firstName + ' ' + this.lastName;
        // },
        fullName:{
            get(){
                console.log('fullName hesaplandı');
                return this.firstName + ' ' + this.lastName;
            },
            set(value){
                console.log('fullName set edildi:',value);
                const names = value.split(' ');
                this.firstName ="Ahmet";
                this.lastName = names[names.length - 1];
            }
        },
        firstNameForAvatar(){
            console.log('firstNameForAvatar hesaplandı');
            return this.firstName.charAt(0) 
        },
        lastNameForAvatar(){
            console.log('lastNameForAvatar hesaplandı');
            return this.lastName.charAt(0) 
        }

    }
}
</script>

<template>
    <div>
    <h1>Computed</h1>
        <h1>{{ fullName }}</h1>
        ----------------------------------
        <h1>{{ getFullName() }}</h1>




        <h1>{{ firstNameForAvatar }} {{ lastNameForAvatar }}</h1> 

        <input type="text" v-model="fullName" placeholder="First Name"/>
        <input type="text" v-model="testModel" placeholder="Testmodel"/>

    </div>
</template>