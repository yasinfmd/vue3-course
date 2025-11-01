<script>
export default {
  name: 'HelloWorld',
  props:{
    msg:String
  },
  data(){
    return {
      username:'ahmet',
      age:25,
      isActive:true,
      hobbies:['coding','reading','traveling'],
      user:{
        firstName:'Ahmet',
        lastName:'Yılmaz'
      }
    }
  },
  methods:{
    sayHello(){
      console.log('this,',this)
      console.log(`Merhaba, benim adım ${this.username} ve ben ${this.age} yaşındayım.`)
    },
    updateAge(newAge){
      this.age=newAge
    }
  },
  mounted(){
    console.log('HelloWorld Bileşeni Yüklendi')
    console.log(this)
    console.log('Mesaj prop değeri:',this.msg)
  },


}
</script>

<template>
  <div class="hello-world">
    <h2>{{msg}}</h2>
    <p>Kullanıcı Adı: {{username}}</p>
    <p>Yaş: {{age}}</p>
    <p>Aktif Mi: {{isActive}}</p>
    <h3>Hobiler:</h3>
    <ul>
      <li v-for="(hobby, index) in hobbies" :key="index">{{hobby}}</li>
    </ul>
    <h3>Kullanıcı Bilgileri:</h3>
    <p>Ad: {{user.firstName}} {{user.lastName}}</p>
    <button @click="sayHello">Merhaba De</button>
    <button @click="updateAge(age + 1)">Yaşı Artır</button>
  </div>
</template>