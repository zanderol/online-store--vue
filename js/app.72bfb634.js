(function(){"use strict";var t={2781:function(t,e,a){var i=a(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("p",[t._v("Hello, Vue!")]),e("v-main-wrapper")],1)},n=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-main-wrapper"},[e("keep-alive",[e("router-view")],1)],1)},o=[],c={name:"v-main-wrapper",props:{},data(){return{title:"Main wrapper"}},computed:{},methods:{},watch:{},mounted(){}},l=c,u=a(1001),p=(0,u.Z)(l,s,o,!1,null,null,null),d=p.exports,_={name:"App",components:{vMainWrapper:d}},m=_,v=(0,u.Z)(m,r,n,!1,null,null,null),f=v.exports,C=a(629),h={ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)}},T=a(8433),P={GET_PRODUCTS_FROM_API({commit:t}){return(0,T.Z)("https://fakestoreapi.com/products",{method:"GET"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))}},g=(a(7658),{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let a=!1;t.cart.map((function(t){t.description===e.description&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--}}),E={PRODUCTS(t){return t.products},CART(t){return t.cart}};const R={...h,...P};i.ZP.use(C.ZP);let O=new C.ZP.Store({state:{products:[],cart:[]},mutations:g,actions:R,getters:E});var b=O,y=a(8345),A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-catalog"},[e("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[e("div",{staticClass:"v-catalog__link-to-cart"},[t._v("Cart: "+t._s(t.CART.length))])]),e("h2",[t._v("Catalog")]),e("div",{staticClass:"filters"},[e("v-select",{staticClass:"v-select",attrs:{selected:t.selected,options:t.categories,"option-component":"capitalize-option"},on:{select:t.sortByCategories}}),e("div",{staticClass:"range-slider"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPrice,expression:"minPrice",modifiers:{number:!0}}],staticClass:"range-slider__input",attrs:{type:"range",min:"0",max:"2000",step:"10"},domProps:{value:t.minPrice},on:{change:t.setRangeSlider,__r:function(e){t.minPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.maxPrice,expression:"maxPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"2000",step:"10"},domProps:{value:t.maxPrice},on:{change:t.setRangeSlider,__r:function(e){t.maxPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"range-values"},[e("p",[t._v("Min: "+t._s(t.minPrice))]),e("p",[t._v("Max: "+t._s(t.maxPrice))])])],1),e("div",{staticClass:"v-catalog__list"},t._l(t.filteredProducts,(function(a){return e("v-catalog-item",{key:a.id,attrs:{product_data:a},on:{addToCart:t.addToCart}})})),1)],1)},x=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-catalog-item"},[t.isInfoPopupVisible?e("v-popup",{attrs:{addBtnTitle:"Add to cart",popupTitle:t.product_data.title},on:{closePopup:t.closeInfoPopup,addBtnAction:t.addToCart}},[e("img",{staticClass:"v-catalog-item__image",attrs:{src:t.product_data.image,alt:""}}),e("div",[e("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.title))]),e("p",{staticClass:"v-catalog-item__price"},[t._v(" Price: "+t._s(t._f("formattedPrice")(t._f("toFix")(t.product_data.price)))+" ")]),e("p",{staticClass:"v-catalog-item__price"},[t._v(t._s(t.product_data.category))])])]):t._e(),e("img",{staticClass:"v-catalog-item__image",attrs:{src:t.product_data.image,alt:""}}),e("div",{staticClass:"v-catalog-item__description"},[e("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.title))]),e("p",{staticClass:"v-catalog-item__price"},[t._v(" Price: "+t._s(t._f("formattedPrice")(t._f("toFix")(t.product_data.price)))+" ")]),e("button",{staticClass:"v-catalog-item__show-info",on:{click:t.showPopupInfo}},[t._v(" Show info ")]),e("br"),e("button",{staticClass:"v-catalog-item__add-to-cart-btn btn",on:{click:t.addToCart}},[t._v(" Add to cart ")])])],1)},M=[],k=function(){var t=this,e=t._self._c;return e("div",{ref:"popup_wrapper",staticClass:"popup_wrapper"},[e("div",{staticClass:"v-popup"},[e("div",{staticClass:"v-popup__header"},[e("span",[t._v(t._s(t.popupTitle))]),e("span",[e("i",{staticClass:"material-icons",on:{click:t.closePopup}},[t._v("close")])])]),e("div",{staticClass:"v-popup__content"},[t._t("default")],2),e("div",{staticClass:"v-popup__footer"},[e("button",{staticClass:"close_modal",on:{click:t.closePopup}},[t._v("Close")]),e("button",{staticClass:"submit_btn",on:{click:t.addBtnAction}},[t._v(" "+t._s(t.addBtnTitle)+" ")])])])])},S=[],I={name:"v-popup",props:{popupTitle:{type:String,default:"Popup name"},addBtnTitle:{type:String,default:"Ok"}},data(){return{}},methods:{addBtnAction(){this.$emit("addBtnAction")},closePopup(){this.$emit("closePopup")}},mounted(){let t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))},computed:{}},D=I,F=(0,u.Z)(D,k,S,!1,null,null,null),N=F.exports;function Z(t){return t=parseFloat(t),t.toFixed(2)+" UAH"}function V(t){let e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e.join(".")}var B={name:"v-catalog-item",components:{vPopup:N},props:{product_data:{type:Object,default(){return{}}}},data(){return{isInfoPopupVisible:!1}},filters:{toFix:Z,formattedPrice:V},computed:{},methods:{showPopupInfo(){this.isInfoPopupVisible=!0},closeInfoPopup(){this.isInfoPopupVisible=!1},addToCart(){this.$emit("addToCart",this.product_data)}},watch:{},mounted(){this.$set(this.product_data,"quantity",1)}},$=B,U=(0,u.Z)($,w,M,!1,null,null,null),j=U.exports,q=function(){var t=this,e=t._self._c;return e("div",{ref:"select",staticClass:"v-select"},[e("p",{staticClass:"title",on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(" "+t._s(t.selected)+" ")]),t.areOptionsVisible?e("div",{staticClass:"options"},t._l(t.options,(function(a){return e("p",{key:a.value,on:{click:function(e){return t.selectOption(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0):t._e()])},L=[],G={name:"v-select",props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},data(){return{areOptionsVisible:!1}},computed:{},methods:{selectOption(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect(t){this.$refs.select.contains(t.target)||(this.areOptionsVisible=!1)}},mounted(){document.addEventListener("click",this.hideSelect,!0)},beforeDestroy(){document.removeEventListener("click",this.hideSelect)}},H=G,z=(0,u.Z)(H,q,L,!1,null,null,null),Q=z.exports,W={name:"v-catalog",components:{vCatalogItem:j,VSelect:Q},props:{},data(){return{categories:[{name:"All"},{name:"men's clothing"},{name:"women's clothing"},{name:"jewelery"},{name:"electronics"}],selected:"All",sortedProducts:[],minPrice:0,maxPrice:2e3}},computed:{...(0,C.Se)(["PRODUCTS","CART"]),filteredProducts(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}},methods:{...(0,C.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),setRangeSlider(){if(this.minPrice>this.maxPrice){let t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}this.sortByCategories()},sortByCategories(t){let e=this;this.sortedProducts=[...this.PRODUCTS],this.sortedProducts=this.sortedProducts.filter((function(t){return t.price>=e.minPrice&&t.price<=e.maxPrice})),t&&(this.sortedProducts=this.sortedProducts.filter((function(a){return e.selected,t.name,a.category===t.name})))},addToCart(t){this.ADD_TO_CART(t)}},watch:{},mounted(){this.GET_PRODUCTS_FROM_API().then((t=>{t.data&&(console.log("Data arrived"),this.sortByCategories())}))}},J=W,K=(0,u.Z)(J,A,x,!1,null,null,null),X=K.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-cart"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("div",{staticClass:"v-catalog__link-to-cart"},[t._v("Back to Catalog")])]),e("h2",[t._v("Cart")]),t.cart_data.length?t._e():e("p",[t._v("There are no products in your cart...")]),t._l(t.cart_data,(function(a,i){return e("v-cart-item",{key:a.id,attrs:{cart_item_data:a},on:{deleteFromCart:function(e){return t.deleteFromCart(i)},increment:function(e){return t.increment(i)},decrement:function(e){return t.decrement(i)}}})})),e("div",{staticClass:"v-cart__total"},[e("p",{staticClass:"total__name"},[t._v("Total:")]),e("p",[t._v(t._s(t._f("formattedPrice")(t._f("toFix")(t.cartTotalPrice))))])])],2)},tt=[],et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-cart-item"},[e("img",{staticClass:"v-cart-item__image",attrs:{src:t.cart_item_data.image,alt:""}}),e("div",{staticClass:"v-cart-item__info"},[e("p",[t._v(t._s(t.cart_item_data.title))]),e("p",[t._v(t._s(t._f("formattedPrice")(t._f("toFix")(t.cart_item_data.price))))]),e("p",{staticClass:"v-cart-item__description"},[t._v(t._s(t.cart_item_data.description))])]),e("div",{staticClass:"v-cart-item__quantity"},[e("p",[t._v("Qty:")]),e("span",[e("span",{staticClass:"quantity_btn",on:{click:t.decrementItem}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),e("span",{staticClass:"quantity_btn",on:{click:t.incrementItem}},[t._v("+")])])]),e("button",{on:{click:t.deleteFromCart}},[t._v("Delete")])])},at=[],it={name:"v-cart-item",props:{cart_item_data:{type:Object,default(){return{}}}},data(){return{}},filters:{toFix:Z,formattedPrice:V},computed:{},methods:{decrementItem(){this.$emit("decrement")},incrementItem(){this.$emit("increment")},deleteFromCart(){this.$emit("deleteFromCart")}},mounted(){}},rt=it,nt=(0,u.Z)(rt,et,at,!1,null,null,null),st=nt.exports,ot={name:"v-cart",components:{vCartItem:st},props:{cart_data:{type:Array,default(){return[]}}},data(){return{title:"Cart"}},filters:{toFix:Z,formattedPrice:V},computed:{cartTotalPrice(){let t=[];if(this.cart_data.length){for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce((function(t,e){return t+e})),t}return 0}},methods:{...(0,C.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),increment(t){this.INCREMENT_CART_ITEM(t)},decrement(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart(t){this.DELETE_FROM_CART(t)}},watch:{},mounted(){}},ct=ot,lt=(0,u.Z)(ct,Y,tt,!1,null,null,null),ut=lt.exports;i.ZP.use(y.ZP);let pt=new y.ZP({routes:[{path:"/",name:"catalog",component:X},{path:"/cart",name:"cart",component:ut,props:!0}]});var dt=pt;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(f),store:b,router:dt}).$mount("#app")}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,n){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],n=t[u][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<s&&(s=n));if(o){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,r,n]}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,n,s=i[0],o=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(c)var u=c(a)}for(e&&e(i);l<s.length;l++)n=s[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},i=self["webpackChunkonline_store_vue"]=self["webpackChunkonline_store_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(2781)}));i=a.O(i)})();
//# sourceMappingURL=app.72bfb634.js.map