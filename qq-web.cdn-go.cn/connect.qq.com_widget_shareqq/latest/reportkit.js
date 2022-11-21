(function(){var o=this,t=o.Q,a=o.Q={};a.mix=function(t,n,e,o){if(!n||!t)return t;void 0===e&&(e=!0);var i,r={};if(o&&(i=o.length))for(var a=0;a<i;a++)r[o[a]]=!0;for(var c in n)(!e||c in r)&&c in t||(t[c]=n[c]);return t},a.getTimestamp=function(){return+new Date},a.template=function(t,e){return t.replace(/\$\{(\w+)\}/g,function(t,n){return e[n]?e[n]:""})},a.on=function(t,n,e){t.attachEvent?t.attachEvent("on"+n,e):t.addEventListener(n,e,!1)};var c=[],n=!1;a.report=function(t,n){var e=0,o=c.length;if(n=n||2e3,c[0]){for(var i=0;i<o;i++){var r=c.shift();r&&(r.isTicking=!1,r(function(){++e===o&&t&&!t.isCalled&&(t.isCalled=!0,t())}))}t&&setTimeout(function(){t.isCalled||(t.isCalled=!0,t())},n)}else t&&t();a.tick.isTicking=!1},a.report.delay=500,a.tick=function(t){t.isTicking||(t.isTicking=!0,c.push(t)),a.tick.isTicking||(setTimeout(a.report,a.report.delay),a.tick.isTicking=!0),n||(a.on(window,"beforeunload",function(t){a.report()}),n=!0)};var i=a.getTimestamp();a.send=function(t,n){t+="&t="+(i+=1);var e="__tc_global_image_"+i;o[e]=new Image,n&&(o[e].onload=o[e].onerror=function(){n(),o[e]=null}),o[e].src=t},a.ninja=function(){return o.Q=t,this}})(),Q.mix(Q,{error:function(i){window.onerror=function(t,n,e){i&&Q.monitor(i);var o="https://badjs.qq.com/cgi-bin/js_report?"+["bid=130","","msg="+encodeURIComponent([t,n,e,navigator.userAgent].join("|_|"))].join("&");Q.send(o)}}}),function(){function u(t,n,e,o){for(var i,r=[],a=o[0],c=1,s=o.length;c<s;c++)0<(i=(i=o[c])?i-a:0)&&r.push(c+"="+i);var d=m+"flag1="+t+"&flag2="+n+"&flag3="+e+"&"+r.join("&");Q.send(d)}function o(t,n,e){if(!(this instanceof o))return new o(t,n,e);this.f1=t,this.f2=n,this.f3=e,this.timing=[]}var m="https://isdspeed.qq.com/cgi-bin/r.cgi?";o.prototype.mark=function(t){return this.timing.push(t||Q.getTimestamp())},o.prototype.report=function(){u(this.f1,this.f2,this.f3,this.timing)},Q.mix(Q,{isd:u,performance:function(t,n,e,o){var i,r=window.webkitPerformance?window.webkitPerformance:window.msPerformance,a=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],c=e;if((r=r||window.performance)&&(i=r.timing)){i.domContentLoadedEventStart&&o?c=o:i.domContentLoadedStart?(a.splice(15,2,"domContentLoadedStart","domContentLoadedEnd"),o&&(c=o)):a.splice(15,2,"domContentLoaded","domContentLoaded");for(var s=[],d=0,m=a.length;d<m;d++)s[d]=i[a[d]];u(t,n,c,s)}},speed:o})}(),function(){function m(t){if(p[0]){for(var n,e,o,i=[],r=0,a=p.length;r<f&&r<a;r++){(o=p.shift()).nvalue?i.push([o.obj||l.obj||0,o.nvalue,o.elt].join("_")):o.obj&&(n={opername:o.opername||l.opername,name:o.name||l.name,action:o.action||l.action,obj:o.obj},e=Q.template('{"opername":"${opername}","name":"${name}","action":"${action}","obj":"${obj}"}',n),i.push([e,0,o.elt].join("_")))}var c,s,d=u+"tag=0&log="+encodeURIComponent(i.join("|"));p[0]?(c=0,s=function(){2==++c&&t()},Q.send(d,s),m(s)):Q.send(d,t)}else t&&t()}var u="https://cgi.connect.qq.com/report/report_vm?",f=6,p=[],l={};Q.mix(Q,{bernoulli:function(t,n,e){var o={},i=typeof t;"number"==i?(o.nvalue=t,n&&(o.obj=n)):"object"==i?o=t:"string"==i&&(o={obj:t}),o.elt=e||0,p.push(o),Q.tick(m)},bernoulliSetup:function(t){return l=Q.mix(l,t)}})}(),function(){function i(t){return n+"monitors=["+t+"]"}function r(t){var n;a[0]?(n=i(a),a=[],Q.send(n,t)):t&&t()}var n="https://cgi.connect.qq.com/report/report_vm?",a=[];Q.mix(Q,{monitor:function(t,n,e){var o;n?(o=i(t),Q.send(o,e)):(a.push(t),Q.tick(r))}})}(),function(){this.Q=this.Q||{};var i=document,r="r="+Math.random(),a=1e3;Q.ver=function(t){var n,e,o,i=Q.ver;(t.current||i.current)!==(t.latest||i.latest)&&(n=t.target||i.target,e=t.updater||i.updater,n&&(e=e||"http://cdn.qplus.com/vm/clearcache.html",(o=document.createElement("iframe")).src="javascript:false;",o.style.display="none",document.body.appendChild(o),setTimeout(function(){var t="?"+r+"#";o.src=e+t+n},a)))},Q.ver.check=function(o){setTimeout(function(){var t,n,e;t=o,n=i.getElementsByTagName("head")[0]||i.documentElement,(e=i.createElement("script")).src=t+"?"+r,n.insertBefore(e,n.firstChild)},a)},Q.version="0.1.12";var t="https://pub.idqqimg.com/lib/reportkit/";Q.ver.target=t+"latest/reportkit.js",Q.ver.updater=t+"latest/cacheupdater.html",Q.ver.check(t+"latest/version.js")}();