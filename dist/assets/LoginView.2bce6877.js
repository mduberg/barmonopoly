import{_ as h,i as m,x as c,o as i,c as n,b as s,a as d,u as p,v as g,t as u,F as w}from"./index.f4e8a43c.js";const _={name:"LoginView",data(){return{loginForm:{email:"",password:""},error:{show:!1,msg:""},showSpinner:!1}},methods:{signIn(){this.showSpinner=!0,this.error.show=!1;const a=m();c(a,this.loginForm.email,this.loginForm.password).then(e=>{this.showSpinner=!1;const t=e.user;console.log("signed in ",t),this.$router.push("/home")}).catch(e=>{this.showSpinner=!1;const t=e.code,l=e.message;console.log(t),t=="auth/invalid-email"?(this.error.msg="Ogiltig emailadress",this.error.show=!0):t=="auth/user-not-found"?(this.error.msg="Ingen s\xE5dan anv\xE4ndare hittades. Kontrollera emailadressen eller registrera ett nytt konto.",this.error.show=!0):t=="auth/wrong-password"?(this.error.msg="Felaktigt l\xF6senord.",this.error.show=!0):(this.error.msg="Felaktigt l\xF6sernord eller emailadress.",this.error.show=!0),console.log(t," --> ",l)})},navigateToRegister(){this.$router.push("/register")}}},x={class:"loginContent"},f={key:0,style:{position:"fixed","z-index":"4","font-size":"22px",height:"70px",width:"70px",left:"calc(50vw - 35px)",top:"calc(50vh - 90px)"},class:"spinner-border",role:"status"},v=s("span",{class:"sr-only"},"Loading...",-1),y=[v],F={style:{"text-align":"left",width:"90%",margin:"0 auto"}},b={style:{"margin-top":"30px"}},k={style:{"margin-top":"30px"}},V={style:{"text-align":"center","margin-top":"15px"}},I={style:{"text-align":"center","margin-top":"10px"}},L={key:0,style:{"text-align":"center","margin-top":"40px","max-width":"550px",margin:"40px auto"},class:"alert alert-primary",role:"alert"};function S(a,e,t,l,r,C){return i(),n(w,null,[s("div",x,[this.showSpinner?(i(),n("div",f,y)):d("",!0),s("div",F,[s("div",b,[p(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.loginForm.email=o),type:"email",class:"form-control",id:"exampleInputEmail1",placeholder:"Email"},null,512),[[g,r.loginForm.email]])]),s("div",k,[p(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.loginForm.password=o),type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"L\xF6senord"},null,512),[[g,r.loginForm.password]])]),s("div",V,[s("button",{onClick:e[2]||(e[2]=o=>this.signIn()),class:"btn btn-primary"},"Logga in")])]),s("div",I,[s("button",{onClick:e[3]||(e[3]=o=>this.navigateToRegister()),type:"submit",class:"btn btn-secondary"},"Registrera")])]),this.error.show?(i(),n("div",L,u(this.error.msg),1)):d("",!0)],64)}const $=h(_,[["render",S]]);export{$ as default};
