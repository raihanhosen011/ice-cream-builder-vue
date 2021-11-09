app.component("ice-cream",{
  props : ["cart"],  
  template : 
    /* html */
    `<div>
        <div class="icecream" id="icecream">
            <p class="cone"></p>
            <div class="scoop" v-for='cartItem in cart' v-bind:class='cartItem.name.toLowerCase()' ></div>
            <div class="cherry" v-if='cart.length > 0' > </div>
            <div class="question" v-else ></div>
        </div>
    </div>`  
})