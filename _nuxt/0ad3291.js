(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,r){"use strict";(function(e){var n=r(22),c=(r(36),r(3));function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(r){var n,c,o,time;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.process.hrtime(),t.next=3,r;case 3:return c=t.sent,o=e.process.hrtime(n),time=(1e9*o[0]+o[1])/1e6,t.abrupt("return",[time,c]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f={vercel:"https://sigma-demo.nuxt-js.vercel.app",browser:"https://nuxt.github.io/sigma-demo",netlify:"https://sigma-demo.netlify.app",cloudflare:"",azure:"https://nuxt-sigma.azurewebsites.net",default:""};t.a={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,r,path,c,l,h,m,v,d,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null!==(t=f.browser)&&void 0!==t?t:f.default,path="/api/hello",e.next=4,o($fetch(path).then((function(e){return e.text()})));case 4:return c=e.sent,l=Object(n.a)(c,1),h=l[0],m=r+path,e.next=10,o($fetch(m).then((function(e){return e.text()})));case 10:return v=e.sent,d=Object(n.a)(v,1),w=d[0],e.abrupt("return",{directTime:h,urlTime:w,url:m});case 14:case"end":return e.stop()}}),e)})))()}}}).call(this,r(25))},180:function(e,t,r){"use strict";r.r(t);var n=r(166).a,c=r(8),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("br"),e._v(" "),r("div",[e._v("\n    Direct SSR calls makes fetch super fast!\n    "),r("br"),e._v(" "),r("div",[r("code",[e._v("$fetch('/api/hello')")]),e._v(" "+e._s(e.directTime)+"ms")]),e._v(" "),r("div",[r("code",[e._v("$fetch('"+e._s(e.url)+"')")]),e._v(" "+e._s(e.urlTime)+"ms")])])])}),[],!1,null,null,null);t.default=component.exports}}]);