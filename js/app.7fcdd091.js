(function(){"use strict";var t={9224:function(t,e,a){var r=a(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("p",[t._v("Hello, Vue!")]),e("v-main-wrapper")],1)},i=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-main-wrapper"},[e("keep-alive",[e("router-view")],1)],1)},c=[],o={name:"v-main-wrapper",props:{},data(){return{title:"Main wrapper"}},computed:{},methods:{},watch:{},mounted(){}},l=o,u=a(1001),d=(0,u.Z)(l,s,c,!1,null,null,null),_=d.exports,p={name:"App",components:{vMainWrapper:_}},m=p,v=(0,u.Z)(m,n,i,!1,null,null,null),C=v.exports,h=a(629),f=a(8433),T={GET_PRODUCTS_FROM_API({commit:t}){return(0,f.Z)("https://fakestoreapi.com/products",{method:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))}},E={ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)}},g=(a(7658),{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let a=!1;t.cart.map((function(t){t.description===e.description&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--}}),R={PRODUCTS(t){return t.products},CART(t){return t.cart}};const O={...T,...E};r.ZP.use(h.ZP);let A=new h.ZP.Store({state:{products:[],cart:[]},mutations:g,actions:O,getters:R});var y=A,P=a(8345),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-catalog"},[e("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[e("div",{staticClass:"v-catalog__link-to-cart"},[t._v("Cart: "+t._s(t.CART.length))])]),e("h2",[t._v("Catalog")]),e("v-select",{staticClass:"v-select",attrs:{selected:t.selected,options:t.categories},on:{select:t.sortByCategories}}),e("div",{staticClass:"v-catalog__list"},t._l(t.filteredProducts,(function(a){return e("v-catalog-item",{key:a.id,attrs:{product_data:a},on:{addToCart:t.addToCart}})})),1)],1)},M=[],D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-catalog-item"},[e("img",{staticClass:"v-catalog-item__image",attrs:{src:t.product_data.image,alt:""}}),e("div",{staticClass:"v-catalog-item__description"},[e("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.title))]),e("p",{staticClass:"v-catalog-item__pricee"},[t._v("Price: "+t._s(t.product_data.price)+" UAH")]),e("button",{staticClass:"v-catalog-item__add-to-cart-btn btn",on:{click:t.addToCart}},[t._v(" Add to cart ")])])])},k=[],w={name:"v-catalog-item",components:{},props:{product_data:{type:Object,default(){return{}}}},data(){return{title:"Catalog"}},computed:{},methods:{addToCart(){this.$emit("addToCart",this.product_data)}},watch:{},mounted(){this.$set(this.product_data,"quantity",1)}},S=w,I=(0,u.Z)(S,D,k,!1,null,null,null),Z=I.exports,F=function(){var t=this,e=t._self._c;return e("div",{ref:"select",staticClass:"v-select"},[e("p",{staticClass:"title",on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(" "+t._s(t.selected)+" ")]),t.areOptionsVisible?e("div",{staticClass:"options"},t._l(t.options,(function(a){return e("p",{key:a.value,on:{click:function(e){return t.selectOption(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0):t._e()])},N=[],U={name:"v-select",props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},data(){return{areOptionsVisible:!1}},computed:{},methods:{selectOption(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect(t){this.$refs.select.contains(t.target)||(this.areOptionsVisible=!1)}},mounted(){document.addEventListener("click",this.hideSelect,!0)},beforeDestroy(){document.removeEventListener("click",this.hideSelect)}},x=U,q=(0,u.Z)(x,F,N,!1,null,null,null),V=q.exports,j={name:"v-catalog",components:{vCatalogItem:Z,VSelect:V},props:{},data(){return{categories:[{name:"All"},{name:"men's clothing"},{name:"women's clothing"},{name:"jewelery"},{name:"electronics"}],selected:"All",sortedProducts:[]}},computed:{...(0,h.Se)(["PRODUCTS","CART"]),filteredProducts(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}},methods:{...(0,h.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),sortByCategories(t){this.sortedProducts=[];let e=this;this.PRODUCTS.map((function(a){a.category===t.name&&e.sortedProducts.push(a)})),this.selected=t.name},addToCart(t){this.ADD_TO_CART(t)}},watch:{},mounted(){this.GET_PRODUCTS_FROM_API().then((t=>{t.data&&console.log("Data arrived")}))}},$=j,L=(0,u.Z)($,b,M,!1,null,null,null),G=L.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-cart"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("div",{staticClass:"v-catalog__link-to-cart"},[t._v("Back to Catalog")])]),e("h2",[t._v("Cart")]),t.cart_data.length?t._e():e("p",[t._v("There are no products in your cart...")]),t._l(t.cart_data,(function(a,r){return e("v-cart-item",{key:a.id,attrs:{cart_item_data:a},on:{deleteFromCart:function(e){return t.deleteFromCart(r)},increment:function(e){return t.increment(r)},decrement:function(e){return t.decrement(r)}}})})),e("div",{staticClass:"v-cart__total"},[e("p",{staticClass:"total__name"},[t._v("Total:")]),e("p",[t._v(t._s(t.cartTotalPrice)+" UAH")])])],2)},B=[],Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-cart-item"},[e("img",{staticClass:"v-cart-item__image",attrs:{src:t.cart_item_data.image,alt:""}}),e("div",{staticClass:"v-cart-item__info"},[e("p",[t._v(t._s(t.cart_item_data.title))]),e("p",[t._v(t._s(t.cart_item_data.price)+" UAH")]),e("p",{staticClass:"v-cart-item__description"},[t._v(t._s(t.cart_item_data.description))])]),e("div",{staticClass:"v-cart-item__quantity"},[e("p",[t._v("Qty:")]),e("span",[e("span",{staticClass:"quantity_btn",on:{click:t.decrementItem}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),e("span",{staticClass:"quantity_btn",on:{click:t.incrementItem}},[t._v("+")])])]),e("button",{on:{click:t.deleteFromCart}},[t._v("Delete")])])},W=[],z={name:"v-cart-item",props:{cart_item_data:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{decrementItem(){this.$emit("decrement")},incrementItem(){this.$emit("increment")},deleteFromCart(){this.$emit("deleteFromCart")}},mounted(){}},J=z,K=(0,u.Z)(J,Q,W,!1,null,null,null),X=K.exports,Y={name:"v-cart",components:{vCartItem:X},props:{cart_data:{type:Array,default(){return[]}}},data(){return{title:"Cart"}},computed:{cartTotalPrice(){let t=[];if(this.cart_data.length){for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce((function(t,e){return t+e})),t}return 0}},methods:{...(0,h.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),increment(t){this.INCREMENT_CART_ITEM(t)},decrement(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart(t){this.DELETE_FROM_CART(t)}},watch:{},mounted(){}},tt=Y,et=(0,u.Z)(tt,H,B,!1,null,null,null),at=et.exports;r.ZP.use(P.ZP);let rt=new P.ZP({routes:[{path:"/",name:"catalog",component:G},{path:"/cart",name:"cart",component:at,props:!0}]});var nt=rt;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(C),store:y,router:nt}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var c=!0,o=0;o<r.length;o++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[o])}))?r.splice(o--,1):(c=!1,i<s&&(s=i));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],c=r[1],o=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(o)var u=o(a)}for(e&&e(r);l<s.length;l++)i=s[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},r=self["webpackChunkonline_store_vue"]=self["webpackChunkonline_store_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(9224)}));r=a.O(r)})();
//# sourceMappingURL=app.7fcdd091.js.map