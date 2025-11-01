<script>
export default {
  name: 'TwoWayDataBindExample',
  data(){
    return{
        message:'',
        age:"1",
        selectedColor:'',
        isChecked:true,
        inputValue:'Varsayılan Değer'
    }
  },
  methods:{
    clearMessage(){
        this.message='';
    },
    changeInputValue(){
        this.inputValue='Javascript Tarafından Değiştirildi';
    },
    logToAge(){
        console.log(this.age);
    }
  }
};
</script>

<template>
    <div>
            <input  v-model.trim.lazy="message"/>
            <input type="number" v-model.number="age"/>
            <button @click="logToAge">Yaşı Konsola Yazdır</button>
            <p>Yaşınız: {{ age }}</p>
            <p>Merhaba, {{ message }}</p>
            <select v-model="selectedColor">
                <option value="red">Kırmızı</option>
                <option value="blue">Mavi</option>
                <option value="green">Yeşil</option>

            </select>

            <textarea v-model="message"></textarea>
            <p>Seçilen Renk: {{ selectedColor }}</p>
            <button @click="clearMessage"> Mesajı Temizle</button>


            <input type="checkbox" v-model="isChecked"/> Onay Kutusu
            <p>Onay Durumu: {{ isChecked }}</p>


            <button @click="changeInputValue">input Value Değerini Sadece javascript tarafında değişltir</button>
            {{ inputValue }}<br/>
            <input :value="inputValue" @input="inputValue=$event.target.value" />
    </div>
</template>