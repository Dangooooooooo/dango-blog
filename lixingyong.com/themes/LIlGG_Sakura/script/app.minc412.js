"use strict";var LIlGGAttachContext={PJAX:function PJAX(){LIlGGAttachContext.LA();LIlGGAttachContext.BGEVEN();if(Poi.headFocus&&Poi.bgvideo)LIlGGAttachContext.BGV().bgPause();LIlGGAttachContext.CBG().changeSkinSecter();try{$("#to-load-aplayer").on("click",function(){reloadAplayer();$("div").remove(".load-aplayer")});if($("div").hasClass("aplayer")){reloadAplayer()}}catch(e){}Poi.toc&&LIlGGAttachContext.TOC();PageAttr.isPost==="true"&&LIlGGAttachContext.POST_CONTEXT();LIlGGAttachContext.CHS();LIlGGAttachContext.PHO();LIlGGAttachContext.CMN();LIlGGAttachContext.SS();I18N.init()},BGV:function BGV(){var $bg_video_btn=$("#video-btn"),$bg_video=$("#bgvideo"),$bg_video_stu=$(".video-stu"),$bg_video_add=$("#video-add"),dom=$bg_video[0],flvPlayer,mediaBlob;var bindBgVideoEvent=function bindBgVideoEvent(){$bg_video_btn.on("click",function(){if($(this).hasClass("loadvideo")){$(this).removeClass("loadvideo").hide();loadSource()}else{if($(this).hasClass("video-pause")){bgPause();$bg_video_btn.removeClass("videolive")}else{bgPlay();$bg_video_btn.addClass("videolive")}}});dom.oncanplay=function(){bgPlay();$bg_video_add.show();$bg_video_btn.addClass("videolive");$bg_video_btn.addClass("haslive")};dom.onended=function(){defaultStyle();flvPlayer.pause();flvPlayer.unload();flvPlayer.detachMediaElement();flvPlayer.destroy();flvPlayer=null};$bg_video_add.on("click",function(){loadSource()})};var defaultStyle=function defaultStyle(){$bg_video_add.hide();$bg_video_btn.addClass("loadvideo").removeClass("video-pause");$bg_video_btn.removeClass("videolive");$bg_video_btn.removeClass("haslive");$(".focusinfo").css({top:"49.3%"})};var bgPlay=function bgPlay(){$bg_video_btn.addClass("video-pause").removeClass("video-play").show();$bg_video_stu.css({bottom:"-100px"});$(".focusinfo").css({top:"-999px"});$("#banner_wave_1").addClass("banner_wave_hide");$("#banner_wave_2").addClass("banner_wave_hide");flvPlayer.play()};var bgPause=function bgPause(){if(dom.oncanplay!=undefined&&$(".haslive").length>0){$bg_video_btn.addClass("video-play").removeClass("video-pause");$bg_video_stu.css({bottom:"0px"}).html("已暂停 ...");$(".focusinfo").css({top:"49.3%"});$("#banner_wave_1").removeClass("banner_wave_hide");$("#banner_wave_2").removeClass("banner_wave_hide");dom.pause()}};try{var loadSource=function loadSource(){function handleResult(result){var config;$bg_video_stu.html("正在载入视频 ...").css({bottom:"0px"});switch(result.server){case"bilibili":switch(result.type){case"mp4":result["url"]=result["playUrl"][0]["url"];break;case"m4s":throw new RuntimeException("目前暂不支持m4s格式");default:if(result.type.indexOf("flv")!=-1){result.type="flv"}result["segments"]=result["playUrl"];for(var i=0;i<result["segments"].length;i++){result["segments"][i]["duration"]=result["segments"][i]["length"];result["segments"][i]["filesize"]=result["segments"][i]["size"]}var isCache=result["segments"][0]["isCached"];config=isCache?{enableStashBuffer:true}:{rangeLoadZeroStart:true,enableStashBuffer:false,lazyLoadMaxDuration:8,lazyLoadRecoverDuration:5};break}break;case"local":var urladdr=result.url.split("?")[0].split("/");var type=urladdr[urladdr.length-1].split(".")[1];if(type!="mp4"&&type!="flv"){throw new RuntimeException("无法解析的播放格式")}result["type"]=type;break}playVideo(result,config)}function playVideo(result){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var mediaDataSource={type:result.type,url:result.url||""};if(result.segments){mediaDataSource.segments=result.segments}flvjs.LoggingControl.enableAll=false;flvjs.LoggingControl.enableError=true;flvPlayer=flvjs.createPlayer(mediaDataSource,config);flvPlayer.attachMediaElement(dom);flvPlayer.load()}if(mediaBlob){$bg_video.attr("src",mediaBlob);return}var b="https://api.lixingyong.com/api/:server?type=urllist&id=:id&cid=:cid&qn=:qn&vtype=:vtype&r=:r";"undefined"!=typeof bg_video_api&&(b=bg_video_api);var dom=$bg_video[0];var url=dom.dataset.url;var id=dom.dataset.id;if(url){var source={title:dom.dataset.name||dom.dataset.title||"Video name",url:dom.dataset.url,server:"local"};handleResult(source)}else if(id){var api=dom.dataset.api||b;api=api.replace(":server",dom.dataset.server||"bilibili").replace(":id",id).replace(":cid",dom.dataset.cid||"").replace(":qn",dom.dataset.qn||"").replace(":vtype",dom.dataset.vtype||"").replace(":r",Math.random());var http=new XMLHttpRequest;http.onreadystatechange=function(){if(4===http.readyState&&(200<=http.status&&300>http.status||304===http.status)){var source=JSON.parse(http.responseText);source["server"]=dom.dataset.server||"bilibili";handleResult(source)}},http.open("get",api,true),http.send()}}}catch(e){Log.e("video",e.msg);defaultStyle()}if(dom!=undefined&&dom.oncanplay==undefined&&document.body.clientWidth>860&&Poi.windowheight!="fixed"){bindBgVideoEvent()}return{bgPause:bgPause}},PLSA:function PLSA(){$("article.post-list-thumb:not(.post-list-show)").each(function(index,item){var pTop=item.getBoundingClientRect().top;var window_height=$(window).height();if(pTop<=window_height){$(item).addClass("post-list-show")}else{return false}});$(window).scroll(function(){var window_height=$(window).height();var hide_post_thumb_first=$("article.post-list-thumb:not(.post-list-show):first");if(hide_post_thumb_first.length>0){var pTop=hide_post_thumb_first[0].getBoundingClientRect().top;if(pTop<=window_height)hide_post_thumb_first.addClass("post-list-show")}})},TOC:function TOC(){if(document.body.clientWidth<=1200){return}var baseTopPadding=240,maxToppadding=134,offset=100,bottomOffset=30;if($("div").hasClass("toc")){$(".toc-container").css("height",$(".site-content").outerHeight())}else{return}$(".entry-content , .links").children("h1,h2,h3,h4,h5").each(function(index){var hyphenated="toc-head-"+index;$(this).attr("id",hyphenated)});tocbot.init({tocSelector:".toc",contentSelector:[".entry-content",".links"],headingSelector:"h1, h2, h3, h4, h5",collapseDepth:!!PageAttr.metas.tocDepth&&[0,1,2,3,4,5].includes(Number(PageAttr.metas.tocDepth))?Number(PageAttr.metas.tocDepth):Poi.tocDepth,hasInnerContainers:false,disableTocScrollSync:true,headingsOffset:$("#page").find(".pattern-center").length>0?-500:-230,scrollEndCallback:function scrollEndCallback(e){if($(".is-active-link").length==0){return}if($(window).scrollTop()==0){$(".toc").animate({scrollTop:0});return}var activeLikeOffset=$(".is-active-link").offset().top-$(window).scrollTop();if(activeLikeOffset<offset){$(".toc").animate({scrollTop:$(".toc").scrollTop()-(offset-activeLikeOffset+$(".is-active-link").height())})}else if(activeLikeOffset>$(window).height()-bottomOffset){$(".toc").animate({scrollTop:$(".toc").scrollTop()+(activeLikeOffset-offset)})}}});var interval=setInterval(function(){if(document.readyState=="complete"){$(".toc").css("max-height",$(document).scrollTop()+($(window).height()-baseTopPadding)+"px");$(".toc-container").css("height",$(".site-content").outerHeight()-baseTopPadding+"px");$(window).scroll(function(){var s=$(document).scrollTop();if(s==0){$(".toc").css("max-height",$(document).scrollTop()+($(window).height()-baseTopPadding)+"px")}else if(s>offset){$(".toc").css("max-height",$(window).height()-maxToppadding+"px")}else{$(".toc").css("max-height",$(document).scrollTop()+($(window).height()-baseTopPadding)+"px")}});clearInterval(interval)}},2e3)},CHS:function CHS(){var attributes={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",design:"by LIlGG"};$("pre").each(function(i,item){var $code=$(this).children("code");var classNameStr=$code[0].className;var classNameArr=classNameStr.split(" ");var lang="";classNameArr.some(function(className){if(className.indexOf("language-")>-1){lang=className.substring(className.indexOf("-")+1,className.length);return true}});var language=hljs.getLanguage(lang.toLowerCase());if(language==undefined){var autolanguage=hljs.highlightAuto($code.text());$code.removeClass("language-"+lang);lang=autolanguage.language;if(lang==undefined){lang="text"}$code.addClass("language-"+lang)}else{lang=language.name}$(this).addClass("highlight-wrap");$(this).attr(attributes);$code.attr("data-rel",lang.toUpperCase()).addClass(lang.toLowerCase());hljs.highlightBlock($code[0]);if(Poi.codeLine)hljs.lineNumbersBlock($code[0])});$("pre").on("dblclick",function(e){if(e.target!==this)return;$(this).toggleClass("code-block-fullscreen");$("html").toggleClass("code-block-fullscreen-html-scroll")});$("pre code").each(function(i,block){$(block).attr({id:"hljs-"+i});$(this).after('<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-'+i+'" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a>');new ClipboardJS(".copy-code")})},CBG:function CBG(){var themeConfig={};var checkBgImgEcho=function checkBgImgEcho(){var configTag=Util.getCookie("bgTagClass");if(!configTag){configTag=Poi.defaultTheme}var bgConfigTags=Object.keys(bgConfig);bgConfigTags.includes(configTag)?configTag:Poi.defaultTheme;changeBg(configTag)};var changeSkinGear=function changeSkinGear(){$(".changeSkin-gear").off("click").on("click",function(){$(".skin-menu").toggleClass("show")});Object.keys(bgConfig).forEach(function(currBg){$(".skin-menu "+"#"+currBg).on("click",function(){changeBg(currBg,function(){Util.setCookie("bgTagClass",currBg,30);$(".skin-menu").removeClass("show");setTimeout(function(){$(".changeSkin-gear").css("visibility","visible")},300)})})});$(".changeSkin-gear").css("visibility","visible")};var changeBg=function changeBg(tagClass,callback){var bgAttr=bgConfig[tagClass];if(!bgAttr)return;themeConfig.bgAttr=bgAttr;$("body").removeAttr("style");$("body").css("background-image",bgAttr["url"]==""?"none":"url("+bgAttr["url"]+")");changeSkinSecter();!callback||typeof callback=="undefined"||callback==undefined?false:callback(bgAttr["isNight"])};var changeSkinSecter=function changeSkinSecter(){if(Object.getOwnPropertyNames(themeConfig).length==0){return}var bgAttr=themeConfig.bgAttr;var comments=document.getElementsByTagName("halo-comment");Util.removeClassByPrefix($("body")[0],"theme_");$("body").remove("theme_"+bgAttr["id"]);$("body").addClass("theme_"+bgAttr["id"]);if(bgAttr["isNight"]){$("html").css("background","#31363b");$(".site-content").css("background-color","#fff");$("body").addClass("dark");for(var i=0;i<comments.length;i++){var shadowDom=comments[i].shadowRoot.getElementById("halo-comment");$(shadowDom).addClass("dark")}}else{$("html").css("background","unset");$("body").removeClass("dark");$(".site-content").css("background-color","rgba(255, 255, 255, .8)");for(var i=0;i<comments.length;i++){var shadowDom=comments[i].shadowRoot.getElementById("halo-comment");$(shadowDom).removeClass("dark")}}switch(bgAttr["strategy"]){case"no-repeat":$("body").css("background-repeat","no-repeat");break;case"repeat":$("body").css("background-repeat","repeat");break;case"cover":$("body").css("background-size","cover");break;default:break}};if(document.body.clientWidth>860){checkBgImgEcho();changeSkinGear()}return{changeSkinSecter:changeSkinSecter}},MGT:function MGT(){var offset=20,scroll_top_duration=700,$m_back_to_top=$(".m-cd-top");$(window).scroll(function(){if($(this).scrollTop()>offset){$m_back_to_top.addClass("cd-is-visible")}else{$m_back_to_top.removeClass("cd-is-visible")}});$m_back_to_top.on("click",function(event){event.preventDefault();$("body,html").animate({scrollTop:0},scroll_top_duration)})},CPY:function CPY(){document.body.addEventListener("copy",function(e){if(Poi.copyrightNotice&&window.getSelection().toString().length>30){setClipboardText(e)}if(toast){toast.create("复制成功！<br>Copied to clipboard successfully!",2e3)}});var setClipboardText=function setClipboardText(event){event.preventDefault();var htmlData="# 商业转载请联系作者获得授权，非商业转载请注明出处。<br>"+"# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.<br>"+"# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)<br>"+"# 作者(Author)："+Poi.nickname+"<br>"+"# 链接(URL)："+window.location.href+"<br>"+"# 来源(Source)："+Poi.sitename+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var textData="# 商业转载请联系作者获得授权，非商业转载请注明出处。\n"+"# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.\n"+"# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)\n"+"# 作者(Author)："+Poi.nickname+"\n"+"# 链接(URL)："+window.location.href+"\n"+"# 来源(Source)："+Poi.sitename+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(event.clipboardData){event.clipboardData.setData("text/html",htmlData);event.clipboardData.setData("text/plain",textData)}else if(window.clipboardData){return window.clipboardData.setData("text",textData)}}},PHO:function PHO(){var $photoPage=$(".photo-page");if($photoPage.length==0){return}var $masonrys=$(".masonry-gallery.gallery");var justify=function justify(){var option={margins:isNaN(Poi.photosGutter)?10:Number(Poi.photosGutter),rowHeight:200};if(Poi.defaultGroup){var filter="."+Poi.defaultGroup;$("#gallery-filter li a").removeClass("active");$("#gallery-filter li a").each(function(){if($(this).data("filter")==filter){$(this).addClass("active");return false}});option.filter=filter}$masonrys.justifiedGallery(option);$("#gallery-filter li a").on("click",function(){$("#gallery-filter li a").removeClass("active");$(this).addClass("active");var dataFilter=$(this).data("filter");$masonrys.justifiedGallery({filter:dataFilter});return false})};var masonry=function masonry(){var option=Poi.photosStyle=="masonry"?{masonry:{gutter:isNaN(Poi.photosGutter)?10:Number(Poi.photosGutter)},itemSelector:".gallery-item"}:{layoutMode:"packery",packery:{columnWidth:100,gutter:isNaN(Poi.photosGutter)?10:Number(Poi.photosGutter)},itemSelector:".gallery-item"};if(Poi.defaultGroup){var filter="."+Poi.defaultGroup;$("#gallery-filter li a").each(function(){$("#gallery-filter li a").removeClass("active");if($(this).data("filter")==filter){$(this).addClass("active");return false}});option.filter=filter}$masonrys.find("img.lazyload").on("load",function(){$(this).parents(".gallery-item").css("background","#222");delete option.filter;$masonrys.isotope(option)});$("#gallery-filter li a").on("click",function(){$("#gallery-filter li a").removeClass("active");$(this).addClass("active");var dataFilter=$(this).data("filter");$masonrys.isotope({filter:dataFilter});return false});if(Poi.photosStyle=="masonry"){$("#grid-changer a").on("click",function(){$("#grid-changer a").removeClass("active");$(this).toggleClass("active");for(var i=2;i<9;i++){$masonrys.find(".gallery-item").removeClass("col-"+i)}$masonrys.find(".gallery-item").toggleClass($(this).closest("li").attr("class"));$masonrys.isotope(option)})}};if($masonrys.length>0){if(Poi.photosStyle=="masonry"||Poi.photosStyle=="packery"){masonry()}else{justify()}}},SS:function SS(){if($(".journal").length>0){var journalIds=Util.getLocalStorage("journalIds")||[];$(".journal").each(function(){var that=$(this);var idDoms=that.attr("id").split("-");var jid=Number(idDoms[idDoms.length-1]);var $firstSpan=that.find(".journal-time>span").first();if($firstSpan.find("i").length==0){$firstSpan.prepend('<i class="iconfont icon-'+getTimeIcon($firstSpan.text())+'"></i> ')}var $imgs=that.find(".journal-label img:not('.avatar')");$imgs.each(function(){if(!$(this).hasClass("journal-img")){$(this).addClass("journal-img").wrap('<a data-fancybox="gallery" href="'+$(this).attr("src")+'">')}});if(Poi.journalComment){var comment=that.find("halo-comment");if(comment.length>0){var $comment=$(comment[0].shadowRoot.getElementById("halo-comment"));if(!$comment.hasClass("journal")){$comment.addClass("journal")}if($("body").hasClass("dark")&&!$comment.hasClass("dark")){$comment.addClass("dark")}}that.find(".journal-label .comment-js").off("click").on("click",function(){that.find(".journal-label .comment").toggle()})}if(Poi.journalLikes){var $like=that.find(".journal-label .journal-like");if($like.length>0){journalIds.includes(jid)?$like.addClass("on"):"";that.find(".journal-label .journal-like").off("click").on("click",function(){var $dom=$(this);var links=$dom.data("links");journalIds=Util.getLocalStorage("journalIds")||[];var flag=journalIds.includes(jid);if(flag){return}$.ajax({url:"/api/content/journals/"+jid+"/likes",type:"post",dataType:"json",success:function success(res){if(res.status!==200){Log.e(res.message);return}links++;journalIds.push(jid);$dom.addClass("on");Util.setLocalStorage("journalIds",journalIds,60*60*24);$dom.children(":last-child").text(links);$dom.data("links",links)}})})}}})}},CMN:function CMN(){var comments=$("halo-comment");for(var i=0;i<comments.length;i++){var commentStyle=$("#comment-style").clone();commentStyle.attr("media","all");if(!comments[i].shadowRoot.getElementById("comment-style")){comments[i].shadowRoot.appendChild(commentStyle[0])}}},BGEVEN:function BGEVEN(){function nextBG(){if(Poi.coverOpen=="true"&&Poi.rimageUrl!=""){var url=new URL($(".centerbg").css("background-image").split('"')[1]);if(!url){return}if(Poi.coverNum==0){url.searchParams.set("t",(new Date).getTime())}else{url.searchParams.set("t",url.searchParams.get("t")%Poi.coverNum+1)}$(".centerbg").css("background-image","url("+url.href+")")}}function preBG(){if(Poi.coverOpen=="true"&&Poi.rimageUrl!=""){var url=new URL($(".centerbg").css("background-image").split('"')[1]);if(!url){return}if(Poi.coverNum==0){url.searchParams.set("t",(new Date).getTime())}else{var t=url.searchParams.get("t");t=t-1||Poi.coverNum;url.searchParams.set("t",t)}$(".centerbg").css("background-image","url("+url.href+")")}}$("#bg-next").on("click",function(){nextBG()});$("#bg-pre").on("click",function(){preBG()})},TOMAIL:function TOMAIL(){if(!Poi.meEmail){return}var mail="mailto:"+Poi.meEmail;window.open(mail)},LA:function LA(){},POST_CONTEXT:function POST_CONTEXT(){var normal="rgba(167, 210, 226, 1)";var medium="rgba(255, 197, 160, 1)";var difficulty="rgba(239, 206, 201, 1)";var msg,div,remind;var contentDom=document.getElementsByClassName("entry-content")[0];if(Poi.isPostWordCountToast==="true"){var coefficient=3;if(!!PageAttr.metas.level){coefficient=Number(PageAttr.metas.level)}if(!!PageAttr.postWordCount){var color="";var oldWordCount=PageAttr.postWordCount;var wordCount=Number(PageAttr.postWordCount.replace(/,/g,""));var seconds=Util.caclEstimateReadTime(wordCount,coefficient);var timeStr=Util.minuteToTimeString(seconds);if(seconds<=60*10){remind=Poi.postWordCountToastNormal||"文章篇幅适中，可以放心阅读。";color=normal}else if(seconds<=60*30&&seconds>60*10){remind=Poi.postWordCountToastMedium||"文章比较长，建议分段阅读。";color=medium}else{remind=Poi.postWordCountToastDifficulty||"文章内容很长，提前准备好咖啡!!!";color=difficulty}msg="文章共 <b>".concat(oldWordCount,"</b> 字，阅读完预计需要 <b>").concat(timeStr,"</b>。");msg=mobileMsgProcess(msg,remind);div=buildToastDiv("word_count",color,msg);contentDom.insertAdjacentHTML("afterbegin",div)}}if(Poi.isPostEditTimeToast==="true"){var editTime=new Date(PageAttr.postEditTime);if(!isNaN(editTime.getTime())){var time=(new Date).getTime()-editTime.getTime();var sinceLastTime=Util.timeAgo(editTime.getTime());if(time<=1e3*60*60*24*30){remind=Poi.postEditTimeToastNormal||"近期有所更新，请放心阅读！";color=normal}else if(time>1e3*60*60*24*30&&time<=1e3*60*60*24*90){remind=Poi.postEditTimeToastMedium||"文章距上次编辑时间较远，部分内容可能已经过时！";color=medium}else{remind=Poi.postEditTimeToastDifficulty||"文章内容已经很陈旧了，也许不再适用！";color=difficulty}msg="文章内容上次编辑时间于 <b>".concat(sinceLastTime,"</b>。");msg=mobileMsgProcess(msg,remind);div=buildToastDiv("last_time",color,msg);contentDom.insertAdjacentHTML("afterbegin",div)}}var contentToast=contentDom.getElementsByClassName("content_toast");Array.prototype.forEach.call(contentToast,function(content){var i=content.getElementsByTagName("i")[0];i.onclick=function(){content.classList.toggle("hide")}});function buildToastDiv(type,color,msg){return'<div class="'.concat(type,' content_toast minicode" style="background-color: ').concat(color,'">\n                ').concat(msg,'\n                <i class="fa fa-times" aria-hidden="true"></i>\n              </div>')}function mobileMsgProcess(msg,remind){if(window.innerWidth<=860){return msg}return msg+"".concat(remind)}}};var imgError=function imgError(ele){ele.src="https://cdn.lixingyong.com/2020/07/18/98fca04416944b282a558b98b2131879.png"};var getTimeIcon=function getTimeIcon(time){var ICON_DAY="kaiqitaiyangguangshezhi",ICON_MORN="gengzaotubiao_tianqi-qingchen",ICON_NIGHT="yueliang";var date=new Date(time);var hours=date.getHours();if(isNaN(hours)){return ICON_DAY}if(5<=hours&&hours<12){return ICON_MORN}else if(12<=hours&&hours<18){return ICON_DAY}else{return ICON_NIGHT}};var pjaxFun=function pjaxFun(){$(document).pjax("a[target!=_top][target!=_blank]","#page",{fragment:"#page",timeout:8e3}).on("pjax:send",function(){NProgress.start();Siren.MNH()}).on("pjax:complete",function(){Siren.AH();Siren.PE();Siren.CE();LIlGGAttachContext.PJAX();NProgress.done();$("#loading").fadeOut(500)}).on("submit",".search-form,.s-search",function(event){event.preventDefault();$.pjax.submit(event,"#page",{fragment:"#page",timeout:8e3});if($(".js-search.is-visible").length>0){$(".js-toggle-search").toggleClass("is-active");$(".js-search").toggleClass("is-visible")}});window.addEventListener("popstate",function(e){Siren.AH();Siren.PE();Siren.CE()},false)};var home=location.href,Siren={MN:function MN(){$(".iconflat").on("click",function(){$("body").toggleClass("navOpen");$("#main-container,#mo-nav,.openNav").toggleClass("open")})},MNH:function MNH(){if($("body").hasClass("navOpen")){$("body").toggleClass("navOpen");$("#main-container,#mo-nav,.openNav").toggleClass("open")}},AH:function AH(){if(Poi.windowheight=="auto"){if(window.outerWidth<=860){$("#centerbg").css({height:300});$(".headertop").addClass("headertop-bar");return}$(".headertop").removeClass("headertop-bar");if($("h1.main-title").length>0){var _height=$(window).height();$("#centerbg").css({height:_height});$("#bgvideo").css({"min-height":_height});$(window).resize(function(){Siren.AH()})}}else{$(".headertop").addClass("headertop-bar")}},PE:function PE(){if($(".headertop").length>0){if($("h1.main-title").length>0){$(".blank").css({"padding-top":"0px"});$(".headertop").css({height:"auto"}).show()}else{$(".blank").css({"padding-top":"5.2%"});$(".headertop").css({height:"0px"}).hide()}}if($(".entry-content").children("table").length>0){$(".entry-content").children("table").wrap("<div class='table-wrapper'></div>")}if($(".entry-content").length>0&&$(".entry-content").find("img").length>0){var $imgs=$(".entry-content").find("img");$imgs.each(function(){if(!$(this).hasClass("gallery-img")){$(this).addClass("gallery-img").wrap('<a data-fancybox="gallery" href="'+$(this).attr("src")+'"></a>')}})}if($("#tag-wordcloud").length>0&&$("#tag-wordcloud").children().length==0){$("#tag-wordcloud").jQCloud(wordcloud,{autoResize:true,delayedMode:true})}if($(".chip").length>0){$(".chip").each(function(){$(this).css("background-color",Util.getRandomColor(Poi.tagRandomColorMin,Poi.tagRandomColorMax))})}if($("#category-echarts").length>0&&$("#category-echarts").children().length==0){var values=Object.values(categoryRadar),keys=Object.keys(categoryRadar);if(keys.length<3){$("#category-echarts").remove();return}var maxNum=Math.ceil(Math.max.apply(Math,_toConsumableArray(values))/5)*5;var categoryChart=echarts.init(document.getElementById("category-echarts"));var option={title:{text:"文章分类雷达图",left:"center",top:"25px",textStyle:{fontSize:22,fontWeight:"normal"}},tooltip:{trigger:"item",textStyle:{align:"left"}},radar:[{indicator:function(){var indicators=[];for(var i=0;i<keys.length;i++){indicators.push({text:keys[i],max:maxNum})}return indicators}(),name:{textStyle:{color:$(".dark").length>0?"#bebebe":"black"}},center:["50%","60%"],radius:"60%"}],series:[{type:"radar",itemStyle:{color:"rgb(123,234,185)"},lineStyle:{color:"rgb(123,234,185)"},areaStyle:{color:"rgb(123,234,185)"},data:[{value:values,name:"文章分类数量"}]}]};categoryChart.setOption(option)}if($("#qrcode").length>0&&$("#qrcode").children().length==0){new QRCode(document.getElementById("qrcode"),{text:$("#qrcode").data("url"),width:128,height:128,colorDark:"#000000",colorLight:"#ffffff"})}},CE:function CE(){$(".archives").hide();$(".archives:first").show();$("#archives-temp h3").click(function(){$(this).next().slideToggle("fast");return false});$(".js-toggle-search").on("click",function(){$(".js-toggle-search").toggleClass("is-active");$(".js-search").toggleClass("is-visible")});$(".search_close").on("click",function(){if($(".js-search").hasClass("is-visible")){$(".js-toggle-search").toggleClass("is-active");$(".js-search").toggleClass("is-visible")}});$("#show-nav").on("click",function(){if($("#show-nav").hasClass("showNav")){$("#show-nav").removeClass("showNav").addClass("hideNav");$(".site-top .lower nav").addClass("navbar")}else{$("#show-nav").removeClass("hideNav").addClass("showNav");$(".site-top .lower nav").removeClass("navbar")}});$("#loading").click(function(){$("#loading").fadeOut(500)})},NH:function NH(){var h1=0,h2=50,ss=$(document).scrollTop();$(window).scroll(function(){var s=$(document).scrollTop();var surplus=document.documentElement.scrollHeight-document.documentElement.clientHeight;var coorY=s/surplus;NProgress.set(coorY);if(s==h1){$(".site-header").removeClass("yya")}if(s>h1){$(".site-header").addClass("yya")}if(s>h2){$(".site-header").addClass("gizle");if(s>ss){$(".site-header").removeClass("sabit")}else{$(".site-header").addClass("sabit")}ss=s}})},XLS:function XLS(){var $body=window.opera?document.compatMode=="CSS1Compat"?$("html"):$("body"):$("html,body");$body.on("click","#pagination a",function(){var tempScrollTop=$(window).scrollTop();$(this).addClass("loading").text("");$.ajax({type:"GET",url:$(this).attr("href")+"#main",success:function success(data){var result=$(data).find("#main .post");var nextHref=$(data).find("#pagination a").attr("href");$("#main").append(result.fadeIn(500));$("#pagination a").removeClass("loading").text("下一页");$(window).scrollTop(tempScrollTop);LIlGGAttachContext.PLSA();if(nextHref!=undefined){$("#pagination a").attr("href",nextHref)}else{$("#pagination").html("<span>没有更多文章了</span>")}I18N.init()}});return false});$body.on("click","#journals-pagination a",function(){$(this).addClass("loading").text("");var tempScrollTop=$(window).scrollTop();$.ajax({type:"GET",url:$(this).attr("href")+"#main",success:function success(data){var result=$(data).find("#main .journal");var nextHref=$(data).find("#journals-pagination a").attr("href");$("#main").append(result.fadeIn(500));$("#journals-pagination a").removeClass("loading").text("加载更多...");LIlGGAttachContext.SS();LIlGGAttachContext.CMN();$(window).scrollTop(tempScrollTop);if(nextHref!=undefined){$("#journals-pagination a").attr("href",nextHref)}else{$("#journals-pagination a").remove()}}});return false})},GT:function GT(){var offset=100,offset_opacity=1200,scroll_top_duration=700,$back_to_top=$(".cd-top");$(window).scroll(function(){if($(this).scrollTop()>offset){$back_to_top.addClass("cd-is-visible");$(".changeSkin-gear").css("bottom","0");if($(window).height()>950){$(".cd-top.cd-is-visible").css("top","0")}else{$(".cd-top.cd-is-visible").css("top",$(window).height()-950+"px")}}else{$(".changeSkin-gear").css("bottom","-999px");$(".cd-top.cd-is-visible").css("top","-900px");$back_to_top.removeClass("cd-is-visible cd-fade-out")}if($(this).scrollTop()>offset_opacity){$back_to_top.addClass("cd-fade-out")}$(".skin-menu").removeClass("show")});$back_to_top.on("click",function(event){event.preventDefault();$("body,html").animate({scrollTop:0},scroll_top_duration)})}};var toast=null;$(function(){Siren.AH();Siren.PE();Siren.NH();Siren.GT();Siren.XLS();Siren.CE();Siren.MN();LIlGGAttachContext.BGEVEN();Poi.themeChange&&LIlGGAttachContext.CBG();LIlGGAttachContext.PLSA();Poi.headFocus&&Poi.bgvideo&&LIlGGAttachContext.BGV();Poi.toc&&LIlGGAttachContext.TOC();PageAttr.isPost==="true"&&LIlGGAttachContext.POST_CONTEXT();LIlGGAttachContext.CHS();LIlGGAttachContext.MGT();Poi.photosStyle=="packery"&&supplement();LIlGGAttachContext.PHO();LIlGGAttachContext.SS();Poi.copyMonitor&&LIlGGAttachContext.CPY();LIlGGAttachContext.CMN();Poi.pjax&&pjaxFun();I18N.init();if(Poi.openToast&&window.outerWidth>860){toast=new Toast;toast.init({width:Poi.toastWidth,height:Poi.toastHeight,top:Poi.toastTop,background:Poi.toastBackground,color:Poi.toastColor,"font-size":Poi.toastFontSize})}$.fn.postLike=function(){if($(this).hasClass("done")){return false}else{$(this).addClass("done");var id=$(this).data("id"),action=$(this).data("action"),rateHolder=$(this).children(".count");var ajax_data={action:"specs_zan",um_id:id,um_action:action};$.post(Poi.ajaxurl,ajax_data,function(data){$(rateHolder).html(data)});return false}};$(document).on("click",".specsZan",function(){$(this).postLike()});console.log("%c Github %c","background:#24272A; color:#ffffff","","https://github.com/LIlGG/halo-theme-Sakura")});function headertop_down(){var coverOffset=$("#content").offset().top;$("html,body").animate({scrollTop:coverOffset},600)}var supplement=function supplement(){var PackeryMode=Isotope.LayoutMode.modes.packery;var __resetLayout=PackeryMode.prototype._resetLayout;PackeryMode.prototype._resetLayout=function(){__resetLayout.call(this);var parentSize=getSize(this.element.parentNode);var colW=this.columnWidth+this.gutter;this.fitWidth=Math.floor((parentSize.innerWidth+this.gutter)/colW)*colW;this.packer.width=this.fitWidth;this.packer.height=Number.POSITIVE_INFINITY;this.packer.reset()};PackeryMode.prototype._getContainerSize=function(){var emptyWidth=0;for(var i=0,len=this.packer.spaces.length;i<len;i++){var space=this.packer.spaces[i];if(space.y===0&&space.height===Number.POSITIVE_INFINITY){emptyWidth+=space.width}}return{width:this.fitWidth-this.gutter,height:this.maxY-this.gutter}};PackeryMode.prototype.needsResizeLayout=function(){return true}};var isWebkit=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,isOpera=navigator.userAgent.toLowerCase().indexOf("opera")>-1,isIe=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((isWebkit||isOpera||isIe)&&document.getElementById&&window.addEventListener){window.addEventListener("hashchange",function(e){var id=location.hash.substring(1),element;if(e.oldURL.indexOf("#gallery-")!==-1){return}if(!/^[A-z0-9_-]+$/.test(id)){return}element=document.getElementById(id);if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)){element.tabIndex=-1}element.focus()}},false)}var IllegalStateException=function IllegalStateException(message){IllegalStateException.prototype=new RuntimeException;IllegalStateException.prototype={get name(){return"IllegalStateException"}}};var InvalidArgumentException=function InvalidArgumentException(message){InvalidArgumentException.prototype=new RuntimeException;InvalidArgumentException.prototype={get name(){return"InvalidArgumentException"}}};var NotImplementedException=function NotImplementedException(message){NotImplementedException.prototype=new RuntimeException;NotImplementedException.prototype={get name(){return"NotImplementedException"}}};function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _instanceof(left,right){if(right!=null&&typeof Symbol!=="undefined"&&right[Symbol.hasInstance]){return!!right[Symbol.hasInstance](left)}else{return left instanceof right}}function _classCallCheck(instance,Constructor){if(!_instanceof(instance,Constructor)){throw new TypeError("Cannot call a class as a function")}}