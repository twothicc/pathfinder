(this.webpackJsonppathfinders=this.webpackJsonppathfinders||[]).push([[0],{61:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(0),c=n.n(i),o=n(10),l=n.n(o),r=(n(61),n(21)),s=n(16),u=n(101),d=n(102);var h=function(e){var t=Object(i.useState)(e.path),n=Object(s.a)(t,2),c=n[0],o=n[1],l=e.side;function r(t){t.preventDefault(),e.ismousedown&&("0"===e.clickstate||"3"===e.clickstate?(d(parseInt(e.clickstate)),e.handleSpecialNode(parseInt(e.clickstate),"close"),e.setSpecialNode(parseInt(e.clickstate),e.id)):"0"===t.target.attributes.path.value||"3"===t.target.attributes.path.value?(e.handleSpecialNode(parseInt(t.target.attributes.path.value),"open"),e.setSpecialNode(parseInt(t.target.attributes.path.value),null),d(parseInt(e.clickstate))):d(parseInt(e.clickstate)))}function u(t){t.preventDefault(),"0"===e.clickstate||"3"===e.clickstate?(d(parseInt(e.clickstate)),e.handleSpecialNode(parseInt(e.clickstate),"close"),e.setSpecialNode(parseInt(e.clickstate),e.id)):"0"===t.target.attributes.path.value||"3"===t.target.attributes.path.value?(e.handleSpecialNode(parseInt(t.target.attributes.path.value),"open"),e.setSpecialNode(parseInt(t.target.attributes.path.value),null),d(parseInt(e.clickstate))):d(parseInt(e.clickstate))}function d(t){o(t),e.updateGrid(e.id,t)}switch(Object(i.useEffect)((function(){o(e.path)}),[e.path]),c){case 0:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"DarkGreen",outline:"".concat(l/10,"px solid white")},onMouseEnter:r,onClick:u});case 1:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"AliceBlue",outline:"".concat(l/10,"px solid white")},onMouseEnter:r,onClick:u});case 2:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"black",outline:"".concat(l/10,"px solid white")},onMouseEnter:r,onClick:u});case 3:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"DarkRed",outline:"".concat(l/10,"px solid white")},onMouseEnter:r,onClick:u});case 4:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"deepskyblue",outline:"".concat(l/10,"px solid aliceblue")},onMouseEnter:r,onClick:u});case 5:return Object(a.jsx)("div",{id:e.id,path:c,style:{height:"".concat(l,"px"),width:"".concat(l,"px"),backgroundColor:"greenyellow",outline:"".concat(l/10,"px solid white")},onMouseEnter:r,onClick:u})}},b=n(103);var p=function(e){var t=Object(i.useState)([]),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(i.useState)(24),p=Object(s.a)(l,2),f=p[0],j=p[1],g=Object(i.useState)(24),v=Object(s.a)(g,2),x=v[0],O=v[1],y=Object(i.useState)(1),k=Object(s.a)(y,2),m=k[0],C=k[1],w=Object(i.useState)(!1),S=Object(s.a)(w,2),I=S[0],N=S[1],E=Object(i.useState)(null),D=Object(s.a)(E,2),B=D[0],T=D[1],M=Object(i.useState)(null),G=Object(s.a)(M,2),L=G[0],F=G[1],P=Object(i.useState)(!1),A=Object(s.a)(P,2),J=A[0],R=A[1],V=Object(i.useState)(!1),z=Object(s.a)(V,2),q=z[0],H=z[1],K=Object(i.useState)([]),Q=Object(s.a)(K,2),U=Q[0],W=Q[1],X=Object(i.useState)([]),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],_=Object(i.useState)([]),ee=Object(s.a)(_,2),te=ee[0],ne=ee[1],ae=Object(i.useState)(0),ie=Object(s.a)(ae,2),ce=ie[0],oe=ie[1],le=Object(i.useState)(!1),re=Object(s.a)(le,2),se=re[0],ue=re[1],de=Object(i.useState)(""),he=Object(s.a)(de,2),be=he[0],pe=he[1];Object(i.useEffect)((function(){if(0===c.length){for(var e=[],t=0;t<f;t+=1){for(var n=[],a=0;a<f;a+=1)n.push([t*f+a,2]);e.push(n)}o(e),console.log("resetGrid")}console.log("gridfinal is "+te),window.addEventListener("mousedown",(function(e){return N(!0)})),window.addEventListener("mouseup",(function(e){return N(!1)}))}),[te,c,f,m]);var fe=!1;function je(e){C(e.currentTarget.id)}function ge(e){var t,n=c,a=Object(r.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;n[i[1]][i[0]][1]=5}}catch(l){a.e(l)}finally{a.f()}o(n)}function ve(e){var t,n=[],a=Object(r.a)(c);try{for(a.s();!(t=a.n()).done;){var i,l=t.value,s=[],u=Object(r.a)(l);try{for(u.s();!(i=u.n()).done;){var d=i.value;s.push(d)}}catch(h){u.e(h)}finally{u.f()}n.push(s)}}catch(h){a.e(h)}finally{a.f()}n[e[1]][e[0]][1]=4,console.log("changed node to 4 at "+e),o(n)}function xe(e,t,n){if(fe)console.log("exit already found");else{for(var a=[e[1]-1,e[1]+1,e[0]-1,e[0]+1],i=0,o=[],l=0;l<a.length;l+=1)a[l]=[a[l]>=0,a[l]];for(var s=0;s<2;s+=1)a[s][0]?e[0]===t[0]&&a[s][1]===t[1]?(console.log("exit found at "+[e[0],a[s][1]]),console.log("path taken to exit is "+n),fe=!0,ge(n),ne(n),oe(Z.length)):1===c[a[s][1]][e[0]][1]?function(){var i=[e[0],a[s][1]];setTimeout((function(){ve(i),o.push(i);var e,a=[],c=Object(r.a)(n);try{for(c.s();!(e=c.n()).done;){var l=e.value;a.push(l)}}catch(s){c.e(s)}finally{c.f()}a.push(i),xe(i,t,a)}),50)}():i+=1:i+=1;for(var u=2;u<4;u+=1)a[u][0]?a[u][1]===t[0]&&e[1]===t[1]?(console.log("exit found at "+[a[u][1],e[1]]),console.log("path taken to exit is "+n),fe=!0,ge(n),ne(n),oe(Z.length)):1===c[e[1]][a[u][1]][1]?function(){var i=[a[u][1],e[1]];setTimeout((function(){ve(i),o.push(i);var e,a=[],c=Object(r.a)(n);try{for(c.s();!(e=c.n()).done;){var l=e.value;a.push(l)}}catch(s){c.e(s)}finally{c.f()}a.push(i),xe(i,t,a)}),50)}():i+=1:i+=1;4===i&&console.log("path ended at "+e);var d=Z;d.push(o),$(d)}}function Oe(e,t){"close"===t?0===e?(R(!0),C(1)):(H(!0),C(1)):0===e?R(!1):H(!1)}function ye(e,t){0===e?T(t):F(t)}function ke(e,t){var n=c,a=e%f;n[(e-a)/f][a][1]=t,o(n)}function me(e,t){if(console.log(Z.length),console.log(t),void 0!==t)if(oe(t),t===Z.length){var n,a=c,i=Object(r.a)(U);try{for(i.s();!(n=i.n()).done;){var l=n.value;a[l[1]][l[0]][1]=1}}catch(x){i.e(x)}finally{i.f()}var s,u=Object(r.a)(te);try{for(u.s();!(s=u.n()).done;){var d=s.value;a[d[1]][d[0]][1]=5}}catch(x){u.e(x)}finally{u.f()}o(a)}else{a=c;var h,b=Object(r.a)(U);try{for(b.s();!(h=b.n()).done;){var p=h.value;a[p[1]][p[0]][1]=1}}catch(x){b.e(x)}finally{b.f()}for(var f=0;f<t;f+=1){var j,g=Object(r.a)(Z[f]);try{for(g.s();!(j=g.n()).done;){var v=j.value;a[v[1]][v[0]][1]=4}}catch(x){g.e(x)}finally{g.f()}}o(a)}}return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"auto"},children:[se?Object(a.jsx)("h3",{style:{position:"fixed",marginTop:"15%",textAlign:"center",color:"red",zIndex:"1"},children:be}):Object(a.jsx)("div",{}),Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Pathfinder"}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"auto",justifyContent:"center",marginBottom:"1%"},children:[Object(a.jsx)(u.a,{type:"number",label:"adjust sides",value:x,onChange:function(e){O(e.target.value)}}),Object(a.jsx)(d.a,{variant:"outlined",style:{backgroundColor:"aliceblue"},onClick:function(e){for(var t=[],n=0;n<x;n+=1){for(var a=[],i=0;i<x;i+=1)a.push([n*x+i,2]);t.push(a)}o(t),j(x),T(null),F(null),R(!1),H(!1),console.log("resetStartEndNodes"),W([]),$([]),ne([]),console.log("cleared pathfinding history")},children:"Change Side"})]}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%",height:"auto",marginTop:"2%",marginBottom:"2%"},children:[J?Object(a.jsx)(d.a,{disabled:!0,id:0,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"Start Node"}):Object(a.jsx)(d.a,{id:0,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"Start Node"}),Object(a.jsx)(d.a,{id:1,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"Path Node"}),Object(a.jsx)(d.a,{id:2,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"Block Node"}),q?Object(a.jsx)(d.a,{disabled:!0,id:3,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"End Node"}):Object(a.jsx)(d.a,{id:3,onClick:je,variant:"outlined",style:{marginInline:"1%",backgroundColor:"aliceblue"},children:"End Node"})]}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"auto",justifyContent:"center",marginBottom:"1%"},children:[Object(a.jsx)(d.a,{variant:"outlined",onClick:function(){function e(e){return e%f}function t(e){return(e-e%f)/f}var n=[e(B),t(B)],a=[e(L),t(L)];if(J&&q){for(var i=[],o=0;o<f;o+=1)for(var l=0;l<f;l+=1)1===c[o][l][1]&&i.push([l,o]);W(i),xe(n,a,[])}else pe("start or end has not been set"),ue(!0),setTimeout((function(){ue(!1)}),500)},style:{backgroundColor:"aliceblue",marginInline:"1%"},children:"Find Path"}),Object(a.jsx)(d.a,{variant:"outlined",onClick:function(){for(var e=[],t=0;t<f;t+=1){for(var n=[],a=0;a<f;a+=1)n.push([t*f+a,2]);e.push(n)}o(e),console.log("resetGrid"),T(null),F(null),R(!1),H(!1),console.log("resetStartEndNodes"),W([]),$([]),ne([]),console.log("cleared pathfinding history")},style:{backgroundColor:"aliceblue",marginInline:"1%"},children:"Reset Grid"})]}),0===Z.length?Object(a.jsx)(b.a,{disabled:!0,defaultValue:0,style:{width:"40%",marginBottom:"1%"},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,value:ce,onChange:me,min:0,max:Z.length}):Object(a.jsx)(b.a,{defaultValue:Z.length,style:{width:"40%",marginBottom:"1%"},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,value:ce,onChange:me,min:0,max:Z.length}),Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"600px",height:"600px",marginBottom:"5%"},children:c.map((function(e){return Object(a.jsx)("div",{style:{width:"100%",height:"auto",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:e.map((function(e){return Object(a.jsx)(h,{id:e[0],side:600/f,path:e[1],clickstate:m,ismousedown:I,handleSpecialNode:Oe,setSpecialNode:ye,updateGrid:ke},e[0])}))},e[0][0])}))})]})},f=n(50),j=n(11),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};l.a.render(Object(a.jsxs)(f.a,{children:[Object(a.jsx)(j.b,{}),Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})})]}),document.getElementById("root")),g()}},[[68,1,2]]]);
//# sourceMappingURL=main.58853d2f.chunk.js.map