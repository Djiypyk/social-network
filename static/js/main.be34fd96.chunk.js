(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{10:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__I_CAQ",dialogs_items:"Dialogs_dialogs_items__1f2rE",messages:"Dialogs_messages__3SXIq",message:"Dialogs_message__1-0vu",add_button:"Dialogs_add_button__165zo",message_input:"Dialogs_message_input__2HLwa"}},18:function(e,t,n){e.exports={avatar_img:"Users_avatar_img__3sE1p",name:"Users_name__9xiQG",pages:"Users_pages__UgnB9",normal:"Users_normal__3MUTp",selectedPage:"Users_selectedPage__1Syq_"}},21:function(e,t,n){e.exports={content_profile_img:"ProfileInfo_content_profile_img__3o-dR",avatar:"ProfileInfo_avatar__3rmGo",content_about_user:"ProfileInfo_content_about_user__30x3l",user_contact:"ProfileInfo_user_contact__3MwCU"}},25:function(e,t,n){e.exports={dialog:"DialogItem_dialog__2lV-Q",normal:"DialogItem_normal__2tz1s",active:"DialogItem_active__1QU2f"}},28:function(e,t,n){e.exports={myPost_block:"MyPost_myPost_block__3ZtVV",post:"MyPost_post__3AL0Q",add_button:"MyPost_add_button__CR1Zk"}},29:function(e,t,n){e.exports={item:"Post_item__3HJK_",post_text:"Post_post_text__17qr-"}},30:function(e,t,n){e.exports={header:"Header_header__3c_Tr",login_block:"Header_login_block__3x2rd"}},40:function(e,t,n){e.exports={footer:"Footer_footer__Dezos"}},41:function(e,t,n){e.exports={newsPost:"NewsField_newsPost__2UCfN"}},48:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s,a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))},c=n(24),i=n.n(c),r=n(1),o=n.n(r),l=(n(48),n(8)),u=n.n(l),j=n(4),d=n(0),b="/profile",g="/dialogs",p="/",h="/settings",O="/users",A="/music",f=function(){return Object(d.jsxs)("nav",{className:u.a.nav,children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:b,children:"Profile"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:g,children:"Messages"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:O,children:"Users"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:p,children:"News Field"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:h,children:"Settings"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"".concat(u.a.normal," ").concat(t?u.a.active:"")},to:A,children:"Music"})})]})},x=n(40),m=n.n(x),v=function(){return Object(d.jsx)("div",{className:m.a.footer,children:Object(d.jsx)("p",{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438. 2021"})})},I=n(41),C=n.n(I),E=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:C.a.newsPost,children:[Object(d.jsx)("p",{children:"Happy New 2022 Year!!!"}),Object(d.jsx)("img",{src:"https://www.hearttoheart.org/wp-content/uploads/2012/12/secret-santa-rules.jpg?w=243",alt:"Santa Klaus"})]})})},P=function(e){return Object(d.jsx)("div",{children:"Music"})},y=function(e){return Object(d.jsx)("div",{children:"Settings"})},w=n(3),k=n(20),F=n(2),R=n(73),N="UPDATE-NEW-MESSAGE-TEXT",L="SEND-MESSAGE",U={dialogsData:[{id:Object(R.a)(),name:"Alex"},{id:Object(R.a)(),name:"Glen"},{id:Object(R.a)(),name:"Yana"},{id:Object(R.a)(),name:"Gloria"},{id:Object(R.a)(),name:"Nikolai"}],messagesData:[{id:Object(R.a)(),message:"Hello, it`s me."},{id:Object(R.a)(),message:"Hello!"},{id:Object(R.a)(),message:"All you ready?"}],newMessageText:" "},T=n(10),_=n.n(T),D=n(25),H=n.n(D),W=function(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:H.a.dialog,children:Object(d.jsx)(j.b,{to:t,className:function(e){var t=e.isActive;return"".concat(H.a.normal," ").concat(t?H.a.active:"")},children:e.name})})},S=function(e){return Object(d.jsx)("div",{className:_.a.message,children:e.message})},G=function(e){var t=e.dialogs.dialogsData.map((function(e){return Object(d.jsx)(W,{id:e.id,name:e.name},e.id)})),n=e.dialogs.messagesData.map((function(e){return Object(d.jsx)(S,{id:e.id,message:e.message},e.id)})),s=e.textBody;return Object(d.jsxs)("div",{className:_.a.dialogs,children:[Object(d.jsx)("div",{className:_.a.dialogs_items,children:t}),Object(d.jsxs)("div",{className:_.a.messages,children:[n,Object(d.jsxs)("div",{className:_.a.message_input,children:[Object(d.jsx)("textarea",{value:s,onKeyPress:function(t){"Enter"===t.key&&e.sendMessageAC()},onChange:function(t){if(t.currentTarget.value){var n=t.currentTarget.value;e.onChangeMessageAC(n)}},placeholder:"Write your message"}),Object(d.jsx)("button",{className:_.a.add_button,onClick:function(){e.sendMessageAC()},children:" Send message"})]})]})]})},Z=n(9),Q=Object(Z.b)((function(e){return{dialogs:e.dialogsPage,textBody:e.dialogsPage.newMessageText}}),{onChangeMessageAC:function(e){return{type:N,body:e}},sendMessageAC:function(){return{type:L}}})(G),q=n(13),V=n(14),Y=n(17),B=n(16),J="FOLLOW",M="UNFOLLOW",X="SET-USERS",z="SET-CURRENT-PAGE",K="SET-TOTAL-USERS-COUNT",$="TOGGLE-IS-FETCHING",ee={users:[],pagesCount:5,totalUsersCount:1,currentPage:1,isFetching:!1},te=n(18),ne=n.n(te),se="data:image/jpeg;base64,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",ae=n(15),ce=n.n(ae),ie=ce.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7b609e77-8b87-49b1-abc2-87ddc192ab78"}}),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return ie.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},oe=function(e){return ie.delete("follow/".concat(e),{}).then((function(e){return e.data}))},le=function(e){return ie.post("follow/".concat(e),null,{}).then((function(e){return e.data}))},ue=function(e){for(var t=[],n=1;n<=10;n++)t.push(n);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:ne.a.pages,children:t.map((function(t){return Object(d.jsx)("span",{onClick:function(){return e.onPageChanged(t)},className:"".concat(ne.a.normal," ").concat(e.currentPage===t?ne.a.selectedPage:""),children:t},t)}))}),e.users.map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{className:ne.a.avatar_img,src:null!==t.photos.small?t.photos.small:se,alt:"Avatar user"})})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{onClick:function(){oe(t.id).then((function(n){0===n.resultCode&&e.unFollowUser(t.id)}))},children:" Unfollow"}):Object(d.jsx)("button",{onClick:function(){le(t.id).then((function(n){0===n.resultCode&&e.followUser(t.id)}))},children:" Follow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{className:ne.a.name,children:t.name}),Object(d.jsx)("div",{children:t.status})]}),Object(d.jsx)("span",{children:Object(d.jsx)("div",{children:"u.location.country"})}),Object(d.jsx)("div",{children:"u.location.city"})]})]},t.id)}))]})},je=n.p+"static/media/preloader.111f9692.svg",de=function(){return Object(d.jsx)("img",{src:je,alt:"Preloader"})},be=function(e){Object(Y.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(q.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).followUser=function(t){e.props.followAC(t)},e.unFollowUser=function(t){e.props.unFollowAC(t)},e.setUsers=function(t){e.props.setUsersAC(t)},e.setCurrentPage=function(t){e.props.setCurrentPageAC(t)},e.setTotalUserCount=function(t){e.props.totalUsersCountAC(t)},e.toggleIsFetching=function(t){e.props.toggleIsFetchingAC(!t)},e.onPageChanged=function(t){e.setCurrentPage(t),e.props.toggleIsFetchingAC(!0),re(t,e.props.pagesCount).then((function(t){e.props.toggleIsFetchingAC(!1),e.setUsers(t.items)}))},e.render=function(){return Object(d.jsxs)(d.Fragment,{children:[e.props.isFetching?Object(d.jsx)(de,{}):null,Object(d.jsx)(ue,{followUser:e.followUser,unFollowUser:e.unFollowUser,setUsers:e.setUsers,onPageChanged:e.onPageChanged,users:e.props.usersPage,currentPage:e.props.currentPage})]})},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetchingAC(!0),re(this.props.currentPage,this.props.pagesCount).then((function(t){e.props.toggleIsFetchingAC(!1),e.setUsers(t.items),e.setTotalUserCount(t.totalCount)}))}}]),n}(o.a.Component),ge=Object(Z.b)((function(e){return{usersPage:e.usersPage.users,pagesCount:e.usersPage.pagesCount,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{followAC:function(e){return{type:J,userID:e}},unFollowAC:function(e){return{type:M,userID:e}},setUsersAC:function(e){return{type:X,users:e}},setCurrentPageAC:function(e){return{type:z,currentPage:e}},totalUsersCountAC:function(e){return{type:K,totalCount:e}},toggleIsFetchingAC:function(e){return{type:$,isFetching:e}}})(be),pe=n(21),he=n.n(pe),Oe=function(e){var t,n=e.profile;return n?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",className:he.a.content_profile_img,alt:"Background"})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:he.a.content_about_user,children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(d.jsx)("img",{className:he.a.avatar,src:(null===n||void 0===n||null===(t=n.photos)||void 0===t?void 0:t.small)||se,alt:"Avatar Icon"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:n.fullName}),Object(d.jsx)("p",{children:n.aboutMe})]})]}),Object(d.jsx)("div",{children:n.lookingForAJob&&Object(d.jsxs)("div",{style:{fontWeight:"600",color:"darkblue"},children:[Object(d.jsx)("p",{style:{marginBottom:"-10px"},children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: "}),Object(d.jsx)("p",{children:n.lookingForAJobDescription})]})})]}),Object(d.jsx)("p",{style:{textAlign:"center",fontWeight:"600",fontSize:"20px"},children:"Other Contacts:"}),Object(d.jsxs)("div",{className:he.a.user_contact,children:[n.contacts.vk&&Object(d.jsx)("p",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.vk),children:"VK "})}),n.contacts.instagram&&Object(d.jsx)("p",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.instagram),children:"Instagram "})}),n.contacts.youtube&&Object(d.jsx)("p",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.youtube),children:"YouTube "})}),n.contacts.facebook&&Object(d.jsx)("p",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.facebook),children:"Facebook "})}),n.contacts.github&&Object(d.jsx)("p",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https:/".concat(n.contacts.github),children:"GitHub "})})]})]})]}):Object(d.jsx)(de,{})},Ae="ADD-POST",fe="UPDATE-NEW-POST-TEXT",xe="SET-USER-PROFILE",me={postsData:[{id:Object(R.a)(),message:"Hi. How are you? I wish you nice day!",likesCounts:15},{id:Object(R.a)(),message:"Hi, there.",likesCounts:17},{id:Object(R.a)(),message:"Wow,  it`s my first post.",likesCounts:12}],newPostText:" ",profile:{aboutMe:null,contacts:{facebook:null,website:null,vk:"https://vk.com/hoziain4eloveka",twitter:null,instagram:"https://www.instagram.com/zarezako.nick/",youtube:null,github:"https://github.com/Djiypyk",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"Frontend Developer",fullName:"Nikolai Zarazaka",userId:16125,photos:{small:null,large:null}}},ve=n(28),Ie=n.n(ve),Ce=n(29),Ee=n.n(Ce),Pe=function(e){return Object(d.jsxs)("div",{className:Ee.a.item,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://gtaforums.com/uploads/monthly_2018_06/271590_20180430214413_1.thumb.png.936cf1a9cee7d06e2fc47804c7ed2de7.png",alt:"Avatar icon"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:Ee.a.post_text,children:e.message})}),Object(d.jsxs)("span",{children:["Like ",e.likesCounts]})]},e.id)},ye=function(e){var t=e.postsData.map((function(e){return Object(d.jsx)(Pe,{id:e.id,message:e.message,likesCounts:e.likesCounts},e.id)})),n=o.a.createRef();return Object(d.jsxs)("div",{className:Ie.a.myPost_block,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:function(){var t;if(null!==n&&void 0!==n&&null!==(t=n.current)&&void 0!==t&&t.value){var s=n.current.value;e.updateNewPostText(s)}},onKeyPress:function(t){var s;"Enter"===t.key&&null!==n&&void 0!==n&&null!==(s=n.current)&&void 0!==s&&s.value&&e.addPost()},ref:n,value:e.newPostText,placeholder:"Write your post"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){var t;null!==n&&void 0!==n&&null!==(t=n.current)&&void 0!==t&&t.value&&e.addPost()},className:Ie.a.add_button,children:"Add post"})}),t]})},we=Object(Z.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{addPostAC:function(){return{type:Ae}},onPostChangeAC:function(e){return{type:fe,newText:e}}})((function(e){return Object(d.jsx)(ye,{updateNewPostText:function(t){t&&e.onPostChangeAC(t)},addPost:function(){e.addPostAC()},postsData:e.postsData,newPostText:e.newPostText})})),ke=function(e){var t=e.profile;return Object(d.jsxs)("div",{children:[Object(d.jsx)(Oe,{profile:t}),Object(d.jsx)(we,{})]})},Fe=function(e){Object(Y.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(q.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).setUserProfile=function(t){e.props.setUserProfileAC(t)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match?this.props.match.params.userId:16125;ce.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t),{withCredentials:!0,headers:{"API-KEY":"7b609e77-8b87-49b1-abc2-87ddc192ab78"}}).then((function(t){e.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(d.jsx)(ke,Object(F.a)(Object(F.a)({},this.props),{},{profile:this.props.profile}))}}]),n}(o.a.Component),Re=Object(Z.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfileAC:function(e){return{type:xe,profile:e}}})((s=Fe,function(e){var t=Object(w.f)("/profile/:userId/");return Object(d.jsx)(s,Object(F.a)(Object(F.a)({},e),{},{match:t}))})),Ne=n(30),Le=n.n(Ne),Ue=function(e){return Object(d.jsxs)("header",{className:Le.a.header,children:[Object(d.jsx)("img",{src:"https://sun9-31.userapi.com/impf/c851320/v851320586/c83b6/lRSQvmthIEU.jpg?size=604x427&quality=96&sign=fc31f757c09f541f5589942c1ab2720e&c_uniq_tag=GGPRrg1v7UKcLlzjpUPlvHvPdJgD0OMimQ8-mkLKsO0&type=album",alt:"Logotype"}),Object(d.jsx)("div",{className:Le.a.login_block,children:e.isAuth?e.login:Object(d.jsx)(j.b,{to:"/login",children:" Login"})})]})},Te="SET_USER_DATA",_e="TOGGLE_IS_FETCHING",De={id:null,email:null,login:null,isAuth:!1,isFetching:!1},He=function(e){Object(Y.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(q.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).toggleIsFetching=function(t){e.props.toggleIsFetchingAC(!t)},e.render=function(){return Object(d.jsxs)(d.Fragment,{children:[e.props.isFetching?Object(d.jsx)(de,{}):null,Object(d.jsx)(Ue,{isAuth:e.props.isAuth,login:e.props.login})]})},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetchingAC(!0),ce.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){0===t.data.resultCode&&(e.props.setAuthUserDataAC(t.data.data),e.props.toggleIsFetchingAC(!1))}))}}]),n}(o.a.Component),We=Object(Z.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{setAuthUserDataAC:function(e){return{type:Te,data:e}},toggleIsFetchingAC:function(e){return{type:_e,isFetching:e}}})(He),Se=function(e){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(We,{}),Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"app-wrapper-content",children:Object(d.jsxs)(w.c,{children:[Object(d.jsx)(w.a,{path:"".concat(b,"/"),element:Object(d.jsx)(Re,{})}),Object(d.jsx)(w.a,{path:"".concat(b,"/:userId"),element:Object(d.jsx)(Re,{})}),Object(d.jsx)(w.a,{path:"".concat(g,"/*"),element:Object(d.jsx)(Q,{})}),Object(d.jsx)(w.a,{path:O,element:Object(d.jsx)(ge,{})}),Object(d.jsx)(w.a,{path:p,element:Object(d.jsx)(E,{})}),Object(d.jsx)(w.a,{path:A,element:Object(d.jsx)(P,{})}),Object(d.jsx)(w.a,{path:h,element:Object(d.jsx)(y,{})})]})}),Object(d.jsx)(v,{})]})})},Ge=n(31),Ze=Object(Ge.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:var n={id:Object(R.a)(),message:e.newPostText,likesCounts:0};return Object(F.a)(Object(F.a)({},e),{},{newPostText:"",postsData:[n].concat(Object(k.a)(e.postsData))});case fe:return Object(F.a)(Object(F.a)({},e),{},{newPostText:t.newText});case xe:return Object(F.a)(Object(F.a)({},e),{},{profile:Object(F.a)({},t.profile)});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(F.a)(Object(F.a)({},e),{},{messagesData:Object(k.a)(e.messagesData),newMessageText:t.body});case L:var n=e.newMessageText;return Object(F.a)(Object(F.a)({},e),{},{newMessageText:" ",messagesData:[].concat(Object(k.a)(e.messagesData),[{id:Object(R.a)(),message:n}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(F.a)(Object(F.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(F.a)(Object(F.a)({},e),{},{followed:!0}):e}))});case M:return Object(F.a)(Object(F.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(F.a)(Object(F.a)({},e),{},{followed:!1}):e}))});case X:return Object(F.a)(Object(F.a)({},e),{},{users:t.users});case z:return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case K:return Object(F.a)(Object(F.a)({},e),{},{totalUsersCount:t.totalCount});case $:return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(F.a)(Object(F.a)(Object(F.a)({},e),t.data),{},{isAuth:!0});case _e:return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),Qe=Object(Ge.b)(Ze),qe=Qe;window.store=Qe,i.a.render(Object(d.jsx)(Z.a,{store:qe,children:Object(d.jsx)(Se,{})}),document.getElementById("root")),a()},8:function(e,t,n){e.exports={nav:"Navbar_nav__1_ZQ8",normal:"Navbar_normal__1bAja",active:"Navbar_active__2z404"}}},[[71,1,2]]]);
//# sourceMappingURL=main.be34fd96.chunk.js.map