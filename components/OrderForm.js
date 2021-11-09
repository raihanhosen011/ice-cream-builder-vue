app.component("order-form",{
   props : ["cart",'price'] , 
   template : 
    /*html*/
    `<div id="modal">
      <div class="backdrop" v-on:click="hideOrderForm" ></div>
       <div class="modalBody">
       <div class="formContainer" id="orderForm">
           <h1>Complete the form below and hit submit</h1>
           <form class="orderForm" v-on:submit.prevent="onSubmit" >
           <ul>
               <li>
               <input
                   type="text"
                   class="fieldStyle fieldSplit alignLeft"
                   placeholder="Name"
                   v-model="name" 
                />
               <input
                   type="text"
                   class="fieldStyle fieldSplit alignRight"
                   placeholder="Phone no."
                   v-model="phone"
                />
               </li>
               <li>
               <input
                   v-model.number='price' 
                   type="hidden"
                   class="fieldStyle fieldSplit alignRight"
               />
               </li>
               <li>
               <textarea
                   class="fieldStyle"
                   placeholder="Address"
                   v-model="address"
               ></textarea>
               </li>
               <li>
               <input type="submit" value="Submit" />
               </li>
           </ul>
          </form>
       </div>
      </div>
   </div>` ,
   data(){
     return{
        name:'',
        phone:'',
        address:'',
     }
   },
   methods : {
     hideOrderForm(){
       this.$emit("hide-order-form")
     },
     onSubmit(){
       const userDetails = {
         name : this.name,  
         phone : this.phone,  
         address : this.address  ,
         price : this.price
       }  
       console.log(userDetails)
       this.$emit("clear-cart")
     }
   }
})