(this["webpackJsonp2048-animation-examples"]=this["webpackJsonp2048-animation-examples"]||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(20),a=n.n(s),r=(n(115),n(14)),l=n(192),o=n(194),j=n(15),u=n(76),d=n(110),b=n(1),O=c.a.createContext({length:0,tileCount:4}),f=function(e){var t=e.children,n=e.length,i=void 0===n?0:n,c=e.tileCount,s=void 0===c?4:c;return Object(b.jsx)(O.Provider,{value:{length:i,tileCount:s},children:t})},x=(n(117),function(e){var t=e.tileCount;return Object(b.jsx)("div",{className:"grid",children:function(){for(var e=t*t,n=[],i=0;i<e;i+=1)n.push(Object(b.jsx)("div",{className:"grid-cell"},"".concat(i)));return n}()})}),m=n(89),v=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current},h=(n(118),function(e){var t=e.value,n=e.position,c=e.zIndex,s=function(){var e=Object(i.useContext)(O);return[e.length,e.tileCount]}(),a=Object(r.a)(s,2),l=a[0],o=a[1],j=Object(i.useState)(1),u=Object(r.a)(j,2),d=u[0],f=u[1],x=n[0]<o&&n[1]<o;Object(m.a)(x,"Tile out of bound");var h=v(t),p=void 0===v(n)||h!==t;Object(i.useEffect)((function(){p&&(f(1.1),setTimeout((function(){return f(1)}),250))}),[p,d]);var g=function(e){return e/o*l},C={top:g(n[1]),left:g(n[0]),transform:"scale(".concat(d,")"),zIndex:c};return Object(b.jsx)("div",{className:"tile tile-".concat(t),style:C,children:t})}),p=(n(119),["id"]),g=function(e){var t=e.tiles,n=e.tileCount,c=void 0===n?4:n,s=Object(i.useRef)(null),a=Object(i.useState)(0),l=Object(r.a)(a,2),o=l[0],j=l[1];Object(i.useEffect)((function(){null!==s.current&&j(s.current.offsetWidth)}),[]);var O=116*c+16;return Object(b.jsxs)("div",{className:"board",style:{width:O},children:[Object(b.jsx)(f,{length:o,tileCount:c,children:Object(b.jsx)("div",{className:"tile-container",ref:s,children:function(){if(0===o)return null;var e=t.map((function(e){var t=e.id,n=Object(d.a)(e,p);return Object(b.jsx)(h,Object(u.a)(Object(u.a)({},n),{},{zIndex:t}),"tile-".concat(t))}));return Object(b.jsx)(b.Fragment,{children:e})}()})}),Object(b.jsx)(x,{tileCount:c})]})},C=(n(44),function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Init (1)"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){0!==n.length&&c([{position:[0,1],value:2,id:1},{position:[0,1],value:2,id:2}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Slide (2)"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){0!==n.length&&c([{position:[0,1],value:4,id:1}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Merge (3)"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([])},icon:Object(b.jsx)(j.b,{size:"1.5em"}),children:"Reset"})]})]})}),z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[1,1],value:2,id:1}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Animate"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([])},icon:Object(b.jsx)(j.b,{size:"1.5em"}),children:"Reset"})]})]})},y=n(74),k=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),l=a[0],u=a[1],d=function(){c([])},O=function(){d(),u(!0);setTimeout((function(){u(!1)}),4e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:4}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){O();for(var e=function(e){setTimeout((function(){c([].concat(Object(y.a)(n),[{position:[e,0],value:e,id:e+1}]))}),1e3*e)},t=0;t<4;t+=1)e(t)},icon:Object(b.jsx)(j.a,{size:"1.5em"}),disabled:l,children:"Row"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){O();for(var e=function(e){setTimeout((function(){c([].concat(Object(y.a)(n),[{position:[0,e],value:e,id:e+1}]))}),1e3*e)},t=0;t<4;t+=1)e(t)},icon:Object(b.jsx)(j.a,{size:"1.5em"}),disabled:l,children:"Column"}),Object(b.jsx)(o.a,{size:"large",onClick:d,icon:Object(b.jsx)(j.b,{size:"1.5em"}),disabled:l,children:"Reset"})]})]})},S=function(){var e=Object(i.useState)([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[0,1],value:2,id:2}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Animate Slide"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:4,id:1}])},icon:Object(b.jsx)(j.a,{size:"1.5em"}),children:"Animate Merge"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}])},icon:Object(b.jsx)(j.b,{size:"1.5em"}),children:"Reset"})]})]})},N=(n(121),function(){var e=Object(i.useState)("default"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=function(e){c(e)};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"form-item",children:[Object(b.jsx)("div",{className:"form-item-label",children:"Animation:"}),Object(b.jsx)("div",{className:"form-item-value",children:Object(b.jsxs)(l.a,{defaultValue:"default",onChange:s,size:"large",children:[Object(b.jsx)(l.a.Option,{value:"default",children:"Scale In-Out"}),Object(b.jsx)(l.a.Option,{value:"merge-and-slide",children:"Slide and Merge"}),Object(b.jsx)(l.a.Option,{value:"all",children:"All"}),Object(b.jsx)(l.a.Option,{value:"indexes",children:"Indexes"})]})})]}),function(){switch(n){case"all":return Object(b.jsx)(C,{});case"indexes":return Object(b.jsx)(k,{});case"merge-and-slide":return Object(b.jsx)(S,{});default:return Object(b.jsx)(z,{})}}()]})}),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),F()},44:function(e,t,n){}},[[190,1,2]]]);
//# sourceMappingURL=main.698cce21.chunk.js.map