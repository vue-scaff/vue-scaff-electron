(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-290188fe"],{2472:function(e,t,s){e.exports=s.p+"img/banner_3.fdfbde50.jpg"},2740:function(e,t,s){},"2ca9":function(e,t,s){e.exports=s.p+"img/banner_1.cbdbf85f.jpg"},"2cfd":function(e,t,s){e.exports=s.p+"img/banner_2.8fd21375.jpg"},"464b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[e.user?s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:24}},[s("user-card",{attrs:{user:e.user}})],1),s("el-col",{attrs:{span:18,xs:24}},[s("el-card",[s("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"Activity",name:"activity"}},[s("activity")],1),s("el-tab-pane",{attrs:{label:"Timeline",name:"timeline"}},[s("timeline")],1),s("el-tab-pane",{attrs:{label:"Account",name:"account"}},[s("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},i=[],r=(s("a15b"),s("b0c0"),s("5530")),n=s("2f62"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("About me")])]),s("div",{staticClass:"user-profile"},[s("div",{staticClass:"box-center"},[s("x-pan-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px",hoverable:!1}},[s("div",[e._v("Hello")]),e._v(" "+e._s(e.user.role)+" ")])],1),s("div",{staticClass:"box-center"},[s("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"user-role text-center text-muted"},[e._v(" "+e._s(e._f("uppercaseFirst")(e.user.role))+" ")])])]),s("div",{staticClass:"user-bio"},[s("div",{staticClass:"user-education user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("x-svg-icon",{attrs:{"icon-class":"education"}}),s("span",[e._v("Education")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"text-muted"},[e._v(" JS in Computer Science from the University of Technology ")])])]),s("div",{staticClass:"user-skills user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("x-svg-icon",{attrs:{"icon-class":"skill"}}),s("span",[e._v("Skills")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"progress-item"},[s("span",[e._v("Vue")]),s("el-progress",{attrs:{percentage:70}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("JavaScript")]),s("el-progress",{attrs:{percentage:18}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("Css")]),s("el-progress",{attrs:{percentage:12}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("ESLint")]),s("el-progress",{attrs:{percentage:100,status:"success"}})],1)])])])])},c=[],o={props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",role:""}}}}},u=o,m=(s("cfee"),s("2877")),p=Object(m["a"])(u,l,c,!1,null,"ba5aaf22",null),d=p.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-activity"},[s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"@/assets/avatar-iron.jpg"+e.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[e._v("Iron Man")]),s("span",{staticClass:"description"},[e._v("Shared publicly - 7:30 PM today")])]),s("p",[e._v(" Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ")]),s("ul",{staticClass:"list-inline"},[e._m(0),s("li",[s("span",{staticClass:"link-black text-sm"},[s("x-svg-icon",{attrs:{"icon-class":"like"}}),e._v(" Like ")],1)])])]),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"@/assets/avatar-captain.jpg"+e.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[e._v("Captain American")]),s("span",{staticClass:"description"},[e._v("Sent you a message - yesterday")])]),s("p",[e._v(" Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ")]),s("ul",{staticClass:"list-inline"},[e._m(1),s("li",[s("span",{staticClass:"link-black text-sm"},[s("x-svg-icon",{attrs:{"icon-class":"like"}}),e._v(" Like ")],1)])])]),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"@/assets/avatar-spider.jpg"+e.avatarPrefix}}),s("span",{staticClass:"username"},[e._v("Spider Man")]),s("span",{staticClass:"description"},[e._v("Posted 4 photos - 2 days ago")])]),s("div",{staticClass:"user-images"},[s("el-carousel",{attrs:{interval:6e3,type:"card",height:"220px"}},e._l(e.carouselImages,(function(t){return s("el-carousel-item",{key:t},[s("img",{staticClass:"image",attrs:{src:t+e.carouselPrefix}})])})),1)],1),s("ul",{staticClass:"list-inline"},[e._m(2),s("li",[s("span",{staticClass:"link-black text-sm"},[s("x-svg-icon",{attrs:{"icon-class":"like"}}),e._v(" Like")],1)])])])])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v(" Share ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v(" Share ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v(" Share")])])}],b="?imageView2/1/w/80/h/80",h="?imageView2/2/h/440",g={data:function(){return{carouselImages:[s("2ca9"),s("2cfd"),s("2472"),s("c623")],avatarPrefix:b,carouselPrefix:h}}},_=g,C=(s("5447"),Object(m["a"])(_,v,f,!1,null,"cbde8d56",null)),x=C.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"block"},[s("el-timeline",e._l(e.timeline,(function(t,a){return s("el-timeline-item",{key:a,attrs:{timestamp:t.timestamp,placement:"top"}},[s("el-card",[s("h4",[e._v(e._s(t.title))]),s("p",[e._v(e._s(t.content))])])],1)})),1)],1)},y=[],j={data:function(){return{timeline:[{timestamp:"2019/4/20",title:"Update Github template",content:"PanJiaChen committed 2019/4/20 20:46"},{timestamp:"2019/4/21",title:"Update Github template",content:"PanJiaChen committed 2019/4/21 20:46"},{timestamp:"2019/4/22",title:"Build Template",content:"PanJiaChen committed 2019/4/22 20:46"},{timestamp:"2019/4/23",title:"Release New Version",content:"PanJiaChen committed 2019/4/23 20:46"}]}}},S=j,w=Object(m["a"])(S,k,y,!1,null,null,null),P=w.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),s("el-form-item",{attrs:{label:"Email"}},[s("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)},$=[],O={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},J=O,T=Object(m["a"])(J,E,$,!1,null,null,null),U=T.exports,A={name:"Profile",components:{UserCard:d,Activity:x,Timeline:P,Account:U},data:function(){return{user:{},activeTab:"activity"}},computed:Object(r["a"])({},Object(n["b"])(["name","avatar","roles"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}}}},L=A,V=Object(m["a"])(L,a,i,!1,null,null,null);t["default"]=V.exports},5447:function(e,t,s){"use strict";var a=s("2740"),i=s.n(a);i.a},add9:function(e,t,s){},c623:function(e,t,s){e.exports=s.p+"img/banner_4.5c331134.jpg"},cfee:function(e,t,s){"use strict";var a=s("add9"),i=s.n(a);i.a}}]);