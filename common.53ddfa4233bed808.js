"use strict";(self.webpackChunkhutopia_management=self.webpackChunkhutopia_management||[]).push([[592],{644:(T,c,s)=>{s.d(c,{y:()=>A});var t=s(1571),d=s(5453),n=s(529),u=s(8505),h=s(262),l=s(2843);let m=(()=>{class r{constructor(e){this.http=e,this.base_url="https://hutopia-api-managment.myviva.net/api/support",this.http_auth_option=new n.WM({Authorization:`Bearer ${localStorage.getItem("auth_token")}`})}getAllSupports(){return new n.LE({fromObject:{search:"",PageNumber:1,PageSize:500}}),this.http.get(`${this.base_url}/getAllSupports`,{headers:this.http_auth_option}).pipe((0,u.b)(o=>console.log("Success")),(0,h.K)(o=>(0,l._)(()=>new Error("Failed to fetch supports"))))}getSupportBySearch(e){let o=new n.LE({fromObject:{search:e,PageNumber:1,PageSize:500}});return this.http.get(`${this.base_url}/getAllSupports`,{headers:this.http_auth_option,params:o}).pipe((0,u.b)(g=>console.log("Success")),(0,h.K)(g=>(0,l._)(()=>new Error("Failed to fetch supports"))))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(n.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var p=s(6895),i=s(383),v=s(3252);function _(r,a){1&r&&(t.TgZ(0,"td"),t._uU(1," resolved "),t.qZA())}function Z(r,a){1&r&&(t.TgZ(0,"td"),t._uU(1," active "),t.qZA())}function f(r,a){if(1&r&&(t.TgZ(0,"tr")(1,"th",6)(2,"div",7)(3,"span",8),t._uU(4),t.qZA()()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.YNc(9,_,2,0,"td",9),t.YNc(10,Z,2,0,"td",9),t.TgZ(11,"td"),t._uU(12," admin101 "),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t._UZ(16,"td"),t.TgZ(17,"td",10)(18,"div",11)(19,"a",12),t._UZ(20,"i",13),t.qZA(),t.TgZ(21,"div",14)(22,"a",15),t._uU(23,"Edit"),t.qZA(),t.TgZ(24,"a",15),t._uU(25,"Hold"),t.qZA(),t.TgZ(26,"a",15),t._uU(27,"Delete"),t.qZA()()()()()),2&r){const e=a.$implicit;t.xp6(4),t.Oqu(e.EnterpriseName),t.xp6(2),t.hij(" ",e.Title," "),t.xp6(2),t.hij(" ",e.Message," "),t.xp6(1),t.Q6J("ngIf",1===e.Status),t.xp6(1),t.Q6J("ngIf",0===e.Status),t.xp6(4),t.hij(" ",t.xi3(15,6,e.CreatedAt,"yyyy-MM-dd")," ")}}let A=(()=>{class r{constructor(e,o){this.router=e,this.customer_support_data_service=o,this.title="List of Supports: ",this.search_keyword=""}ngOnInit(){null!==localStorage.getItem("auth_token")?this.getAllSupports():this.router.navigate(["/login"])}getAllSupports(){this.customer_support_data_service.getAllSupports().subscribe({next:e=>{this.supports=e.data,this.info=this.supports.length+" active supports"},error:e=>console.error(e)})}receiveSearchKeyword(e){this.search_keyword=e,this.customer_support_data_service.getSupportBySearch(e).subscribe({next:o=>{this.supports=o.data},error:o=>console.error(o)})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.F0),t.Y36(m))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-register"]],decls:22,vars:3,consts:[[3,"nav_title","nav_value","search_keyword_event"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"media-body"],[1,"mb-0","text-sm"],[4,"ngIf"],[1,"text-right"],["ngbDropdown","","placement","bottom-right"],["ngbDropdownToggle","",1,"btn","btn-sm","btn-icon-only","text-light"],[1,"fas","fa-ellipsis-v"],["ngbDropdownMenu","",1,"dropdown-menu-right","dropdown-menu-arrow"],["href","javascript:void(0)",1,"dropdown-item"]],template:function(e,o){1&e&&(t.TgZ(0,"app-navbar",0),t.NdJ("search_keyword_event",function(S){return o.receiveSearchKeyword(S)}),t.qZA(),t.TgZ(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Enterprise Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Message"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Status"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Resolved By"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Created At"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"Resolved At"),t.qZA(),t._UZ(19,"th",4),t.qZA()(),t.TgZ(20,"tbody"),t.YNc(21,f,28,9,"tr",5),t.qZA()()()),2&e&&(t.Q6J("nav_title",o.title)("nav_value",o.info),t.xp6(21),t.Q6J("ngForOf",o.supports))},dependencies:[p.sg,p.O5,i.jt,i.iD,i.Vi,v.S,p.uU]}),r})()}}]);