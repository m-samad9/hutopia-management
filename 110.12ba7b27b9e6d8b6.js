"use strict";(self.webpackChunkhutopia_management=self.webpackChunkhutopia_management||[]).push([[110],{6110:(M,p,r)=>{r.r(p),r.d(p,{AuthLayoutModule:()=>L});var g=r(3599),d=r(6895),i=r(433),t=r(1571),u=r(529),c=r(8505),m=r(4004),h=r(262),v=r(2843);let f=(()=>{class o{constructor(e){this.http=e,this.base_url="https://hutopia-api-managment.myviva.net/api",this.http_json_option={headers:new u.WM({"content-type":"application/json"})}}login(e,n){return this.http.post(`${this.base_url}/auth/login`,{email:e,password:n},this.http_json_option).pipe((0,c.b)(a=>console.log("Success")),(0,m.U)(a=>(localStorage.setItem("auth_token",a.data.token),a)),(0,h.K)(a=>(0,v._)(()=>new Error(a.error.message))))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(u.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function y(o,s){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.error_message," ")}}const C=[{path:"login",component:(()=>{class o{constructor(e,n){this.router=e,this.auth_data_service=n,this.email="",this.password="",this.is_logged_in=!1,this.error_occured=!1,this.error_message=""}ngOnInit(){}ngOnDestroy(){}login(e,n){this.auth_data_service.login(e,n).subscribe({next:a=>{this.is_logged_in=!0,this.router.navigate(["/dashboard"])},error:a=>{this.error_occured=!0,this.error_message=a.message}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.F0),t.Y36(f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:30,vars:3,consts:[[1,"header","py-7","py-lg-8"],[1,"container"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent"],[1,"btn-inner--icon"],["src","assets/img/H_logotype blue red- version full.svg","alt",""],[1,"card-body","px-lg-5","py-lg-5"],["role","form"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4",3,"click"],["class","alert alert-danger","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"polygon",4),t.qZA()()(),t.kcU(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"span",10),t._UZ(11,"img",11),t.qZA()(),t.TgZ(12,"div",12)(13,"form",13)(14,"div",14)(15,"div",15)(16,"div",16)(17,"span",17),t._UZ(18,"i",18),t.qZA()(),t.TgZ(19,"input",19),t.NdJ("ngModelChange",function(l){return n.email=l}),t.qZA()()(),t.TgZ(20,"div",20)(21,"div",15)(22,"div",16)(23,"span",17),t._UZ(24,"i",21),t.qZA()(),t.TgZ(25,"input",22),t.NdJ("ngModelChange",function(l){return n.password=l}),t.qZA()()(),t.TgZ(26,"div",23)(27,"button",24),t.NdJ("click",function(){return n.login(n.email,n.password)}),t._uU(28,"Sign in"),t.qZA()()(),t.YNc(29,y,2,1,"div",25),t.qZA()()()()()),2&e&&(t.xp6(19),t.Q6J("ngModel",n.email),t.xp6(6),t.Q6J("ngModel",n.password),t.xp6(4),t.Q6J("ngIf",n.error_occured))},dependencies:[d.O5,i._Y,i.Fj,i.JJ,i.JL,i.On,i.F]}),o})()},{path:"register",component:r(644).y}];let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,g.Bz.forChild(C),i.u5]}),o})()}}]);