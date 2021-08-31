(this["webpackJsonp2048-animation-examples"]=this["webpackJsonp2048-animation-examples"]||[]).push([[0],{112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(20),s=n.n(a),r=(n(112),n(15)),l=n(189),o=n(191),u=n(19),j=n(73),d=n(107),b=n(1),O=c.a.createContext({length:0,tileCount:4}),f=function(e){var t=e.children,n=e.length,i=void 0===n?0:n,c=e.tileCount,a=void 0===c?4:c;return Object(b.jsx)(O.Provider,{value:{length:i,tileCount:a},children:t})},x=(n(114),function(e){var t=e.tileCount;return Object(b.jsx)("div",{className:"grid",children:function(){for(var e=t*t,n=[],i=0;i<e;i+=1)n.push(Object(b.jsx)("div",{className:"grid-cell"},"".concat(i)));return n}()})}),m=n(86),v=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current},h=(n(115),function(e){var t=e.value,n=e.position,c=e.zIndex,a=function(){var e=Object(i.useContext)(O);return[e.length,e.tileCount]}(),s=Object(r.a)(a,2),l=s[0],o=s[1],u=Object(i.useState)(1),j=Object(r.a)(u,2),d=j[0],f=j[1],x=n[0]<o&&n[1]<o;Object(m.a)(x,"Tile out of bound");var h=v(t),p=void 0===v(n)||h!==t;Object(i.useEffect)((function(){p&&(f(1.1),setTimeout((function(){return f(1)}),250))}),[p,d]);var g=function(e){return e/o*l},C={top:g(n[1]),left:g(n[0]),transform:"scale(".concat(d,")"),zIndex:c};return Object(b.jsx)("div",{className:"tile tile-".concat(t),style:C,children:t})}),p=(n(116),["id"]),g=function(e){var t=e.tiles,n=e.tileCount,c=void 0===n?4:n,a=Object(i.useRef)(null),s=Object(i.useState)(0),l=Object(r.a)(s,2),o=l[0],u=l[1];Object(i.useEffect)((function(){null!==a.current&&u(a.current.offsetWidth)}),[]);var O=116*c+16;return Object(b.jsxs)("div",{className:"board",style:{width:O},children:[Object(b.jsx)(f,{length:o,tileCount:c,children:Object(b.jsx)("div",{className:"tile-container",ref:a,children:function(){if(0===o)return null;var e=t.map((function(e){var t=e.id,n=Object(d.a)(e,p);return Object(b.jsx)(h,Object(j.a)(Object(j.a)({},n),{},{zIndex:t}),"tile-".concat(t))}));return Object(b.jsx)(b.Fragment,{children:e})}()})}),Object(b.jsx)(x,{tileCount:c})]})},C=(n(64),function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Init (1)"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){0!==n.length&&c([{position:[0,1],value:2,id:1},{position:[0,1],value:2,id:2}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Slide (2)"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){0!==n.length&&c([{position:[0,1],value:4,id:1}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Merge (3)"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([])},icon:Object(b.jsx)(u.b,{size:"1.5em"}),children:"Reset"})]})]})}),z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[1,1],value:2,id:1}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Animate"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([])},icon:Object(b.jsx)(u.b,{size:"1.5em"}),children:"Reset"})]})]})},y=function(){var e=Object(i.useState)([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{tiles:n,tileCount:3}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[0,1],value:2,id:2}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Animate Slide"}),Object(b.jsx)(o.a,{type:"primary",size:"large",onClick:function(){c([{position:[0,1],value:4,id:1}])},icon:Object(b.jsx)(u.a,{size:"1.5em"}),children:"Animate Merge"}),Object(b.jsx)(o.a,{size:"large",onClick:function(){c([{position:[0,1],value:2,id:1},{position:[2,1],value:2,id:2}])},icon:Object(b.jsx)(u.b,{size:"1.5em"}),children:"Reset"})]})]})},N=(n(118),function(){var e=Object(i.useState)("default"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(e){c(e)};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"form-item",children:[Object(b.jsx)("div",{className:"form-item-label",children:"Animation:"}),Object(b.jsx)("div",{className:"form-item-value",children:Object(b.jsxs)(l.a,{defaultValue:"default",onChange:a,size:"large",children:[Object(b.jsx)(l.a.Option,{value:"default",children:"Scale In-Out"}),Object(b.jsx)(l.a.Option,{value:"merge-and-slide",children:"Slide and Merge"}),Object(b.jsx)(l.a.Option,{value:"all",children:"All"})]})})]}),function(){switch(n){case"all":return Object(b.jsx)(C,{});case"merge-and-slide":return Object(b.jsx)(y,{});default:return Object(b.jsx)(z,{})}}()]})}),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),S()},64:function(e,t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.2352d0ec.chunk.js.map