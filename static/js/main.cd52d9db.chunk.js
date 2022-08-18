(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(4),s=n.n(c),a=n(2),o=n(1),r=(n(9),n(10),n(11),n(0)),i=function(t){var e=t.posts,n=t.selectedPostId,c=t.onSelectedPostId;return Object(r.jsxs)("div",{className:"PostsList",children:[Object(r.jsx)("h2",{children:"Posts:"}),Object(r.jsx)("ul",{className:"PostsList__list","data-cy":"postList",children:e.map((function(t){return Object(r.jsxs)("li",{className:"PostsList__item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n===t.id?Object(r.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(0)},children:"Close"}):Object(r.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(t.id)},children:"Open"})]},t.id)}))})]})},u=(n(13),"https://mate.academy/students-api"),l="/posts",j="/comments",b="/users",d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(u).concat(t),e).then((function(t){if(!t.ok)throw new Error("Error: ".concat(t.status));return t.json()})).catch((function(t){return{Response:"False",Error:"".concat(t)}}))},m=function(t){return d("".concat(j,"?postId=").concat(t))},O=function(t){var e=t.postId,n=t.handleUpdate,c=Object(o.useState)(""),s=Object(a.a)(c,2),i=s[0],u=s[1],l=Object(o.useState)(""),b=Object(a.a)(l,2),m=b[0],O=b[1],h=Object(o.useState)(""),f=Object(a.a)(h,2),p=f[0],x=f[1];return Object(r.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){var c;t.preventDefault(),(c={postId:e,name:i,email:m,body:p},d(j,{method:"POST",headers:{"content-type":"application/json; charset=utf-8"},body:JSON.stringify(c)})).then((function(){return n(!0)})),u(""),O(""),x("")},children:[Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:i,onChange:function(t){return u(t.target.value)}})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:m,onChange:function(t){return O(t.target.value)}})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:p,onChange:function(t){return x(t.target.value)}})}),Object(r.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},h=(n(14),function(t){var e=t?"".concat(l,"?userId=").concat(t):"".concat(l);return d(e)}),f=function(t){return d("".concat(l,"/").concat(t))},p=(n(15),function(){return Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),x=function(t,e,n,c){return n(!0),t(e).then((function(t){return"Error"in t?Promise.reject(t.Error):Promise.resolve(t)})).catch(c).finally((function(){return n(!1)}))},_=function(t){var e=t.postId,n=Object(o.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],u=Object(o.useState)(!1),l=Object(a.a)(u,2),b=l[0],h=l[1],_=Object(o.useState)(""),v=Object(a.a)(_,2),N=v[0],S=v[1],y=Object(o.useState)([]),P=Object(a.a)(y,2),g=P[0],w=P[1],E=Object(o.useState)(!1),C=Object(a.a)(E,2),I=C[0],D=C[1],L=Object(o.useState)(!1),A=Object(a.a)(L,2),k=A[0],F=A[1];Object(o.useEffect)((function(){x(f,e,h,S).then(i)}),[e]),Object(o.useEffect)((function(){x(m,e,h,S).then(w),F(!1)}),[e,k]);var J=function(t){(function(t){return d("".concat(j,"/").concat(t),{method:"DELETE"})})(t).then((function(){return F(!0)}))};return Object(r.jsxs)(r.Fragment,{children:[s&&!N&&Object(r.jsxs)("div",{className:"PostDetails",children:[Object(r.jsx)("h2",{children:"Post details:"}),Object(r.jsx)("section",{className:"PostDetails__post","data-cy":"postDetails",children:Object(r.jsx)("p",{children:s.title})}),b?Object(r.jsx)(p,{}):Object(r.jsxs)("section",{className:"PostDetails__comments",children:[Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return D((function(t){return!t}))},children:"".concat(I?"Show":"Hide"," ").concat(g.length)}),!I&&Object(r.jsx)("ul",{className:"PostDetails__list","data-cy":"postList",children:g.map((function(t){return Object(r.jsxs)("li",{className:"PostDetails__list-item",children:[Object(r.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return J(t.id)},children:"X"}),Object(r.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(r.jsx)(O,{postId:e,handleUpdate:F})})})]}),b&&Object(r.jsx)(p,{}),N&&Object(r.jsx)("div",{children:"Something went wrong... ".concat(N)})]})},v=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)(0),u=Object(a.a)(s,2),l=u[0],j=u[1],m=Object(o.useState)(!1),O=Object(a.a)(m,2),f=O[0],v=O[1],N=Object(o.useState)(""),S=Object(a.a)(N,2),y=S[0],P=S[1],g=Object(o.useState)(0),w=Object(a.a)(g,2),E=w[0],C=w[1],I=Object(o.useState)(!1),D=Object(a.a)(I,2),L=D[0],A=D[1],k=Object(o.useState)([]),F=Object(a.a)(k,2),J=F[0],T=F[1];return Object(o.useEffect)((function(){x(h,l,v,P).then((function(t){c(t),L||A(!0)}))}),[l]),Object(o.useEffect)((function(){var t=new Set(n.map((function(t){return t.userId}))),e=Array.from(t).map((function(t){return function(t){return d("".concat(b,"/").concat(t))}(t)}));Promise.all(e).then((function(t){if("Error"in t)throw new Error("error");T(t)}))}),[L]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App__header",children:Object(r.jsxs)("label",{children:["Select a user: \xa0",Object(r.jsxs)("select",{className:"App__user-selector",value:l,onChange:function(t){return j(Number(t.target.value))},children:[Object(r.jsx)("option",{value:"0",children:"All users"}),J.length>0&&J.map((function(t){return Object(r.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),!f&&!y&&Object(r.jsxs)("main",{className:"App__main",children:[Object(r.jsx)("div",{className:"App__sidebar",children:Object(r.jsx)(i,{posts:n,selectedPostId:E,onSelectedPostId:C})}),0!==E&&Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)(_,{postId:E})})]}),f&&Object(r.jsx)(p,{}),y&&Object(r.jsx)("div",{children:"Something went wrong... ".concat(y)})]})};s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.cd52d9db.chunk.js.map