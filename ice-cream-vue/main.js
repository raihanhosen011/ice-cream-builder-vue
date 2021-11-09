const app = Vue.createApp({
  data(){
    return {
       variants : [
       {id:1,name:"Vanilla",price:100},   
       {id:2,name:"Orange",price:120},   
       {id:3,name:"Lemon",price:90},   
       {id:4,name:"Strawberry",price:60},   
       {id:5,name:"Chocolate",price:800},  
      ],
      cart:[] ,
      showModal:false,
    }  
  }    
,
  methods:{
    addToCart(id){
      this.cart.push(this.variants.find((variant) => variant.id === id))
    },
    removeCart(id){
      const position = this.cart.findIndex((variantId) => variantId.id == id)

      this.cart.splice(position,1)
    },
    modalToggle(){
      this.showModal = !this.showModal
    },
    clearCart(){
      this.cart = []
    }
  }   
,
  computed : {
    total(){
      return this.cart.reduce((t,variant) => t + variant.price,0)
    } 
  }
})