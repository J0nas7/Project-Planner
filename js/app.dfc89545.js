(function(e){function t(t){for(var r,i,l=t[0],u=t[1],a=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06bd":function(e,t,n){"use strict";n("1d35")},"15f3":function(e,t,n){"use strict";n("c7c7")},"1d35":function(e,t,n){},"349b":function(e,t,n){},"464c":function(e,t,n){"use strict";n("349b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,i){var l=Object(r["u"])("Navbar"),u=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(l),Object(r["g"])(u)],64)}var o={class:"main-nav"},i=Object(r["f"])("Projects"),l=Object(r["f"])("Add a new Project");function u(e,t,n,c,u,a){var s=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",o,[Object(r["g"])(s,{to:{name:"Home"}},{default:Object(r["A"])((function(){return[i]})),_:1}),Object(r["g"])(s,{to:{name:"AddProject"}},{default:Object(r["A"])((function(){return[l]})),_:1})])}var a={};n("f9dd");a.render=u;var s=a,d={components:{Navbar:s}};n("464c");d.render=c;var p=d,j=n("6c02"),f={class:"home"},b={key:0};function h(e,t,n,c,o,i){var l=Object(r["u"])("FilterNav"),u=Object(r["u"])("SingleProject");return Object(r["p"])(),Object(r["d"])("div",f,[Object(r["g"])(l,{onFilterChange:t[1]||(t[1]=function(e){return o.current=e}),current:o.current},null,8,["current"]),o.projects.length?(Object(r["p"])(),Object(r["d"])("div",b,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(i.filteredProjects,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e.id},[Object(r["g"])(u,{project:e,onDelete:i.handleDelete,onComplete:i.handleComplete},null,8,["project","onDelete","onComplete"])])})),128))])):Object(r["e"])("",!0)])}n("d3b7"),n("4de4"),n("7db0");var O={class:"actions"},m={class:"icons"},g=Object(r["g"])("span",{class:"material-icons"},"edit",-1),v={key:0,class:"details"};function y(e,t,n,c,o,i){var l=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("div",{class:["project",{complete:n.project.complete}]},[Object(r["g"])("div",O,[Object(r["g"])("h3",{onClick:t[1]||(t[1]=function(e){return o.showDetails=!o.showDetails})},Object(r["w"])(n.project.title),1),Object(r["g"])("div",m,[Object(r["g"])(l,{to:{name:"EditProject",params:{id:n.project.id}}},{default:Object(r["A"])((function(){return[g]})),_:1},8,["to"]),Object(r["g"])("span",{onClick:t[2]||(t[2]=function(){return i.deleteProject&&i.deleteProject.apply(i,arguments)}),class:"material-icons"},"delete"),Object(r["g"])("span",{class:"material-icons tick",onClick:t[3]||(t[3]=function(){return i.toggleComplete&&i.toggleComplete.apply(i,arguments)})},"done")])]),o.showDetails?(Object(r["p"])(),Object(r["d"])("div",v,[Object(r["g"])("p",null,Object(r["w"])(n.project.details),1)])):Object(r["e"])("",!0)],2)}var P={props:["project"],data:function(){return{showDetails:!1,uri:"/js-elective/2nd-handin/db.json"}},methods:{deleteProject:function(){var e=this;fetch(this.uri,{method:"DELETE",body:JSON.stringify({id:this.project.id})}).then((function(){return e.$emit("delete",e.project.id)})).catch((function(e){return console.log(e.message)}))},toggleComplete:function(){var e=this;fetch(this.uri,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.project.id,complete:!this.project.complete})}).then((function(){return e.$emit("complete",e.project.id)})).catch((function(e){return console.log(e.message)}))}}};n("06bd");P.render=y;var C=P,S={class:"filter-nav"};function w(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("nav",S,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(e){return i.updateFilter("all")}),class:{active:"all"===n.current}},"View All",2),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(e){return i.updateFilter("completed")}),class:{active:"completed"===n.current}},"Completed",2),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(e){return i.updateFilter("ongoing")}),class:{active:"ongoing"===n.current}},"Ongoing",2)])}var k={props:["current"],methods:{updateFilter:function(e){this.$emit("filterChange",e)}}};n("15f3");k.render=w;var T=k;console.log("POST");var D={name:"Home",components:{SingleProject:C,FilterNav:T},data:function(){return{projects:[],current:"all"}},mounted:function(){var e=this;console.log("test"),fetch("/Project-Planner/db.json").then((function(e){return e.json()})).then((function(t){return e.projects=t})).catch((function(e){return console.log(e.message)}))},methods:{handleDelete:function(e){this.projects=this.projects.filter((function(t){return t.id!=e}))},handleComplete:function(e){var t=this.projects.find((function(t){return t.id===e}));t.complete=!t.complete}},computed:{filteredProjects:function(){return"completed"===this.current?this.projects.filter((function(e){return e.complete})):"ongoing"==this.current?this.projects.filter((function(e){return!e.complete})):this.projects}}};D.render=h;var x=D,A=Object(r["g"])("label",null,"Title:",-1),_=Object(r["g"])("label",null,"Details:",-1),N=Object(r["g"])("button",null,"Add Project",-1);function F(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["C"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"]))},[A,Object(r["B"])(Object(r["g"])("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.title=e})},null,512),[[r["y"],o.title]]),_,Object(r["B"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.details=e}),required:""},null,512),[[r["y"],o.details]]),N],32)}var J={data:function(){return{title:"",details:""}},methods:{handleSubmit:function(){var e=this,t={title:this.title,details:this.details,complete:!1};console.log(t),fetch("/js-elective/2nd-handin/db.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){console.log(t),e.$router.push("/js-elective/2nd-handin/")})).catch((function(e){return console.log(e.message)}))}}};n("ace0");J.render=F;var E=J,H=Object(r["g"])("label",null,"Title:",-1),U=Object(r["g"])("label",null,"Details:",-1),V=Object(r["g"])("button",null,"Update Project",-1);function $(e,t,n,c,o,i){return Object(r["p"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["C"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"]))},[H,Object(r["B"])(Object(r["g"])("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.title=e})},null,512),[[r["y"],o.title]]),U,Object(r["B"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.details=e}),required:""},null,512),[[r["y"],o.details]]),V],32)}var q={props:["id"],data:function(){return{title:"",details:"",uri:"/js-elective/2nd-handin/db.json"}},mounted:function(){var e=this;fetch(this.uri).then((function(e){return e.json()})).then((function(t){t=t.filter((function(t){return t.id==e.id}))[0],console.log(t),e.title=t.title,e.details=t.details})).catch((function(e){return console.log(e.message)}))},methods:{handleSubmit:function(){var e=this;fetch(this.uri,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.id,title:this.title,details:this.details})}).then((function(){e.$router.push("/js-elective/2nd-handin/")})).catch((function(e){return console.log(e.message)}))}}};q.render=$;var B=q,M="/js-elective/2nd-handin",L=[{path:M+"/",name:"Home",component:x},{path:M+"/add",name:"AddProject",component:E},{path:M+"/projects/:id",name:"EditProject",component:B,props:!0}],z=Object(j["a"])({history:Object(j["b"])(""),routes:L}),G=z;Object(r["c"])(p).use(G).mount("#app")},ace0:function(e,t,n){"use strict";n("cfb3")},b58d:function(e,t,n){},c7c7:function(e,t,n){},cfb3:function(e,t,n){},f9dd:function(e,t,n){"use strict";n("b58d")}});
//# sourceMappingURL=app.dfc89545.js.map