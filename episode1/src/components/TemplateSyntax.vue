<script>
var age=30
function aler(){
    alert('Merhaba')
}
export default {
  name: 'TemplateSyntax',
  methods:{
    aler(){
       // alert('Merhaba')
    }
  },
  data(){
    return{
        message:'String Mesaj',
        age:0,
        isActive:true,
        user:{
            name:'Ayşe',
            surname:'Yılmaz',
            age:28
        },
        colors:['Kırmızı','Yeşil','Mavi'],
        product:{
            id:1,
            name:'Bilgisayar',
            price:15000,
            quantity:5,
            address:{
                city:'İstanbul',
                country:'Türkiye'
            }
        }
    }
  }
};
</script>

<template>

    <div>
        <!-- <h1>{{ var a=5 }}</h1> -->
              {{ aler() }}
                  {{ console.log('Merhaba') }}
                  <!-- {{ alert('qwqewq') }} -->
            <h1>{{ message.toUpperCase() }}</h1>
            <h1>{{ age + 50 }}</h1>
            <h1>{{ isActive === true ?'Eveet':'Hayır' }}</h1>
            <h1>{{ user }}</h1>
            <h1>{{ user.name.charAt(0) }}</h1>
             <h1>{{ user.name.split('').reverse().join('') }}</h1>
            <h1>{{ user.name }} {{ user.surname }} - {{ user.age }}</h1>
            <h1>{{ colors.filter((item)=>item!=='Kırmızı') }}</h1>
            <h1>{{ colors[0] }}</h1>
            <h1>
                {{ product.price }} - 
                {{ product.address.city }} / 
                {{ product.address.country }}
            </h1>

            <h1>Çarpım : {{ product.price * product.quantity }}</h1>
            <h1>Array length: {{ colors.length === 3 && user.name==="Ayşe" ? "Ok":"Not Ok" }}</h1>
   
        {{ age=30 }}
        
            
   </div>
</template>