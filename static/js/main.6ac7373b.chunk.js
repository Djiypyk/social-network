(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{108:function(e,t,n){e.exports={footer:"Footer_footer__Dezos"}},109:function(e,t,n){e.exports={newsPost:"NewsField_newsPost__2UCfN"}},112:function(e,t,n){e.exports={pages:"Users_pages__UgnB9"}},132:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},s=n(39),a=n.n(s),c=n(40),i=n(41),o=n(48),u=n(50),l=n(0),j=n.n(l),d=(n(132),n(33)),b=n.n(d),p=n(21),O=n(18),f=n(28),h=n(7),g=n(17),m=n.n(g),x=n(55),A=n.n(x),v=A.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7b609e77-8b87-49b1-abc2-87ddc192ab78","Content-type":"application/json"}}),I=function(){return v.get("auth/me")},E=function(e){return v.post("auth/login",JSON.stringify(e))},w=function(){return v.delete("auth/login")},y={id:null,email:null,login:"",isAuth:!1,errors:[""]},C=function(e,t,n,r){return{type:"auth/SET_USER_DATA",data:{id:e,login:t,email:n,isAuth:r}}},P=function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r,s,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,c=r.email,t(C(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=n(200),S=n(1),R="/profile",F="/dialogs",L="/",N="/settings",U="/users",T="/music",_="/login",D=function(){var e=Object(O.c)(),t=Object(O.d)((function(e){return e.auth.isAuth}));return Object(S.jsxs)("nav",{className:b.a.nav,children:[Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:R,children:"Profile"})}),Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:F,children:"Messages"})}),Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:U,children:"Users"})}),Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:L,children:"News Field"})}),Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:N,children:"Settings"})}),Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{className:function(e){var t=e.isActive;return"".concat(b.a.normal," ").concat(t?b.a.active:"")},to:T,children:"Music"})}),t?Object(S.jsx)(k.a,{color:"secondary",variant:"contained",onClick:function(){return e(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"}):null]})},H=n(108),W=n.n(H),G=function(){return Object(S.jsx)("div",{className:W.a.footer,children:Object(S.jsx)("p",{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438. 2021"})})},Z=n(109),V=n.n(Z),B=function(e){return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:V.a.newsPost,children:[Object(S.jsx)("p",{children:"Happy New 2022 Year!!!"}),Object(S.jsx)("img",{src:"https://www.hearttoheart.org/wp-content/uploads/2012/12/secret-santa-rules.jpg?w=243",alt:"Santa Klaus"})]})})},Y=function(e){return Object(S.jsx)("div",{children:"Music"})},q=function(e){return Object(S.jsx)("div",{children:"Settings"})},Q=n(15),z=n(16),J=n(196),M={dialogsData:[{id:Object(J.a)(),name:"Alex"},{id:Object(J.a)(),name:"Glen"},{id:Object(J.a)(),name:"Yana"},{id:Object(J.a)(),name:"Gloria"},{id:Object(J.a)(),name:"Nikolai"}],messagesData:[{id:Object(J.a)(),message:"Hello, it`s me."},{id:Object(J.a)(),message:"Hello!"},{id:Object(J.a)(),message:"All you ready?"}]},X=n(52),K=n.n(X),$=n(80),ee=n.n($),te=function(e){var t="/dialogs/"+e.id;return Object(S.jsx)("div",{className:ee.a.dialog,children:Object(S.jsx)(p.b,{to:t,className:function(e){var t=e.isActive;return"".concat(ee.a.normal," ").concat(t?ee.a.active:"")},children:e.name})})},ne=function(e){return Object(S.jsx)("div",{className:K.a.message,children:e.message})},re=n(38),se=n(198),ae=n(202),ce=n(193),ie=function(e){var t=Object(re.d)({initialValues:{message:""},validate:function(e){if(!e.message)return{message:"Please, write your text in field!"}},onSubmit:function(t){var n;n=t.message,e.sendMessageAC(n)}});return Object(S.jsx)("form",{className:K.a.message_input,onSubmit:t.handleSubmit,children:Object(S.jsx)(se.a,{children:Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(ce.a,Object(h.a)(Object(h.a)({fullWidth:!0,type:"message",label:"Message"},t.getFieldProps("message")),{},{error:t.touched.message&&Boolean(t.errors.message),helperText:t.touched.message&&t.errors.message})),Object(S.jsx)(k.a,{size:"small",color:"primary",variant:"contained",type:"submit",children:"Send message"})]})})})},oe=function(e){var t=e.dialogs.dialogsData.map((function(e){return Object(S.jsx)(te,{id:e.id,name:e.name},e.id)})),n=e.dialogs.messagesData.map((function(e){return Object(S.jsx)(ne,{id:e.id,message:e.message},e.id)}));return Object(S.jsxs)("div",{className:K.a.dialogs,children:[Object(S.jsx)("div",{className:K.a.dialogs_items,children:t}),Object(S.jsxs)("div",{className:K.a.messages,children:[n,Object(S.jsx)(ie,{textBody:e.textBody,sendMessageAC:e.sendMessageAC})]})]})},ue=n(58),le=["isAuth"],je=function(e){return{isAuth:e.auth.isAuth}};function de(e){return Object(O.b)(je)((function(t){var n=t.isAuth,r=Object(ue.a)(t,le);return n?Object(S.jsx)(e,Object(h.a)({},r)):Object(S.jsx)(Q.a,{to:_})}))}var be=n(37),pe=Object(be.c)(Object(O.b)((function(e){return{dialogs:e.dialogsPage}}),{sendMessageAC:function(e){return{type:"SEND-MESSAGE",text:e}}}),de)(oe),Oe=A.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7b609e77-8b87-49b1-abc2-87ddc192ab78"}}),fe={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{name:"",friends:"null"};return Oe.get("users?page=".concat(e,"&count=").concat(t).concat(""!==n.name?"&term=".concat(n.name):"").concat("null"!==n.friends?"&friend=".concat(n.friends):"")).then((function(e){return e.data}))},unFollowUser:function(e){return Oe.delete("follow/".concat(e),{}).then((function(e){return e.data}))},followUser:function(e){return Oe.post("follow/".concat(e),null,{}).then((function(e){return e.data}))}},he=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(h.a)(Object(h.a)({},e),r):e}))},ge={users:[],pagesCount:5,totalUsersCount:1,currentPage:1,isFetching:!1,followingInProgress:[]},me=function(e){return{type:"FOLLOW",userID:e}},xe=function(e){return{type:"UNFOLLOW",userID:e}},Ae=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},ve=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},Ie=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},Ee=function(){var e=Object(f.a)(m.a.mark((function e(t,n,r,s){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ie(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(Ie(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),we=n(112),ye=n.n(we),Ce=function(e){var t=e.onFilterChange;return Object(S.jsx)(re.c,{initialValues:{name:"",friends:"null"},onSubmit:function(e,n){var r=n.setSubmitting,s={name:e.name,friends:"null"===e.friends?"null":"true"===e.friends?"true":"false"};t(s),setTimeout((function(){return r(!1)}),500)},children:function(e){var t=e.isSubmitting;return Object(S.jsxs)(re.b,{children:[Object(S.jsx)(re.a,{type:"text",name:"name"}),Object(S.jsxs)(re.a,{as:"select",name:"friends",children:[Object(S.jsx)("option",{value:"null",children:"All"}),Object(S.jsx)("option",{value:"true",children:"Friends"}),Object(S.jsx)("option",{value:"false",children:"Other"})]}),Object(S.jsx)("button",{type:"submit",disabled:t,children:"Search"})]})}})},Pe=n(87),ke=n.n(Pe),Se=function(e){for(var t=e.onPageChanged,n=e.currentPage,r=[],s=1;s<=10;s++)r.push(s);return Object(S.jsx)("div",{children:r.map((function(e){return Object(S.jsx)("span",{onClick:function(){return t(e)},className:"".concat(ke.a.normal," ").concat(n===e?ke.a.selectedPage:""),children:e},e)}))})},Re=n(88),Fe=n.n(Re),Le="data:image/jpeg;base64,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",Ne=function(e){var t=e.user,n=e.unFollowUser,r=e.followingProgress,s=e.followUser;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(p.b,{to:"/profile/"+t.id,children:Object(S.jsx)("img",{className:Fe.a.avatar_img,src:null!==t.photos.small?t.photos.small:Le,alt:"Avatar user"})})}),Object(S.jsx)("div",{style:{marginBottom:"10px"},children:t.followed?Object(S.jsx)(k.a,{size:"small",color:"primary",variant:"contained",disabled:r.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:" Unfollow"}):Object(S.jsx)(k.a,{size:"small",color:"primary",variant:"contained",disabled:r.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:" Follow"})})]}),Object(S.jsxs)("span",{children:[Object(S.jsxs)("span",{children:[Object(S.jsx)("div",{className:Fe.a.name,children:t.name}),Object(S.jsx)("div",{children:t.status})]}),Object(S.jsx)("span",{children:Object(S.jsx)("div",{children:"user.location.country"})}),Object(S.jsx)("div",{children:"user.location.city"})]})]})},Ue=["users","onFilterChange","onPageChanged","currentPage"],Te=function(e){var t=e.users,n=e.onFilterChange,r=e.onPageChanged,s=e.currentPage,a=Object(ue.a)(e,Ue);return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:ye.a.pages,children:[Object(S.jsx)(Ce,{onFilterChange:n}),Object(S.jsx)("br",{}),Object(S.jsx)(Se,{onPageChanged:r,currentPage:s})]}),t.map((function(e){return Object(S.jsx)(Ne,{user:e,followUser:a.followUser,unFollowUser:a.unFollowUser,followingProgress:a.followingProgress},e.id)}))]})},_e=n(116),De=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),He=function(e){return e.usersPage.pagesCount},We=function(e){return e.usersPage.totalUsersCount},Ge=function(e){return e.usersPage.currentPage},Ze=function(e){return e.usersPage.isFetching},Ve=function(e){return e.usersPage.followingInProgress},Be=n(115),Ye=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).setCurrentPage=function(t){e.props.setCurrentPageAC(t)},e.toggleIsFollowingProgress=function(t,n){e.props.toggleIsFollowingProgressAC(t,n)},e.onPageChanged=function(t){var n=e.props.pagesCount;e.props.getUsersTC(t,n)},e.onFilterChange=function(t){var n=e.props.pagesCount;e.props.getUsersTC(1,n,t)},e.render=function(){return Object(S.jsxs)(S.Fragment,{children:[e.props.isFetching?Object(S.jsx)(Be.a,{}):null,Object(S.jsx)(Te,{followUser:e.props.followTC,unFollowUser:e.props.unFollowTC,onPageChanged:e.onPageChanged,users:e.props.usersPage,currentPage:e.props.currentPage,followingProgress:e.props.followingProgress,onFilterChange:e.onFilterChange})]})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pagesCount;this.props.getUsersTC(t,n)}}]),n}(j.a.Component),qe=Object(be.c)(Object(O.b)((function(e){return{usersPage:De(e),pagesCount:He(e),totalUsersCount:We(e),currentPage:Ge(e),isFetching:Ze(e),followingProgress:Ve(e)}}),{unFollowTC:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(n,e,fe.unFollowUser.bind(fe),xe);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},followTC:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(n,e,fe.followUser.bind(fe),me);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPageAC:Ae,toggleIsFollowingProgressAC:Ie,getUsersTC:function(e,t,n){return function(){var r=Object(f.a)(m.a.mark((function r(s){var a;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(ve(!0)),s(Ae(e)),r.next=4,fe.getUsers(e,t,n);case 4:a=r.sent,s(ve(!1)),s({type:"SET-USERS",users:a.items}),s({type:"SET-TOTAL-USERS-COUNT",totalCount:a.totalCount});case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}),de)(Ye),Qe=n(67),ze=n.n(Qe),Je=n.p+"static/media/preloader.111f9692.svg",Me=function(){return Object(S.jsx)("img",{src:Je,alt:"Preloader"})},Xe=n(13),Ke=["updateUserStatus"],$e=function(e){var t=e.updateUserStatus,n=Object(ue.a)(e,Ke),r=Object(l.useState)(n.status),s=Object(Xe.a)(r,2),a=s[0],c=s[1],i=Object(l.useState)(!1),o=Object(Xe.a)(i,2),u=o[0],j=o[1];Object(l.useEffect)((function(){c(n.status)}),[n.status]);return Object(S.jsxs)("div",{children:[!u&&Object(S.jsx)("div",{children:Object(S.jsx)("span",{onDoubleClick:function(){j(!0)},children:a||"New status."})}),u&&Object(S.jsx)("div",{children:Object(S.jsx)("input",{autoFocus:!0,onChange:function(e){c(e.currentTarget.value)},onBlur:function(){j(!1),t(a)},type:"text",value:a})})]})},et=function(e){var t,n=e.profile,r=e.status,s=e.updateStatus;return n?Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",className:ze.a.content_profile_img,alt:"Background"})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:ze.a.content_about_user,children:[Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(S.jsx)("img",{className:ze.a.avatar,src:(null===n||void 0===n||null===(t=n.photos)||void 0===t?void 0:t.small)||Le,alt:"Avatar Icon"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:n.fullName}),Object(S.jsx)("p",{children:n.aboutMe}),Object(S.jsx)($e,{status:r,updateUserStatus:s})]})]}),Object(S.jsx)("div",{children:n.lookingForAJob&&Object(S.jsxs)("div",{style:{fontWeight:"600",color:"darkblue"},children:[Object(S.jsx)("p",{style:{marginBottom:"-10px"},children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: "}),Object(S.jsx)("p",{children:n.lookingForAJobDescription})]})})]}),Object(S.jsx)("p",{style:{textAlign:"center",fontWeight:"600",fontSize:"20px"},children:"Other Contacts:"}),Object(S.jsxs)("div",{className:ze.a.user_contact,children:[n.contacts.vk&&Object(S.jsx)("p",{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.vk),children:"VK "})}),n.contacts.instagram&&Object(S.jsx)("p",{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.instagram),children:"Instagram "})}),n.contacts.youtube&&Object(S.jsx)("p",{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.youtube),children:"YouTube "})}),n.contacts.facebook&&Object(S.jsx)("p",{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.facebook),children:"Facebook "})}),n.contacts.github&&Object(S.jsx)("p",{children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.github),children:"GitHub "})})]})]})]}):Object(S.jsx)(Me,{})},tt=A.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7b609e77-8b87-49b1-abc2-87ddc192ab78"}}),nt=function(e){return tt.get("profile/".concat(e))},rt=function(e){return tt.get("profile/status/".concat(e))},st=function(e){return tt.put("profile/status",{status:e})},at={postsData:[{id:Object(J.a)(),message:"Hi. How are you? I wish you nice day!",likesCounts:15},{id:Object(J.a)(),message:"Hi, there.",likesCounts:17},{id:Object(J.a)(),message:"Wow,  it`s my first post.",likesCounts:12}],profile:{aboutMe:null,contacts:{facebook:null,website:null,vk:"https://vk.com/hoziain4eloveka",twitter:null,instagram:"https://www.instagram.com/zarezako.nick/",youtube:null,github:"https://github.com/Djiypyk",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"Frontend Developer",fullName:"Nikolai Zarazaka",userId:16125,photos:{small:null,large:null}},status:""},ct=function(e){return{type:"SET-STATUS",status:e}},it=n(77),ot=n.n(it),ut=n(89),lt=n.n(ut),jt=function(e){var t=e.id,n=e.message,r=e.likesCounts;return Object(S.jsxs)("div",{className:lt.a.item,children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"https://gtaforums.com/uploads/monthly_2018_06/271590_20180430214413_1.thumb.png.936cf1a9cee7d06e2fc47804c7ed2de7.png",alt:"Avatar icon"})}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:lt.a.post_text,children:n})}),Object(S.jsxs)("span",{children:["Like ",r]})]},t)},dt=function(e){var t=e.addNewPost,n=Object(re.d)({initialValues:{message:""},validate:function(e){if(!e.message)return{message:"Please, write your text in field!"}},onSubmit:function(e){t(e.message)}});return Object(S.jsx)("div",{style:{width:"450px"},children:Object(S.jsx)("form",{className:ot.a.message_input,onSubmit:n.handleSubmit,children:Object(S.jsx)(se.a,{children:Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(ce.a,Object(h.a)(Object(h.a)({type:"message",label:"Message"},n.getFieldProps("message")),{},{error:n.touched.message&&Boolean(n.errors.message),helperText:n.touched.message&&n.errors.message})),Object(S.jsx)(k.a,{size:"small",disabled:0===n.values.message.length,color:"primary",variant:"contained",type:"submit",children:"Send message"})]})})})})},bt=j.a.memo((function(e){var t=e.postsData,n=e.addPost,r=t.map((function(e){return Object(S.jsx)(jt,{id:e.id,message:e.message,likesCounts:e.likesCounts},e.id)}));return Object(S.jsxs)("div",{className:ot.a.myPost_block,children:[Object(S.jsx)("h3",{children:"My posts"}),Object(S.jsx)(dt,{addNewPost:function(e){return n(e)}}),r]})})),pt=Object(O.b)((function(e){return{postsData:e.profilePage.postsData}}),{addPostAC:function(e){return{type:"ADD-POST",message:e}}})((function(e){return Object(S.jsx)(bt,{addPost:function(t){return e.addPostAC(t)},postsData:e.postsData})})),Ot=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return Object(S.jsxs)("div",{children:[Object(S.jsx)(et,{profile:t,status:n,updateStatus:r}),Object(S.jsx)(pt,{})]})},ft=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;e&&(this.props.getUserProfileTC(e),this.props.getUserStatusTC(e))}},{key:"render",value:function(){return Object(S.jsx)(Ot,Object(h.a)(Object(h.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatusTC}))}}]),n}(j.a.Component),ht=Object(be.c)(Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfileTC:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatusTC:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,rt(e);case 2:r=t.sent,n(ct(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatusTC:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st(e);case 2:0===t.sent.data.resultCode&&n(ct(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),(function(e){return function(t){var n=Object(Q.g)("/profile/:userId/");return Object(S.jsx)(e,Object(h.a)(Object(h.a)({},t),{},{match:n}))}}),de)(ft),gt=n(90),mt=n.n(gt),xt=function(e){var t=e.isAuth,n=e.login;return Object(S.jsxs)("header",{className:mt.a.header,children:[Object(S.jsx)("img",{src:"https://sun9-31.userapi.com/impf/c851320/v851320586/c83b6/lRSQvmthIEU.jpg?size=604x427&quality=96&sign=fc31f757c09f541f5589942c1ab2720e&c_uniq_tag=GGPRrg1v7UKcLlzjpUPlvHvPdJgD0OMimQ8-mkLKsO0&type=album",alt:"Logotype"}),Object(S.jsx)("div",{className:mt.a.login_block,children:t?Object(S.jsx)("span",{children:n}):Object(S.jsx)(p.b,{to:"/login",children:" Login"})})]})},At=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).render=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(xt,{isAuth:e.props.isAuth,login:e.props.login})})},e}return Object(i.a)(n)}(j.a.Component),vt=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}))(At),It=n(91),Et=n.n(It),wt=n(201),yt=n(191),Ct=n(199),Pt=n(195),kt=function(){var e=Object(O.c)(),t=Object(O.d)((function(e){return e.auth.isAuth})),n=Object(O.d)((function(e){return e.auth.errors})),r=Object(re.d)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var n;e((n=t,function(){var e=Object(f.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n);case 2:0===(r=e.sent).data.resultCode?t(P()):1===r.data.resultCode&&t({type:"auth/SET_ERRORS",errors:r.data.messages});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}});return t?Object(S.jsx)(Q.a,{to:R}):Object(S.jsx)(wt.a,{container:!0,justifyContent:"center",children:Object(S.jsxs)(wt.a,{item:!0,justifyContent:"center",children:[Object(S.jsx)("form",{onSubmit:r.handleSubmit,children:Object(S.jsxs)(se.a,{children:[Object(S.jsxs)(yt.a,{children:[Object(S.jsxs)("p",{children:["To log in get registered",Object(S.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(S.jsx)("p",{children:"or use common test account credentials:"}),Object(S.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(S.jsx)("p",{children:"Password: free"})]}),Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(ce.a,Object(h.a)(Object(h.a)({type:"email",label:"Email",margin:"normal"},r.getFieldProps("email")),{},{error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email})),Object(S.jsx)("br",{}),Object(S.jsx)(ce.a,Object(h.a)(Object(h.a)({type:"password",label:"Password",margin:"normal"},r.getFieldProps("password")),{},{error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password})),Object(S.jsx)("br",{}),Object(S.jsx)(Ct.a,{label:"Remember me",control:Object(S.jsx)(Pt.a,Object(h.a)(Object(h.a)({},r.getFieldProps("rememberMe")),{},{checked:r.values.rememberMe}))}),Object(S.jsx)(k.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})}),Object(S.jsx)("div",{className:Et.a.errors,children:n})]})})},St=function(){return Object(S.jsxs)("div",{className:Et.a.wrapperLogin,children:[Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"LOGIN PAGE"})}),Object(S.jsx)(kt,{})]})},Rt={initialized:!1},Ft=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(S.jsxs)("div",{className:"app-wrapper",children:[Object(S.jsx)(vt,{}),Object(S.jsx)(D,{}),Object(S.jsx)("div",{className:"app-wrapper-content",children:Object(S.jsxs)(Q.d,{children:[Object(S.jsx)(Q.b,{path:"".concat(R,"/"),element:Object(S.jsx)(ht,{})}),Object(S.jsx)(Q.b,{path:"".concat(R,"/:userId"),element:Object(S.jsx)(ht,{})}),Object(S.jsx)(Q.b,{path:"".concat(F,"/*"),element:Object(S.jsx)(pe,{})}),Object(S.jsx)(Q.b,{path:U,element:Object(S.jsx)(qe,{})}),Object(S.jsx)(Q.b,{path:_,element:Object(S.jsx)(St,{})}),Object(S.jsx)(Q.b,{path:L,element:Object(S.jsx)(B,{})}),Object(S.jsx)(Q.b,{path:T,element:Object(S.jsx)(Y,{})}),Object(S.jsx)(Q.b,{path:N,element:Object(S.jsx)(q,{})}),Object(S.jsx)(Q.b,{path:"/404",element:Object(S.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(S.jsx)(Q.b,{path:"*",element:Object(S.jsx)(Q.a,{to:"/404"})})]})}),Object(S.jsx)(G,{})]}):Object(S.jsx)("div",{className:"preloader",children:Object(S.jsx)(Be.a,{})})}}]),n}(j.a.Component),Lt=Object(be.c)(Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){return e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(Ft),Nt=n(113),Ut=Object(be.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:Object(J.a)(),message:t.message,likesCounts:0};return Object(h.a)(Object(h.a)({},e),{},{postsData:[n].concat(Object(z.a)(e.postsData))});case"DELETE_POST":return Object(h.a)(Object(h.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case"SET-USER-PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:Object(h.a)({},t.profile)});case"SET-STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("SEND-MESSAGE"===t.type){var n=t.text;return Object(h.a)(Object(h.a)({},e),{},{messagesData:[].concat(Object(z.a)(e.messagesData),[{id:Object(J.a)(),message:n}])})}return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:he(e.users,t.userID,"id",{followed:!0})});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:he(e.users,t.userID,"id",{followed:!1})});case"SET-USERS":return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(h.a)(Object(h.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(h.a)(Object(h.a)({},e),t.data);case"auth/SET_ERRORS":return Object(h.a)(Object(h.a)({},e),{},{errors:t.errors});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;return"app/INITIALIZED_SUCCESS"===t.type?Object(h.a)(Object(h.a)({},e),{},{initialized:!0}):e}}),Tt=Object(be.d)(Ut,Object(be.a)(Nt.a)),_t=Tt;window.store=Tt,a.a.render(Object(S.jsx)(O.a,{store:_t,children:Object(S.jsx)(p.a,{children:Object(S.jsx)(Lt,{})})}),document.getElementById("root")),r()},33:function(e,t,n){e.exports={nav:"Navbar_nav__1_ZQ8",normal:"Navbar_normal__1bAja",active:"Navbar_active__2z404"}},52:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__I_CAQ",dialogs_items:"Dialogs_dialogs_items__1f2rE",messages:"Dialogs_messages__3SXIq",message:"Dialogs_message__1-0vu",message_input:"Dialogs_message_input__2HLwa"}},67:function(e,t,n){e.exports={content_profile_img:"ProfileInfo_content_profile_img__3o-dR",avatar:"ProfileInfo_avatar__3rmGo",content_about_user:"ProfileInfo_content_about_user__30x3l",user_contact:"ProfileInfo_user_contact__3MwCU"}},77:function(e,t,n){e.exports={myPost_block:"MyPost_myPost_block__3ZtVV",post:"MyPost_post__3AL0Q",add_button:"MyPost_add_button__CR1Zk"}},80:function(e,t,n){e.exports={dialog:"DialogItem_dialog__2lV-Q",normal:"DialogItem_normal__2tz1s",active:"DialogItem_active__1QU2f"}},87:function(e,t,n){e.exports={normal:"Paginator_normal__1m9jd",selectedPage:"Paginator_selectedPage___lHu3"}},88:function(e,t,n){e.exports={avatar_img:"User_avatar_img__3-ywf",name:"User_name__2V20y"}},89:function(e,t,n){e.exports={item:"Post_item__3HJK_",post_text:"Post_post_text__17qr-"}},90:function(e,t,n){e.exports={header:"Header_header__3c_Tr",login_block:"Header_login_block__3x2rd"}},91:function(e,t,n){e.exports={wrapperLogin:"Login_wrapperLogin__Z2aP5",errors:"Login_errors__2Y4u1"}}},[[159,1,2]]]);
//# sourceMappingURL=main.6ac7373b.chunk.js.map