(this.webpackJsonpstacc_test=this.webpackJsonpstacc_test||[]).push([[0],{313:function(e,t,n){},503:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(64),r=n.n(c),l=(n(313),n(15)),i=n(13),o=n.n(i),d=n(23),u=n(10),j=n(524),b=n(525),h=n(526),p=n(527),g=n(528),m=n(529),f=n(84),O=n(72),y=n(520),x=n(515),k=n(58),v=n(275),w=n(82),S=n(42),T=n(4);var C=function(e){var t=Object(a.useState)("daily"),n=Object(l.a)(t,2),s=n[0],c=n[1],r=Object(u.f)();function i(t){e.setOpen(t)}return Object(a.useEffect)((function(){"/"===r.pathname||"/stacc"===r.pathname?c("daily"):c(r.pathname.slice(1))})),Object(T.jsx)(y.a,{size:"xs",placement:"left",open:e.open,onClose:function(){return i(!1)},dialogClassName:"sideNav",children:Object(T.jsx)(y.a.Body,{style:{padding:"0.5rem"},children:Object(T.jsx)("div",{className:"drawerBodyCustom",children:Object(T.jsxs)(x.a,{reversed:!0,activeKey:s,onSelect:function(e){c(e),i(!1)},style:{color:"red"},children:[Object(T.jsx)("div",{className:"sideNavList",children:" LISTS "}),Object(T.jsxs)("div",{className:"list",children:[Object(T.jsxs)(x.a.Item,{eventKey:"daily",as:k.b,to:"/daily",children:[Object(T.jsx)(v.a,{}),Object(T.jsx)("div",{className:"linkNavItem",children:"Daily"})]}),Object(T.jsxs)(x.a.Item,{eventKey:"weekly",as:k.b,to:"/weekly",children:[Object(T.jsx)(w.a,{}),Object(T.jsx)("div",{className:"linkNavItem",children:"Weekly"})]}),Object(T.jsxs)(x.a.Item,{eventKey:"monthly",as:k.b,to:"/monthly",children:[Object(T.jsx)(w.d,{}),Object(T.jsx)("div",{className:"linkNavItem",children:"Monthly"})]})]}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"sideNavOthers",children:"OTHERS "}),Object(T.jsxs)("div",{className:"others",children:[Object(T.jsxs)(x.a.Item,{eventKey:"settings",as:k.b,to:"/settings",children:[Object(T.jsx)(S.i,{}),Object(T.jsx)("div",{className:"linkNavItem",children:"Settings"})]}),Object(T.jsxs)(x.a.Item,{eventKey:"about",as:k.b,to:"/about",children:[Object(T.jsx)(S.g,{}),Object(T.jsx)("div",{className:"linkNavItem",children:"About"})]})]})]})})})})},I=(n(259),n(117)),N=function(e,t,n){var a="%20",s=a+"and"+a,c="https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id%2C%20name%2C%20size%2C%20createdTime%2C%20mimeType)&q="+(null!=e?"name"+a+"contains"+a+"'"+e+"'":"");return c+=null!=e&&(null!=n||null!=t)?s:"",c+=null!=n?"'"+n+"'"+a+"in"+a+"parents":"",c+=null!=t&&(null!=e||null!=n)?s:"",c+=null!=t?"mimeType"+"%3D"+"'"+t+"'":""},D=function(e){var t=new Headers;return t.append("Authorization","Bearer "+e),console.log(t),t},z=function(){var e=Object(d.a)(o.a.mark((function e(t,n,a){var s,c,r,l,i,d,u,j,b,h,p,g=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=g.length>3&&void 0!==g[3]?g[3]:null,c=g.length>4&&void 0!==g[4]?g[4]:"appDataFolder",i=new Promise((function(e,t){r=e})),(d=new XMLHttpRequest).open(null==s?"POST":"PATCH",null==s?"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart":"https://www.googleapis.com/upload/drive/v3/files/"+s+"?uploadType=multipart"),d.setRequestHeader("Authorization","Bearer "+t),d.onload=function(){200==this.status&&(l=JSON.parse(this.response)),r()},u=a,b={name:n,mimeType:j="application/json",parents:[c]},null!=s&&(delete b.parents,delete b.name),h=new Blob([u],{type:j}),(p=new FormData).append("metadata",new Blob([JSON.stringify(b)],{type:"application/json"})),p.append("file",h),d.send(p),e.next=19,i;case 19:return e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"raw",c=new Promise((function(e,t){a=e})),(r=new XMLHttpRequest).open("GET","https://www.googleapis.com/drive/v3/files/"+n+"?alt=media",!0),r.setRequestHeader("Authorization","Bearer "+t),r.onload=function(){200===this.status&&(s=this.response,a())},r.send(),e.next=9,c;case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("refresh_token"),e.next=3,I.a.post("https://ninth-matter-357304.el.r.appspot.com/auth/google/refresh-token",{refreshToken:t});case 3:return n=e.sent,localStorage.setItem("access_token",n.data.access_token),e.abrupt("return",n.data.access_token);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N(null,"application/json","appDataFolder"),{method:"GET",headers:D(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:if(r=e.sent,r.files.filter((function(e){return"installed.json"===e.name})).length){e.next=24;break}return e.next=10,z(t,"installed.json",JSON.stringify({installed:JSON.stringify((new Date).getTime())}));case 10:return e.sent,e.next=13,z(t,"daily",localStorage.getItem("daily"));case 13:return n=e.sent,e.next=16,z(t,"weekly",localStorage.getItem("weekly"));case 16:return a=e.sent,e.next=19,z(t,"monthly",localStorage.getItem("monthly"));case 19:return s=e.sent,alert("New Install Complete"),e.abrupt("return",{daily:n.id,weekly:a.id,monthly:s.id});case 24:return e.abrupt("return",{daily:r.files.filter((function(e){return"daily"===e.name}))[0].id,weekly:r.files.filter((function(e){return"weekly"===e.name}))[0].id,monthly:r.files.filter((function(e){return"monthly"===e.name}))[0].id});case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=F,W=n(16),_=n(52),R=Object(_.b)({name:"general",initialState:{loaded:0,signedIn:!1,accessToken:"",stacc:{daily:0,weekly:0,monthly:0},sync:{daily:0,weekly:0,monthly:0},id:{daily:0,weekly:0,monthly:0},syncing:!1},reducers:{changeLoaded:function(e,t){e.loaded=t.payload},changeSignInState:function(e,t){e.signedIn=t.payload,console.log(t.payload,"signinstate")},changeStaccLoaded:function(e,t){e.stacc[t.payload.list]=t.payload.value},changeStaccSyncStat:function(e,t){e.sync[t.payload.list]=t.payload.value},setIds:function(e,t){console.log(t.payload),e.id=t.payload},resetStacc:function(e){Object.keys(e.stacc).map((function(t){e.stacc[t]=0}))},setAccessToken:function(e,t){console.log(t.payload),e.accessToken=t.payload},setSyncing:function(e,t){e.syncing=t.payload}}}),U=R.actions,P=U.changeLoaded,H=U.changeSignInState,E=U.changeStaccLoaded,J=U.changeStaccSyncStat,G=U.resetStacc,K=U.setAccessToken,M=U.setIds,q=U.setSyncing,V=R.reducer,X=n(280);var Y=function(){var e=Object(W.b)(),t=Object(W.c)((function(e){return e.general.loaded})),n=Object(W.c)((function(e){return e.general.signedIn})),s=Object(W.c)((function(e){return e.general.accessToken})),c=Object(W.c)((function(e){return e.general.id})),r=Object(W.c)((function(e){return e.general.syncing}));Object(a.useEffect)((function(){Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("refresh_token")){t.next=11;break}return e(H(!0)),t.next=4,B();case 4:return n=t.sent,e(K(n)),t.next=8,L(n);case 8:a=t.sent,e(M(a)),e(G());case 11:case"end":return t.stop()}}),t)})))()}),[t]);var i=Object(a.useState)(!1),y=Object(l.a)(i,2),x=y[0],k=y[1],v=Object(a.useState)(!1),I=Object(l.a)(v,2),N=I[0],D=I[1];function A(){D(!1)}function F(){return(F=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Please don't close the app while syncing. You'll be informed when the process is complete"),e.next=3,z(s,"daily",localStorage.getItem("daily"),c.daily);case 3:return e.next=5,z(s,"weekly",localStorage.getItem("weekly"),c.weekly);case 5:return e.next=7,z(s,"monthly",localStorage.getItem("monthly"),c.monthly);case 7:alert("Sync complete!");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsxs)(j.a,{children:[Object(T.jsx)(b.a,{style:{width:"100vw",position:"fixed",top:0,zIndex:999,background:"rgba(14, 18, 25)",paddingBottom:"1.5rem"},children:Object(T.jsx)(h.a,{fluid:!0,children:Object(T.jsxs)(p.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"},children:[Object(T.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"start",paddingLeft:"1rem"},onClick:function(){return k(!0)},children:Object(T.jsx)(S.b,{fontSize:"1.5rem"})}),Object(T.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)("h3",{style:{fontWeight:"bolder"},children:"stacc"})}),Object(T.jsx)(g.a,{xs:8,sm:8,md:8,lg:8,style:{display:"flex",justifyContent:"end",paddingRight:"1rem"},children:r?Object(T.jsx)(w.b,{className:"fade-in icon-spin",onClick:function(){return D(!0)},style:n&&c.daily?{display:"unset"}:{display:"none"},fontSize:"1.5rem"}):Object(T.jsx)(X.a,{className:"fade-in",onClick:function(){return D(!0)},style:n&&c.daily?{display:"unset"}:{display:"none"},fontSize:"1.5rem"})})]})})}),Object(T.jsx)(m.a,{style:{position:"relative",textAlign:"",top:"6.5rem",height:"80vh"},children:Object(T.jsx)(u.a,{})}),Object(T.jsx)(C,{open:x,setOpen:function(e){return k(e)}})]}),Object(T.jsxs)(f.a,{size:"small",open:N,onClose:A,children:[Object(T.jsx)(f.a.Header,{children:Object(T.jsx)(f.a.Title,{children:"Sync"})}),Object(T.jsxs)(f.a.Body,{children:[Object(T.jsx)("span",{style:{opacity:"0.5"},children:r?"Syncing in process...":"Tasks have been synced!"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{style:{fontSize:"small"},children:"Sync all tasks manually?"})]}),Object(T.jsxs)(f.a.Footer,{children:[Object(T.jsx)(O.a,{disabled:r,onClick:function(){!function(){F.apply(this,arguments)}(),A()},appearance:"primary",children:"Sync"}),Object(T.jsx)(O.a,{onClick:A,appearance:"subtle",children:"Cancel"})]})]})]})},$=n(522),Q=n(516),Z=n(294),ee=n(513),te=n(514),ne=n(531),ae=[{label:"Basic",value:"basic"},{label:"Important",value:"important"},{label:"Urgent",value:"urgent"},{label:"Personal",value:"personal"},{label:"Work",value:"work"}],se=[{label:"Green",value:"green",hex:"#4ceed0",categories:"color"},{label:"Yellow",value:"yellow",hex:"#F2BF06",categories:"color"},{label:"Red",value:"red",hex:"#f4815d",categories:"color"},{label:"Blue",value:"blue",hex:"#00D5FC",categories:"color"},{label:"Violet",value:"violet",hex:"#BB99FF",categories:"color"}],ce={green:"#4ceed0",yellow:"#F2BF06",blue:"#00D5FC",red:"#f4815d",violet:"#BB99FF"},re={green:"rgb(85, 168, 156)",yellow:"rgb(168, 136, 85)",blue:"rgb(85, 106, 168)",red:"rgb(168, 85, 85)",violet:"rgb(91, 85, 168)"},le={green:"rgb(36, 198, 168)",yellow:"rgb(202, 151, 0)",blue:"rgb(0, 173, 212)",red:"rgb(204, 89, 53)",violet:"rgb(91, 85, 168)"},ie={daily:"today's",weekly:"week's",monthly:"month's"},oe=n.p+"static/media/kitty.2e5e69a4.svg",de=function(e){return{name:e,tasks:[{name:"Sample Task",desc:"Sample Description",progress:.5,tags:["basic"],subtasks:{"Sample Subtask 1":1,"Sample Subtask 2":0},color:"green",id:108}],selectedTag:null,time:0,upload:!1}},ue=n(521),je=n(530),be=n(296),he=n(518),pe=n(295);var ge=function(e){var t=he.a.Paragraph,n=function(){return e.close()},a=Object(W.b)();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(f.a,{dialogClassName:e.task.color+"Modal",full:!0,open:e.open,onClose:n,children:[Object(T.jsxs)(f.a.Body,{style:{color:"#3c3c3c"},children:[Object(T.jsxs)("div",{className:"modalDesc",children:[Object(T.jsx)("h5",{children:" Description: "}),Object(T.jsx)("div",{className:e.task.desc?"content customScroll":"noContent customScroll",children:e.task.desc?e.task.desc:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("br",{}),"Nothing here!",Object(T.jsx)(t,{color:"red",a:!0,rows:3,active:!0})]})})]}),Object(T.jsxs)("div",{className:"modalSubtasks",children:[Object(T.jsx)("h5",{children:" Subtasks: "}),Object(T.jsxs)("div",{className:Object.keys(e.task.subtasks).length?"content customScroll":"noContent customScroll",children:[Object.keys(e.task.subtasks).length?"":Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("br",{}),"Nothing here! ",Object(T.jsx)(t,{color:"red",a:!0,rows:3,active:!0})]}),Object.keys(e.task.subtasks).map((function(t,s){return Object(T.jsx)("div",{style:{color:"#3c3c3c",fontWeight:"bolder"},children:Object(T.jsxs)(pe.a,{checked:e.task.subtasks[t],onChange:function(s,c){var r={},l={};Object.assign(r,e.task),Object.assign(l,r.subtasks),l[t]=c,r.subtasks=l;var i=0;Object.keys(r.subtasks).map((function(e){return 1==r.subtasks[e]?i+=1:""}));var o=i/(Object.keys(r.subtasks).length?Object.keys(r.subtasks).length:1);if(1==o&&1!=e.task.progress){var d=window.confirm("Hey, you have completed all subtasks. Marks this task as complete?");r.progress=.99,d&&(r.progress=1,n()),setTimeout((function(){return a(e.edit(r))}),500)}else if(1!=o&&1==e.task.progress){d=window.confirm("Unchecking this subtask will make the task incomplete. Are you sure?");r.progress=1,d&&(r.progress=o,n(),setTimeout((function(){return a(e.edit(r))}),500))}else r.progress=o,a(e.edit(r))},children:[" ",t]})},s)}))]})]})]}),Object(T.jsx)(f.a.Footer,{children:Object(T.jsx)(O.a,{onClick:n,appearance:"primary",children:"Ok"})})]})})};var me=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],c=n[1],r=Object(W.b)();function i(t){var n={},a={};Object.assign(n,e.task),Object.assign(a,n.subtasks),Object.keys(a).map((function(e){return a[e]=t})),n.subtasks=a,n.progress=t,r(e.edit(n))}return Object(T.jsxs)(g.a,{className:"fade-in",xs:24,sm:12,md:12,lg:8,style:{marginBottom:"1rem",borderRadius:"1rem"},children:[Object(T.jsxs)(ue.a,{shaded:!0,style:{background:ce[e.task.color],height:"9rem"},children:[Object(T.jsx)("div",{className:"icons",style:{fontSize:"1.25rem",position:"absolute",right:"1rem"},onClick:function(){return e.handleOpen(e.task)},children:Object(T.jsx)(w.c,{})}),Object(T.jsxs)(je.a,{className:"customScroll",style:{width:"90%",overflow:"scroll",whiteSpace:"nowrap"},children:[null==e.selectedTag?"":Object(T.jsxs)(be.a,{size:"md",color:e.task.color,style:{borderColor:le[e.task.color],borderWidth:"1.5px",color:"white",borderStyle:"solid",borderRadius:"1rem",fontWeight:"600",background:le[e.task.color]},onClick:function(){return e.handleTagSelect(e.selectedTag)},children:[" ",Object(T.jsx)("div",{children:e.selectedTag[0].toUpperCase()+e.selectedTag.slice(1)})]}),e.task.tags.filter((function(t){return t!=e.selectedTag})).map((function(t,n){return Object(T.jsxs)(be.a,{size:"md",color:e.task.color,style:{borderColor:re[e.task.color],borderWidth:"1.5px",color:"black",borderStyle:"solid",borderRadius:"1rem",fontWeight:"400"},onClick:function(){return e.handleTagSelect(t)},children:[" ",Object(T.jsx)("div",{children:t[0].toUpperCase()+t.slice(1)})]},n)}))]}),Object(T.jsx)("div",{className:"customScroll",onClick:function(){return c(!0)},style:{position:"absolute",paddingTop:"0.75rem",fontWeight:"bold",color:"#3c3c3c",fontSize:"larger",whiteSpace:"nowrap",overflow:"scroll",width:"80%"},children:e.task.name}),Object(T.jsxs)("div",{onClick:function(){return c(!0)},style:{position:"absolute",bottom:"0.75rem",width:"50vw",color:"#3c3c3c",fontSize:"small",lineHeight:"1.25rem",fontWeight:"400"},children:[Object(T.jsx)(S.h,{})," ",Object.keys(e.task.subtasks).length," subtasks.",Object(T.jsx)("br",{}),Object(T.jsx)(S.c,{})," ",(100*e.task.progress).toFixed(),"% completed"]}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"icons",style:{fontSize:"1rem",position:"absolute",right:"1.15rem",bottom:"2.5rem",display:""},onClick:function(){return e.handleDelete(e.task)},children:Object(T.jsx)(S.f,{})}),Object(T.jsx)("div",{className:"icons",style:{fontSize:"1.25rem",position:"absolute",right:"1rem",bottom:"0.5rem"},children:1===e.task.progress?Object(T.jsx)(S.e,{onClick:function(){return i(0)}}):Object(T.jsx)(S.d,{onClick:function(){return i(1)}})})]}),Object(T.jsx)(ge,{edit:function(t){return e.edit(t)},task:e.task,open:s,close:function(){return c(!1)}})]})};var fe=function(e){var t=Object(W.b)(),n=Object(a.useState)(!1),s=Object(l.a)(n,2),c=s[0],r=s[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),j=u[0],b=u[1],h=Object(a.useState)("ongoing"),m=Object(l.a)(h,2),f=m[0],k=m[1],v=Object(a.useState)(!1),w=Object(l.a)(v,2),C=w[0],I=w[1],N=Object(a.useState)(""),D=Object(l.a)(N,2),B=D[0],F=D[1],L=Object(a.useState)(["basic","personal"]),_=Object(l.a)(L,2),R=_[0],U=_[1],P=Object(a.useState)({}),H=Object(l.a)(P,2),G=H[0],K=H[1],M=Object(a.useState)(""),V=Object(l.a)(M,2),X=V[0],Y=V[1],ce=Object(a.useState)(se[0].value),re=Object(l.a)(ce,2),le=re[0],ue=re[1],je=Object(a.useState)(0),be=Object(l.a)(je,2),he=be[0],pe=be[1],ge=Object(a.useState)(ae),fe=Object(l.a)(ge,2),Oe=fe[0],ye=fe[1],xe=Object(W.c)((function(t){return t[e.title].tasks.filter((function(n){return null==t[e.title].selectedTag||n.tags.includes(t[e.title].selectedTag)}))})),ke=xe.filter((function(e){return 1!=e.progress})),ve=xe.filter((function(e){return 1==e.progress})),we=Object(W.c)((function(t){return t[e.title].selectedTag})),Se=Object(W.c)((function(t){return t[e.title].time})),Te=Object(W.c)((function(t){return t.general.stacc[e.title]})),Ce=Object(W.c)((function(t){return t.general.sync[e.title]})),Ie=Object(W.c)((function(e){return e.general.accessToken})),Ne=Object(W.c)((function(t){return t.general.id[e.title]})),De=Object(W.c)((function(e){return e.general.signedIn})),ze=Object(W.c)((function(t){return t[e.title].upload}));function Ae(n){var a=!1,s="";switch(e.title){case"daily":a=new Date(n).getDate()-(new Date).getDate()!=0&&"true"==localStorage.getItem("autoTrash"),s="day";break;case"weekly":a=0==(new Date).getDay()&&new Date(new Date(n).toString().split(" ").slice(0,4).join(" ")).getTime()-new Date((new Date).toString().split(" ").slice(0,4).join(" ")).getTime()!=0&&"true"==localStorage.getItem("autoTrash"),s="week";break;case"monthly":a=0==(new Date).getDate()&&new Date(new Date(n).toString().split(" ").slice(0,4).join(" ")).getTime()-new Date((new Date).toString().split(" ").slice(0,4).join(" ")).getTime()!=0&&"true"==localStorage.getItem("autoTrash"),s="month"}a?window.confirm("These tasks are one "+s+" old. Trash 'em?")?(t(e.actions.set({tasks:[],time:(new Date).getTime()})),localStorage.setItem(e.title,{tasks:[],time:(new Date).getTime()}),Fe()):(t(e.actions.updateTime()),localStorage.setItem(e.title,JSON.stringify({tasks:xe,time:n}))):console.log("no autotrash")}function Be(n){var a=xe.indexOf(n);window.confirm("Delete this task?")&&t(e.actions.delete(a))}function Fe(){return Le.apply(this,arguments)}function Le(){return(Le=Object(d.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return I(!0),t(q(!0)),n.next=4,z(Ie,e.title,localStorage.getItem(e.title),Ne);case 4:a=n.sent,console.log(a),t(q(!1)),I(!1);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(e);var t=null!=e;b(t?"Edit":"Add"),F(t?e.name:""),Re(t?e.tags:null),U(t?e.tags:["basic","personal"]),K(t?e.subtasks:{}),Y(t?e.desc:""),ue(t?e.color:se[0].value),console.log(le),pe(t?e.id:0),r(!0)}function _e(n){t(we==n?e.actions.selectTag(null):e.actions.selectTag(n)),console.log(we)}function Re(e){if(null==e)ye(ae);else{var t=["basic","important","urgent","works","personal"],n=ae.slice();e.forEach((function(e){t.includes(e)||n.push({label:e,value:e})})),ye(n)}}return Object(a.useEffect)(Object(d.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Te?(localStorage.setItem(e.title,JSON.stringify({tasks:xe,time:Se})),De&&Te&&0!=Ne&&ze&&!C&&(t(e.actions.setUpload(!1)),Fe())):(localStorage.getItem(e.title)?(t(e.actions.delete(0)),t(e.actions.set(JSON.parse(localStorage.getItem(e.title))))):localStorage.setItem(e.title,JSON.stringify({tasks:de(e.title).tasks,time:0})),t(E({list:e.title,value:1}))),!De||!Te||Ce||0==Ne){n.next=9;break}return t(J({list:e.title,value:1})),n.next=5,A(Ie,Ne);case 5:a=n.sent,JSON.parse(a).time>Se?window.confirm("There are newer "+e.title+" tasks available, replace current ones?")?(t(e.actions.set(JSON.parse(a))),localStorage.setItem(e.title,a)):Fe():(console.log("uploading current"),Fe()),Ae(Se);case 9:case"end":return n.stop()}}),n)})))),Object(T.jsxs)("div",{style:{height:"100vh"},children:[Object(T.jsxs)("div",{className:"staccHeader",style:{background:"rgba(14, 18, 25)",position:"sticky",top:"4rem",zIndex:"995",paddingBottom:"0.75rem"},children:[Object(T.jsx)("span",{style:{marginLeft:"1.5rem",fontSize:"larger"},children:"welcome back!"}),Object(T.jsxs)("h3",{style:{marginLeft:"1.5rem"},children:[ie[e.title]," tasks:"]}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{style:{padding:"0 0.5rem"},children:Object(T.jsx)(p.a,{style:{width:"95vw"},children:Object(T.jsx)(g.a,{xs:24,sm:12,md:8,lg:8,children:Object(T.jsxs)(x.a,{justified:!0,activeKey:f,onSelect:function(e){k(e),r(!1)},style:{margn:"0.5rem"},className:"staccTabs",children:[Object(T.jsx)(x.a.Item,{eventKey:"ongoing",children:Object(T.jsx)("span",{children:"ongoing"})}),Object(T.jsx)(x.a.Item,{eventKey:"completed",children:Object(T.jsx)("span",{className:"staccTabs",children:"completed"})})]})})})})]}),Object(T.jsx)("br",{}),Object(T.jsxs)(p.a,{style:{margin:"1rem"},children:["completed"==f&&!ve.length||"completed"!=f&&!ke.length?Object(T.jsxs)("div",{style:{width:"90vw",display:"flex",justifyContent:"center"},children:[Object(T.jsx)("img",{style:{height:"35vh"},src:oe,alt:"No tasks!"})," "]}):"",ke.map((function(t,n){return Object(T.jsx)("div",{style:"ongoing"==f?{display:"unset"}:{display:"none"},children:Object(T.jsx)(me,{task:t,selectedTag:we,handleDelete:function(e){return Be(e)},handleOpen:function(e){return We(e)},handleTagSelect:function(e){return _e(e)},edit:function(t){return e.actions.edit(t)}})},n)})),ve.map((function(t){return Object(T.jsx)("div",{style:"ongoing"!=f?{display:"unset"}:{display:"none"},children:Object(T.jsx)(me,{task:t,selectedTag:we,handleDelete:function(e){return Be(e)},handleOpen:function(e){return We(e)},handleTagSelect:function(e){return _e(e)},edit:function(t){return e.actions.edit(t)}})})}))]}),Object(T.jsx)("br",{}),Object(T.jsxs)(y.a,{size:"lg",placement:"bottom",open:c,onClose:function(){return r(!1)},children:[Object(T.jsxs)(y.a.Header,{children:[Object(T.jsxs)(y.a.Title,{children:[j," Task @"," ",e.title[0].toUpperCase()+e.title.slice(1)]}),Object(T.jsx)(y.a.Actions,{children:Object(T.jsx)($.a,{placement:"leftStart",data:se,defaultValue:le,style:{width:"6rem"},searchable:!1,placeholder:"Color",renderMenuItem:function(e,t){return Object(T.jsx)("div",{style:{color:t.hex},children:e})},renderValue:function(e,t){return Object(T.jsx)("div",{style:{color:t.hex},children:t.label})},onChange:function(e,t){null==e&&(e="green"),ue(e)}})})]}),Object(T.jsx)(y.a.Body,{children:Object(T.jsxs)(Q.a,{children:[Object(T.jsxs)(Q.a.Group,{controlId:"name",children:[Object(T.jsx)(Q.a.ControlLabel,{children:"Task Name"}),Object(T.jsx)(Z.a,{value:B,onChange:function(e,t){return F(e)}}),Object(T.jsx)(Q.a.HelpText,{children:"Task name is required"})]}),Object(T.jsxs)(Q.a.Group,{controlId:"tags",children:[Object(T.jsx)(Q.a.ControlLabel,{children:"Tags"}),Object(T.jsx)(ee.a,{creatable:!0,data:Oe,defaultValue:R,style:{width:300},menuStyle:{width:250},placeholder:"Add tags",onChange:function(e,t){null==e&&(e=[]),U(e)},trigger:"Comma"})]}),Object(T.jsxs)(Q.a.Group,{controlId:"desc",children:[Object(T.jsx)(Q.a.ControlLabel,{children:"Desciption"}),Object(T.jsx)(Z.a,{as:"textarea",rows:3,placeholder:"Textarea",value:X,onChange:function(e,t){Y(e)}})]}),Object(T.jsxs)(Q.a.Group,{controlId:"subtasks",children:[Object(T.jsx)(Q.a.ControlLabel,{children:"Subtasks"}),Object(T.jsx)("div",{children:Object(T.jsx)(te.a,{trigger:["Enter","Comma"],value:Object.keys(G),style:{width:300},placeholder:"Add subtasks",onChange:function(e,t){var n={};Object.assign(n,G);var a=Object.keys(G);a.map((function(t){e.includes(t)||delete n[t]})),a=Object.keys(n),e.map((function(e){a.includes(e)||(n[e]=0)})),K(n)}})}),Object(T.jsx)(Q.a.HelpText,{children:"Press enter to separate subtasks"})]}),Object(T.jsx)(Q.a.Group,{children:Object(T.jsxs)(ne.a,{children:[Object(T.jsx)(O.a,{appearance:"primary",onClick:function(){return"Add"==j?void(""!=B?(t(e.actions.add({name:B,desc:X,subtasks:G,tags:R,color:le,id:(new Date).getTime(),progress:0})),r(!1)):alert("Please enter Task Name")):function(){if(""!=B){var n,a=0;Object.keys(G).map((function(e){return!0===G[e]?a+=1:""})),n=a/(Object.keys(G).length?Object.keys(G).length:1),t(e.actions.edit({name:B,desc:X,subtasks:G,tags:R,color:le,id:he,progress:n})),r(!1)}else alert("Please enter Task Name")}()},children:"Save"}),Object(T.jsx)(O.a,{appearance:"default",onClick:function(){return r(!1)},children:"Cancel"})]})})]})})]}),Object(T.jsx)("div",{className:"footerAdd",children:Object(T.jsx)(O.a,{onClick:function(){return We()},style:{justifyContent:"center",background:"whitesmoke"},children:Object(T.jsxs)("div",{style:{fontWeight:"600",fontSize:"larger",padding:"0 0.25rem",color:"#3c3c3c"},children:[" ",Object(T.jsx)(S.a,{fontSize:"1rem",style:{position:"absolute",left:"0.25rem",margin:"3px 0.75rem"}}),Object(T.jsx)("span",{style:{paddingLeft:"1.25rem"},children:" Add Task "})," "]})})})]})},Oe=n(519),ye=n(154),xe=n(292);var ke=function(e){var t=Object(W.b)(),n=Object(a.useState)("true"==localStorage.getItem("autoTrash")),s=Object(l.a)(n,2),c=s[0],r=s[1],i=Object(ye.b)({onSuccess:function(){var e=Object(d.a)(o.a.mark((function e(n){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.code,e.next=3,I.a.post("https://ninth-matter-357304.el.r.appspot.com/auth/google",{code:a});case 3:s=e.sent,t(K(s.data.access_token)),localStorage.setItem("access_token",s.data.access_token),localStorage.setItem("refresh_token",s.data.refresh_token),t(H(!0)),t(P(1)),console.log(s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),flow:"auth-code",scope:"https://www.googleapis.com/auth/drive.appdata"}),u=Object(W.c)((function(e){return e.general.signedIn}));return Object(T.jsx)("div",{style:{margin:"1.5rem"},children:Object(T.jsxs)("div",{style:{fontWeight:"500"},children:[Object(T.jsxs)("div",{id:"account_header",children:[Object(T.jsx)("h3",{children:"sync"}),Object(T.jsx)(Oe.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},checked:u,onChange:function(){u?(localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t(H(!1)),t(P(0))):i()}})]}),"signing in ensures you don't lose data when you switch or reset browsers. it also syncs across devices :)",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{id:"autotrash_header",children:[Object(T.jsx)("h3",{children:"autotrash"}),Object(T.jsx)(Oe.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},checked:c,onChange:function(){r(!c),localStorage.setItem("autoTrash",!c)}})]}),"autotrash cleans all your tasks at the end of the day/week/month to start fresh!!",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("h3",{children:"other settings:"}),Object(T.jsx)(xe.a,{})," coming soon..."]})})},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function we(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,533)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},Te=n(271),Ce={setTasks:function(e,t){e.tasks=t.payload.tasks,e.time=t.payload.time},addTask:function(e,t){e.tasks.unshift(t.payload),e.time=(new Date).getTime(),e.upload=!0},deleteTask:function(e,t){console.log(108,t.payload),e.tasks.splice(t.payload,1),e.time=(new Date).getTime(),e.upload=!0},editTask:function(e,t){e.tasks.map((function(n){n.id==t.payload.id&&(e.tasks[e.tasks.indexOf(n)]=t.payload)})),e.time=(new Date).getTime(),e.upload=!0},setUpload:function(e,t){e.upload=t.payload},updateTime:function(e){console.log("time refeshed"),e.time=(new Date).getTime()},selectTag:function(e,t){e.selectedTag=t.payload}},Ie=Ce,Ne=Object(_.b)({name:"daily",initialState:de("daily"),reducers:Ie}),De=Ne.actions,ze=De.addTask,Ae=De.deleteTask,Be=De.editTask,Fe={set:De.setTasks,add:ze,edit:Be,delete:Ae,updateTime:De.updateTime,selectTag:De.selectTag,setUpload:De.setUpload},Le=Ne.reducer,We=Object(_.b)({name:"weekly",initialState:de("weekly"),reducers:Ie}),_e=We.actions,Re=_e.addTask,Ue=_e.deleteTask,Pe=_e.editTask,He={set:_e.setTasks,add:Re,edit:Pe,delete:Ue,updateTime:_e.updateTime,selectTag:_e.selectTag,setUpload:_e.setUpload},Ee=We.reducer,Je=Object(_.b)({name:"monthly",initialState:de("monthly"),reducers:Ie}),Ge=Je.actions,Ke=Ge.addTask,Me=Ge.deleteTask,qe=Ge.editTask,Ve={set:Ge.setTasks,add:Ke,edit:qe,delete:Me,updateTime:Ge.updateTime,selectTag:Ge.selectTag,setUpload:Ge.setUpload},Xe=Je.reducer,Ye=Object(_.a)({reducer:{general:V,daily:Le,weekly:Ee,monthly:Xe}}),$e=n(532),Qe=n(293);var Ze=function(){return Object(T.jsx)("div",{style:{margin:"1rem"},children:Object(T.jsxs)("div",{style:{},children:[Object(T.jsxs)($e.a,{shape:"bar",className:"custom-slider",autoplay:!0,autoplayInterval:2500,children:[Object(T.jsx)("span",{className:"carouselItem",children:"eeh"}),Object(T.jsx)("span",{className:"carouselItem",children:"just a simple beautiful task manager"}),Object(T.jsx)("span",{className:"carouselItem",children:"check the github repo :)"})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsxs)(ue.a,{header:"About stacc v0.1",bordered:!0,children:[Object(T.jsx)("p",{children:"stacc is a simple task manager created with functionality in mind. Create tasks, track their progresses and access them anywhere from any device with auto sync!"}),Object(T.jsx)("p",{children:"This client app is built using React with React Suite, Redux, and React Router. Sync is enabled using the Google Drive API."}),Object(T.jsxs)("div",{style:{padding:"1rem 0 0",textAlign:"center",display:"flex",alignContent:"center"},children:[Object(T.jsx)(Qe.a,{style:{fontSize:"18px"}})," ",Object(T.jsx)("a",{style:{padding:"0 0.5rem"},target:"_blank",href:"https://github.com/stravo1/stacc",children:"Github"})]})]})]})})},et=n.p+"static/media/404.a6458711.svg";var tt=function(){return Object(T.jsxs)("div",{style:{display:"grid",width:"90vw"},children:[Object(T.jsx)("img",{src:et,alt:"404 error logo",style:{height:"33vh"}}),Object(T.jsx)("br",{}),Object(T.jsx)("h2",{style:{textAlign:"center"},children:"Not found!"})]})};r.a.render(Object(T.jsx)(ye.a,{clientId:"25256502274-6b15ibif1usnm9rtbi4blennjrvrl5lm.apps.googleusercontent.com",children:Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(k.a,{children:Object(T.jsx)(Te.a,{theme:"dark",children:Object(T.jsx)(u.d,{children:Object(T.jsxs)(u.b,{path:"/",element:Object(T.jsx)(W.a,{store:Ye,children:Object(T.jsx)(Y,{})}),children:[Object(T.jsx)(u.b,{index:!0,element:Object(T.jsx)(fe,{title:"daily",actions:Fe})}),Object(T.jsx)(u.b,{path:"stacc",element:Object(T.jsx)(fe,{title:"daily",actions:Fe})}),Object(T.jsx)(u.b,{path:"daily",element:Object(T.jsx)(fe,{title:"daily",actions:Fe})}),Object(T.jsx)(u.b,{path:"weekly",element:Object(T.jsx)(fe,{title:"weekly",actions:He})}),Object(T.jsx)(u.b,{path:"monthly",element:Object(T.jsx)(fe,{title:"monthly",actions:Ve})}),Object(T.jsx)(u.b,{path:"settings",element:Object(T.jsx)(ke,{})}),Object(T.jsx)(u.b,{path:"about",element:Object(T.jsx)(Ze,{})}),Object(T.jsx)(u.b,{path:"*",element:Object(T.jsx)(tt,{})})]})})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stacc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stacc","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):we(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):we(t,e)}))}}(),Se()}},[[503,1,2]]]);
//# sourceMappingURL=main.99478417.chunk.js.map