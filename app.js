const App =  Vue.createApp({
data(){
    return{
        number: 0,
        result : 0,
    }
     
},
watch:{
   number(){
    const that = this;
    setTimeout(function(){
        that.number = 0;
    },5000);
   }
},
computed:{
  calculateNumber(){
    if(this.number === 37){
        return this.number;
    }
    if(this.number >= 37){
        return 'Too Much!';
    }
    if(this.number <= 37){
        return 'Not there yet';
    }
  }
},
methods:{
    addNumber(num){
        this.number = this.number + num; 
    }
}
});

App.mount("#assignment");

