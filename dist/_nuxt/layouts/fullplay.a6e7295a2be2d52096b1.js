webpackJsonp([7],{"3NMW":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("EGQY"),o=e("q0hN");var s=function(t){e("EcX1")},a=e("VU/8")(n.a,o.a,!1,s,null,null);i.default=a.exports},Be0E:function(t,i,e){var n=e("ih9g");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("03a42598",n,!0,{sourceMap:!1})},E6x5:function(t,i,e){"use strict";var n,o=e("bOdI"),s=e.n(o),a=e("Dd8w"),r=e.n(a),c=e("NYxO");e("6G03");i.a=(n={name:"toolbar",mounted:function(){},data:function(){return{currency:"BTC",description:"The next winner is you!",display_val:0,signedinMain:!1,signedinTestNet:!1,loop:{main:new Audio("/media/c2cin.mp3"),sp1:new Audio("/media/c3cmf.mp3"),sp3:new Audio("/media/c4izpls.mp3"),spafter:new Audio("/media/nu_lounge_bar_featured_artist_track_cZAT9g4cCsw.mp3"),spaftq:new Audio("/media/hrling_typhoon_nu_lounge_bar_featured_artist_track_amWFFL4w1QY.mp3")},music_clip_pos:0,music_on:!1,current_music:null}},computed:r()({},Object(c.mapState)(["user_id","win","lose"]),{status_machine:{get:function(){return this.$store.state.kaijiang.status}},cprofit:{get:function(){return this.$store.state.cprofit},set:function(t){}},bankc:{get:function(){return this.$store.state.bank_amount},set:function(t){}},colorp:{get:function(){var t=this.$store.state.win&&!this.$store.state.lose,i=!this.$store.state.win&&this.$store.state.lose;return t||i},set:function(t){}}}),watch:{cprofit:function(t){this.bankc,this.bankc}}},s()(n,"mounted",function(){this.$nextTick(function(){})}),s()(n,"beforeDestroy",function(){this.stopaudio()}),s()(n,"methods",{add_free_coin:function(){this.$store.dispatch("add_coin")},sign_in:function(){this.$store.dispatch("metamask")},home_back:function(){},toggleMusic:function(){this.music_on?this.stopaudio():this.playMusic()},playMusic:function(){var t=this.nextLoop();this.getLoop()[t].play(),this.music_on=!0,this.current_music=this.getLoop()[t]},stopaudio:function(){this.current_music instanceof Audio&&(this.current_music.pause(),this.current_music.currentTime=0,this.music_on=!1)},nextLoop:function(){return this.music_clip_pos++,this.music_clip_pos%this.getLoop().length},getLoop:function(){return 1===this.status_machine||0===this.status_machine?[this.loop.main,this.loop.sp1,this.loop.sp3]:[this.loop.spafter,this.loop.spaftq]},animateValue:function(t,i,e,n,o){var s=i-t,a=s/1e-4,r=Math.max(Math.abs(Math.floor(e/a)),50),c=(new Date).getTime()+e,l=void 0;function u(){var t=(new Date).getTime(),a=Math.max((c-t)/e,0),r=i-a*s;n(r),r===i&&(clearInterval(l),void 0!=o&&o())}clearInterval(l),l=setInterval(u,r),u()}}),n)},EGQY:function(t,i,e){"use strict";var n=e("djO7");i.a={components:{Toolbar:n.a}}},EcX1:function(t,i,e){var n=e("TSO9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("5f09e980",n,!0,{sourceMap:!1})},OxTq:function(t,i,e){"use strict";var n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"toolbar container-fluid"},[e("div",{staticClass:"flex-row"},[e("div",{staticClass:"small_bar"},[e("div",{staticClass:"small_box"},[e("span",{staticClass:"username_f"},[t._v(t._s(t.user_id))]),e("span",{staticClass:"moneybank_f"},[t._v(t._s(t.currency)+" "+t._s(t._f("fix4")(t.bankc)))])])]),e("span",{staticClass:"big_bar username_field"},[t._v(t._s(t.user_id))]),e("span",{staticClass:"big_bar money_bank"},[t._v(t._s(t.currency)+" "+t._s(t._f("fix4")(t.bankc)))]),e("span",{staticClass:"add-coin",on:{click:t.add_free_coin}},[t._v("💌")]),t.signedinMain?e("span",{staticClass:"singup",on:{click:t.sign_in}},[t._v("🔐")]):t._e(),t.signedinTestNet?e("span",{staticClass:"singup",on:{click:t.sign_in}},[t._v("🔐")]):t._e(),e("span",{staticClass:"space"}),e("span",{staticClass:"right-ex",on:{click:t.toggleMusic}},[t._v(t._s(t.music_on?"🔉":"🔇"))]),e("span",{staticClass:"right-ex"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("🔙")])],1)])])},staticRenderFns:[]};i.a=n},TSO9:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},bOdI:function(t,i,e){"use strict";i.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(e("C4MV"));i.default=function(t,i,e){return i in t?(0,n.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},djO7:function(t,i,e){"use strict";var n=e("E6x5"),o=e("OxTq");var s=function(t){e("Be0E")},a=e("VU/8")(n.a,o.a,!1,s,null,null);i.a=a.exports},ih9g:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".flex-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.small_bar{display:inline-block;padding-left:11px}.small_box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:.1em;color:#0dff92;width:auto}.small_box .username_f{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.small_box .moneybank_f{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (min-width:510px){.small_box{display:none}}.toolbar{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:fixed;width:100%;background-color:rgba(42,34,10,.67)}.username_field{font-size:1.2em;font-family:Impact;vertical-align:bottom;color:#0dff92}.money_bank,.username_field{display:inline-block;padding-left:10px;padding-right:10px}.money_bank{font-size:large;background-color:#6f5505;color:#eec509}@media (max-width:510px){.big_bar{display:none}.small_bar{-webkit-box-flex:4;-ms-flex:4;flex:4}}.add-coin{padding-left:3px;padding-right:3px}.add-coin,.right-ex{cursor:pointer;display:inline;-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;text-decoration:none;font-size:large;background-color:#b4a329}.right-ex{padding-left:5px;padding-right:5px;color:#f1df37}.space{-webkit-box-flex:5;-ms-flex:5;flex:5}@media (min-width:510px){.space{-webkit-box-flex:10;-ms-flex:10;flex:10}}.singup{cursor:pointer;display:inline-block;padding-left:10px;padding-right:10px;text-decoration:none;font-size:large;color:#f18453;background-color:#b47a38}",""])},q0hN:function(t,i,e){"use strict";var n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("transition",{staticClass:"container-fluid",attrs:{name:"layout",mode:"out-in"}},[i("div",{staticClass:"dark"},[i("Toolbar"),i("nuxt")],1)])},staticRenderFns:[]};i.a=n}});