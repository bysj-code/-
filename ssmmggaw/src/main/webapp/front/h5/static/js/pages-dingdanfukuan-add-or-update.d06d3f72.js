(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dingdanfukuan-add-or-update"],{"0684":function(e,r,t){"use strict";t.r(r);var i=t("8a8f"),a=t("512c");for(var o in a)"default"!==o&&function(e){t.d(r,e,(function(){return a[e]}))}(o);t("8ced");var n,u=t("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"57a41fbe",null,!1,i["a"],n);r["default"]=l.exports},"2dd0":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var a=i(t("3b8d")),o=i(t("e2b1")),n={data:function(){return{ruleForm:{fuwudanhao:"",fuwubiaoti:"",fuwuleixing:"",fuwutupian:"",zhanghao:"",zhiyuanhao:"",xingming:"",ispay:"",userid:""},user:{},ro:{fuwudanhao:!1,fuwubiaoti:!1,fuwuleixing:!1,fuwutupian:!1,zhanghao:!1,zhiyuanhao:!1,xingming:!1,ispay:!1,userid:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(r){var t,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=13;break}return this.ruleForm.id=r.id,e.next=11,this.$api.info("dingdanfukuan",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(!r.cross){e.next=52;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 16:if((e.t1=e.t0()).done){e.next=52;break}if(o=e.t1.value,"fuwudanhao"!=o){e.next=22;break}return this.ruleForm.fuwudanhao=a[o],this.ro.fuwudanhao=!0,e.abrupt("continue",16);case 22:if("fuwubiaoti"!=o){e.next=26;break}return this.ruleForm.fuwubiaoti=a[o],this.ro.fuwubiaoti=!0,e.abrupt("continue",16);case 26:if("fuwuleixing"!=o){e.next=30;break}return this.ruleForm.fuwuleixing=a[o],this.ro.fuwuleixing=!0,e.abrupt("continue",16);case 30:if("fuwutupian"!=o){e.next=34;break}return this.ruleForm.fuwutupian=a[o],this.ro.fuwutupian=!0,e.abrupt("continue",16);case 34:if("zhanghao"!=o){e.next=38;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,e.abrupt("continue",16);case 38:if("zhiyuanhao"!=o){e.next=42;break}return this.ruleForm.zhiyuanhao=a[o],this.ro.zhiyuanhao=!0,e.abrupt("continue",16);case 42:if("xingming"!=o){e.next=46;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,e.abrupt("continue",16);case 46:if("userid"!=o){e.next=50;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,e.abrupt("continue",16);case 50:e.next=16;break;case 52:this.styleChange();case 53:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fuwutupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fuwutupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("dingdanfukuan",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("dingdanfukuan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,a=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=n},"512c":function(e,r,t){"use strict";t.r(r);var i=t("2dd0"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(r,e,(function(){return i[e]}))}(o);r["default"]=a.a},"5f5e":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-57a41fbe]{padding:%?20?%}.content[data-v-57a41fbe]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-57a41fbe]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-57a41fbe]{width:%?180?%}.avator[data-v-57a41fbe]{width:%?150?%;height:%?60?%}.right-input[data-v-57a41fbe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-57a41fbe]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-57a41fbe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-57a41fbe]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-57a41fbe]{border:0}.cu-form-group uni-input[data-v-57a41fbe]{padding:0 %?30?%}.uni-input[data-v-57a41fbe]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-57a41fbe]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-57a41fbe]::after{line-height:%?88?%}.select .uni-input[data-v-57a41fbe]{line-height:%?88?%}.input .right-input[data-v-57a41fbe]{line-height:%?88?%}',""]),e.exports=r},"80f0":function(e,r,t){var i=t("5f5e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("fc0514d8",i,!0,{sourceMap:!1,shadowMode:!1})},"8a8f":function(e,r,t){"use strict";var i,a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("服务单号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.fuwudanhao,placeholder:"服务单号"},model:{value:e.ruleForm.fuwudanhao,callback:function(r){e.$set(e.ruleForm,"fuwudanhao",r)},expression:"ruleForm.fuwudanhao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("服务标题")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.fuwubiaoti,placeholder:"服务标题"},model:{value:e.ruleForm.fuwubiaoti,callback:function(r){e.$set(e.ruleForm,"fuwubiaoti",r)},expression:"ruleForm.fuwubiaoti"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("服务类型")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.fuwuleixing,placeholder:"服务类型"},model:{value:e.ruleForm.fuwuleixing,callback:function(r){e.$set(e.ruleForm,"fuwuleixing",r)},expression:"ruleForm.fuwuleixing"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fuwutupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("服务图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.fuwutupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.fuwutupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("志愿号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanhao,placeholder:"志愿号"},model:{value:e.ruleForm.zhiyuanhao,callback:function(r){e.$set(e.ruleForm,"zhiyuanhao",r)},expression:"ruleForm.zhiyuanhao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},o=[];t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return i}))},"8ced":function(e,r,t){"use strict";var i=t("80f0"),a=t.n(i);a.a}}]);