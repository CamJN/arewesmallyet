/*
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function(aY,H){var al=aY.document;var a=(function(){var bn=function(bI,bJ){return new bn.fn.init(bI,bJ,bl)},bD=aY.jQuery,bp=aY.$,bl,bH=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,bv=/\S/,br=/^\s+/,bm=/\s+$/,bq=/\d/,bj=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bw=/^[\],:{}\s]*$/,bF=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,by=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bs=/(?:^|:|,)(?:\s*\[)+/g,bh=/(webkit)[ \/]([\w.]+)/,bA=/(opera)(?:.*version)?[ \/]([\w.]+)/,bz=/(msie) ([\w.]+)/,bB=/(mozilla)(?:.*? rv:([\w.]+))?/,bG=navigator.userAgent,bE,bC=false,bk,e="then done fail isResolved isRejected promise".split(" "),bd,bu=Object.prototype.toString,bo=Object.prototype.hasOwnProperty,bi=Array.prototype.push,bt=Array.prototype.slice,bx=String.prototype.trim,be=Array.prototype.indexOf,bg={};bn.fn=bn.prototype={constructor:bn,init:function(bI,bM,bL){var bK,bN,bJ,bO;if(!bI){return this}if(bI.nodeType){this.context=this[0]=bI;this.length=1;return this}if(bI==="body"&&!bM&&al.body){this.context=al;this[0]=al.body;this.selector="body";this.length=1;return this}if(typeof bI==="string"){bK=bH.exec(bI);if(bK&&(bK[1]||!bM)){if(bK[1]){bM=bM instanceof bn?bM[0]:bM;bO=(bM?bM.ownerDocument||bM:al);bJ=bj.exec(bI);if(bJ){if(bn.isPlainObject(bM)){bI=[al.createElement(bJ[1])];bn.fn.attr.call(bI,bM,true)}else{bI=[bO.createElement(bJ[1])]}}else{bJ=bn.buildFragment([bK[1]],[bO]);bI=(bJ.cacheable?bn.clone(bJ.fragment):bJ.fragment).childNodes}return bn.merge(this,bI)}else{bN=al.getElementById(bK[2]);if(bN&&bN.parentNode){if(bN.id!==bK[2]){return bL.find(bI)}this.length=1;this[0]=bN}this.context=al;this.selector=bI;return this}}else{if(!bM||bM.jquery){return(bM||bL).find(bI)}else{return this.constructor(bM).find(bI)}}}else{if(bn.isFunction(bI)){return bL.ready(bI)}}if(bI.selector!==H){this.selector=bI.selector;this.context=bI.context}return bn.makeArray(bI,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return bt.call(this,0)},get:function(bI){return bI==null?this.toArray():(bI<0?this[this.length+bI]:this[bI])},pushStack:function(bJ,bL,bI){var bK=this.constructor();if(bn.isArray(bJ)){bi.apply(bK,bJ)}else{bn.merge(bK,bJ)}bK.prevObject=this;bK.context=this.context;if(bL==="find"){bK.selector=this.selector+(this.selector?" ":"")+bI}else{if(bL){bK.selector=this.selector+"."+bL+"("+bI+")"}}return bK},each:function(bJ,bI){return bn.each(this,bJ,bI)},ready:function(bI){bn.bindReady();bk.done(bI);return this},eq:function(bI){return bI===-1?this.slice(bI):this.slice(bI,+bI+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(bt.apply(this,arguments),"slice",bt.call(arguments).join(","))},map:function(bI){return this.pushStack(bn.map(this,function(bK,bJ){return bI.call(bK,bJ,bK)}))},end:function(){return this.prevObject||this.constructor(null)},push:bi,sort:[].sort,splice:[].splice};bn.fn.init.prototype=bn.fn;bn.extend=bn.fn.extend=function(){var bR,bK,bI,bJ,bO,bP,bN=arguments[0]||{},bM=1,bL=arguments.length,bQ=false;if(typeof bN==="boolean"){bQ=bN;bN=arguments[1]||{};bM=2}if(typeof bN!=="object"&&!bn.isFunction(bN)){bN={}}if(bL===bM){bN=this;--bM}for(;bM<bL;bM++){if((bR=arguments[bM])!=null){for(bK in bR){bI=bN[bK];bJ=bR[bK];if(bN===bJ){continue}if(bQ&&bJ&&(bn.isPlainObject(bJ)||(bO=bn.isArray(bJ)))){if(bO){bO=false;bP=bI&&bn.isArray(bI)?bI:[]}else{bP=bI&&bn.isPlainObject(bI)?bI:{}}bN[bK]=bn.extend(bQ,bP,bJ)}else{if(bJ!==H){bN[bK]=bJ}}}}}return bN};bn.extend({noConflict:function(bI){aY.$=bp;if(bI){aY.jQuery=bD}return bn},isReady:false,readyWait:1,ready:function(bI){if(bI===true){bn.readyWait--}if(!bn.readyWait||(bI!==true&&!bn.isReady)){if(!al.body){return setTimeout(bn.ready,1)}bn.isReady=true;if(bI!==true&&--bn.readyWait>0){return}bk.resolveWith(al,[bn]);if(bn.fn.trigger){bn(al).trigger("ready").unbind("ready")}}},bindReady:function(){if(bC){return}bC=true;if(al.readyState==="complete"){return setTimeout(bn.ready,1)}if(al.addEventListener){al.addEventListener("DOMContentLoaded",bd,false);aY.addEventListener("load",bn.ready,false)}else{if(al.attachEvent){al.attachEvent("onreadystatechange",bd);aY.attachEvent("onload",bn.ready);var bI=false;try{bI=aY.frameElement==null}catch(bJ){}if(al.documentElement.doScroll&&bI){bf()}}}},isFunction:function(bI){return bn.type(bI)==="function"},isArray:Array.isArray||function(bI){return bn.type(bI)==="array"},isWindow:function(bI){return bI&&typeof bI==="object"&&"setInterval" in bI},isNaN:function(bI){return bI==null||!bq.test(bI)||isNaN(bI)},type:function(bI){return bI==null?String(bI):bg[bu.call(bI)]||"object"},isPlainObject:function(bJ){if(!bJ||bn.type(bJ)!=="object"||bJ.nodeType||bn.isWindow(bJ)){return false}if(bJ.constructor&&!bo.call(bJ,"constructor")&&!bo.call(bJ.constructor.prototype,"isPrototypeOf")){return false}var bI;for(bI in bJ){}return bI===H||bo.call(bJ,bI)},isEmptyObject:function(bJ){for(var bI in bJ){return false}return true},error:function(bI){throw bI},parseJSON:function(bI){if(typeof bI!=="string"||!bI){return null}bI=bn.trim(bI);if(bw.test(bI.replace(bF,"@").replace(by,"]").replace(bs,""))){return aY.JSON&&aY.JSON.parse?aY.JSON.parse(bI):(new Function("return "+bI))()}else{bn.error("Invalid JSON: "+bI)}},parseXML:function(bK,bI,bJ){if(aY.DOMParser){bJ=new DOMParser();bI=bJ.parseFromString(bK,"text/xml")}else{bI=new ActiveXObject("Microsoft.XMLDOM");bI.async="false";bI.loadXML(bK)}bJ=bI.documentElement;if(!bJ||!bJ.nodeName||bJ.nodeName==="parsererror"){bn.error("Invalid XML: "+bK)}return bI},noop:function(){},globalEval:function(bK){if(bK&&bv.test(bK)){var bJ=al.head||al.getElementsByTagName("head")[0]||al.documentElement,bI=al.createElement("script");if(bn.support.scriptEval()){bI.appendChild(al.createTextNode(bK))}else{bI.text=bK}bJ.insertBefore(bI,bJ.firstChild);bJ.removeChild(bI)}},nodeName:function(bJ,bI){return bJ.nodeName&&bJ.nodeName.toUpperCase()===bI.toUpperCase()},each:function(bL,bP,bK){var bJ,bM=0,bN=bL.length,bI=bN===H||bn.isFunction(bL);if(bK){if(bI){for(bJ in bL){if(bP.apply(bL[bJ],bK)===false){break}}}else{for(;bM<bN;){if(bP.apply(bL[bM++],bK)===false){break}}}}else{if(bI){for(bJ in bL){if(bP.call(bL[bJ],bJ,bL[bJ])===false){break}}}else{for(var bO=bL[0];bM<bN&&bP.call(bO,bM,bO)!==false;bO=bL[++bM]){}}}return bL},trim:bx?function(bI){return bI==null?"":bx.call(bI)}:function(bI){return bI==null?"":bI.toString().replace(br,"").replace(bm,"")},makeArray:function(bL,bJ){var bI=bJ||[];if(bL!=null){var bK=bn.type(bL);if(bL.length==null||bK==="string"||bK==="function"||bK==="regexp"||bn.isWindow(bL)){bi.call(bI,bL)}else{bn.merge(bI,bL)}}return bI},inArray:function(bK,bL){if(bL.indexOf){return bL.indexOf(bK)}for(var bI=0,bJ=bL.length;bI<bJ;bI++){if(bL[bI]===bK){return bI}}return -1},merge:function(bM,bK){var bL=bM.length,bJ=0;if(typeof bK.length==="number"){for(var bI=bK.length;bJ<bI;bJ++){bM[bL++]=bK[bJ]}}else{while(bK[bJ]!==H){bM[bL++]=bK[bJ++]}}bM.length=bL;return bM},grep:function(bJ,bO,bI){var bK=[],bN;bI=!!bI;for(var bL=0,bM=bJ.length;bL<bM;bL++){bN=!!bO(bJ[bL],bL);if(bI!==bN){bK.push(bJ[bL])}}return bK},map:function(bJ,bO,bI){var bK=[],bN;for(var bL=0,bM=bJ.length;bL<bM;bL++){bN=bO(bJ[bL],bL,bI);if(bN!=null){bK[bK.length]=bN}}return bK.concat.apply([],bK)},guid:1,proxy:function(bK,bJ,bI){if(arguments.length===2){if(typeof bJ==="string"){bI=bK;bK=bI[bJ];bJ=H}else{if(bJ&&!bn.isFunction(bJ)){bI=bJ;bJ=H}}}if(!bJ&&bK){bJ=function(){return bK.apply(bI||this,arguments)}}if(bK){bJ.guid=bK.guid=bK.guid||bJ.guid||bn.guid++}return bJ},access:function(bI,bQ,bO,bK,bN,bP){var bJ=bI.length;if(typeof bQ==="object"){for(var bL in bQ){bn.access(bI,bL,bQ[bL],bK,bN,bO)}return bI}if(bO!==H){bK=!bP&&bK&&bn.isFunction(bO);for(var bM=0;bM<bJ;bM++){bN(bI[bM],bQ,bK?bO.call(bI[bM],bM,bN(bI[bM],bQ)):bO,bP)}return bI}return bJ?bN(bI[0],bQ):H},now:function(){return(new Date()).getTime()},_Deferred:function(){var bL=[],bM,bJ,bK,bI={done:function(){if(!bK){var bO=arguments,bP,bS,bR,bQ,bN;if(bM){bN=bM;bM=0}for(bP=0,bS=bO.length;bP<bS;bP++){bR=bO[bP];bQ=bn.type(bR);if(bQ==="array"){bI.done.apply(bI,bR)}else{if(bQ==="function"){bL.push(bR)}}}if(bN){bI.resolveWith(bN[0],bN[1])}}return this},resolveWith:function(bO,bN){if(!bK&&!bM&&!bJ){bJ=1;try{while(bL[0]){bL.shift().apply(bO,bN)}}catch(bP){throw bP}finally{bM=[bO,bN];bJ=0}}return this},resolve:function(){bI.resolveWith(bn.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return !!(bJ||bM)},cancel:function(){bK=1;bL=[];return this}};return bI},Deferred:function(bJ){var bI=bn._Deferred(),bL=bn._Deferred(),bK;bn.extend(bI,{then:function(bN,bM){bI.done(bN).fail(bM);return this},fail:bL.done,rejectWith:bL.resolveWith,reject:bL.resolve,isRejected:bL.isResolved,promise:function(bN){if(bN==null){if(bK){return bK}bK=bN={}}var bM=e.length;while(bM--){bN[e[bM]]=bI[e[bM]]}return bN}});bI.done(bL.cancel).fail(bI.cancel);delete bI.cancel;if(bJ){bJ.call(bI,bI)}return bI},when:function(bJ){var bO=arguments.length,bI=bO<=1&&bJ&&bn.isFunction(bJ.promise)?bJ:bn.Deferred(),bM=bI.promise();if(bO>1){var bN=bt.call(arguments,0),bL=bO,bK=function(bP){return function(bQ){bN[bP]=arguments.length>1?bt.call(arguments,0):bQ;if(!(--bL)){bI.resolveWith(bM,bN)}}};while((bO--)){bJ=bN[bO];if(bJ&&bn.isFunction(bJ.promise)){bJ.promise().then(bK(bO),bI.reject)}else{--bL}}if(!bL){bI.resolveWith(bM,bN)}}else{if(bI!==bJ){bI.resolve(bJ)}}return bM},uaMatch:function(bJ){bJ=bJ.toLowerCase();var bI=bh.exec(bJ)||bA.exec(bJ)||bz.exec(bJ)||bJ.indexOf("compatible")<0&&bB.exec(bJ)||[];return{browser:bI[1]||"",version:bI[2]||"0"}},sub:function(){function bJ(bL,bM){return new bJ.fn.init(bL,bM)}bn.extend(true,bJ,this);bJ.superclass=this;bJ.fn=bJ.prototype=this();bJ.fn.constructor=bJ;bJ.subclass=this.subclass;bJ.fn.init=function bK(bL,bM){if(bM&&bM instanceof bn&&!(bM instanceof bJ)){bM=bJ(bM)}return bn.fn.init.call(this,bL,bM,bI)};bJ.fn.init.prototype=bJ.fn;var bI=bJ(al);return bJ},browser:{}});bk=bn._Deferred();bn.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bJ,bI){bg["[object "+bI+"]"]=bI.toLowerCase()});bE=bn.uaMatch(bG);if(bE.browser){bn.browser[bE.browser]=true;bn.browser.version=bE.version}if(bn.browser.webkit){bn.browser.safari=true}if(be){bn.inArray=function(bI,bJ){return be.call(bJ,bI)}}if(bv.test("\xA0")){br=/^[\s\xA0]+/;bm=/[\s\xA0]+$/}bl=bn(al);if(al.addEventListener){bd=function(){al.removeEventListener("DOMContentLoaded",bd,false);bn.ready()}}else{if(al.attachEvent){bd=function(){if(al.readyState==="complete"){al.detachEvent("onreadystatechange",bd);bn.ready()}}}}function bf(){if(bn.isReady){return}try{al.documentElement.doScroll("left")}catch(bI){setTimeout(bf,1);return}bn.ready()}return bn})();(function(){a.support={};var bd=al.createElement("div");bd.style.display="none";bd.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var bm=bd.getElementsByTagName("*"),bk=bd.getElementsByTagName("a")[0],bl=al.createElement("select"),be=bl.appendChild(al.createElement("option")),bj=bd.getElementsByTagName("input")[0];if(!bm||!bm.length||!bk){return}a.support={leadingWhitespace:bd.firstChild.nodeType===3,tbody:!bd.getElementsByTagName("tbody").length,htmlSerialize:!!bd.getElementsByTagName("link").length,style:/red/.test(bk.getAttribute("style")),hrefNormalized:bk.getAttribute("href")==="/a",opacity:/^0.55$/.test(bk.style.opacity),cssFloat:!!bk.style.cssFloat,checkOn:bj.value==="on",optSelected:be.selected,deleteExpando:true,optDisabled:false,checkClone:false,noCloneEvent:true,noCloneChecked:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};bj.checked=true;a.support.noCloneChecked=bj.cloneNode(true).checked;bl.disabled=true;a.support.optDisabled=!be.disabled;var bf=null;a.support.scriptEval=function(){if(bf===null){var bo=al.documentElement,bp=al.createElement("script"),br="script"+a.now();try{bp.appendChild(al.createTextNode("window."+br+"=1;"))}catch(bq){}bo.insertBefore(bp,bo.firstChild);if(aY[br]){bf=true;delete aY[br]}else{bf=false}bo.removeChild(bp);bo=bp=br=null}return bf};try{delete bd.test}catch(bh){a.support.deleteExpando=false}if(!bd.addEventListener&&bd.attachEvent&&bd.fireEvent){bd.attachEvent("onclick",function bn(){a.support.noCloneEvent=false;bd.detachEvent("onclick",bn)});bd.cloneNode(true).fireEvent("onclick")}bd=al.createElement("div");bd.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var bg=al.createDocumentFragment();bg.appendChild(bd.firstChild);a.support.checkClone=bg.cloneNode(true).cloneNode(true).lastChild.checked;a(function(){var bp=al.createElement("div"),e=al.getElementsByTagName("body")[0];if(!e){return}bp.style.width=bp.style.paddingLeft="1px";e.appendChild(bp);a.boxModel=a.support.boxModel=bp.offsetWidth===2;if("zoom" in bp.style){bp.style.display="inline";bp.style.zoom=1;a.support.inlineBlockNeedsLayout=bp.offsetWidth===2;bp.style.display="";bp.innerHTML="<div style='width:4px;'></div>";a.support.shrinkWrapBlocks=bp.offsetWidth!==2}bp.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var bo=bp.getElementsByTagName("td");a.support.reliableHiddenOffsets=bo[0].offsetHeight===0;bo[0].style.display="";bo[1].style.display="none";a.support.reliableHiddenOffsets=a.support.reliableHiddenOffsets&&bo[0].offsetHeight===0;bp.innerHTML="";e.removeChild(bp).style.display="none";bp=bo=null});var bi=function(e){var bp=al.createElement("div");e="on"+e;if(!bp.attachEvent){return true}var bo=(e in bp);if(!bo){bp.setAttribute(e,"return;");bo=typeof bp[e]==="function"}bp=null;return bo};a.support.submitBubbles=bi("submit");a.support.changeBubbles=bi("change");bd=bm=bk=null})();var aE=/^(?:\{.*\}|\[.*\])$/;a.extend({cache:{},uuid:0,expando:"jQuery"+(a.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?a.cache[e[a.expando]]:e[a.expando];return !!e&&!P(e)},data:function(bf,bd,bh,bg){if(!a.acceptData(bf)){return}var bk=a.expando,bj=typeof bd==="string",bi,bl=bf.nodeType,e=bl?a.cache:bf,be=bl?bf[a.expando]:bf[a.expando]&&a.expando;if((!be||(bg&&be&&!e[be][bk]))&&bj&&bh===H){return}if(!be){if(bl){bf[a.expando]=be=++a.uuid}else{be=a.expando}}if(!e[be]){e[be]={};if(!bl){e[be].toJSON=a.noop}}if(typeof bd==="object"||typeof bd==="function"){if(bg){e[be][bk]=a.extend(e[be][bk],bd)}else{e[be]=a.extend(e[be],bd)}}bi=e[be];if(bg){if(!bi[bk]){bi[bk]={}}bi=bi[bk]}if(bh!==H){bi[bd]=bh}if(bd==="events"&&!bi[bd]){return bi[bk]&&bi[bk].events}return bj?bi[bd]:bi},removeData:function(bg,be,bh){if(!a.acceptData(bg)){return}var bj=a.expando,bk=bg.nodeType,bd=bk?a.cache:bg,bf=bk?bg[a.expando]:a.expando;if(!bd[bf]){return}if(be){var bi=bh?bd[bf][bj]:bd[bf];if(bi){delete bi[be];if(!P(bi)){return}}}if(bh){delete bd[bf][bj];if(!P(bd[bf])){return}}var e=bd[bf][bj];if(a.support.deleteExpando||bd!=aY){delete bd[bf]}else{bd[bf]=null}if(e){bd[bf]={};if(!bk){bd[bf].toJSON=a.noop}bd[bf][bj]=e}else{if(bk){if(a.support.deleteExpando){delete bg[a.expando]}else{if(bg.removeAttribute){bg.removeAttribute(a.expando)}else{bg[a.expando]=null}}}}},_data:function(bd,e,be){return a.data(bd,e,be,true)},acceptData:function(bd){if(bd.nodeName){var e=a.noData[bd.nodeName.toLowerCase()];if(e){return !(e===true||bd.getAttribute("classid")!==e)}}return true}});a.fn.extend({data:function(bg,bi){var bh=null;if(typeof bg==="undefined"){if(this.length){bh=a.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,be;for(var bf=0,bd=e.length;bf<bd;bf++){be=e[bf].name;if(be.indexOf("data-")===0){be=be.substr(5);aT(this[0],be,bh[be])}}}}return bh}else{if(typeof bg==="object"){return this.each(function(){a.data(this,bg)})}}var bj=bg.split(".");bj[1]=bj[1]?"."+bj[1]:"";if(bi===H){bh=this.triggerHandler("getData"+bj[1]+"!",[bj[0]]);if(bh===H&&this.length){bh=a.data(this[0],bg);bh=aT(this[0],bg,bh)}return bh===H&&bj[1]?this.data(bj[0]):bh}else{return this.each(function(){var bl=a(this),bk=[bj[0],bi];bl.triggerHandler("setData"+bj[1]+"!",bk);a.data(this,bg,bi);bl.triggerHandler("changeData"+bj[1]+"!",bk)})}},removeData:function(e){return this.each(function(){a.removeData(this,e)})}});function aT(be,bd,bf){if(bf===H&&be.nodeType===1){bf=be.getAttribute("data-"+bd);if(typeof bf==="string"){try{bf=bf==="true"?true:bf==="false"?false:bf==="null"?null:!a.isNaN(bf)?parseFloat(bf):aE.test(bf)?a.parseJSON(bf):bf}catch(bg){}a.data(be,bd,bf)}else{bf=H}}return bf}function P(bd){for(var e in bd){if(e!=="toJSON"){return false}}return true}a.extend({queue:function(bd,e,bf){if(!bd){return}e=(e||"fx")+"queue";var be=a._data(bd,e);if(!bf){return be||[]}if(!be||a.isArray(bf)){be=a._data(bd,e,a.makeArray(bf))}else{be.push(bf)}return be},dequeue:function(bf,be){be=be||"fx";var e=a.queue(bf,be),bd=e.shift();if(bd==="inprogress"){bd=e.shift()}if(bd){if(be==="fx"){e.unshift("inprogress")}bd.call(bf,function(){a.dequeue(bf,be)})}if(!e.length){a.removeData(bf,be+"queue",true)}}});a.fn.extend({queue:function(e,bd){if(typeof e!=="string"){bd=e;e="fx"}if(bd===H){return a.queue(this[0],e)}return this.each(function(bf){var be=a.queue(this,e,bd);if(e==="fx"&&be[0]!=="inprogress"){a.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){a.dequeue(this,e)})},delay:function(bd,e){bd=a.fx?a.fx.speeds[bd]||bd:bd;e=e||"fx";return this.queue(e,function(){var be=this;setTimeout(function(){a.dequeue(be,e)},bd)})},clearQueue:function(e){return this.queue(e||"fx",[])}});var aC=/[\n\t\r]/g,a3=/\s+/,aG=/\r/g,a2=/^(?:href|src|style)$/,f=/^(?:button|input)$/i,C=/^(?:button|input|object|select|textarea)$/i,k=/^a(?:rea)?$/i,Q=/^(?:radio|checkbox)$/i;a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};a.fn.extend({attr:function(e,bd){return a.access(this,e,bd,true,a.attr)},removeAttr:function(e,bd){return this.each(function(){a.attr(this,e,"");if(this.nodeType===1){this.removeAttribute(e)}})},addClass:function(bj){if(a.isFunction(bj)){return this.each(function(bm){var bl=a(this);bl.addClass(bj.call(this,bm,bl.attr("class")))})}if(bj&&typeof bj==="string"){var e=(bj||"").split(a3);for(var bf=0,be=this.length;bf<be;bf++){var bd=this[bf];if(bd.nodeType===1){if(!bd.className){bd.className=bj}else{var bg=" "+bd.className+" ",bi=bd.className;for(var bh=0,bk=e.length;bh<bk;bh++){if(bg.indexOf(" "+e[bh]+" ")<0){bi+=" "+e[bh]}}bd.className=a.trim(bi)}}}}return this},removeClass:function(bh){if(a.isFunction(bh)){return this.each(function(bl){var bk=a(this);bk.removeClass(bh.call(this,bl,bk.attr("class")))})}if((bh&&typeof bh==="string")||bh===H){var bi=(bh||"").split(a3);for(var be=0,bd=this.length;be<bd;be++){var bg=this[be];if(bg.nodeType===1&&bg.className){if(bh){var bf=(" "+bg.className+" ").replace(aC," ");for(var bj=0,e=bi.length;bj<e;bj++){bf=bf.replace(" "+bi[bj]+" "," ")}bg.className=a.trim(bf)}else{bg.className=""}}}}return this},toggleClass:function(bf,bd){var be=typeof bf,e=typeof bd==="boolean";if(a.isFunction(bf)){return this.each(function(bh){var bg=a(this);bg.toggleClass(bf.call(this,bh,bg.attr("class"),bd),bd)})}return this.each(function(){if(be==="string"){var bi,bh=0,bg=a(this),bj=bd,bk=bf.split(a3);while((bi=bk[bh++])){bj=e?bj:!bg.hasClass(bi);bg[bj?"addClass":"removeClass"](bi)}}else{if(be==="undefined"||be==="boolean"){if(this.className){a._data(this,"__className__",this.className)}this.className=this.className||bf===false?"":a._data(this,"__className__")||""}}})},hasClass:function(e){var bf=" "+e+" ";for(var be=0,bd=this.length;be<bd;be++){if((" "+this[be].className+" ").replace(aC," ").indexOf(bf)>-1){return true}}return false},val:function(bk){if(!arguments.length){var be=this[0];if(be){if(a.nodeName(be,"option")){var bd=be.attributes.value;return !bd||bd.specified?be.value:be.text}if(a.nodeName(be,"select")){var bi=be.selectedIndex,bl=[],bm=be.options,bh=be.type==="select-one";if(bi<0){return null}for(var bf=bh?bi:0,bj=bh?bi+1:bm.length;bf<bj;bf++){var bg=bm[bf];if(bg.selected&&(a.support.optDisabled?!bg.disabled:bg.getAttribute("disabled")===null)&&(!bg.parentNode.disabled||!a.nodeName(bg.parentNode,"optgroup"))){bk=a(bg).val();if(bh){return bk}bl.push(bk)}}if(bh&&!bl.length&&bm.length){return a(bm[bi]).val()}return bl}if(Q.test(be.type)&&!a.support.checkOn){return be.getAttribute("value")===null?"on":be.value}return(be.value||"").replace(aG,"")}return H}var e=a.isFunction(bk);return this.each(function(bp){var bo=a(this),bq=bk;if(this.nodeType!==1){return}if(e){bq=bk.call(this,bp,bo.val())}if(bq==null){bq=""}else{if(typeof bq==="number"){bq+=""}else{if(a.isArray(bq)){bq=a.map(bq,function(br){return br==null?"":br+""})}}}if(a.isArray(bq)&&Q.test(this.type)){this.checked=a.inArray(bo.val(),bq)>=0}else{if(a.nodeName(this,"select")){var bn=a.makeArray(bq);a("option",this).each(function(){this.selected=a.inArray(a(this).val(),bn)>=0});if(!bn.length){this.selectedIndex=-1}}else{this.value=bq}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bd,e,bi,bl){if(!bd||bd.nodeType===3||bd.nodeType===8||bd.nodeType===2){return H}if(bl&&e in a.attrFn){return a(bd)[e](bi)}var be=bd.nodeType!==1||!a.isXMLDoc(bd),bh=bi!==H;e=be&&a.props[e]||e;if(bd.nodeType===1){var bg=a2.test(e);if(e==="selected"&&!a.support.optSelected){var bj=bd.parentNode;if(bj){bj.selectedIndex;if(bj.parentNode){bj.parentNode.selectedIndex}}}if((e in bd||bd[e]!==H)&&be&&!bg){if(bh){if(e==="type"&&f.test(bd.nodeName)&&bd.parentNode){a.error("type property can't be changed")}if(bi===null){if(bd.nodeType===1){bd.removeAttribute(e)}}else{bd[e]=bi}}if(a.nodeName(bd,"form")&&bd.getAttributeNode(e)){return bd.getAttributeNode(e).nodeValue}if(e==="tabIndex"){var bk=bd.getAttributeNode("tabIndex");return bk&&bk.specified?bk.value:C.test(bd.nodeName)||k.test(bd.nodeName)&&bd.href?0:H}return bd[e]}if(!a.support.style&&be&&e==="style"){if(bh){bd.style.cssText=""+bi}return bd.style.cssText}if(bh){bd.setAttribute(e,""+bi)}if(!bd.attributes[e]&&(bd.hasAttribute&&!bd.hasAttribute(e))){return H}var bf=!a.support.hrefNormalized&&be&&bg?bd.getAttribute(e,2):bd.getAttribute(e);return bf===null?H:bf}if(bh){bd[e]=bi}return bd[e]}});var aP=/\.(.*)$/,a0=/^(?:textarea|input|select)$/i,K=/\./g,aa=/ /g,aw=/[^\w\s.|`]/g,E=function(e){return e.replace(aw,"\\$&")};a.event={add:function(bg,bk,br,bi){if(bg.nodeType===3||bg.nodeType===8){return}try{if(a.isWindow(bg)&&(bg!==aY&&!bg.frameElement)){bg=aY}}catch(bl){}if(br===false){br=a5}else{if(!br){return}}var be,bp;if(br.handler){be=br;br=be.handler}if(!br.guid){br.guid=a.guid++}var bm=a._data(bg);if(!bm){return}var bq=bm.events,bj=bm.handle;if(!bq){bm.events=bq={}}if(!bj){bm.handle=bj=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(bj.elem,arguments):H}}bj.elem=bg;bk=bk.split(" ");var bo,bh=0,bd;while((bo=bk[bh++])){bp=be?a.extend({},be):{handler:br,data:bi};if(bo.indexOf(".")>-1){bd=bo.split(".");bo=bd.shift();bp.namespace=bd.slice(0).sort().join(".")}else{bd=[];bp.namespace=""}bp.type=bo;if(!bp.guid){bp.guid=br.guid}var bf=bq[bo],bn=a.event.special[bo]||{};if(!bf){bf=bq[bo]=[];if(!bn.setup||bn.setup.call(bg,bi,bd,bj)===false){if(bg.addEventListener){bg.addEventListener(bo,bj,false)}else{if(bg.attachEvent){bg.attachEvent("on"+bo,bj)}}}}if(bn.add){bn.add.call(bg,bp);if(!bp.handler.guid){bp.handler.guid=br.guid}}bf.push(bp);a.event.global[bo]=true}bg=null},global:{},remove:function(br,bm,be,bi){if(br.nodeType===3||br.nodeType===8){return}if(be===false){be=a5}var bu,bh,bj,bo,bp=0,bf,bk,bn,bg,bl,e,bt,bq=a.hasData(br)&&a._data(br),bd=bq&&bq.events;if(!bq||!bd){return}if(bm&&bm.type){be=bm.handler;bm=bm.type}if(!bm||typeof bm==="string"&&bm.charAt(0)==="."){bm=bm||"";for(bh in bd){a.event.remove(br,bh+bm)}return}bm=bm.split(" ");while((bh=bm[bp++])){bt=bh;e=null;bf=bh.indexOf(".")<0;bk=[];if(!bf){bk=bh.split(".");bh=bk.shift();bn=new RegExp("(^|\\.)"+a.map(bk.slice(0).sort(),E).join("\\.(?:.*\\.)?")+"(\\.|$)")}bl=bd[bh];if(!bl){continue}if(!be){for(bo=0;bo<bl.length;bo++){e=bl[bo];if(bf||bn.test(e.namespace)){a.event.remove(br,bt,e.handler,bo);bl.splice(bo--,1)}}continue}bg=a.event.special[bh]||{};for(bo=bi||0;bo<bl.length;bo++){e=bl[bo];if(be.guid===e.guid){if(bf||bn.test(e.namespace)){if(bi==null){bl.splice(bo--,1)}if(bg.remove){bg.remove.call(br,e)}}if(bi!=null){break}}}if(bl.length===0||bi!=null&&bl.length===1){if(!bg.teardown||bg.teardown.call(br,bk)===false){a.removeEvent(br,bh,bq.handle)}bu=null;delete bd[bh]}}if(a.isEmptyObject(bd)){var bs=bq.handle;if(bs){bs.elem=null}delete bq.events;delete bq.handle;if(a.isEmptyObject(bq)){a.removeData(br,H,true)}}},trigger:function(bd,bi,bf){var bm=bd.type||bd,bh=arguments[3];if(!bh){bd=typeof bd==="object"?bd[a.expando]?bd:a.extend(a.Event(bm),bd):a.Event(bm);if(bm.indexOf("!")>=0){bd.type=bm=bm.slice(0,-1);bd.exclusive=true}if(!bf){bd.stopPropagation();if(a.event.global[bm]){a.each(a.cache,function(){var br=a.expando,bq=this[br];if(bq&&bq.events&&bq.events[bm]){a.event.trigger(bd,bi,bq.handle.elem)}})}}if(!bf||bf.nodeType===3||bf.nodeType===8){return H}bd.result=H;bd.target=bf;bi=a.makeArray(bi);bi.unshift(bd)}bd.currentTarget=bf;var bj=a._data(bf,"handle");if(bj){bj.apply(bf,bi)}var bo=bf.parentNode||bf.ownerDocument;try{if(!(bf&&bf.nodeName&&a.noData[bf.nodeName.toLowerCase()])){if(bf["on"+bm]&&bf["on"+bm].apply(bf,bi)===false){bd.result=false;bd.preventDefault()}}}catch(bn){}if(!bd.isPropagationStopped()&&bo){a.event.trigger(bd,bi,bo,true)}else{if(!bd.isDefaultPrevented()){var be,bk=bd.target,e=bm.replace(aP,""),bp=a.nodeName(bk,"a")&&e==="click",bl=a.event.special[e]||{};if((!bl._default||bl._default.call(bf,bd)===false)&&!bp&&!(bk&&bk.nodeName&&a.noData[bk.nodeName.toLowerCase()])){try{if(bk[e]){be=bk["on"+e];if(be){bk["on"+e]=null}a.event.triggered=true;bk[e]()}}catch(bg){}if(be){bk["on"+e]=be}a.event.triggered=false}}}},handle:function(e){var bl,be,bd,bn,bm,bh=[],bj=a.makeArray(arguments);e=bj[0]=a.event.fix(e||aY.event);e.currentTarget=this;bl=e.type.indexOf(".")<0&&!e.exclusive;if(!bl){bd=e.type.split(".");e.type=bd.shift();bh=bd.slice(0).sort();bn=new RegExp("(^|\\.)"+bh.join("\\.(?:.*\\.)?")+"(\\.|$)")}e.namespace=e.namespace||bh.join(".");bm=a._data(this,"events");be=(bm||{})[e.type];if(bm&&be){be=be.slice(0);for(var bg=0,bf=be.length;bg<bf;bg++){var bk=be[bg];if(bl||bn.test(bk.namespace)){e.handler=bk.handler;e.data=bk.data;e.handleObj=bk;var bi=bk.handler.apply(this,bj);if(bi!==H){e.result=bi;if(bi===false){e.preventDefault();e.stopPropagation()}}if(e.isImmediatePropagationStopped()){break}}}}return e.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(bf){if(bf[a.expando]){return bf}var bd=bf;bf=a.Event(bd);for(var be=this.props.length,bh;be;){bh=this.props[--be];bf[bh]=bd[bh]}if(!bf.target){bf.target=bf.srcElement||al}if(bf.target.nodeType===3){bf.target=bf.target.parentNode}if(!bf.relatedTarget&&bf.fromElement){bf.relatedTarget=bf.fromElement===bf.target?bf.toElement:bf.fromElement}if(bf.pageX==null&&bf.clientX!=null){var bg=al.documentElement,e=al.body;bf.pageX=bf.clientX+(bg&&bg.scrollLeft||e&&e.scrollLeft||0)-(bg&&bg.clientLeft||e&&e.clientLeft||0);bf.pageY=bf.clientY+(bg&&bg.scrollTop||e&&e.scrollTop||0)-(bg&&bg.clientTop||e&&e.clientTop||0)}if(bf.which==null&&(bf.charCode!=null||bf.keyCode!=null)){bf.which=bf.charCode!=null?bf.charCode:bf.keyCode}if(!bf.metaKey&&bf.ctrlKey){bf.metaKey=bf.ctrlKey}if(!bf.which&&bf.button!==H){bf.which=(bf.button&1?1:(bf.button&2?3:(bf.button&4?2:0)))}return bf},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(e){a.event.add(this,n(e.origType,e.selector),a.extend({},e,{handler:af,guid:e.handler.guid}))},remove:function(e){a.event.remove(this,n(e.origType,e.selector),e)}},beforeunload:{setup:function(be,bd,e){if(a.isWindow(this)){this.onbeforeunload=e}},teardown:function(bd,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}}};a.removeEvent=al.removeEventListener?function(bd,e,be){if(bd.removeEventListener){bd.removeEventListener(e,be,false)}}:function(bd,e,be){if(bd.detachEvent){bd.detachEvent("on"+e,be)}};a.Event=function(e){if(!this.preventDefault){return new a.Event(e)}if(e&&e.type){this.originalEvent=e;this.type=e.type;this.isDefaultPrevented=(e.defaultPrevented||e.returnValue===false||e.getPreventDefault&&e.getPreventDefault())?h:a5}else{this.type=e}this.timeStamp=a.now();this[a.expando]=true};function a5(){return false}function h(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=h;var bd=this.originalEvent;if(!bd){return}if(bd.preventDefault){bd.preventDefault()}else{bd.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=h;var bd=this.originalEvent;if(!bd){return}if(bd.stopPropagation){bd.stopPropagation()}bd.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=h;this.stopPropagation()},isDefaultPrevented:a5,isPropagationStopped:a5,isImmediatePropagationStopped:a5};var Z=function(be){var bd=be.relatedTarget;try{if(bd!==al&&!bd.parentNode){return}while(bd&&bd!==this){bd=bd.parentNode}if(bd!==this){be.type=be.data;a.event.handle.apply(this,arguments)}}catch(bf){}},aK=function(e){e.type=e.data;a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bd,e){a.event.special[bd]={setup:function(be){a.event.add(this,e,be&&be.selector?aK:Z,bd)},teardown:function(be){a.event.remove(this,e,be&&be.selector?aK:Z)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(bd,e){if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(bg){var bf=bg.target,be=bf.type;if((be==="submit"||be==="image")&&a(bf).closest("form").length){aN("submit",this,arguments)}});a.event.add(this,"keypress.specialSubmit",function(bg){var bf=bg.target,be=bf.type;if((be==="text"||be==="password")&&a(bf).closest("form").length&&bg.keyCode===13){aN("submit",this,arguments)}})}else{return false}},teardown:function(e){a.event.remove(this,".specialSubmit")}}}if(!a.support.changeBubbles){var a6,j=function(bd){var e=bd.type,be=bd.value;if(e==="radio"||e==="checkbox"){be=bd.checked}else{if(e==="select-multiple"){be=bd.selectedIndex>-1?a.map(bd.options,function(bf){return bf.selected}).join("-"):""}else{if(bd.nodeName.toLowerCase()==="select"){be=bd.selectedIndex}}}return be},X=function X(bf){var bd=bf.target,be,bg;if(!a0.test(bd.nodeName)||bd.readOnly){return}be=a._data(bd,"_change_data");bg=j(bd);if(bf.type!=="focusout"||bd.type!=="radio"){a._data(bd,"_change_data",bg)}if(be===H||bg===be){return}if(be!=null||bg){bf.type="change";bf.liveFired=H;a.event.trigger(bf,arguments[1],bd)}};a.event.special.change={filters:{focusout:X,beforedeactivate:X,click:function(bf){var be=bf.target,bd=be.type;if(bd==="radio"||bd==="checkbox"||be.nodeName.toLowerCase()==="select"){X.call(this,bf)}},keydown:function(bf){var be=bf.target,bd=be.type;if((bf.keyCode===13&&be.nodeName.toLowerCase()!=="textarea")||(bf.keyCode===32&&(bd==="checkbox"||bd==="radio"))||bd==="select-multiple"){X.call(this,bf)}},beforeactivate:function(be){var bd=be.target;a._data(bd,"_change_data",j(bd))}},setup:function(be,bd){if(this.type==="file"){return false}for(var e in a6){a.event.add(this,e+".specialChange",a6[e])}return a0.test(this.nodeName)},teardown:function(e){a.event.remove(this,".specialChange");return a0.test(this.nodeName)}};a6=a.event.special.change.filters;a6.focus=a6.beforeactivate}function aN(bd,bf,e){var be=a.extend({},e[0]);be.type=bd;be.originalEvent={};be.liveFired=H;a.event.handle.call(bf,be);if(be.isDefaultPrevented()){e[0].preventDefault()}}if(al.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(be,e){a.event.special[e]={setup:function(){this.addEventListener(be,bd,true)},teardown:function(){this.removeEventListener(be,bd,true)}};function bd(bf){bf=a.event.fix(bf);bf.type=e;return a.event.handle.call(this,bf)}})}a.each(["bind","one"],function(bd,e){a.fn[e]=function(bj,bk,bi){if(typeof bj==="object"){for(var bg in bj){this[e](bg,bk,bj[bg],bi)}return this}if(a.isFunction(bk)||bk===false){bi=bk;bk=H}var bh=e==="one"?a.proxy(bi,function(bl){a(this).unbind(bl,bh);return bi.apply(this,arguments)}):bi;if(bj==="unload"&&e!=="one"){this.one(bj,bk,bi)}else{for(var bf=0,be=this.length;bf<be;bf++){a.event.add(this[bf],bj,bh,bk)}}return this}});a.fn.extend({unbind:function(bg,bf){if(typeof bg==="object"&&!bg.preventDefault){for(var be in bg){this.unbind(be,bg[be])}}else{for(var bd=0,e=this.length;bd<e;bd++){a.event.remove(this[bd],bg,bf)}}return this},delegate:function(e,bd,bf,be){return this.live(bd,bf,be,e)},undelegate:function(e,bd,be){if(arguments.length===0){return this.unbind("live")}else{return this.die(bd,null,be,e)}},trigger:function(e,bd){return this.each(function(){a.event.trigger(e,bd,this)})},triggerHandler:function(e,be){if(this[0]){var bd=a.Event(e);bd.preventDefault();bd.stopPropagation();a.event.trigger(bd,be,this[0]);return bd.result}},toggle:function(be){var e=arguments,bd=1;while(bd<e.length){a.proxy(be,e[bd++])}return this.click(a.proxy(be,function(bf){var bg=(a._data(this,"lastToggle"+be.guid)||0)%bd;a._data(this,"lastToggle"+be.guid,bg+1);bf.preventDefault();return e[bg].apply(this,arguments)||false}))},hover:function(e,bd){return this.mouseenter(e).mouseleave(bd||e)}});var aH={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};a.each(["live","die"],function(bd,e){a.fn[e]=function(bn,bk,bp,bg){var bo,bl=0,bm,bf,br,bi=bg||this.selector,be=bg?this:a(this.context);if(typeof bn==="object"&&!bn.preventDefault){for(var bq in bn){be[e](bq,bk,bn[bq],bi)}return this}if(a.isFunction(bk)){bp=bk;bk=H}bn=(bn||"").split(" ");while((bo=bn[bl++])!=null){bm=aP.exec(bo);bf="";if(bm){bf=bm[0];bo=bo.replace(aP,"")}if(bo==="hover"){bn.push("mouseenter"+bf,"mouseleave"+bf);continue}br=bo;if(bo==="focus"||bo==="blur"){bn.push(aH[bo]+bf);bo=bo+bf}else{bo=(aH[bo]||bo)+bf}if(e==="live"){for(var bj=0,bh=be.length;bj<bh;bj++){a.event.add(be[bj],"live."+n(bo,bi),{data:bk,selector:bi,handler:bp,origType:bo,origHandler:bp,preType:br})}}else{be.unbind("live."+n(bo,bi),bp)}}return this}});function af(bn){var bk,bf,bt,bh,e,bp,bm,bo,bl,bs,bj,bi,br,bq=[],bg=[],bd=a._data(this,"events");if(bn.liveFired===this||!bd||!bd.live||bn.target.disabled||bn.button&&bn.type==="click"){return}if(bn.namespace){bi=new RegExp("(^|\\.)"+bn.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}bn.liveFired=this;var be=bd.live.slice(0);for(bm=0;bm<be.length;bm++){e=be[bm];if(e.origType.replace(aP,"")===bn.type){bg.push(e.selector)}else{be.splice(bm--,1)}}bh=a(bn.target).closest(bg,bn.currentTarget);for(bo=0,bl=bh.length;bo<bl;bo++){bj=bh[bo];for(bm=0;bm<be.length;bm++){e=be[bm];if(bj.selector===e.selector&&(!bi||bi.test(e.namespace))&&!bj.elem.disabled){bp=bj.elem;bt=null;if(e.preType==="mouseenter"||e.preType==="mouseleave"){bn.type=e.preType;bt=a(bn.relatedTarget).closest(e.selector)[0]}if(!bt||bt!==bp){bq.push({elem:bp,handleObj:e,level:bj.level})}}}}for(bo=0,bl=bq.length;bo<bl;bo++){bh=bq[bo];if(bf&&bh.level>bf){break}bn.currentTarget=bh.elem;bn.data=bh.handleObj.data;bn.handleObj=bh.handleObj;br=bh.handleObj.origHandler.apply(bh.elem,arguments);if(br===false||bn.isPropagationStopped()){bf=bh.level;if(br===false){bk=false}if(bn.isImmediatePropagationStopped()){break}}}return bk}function n(bd,e){return(bd&&bd!=="*"?bd+".":"")+e.replace(K,"`").replace(aa,"&")}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(bd,e){a.fn[e]=function(bf,be){if(be==null){be=bf;bf=null}return arguments.length>0?this.bind(e,bf,be):this.trigger(e)};if(a.attrFn){a.attrFn[e]=true}});
/*
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bn=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bo=0,br=Object.prototype.toString,bi=false,bh=true,bp=/\\/g,bv=/\W/;[0,0].sort(function(){bh=false;return 0});var bf=function(bA,e,bD,bE){bD=bD||[];e=e||al;var bG=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!bA||typeof bA!=="string"){return bD}var bx,bI,bL,bw,bH,bK,bJ,bC,bz=true,by=bf.isXML(e),bB=[],bF=bA;do{bn.exec("");bx=bn.exec(bF);if(bx){bF=bx[3];bB.push(bx[1]);if(bx[2]){bw=bx[3];break}}}while(bx);if(bB.length>1&&bj.exec(bA)){if(bB.length===2&&bk.relative[bB[0]]){bI=bs(bB[0]+bB[1],e)}else{bI=bk.relative[bB[0]]?[e]:bf(bB.shift(),e);while(bB.length){bA=bB.shift();if(bk.relative[bA]){bA+=bB.shift()}bI=bs(bA,bI)}}}else{if(!bE&&bB.length>1&&e.nodeType===9&&!by&&bk.match.ID.test(bB[0])&&!bk.match.ID.test(bB[bB.length-1])){bH=bf.find(bB.shift(),e,by);e=bH.expr?bf.filter(bH.expr,bH.set)[0]:bH.set[0]}if(e){bH=bE?{expr:bB.pop(),set:bl(bE)}:bf.find(bB.pop(),bB.length===1&&(bB[0]==="~"||bB[0]==="+")&&e.parentNode?e.parentNode:e,by);bI=bH.expr?bf.filter(bH.expr,bH.set):bH.set;if(bB.length>0){bL=bl(bI)}else{bz=false}while(bB.length){bK=bB.pop();bJ=bK;if(!bk.relative[bK]){bK=""}else{bJ=bB.pop()}if(bJ==null){bJ=e}bk.relative[bK](bL,bJ,by)}}else{bL=bB=[]}}if(!bL){bL=bI}if(!bL){bf.error(bK||bA)}if(br.call(bL)==="[object Array]"){if(!bz){bD.push.apply(bD,bL)}else{if(e&&e.nodeType===1){for(bC=0;bL[bC]!=null;bC++){if(bL[bC]&&(bL[bC]===true||bL[bC].nodeType===1&&bf.contains(e,bL[bC]))){bD.push(bI[bC])}}}else{for(bC=0;bL[bC]!=null;bC++){if(bL[bC]&&bL[bC].nodeType===1){bD.push(bI[bC])}}}}}else{bl(bL,bD)}if(bw){bf(bw,bG,bD,bE);bf.uniqueSort(bD)}return bD};bf.uniqueSort=function(bw){if(bq){bi=bh;bw.sort(bq);if(bi){for(var e=1;e<bw.length;e++){if(bw[e]===bw[e-1]){bw.splice(e--,1)}}}}return bw};bf.matches=function(e,bw){return bf(e,null,null,bw)};bf.matchesSelector=function(e,bw){return bf(bw,null,null,[e]).length>0};bf.find=function(bC,e,bD){var bB;if(!bC){return[]}for(var by=0,bx=bk.order.length;by<bx;by++){var bz,bA=bk.order[by];if((bz=bk.leftMatch[bA].exec(bC))){var bw=bz[1];bz.splice(1,1);if(bw.substr(bw.length-1)!=="\\"){bz[1]=(bz[1]||"").replace(bp,"");bB=bk.find[bA](bz,e,bD);if(bB!=null){bC=bC.replace(bk.match[bA],"");break}}}}if(!bB){bB=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:bB,expr:bC}};bf.filter=function(bG,bF,bJ,bz){var bB,e,bx=bG,bL=[],bD=bF,bC=bF&&bF[0]&&bf.isXML(bF[0]);while(bG&&bF.length){for(var bE in bk.filter){if((bB=bk.leftMatch[bE].exec(bG))!=null&&bB[2]){var bK,bI,bw=bk.filter[bE],by=bB[1];e=false;bB.splice(1,1);if(by.substr(by.length-1)==="\\"){continue}if(bD===bL){bL=[]}if(bk.preFilter[bE]){bB=bk.preFilter[bE](bB,bD,bJ,bL,bz,bC);if(!bB){e=bK=true}else{if(bB===true){continue}}}if(bB){for(var bA=0;(bI=bD[bA])!=null;bA++){if(bI){bK=bw(bI,bB,bA,bD);var bH=bz^!!bK;if(bJ&&bK!=null){if(bH){e=true}else{bD[bA]=false}}else{if(bH){bL.push(bI);e=true}}}}}if(bK!==H){if(!bJ){bD=bL}bG=bG.replace(bk.match[bE],"");if(!e){return[]}break}}}if(bG===bx){if(e==null){bf.error(bG)}else{break}}bx=bG}return bD};bf.error=function(e){throw"Syntax error, unrecognized expression: "+e};var bk=bf.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(bB,bw){var by=typeof bw==="string",bA=by&&!bv.test(bw),bC=by&&!bA;if(bA){bw=bw.toLowerCase()}for(var bx=0,e=bB.length,bz;bx<e;bx++){if((bz=bB[bx])){while((bz=bz.previousSibling)&&bz.nodeType!==1){}bB[bx]=bC||bz&&bz.nodeName.toLowerCase()===bw?bz||false:bz===bw}}if(bC){bf.filter(bw,bB,true)}},">":function(bB,bw){var bA,bz=typeof bw==="string",bx=0,e=bB.length;if(bz&&!bv.test(bw)){bw=bw.toLowerCase();for(;bx<e;bx++){bA=bB[bx];if(bA){var by=bA.parentNode;bB[bx]=by.nodeName.toLowerCase()===bw?by:false}}}else{for(;bx<e;bx++){bA=bB[bx];if(bA){bB[bx]=bz?bA.parentNode:bA.parentNode===bw}}if(bz){bf.filter(bw,bB,true)}}},"":function(by,bw,bA){var bz,bx=bo++,e=bt;if(typeof bw==="string"&&!bv.test(bw)){bw=bw.toLowerCase();bz=bw;e=bd}e("parentNode",bw,bx,by,bz,bA)},"~":function(by,bw,bA){var bz,bx=bo++,e=bt;if(typeof bw==="string"&&!bv.test(bw)){bw=bw.toLowerCase();bz=bw;e=bd}e("previousSibling",bw,bx,by,bz,bA)}},find:{ID:function(bw,bx,by){if(typeof bx.getElementById!=="undefined"&&!by){var e=bx.getElementById(bw[1]);return e&&e.parentNode?[e]:[]}},NAME:function(bx,bA){if(typeof bA.getElementsByName!=="undefined"){var bw=[],bz=bA.getElementsByName(bx[1]);for(var by=0,e=bz.length;by<e;by++){if(bz[by].getAttribute("name")===bx[1]){bw.push(bz[by])}}return bw.length===0?null:bw}},TAG:function(e,bw){if(typeof bw.getElementsByTagName!=="undefined"){return bw.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(by,bw,bx,e,bB,bC){by=" "+by[1].replace(bp,"")+" ";if(bC){return by}for(var bz=0,bA;(bA=bw[bz])!=null;bz++){if(bA){if(bB^(bA.className&&(" "+bA.className+" ").replace(/[\t\n\r]/g," ").indexOf(by)>=0)){if(!bx){e.push(bA)}}else{if(bx){bw[bz]=false}}}}return false},ID:function(e){return e[1].replace(bp,"")},TAG:function(bw,e){return bw[1].replace(bp,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){bf.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var bw=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(bw[1]+(bw[2]||1))-0;e[3]=bw[3]-0}else{if(e[2]){bf.error(e[0])}}e[0]=bo++;return e},ATTR:function(bz,bw,bx,e,bA,bB){var by=bz[1]=bz[1].replace(bp,"");if(!bB&&bk.attrMap[by]){bz[1]=bk.attrMap[by]}bz[4]=(bz[4]||bz[5]||"").replace(bp,"");if(bz[2]==="~="){bz[4]=" "+bz[4]+" "}return bz},PSEUDO:function(bz,bw,bx,e,bA){if(bz[1]==="not"){if((bn.exec(bz[3])||"").length>1||/^\w/.test(bz[3])){bz[3]=bf(bz[3],null,null,bw)}else{var by=bf.filter(bz[3],bw,bx,true^bA);if(!bx){e.push.apply(e,by)}return false}}else{if(bk.match.POS.test(bz[0])||bk.match.CHILD.test(bz[0])){return true}}return bz},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(bx,bw,e){return !!bf(e[3],bx).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(e){return"text"===e.getAttribute("type")},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)}},setFilters:{first:function(bw,e){return e===0},last:function(bx,bw,e,by){return bw===by.length-1},even:function(bw,e){return e%2===0},odd:function(bw,e){return e%2===1},lt:function(bx,bw,e){return bw<e[3]-0},gt:function(bx,bw,e){return bw>e[3]-0},nth:function(bx,bw,e){return e[3]-0===bw},eq:function(bx,bw,e){return e[3]-0===bw}},filter:{PSEUDO:function(bx,bC,bB,bD){var e=bC[1],bw=bk.filters[e];if(bw){return bw(bx,bB,bC,bD)}else{if(e==="contains"){return(bx.textContent||bx.innerText||bf.getText([bx])||"").indexOf(bC[3])>=0}else{if(e==="not"){var by=bC[3];for(var bA=0,bz=by.length;bA<bz;bA++){if(by[bA]===bx){return false}}return true}else{bf.error(e)}}}},CHILD:function(e,by){var bB=by[1],bw=e;switch(bB){case"only":case"first":while((bw=bw.previousSibling)){if(bw.nodeType===1){return false}}if(bB==="first"){return true}bw=e;case"last":while((bw=bw.nextSibling)){if(bw.nodeType===1){return false}}return true;case"nth":var bx=by[2],bE=by[3];if(bx===1&&bE===0){return true}var bA=by[0],bD=e.parentNode;if(bD&&(bD.sizcache!==bA||!e.nodeIndex)){var bz=0;for(bw=bD.firstChild;bw;bw=bw.nextSibling){if(bw.nodeType===1){bw.nodeIndex=++bz}}bD.sizcache=bA}var bC=e.nodeIndex-bE;if(bx===0){return bC===0}else{return(bC%bx===0&&bC/bx>=0)}}},ID:function(bw,e){return bw.nodeType===1&&bw.getAttribute("id")===e},TAG:function(bw,e){return(e==="*"&&bw.nodeType===1)||bw.nodeName.toLowerCase()===e},CLASS:function(bw,e){return(" "+(bw.className||bw.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(bA,by){var bx=by[1],e=bk.attrHandle[bx]?bk.attrHandle[bx](bA):bA[bx]!=null?bA[bx]:bA.getAttribute(bx),bB=e+"",bz=by[2],bw=by[4];return e==null?bz==="!=":bz==="="?bB===bw:bz==="*="?bB.indexOf(bw)>=0:bz==="~="?(" "+bB+" ").indexOf(bw)>=0:!bw?bB&&e!==false:bz==="!="?bB!==bw:bz==="^="?bB.indexOf(bw)===0:bz==="$="?bB.substr(bB.length-bw.length)===bw:bz==="|="?bB===bw||bB.substr(0,bw.length+1)===bw+"-":false},POS:function(bz,bw,bx,bA){var e=bw[2],by=bk.setFilters[e];if(by){return by(bz,bx,bw,bA)}}}};var bj=bk.match.POS,be=function(bw,e){return"\\"+(e-0+1)};for(var bg in bk.match){bk.match[bg]=new RegExp(bk.match[bg].source+(/(?![^\[]*\])(?![^\(]*\))/.source));bk.leftMatch[bg]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bk.match[bg].source.replace(/\\(\d+)/g,be))}var bl=function(bw,e){bw=Array.prototype.slice.call(bw,0);if(e){e.push.apply(e,bw);return e}return bw};try{Array.prototype.slice.call(al.documentElement.childNodes,0)[0].nodeType}catch(bu){bl=function(bz,by){var bx=0,bw=by||[];if(br.call(bz)==="[object Array]"){Array.prototype.push.apply(bw,bz)}else{if(typeof bz.length==="number"){for(var e=bz.length;bx<e;bx++){bw.push(bz[bx])}}else{for(;bz[bx];bx++){bw.push(bz[bx])}}}return bw}}var bq,bm;if(al.documentElement.compareDocumentPosition){bq=function(bw,e){if(bw===e){bi=true;return 0}if(!bw.compareDocumentPosition||!e.compareDocumentPosition){return bw.compareDocumentPosition?-1:1}return bw.compareDocumentPosition(e)&4?-1:1}}else{bq=function(bD,bC){var bA,bw,bx=[],e=[],bz=bD.parentNode,bB=bC.parentNode,bE=bz;if(bD===bC){bi=true;return 0}else{if(bz===bB){return bm(bD,bC)}else{if(!bz){return -1}else{if(!bB){return 1}}}}while(bE){bx.unshift(bE);bE=bE.parentNode}bE=bB;while(bE){e.unshift(bE);bE=bE.parentNode}bA=bx.length;bw=e.length;for(var by=0;by<bA&&by<bw;by++){if(bx[by]!==e[by]){return bm(bx[by],e[by])}}return by===bA?bm(bD,e[by],-1):bm(bx[by],bC,1)};bm=function(bw,e,bx){if(bw===e){return bx}var by=bw.nextSibling;while(by){if(by===e){return -1}by=by.nextSibling}return 1}}bf.getText=function(e){var bw="",by;for(var bx=0;e[bx];bx++){by=e[bx];if(by.nodeType===3||by.nodeType===4){bw+=by.nodeValue}else{if(by.nodeType!==8){bw+=bf.getText(by.childNodes)}}}return bw};(function(){var bw=al.createElement("div"),bx="script"+(new Date()).getTime(),e=al.documentElement;bw.innerHTML="<a name='"+bx+"'/>";e.insertBefore(bw,e.firstChild);if(al.getElementById(bx)){bk.find.ID=function(bz,bA,bB){if(typeof bA.getElementById!=="undefined"&&!bB){var by=bA.getElementById(bz[1]);return by?by.id===bz[1]||typeof by.getAttributeNode!=="undefined"&&by.getAttributeNode("id").nodeValue===bz[1]?[by]:H:[]}};bk.filter.ID=function(bA,by){var bz=typeof bA.getAttributeNode!=="undefined"&&bA.getAttributeNode("id");return bA.nodeType===1&&bz&&bz.nodeValue===by}}e.removeChild(bw);e=bw=null})();(function(){var e=al.createElement("div");e.appendChild(al.createComment(""));if(e.getElementsByTagName("*").length>0){bk.find.TAG=function(bw,bA){var bz=bA.getElementsByTagName(bw[1]);if(bw[1]==="*"){var by=[];for(var bx=0;bz[bx];bx++){if(bz[bx].nodeType===1){by.push(bz[bx])}}bz=by}return bz}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){bk.attrHandle.href=function(bw){return bw.getAttribute("href",2)}}e=null})();if(al.querySelectorAll){(function(){var e=bf,by=al.createElement("div"),bx="__sizzle__";by.innerHTML="<p class='TEST'></p>";if(by.querySelectorAll&&by.querySelectorAll(".TEST").length===0){return}bf=function(bJ,bA,bE,bI){bA=bA||al;if(!bI&&!bf.isXML(bA)){var bH=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(bJ);if(bH&&(bA.nodeType===1||bA.nodeType===9)){if(bH[1]){return bl(bA.getElementsByTagName(bJ),bE)}else{if(bH[2]&&bk.find.CLASS&&bA.getElementsByClassName){return bl(bA.getElementsByClassName(bH[2]),bE)}}}if(bA.nodeType===9){if(bJ==="body"&&bA.body){return bl([bA.body],bE)}else{if(bH&&bH[3]){var bD=bA.getElementById(bH[3]);if(bD&&bD.parentNode){if(bD.id===bH[3]){return bl([bD],bE)}}else{return bl([],bE)}}}try{return bl(bA.querySelectorAll(bJ),bE)}catch(bF){}}else{if(bA.nodeType===1&&bA.nodeName.toLowerCase()!=="object"){var bB=bA,bC=bA.getAttribute("id"),bz=bC||bx,bL=bA.parentNode,bK=/^\s*[+~]/.test(bJ);if(!bC){bA.setAttribute("id",bz)}else{bz=bz.replace(/'/g,"\\$&")}if(bK&&bL){bA=bA.parentNode}try{if(!bK||bL){return bl(bA.querySelectorAll("[id='"+bz+"'] "+bJ),bE)}}catch(bG){}finally{if(!bC){bB.removeAttribute("id")}}}}}return e(bJ,bA,bE,bI)};for(var bw in e){bf[bw]=e[bw]}by=null})()}(function(){var e=al.documentElement,bx=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,bw=false;try{bx.call(al.documentElement,"[test!='']:sizzle")}catch(by){bw=true}if(bx){bf.matchesSelector=function(bz,bB){bB=bB.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!bf.isXML(bz)){try{if(bw||!bk.match.PSEUDO.test(bB)&&!/!=/.test(bB)){return bx.call(bz,bB)}}catch(bA){}}return bf(bB,null,null,[bz]).length>0}}})();(function(){var e=al.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}bk.order.splice(1,0,"CLASS");bk.find.CLASS=function(bw,bx,by){if(typeof bx.getElementsByClassName!=="undefined"&&!by){return bx.getElementsByClassName(bw[1])}};e=null})();function bd(bw,bB,bA,bE,bC,bD){for(var by=0,bx=bE.length;by<bx;by++){var e=bE[by];if(e){var bz=false;e=e[bw];while(e){if(e.sizcache===bA){bz=bE[e.sizset];break}if(e.nodeType===1&&!bD){e.sizcache=bA;e.sizset=by}if(e.nodeName.toLowerCase()===bB){bz=e;break}e=e[bw]}bE[by]=bz}}}function bt(bw,bB,bA,bE,bC,bD){for(var by=0,bx=bE.length;by<bx;by++){var e=bE[by];if(e){var bz=false;e=e[bw];while(e){if(e.sizcache===bA){bz=bE[e.sizset];break}if(e.nodeType===1){if(!bD){e.sizcache=bA;e.sizset=by}if(typeof bB!=="string"){if(e===bB){bz=true;break}}else{if(bf.filter(bB,[e]).length>0){bz=e;break}}}e=e[bw]}bE[by]=bz}}}if(al.documentElement.contains){bf.contains=function(bw,e){return bw!==e&&(bw.contains?bw.contains(e):true)}}else{if(al.documentElement.compareDocumentPosition){bf.contains=function(bw,e){return !!(bw.compareDocumentPosition(e)&16)}}else{bf.contains=function(){return false}}}bf.isXML=function(e){var bw=(e?e.ownerDocument||e:0).documentElement;return bw?bw.nodeName!=="HTML":false};var bs=function(e,bC){var bA,by=[],bz="",bx=bC.nodeType?[bC]:bC;while((bA=bk.match.PSEUDO.exec(e))){bz+=bA[0];e=e.replace(bk.match.PSEUDO,"")}e=bk.relative[e]?e+"*":e;for(var bB=0,bw=bx.length;bB<bw;bB++){bf(e,bx[bB],by)}return bf.filter(bz,by)};a.find=bf;a.expr=bf.selectors;a.expr[":"]=a.expr.filters;a.unique=bf.uniqueSort;a.text=bf.getText;a.isXMLDoc=bf.isXML;a.contains=bf.contains})();var W=/Until$/,ai=/^(?:parents|prevUntil|prevAll)/,aW=/,/,a9=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,F=a.expr.match.POS,ao={children:true,contents:true,next:true,prev:true};a.fn.extend({find:function(e){var be=this.pushStack("","find",e),bh=0;for(var bf=0,bd=this.length;bf<bd;bf++){bh=be.length;a.find(e,this[bf],be);if(bf>0){for(var bi=bh;bi<be.length;bi++){for(var bg=0;bg<bh;bg++){if(be[bg]===be[bi]){be.splice(bi--,1);break}}}}}return be},has:function(bd){var e=a(bd);return this.filter(function(){for(var bf=0,be=e.length;bf<be;bf++){if(a.contains(this,e[bf])){return true}}})},not:function(e){return this.pushStack(av(this,e,false),"not",e)},filter:function(e){return this.pushStack(av(this,e,true),"filter",e)},is:function(e){return !!e&&a.filter(e,this).length>0},closest:function(bm,bd){var bj=[],bg,be,bl=this[0];if(a.isArray(bm)){var bi,bf,bh={},e=1;if(bl&&bm.length){for(bg=0,be=bm.length;bg<be;bg++){bf=bm[bg];if(!bh[bf]){bh[bf]=a.expr.match.POS.test(bf)?a(bf,bd||this.context):bf}}while(bl&&bl.ownerDocument&&bl!==bd){for(bf in bh){bi=bh[bf];if(bi.jquery?bi.index(bl)>-1:a(bl).is(bi)){bj.push({selector:bf,elem:bl,level:e})}}bl=bl.parentNode;e++}}return bj}var bk=F.test(bm)?a(bm,bd||this.context):null;for(bg=0,be=this.length;bg<be;bg++){bl=this[bg];while(bl){if(bk?bk.index(bl)>-1:a.find.matchesSelector(bl,bm)){bj.push(bl);break}else{bl=bl.parentNode;if(!bl||!bl.ownerDocument||bl===bd){break}}}}bj=bj.length>1?a.unique(bj):bj;return this.pushStack(bj,"closest",bm)},index:function(e){if(!e||typeof e==="string"){return a.inArray(this[0],e?a(e):this.parent().children())}return a.inArray(e.jquery?e[0]:e,this)},add:function(e,bd){var bf=typeof e==="string"?a(e,bd):a.makeArray(e),be=a.merge(this.get(),bf);return this.pushStack(B(bf[0])||B(be[0])?be:a.unique(be))},andSelf:function(){return this.add(this.prevObject)}});function B(e){return !e||!e.parentNode||e.parentNode.nodeType===11}a.each({parent:function(bd){var e=bd.parentNode;return e&&e.nodeType!==11?e:null},parents:function(e){return a.dir(e,"parentNode")},parentsUntil:function(bd,e,be){return a.dir(bd,"parentNode",be)},next:function(e){return a.nth(e,2,"nextSibling")},prev:function(e){return a.nth(e,2,"previousSibling")},nextAll:function(e){return a.dir(e,"nextSibling")},prevAll:function(e){return a.dir(e,"previousSibling")},nextUntil:function(bd,e,be){return a.dir(bd,"nextSibling",be)},prevUntil:function(bd,e,be){return a.dir(bd,"previousSibling",be)},siblings:function(e){return a.sibling(e.parentNode.firstChild,e)},children:function(e){return a.sibling(e.firstChild)},contents:function(e){return a.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:a.makeArray(e.childNodes)}},function(e,bd){a.fn[e]=function(bh,be){var bg=a.map(this,bd,bh),bf=M.call(arguments);if(!W.test(e)){be=bh}if(be&&typeof be==="string"){bg=a.filter(be,bg)}bg=this.length>1&&!ao[e]?a.unique(bg):bg;if((this.length>1||aW.test(be))&&ai.test(e)){bg=bg.reverse()}return this.pushStack(bg,e,bf.join(","))}});a.extend({filter:function(be,e,bd){if(bd){be=":not("+be+")"}return e.length===1?a.find.matchesSelector(e[0],be)?[e[0]]:[]:a.find.matches(be,e)},dir:function(be,bd,bg){var e=[],bf=be[bd];while(bf&&bf.nodeType!==9&&(bg===H||bf.nodeType!==1||!a(bf).is(bg))){if(bf.nodeType===1){e.push(bf)}bf=bf[bd]}return e},nth:function(bg,e,be,bf){e=e||1;var bd=0;for(;bg;bg=bg[be]){if(bg.nodeType===1&&++bd===e){break}}return bg},sibling:function(be,bd){var e=[];for(;be;be=be.nextSibling){if(be.nodeType===1&&be!==bd){e.push(be)}}return e}});function av(bf,be,e){if(a.isFunction(be)){return a.grep(bf,function(bh,bg){var bi=!!be.call(bh,bg,bh);return bi===e})}else{if(be.nodeType){return a.grep(bf,function(bh,bg){return(bh===be)===e})}else{if(typeof be==="string"){var bd=a.grep(bf,function(bg){return bg.nodeType===1});if(a9.test(be)){return a.filter(be,bd,!e)}else{be=a.filter(be,bd)}}}}return a.grep(bf,function(bh,bg){return(a.inArray(bh,be)>=0)===e})}var ab=/ jQuery\d+="(?:\d+|null)"/g,aj=/^\s+/,O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,c=/<([\w:]+)/,v=/<tbody/i,T=/<|&#?\w+;/,L=/<(?:script|object|embed|option|style)/i,m=/checked\s*(?:[^=]|=\s*.checked.)/i,an={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};an.optgroup=an.option;an.tbody=an.tfoot=an.colgroup=an.caption=an.thead;an.th=an.td;if(!a.support.htmlSerialize){an._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(e){if(a.isFunction(e)){return this.each(function(be){var bd=a(this);bd.text(e.call(this,be,bd.text()))})}if(typeof e!=="object"&&e!==H){return this.empty().append((this[0]&&this[0].ownerDocument||al).createTextNode(e))}return a.text(this)},wrapAll:function(e){if(a.isFunction(e)){return this.each(function(be){a(this).wrapAll(e.call(this,be))})}if(this[0]){var bd=a(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bd.insertBefore(this[0])}bd.map(function(){var be=this;while(be.firstChild&&be.firstChild.nodeType===1){be=be.firstChild}return be}).append(this)}return this},wrapInner:function(e){if(a.isFunction(e)){return this.each(function(bd){a(this).wrapInner(e.call(this,bd))})}return this.each(function(){var bd=a(this),be=bd.contents();if(be.length){be.wrapAll(e)}else{bd.append(e)}})},wrap:function(e){return this.each(function(){a(this).wrapAll(e)})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.insertBefore(e,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bd){this.parentNode.insertBefore(bd,this)})}else{if(arguments.length){var e=a(arguments[0]);e.push.apply(e,this.toArray());return this.pushStack(e,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bd){this.parentNode.insertBefore(bd,this.nextSibling)})}else{if(arguments.length){var e=this.pushStack(this,"after",arguments);e.push.apply(e,a(arguments[0]).toArray());return e}}},remove:function(e,bf){for(var bd=0,be;(be=this[bd])!=null;bd++){if(!e||a.filter(e,[be]).length){if(!bf&&be.nodeType===1){a.cleanData(be.getElementsByTagName("*"));a.cleanData([be])}if(be.parentNode){be.parentNode.removeChild(be)}}}return this},empty:function(){for(var e=0,bd;(bd=this[e])!=null;e++){if(bd.nodeType===1){a.cleanData(bd.getElementsByTagName("*"))}while(bd.firstChild){bd.removeChild(bd.firstChild)}}return this},clone:function(bd,e){bd=bd==null?false:bd;e=e==null?bd:e;return this.map(function(){return a.clone(this,bd,e)})},html:function(bf){if(bf===H){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(ab,""):null}else{if(typeof bf==="string"&&!L.test(bf)&&(a.support.leadingWhitespace||!aj.test(bf))&&!an[(c.exec(bf)||["",""])[1].toLowerCase()]){bf=bf.replace(O,"<$1></$2>");try{for(var be=0,bd=this.length;be<bd;be++){if(this[be].nodeType===1){a.cleanData(this[be].getElementsByTagName("*"));this[be].innerHTML=bf}}}catch(bg){this.empty().append(bf)}}else{if(a.isFunction(bf)){this.each(function(bh){var e=a(this);e.html(bf.call(this,bh,e.html()))})}else{this.empty().append(bf)}}}return this},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(a.isFunction(e)){return this.each(function(bf){var be=a(this),bd=be.html();be.replaceWith(e.call(this,bf,bd))})}if(typeof e!=="string"){e=a(e).detach()}return this.each(function(){var be=this.nextSibling,bd=this.parentNode;a(this).remove();if(be){a(be).before(e)}else{a(bd).append(e)}})}else{return this.pushStack(a(a.isFunction(e)?e():e),"replaceWith",e)}},detach:function(e){return this.remove(e,true)},domManip:function(bj,bn,bm){var bf,bg,bi,bl,bk=bj[0],bd=[];if(!a.support.checkClone&&arguments.length===3&&typeof bk==="string"&&m.test(bk)){return this.each(function(){a(this).domManip(bj,bn,bm,true)})}if(a.isFunction(bk)){return this.each(function(bp){var bo=a(this);bj[0]=bk.call(this,bp,bn?bo.html():H);bo.domManip(bj,bn,bm)})}if(this[0]){bl=bk&&bk.parentNode;if(a.support.parentNode&&bl&&bl.nodeType===11&&bl.childNodes.length===this.length){bf={fragment:bl}}else{bf=a.buildFragment(bj,this,bd)}bi=bf.fragment;if(bi.childNodes.length===1){bg=bi=bi.firstChild}else{bg=bi.firstChild}if(bg){bn=bn&&a.nodeName(bg,"tr");for(var be=0,e=this.length,bh=e-1;be<e;be++){bm.call(bn?aX(this[be],bg):this[be],bf.cacheable||(e>1&&be<bh)?a.clone(bi,true,true):bi)}}if(bd.length){a.each(bd,a8)}}return this}});function aX(e,bd){return a.nodeName(e,"table")?(e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody"))):e}function s(e,bj){if(bj.nodeType!==1||!a.hasData(e)){return}var bi=a.expando,bf=a.data(e),bg=a.data(bj,bf);if((bf=bf[bi])){var bk=bf.events;bg=bg[bi]=a.extend({},bf);if(bk){delete bg.handle;bg.events={};for(var bh in bk){for(var be=0,bd=bk[bh].length;be<bd;be++){a.event.add(bj,bh+(bk[bh][be].namespace?".":"")+bk[bh][be].namespace,bk[bh][be],bk[bh][be].data)}}}}}function ac(bd,e){if(e.nodeType!==1){return}var be=e.nodeName.toLowerCase();e.clearAttributes();e.mergeAttributes(bd);if(be==="object"){e.outerHTML=bd.outerHTML}else{if(be==="input"&&(bd.type==="checkbox"||bd.type==="radio")){if(bd.checked){e.defaultChecked=e.checked=bd.checked}if(e.value!==bd.value){e.value=bd.value}}else{if(be==="option"){e.selected=bd.defaultSelected}else{if(be==="input"||be==="textarea"){e.defaultValue=bd.defaultValue}}}}e.removeAttribute(a.expando)}a.buildFragment=function(bh,bf,bd){var bg,e,be,bi=(bf&&bf[0]?bf[0].ownerDocument||bf[0]:al);if(bh.length===1&&typeof bh[0]==="string"&&bh[0].length<512&&bi===al&&bh[0].charAt(0)==="<"&&!L.test(bh[0])&&(a.support.checkClone||!m.test(bh[0]))){e=true;be=a.fragments[bh[0]];if(be){if(be!==1){bg=be}}}if(!bg){bg=bi.createDocumentFragment();a.clean(bh,bi,bg,bd)}if(e){a.fragments[bh[0]]=be?bg:1}return{fragment:bg,cacheable:e}};a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bd){a.fn[e]=function(be){var bh=[],bk=a(be),bj=this.length===1&&this[0].parentNode;if(bj&&bj.nodeType===11&&bj.childNodes.length===1&&bk.length===1){bk[bd](this[0]);return this}else{for(var bi=0,bf=bk.length;bi<bf;bi++){var bg=(bi>0?this.clone(true):this).get();a(bk[bi])[bd](bg);bh=bh.concat(bg)}return this.pushStack(bh,e,bk.selector)}}});function a1(e){if("getElementsByTagName" in e){return e.getElementsByTagName("*")}else{if("querySelectorAll" in e){return e.querySelectorAll("*")}else{return[]}}}a.extend({clone:function(bg,bi,be){var bh=bg.cloneNode(true),e,bd,bf;if((!a.support.noCloneEvent||!a.support.noCloneChecked)&&(bg.nodeType===1||bg.nodeType===11)&&!a.isXMLDoc(bg)){ac(bg,bh);e=a1(bg);bd=a1(bh);for(bf=0;e[bf];++bf){ac(e[bf],bd[bf])}}if(bi){s(bg,bh);if(be){e=a1(bg);bd=a1(bh);for(bf=0;e[bf];++bf){s(e[bf],bd[bf])}}}return bh},clean:function(be,bg,bn,bi){bg=bg||al;if(typeof bg.createElement==="undefined"){bg=bg.ownerDocument||bg[0]&&bg[0].ownerDocument||al}var bo=[];for(var bm=0,bh;(bh=be[bm])!=null;bm++){if(typeof bh==="number"){bh+=""}if(!bh){continue}if(typeof bh==="string"&&!T.test(bh)){bh=bg.createTextNode(bh)}else{if(typeof bh==="string"){bh=bh.replace(O,"<$1></$2>");var bp=(c.exec(bh)||["",""])[1].toLowerCase(),bf=an[bp]||an._default,bl=bf[0],bd=bg.createElement("div");bd.innerHTML=bf[1]+bh+bf[2];while(bl--){bd=bd.lastChild}if(!a.support.tbody){var e=v.test(bh),bk=bp==="table"&&!e?bd.firstChild&&bd.firstChild.childNodes:bf[1]==="<table>"&&!e?bd.childNodes:[];for(var bj=bk.length-1;bj>=0;--bj){if(a.nodeName(bk[bj],"tbody")&&!bk[bj].childNodes.length){bk[bj].parentNode.removeChild(bk[bj])}}}if(!a.support.leadingWhitespace&&aj.test(bh)){bd.insertBefore(bg.createTextNode(aj.exec(bh)[0]),bd.firstChild)}bh=bd.childNodes}}if(bh.nodeType){bo.push(bh)}else{bo=a.merge(bo,bh)}}if(bn){for(bm=0;bo[bm];bm++){if(bi&&a.nodeName(bo[bm],"script")&&(!bo[bm].type||bo[bm].type.toLowerCase()==="text/javascript")){bi.push(bo[bm].parentNode?bo[bm].parentNode.removeChild(bo[bm]):bo[bm])}else{if(bo[bm].nodeType===1){bo.splice.apply(bo,[bm+1,0].concat(a.makeArray(bo[bm].getElementsByTagName("script"))))}bn.appendChild(bo[bm])}}}return bo},cleanData:function(bd){var bg,be,e=a.cache,bl=a.expando,bj=a.event.special,bi=a.support.deleteExpando;for(var bh=0,bf;(bf=bd[bh])!=null;bh++){if(bf.nodeName&&a.noData[bf.nodeName.toLowerCase()]){continue}be=bf[a.expando];if(be){bg=e[be]&&e[be][bl];if(bg&&bg.events){for(var bk in bg.events){if(bj[bk]){a.event.remove(bf,bk)}else{a.removeEvent(bf,bk,bg.handle)}}if(bg.handle){bg.handle.elem=null}}if(bi){delete bf[a.expando]}else{if(bf.removeAttribute){bf.removeAttribute(a.expando)}}delete e[be]}}}});function a8(e,bd){if(bd.src){a.ajax({url:bd.src,async:false,dataType:"script"})}else{a.globalEval(bd.text||bd.textContent||bd.innerHTML||"")}if(bd.parentNode){bd.parentNode.removeChild(bd)}}var ae=/alpha\([^)]*\)/i,ak=/opacity=([^)]*)/,aM=/-([a-z])/ig,y=/([A-Z])/g,aZ=/^-?\d+(?:px)?$/i,a7=/^-?\d/,aV={position:"absolute",visibility:"hidden",display:"block"},ag=["Left","Right"],aR=["Top","Bottom"],U,ay,aL,l=function(e,bd){return bd.toUpperCase()};a.fn.css=function(e,bd){if(arguments.length===2&&bd===H){return this}return a.access(this,e,bd,true,function(bf,be,bg){return bg!==H?a.style(bf,be,bg):a.css(bf,be)})};a.extend({cssHooks:{opacity:{get:function(be,bd){if(bd){var e=U(be,"opacity","opacity");return e===""?"1":e}else{return be.style.opacity}}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":a.support.cssFloat?"cssFloat":"styleFloat"},style:function(bf,be,bk,bg){if(!bf||bf.nodeType===3||bf.nodeType===8||!bf.style){return}var bj,bh=a.camelCase(be),bd=bf.style,bl=a.cssHooks[bh];be=a.cssProps[bh]||bh;if(bk!==H){if(typeof bk==="number"&&isNaN(bk)||bk==null){return}if(typeof bk==="number"&&!a.cssNumber[bh]){bk+="px"}if(!bl||!("set" in bl)||(bk=bl.set(bf,bk))!==H){try{bd[be]=bk}catch(bi){}}}else{if(bl&&"get" in bl&&(bj=bl.get(bf,false,bg))!==H){return bj}return bd[be]}},css:function(bh,bg,bd){var bf,be=a.camelCase(bg),e=a.cssHooks[be];bg=a.cssProps[be]||be;if(e&&"get" in e&&(bf=e.get(bh,true,bd))!==H){return bf}else{if(U){return U(bh,bg,be)}}},swap:function(bf,be,bg){var e={};for(var bd in be){e[bd]=bf.style[bd];bf.style[bd]=be[bd]}bg.call(bf);for(bd in be){bf.style[bd]=e[bd]}},camelCase:function(e){return e.replace(aM,l)}});a.curCSS=a.css;a.each(["height","width"],function(bd,e){a.cssHooks[e]={get:function(bg,bf,be){var bh;if(bf){if(bg.offsetWidth!==0){bh=o(bg,e,be)}else{a.swap(bg,aV,function(){bh=o(bg,e,be)})}if(bh<=0){bh=U(bg,e,e);if(bh==="0px"&&aL){bh=aL(bg,e,e)}if(bh!=null){return bh===""||bh==="auto"?"0px":bh}}if(bh<0||bh==null){bh=bg.style[e];return bh===""||bh==="auto"?"0px":bh}return typeof bh==="string"?bh:bh+"px"}},set:function(be,bf){if(aZ.test(bf)){bf=parseFloat(bf);if(bf>=0){return bf+"px"}}else{return bf}}}});if(!a.support.opacity){a.cssHooks.opacity={get:function(bd,e){return ak.test((e&&bd.currentStyle?bd.currentStyle.filter:bd.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":e?"1":""},set:function(bf,bg){var be=bf.style;be.zoom=1;var e=a.isNaN(bg)?"":"alpha(opacity="+bg*100+")",bd=be.filter||"";be.filter=ae.test(bd)?bd.replace(ae,e):be.filter+" "+e}}}if(al.defaultView&&al.defaultView.getComputedStyle){ay=function(bh,e,bf){var be,bg,bd;bf=bf.replace(y,"-$1").toLowerCase();if(!(bg=bh.ownerDocument.defaultView)){return H}if((bd=bg.getComputedStyle(bh,null))){be=bd.getPropertyValue(bf);if(be===""&&!a.contains(bh.ownerDocument.documentElement,bh)){be=a.style(bh,bf)}}return be}}if(al.documentElement.currentStyle){aL=function(bg,be){var bh,bd=bg.currentStyle&&bg.currentStyle[be],e=bg.runtimeStyle&&bg.runtimeStyle[be],bf=bg.style;if(!aZ.test(bd)&&a7.test(bd)){bh=bf.left;if(e){bg.runtimeStyle.left=bg.currentStyle.left}bf.left=be==="fontSize"?"1em":(bd||0);bd=bf.pixelLeft+"px";bf.left=bh;if(e){bg.runtimeStyle.left=e}}return bd===""?"auto":bd}}U=ay||aL;function o(be,bd,e){var bg=bd==="width"?ag:aR,bf=bd==="width"?be.offsetWidth:be.offsetHeight;if(e==="border"){return bf}a.each(bg,function(){if(!e){bf-=parseFloat(a.css(be,"padding"+this))||0}if(e==="margin"){bf+=parseFloat(a.css(be,"margin"+this))||0}else{bf-=parseFloat(a.css(be,"border"+this+"Width"))||0}});return bf}if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(be){var bd=be.offsetWidth,e=be.offsetHeight;return(bd===0&&e===0)||(!a.support.reliableHiddenOffsets&&(be.style.display||a.css(be,"display"))==="none")};a.expr.filters.visible=function(e){return !a.expr.filters.hidden(e)}}var i=/%20/g,ah=/\[\]$/,bc=/\r?\n/g,ba=/#.*$/,ar=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,aO=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aB=/(?:^file|^widget|\-extension):$/,aD=/^(?:GET|HEAD)$/,b=/^\/\//,I=/\?/,aU=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,p=/^(?:select|textarea)/i,g=/\s+/,bb=/([?&])_=[^&]*/,R=/(^|\-)([a-z])/g,aJ=function(bd,e,be){return e+be.toUpperCase()},G=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,z=a.fn.load,V={},q={},au,r;try{au=al.location.href}catch(am){au=al.createElement("a");au.href="";au=au.href}r=G.exec(au.toLowerCase());function d(e){return function(bg,bi){if(typeof bg!=="string"){bi=bg;bg="*"}if(a.isFunction(bi)){var bf=bg.toLowerCase().split(g),be=0,bh=bf.length,bd,bj,bk;for(;be<bh;be++){bd=bf[be];bk=/^\+/.test(bd);if(bk){bd=bd.substr(1)||"*"}bj=e[bd]=e[bd]||[];bj[bk?"unshift":"push"](bi)}}}}function aI(bd,bm,bh,bl,bj,bf){bj=bj||bm.dataTypes[0];bf=bf||{};bf[bj]=true;var bi=bd[bj],be=0,e=bi?bi.length:0,bg=(bd===V),bk;for(;be<e&&(bg||!bk);be++){bk=bi[be](bm,bh,bl);if(typeof bk==="string"){if(!bg||bf[bk]){bk=H}else{bm.dataTypes.unshift(bk);bk=aI(bd,bm,bh,bl,bk,bf)}}}if((bg||!bk)&&!bf["*"]){bk=aI(bd,bm,bh,bl,"*",bf)}return bk}a.fn.extend({load:function(be,bh,bi){if(typeof be!=="string"&&z){return z.apply(this,arguments)}else{if(!this.length){return this}}var bg=be.indexOf(" ");if(bg>=0){var e=be.slice(bg,be.length);be=be.slice(0,bg)}var bf="GET";if(bh){if(a.isFunction(bh)){bi=bh;bh=H}else{if(typeof bh==="object"){bh=a.param(bh,a.ajaxSettings.traditional);bf="POST"}}}var bd=this;a.ajax({url:be,type:bf,dataType:"html",data:bh,complete:function(bk,bj,bl){bl=bk.responseText;if(bk.isResolved()){bk.done(function(bm){bl=bm});bd.html(e?a("<div>").append(bl.replace(aU,"")).find(e):bl)}if(bi){bd.each(bi,[bl,bj,bk])}}});return this},serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||p.test(this.nodeName)||aO.test(this.type))}).map(function(e,bd){var be=a(this).val();return be==null?null:a.isArray(be)?a.map(be,function(bg,bf){return{name:bd.name,value:bg.replace(bc,"\r\n")}}):{name:bd.name,value:be.replace(bc,"\r\n")}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bd){a.fn[bd]=function(be){return this.bind(bd,be)}});a.each(["get","post"],function(e,bd){a[bd]=function(be,bg,bh,bf){if(a.isFunction(bg)){bf=bf||bh;bh=bg;bg=H}return a.ajax({type:bd,url:be,data:bg,success:bh,dataType:bf})}});a.extend({getScript:function(e,bd){return a.get(e,H,bd,"script")},getJSON:function(e,bd,be){return a.get(e,bd,be,"json")},ajaxSetup:function(be,e){if(!e){e=be;be=a.extend(true,a.ajaxSettings,e)}else{a.extend(true,be,a.ajaxSettings,e)}for(var bd in {context:1,url:1}){if(bd in e){be[bd]=e[bd]}else{if(bd in a.ajaxSettings){be[bd]=a.ajaxSettings[bd]}}}return be},ajaxSettings:{url:au,isLocal:aB.test(r[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":aY.String,"text html":true,"text json":a.parseJSON,"text xml":a.parseXML}},ajaxPrefilter:d(V),ajaxTransport:d(q),ajax:function(bh,bf){if(typeof bh==="object"){bf=bh;bh=H}bf=bf||{};var bl=a.ajaxSetup({},bf),bz=bl.context||bl,bo=bz!==bl&&(bz.nodeType||bz instanceof a)?a(bz):a.event,by=a.Deferred(),bv=a._Deferred(),bj=bl.statusCode||{},bk,bp={},bx,bg,bt,bm,bq,bi=0,be,bs,br={readyState:0,setRequestHeader:function(e,bA){if(!bi){bp[e.toLowerCase().replace(R,aJ)]=bA}return this},getAllResponseHeaders:function(){return bi===2?bx:null},getResponseHeader:function(bA){var e;if(bi===2){if(!bg){bg={};while((e=ar.exec(bx))){bg[e[1].toLowerCase()]=e[2]}}e=bg[bA.toLowerCase()]}return e===H?null:e},overrideMimeType:function(e){if(!bi){bl.mimeType=e}return this},abort:function(e){e=e||"abort";if(bt){bt.abort(e)}bn(0,e);return this}};function bn(bF,bD,bG,bC){if(bi===2){return}bi=2;if(bm){clearTimeout(bm)}bt=H;bx=bC||"";br.readyState=bF?4:0;var bA,bK,bJ,bE=bG?a4(bl,br,bG):H,bB,bI;if(bF>=200&&bF<300||bF===304){if(bl.ifModified){if((bB=br.getResponseHeader("Last-Modified"))){a.lastModified[bk]=bB}if((bI=br.getResponseHeader("Etag"))){a.etag[bk]=bI}}if(bF===304){bD="notmodified";bA=true}else{try{bK=D(bl,bE);bD="success";bA=true}catch(bH){bD="parsererror";bJ=bH}}}else{bJ=bD;if(!bD||bF){bD="error";if(bF<0){bF=0}}}br.status=bF;br.statusText=bD;if(bA){by.resolveWith(bz,[bK,bD,br])}else{by.rejectWith(bz,[br,bD,bJ])}br.statusCode(bj);bj=H;if(be){bo.trigger("ajax"+(bA?"Success":"Error"),[br,bl,bA?bK:bJ])}bv.resolveWith(bz,[br,bD]);if(be){bo.trigger("ajaxComplete",[br,bl]);if(!(--a.active)){a.event.trigger("ajaxStop")}}}by.promise(br);br.success=br.done;br.error=br.fail;br.complete=bv.done;br.statusCode=function(bA){if(bA){var e;if(bi<2){for(e in bA){bj[e]=[bj[e],bA[e]]}}else{e=bA[br.status];br.then(e,e)}}return this};bl.url=((bh||bl.url)+"").replace(ba,"").replace(b,r[1]+"//");bl.dataTypes=a.trim(bl.dataType||"*").toLowerCase().split(g);if(!bl.crossDomain){bq=G.exec(bl.url.toLowerCase());bl.crossDomain=!!(bq&&(bq[1]!=r[1]||bq[2]!=r[2]||(bq[3]||(bq[1]==="http:"?80:443))!=(r[3]||(r[1]==="http:"?80:443))))}if(bl.data&&bl.processData&&typeof bl.data!=="string"){bl.data=a.param(bl.data,bl.traditional)}aI(V,bl,bf,br);if(bi===2){return false}be=bl.global;bl.type=bl.type.toUpperCase();bl.hasContent=!aD.test(bl.type);if(be&&a.active++===0){a.event.trigger("ajaxStart")}if(!bl.hasContent){if(bl.data){bl.url+=(I.test(bl.url)?"&":"?")+bl.data}bk=bl.url;if(bl.cache===false){var bd=a.now(),bw=bl.url.replace(bb,"$1_="+bd);bl.url=bw+((bw===bl.url)?(I.test(bl.url)?"&":"?")+"_="+bd:"")}}if(bl.data&&bl.hasContent&&bl.contentType!==false||bf.contentType){bp["Content-Type"]=bl.contentType}if(bl.ifModified){bk=bk||bl.url;if(a.lastModified[bk]){bp["If-Modified-Since"]=a.lastModified[bk]}if(a.etag[bk]){bp["If-None-Match"]=a.etag[bk]}}bp.Accept=bl.dataTypes[0]&&bl.accepts[bl.dataTypes[0]]?bl.accepts[bl.dataTypes[0]]+(bl.dataTypes[0]!=="*"?", */*; q=0.01":""):bl.accepts["*"];for(bs in bl.headers){br.setRequestHeader(bs,bl.headers[bs])}if(bl.beforeSend&&(bl.beforeSend.call(bz,br,bl)===false||bi===2)){br.abort();return false}for(bs in {success:1,error:1,complete:1}){br[bs](bl[bs])}bt=aI(q,bl,bf,br);if(!bt){bn(-1,"No Transport")}else{br.readyState=1;if(be){bo.trigger("ajaxSend",[br,bl])}if(bl.async&&bl.timeout>0){bm=setTimeout(function(){br.abort("timeout")},bl.timeout)}try{bi=1;bt.send(bp,bn)}catch(bu){if(status<2){bn(-1,bu)}else{a.error(bu)}}}return br},param:function(e,be){var bd=[],bg=function(bh,bi){bi=a.isFunction(bi)?bi():bi;bd[bd.length]=encodeURIComponent(bh)+"="+encodeURIComponent(bi)};if(be===H){be=a.ajaxSettings.traditional}if(a.isArray(e)||(e.jquery&&!a.isPlainObject(e))){a.each(e,function(){bg(this.name,this.value)})}else{for(var bf in e){u(bf,e[bf],be,bg)}}return bd.join("&").replace(i,"+")}});function u(be,bg,bd,bf){if(a.isArray(bg)&&bg.length){a.each(bg,function(bi,bh){if(bd||ah.test(be)){bf(be,bh)}else{u(be+"["+(typeof bh==="object"||a.isArray(bh)?bi:"")+"]",bh,bd,bf)}})}else{if(!bd&&bg!=null&&typeof bg==="object"){if(a.isArray(bg)||a.isEmptyObject(bg)){bf(be,"")}else{for(var e in bg){u(be+"["+e+"]",bg[e],bd,bf)}}}else{bf(be,bg)}}}a.extend({active:0,lastModified:{},etag:{}});function a4(bl,bk,bh){var bd=bl.contents,bj=bl.dataTypes,be=bl.responseFields,bg,bi,bf,e;for(bi in be){if(bi in bh){bk[be[bi]]=bh[bi]}}while(bj[0]==="*"){bj.shift();if(bg===H){bg=bl.mimeType||bk.getResponseHeader("content-type")}}if(bg){for(bi in bd){if(bd[bi]&&bd[bi].test(bg)){bj.unshift(bi);break}}}if(bj[0] in bh){bf=bj[0]}else{for(bi in bh){if(!bj[0]||bl.converters[bi+" "+bj[0]]){bf=bi;break}if(!e){e=bi}}bf=bf||e}if(bf){if(bf!==bj[0]){bj.unshift(bf)}return bh[bf]}}function D(bp,bh){if(bp.dataFilter){bh=bp.dataFilter(bh,bp.dataType)}var bl=bp.dataTypes,bo={},bi,bm,be=bl.length,bj,bk=bl[0],bf,bg,bn,bd,e;for(bi=1;bi<be;bi++){if(bi===1){for(bm in bp.converters){if(typeof bm==="string"){bo[bm.toLowerCase()]=bp.converters[bm]}}}bf=bk;bk=bl[bi];if(bk==="*"){bk=bf}else{if(bf!=="*"&&bf!==bk){bg=bf+" "+bk;bn=bo[bg]||bo["* "+bk];if(!bn){e=H;for(bd in bo){bj=bd.split(" ");if(bj[0]===bf||bj[0]==="*"){e=bo[bj[1]+" "+bk];if(e){bd=bo[bd];if(bd===true){bn=e}else{if(e===true){bn=bd}}break}}}}if(!(bn||e)){a.error("No conversion from "+bg.replace(" "," to "))}if(bn!==true){bh=bn?bn(bh):e(bd(bh))}}}}return bh}var aq=a.now(),t=/(\=)\?(&|$)|()\?\?()/i;a.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return a.expando+"_"+(aq++)}});a.ajaxPrefilter("json jsonp",function(bm,bi,bl){var bk=(typeof bm.data==="string");if(bm.dataTypes[0]==="jsonp"||bi.jsonpCallback||bi.jsonp!=null||bm.jsonp!==false&&(t.test(bm.url)||bk&&t.test(bm.data))){var bj,be=bm.jsonpCallback=a.isFunction(bm.jsonpCallback)?bm.jsonpCallback():bm.jsonpCallback,bh=aY[be],e=bm.url,bg=bm.data,bd="$1"+be+"$2",bf=function(){aY[be]=bh;if(bj&&a.isFunction(bh)){aY[be](bj[0])}};if(bm.jsonp!==false){e=e.replace(t,bd);if(bm.url===e){if(bk){bg=bg.replace(t,bd)}if(bm.data===bg){e+=(/\?/.test(e)?"&":"?")+bm.jsonp+"="+be}}}bm.url=e;bm.data=bg;aY[be]=function(bn){bj=[bn]};bl.then(bf,bf);bm.converters["script json"]=function(){if(!bj){a.error(be+" was not called")}return bj[0]};bm.dataTypes[0]="json";return"script"}});a.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){a.globalEval(e);return e}}});a.ajaxPrefilter("script",function(e){if(e.cache===H){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});a.ajaxTransport("script",function(be){if(be.crossDomain){var e,bd=al.head||al.getElementsByTagName("head")[0]||al.documentElement;return{send:function(bf,bg){e=al.createElement("script");e.async="async";if(be.scriptCharset){e.charset=be.scriptCharset}e.src=be.url;e.onload=e.onreadystatechange=function(bi,bh){if(!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(bd&&e.parentNode){bd.removeChild(e)}e=H;if(!bh){bg(200,"success")}}};bd.insertBefore(e,bd.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var x=a.now(),J,at;function A(){a(aY).unload(function(){for(var e in J){J[e](0,1)}})}function aA(){try{return new aY.XMLHttpRequest()}catch(bd){}}function ad(){try{return new aY.ActiveXObject("Microsoft.XMLHTTP")}catch(bd){}}a.ajaxSettings.xhr=aY.ActiveXObject?function(){return !this.isLocal&&aA()||ad()}:aA;at=a.ajaxSettings.xhr();a.support.ajax=!!at;a.support.cors=at&&("withCredentials" in at);at=H;if(a.support.ajax){a.ajaxTransport(function(e){if(!e.crossDomain||a.support.cors){var bd;return{send:function(bj,be){var bi=e.xhr(),bh,bg;if(e.username){bi.open(e.type,e.url,e.async,e.username,e.password)}else{bi.open(e.type,e.url,e.async)}if(e.xhrFields){for(bg in e.xhrFields){bi[bg]=e.xhrFields[bg]}}if(e.mimeType&&bi.overrideMimeType){bi.overrideMimeType(e.mimeType)}if(!(e.crossDomain&&!e.hasContent)&&!bj["X-Requested-With"]){bj["X-Requested-With"]="XMLHttpRequest"}try{for(bg in bj){bi.setRequestHeader(bg,bj[bg])}}catch(bf){}bi.send((e.hasContent&&e.data)||null);bd=function(bs,bm){var bn,bl,bk,bq,bp;try{if(bd&&(bm||bi.readyState===4)){bd=H;if(bh){bi.onreadystatechange=a.noop;delete J[bh]}if(bm){if(bi.readyState!==4){bi.abort()}}else{bn=bi.status;bk=bi.getAllResponseHeaders();bq={};bp=bi.responseXML;if(bp&&bp.documentElement){bq.xml=bp}bq.text=bi.responseText;try{bl=bi.statusText}catch(br){bl=""}if(!bn&&e.isLocal&&!e.crossDomain){bn=bq.text?200:404}else{if(bn===1223){bn=204}}}}}catch(bo){if(!bm){be(-1,bo)}}if(bq){be(bn,bl,bq,bk)}};if(!e.async||bi.readyState===4){bd()}else{if(!J){J={};A()}bh=x++;bi.onreadystatechange=J[bh]=bd}},abort:function(){if(bd){bd(0,1)}}}}})}var N={},ap=/^(?:toggle|show|hide)$/,aF=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,aS,ax=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];a.fn.extend({show:function(bf,bi,bh){var be,bg;if(bf||bf===0){return this.animate(aQ("show",3),bf,bi,bh)}else{for(var bd=0,e=this.length;bd<e;bd++){be=this[bd];bg=be.style.display;if(!a._data(be,"olddisplay")&&bg==="none"){bg=be.style.display=""}if(bg===""&&a.css(be,"display")==="none"){a._data(be,"olddisplay",w(be.nodeName))}}for(bd=0;bd<e;bd++){be=this[bd];bg=be.style.display;if(bg===""||bg==="none"){be.style.display=a._data(be,"olddisplay")||""}}return this}},hide:function(be,bh,bg){if(be||be===0){return this.animate(aQ("hide",3),be,bh,bg)}else{for(var bd=0,e=this.length;bd<e;bd++){var bf=a.css(this[bd],"display");if(bf!=="none"&&!a._data(this[bd],"olddisplay")){a._data(this[bd],"olddisplay",bf)}}for(bd=0;bd<e;bd++){this[bd].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(be,bd,bf){var e=typeof be==="boolean";if(a.isFunction(be)&&a.isFunction(bd)){this._toggle.apply(this,arguments)}else{if(be==null||e){this.each(function(){var bg=e?be:a(this).is(":hidden");a(this)[bg?"show":"hide"]()})}else{this.animate(aQ("toggle",3),be,bd,bf)}}return this},fadeTo:function(e,bf,be,bd){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bf},e,be,bd)},animate:function(bg,bd,bf,be){var e=a.speed(bd,bf,be);if(a.isEmptyObject(bg)){return this.each(e.complete)}return this[e.queue===false?"each":"queue"](function(){var bj=a.extend({},e),bn,bk=this.nodeType===1,bl=bk&&a(this).is(":hidden"),bh=this;for(bn in bg){var bi=a.camelCase(bn);if(bn!==bi){bg[bi]=bg[bn];delete bg[bn];bn=bi}if(bg[bn]==="hide"&&bl||bg[bn]==="show"&&!bl){return bj.complete.call(this)}if(bk&&(bn==="height"||bn==="width")){bj.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(a.css(this,"display")==="inline"&&a.css(this,"float")==="none"){if(!a.support.inlineBlockNeedsLayout){this.style.display="inline-block"}else{var bm=w(this.nodeName);if(bm==="inline"){this.style.display="inline-block"}else{this.style.display="inline";this.style.zoom=1}}}}if(a.isArray(bg[bn])){(bj.specialEasing=bj.specialEasing||{})[bn]=bg[bn][1];bg[bn]=bg[bn][0]}}if(bj.overflow!=null){this.style.overflow="hidden"}bj.curAnim=a.extend({},bg);a.each(bg,function(bp,bt){var bs=new a.fx(bh,bj,bp);if(ap.test(bt)){bs[bt==="toggle"?bl?"show":"hide":bt](bg)}else{var br=aF.exec(bt),bu=bs.cur();if(br){var bo=parseFloat(br[2]),bq=br[3]||(a.cssNumber[bp]?"":"px");if(bq!=="px"){a.style(bh,bp,(bo||1)+bq);bu=((bo||1)/bs.cur())*bu;a.style(bh,bp,bu+bq)}if(br[1]){bo=((br[1]==="-="?-1:1)*bo)+bu}bs.custom(bu,bo,bq)}else{bs.custom(bu,bt,"")}}});return true})},stop:function(bd,e){var be=a.timers;if(bd){this.queue([])}this.each(function(){for(var bf=be.length-1;bf>=0;bf--){if(be[bf].elem===this){if(e){be[bf](true)}be.splice(bf,1)}}});if(!e){this.dequeue()}return this}});function aQ(bd,e){var be={};a.each(ax.concat.apply([],ax.slice(0,e)),function(){be[this]=bd});return be}a.each({slideDown:aQ("show",1),slideUp:aQ("hide",1),slideToggle:aQ("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bd){a.fn[e]=function(be,bg,bf){return this.animate(bd,be,bg,bf)}});a.extend({speed:function(be,bf,bd){var e=be&&typeof be==="object"?a.extend({},be):{complete:bd||!bd&&bf||a.isFunction(be)&&be,duration:be,easing:bd&&bf||bf&&!a.isFunction(bf)&&bf};e.duration=a.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in a.fx.speeds?a.fx.speeds[e.duration]:a.fx.speeds._default;e.old=e.complete;e.complete=function(){if(e.queue!==false){a(this).dequeue()}if(a.isFunction(e.old)){e.old.call(this)}};return e},easing:{linear:function(be,bf,e,bd){return e+bd*be},swing:function(be,bf,e,bd){return((-Math.cos(be*Math.PI)/2)+0.5)*bd+e}},timers:[],fx:function(bd,e,be){this.options=e;this.elem=bd;this.prop=be;if(!e.orig){e.orig={}}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(a.fx.step[this.prop]||a.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var e,bd=a.css(this.elem,this.prop);return isNaN(e=parseFloat(bd))?!bd||bd==="auto"?0:bd:e},custom:function(bh,bg,bf){var e=this,be=a.fx;this.startTime=a.now();this.start=bh;this.end=bg;this.unit=bf||this.unit||(a.cssNumber[this.prop]?"":"px");this.now=this.start;this.pos=this.state=0;function bd(bi){return e.step(bi)}bd.elem=this.elem;if(bd()&&a.timers.push(bd)&&!aS){aS=setInterval(be.tick,be.interval)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(bf){var bk=a.now(),bg=true;if(bf||bk>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var bh in this.options.curAnim){if(this.options.curAnim[bh]!==true){bg=false}}if(bg){if(this.options.overflow!=null&&!a.support.shrinkWrapBlocks){var be=this.elem,bl=this.options;a.each(["","X","Y"],function(bm,bn){be.style["overflow"+bn]=bl.overflow[bm]})}if(this.options.hide){a(this.elem).hide()}if(this.options.hide||this.options.show){for(var e in this.options.curAnim){a.style(this.elem,e,this.options.orig[e])}}this.options.complete.call(this.elem)}return false}else{var bd=bk-this.startTime;this.state=bd/this.options.duration;var bi=this.options.specialEasing&&this.options.specialEasing[this.prop];var bj=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[bi||bj](this.state,bd,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};a.extend(a.fx,{tick:function(){var bd=a.timers;for(var e=0;e<bd.length;e++){if(!bd[e]()){bd.splice(e--,1)}}if(!bd.length){a.fx.stop()}},interval:13,stop:function(){clearInterval(aS);aS=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){a.style(e.elem,"opacity",e.now)},_default:function(e){if(e.elem.style&&e.elem.style[e.prop]!=null){e.elem.style[e.prop]=(e.prop==="width"||e.prop==="height"?Math.max(0,e.now):e.now)+e.unit}else{e.elem[e.prop]=e.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(e){return a.grep(a.timers,function(bd){return e===bd.elem}).length}}function w(be){if(!N[be]){var e=a("<"+be+">").appendTo("body"),bd=e.css("display");e.remove();if(bd==="none"||bd===""){bd="block"}N[be]=bd}return N[be]}var S=/^t(?:able|d|h)$/i,Y=/^(?:body|html)$/i;if("getBoundingClientRect" in al.documentElement){a.fn.offset=function(bq){var bg=this[0],bj;if(bq){return this.each(function(e){a.offset.setOffset(this,bq,e)})}if(!bg||!bg.ownerDocument){return null}if(bg===bg.ownerDocument.body){return a.offset.bodyOffset(bg)}try{bj=bg.getBoundingClientRect()}catch(bn){}var bp=bg.ownerDocument,be=bp.documentElement;if(!bj||!a.contains(be,bg)){return bj?{top:bj.top,left:bj.left}:{top:0,left:0}}var bk=bp.body,bl=az(bp),bi=be.clientTop||bk.clientTop||0,bm=be.clientLeft||bk.clientLeft||0,bd=(bl.pageYOffset||a.support.boxModel&&be.scrollTop||bk.scrollTop),bh=(bl.pageXOffset||a.support.boxModel&&be.scrollLeft||bk.scrollLeft),bo=bj.top+bd-bi,bf=bj.left+bh-bm;return{top:bo,left:bf}}}else{a.fn.offset=function(bn){var bh=this[0];if(bn){return this.each(function(bo){a.offset.setOffset(this,bn,bo)})}if(!bh||!bh.ownerDocument){return null}if(bh===bh.ownerDocument.body){return a.offset.bodyOffset(bh)}a.offset.initialize();var bk,be=bh.offsetParent,bd=bh,bm=bh.ownerDocument,bf=bm.documentElement,bi=bm.body,bj=bm.defaultView,e=bj?bj.getComputedStyle(bh,null):bh.currentStyle,bl=bh.offsetTop,bg=bh.offsetLeft;while((bh=bh.parentNode)&&bh!==bi&&bh!==bf){if(a.offset.supportsFixedPosition&&e.position==="fixed"){break}bk=bj?bj.getComputedStyle(bh,null):bh.currentStyle;bl-=bh.scrollTop;bg-=bh.scrollLeft;if(bh===be){bl+=bh.offsetTop;bg+=bh.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&S.test(bh.nodeName))){bl+=parseFloat(bk.borderTopWidth)||0;bg+=parseFloat(bk.borderLeftWidth)||0}bd=be;be=bh.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&bk.overflow!=="visible"){bl+=parseFloat(bk.borderTopWidth)||0;bg+=parseFloat(bk.borderLeftWidth)||0}e=bk}if(e.position==="relative"||e.position==="static"){bl+=bi.offsetTop;bg+=bi.offsetLeft}if(a.offset.supportsFixedPosition&&e.position==="fixed"){bl+=Math.max(bf.scrollTop,bi.scrollTop);bg+=Math.max(bf.scrollLeft,bi.scrollLeft)}return{top:bl,left:bg}}}a.offset={initialize:function(){var e=al.body,bd=al.createElement("div"),bg,bi,bh,bj,be=parseFloat(a.css(e,"marginTop"))||0,bf="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.extend(bd.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});bd.innerHTML=bf;e.insertBefore(bd,e.firstChild);bg=bd.firstChild;bi=bg.firstChild;bj=bg.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(bi.offsetTop!==5);this.doesAddBorderForTableAndCells=(bj.offsetTop===5);bi.style.position="fixed";bi.style.top="20px";this.supportsFixedPosition=(bi.offsetTop===20||bi.offsetTop===15);bi.style.position=bi.style.top="";bg.style.overflow="hidden";bg.style.position="relative";this.subtractsBorderForOverflowNotVisible=(bi.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==be);e.removeChild(bd);e=bd=bg=bi=bh=bj=null;a.offset.initialize=a.noop},bodyOffset:function(e){var be=e.offsetTop,bd=e.offsetLeft;a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){be+=parseFloat(a.css(e,"marginTop"))||0;bd+=parseFloat(a.css(e,"marginLeft"))||0}return{top:be,left:bd}},setOffset:function(bf,bo,bi){var bj=a.css(bf,"position");if(bj==="static"){bf.style.position="relative"}var bh=a(bf),bd=bh.offset(),e=a.css(bf,"top"),bm=a.css(bf,"left"),bn=(bj==="absolute"&&a.inArray("auto",[e,bm])>-1),bl={},bk={},be,bg;if(bn){bk=bh.position()}be=bn?bk.top:parseInt(e,10)||0;bg=bn?bk.left:parseInt(bm,10)||0;if(a.isFunction(bo)){bo=bo.call(bf,bi,bd)}if(bo.top!=null){bl.top=(bo.top-bd.top)+be}if(bo.left!=null){bl.left=(bo.left-bd.left)+bg}if("using" in bo){bo.using.call(bf,bl)}else{bh.css(bl)}}};a.fn.extend({position:function(){if(!this[0]){return null}var be=this[0],bd=this.offsetParent(),bf=this.offset(),e=Y.test(bd[0].nodeName)?{top:0,left:0}:bd.offset();bf.top-=parseFloat(a.css(be,"marginTop"))||0;bf.left-=parseFloat(a.css(be,"marginLeft"))||0;e.top+=parseFloat(a.css(bd[0],"borderTopWidth"))||0;e.left+=parseFloat(a.css(bd[0],"borderLeftWidth"))||0;return{top:bf.top-e.top,left:bf.left-e.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||al.body;while(e&&(!Y.test(e.nodeName)&&a.css(e,"position")==="static")){e=e.offsetParent}return e})}});a.each(["Left","Top"],function(bd,e){var be="scroll"+e;a.fn[be]=function(bh){var bf=this[0],bg;if(!bf){return null}if(bh!==H){return this.each(function(){bg=az(this);if(bg){bg.scrollTo(!bd?bh:a(bg).scrollLeft(),bd?bh:a(bg).scrollTop())}else{this[be]=bh}})}else{bg=az(bf);return bg?("pageXOffset" in bg)?bg[bd?"pageYOffset":"pageXOffset"]:a.support.boxModel&&bg.document.documentElement[be]||bg.document.body[be]:bf[be]}}});function az(e){return a.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}a.each(["Height","Width"],function(bd,e){var be=e.toLowerCase();a.fn["inner"+e]=function(){return this[0]?parseFloat(a.css(this[0],be,"padding")):null};a.fn["outer"+e]=function(bf){return this[0]?parseFloat(a.css(this[0],be,bf?"margin":"border")):null};a.fn[be]=function(bg){var bh=this[0];if(!bh){return bg==null?null:this}if(a.isFunction(bg)){return this.each(function(bl){var bk=a(this);bk[be](bg.call(this,bl,bk[be]()))})}if(a.isWindow(bh)){var bi=bh.document.documentElement["client"+e];return bh.document.compatMode==="CSS1Compat"&&bi||bh.document.body["client"+e]||bi}else{if(bh.nodeType===9){return Math.max(bh.documentElement["client"+e],bh.body["scroll"+e],bh.documentElement["scroll"+e],bh.body["offset"+e],bh.documentElement["offset"+e])}else{if(bg===H){var bj=a.css(bh,be),bf=parseFloat(bj);return a.isNaN(bf)?bj:bf}else{return this.css(be,typeof bg==="string"?bg:bg+"px")}}}}});aY.jQuery=aY.$=a})(window);/* Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */
(function(b){b.color={};b.color.make=function(d,e,g,f){var c={};c.r=d||0;c.g=e||0;c.b=g||0;c.a=f!=null?f:1;c.add=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]+=j}return c.normalize()};c.scale=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]*=j}return c.normalize()};c.toString=function(){if(c.a>=1){return"rgb("+[c.r,c.g,c.b].join(",")+")"}else{return"rgba("+[c.r,c.g,c.b,c.a].join(",")+")"}};c.normalize=function(){function h(k,j,l){return j<k?k:(j>l?l:j)}c.r=h(0,parseInt(c.r),255);c.g=h(0,parseInt(c.g),255);c.b=h(0,parseInt(c.b),255);c.a=h(0,c.a,1);return c};c.clone=function(){return b.color.make(c.r,c.b,c.g,c.a)};return c.normalize()};b.color.extract=function(d,e){var c;do{c=d.css(e).toLowerCase();if(c!=""&&c!="transparent"){break}d=d.parent()}while(!b.nodeName(d.get(0),"body"));if(c=="rgba(0, 0, 0, 0)"){c="transparent"}return b.color.parse(c)};b.color.parse=function(c){var d,f=b.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return f(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return f(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var e=b.trim(c).toLowerCase();if(e=="transparent"){return f(255,255,255,0)}else{d=a[e]||[0,0,0];return f(d[0],d[1],d[2])}};var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(c){function b(av,ai,J,af){var Q=[],O={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},az=null,ad=null,y=null,H=null,A=null,p=[],aw=[],q={left:0,right:0,top:0,bottom:0},G=0,I=0,h=0,w=0,ak={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},aq=this;aq.setData=aj;aq.setupGrid=t;aq.draw=W;aq.getPlaceholder=function(){return av};aq.getCanvas=function(){return az};aq.getPlotOffset=function(){return q};aq.width=function(){return h};aq.height=function(){return w};aq.offset=function(){var aB=y.offset();aB.left+=q.left;aB.top+=q.top;return aB};aq.getData=function(){return Q};aq.getAxes=function(){var aC={},aB;c.each(p.concat(aw),function(aD,aE){if(aE){aC[aE.direction+(aE.n!=1?aE.n:"")+"axis"]=aE}});return aC};aq.getXAxes=function(){return p};aq.getYAxes=function(){return aw};aq.c2p=C;aq.p2c=ar;aq.getOptions=function(){return O};aq.highlight=x;aq.unhighlight=T;aq.triggerRedrawOverlay=f;aq.pointOffset=function(aB){return{left:parseInt(p[aA(aB,"x")-1].p2c(+aB.x)+q.left),top:parseInt(aw[aA(aB,"y")-1].p2c(+aB.y)+q.top)}};aq.shutdown=ag;aq.resize=function(){B();g(az);g(ad)};aq.hooks=ak;F(aq);Z(J);X();aj(ai);t();W();ah();function an(aD,aB){aB=[aq].concat(aB);for(var aC=0;aC<aD.length;++aC){aD[aC].apply(this,aB)}}function F(){for(var aB=0;aB<af.length;++aB){var aC=af[aB];aC.init(aq);if(aC.options){c.extend(true,O,aC.options)}}}function Z(aC){var aB;c.extend(true,O,aC);if(O.xaxis.color==null){O.xaxis.color=O.grid.color}if(O.yaxis.color==null){O.yaxis.color=O.grid.color}if(O.xaxis.tickColor==null){O.xaxis.tickColor=O.grid.tickColor}if(O.yaxis.tickColor==null){O.yaxis.tickColor=O.grid.tickColor}if(O.grid.borderColor==null){O.grid.borderColor=O.grid.color}if(O.grid.tickColor==null){O.grid.tickColor=c.color.parse(O.grid.color).scale("a",0.22).toString()}for(aB=0;aB<Math.max(1,O.xaxes.length);++aB){O.xaxes[aB]=c.extend(true,{},O.xaxis,O.xaxes[aB])}for(aB=0;aB<Math.max(1,O.yaxes.length);++aB){O.yaxes[aB]=c.extend(true,{},O.yaxis,O.yaxes[aB])}if(O.xaxis.noTicks&&O.xaxis.ticks==null){O.xaxis.ticks=O.xaxis.noTicks}if(O.yaxis.noTicks&&O.yaxis.ticks==null){O.yaxis.ticks=O.yaxis.noTicks}if(O.x2axis){O.xaxes[1]=c.extend(true,{},O.xaxis,O.x2axis);O.xaxes[1].position="top"}if(O.y2axis){O.yaxes[1]=c.extend(true,{},O.yaxis,O.y2axis);O.yaxes[1].position="right"}if(O.grid.coloredAreas){O.grid.markings=O.grid.coloredAreas}if(O.grid.coloredAreasColor){O.grid.markingsColor=O.grid.coloredAreasColor}if(O.lines){c.extend(true,O.series.lines,O.lines)}if(O.points){c.extend(true,O.series.points,O.points)}if(O.bars){c.extend(true,O.series.bars,O.bars)}if(O.shadowSize!=null){O.series.shadowSize=O.shadowSize}for(aB=0;aB<O.xaxes.length;++aB){V(p,aB+1).options=O.xaxes[aB]}for(aB=0;aB<O.yaxes.length;++aB){V(aw,aB+1).options=O.yaxes[aB]}for(var aD in ak){if(O.hooks[aD]&&O.hooks[aD].length){ak[aD]=ak[aD].concat(O.hooks[aD])}}an(ak.processOptions,[O])}function aj(aB){Q=Y(aB);ax();z()}function Y(aE){var aC=[];for(var aB=0;aB<aE.length;++aB){var aD=c.extend(true,{},O.series);if(aE[aB].data!=null){aD.data=aE[aB].data;delete aE[aB].data;c.extend(true,aD,aE[aB]);aE[aB].data=aD.data}else{aD.data=aE[aB]}aC.push(aD)}return aC}function aA(aC,aD){var aB=aC[aD+"axis"];if(typeof aB=="object"){aB=aB.n}if(typeof aB!="number"){aB=1}return aB}function m(){return c.grep(p.concat(aw),function(aB){return aB})}function C(aE){var aC={},aB,aD;for(aB=0;aB<p.length;++aB){aD=p[aB];if(aD&&aD.used){aC["x"+aD.n]=aD.c2p(aE.left)}}for(aB=0;aB<aw.length;++aB){aD=aw[aB];if(aD&&aD.used){aC["y"+aD.n]=aD.c2p(aE.top)}}if(aC.x1!==undefined){aC.x=aC.x1}if(aC.y1!==undefined){aC.y=aC.y1}return aC}function ar(aF){var aD={},aC,aE,aB;for(aC=0;aC<p.length;++aC){aE=p[aC];if(aE&&aE.used){aB="x"+aE.n;if(aF[aB]==null&&aE.n==1){aB="x"}if(aF[aB]!=null){aD.left=aE.p2c(aF[aB]);break}}}for(aC=0;aC<aw.length;++aC){aE=aw[aC];if(aE&&aE.used){aB="y"+aE.n;if(aF[aB]==null&&aE.n==1){aB="y"}if(aF[aB]!=null){aD.top=aE.p2c(aF[aB]);break}}}return aD}function V(aC,aB){if(!aC[aB-1]){aC[aB-1]={n:aB,direction:aC==p?"x":"y",options:c.extend(true,{},aC==p?O.xaxis:O.yaxis)}}return aC[aB-1]}function ax(){var aG;var aM=Q.length,aB=[],aE=[];for(aG=0;aG<Q.length;++aG){var aJ=Q[aG].color;if(aJ!=null){--aM;if(typeof aJ=="number"){aE.push(aJ)}else{aB.push(c.color.parse(Q[aG].color))}}}for(aG=0;aG<aE.length;++aG){aM=Math.max(aM,aE[aG]+1)}var aC=[],aF=0;aG=0;while(aC.length<aM){var aI;if(O.colors.length==aG){aI=c.color.make(100,100,100)}else{aI=c.color.parse(O.colors[aG])}var aD=aF%2==1?-1:1;aI.scale("rgb",1+aD*Math.ceil(aF/2)*0.2);aC.push(aI);++aG;if(aG>=O.colors.length){aG=0;++aF}}var aH=0,aN;for(aG=0;aG<Q.length;++aG){aN=Q[aG];if(aN.color==null){aN.color=aC[aH].toString();++aH}else{if(typeof aN.color=="number"){aN.color=aC[aN.color].toString()}}if(aN.lines.show==null){var aL,aK=true;for(aL in aN){if(aN[aL]&&aN[aL].show){aK=false;break}}if(aK){aN.lines.show=true}}aN.xaxis=V(p,aA(aN,"x"));aN.yaxis=V(aw,aA(aN,"y"))}}function z(){var aO=Number.POSITIVE_INFINITY,aI=Number.NEGATIVE_INFINITY,aB=Number.MAX_VALUE,aU,aS,aR,aN,aD,aJ,aT,aP,aH,aG,aC,a0,aX,aL;function aF(a3,a2,a1){if(a2<a3.datamin&&a2!=-aB){a3.datamin=a2}if(a1>a3.datamax&&a1!=aB){a3.datamax=a1}}c.each(m(),function(a1,a2){a2.datamin=aO;a2.datamax=aI;a2.used=false});for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aJ.datapoints={points:[]};an(ak.processRawData,[aJ,aJ.data,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];var aZ=aJ.data,aW=aJ.datapoints.format;if(!aW){aW=[];aW.push({x:true,number:true,required:true});aW.push({y:true,number:true,required:true});if(aJ.bars.show||(aJ.lines.show&&aJ.lines.fill)){aW.push({y:true,number:true,required:false,defaultValue:0});if(aJ.bars.horizontal){delete aW[aW.length-1].y;aW[aW.length-1].x=true}}aJ.datapoints.format=aW}if(aJ.datapoints.pointsize!=null){continue}aJ.datapoints.pointsize=aW.length;aP=aJ.datapoints.pointsize;aT=aJ.datapoints.points;insertSteps=aJ.lines.show&&aJ.lines.steps;aJ.xaxis.used=aJ.yaxis.used=true;for(aS=aR=0;aS<aZ.length;++aS,aR+=aP){aL=aZ[aS];var aE=aL==null;if(!aE){for(aN=0;aN<aP;++aN){a0=aL[aN];aX=aW[aN];if(aX){if(aX.number&&a0!=null){a0=+a0;if(isNaN(a0)){a0=null}else{if(a0==Infinity){a0=aB}else{if(a0==-Infinity){a0=-aB}}}}if(a0==null){if(aX.required){aE=true}if(aX.defaultValue!=null){a0=aX.defaultValue}}}aT[aR+aN]=a0}}if(aE){for(aN=0;aN<aP;++aN){a0=aT[aR+aN];if(a0!=null){aX=aW[aN];if(aX.x){aF(aJ.xaxis,a0,a0)}if(aX.y){aF(aJ.yaxis,a0,a0)}}aT[aR+aN]=null}}else{if(insertSteps&&aR>0&&aT[aR-aP]!=null&&aT[aR-aP]!=aT[aR]&&aT[aR-aP+1]!=aT[aR+1]){for(aN=0;aN<aP;++aN){aT[aR+aP+aN]=aT[aR+aN]}aT[aR+1]=aT[aR-aP+1];aR+=aP}}}}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];an(ak.processDatapoints,[aJ,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aT=aJ.datapoints.points,aP=aJ.datapoints.pointsize;var aK=aO,aQ=aO,aM=aI,aV=aI;for(aS=0;aS<aT.length;aS+=aP){if(aT[aS]==null){continue}for(aN=0;aN<aP;++aN){a0=aT[aS+aN];aX=aW[aN];if(!aX||a0==aB||a0==-aB){continue}if(aX.x){if(a0<aK){aK=a0}if(a0>aM){aM=a0}}if(aX.y){if(a0<aQ){aQ=a0}if(a0>aV){aV=a0}}}}if(aJ.bars.show){var aY=aJ.bars.align=="left"?0:-aJ.bars.barWidth/2;if(aJ.bars.horizontal){aQ+=aY;aV+=aY+aJ.bars.barWidth}else{aK+=aY;aM+=aY+aJ.bars.barWidth}}aF(aJ.xaxis,aK,aM);aF(aJ.yaxis,aQ,aV)}c.each(m(),function(a1,a2){if(a2.datamin==aO){a2.datamin=null}if(a2.datamax==aI){a2.datamax=null}})}function j(aB,aC){var aD=document.createElement("canvas");aD.className=aC;aD.width=G;aD.height=I;if(!aB){c(aD).css({position:"absolute",left:0,top:0})}c(aD).appendTo(av);if(!aD.getContext){aD=window.G_vmlCanvasManager.initElement(aD)}aD.getContext("2d").save();return aD}function B(){G=av.width();I=av.height();if(G<=0||I<=0){throw"Invalid dimensions for plot, width = "+G+", height = "+I}}function g(aC){if(aC.width!=G){aC.width=G}if(aC.height!=I){aC.height=I}var aB=aC.getContext("2d");aB.restore();aB.save()}function X(){var aC,aB=av.children("canvas.base"),aD=av.children("canvas.overlay");if(aB.length==0||aD==0){av.html("");av.css({padding:0});if(av.css("position")=="static"){av.css("position","relative")}B();az=j(true,"base");ad=j(false,"overlay");aC=false}else{az=aB.get(0);ad=aD.get(0);aC=true}H=az.getContext("2d");A=ad.getContext("2d");y=c([ad,az]);if(aC){av.data("plot").shutdown();aq.resize();A.clearRect(0,0,G,I);y.unbind();av.children().not([az,ad]).remove()}av.data("plot",aq)}function ah(){if(O.grid.hoverable){y.mousemove(aa);y.mouseleave(l)}if(O.grid.clickable){y.click(R)}an(ak.bindEvents,[y])}function ag(){if(M){clearTimeout(M)}y.unbind("mousemove",aa);y.unbind("mouseleave",l);y.unbind("click",R);an(ak.shutdown,[y])}function r(aG){function aC(aH){return aH}var aF,aB,aD=aG.options.transform||aC,aE=aG.options.inverseTransform;if(aG.direction=="x"){aF=aG.scale=h/Math.abs(aD(aG.max)-aD(aG.min));aB=Math.min(aD(aG.max),aD(aG.min))}else{aF=aG.scale=w/Math.abs(aD(aG.max)-aD(aG.min));aF=-aF;aB=Math.max(aD(aG.max),aD(aG.min))}if(aD==aC){aG.p2c=function(aH){return(aH-aB)*aF}}else{aG.p2c=function(aH){return(aD(aH)-aB)*aF}}if(!aE){aG.c2p=function(aH){return aB+aH/aF}}else{aG.c2p=function(aH){return aE(aB+aH/aF)}}}function L(aD){var aB=aD.options,aF,aJ=aD.ticks||[],aI=[],aE,aK=aB.labelWidth,aG=aB.labelHeight,aC;function aH(aM,aL){return c('<div style="position:absolute;top:-10000px;'+aL+'font-size:smaller"><div class="'+aD.direction+"Axis "+aD.direction+aD.n+'Axis">'+aM.join("")+"</div></div>").appendTo(av)}if(aD.direction=="x"){if(aK==null){aK=Math.floor(G/(aJ.length>0?aJ.length:1))}if(aG==null){aI=[];for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel" style="float:left;width:'+aK+'px">'+aE+"</div>")}}if(aI.length>0){aI.push('<div style="clear:left"></div>');aC=aH(aI,"width:10000px;");aG=aC.height();aC.remove()}}}else{if(aK==null||aG==null){for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel">'+aE+"</div>")}}if(aI.length>0){aC=aH(aI,"");if(aK==null){aK=aC.children().width()}if(aG==null){aG=aC.find("div.tickLabel").height()}aC.remove()}}}if(aK==null){aK=0}if(aG==null){aG=0}aD.labelWidth=aK;aD.labelHeight=aG}function au(aD){var aC=aD.labelWidth,aL=aD.labelHeight,aH=aD.options.position,aF=aD.options.tickLength,aG=O.grid.axisMargin,aJ=O.grid.labelMargin,aK=aD.direction=="x"?p:aw,aE;var aB=c.grep(aK,function(aN){return aN&&aN.options.position==aH&&aN.reserveSpace});if(c.inArray(aD,aB)==aB.length-1){aG=0}if(aF==null){aF="full"}var aI=c.grep(aK,function(aN){return aN&&aN.reserveSpace});var aM=c.inArray(aD,aI)==0;if(!aM&&aF=="full"){aF=5}if(!isNaN(+aF)){aJ+=+aF}if(aD.direction=="x"){aL+=aJ;if(aH=="bottom"){q.bottom+=aL+aG;aD.box={top:I-q.bottom,height:aL}}else{aD.box={top:q.top+aG,height:aL};q.top+=aL+aG}}else{aC+=aJ;if(aH=="left"){aD.box={left:q.left+aG,width:aC};q.left+=aC+aG}else{q.right+=aC+aG;aD.box={left:G-q.right,width:aC}}}aD.position=aH;aD.tickLength=aF;aD.box.padding=aJ;aD.innermost=aM}function U(aB){if(aB.direction=="x"){aB.box.left=q.left;aB.box.width=h}else{aB.box.top=q.top;aB.box.height=w}}function t(){var aC,aE=m();c.each(aE,function(aF,aG){aG.show=aG.options.show;if(aG.show==null){aG.show=aG.used}aG.reserveSpace=aG.show||aG.options.reserveSpace;n(aG)});allocatedAxes=c.grep(aE,function(aF){return aF.reserveSpace});q.left=q.right=q.top=q.bottom=0;if(O.grid.show){c.each(allocatedAxes,function(aF,aG){S(aG);P(aG);ap(aG,aG.ticks);L(aG)});for(aC=allocatedAxes.length-1;aC>=0;--aC){au(allocatedAxes[aC])}var aD=O.grid.minBorderMargin;if(aD==null){aD=0;for(aC=0;aC<Q.length;++aC){aD=Math.max(aD,Q[aC].points.radius+Q[aC].points.lineWidth/2)}}for(var aB in q){q[aB]+=O.grid.borderWidth;q[aB]=Math.max(aD,q[aB])}}h=G-q.left-q.right;w=I-q.bottom-q.top;c.each(aE,function(aF,aG){r(aG)});if(O.grid.show){c.each(allocatedAxes,function(aF,aG){U(aG)});k()}o()}function n(aE){var aF=aE.options,aD=+(aF.min!=null?aF.min:aE.datamin),aB=+(aF.max!=null?aF.max:aE.datamax),aH=aB-aD;if(aH==0){var aC=aB==0?1:0.01;if(aF.min==null){aD-=aC}if(aF.max==null||aF.min!=null){aB+=aC}}else{var aG=aF.autoscaleMargin;if(aG!=null){if(aF.min==null){aD-=aH*aG;if(aD<0&&aE.datamin!=null&&aE.datamin>=0){aD=0}}if(aF.max==null){aB+=aH*aG;if(aB>0&&aE.datamax!=null&&aE.datamax<=0){aB=0}}}}aE.min=aD;aE.max=aB}function S(aG){var aM=aG.options;var aH;if(typeof aM.ticks=="number"&&aM.ticks>0){aH=aM.ticks}else{aH=0.3*Math.sqrt(aG.direction=="x"?G:I)}var aT=(aG.max-aG.min)/aH,aO,aB,aN,aR,aS,aQ,aI;if(aM.mode=="time"){var aJ={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var aK=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var aC=0;if(aM.minTickSize!=null){if(typeof aM.tickSize=="number"){aC=aM.tickSize}else{aC=aM.minTickSize[0]*aJ[aM.minTickSize[1]]}}for(var aS=0;aS<aK.length-1;++aS){if(aT<(aK[aS][0]*aJ[aK[aS][1]]+aK[aS+1][0]*aJ[aK[aS+1][1]])/2&&aK[aS][0]*aJ[aK[aS][1]]>=aC){break}}aO=aK[aS][0];aN=aK[aS][1];if(aN=="year"){aQ=Math.pow(10,Math.floor(Math.log(aT/aJ.year)/Math.LN10));aI=(aT/aJ.year)/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ}aG.tickSize=aM.tickSize||[aO,aN];aB=function(aX){var a2=[],a0=aX.tickSize[0],a3=aX.tickSize[1],a1=new Date(aX.min);var aW=a0*aJ[a3];if(a3=="second"){a1.setUTCSeconds(a(a1.getUTCSeconds(),a0))}if(a3=="minute"){a1.setUTCMinutes(a(a1.getUTCMinutes(),a0))}if(a3=="hour"){a1.setUTCHours(a(a1.getUTCHours(),a0))}if(a3=="month"){a1.setUTCMonth(a(a1.getUTCMonth(),a0))}if(a3=="year"){a1.setUTCFullYear(a(a1.getUTCFullYear(),a0))}a1.setUTCMilliseconds(0);if(aW>=aJ.minute){a1.setUTCSeconds(0)}if(aW>=aJ.hour){a1.setUTCMinutes(0)}if(aW>=aJ.day){a1.setUTCHours(0)}if(aW>=aJ.day*4){a1.setUTCDate(1)}if(aW>=aJ.year){a1.setUTCMonth(0)}var a5=0,a4=Number.NaN,aY;do{aY=a4;a4=a1.getTime();a2.push(a4);if(a3=="month"){if(a0<1){a1.setUTCDate(1);var aV=a1.getTime();a1.setUTCMonth(a1.getUTCMonth()+1);var aZ=a1.getTime();a1.setTime(a4+a5*aJ.hour+(aZ-aV)*a0);a5=a1.getUTCHours();a1.setUTCHours(0)}else{a1.setUTCMonth(a1.getUTCMonth()+a0)}}else{if(a3=="year"){a1.setUTCFullYear(a1.getUTCFullYear()+a0)}else{a1.setTime(a4+aW)}}}while(a4<aX.max&&a4!=aY);return a2};aR=function(aV,aY){var a0=new Date(aV);if(aM.timeformat!=null){return c.plot.formatDate(a0,aM.timeformat,aM.monthNames)}var aW=aY.tickSize[0]*aJ[aY.tickSize[1]];var aX=aY.max-aY.min;var aZ=(aM.twelveHourClock)?" %p":"";if(aW<aJ.minute){fmt="%h:%M:%S"+aZ}else{if(aW<aJ.day){if(aX<2*aJ.day){fmt="%h:%M"+aZ}else{fmt="%b %d %h:%M"+aZ}}else{if(aW<aJ.month){fmt="%b %d"}else{if(aW<aJ.year){if(aX<aJ.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return c.plot.formatDate(a0,fmt,aM.monthNames)}}else{var aU=aM.tickDecimals;var aP=-Math.floor(Math.log(aT)/Math.LN10);if(aU!=null&&aP>aU){aP=aU}aQ=Math.pow(10,-aP);aI=aT/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2;if(aI>2.25&&(aU==null||aP+1<=aU)){aO=2.5;++aP}}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ;if(aM.minTickSize!=null&&aO<aM.minTickSize){aO=aM.minTickSize}aG.tickDecimals=Math.max(0,aU!=null?aU:aP);aG.tickSize=aM.tickSize||aO;aB=function(aX){var aZ=[];var a0=a(aX.min,aX.tickSize),aW=0,aV=Number.NaN,aY;do{aY=aV;aV=a0+aW*aX.tickSize;aZ.push(aV);++aW}while(aV<aX.max&&aV!=aY);return aZ};aR=function(aV,aW){return aV.toFixed(aW.tickDecimals)}}if(aM.alignTicksWithAxis!=null){var aF=(aG.direction=="x"?p:aw)[aM.alignTicksWithAxis-1];if(aF&&aF.used&&aF!=aG){var aL=aB(aG);if(aL.length>0){if(aM.min==null){aG.min=Math.min(aG.min,aL[0])}if(aM.max==null&&aL.length>1){aG.max=Math.max(aG.max,aL[aL.length-1])}}aB=function(aX){var aY=[],aV,aW;for(aW=0;aW<aF.ticks.length;++aW){aV=(aF.ticks[aW].v-aF.min)/(aF.max-aF.min);aV=aX.min+aV*(aX.max-aX.min);aY.push(aV)}return aY};if(aG.mode!="time"&&aM.tickDecimals==null){var aE=Math.max(0,-Math.floor(Math.log(aT)/Math.LN10)+1),aD=aB(aG);if(!(aD.length>1&&/\..*0$/.test((aD[1]-aD[0]).toFixed(aE)))){aG.tickDecimals=aE}}}}aG.tickGenerator=aB;if(c.isFunction(aM.tickFormatter)){aG.tickFormatter=function(aV,aW){return""+aM.tickFormatter(aV,aW)}}else{aG.tickFormatter=aR}}function P(aF){var aH=aF.options.ticks,aG=[];if(aH==null||(typeof aH=="number"&&aH>0)){aG=aF.tickGenerator(aF)}else{if(aH){if(c.isFunction(aH)){aG=aH({min:aF.min,max:aF.max})}else{aG=aH}}}var aE,aB;aF.ticks=[];for(aE=0;aE<aG.length;++aE){var aC=null;var aD=aG[aE];if(typeof aD=="object"){aB=+aD[0];if(aD.length>1){aC=aD[1]}}else{aB=+aD}if(aC==null){aC=aF.tickFormatter(aB,aF)}if(!isNaN(aB)){aF.ticks.push({v:aB,label:aC})}}}function ap(aB,aC){if(aB.options.autoscaleMargin&&aC.length>0){if(aB.options.min==null){aB.min=Math.min(aB.min,aC[0].v)}if(aB.options.max==null&&aC.length>1){aB.max=Math.max(aB.max,aC[aC.length-1].v)}}}function W(){H.clearRect(0,0,G,I);var aC=O.grid;if(aC.show&&aC.backgroundColor){N()}if(aC.show&&!aC.aboveData){ac()}for(var aB=0;aB<Q.length;++aB){an(ak.drawSeries,[H,Q[aB]]);d(Q[aB])}an(ak.draw,[H]);if(aC.show&&aC.aboveData){ac()}}function D(aB,aI){var aE,aH,aG,aD,aF=m();for(i=0;i<aF.length;++i){aE=aF[i];if(aE.direction==aI){aD=aI+aE.n+"axis";if(!aB[aD]&&aE.n==1){aD=aI+"axis"}if(aB[aD]){aH=aB[aD].from;aG=aB[aD].to;break}}}if(!aB[aD]){aE=aI=="x"?p[0]:aw[0];aH=aB[aI+"1"];aG=aB[aI+"2"]}if(aH!=null&&aG!=null&&aH>aG){var aC=aH;aH=aG;aG=aC}return{from:aH,to:aG,axis:aE}}function N(){H.save();H.translate(q.left,q.top);H.fillStyle=am(O.grid.backgroundColor,w,0,"rgba(255, 255, 255, 0)");H.fillRect(0,0,h,w);H.restore()}function ac(){var aF;H.save();H.translate(q.left,q.top);var aH=O.grid.markings;if(aH){if(c.isFunction(aH)){var aK=aq.getAxes();aK.xmin=aK.xaxis.min;aK.xmax=aK.xaxis.max;aK.ymin=aK.yaxis.min;aK.ymax=aK.yaxis.max;aH=aH(aK)}for(aF=0;aF<aH.length;++aF){var aD=aH[aF],aC=D(aD,"x"),aI=D(aD,"y");if(aC.from==null){aC.from=aC.axis.min}if(aC.to==null){aC.to=aC.axis.max}if(aI.from==null){aI.from=aI.axis.min}if(aI.to==null){aI.to=aI.axis.max}if(aC.to<aC.axis.min||aC.from>aC.axis.max||aI.to<aI.axis.min||aI.from>aI.axis.max){continue}aC.from=Math.max(aC.from,aC.axis.min);aC.to=Math.min(aC.to,aC.axis.max);aI.from=Math.max(aI.from,aI.axis.min);aI.to=Math.min(aI.to,aI.axis.max);if(aC.from==aC.to&&aI.from==aI.to){continue}aC.from=aC.axis.p2c(aC.from);aC.to=aC.axis.p2c(aC.to);aI.from=aI.axis.p2c(aI.from);aI.to=aI.axis.p2c(aI.to);if(aC.from==aC.to||aI.from==aI.to){H.beginPath();H.strokeStyle=aD.color||O.grid.markingsColor;H.lineWidth=aD.lineWidth||O.grid.markingsLineWidth;H.moveTo(aC.from,aI.from);H.lineTo(aC.to,aI.to);H.stroke()}else{H.fillStyle=aD.color||O.grid.markingsColor;H.fillRect(aC.from,aI.to,aC.to-aC.from,aI.from-aI.to)}}}var aK=m(),aM=O.grid.borderWidth;for(var aE=0;aE<aK.length;++aE){var aB=aK[aE],aG=aB.box,aQ=aB.tickLength,aN,aL,aP,aJ;if(!aB.show||aB.ticks.length==0){continue}H.strokeStyle=aB.options.tickColor||c.color.parse(aB.options.color).scale("a",0.22).toString();H.lineWidth=1;if(aB.direction=="x"){aN=0;if(aQ=="full"){aL=(aB.position=="top"?0:w)}else{aL=aG.top-q.top+(aB.position=="top"?aG.height:0)}}else{aL=0;if(aQ=="full"){aN=(aB.position=="left"?0:h)}else{aN=aG.left-q.left+(aB.position=="left"?aG.width:0)}}if(!aB.innermost){H.beginPath();aP=aJ=0;if(aB.direction=="x"){aP=h}else{aJ=w}if(H.lineWidth==1){aN=Math.floor(aN)+0.5;aL=Math.floor(aL)+0.5}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ);H.stroke()}H.beginPath();for(aF=0;aF<aB.ticks.length;++aF){var aO=aB.ticks[aF].v;aP=aJ=0;if(aO<aB.min||aO>aB.max||(aQ=="full"&&aM>0&&(aO==aB.min||aO==aB.max))){continue}if(aB.direction=="x"){aN=aB.p2c(aO);aJ=aQ=="full"?-w:aQ;if(aB.position=="top"){aJ=-aJ}}else{aL=aB.p2c(aO);aP=aQ=="full"?-h:aQ;if(aB.position=="left"){aP=-aP}}if(H.lineWidth==1){if(aB.direction=="x"){aN=Math.floor(aN)+0.5}else{aL=Math.floor(aL)+0.5}}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ)}H.stroke()}if(aM){H.lineWidth=aM;H.strokeStyle=O.grid.borderColor;H.strokeRect(-aM/2,-aM/2,h+aM,w+aM)}H.restore()}function k(){av.find(".tickLabels").remove();var aG=['<div class="tickLabels" style="font-size:smaller">'];var aJ=m();for(var aD=0;aD<aJ.length;++aD){var aC=aJ[aD],aF=aC.box;if(!aC.show){continue}aG.push('<div class="'+aC.direction+"Axis "+aC.direction+aC.n+'Axis" style="color:'+aC.options.color+'">');for(var aE=0;aE<aC.ticks.length;++aE){var aH=aC.ticks[aE];if(!aH.label||aH.v<aC.min||aH.v>aC.max){continue}var aK={},aI;if(aC.direction=="x"){aI="center";aK.left=Math.round(q.left+aC.p2c(aH.v)-aC.labelWidth/2);if(aC.position=="bottom"){aK.top=aF.top+aF.padding}else{aK.bottom=I-(aF.top+aF.height-aF.padding)}}else{aK.top=Math.round(q.top+aC.p2c(aH.v)-aC.labelHeight/2);if(aC.position=="left"){aK.right=G-(aF.left+aF.width-aF.padding);aI="right"}else{aK.left=aF.left+aF.padding;aI="left"}}aK.width=aC.labelWidth;var aB=["position:absolute","text-align:"+aI];for(var aL in aK){aB.push(aL+":"+aK[aL]+"px")}aG.push('<div class="tickLabel" style="'+aB.join(";")+'">'+aH.label+"</div>")}aG.push("</div>")}aG.push("</div>");av.append(aG.join(""))}function d(aB){if(aB.lines.show){at(aB)}if(aB.bars.show){e(aB)}if(aB.points.show){ao(aB)}}function at(aE){function aD(aP,aQ,aI,aU,aT){var aV=aP.points,aJ=aP.pointsize,aN=null,aM=null;H.beginPath();for(var aO=aJ;aO<aV.length;aO+=aJ){var aL=aV[aO-aJ],aS=aV[aO-aJ+1],aK=aV[aO],aR=aV[aO+1];if(aL==null||aK==null){continue}if(aS<=aR&&aS<aT.min){if(aR<aT.min){continue}aL=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.min}else{if(aR<=aS&&aR<aT.min){if(aS<aT.min){continue}aK=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.min}}if(aS>=aR&&aS>aT.max){if(aR>aT.max){continue}aL=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.max}else{if(aR>=aS&&aR>aT.max){if(aS>aT.max){continue}aK=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.max}}if(aL<=aK&&aL<aU.min){if(aK<aU.min){continue}aS=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.min}else{if(aK<=aL&&aK<aU.min){if(aL<aU.min){continue}aR=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.min}}if(aL>=aK&&aL>aU.max){if(aK>aU.max){continue}aS=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.max}else{if(aK>=aL&&aK>aU.max){if(aL>aU.max){continue}aR=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.max}}if(aL!=aN||aS!=aM){H.moveTo(aU.p2c(aL)+aQ,aT.p2c(aS)+aI)}aN=aK;aM=aR;H.lineTo(aU.p2c(aK)+aQ,aT.p2c(aR)+aI)}H.stroke()}function aF(aI,aQ,aP){var aW=aI.points,aV=aI.pointsize,aN=Math.min(Math.max(0,aP.min),aP.max),aX=0,aU,aT=false,aM=1,aL=0,aR=0;while(true){if(aV>0&&aX>aW.length+aV){break}aX+=aV;var aZ=aW[aX-aV],aK=aW[aX-aV+aM],aY=aW[aX],aJ=aW[aX+aM];if(aT){if(aV>0&&aZ!=null&&aY==null){aR=aX;aV=-aV;aM=2;continue}if(aV<0&&aX==aL+aV){H.fill();aT=false;aV=-aV;aM=1;aX=aL=aR+aV;continue}}if(aZ==null||aY==null){continue}if(aZ<=aY&&aZ<aQ.min){if(aY<aQ.min){continue}aK=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.min}else{if(aY<=aZ&&aY<aQ.min){if(aZ<aQ.min){continue}aJ=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.min}}if(aZ>=aY&&aZ>aQ.max){if(aY>aQ.max){continue}aK=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.max}else{if(aY>=aZ&&aY>aQ.max){if(aZ>aQ.max){continue}aJ=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.max}}if(!aT){H.beginPath();H.moveTo(aQ.p2c(aZ),aP.p2c(aN));aT=true}if(aK>=aP.max&&aJ>=aP.max){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.max));H.lineTo(aQ.p2c(aY),aP.p2c(aP.max));continue}else{if(aK<=aP.min&&aJ<=aP.min){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.min));H.lineTo(aQ.p2c(aY),aP.p2c(aP.min));continue}}var aO=aZ,aS=aY;if(aK<=aJ&&aK<aP.min&&aJ>=aP.min){aZ=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.min}else{if(aJ<=aK&&aJ<aP.min&&aK>=aP.min){aY=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.min}}if(aK>=aJ&&aK>aP.max&&aJ<=aP.max){aZ=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.max}else{if(aJ>=aK&&aJ>aP.max&&aK<=aP.max){aY=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.max}}if(aZ!=aO){H.lineTo(aQ.p2c(aO),aP.p2c(aK))}H.lineTo(aQ.p2c(aZ),aP.p2c(aK));H.lineTo(aQ.p2c(aY),aP.p2c(aJ));if(aY!=aS){H.lineTo(aQ.p2c(aY),aP.p2c(aJ));H.lineTo(aQ.p2c(aS),aP.p2c(aJ))}}}H.save();H.translate(q.left,q.top);H.lineJoin="round";var aG=aE.lines.lineWidth,aB=aE.shadowSize;if(aG>0&&aB>0){H.lineWidth=aB;H.strokeStyle="rgba(0,0,0,0.1)";var aH=Math.PI/18;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/2),Math.cos(aH)*(aG/2+aB/2),aE.xaxis,aE.yaxis);H.lineWidth=aB/2;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/4),Math.cos(aH)*(aG/2+aB/4),aE.xaxis,aE.yaxis)}H.lineWidth=aG;H.strokeStyle=aE.color;var aC=ae(aE.lines,aE.color,0,w);if(aC){H.fillStyle=aC;aF(aE.datapoints,aE.xaxis,aE.yaxis)}if(aG>0){aD(aE.datapoints,0,0,aE.xaxis,aE.yaxis)}H.restore()}function ao(aE){function aH(aN,aM,aU,aK,aS,aT,aQ,aJ){var aR=aN.points,aI=aN.pointsize;for(var aL=0;aL<aR.length;aL+=aI){var aP=aR[aL],aO=aR[aL+1];if(aP==null||aP<aT.min||aP>aT.max||aO<aQ.min||aO>aQ.max){continue}H.beginPath();aP=aT.p2c(aP);aO=aQ.p2c(aO)+aK;if(aJ=="circle"){H.arc(aP,aO,aM,0,aS?Math.PI:Math.PI*2,false)}else{aJ(H,aP,aO,aM,aS)}H.closePath();if(aU){H.fillStyle=aU;H.fill()}H.stroke()}}H.save();H.translate(q.left,q.top);var aG=aE.points.lineWidth,aC=aE.shadowSize,aB=aE.points.radius,aF=aE.points.symbol;if(aG>0&&aC>0){var aD=aC/2;H.lineWidth=aD;H.strokeStyle="rgba(0,0,0,0.1)";aH(aE.datapoints,aB,null,aD+aD/2,true,aE.xaxis,aE.yaxis,aF);H.strokeStyle="rgba(0,0,0,0.2)";aH(aE.datapoints,aB,null,aD/2,true,aE.xaxis,aE.yaxis,aF)}H.lineWidth=aG;H.strokeStyle=aE.color;aH(aE.datapoints,aB,ae(aE.points,aE.color),0,false,aE.xaxis,aE.yaxis,aF);H.restore()}function E(aN,aM,aV,aI,aQ,aF,aD,aL,aK,aU,aR,aC){var aE,aT,aJ,aP,aG,aB,aO,aH,aS;if(aR){aH=aB=aO=true;aG=false;aE=aV;aT=aN;aP=aM+aI;aJ=aM+aQ;if(aT<aE){aS=aT;aT=aE;aE=aS;aG=true;aB=false}}else{aG=aB=aO=true;aH=false;aE=aN+aI;aT=aN+aQ;aJ=aV;aP=aM;if(aP<aJ){aS=aP;aP=aJ;aJ=aS;aH=true;aO=false}}if(aT<aL.min||aE>aL.max||aP<aK.min||aJ>aK.max){return}if(aE<aL.min){aE=aL.min;aG=false}if(aT>aL.max){aT=aL.max;aB=false}if(aJ<aK.min){aJ=aK.min;aH=false}if(aP>aK.max){aP=aK.max;aO=false}aE=aL.p2c(aE);aJ=aK.p2c(aJ);aT=aL.p2c(aT);aP=aK.p2c(aP);if(aD){aU.beginPath();aU.moveTo(aE,aJ);aU.lineTo(aE,aP);aU.lineTo(aT,aP);aU.lineTo(aT,aJ);aU.fillStyle=aD(aJ,aP);aU.fill()}if(aC>0&&(aG||aB||aO||aH)){aU.beginPath();aU.moveTo(aE,aJ+aF);if(aG){aU.lineTo(aE,aP+aF)}else{aU.moveTo(aE,aP+aF)}if(aO){aU.lineTo(aT,aP+aF)}else{aU.moveTo(aT,aP+aF)}if(aB){aU.lineTo(aT,aJ+aF)}else{aU.moveTo(aT,aJ+aF)}if(aH){aU.lineTo(aE,aJ+aF)}else{aU.moveTo(aE,aJ+aF)}aU.stroke()}}function e(aD){function aC(aJ,aI,aL,aG,aK,aN,aM){var aO=aJ.points,aF=aJ.pointsize;for(var aH=0;aH<aO.length;aH+=aF){if(aO[aH]==null){continue}E(aO[aH],aO[aH+1],aO[aH+2],aI,aL,aG,aK,aN,aM,H,aD.bars.horizontal,aD.bars.lineWidth)}}H.save();H.translate(q.left,q.top);H.lineWidth=aD.bars.lineWidth;H.strokeStyle=aD.color;var aB=aD.bars.align=="left"?0:-aD.bars.barWidth/2;var aE=aD.bars.fill?function(aF,aG){return ae(aD.bars,aD.color,aF,aG)}:null;aC(aD.datapoints,aB,aB+aD.bars.barWidth,0,aE,aD.xaxis,aD.yaxis);H.restore()}function ae(aD,aB,aC,aF){var aE=aD.fill;if(!aE){return null}if(aD.fillColor){return am(aD.fillColor,aC,aF,aB)}var aG=c.color.parse(aB);aG.a=typeof aE=="number"?aE:0.4;aG.normalize();return aG.toString()}function o(){av.find(".legend").remove();if(!O.legend.show){return}var aH=[],aF=false,aN=O.legend.labelFormatter,aM,aJ;for(var aE=0;aE<Q.length;++aE){aM=Q[aE];aJ=aM.label;if(!aJ){continue}if(aE%O.legend.noColumns==0){if(aF){aH.push("</tr>")}aH.push("<tr>");aF=true}if(aN){aJ=aN(aJ,aM)}aH.push('<td class="legendColorBox"><div style="border:1px solid '+O.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aM.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aJ+"</td>")}if(aF){aH.push("</tr>")}if(aH.length==0){return}var aL='<table style="font-size:smaller;color:'+O.grid.color+'">'+aH.join("")+"</table>";if(O.legend.container!=null){c(O.legend.container).html(aL)}else{var aI="",aC=O.legend.position,aD=O.legend.margin;if(aD[0]==null){aD=[aD,aD]}if(aC.charAt(0)=="n"){aI+="top:"+(aD[1]+q.top)+"px;"}else{if(aC.charAt(0)=="s"){aI+="bottom:"+(aD[1]+q.bottom)+"px;"}}if(aC.charAt(1)=="e"){aI+="right:"+(aD[0]+q.right)+"px;"}else{if(aC.charAt(1)=="w"){aI+="left:"+(aD[0]+q.left)+"px;"}}var aK=c('<div class="legend">'+aL.replace('style="','style="position:absolute;'+aI+";")+"</div>").appendTo(av);if(O.legend.backgroundOpacity!=0){var aG=O.legend.backgroundColor;if(aG==null){aG=O.grid.backgroundColor;if(aG&&typeof aG=="string"){aG=c.color.parse(aG)}else{aG=c.color.extract(aK,"background-color")}aG.a=1;aG=aG.toString()}var aB=aK.children();c('<div style="position:absolute;width:'+aB.width()+"px;height:"+aB.height()+"px;"+aI+"background-color:"+aG+';"> </div>').prependTo(aK).css("opacity",O.legend.backgroundOpacity)}}}var ab=[],M=null;function K(aI,aG,aD){var aO=O.grid.mouseActiveRadius,a0=aO*aO+1,aY=null,aR=false,aW,aU;for(aW=Q.length-1;aW>=0;--aW){if(!aD(Q[aW])){continue}var aP=Q[aW],aH=aP.xaxis,aF=aP.yaxis,aV=aP.datapoints.points,aT=aP.datapoints.pointsize,aQ=aH.c2p(aI),aN=aF.c2p(aG),aC=aO/aH.scale,aB=aO/aF.scale;if(aH.options.inverseTransform){aC=Number.MAX_VALUE}if(aF.options.inverseTransform){aB=Number.MAX_VALUE}if(aP.lines.show||aP.points.show){for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1];if(aK==null){continue}if(aK-aQ>aC||aK-aQ<-aC||aJ-aN>aB||aJ-aN<-aB){continue}var aM=Math.abs(aH.p2c(aK)-aI),aL=Math.abs(aF.p2c(aJ)-aG),aS=aM*aM+aL*aL;if(aS<a0){a0=aS;aY=[aW,aU/aT]}}}if(aP.bars.show&&!aY){var aE=aP.bars.align=="left"?0:-aP.bars.barWidth/2,aX=aE+aP.bars.barWidth;for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1],aZ=aV[aU+2];if(aK==null){continue}if(Q[aW].bars.horizontal?(aQ<=Math.max(aZ,aK)&&aQ>=Math.min(aZ,aK)&&aN>=aJ+aE&&aN<=aJ+aX):(aQ>=aK+aE&&aQ<=aK+aX&&aN>=Math.min(aZ,aJ)&&aN<=Math.max(aZ,aJ))){aY=[aW,aU/aT]}}}}if(aY){aW=aY[0];aU=aY[1];aT=Q[aW].datapoints.pointsize;return{datapoint:Q[aW].datapoints.points.slice(aU*aT,(aU+1)*aT),dataIndex:aU,series:Q[aW],seriesIndex:aW}}return null}function aa(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return aC.hoverable!=false})}}function l(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return false})}}function R(aB){u("plotclick",aB,function(aC){return aC.clickable!=false})}function u(aC,aB,aD){var aE=y.offset(),aH=aB.pageX-aE.left-q.left,aF=aB.pageY-aE.top-q.top,aJ=C({left:aH,top:aF});aJ.pageX=aB.pageX;aJ.pageY=aB.pageY;var aK=K(aH,aF,aD);if(aK){aK.pageX=parseInt(aK.series.xaxis.p2c(aK.datapoint[0])+aE.left+q.left);aK.pageY=parseInt(aK.series.yaxis.p2c(aK.datapoint[1])+aE.top+q.top)}if(O.grid.autoHighlight){for(var aG=0;aG<ab.length;++aG){var aI=ab[aG];if(aI.auto==aC&&!(aK&&aI.series==aK.series&&aI.point[0]==aK.datapoint[0]&&aI.point[1]==aK.datapoint[1])){T(aI.series,aI.point)}}if(aK){x(aK.series,aK.datapoint,aC)}}av.trigger(aC,[aJ,aK])}function f(){if(!M){M=setTimeout(s,30)}}function s(){M=null;A.save();A.clearRect(0,0,G,I);A.translate(q.left,q.top);var aC,aB;for(aC=0;aC<ab.length;++aC){aB=ab[aC];if(aB.series.bars.show){v(aB.series,aB.point)}else{ay(aB.series,aB.point)}}A.restore();an(ak.drawOverlay,[A])}function x(aD,aB,aF){if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){var aE=aD.datapoints.pointsize;aB=aD.datapoints.points.slice(aE*aB,aE*(aB+1))}var aC=al(aD,aB);if(aC==-1){ab.push({series:aD,point:aB,auto:aF});f()}else{if(!aF){ab[aC].auto=false}}}function T(aD,aB){if(aD==null&&aB==null){ab=[];f()}if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){aB=aD.data[aB]}var aC=al(aD,aB);if(aC!=-1){ab.splice(aC,1);f()}}function al(aD,aE){for(var aB=0;aB<ab.length;++aB){var aC=ab[aB];if(aC.series==aD&&aC.point[0]==aE[0]&&aC.point[1]==aE[1]){return aB}}return -1}function ay(aE,aD){var aC=aD[0],aI=aD[1],aH=aE.xaxis,aG=aE.yaxis;if(aC<aH.min||aC>aH.max||aI<aG.min||aI>aG.max){return}var aF=aE.points.radius+aE.points.lineWidth/2;A.lineWidth=aF;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aB=1.5*aF,aC=aH.p2c(aC),aI=aG.p2c(aI);A.beginPath();if(aE.points.symbol=="circle"){A.arc(aC,aI,aB,0,2*Math.PI,false)}else{aE.points.symbol(A,aC,aI,aB,false)}A.closePath();A.stroke()}function v(aE,aB){A.lineWidth=aE.bars.lineWidth;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aD=c.color.parse(aE.color).scale("a",0.5).toString();var aC=aE.bars.align=="left"?0:-aE.bars.barWidth/2;E(aB[0],aB[1],aB[2]||0,aC,aC+aE.bars.barWidth,0,function(){return aD},aE.xaxis,aE.yaxis,A,aE.bars.horizontal,aE.bars.lineWidth)}function am(aJ,aB,aH,aC){if(typeof aJ=="string"){return aJ}else{var aI=H.createLinearGradient(0,aH,0,aB);for(var aE=0,aD=aJ.colors.length;aE<aD;++aE){var aF=aJ.colors[aE];if(typeof aF!="string"){var aG=c.color.parse(aC);if(aF.brightness!=null){aG=aG.scale("rgb",aF.brightness)}if(aF.opacity!=null){aG.a*=aF.opacity}aF=aG.toString()}aI.addColorStop(aE/(aD-1),aF)}return aI}}}c.plot=function(g,e,d){var f=new b(c(g),e,d,c.plot.plugins);return f};c.plot.version="0.7";c.plot.plugins=[];c.plot.formatDate=function(l,f,h){var o=function(d){d=""+d;return d.length==1?"0"+d:d};var e=[];var p=false,j=false;var n=l.getUTCHours();var k=n<12;if(h==null){h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(f.search(/%p|%P/)!=-1){if(n>12){n=n-12}else{if(n==0){n=12}}}for(var g=0;g<f.length;++g){var m=f.charAt(g);if(p){switch(m){case"h":m=""+n;break;case"H":m=o(n);break;case"M":m=o(l.getUTCMinutes());break;case"S":m=o(l.getUTCSeconds());break;case"d":m=""+l.getUTCDate();break;case"m":m=""+(l.getUTCMonth()+1);break;case"y":m=""+l.getUTCFullYear();break;case"b":m=""+h[l.getUTCMonth()];break;case"p":m=(k)?("am"):("pm");break;case"P":m=(k)?("AM"):("PM");break;case"0":m="";j=true;break}if(m&&j){m=o(m);j=false}e.push(m);if(!j){p=false}}else{if(m=="%"){p=true}else{e.push(m)}}}return e.join("")};function a(e,d){return d*Math.floor(e/d)}})(jQuery);(function(n,p,u){var w=n([]),s=n.resize=n.extend(n.resize,{}),o,l="setTimeout",m="resize",t=m+"-special-event",v="delay",r="throttleWindow";s[v]=250;s[r]=true;n.event.special[m]={setup:function(){if(!s[r]&&this[l]){return false}var a=n(this);w=w.add(a);n.data(this,t,{w:a.width(),h:a.height()});if(w.length===1){q()}},teardown:function(){if(!s[r]&&this[l]){return false}var a=n(this);w=w.not(a);a.removeData(t);if(!w.length){clearTimeout(o)}},add:function(b){if(!s[r]&&this[l]){return false}var c;function a(d,h,g){var f=n(this),e=n.data(this,t);e.w=h!==u?h:f.width();e.h=g!==u?g:f.height();c.apply(this,arguments)}if(n.isFunction(b)){c=b;return a}else{c=b.handler;b.handler=a}}};function q(){o=p[l](function(){w.each(function(){var d=n(this),a=d.width(),b=d.height(),c=n.data(this,t);if(a!==c.w||b!==c.h){d.trigger(m,[c.w=a,c.h=b])}});q()},s[v])}})(jQuery,this);(function(b){var a={};function c(f){function e(){var h=f.getPlaceholder();if(h.width()==0||h.height()==0){return}f.resize();f.setupGrid();f.draw()}function g(i,h){i.getPlaceholder().resize(e)}function d(i,h){i.getPlaceholder().unbind("resize",e)}f.hooks.bindEvents.push(g);f.hooks.shutdown.push(d)}b.plot.plugins.push({init:c,options:a,name:"resize",version:"1.0"})})(jQuery);(function(a){function b(k){var p={first:{x:-1,y:-1},second:{x:-1,y:-1},show:false,active:false};var m={};var r=null;function e(s){if(p.active){l(s);k.getPlaceholder().trigger("plotselecting",[g()])}}function n(s){if(s.which!=1){return}document.body.focus();if(document.onselectstart!==undefined&&m.onselectstart==null){m.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!==undefined&&m.ondrag==null){m.ondrag=document.ondrag;document.ondrag=function(){return false}}d(p.first,s);p.active=true;r=function(t){j(t)};a(document).one("mouseup",r)}function j(s){r=null;if(document.onselectstart!==undefined){document.onselectstart=m.onselectstart}if(document.ondrag!==undefined){document.ondrag=m.ondrag}p.active=false;l(s);if(f()){i()}else{k.getPlaceholder().trigger("plotunselected",[]);k.getPlaceholder().trigger("plotselecting",[null])}return false}function g(){if(!f()){return null}var u={},t=p.first,s=p.second;a.each(k.getAxes(),function(v,w){if(w.used){var y=w.c2p(t[w.direction]),x=w.c2p(s[w.direction]);u[v]={from:Math.min(y,x),to:Math.max(y,x)}}});return u}function i(){var s=g();k.getPlaceholder().trigger("plotselected",[s]);if(s.xaxis&&s.yaxis){k.getPlaceholder().trigger("selected",[{x1:s.xaxis.from,y1:s.yaxis.from,x2:s.xaxis.to,y2:s.yaxis.to}])}}function h(t,u,s){return u<t?t:(u>s?s:u)}function d(w,t){var v=k.getOptions();var u=k.getPlaceholder().offset();var s=k.getPlotOffset();w.x=h(0,t.pageX-u.left-s.left,k.width());w.y=h(0,t.pageY-u.top-s.top,k.height());if(v.selection.mode=="y"){w.x=w==p.first?0:k.width()}if(v.selection.mode=="x"){w.y=w==p.first?0:k.height()}}function l(s){if(s.pageX==null){return}d(p.second,s);if(f()){p.show=true;k.triggerRedrawOverlay()}else{q(true)}}function q(s){if(p.show){p.show=false;k.triggerRedrawOverlay();if(!s){k.getPlaceholder().trigger("plotunselected",[])}}}function c(s,w){var t,y,z,A,x=k.getAxes();for(var u in x){t=x[u];if(t.direction==w){A=w+t.n+"axis";if(!s[A]&&t.n==1){A=w+"axis"}if(s[A]){y=s[A].from;z=s[A].to;break}}}if(!s[A]){t=w=="x"?k.getXAxes()[0]:k.getYAxes()[0];y=s[w+"1"];z=s[w+"2"]}if(y!=null&&z!=null&&y>z){var v=y;y=z;z=v}return{from:y,to:z,axis:t}}function o(t,s){var v,u,w=k.getOptions();if(w.selection.mode=="y"){p.first.x=0;p.second.x=k.width()}else{u=c(t,"x");p.first.x=u.axis.p2c(u.from);p.second.x=u.axis.p2c(u.to)}if(w.selection.mode=="x"){p.first.y=0;p.second.y=k.height()}else{u=c(t,"y");p.first.y=u.axis.p2c(u.from);p.second.y=u.axis.p2c(u.to)}p.show=true;k.triggerRedrawOverlay();if(!s&&f()){i()}}function f(){var s=5;return Math.abs(p.second.x-p.first.x)>=s&&Math.abs(p.second.y-p.first.y)>=s}k.clearSelection=q;k.setSelection=o;k.getSelection=g;k.hooks.bindEvents.push(function(t,s){var u=t.getOptions();if(u.selection.mode!=null){s.mousemove(e);s.mousedown(n)}});k.hooks.drawOverlay.push(function(v,D){if(p.show&&f()){var t=v.getPlotOffset();var s=v.getOptions();D.save();D.translate(t.left,t.top);var z=a.color.parse(s.selection.color);D.strokeStyle=z.scale("a",0.8).toString();D.lineWidth=1;D.lineJoin="round";D.fillStyle=z.scale("a",0.4).toString();var B=Math.min(p.first.x,p.second.x),A=Math.min(p.first.y,p.second.y),C=Math.abs(p.second.x-p.first.x),u=Math.abs(p.second.y-p.first.y);D.fillRect(B,A,C,u);D.strokeRect(B,A,C,u);D.restore()}});k.hooks.shutdown.push(function(t,s){s.unbind("mousemove",e);s.unbind("mousedown",n);if(r){a(document).unbind("mouseup",r)}})}a.plot.plugins.push({init:b,options:{selection:{mode:null,color:"#e8cfac"}},name:"selection",version:"1.1"})})(jQuery);
(function () {
  function limitDataPoints(plot) {
    var minDistance = 0;

    function getMinDistance(plot) {
      var series = plot.getData();
      var xaxis = plot.getAxes().xaxis;

      var values = [];
      var opts = xaxis.options;
      var min = opts.min, max = opts.max;

      if (!(min && max)) {
        series.forEach(function (s) {
          var count = 0;
          s.data.forEach(function (d) {
            d && values.push(d[0]);
          });

        });

        min = min || Math.min.apply(Math, values);
        max = max || Math.max.apply(Math, values);
      }

      var width = $("#graph").width();
      return 8 * (max - min) / width;
    }

    plot.hooks.processRawData.push(function (plot, series, data, datapoints) {
      if (series == plot.getData()[0])
        minDistance = getMinDistance(plot);

      var lastDate;
      var values;

      for (var d = data.length - 1; d >= 0; d--) {
        var date = data[d][0];
        var value = data[d][1];

        if (lastDate && date + minDistance > lastDate) {
          data.splice(d, 1);
          values.push(value);
        } else {
          if (lastDate) {
            values.sort();
            data[d + 1][1] = values[Math.floor(values.length / 2)];
          }

          lastDate = date;
          values = [value];
        }
      }
    });
  }

  function insertReleaseTicks(plot) {
    plot.hooks.draw.push(function (plot, ctx) {
      $(".release").remove();

      var releaseDates = [
        ["2010-01-21", "3.6"],
        ["2011-03-22", "4"],
        ["2011-06-21", "5"],
        ["2011-08-16", "6"],
        ["2011-09-27", "7"],
        ["2011-11-08", "8"],
        ["2011-12-20", "9"],
        ["2012-01-31", "10"],
        ["2012-03-13", "11"],
        ["2012-04-24", "12"],
        ["2012-06-05", "13"],
        ["2012-07-17", "14"],
        ["2012-08-28", "15"],
        ["2012-10-09", "16"],
        ["2012-11-20", "17"],
        ["2013-01-08", "18"],
        ["2013-02-19", "19"],
        ["2013-04-02", "20"],
        ["2013-05-14", "21"],
        ["2013-06-25", "22"],
        ["2013-08-06", "23"],
        ["2013-09-17", "24"],
        ["2013-10-29", "25"],
        ["2013-12-10", "26"],
        ["2014-02-04", "27"],
        ["2014-03-18", "28"],
        ["2014-04-29", "29"],
        ["2014-06-10", "30"],
        ["2014-07-22", "31"],
        ["2014-09-02", "32"],
        ["2014-10-13", "33"]
//        ["2014-", "34"],
//        ["2014-", "35"]
      ];

      ctx.save();

      var off = plot.getPlotOffset();
      ctx.translate(off.left, off.top);

      ctx.strokeStyle = "#888";
      ctx.lineWidth = 1;
      ctx.beginPath();

      var xaxis = plot.getAxes().xaxis;
      var plotHeight = plot.height();
      var plotWidth = plot.width();

      releaseDates.forEach(function (rdate) {
        var x = xaxis.p2c(+new Date(rdate[0]));
        rdate[0] = Math.floor(x) + 0.5;
      });

      releaseDates.forEach(function (rdate, index) {
        var x = rdate[0];
        var isLast = index + 1 >= releaseDates.length;
        var nextx = isLast ? plotWidth : releaseDates[index + 1][0];
        if (x >= plotWidth || (!isLast && nextx <= 0))
          return;

        if (x > 0 && x < plotWidth) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, plotHeight);
        }

        var label = $('<div class="release"/>')
          .text(rdate[1]).appendTo("#graph");

        var left = Math.max(0, x);
        var right = Math.min(plotWidth, nextx);
        var mid = left + ((right - left) / 2);
        var labelmid = label.width() / 2;
        label.css("left", (off.left + Math.max(left, mid - labelmid)) + "px");
      });

      ctx.stroke();
      ctx.restore();
    });
  }

  $.plot.plugins.push({init: limitDataPoints});
  $.plot.plugins.push({init: insertReleaseTicks});
})();
$(document).ready(function () {
  var Systems = ["linux", "linux64", "win", "win64", "mac"];
  var Graph = {description: "build size", direction: -1};

  function calcPercentDiff(currentValue, previousValue) {
    return -Math.round(((currentValue - previousValue) / previousValue) * 1000) / 10;
  }

  var previousPoint = null;
  var days = Object.keys(data).sort();

  function getDisplays() {
    return Systems.map(function (sys) {
      var sysdata = days.map(function (day) {
        var value = data[day][sys];
        if (value)
          return [+new Date(day), value];
      });

      return {
        lines: {show: true},
        points: {show: true, fillColor: "#ffffff"},
        borderWidth: 1.5,
        borderColor: "#BEBEBE",
        markingsLineWidth: .75,
        hoverable: true,
        clickable: true,
        shadowSize: 0,
        label: sys,
        data: sysdata.filter(function (d) { return d })
      };
    });
  }

  function drawGraph(elt, graph) {
    var options = {
      yaxis: {
        tickDecimals: 2,
        tickFormatter: function (val, axis) {
          return (val / 1024 / 1024).toFixed(axis.tickDecimals) + " mb";
        }
      },
      xaxis: {
        mode: "time"
      },
      legend: {position: "nw"},
      selection: { mode: "x" },
      grid: {hoverable: true, clickable: true}
    };

    function showToolTip(x, y, contents) {
      var tipWidth = 165;
      var tipHeight = 75;
      var xOffset = 5;
      var yOffset = 5;
      var ie = document.all && !window.opera;
      var iebody = (document.compatMode == "CSS1Com[at")
                   ? document.documentElement
                   : document.body;
      var scrollLeft = ie ? iebody.scrollLeft : window.pageXOffset;
      var scrollTop = ie ? iebody.scrollTop : window.pageYOffset;
      var docWidth = ie ? iebody.clientWidth - 15 : window.innerWidth - 15;
      var docHeight = ie ? iebody.clientHeight - 15 : window.innerHeight - 8;
      y = (y + tipHeight - scrollTop > docHeight)
          ? y - tipHeight - 5 - (yOffset * 2)
          : y // account for bottom edge;

      // account for right edge
      if (x + tipWidth - scrollLeft > docWidth) {
        $('<div id="tooltip">' + contents + '<\/div>').css({
          top: y + yOffset,
          right: docWidth - x + xOffset,
        }).appendTo("body").fadeIn(200);
      } else {
        $('<div id="tooltip">' + contents + '<\/div>').css({
          top: y + yOffset,
          left: x + xOffset,
        }).appendTo("body").fadeIn(200);
      }
    }

    $.plot(elt, getDisplays(), options);

    var selecting = false;
    // zooming
    elt.bind("plotselected", function (event, ranges) {
      $.plot(elt, getDisplays(), $.extend(true, {}, options, {
          xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to }
      }));

      selecting = true;
      setTimeout(function () {
        selecting = false;
      }, 0);
    });

    elt.bind("plotclick", function (event, pos, item) {
      if (!item || selecting)
        return;

      var index = item.dataIndex;

      function pad(num) {
        return num > 9 ? num : "0" + num;
      }

      function formatDate(date) {
        var d = new Date(date);
        return (d.getYear() + 1900) + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
      }

      if (index > 0) {
        var date = formatDate(item.datapoint[0]);
        var prevdate = formatDate(item.series.data[index - 1][0]);
        window.open("http://hg.mozilla.org/mozilla-central/pushloghtml?startdate=" + prevdate + "&enddate=" + date);
      }
    });

    elt.bind("plothover", function (event, pos, item) {
      if (selecting)
        return;

      if (!item) {
        $("#tooltip").remove();
        previousPoint = null;
        return;
      }

      if (previousPoint &&
          (previousPoint[0] == item.datapoint[0]) &&
          (previousPoint[1] == item.datapoint[1])) {
        return;
      }

      previousPoint = item.datapoint;
      $("#tooltip").remove();

      var index = item.dataIndex;
      var value = Math.round(item.datapoint[1] / 1024);
      var text = "size: " + value + " kb<br/>";

      if (index > 0) {
        var prevValue = Math.round(item.series.data[index - 1][1] / 1024);
        var diff = Math.round((value - prevValue) * 10) / 10;
        var pdiff = calcPercentDiff(value, prevValue);
        var better = pdiff < 0 ? "worse" : "better";
        pdiff = Math.abs(pdiff);
        if (diff === diff) {
          text += String.fromCharCode(916) + ": " + diff + " kb";
          text += " (" + pdiff + "% " + better + ")<br/>";
        }
      }

      text += "sys: " + Systems[item.seriesIndex] + "<br/>";
      text += "(click to show pushlog)";
      showToolTip(item.pageX, item.pageY, text);
    });
  }

  drawGraph($("#graph"), Graph);
});
var data =
{
    "2010-01-01": {
        "linux": 10638347,
        "linux64": 12186213,
        "mac": 24131170,
        "win": 12227074
    },
    "2010-01-02": {
        "linux": 10650417,
        "linux64": 12185710,
        "mac": 24139611,
        "win": 12210218
    },
    "2010-01-03": {
        "linux": 10628353,
        "linux64": 12184435,
        "mac": 24139337,
        "win": 12229263
    },
    "2010-01-04": {
        "linux": 10642552,
        "linux64": 12185267,
        "mac": 24140777,
        "win": 12247103
    },
    "2010-01-05": {
        "linux": 10650604,
        "linux64": 12185799,
        "mac": 24144936,
        "win": 12245683
    },
    "2010-01-06": {
        "linux": 10649307,
        "linux64": 12185444,
        "mac": 24132357,
        "win": 12216175
    },
    "2010-01-07": {
        "linux": 10642648,
        "linux64": 12186723,
        "mac": 24148382,
        "win": 12221188
    },
    "2010-01-08": {
        "linux": 10645887,
        "linux64": 12187423,
        "mac": 24150593,
        "win": 12222917
    },
    "2010-01-09": {
        "linux": 10640753,
        "linux64": 12188300,
        "mac": 24142870,
        "win": 12228521
    },
    "2010-01-10": {
        "linux": 10644133,
        "linux64": 12186960,
        "mac": 24140722,
        "win": 12221805
    },
    "2010-01-11": {
        "linux": 10640563,
        "linux64": 12184701,
        "mac": 24141144,
        "win": 12216623
    },
    "2010-01-12": {
        "linux": 10655121,
        "linux64": 12198002,
        "mac": 24199644,
        "win": 12254758
    },
    "2010-01-13": {
        "linux": 10674523,
        "linux64": 12207528,
        "mac": 24215393,
        "win": 12236404
    },
    "2010-01-14": {
        "linux": 10671454,
        "linux64": 12221295,
        "mac": 24237018,
        "win": 12245723
    },
    "2010-01-15": {
        "linux": 10668738,
        "linux64": 12209790,
        "mac": 24218779,
        "win": 12285878
    },
    "2010-01-16": {
        "linux": 10674647,
        "linux64": 12209544,
        "mac": 24221543,
        "win": 12274859
    },
    "2010-01-17": {
        "linux": 10666310,
        "linux64": 12214673,
        "mac": 24211495,
        "win": 12251489
    },
    "2010-01-18": {
        "linux": 10669145,
        "linux64": 12211342,
        "mac": 24211381,
        "win": 12265894
    },
    "2010-01-19": {
        "linux": 10691428,
        "linux64": 12217197,
        "mac": 24223099,
        "win": 12264073
    },
    "2010-01-20": {
        "linux": 10669646,
        "linux64": 12215715,
        "mac": 24219918,
        "win": 12269994
    },
    "2010-01-21": {
        "linux": 10734211,
        "linux64": 12230084,
        "mac": 24263197,
        "win": 12284024
    },
    "2010-01-22": {
        "linux": 10729066,
        "linux64": 12246649,
        "mac": 24318379,
        "win": 12333267
    },
    "2010-01-23": {
        "linux": 10726009,
        "linux64": 12251741,
        "mac": 24332554,
        "win": 12326824
    },
    "2010-01-24": {
        "linux": 10740645,
        "linux64": 12256725,
        "mac": 24292684,
        "win": 12310845
    },
    "2010-01-25": {
        "linux": 10728932,
        "linux64": 12252781,
        "mac": 24314413,
        "win": 12302179
    },
    "2010-01-26": {
        "linux": 10718404,
        "linux64": 12252634,
        "mac": 24314162,
        "win": 12328045
    },
    "2010-01-27": {
        "linux": 10722908,
        "linux64": 12252351,
        "mac": 24319030,
        "win": 12303855
    },
    "2010-01-28": {
        "linux": 10732143,
        "linux64": 12253345,
        "mac": 24309045,
        "win": 12333453
    },
    "2010-01-29": {
        "linux": 10748475,
        "linux64": 12252772,
        "mac": 24346206,
        "win": 12312353
    },
    "2010-01-30": {
        "linux": 10753032,
        "linux64": 12255296,
        "mac": 24319434,
        "win": 12313922
    },
    "2010-01-31": {
        "linux": 10760941,
        "linux64": 12250741,
        "mac": 24333415,
        "win": 12339517
    },
    "2010-02-01": {
        "linux": 10747885,
        "linux64": 12266693,
        "mac": 24339788,
        "win": 12339644
    },
    "2010-02-02": {
        "linux": 10733512,
        "linux64": 12261738,
        "mac": 24366183,
        "win": 12350811
    },
    "2010-02-03": {
        "linux": 10741457,
        "linux64": 12264000,
        "mac": 24360566,
        "win": 12335863
    },
    "2010-02-04": {
        "linux": 10729876,
        "linux64": 12263241,
        "mac": 24359268,
        "win": 12324549
    },
    "2010-02-05": {
        "linux": 10732359,
        "linux64": 12264932,
        "mac": 24372933,
        "win": 12342539
    },
    "2010-02-06": {
        "linux": 10767699,
        "linux64": 12266275,
        "mac": 24350459,
        "win": 12347722
    },
    "2010-02-07": {
        "linux": 10727060,
        "linux64": 12270265,
        "mac": 24375224
    },
    "2010-02-08": {
        "linux": 10783282,
        "linux64": 12284425,
        "mac": 24412447,
        "win": 12375878
    },
    "2010-02-09": {
        "linux": 10746373,
        "linux64": 12279869,
        "mac": 24415831,
        "win": 12380857
    },
    "2010-02-10": {
        "linux": 10753717,
        "linux64": 12286961,
        "mac": 24399019,
        "win": 12360407
    },
    "2010-02-11": {
        "linux": 10756694,
        "linux64": 12288022,
        "mac": 24420035,
        "win": 12394506
    },
    "2010-02-12": {
        "linux": 10781448,
        "linux64": 12307876,
        "mac": 24424287
    },
    "2010-02-13": {
        "linux": 10781485,
        "linux64": 12315293,
        "mac": 24423478
    },
    "2010-02-14": {
        "linux": 10776667,
        "linux64": 12305411,
        "mac": 24424460
    },
    "2010-02-15": {
        "linux": 10784811,
        "linux64": 12307147,
        "mac": 24422529
    },
    "2010-02-16": {
        "linux": 10780616,
        "linux64": 12304922,
        "mac": 24420418,
        "win": 12113500
    },
    "2010-02-17": {
        "linux": 10780868,
        "linux64": 12308097,
        "mac": 24421015,
        "win": 12102268
    },
    "2010-02-18": {
        "linux": 10775413,
        "linux64": 12313039,
        "mac": 24410953,
        "win": 12100598
    },
    "2010-02-19": {
        "linux": 10821079,
        "linux64": 12312367,
        "mac": 24420730,
        "win": 12108385
    },
    "2010-02-20": {
        "linux": 10828981,
        "linux64": 12312497,
        "mac": 24427290,
        "win": 12104855
    },
    "2010-02-21": {
        "linux": 10828609,
        "linux64": 12314360,
        "mac": 24426025,
        "win": 12109771
    },
    "2010-02-22": {
        "linux": 10828225,
        "linux64": 12312996,
        "mac": 24374427,
        "win": 12101651
    },
    "2010-02-23": {
        "linux": 10786312,
        "linux64": 12312431,
        "mac": 24377950,
        "win": 12109748
    },
    "2010-02-24": {
        "linux": 10782125,
        "linux64": 12316499,
        "mac": 24370127,
        "win": 12109398
    },
    "2010-02-25": {
        "linux": 10804066,
        "linux64": 12329536,
        "mac": 24378089,
        "win": 12111852
    },
    "2010-02-26": {
        "linux": 10835199,
        "linux64": 12330001,
        "mac": 24375295,
        "win": 12113341
    },
    "2010-02-27": {
        "linux": 10841057,
        "linux64": 12418314,
        "mac": 24358157,
        "win": 12133043
    },
    "2010-02-28": {
        "linux": 10806324,
        "linux64": 12418403,
        "mac": 24357169,
        "win": 12132084
    },
    "2010-03-01": {
        "linux": 10833796,
        "linux64": 12423713,
        "mac": 24384951,
        "win": 12144338
    },
    "2010-03-02": {
        "linux": 10839358,
        "linux64": 12423489,
        "mac": 24370089,
        "win": 12137558
    },
    "2010-03-03": {
        "linux": 10865701,
        "mac": 24399921,
        "win": 12129869
    },
    "2010-03-04": {
        "linux": 10852580,
        "linux64": 12426830,
        "mac": 24459401,
        "win": 12132627
    },
    "2010-03-05": {
        "linux": 10852019,
        "linux64": 12425243,
        "mac": 24463268,
        "win": 12130666
    },
    "2010-03-06": {
        "linux": 10842086,
        "linux64": 12426065,
        "mac": 24492093,
        "win": 12151883
    },
    "2010-03-07": {
        "linux": 10836982,
        "linux64": 12429218,
        "mac": 24481151,
        "win": 12145562
    },
    "2010-03-08": {
        "linux": 10828324,
        "linux64": 12418930,
        "mac": 24489678,
        "win": 12146512
    },
    "2010-03-09": {
        "linux": 10851905,
        "linux64": 12443025,
        "mac": 24613886,
        "win": 12151555
    },
    "2010-03-10": {
        "linux": 10831598,
        "linux64": 12434854,
        "mac": 24624179,
        "win": 12143066
    },
    "2010-03-11": {
        "linux": 10842732,
        "linux64": 12439287,
        "mac": 24613915,
        "win": 12136268
    },
    "2010-03-12": {
        "linux": 10880869,
        "linux64": 12473810,
        "mac": 24680377,
        "win": 12178878
    },
    "2010-03-13": {
        "linux": 10862693,
        "linux64": 12474051,
        "mac": 24674762,
        "win": 12177102
    },
    "2010-03-14": {
        "linux": 10869865,
        "linux64": 12463464,
        "mac": 24670806,
        "win": 12166437
    },
    "2010-03-15": {
        "linux": 10869259,
        "linux64": 12473698,
        "mac": 24674736,
        "win": 12172510
    },
    "2010-03-16": {
        "linux": 10871491,
        "linux64": 12479683,
        "mac": 24679033,
        "win": 12157165
    },
    "2010-03-17": {
        "linux": 10870693,
        "linux64": 12448052,
        "mac": 24646432,
        "win": 12133746
    },
    "2010-03-18": {
        "linux": 10870681,
        "linux64": 12458001,
        "mac": 24634870,
        "win": 12138737
    },
    "2010-03-19": {
        "linux": 10882556,
        "linux64": 12451805,
        "mac": 24636312,
        "win": 12140397
    },
    "2010-03-20": {
        "linux": 10884548,
        "linux64": 12454796,
        "mac": 24647503,
        "win": 12136695
    },
    "2010-03-21": {
        "linux": 10886964,
        "linux64": 12454841,
        "mac": 24661092,
        "win": 12131627
    },
    "2010-03-22": {
        "linux": 10889885,
        "linux64": 12459078,
        "mac": 24659279,
        "win": 12142443
    },
    "2010-03-23": {
        "linux": 10897688,
        "linux64": 12475511,
        "mac": 24614856,
        "win": 12140399
    },
    "2010-03-24": {
        "linux": 10906256,
        "linux64": 12495562,
        "mac": 24653085,
        "win": 12155396
    },
    "2010-03-25": {
        "linux": 10921453,
        "linux64": 12504845,
        "mac": 24679267,
        "win": 12175681
    },
    "2010-03-26": {
        "linux": 10917697,
        "linux64": 12505768,
        "mac": 24698458,
        "win": 12161444
    },
    "2010-03-27": {
        "linux": 11037956,
        "linux64": 12580542,
        "mac": 24692259,
        "win": 12180329
    },
    "2010-03-28": {
        "linux": 11035239,
        "linux64": 12580143,
        "mac": 24692803,
        "win": 12179683
    },
    "2010-03-29": {
        "linux": 11033837,
        "linux64": 12582868,
        "mac": 24691962,
        "win": 12179383
    },
    "2010-03-30": {
        "linux": 11055984,
        "linux64": 12593750,
        "mac": 24687221,
        "win": 12193520
    },
    "2010-03-31": {
        "linux": 11058621,
        "linux64": 12589537,
        "mac": 24688404,
        "win": 12196196
    },
    "2010-04-01": {
        "linux": 11059222,
        "linux64": 12587205,
        "mac": 24687006,
        "win": 12175849
    },
    "2010-04-02": {
        "linux": 11061471,
        "linux64": 12584610,
        "mac": 24584019,
        "win": 12137257
    },
    "2010-04-03": {
        "linux": 11066328,
        "linux64": 12582958,
        "mac": 25034780,
        "win": 12131194
    },
    "2010-04-04": {
        "linux": 11056978,
        "linux64": 12583322,
        "mac": 25020143,
        "win": 12136997
    },
    "2010-04-05": {
        "linux": 11053565,
        "linux64": 12580531,
        "mac": 25018843,
        "win": 12141964
    },
    "2010-04-06": {
        "linux": 11077744,
        "linux64": 12592606,
        "mac": 25086199,
        "win": 12163626
    },
    "2010-04-07": {
        "linux": 11099813,
        "linux64": 12617596,
        "mac": 25197922,
        "win": 12182589
    },
    "2010-04-08": {
        "linux": 11103880,
        "linux64": 12606893,
        "mac": 25224748,
        "win": 12176678
    },
    "2010-04-09": {
        "linux": 11101433,
        "linux64": 12605357,
        "mac": 25199567,
        "win": 12169122
    },
    "2010-04-10": {
        "linux": 11101253,
        "linux64": 12597836,
        "mac": 25181197,
        "win": 12161813
    },
    "2010-04-11": {
        "linux": 11106575,
        "linux64": 12600803,
        "mac": 25178909,
        "win": 12158946
    },
    "2010-04-12": {
        "linux": 11094213,
        "linux64": 12604116,
        "mac": 25166423,
        "win": 12150806
    },
    "2010-04-13": {
        "linux": 11104015,
        "linux64": 12599300,
        "mac": 25212759,
        "win": 12151953
    },
    "2010-04-14": {
        "linux": 11105004,
        "linux64": 12607232,
        "mac": 25200769,
        "win": 12172826
    },
    "2010-04-15": {
        "linux": 11096243,
        "linux64": 12609741,
        "mac": 25204299,
        "win": 12147741
    },
    "2010-04-16": {
        "linux": 11124033,
        "linux64": 12618509,
        "mac": 25192530,
        "win": 12169301
    },
    "2010-04-17": {
        "linux": 11123324,
        "linux64": 12626417,
        "mac": 25227204,
        "win": 12157326
    },
    "2010-04-18": {
        "linux": 11126165,
        "linux64": 12612750,
        "mac": 25211258,
        "win": 12155446
    },
    "2010-04-19": {
        "linux": 11122550,
        "linux64": 12612684,
        "mac": 25226447,
        "win": 12160975
    },
    "2010-04-20": {
        "linux": 11111067,
        "linux64": 12612006,
        "mac": 25199050,
        "win": 12159580
    },
    "2010-04-21": {
        "linux": 11108759,
        "linux64": 12613886,
        "mac": 25212687,
        "win": 12169059
    },
    "2010-04-22": {
        "linux": 11105004,
        "linux64": 12614093,
        "mac": 25211390,
        "win": 12177635
    },
    "2010-04-23": {
        "linux": 11112230,
        "linux64": 12618999,
        "mac": 25228132,
        "win": 12187977
    },
    "2010-04-24": {
        "linux": 11123697,
        "linux64": 12613514,
        "mac": 25220663,
        "win": 12174975
    },
    "2010-04-25": {
        "linux": 11118403,
        "linux64": 12614758,
        "mac": 25226335,
        "win": 12181341
    },
    "2010-04-26": {
        "linux": 11122428,
        "linux64": 12612985,
        "mac": 25225253,
        "win": 12171888
    },
    "2010-04-27": {
        "linux": 11123594,
        "linux64": 12606722,
        "mac": 25282875,
        "win": 12322438
    },
    "2010-04-28": {
        "linux": 11133657,
        "linux64": 12618032,
        "mac": 25342769,
        "win": 12319618
    },
    "2010-04-29": {
        "linux": 11110450,
        "linux64": 12611454,
        "mac": 25291066,
        "win": 12298134
    },
    "2010-04-30": {
        "linux": 11103591,
        "linux64": 12608694,
        "mac": 25288261,
        "win": 12305342
    },
    "2010-05-01": {
        "linux": 11105285,
        "linux64": 12620502,
        "mac": 25289467,
        "win": 12305413
    },
    "2010-05-02": {
        "linux": 11146571,
        "linux64": 12650307,
        "mac": 25360843,
        "win": 12342286
    },
    "2010-05-03": {
        "linux": 11144755,
        "linux64": 12647618,
        "mac": 25361572,
        "win": 12347946
    },
    "2010-05-04": {
        "linux": 11145049,
        "linux64": 12644396,
        "mac": 25364025,
        "win": 12342503
    },
    "2010-05-05": {
        "linux": 11147404,
        "linux64": 12646022,
        "mac": 25372030,
        "win": 12350904
    },
    "2010-05-06": {
        "linux": 11162761,
        "linux64": 12653998,
        "mac": 25822338,
        "win": 12351936
    },
    "2010-05-07": {
        "linux": 11164656,
        "linux64": 12658036,
        "mac": 25823584,
        "win": 12350201
    },
    "2010-05-08": {
        "linux64": 12657325,
        "mac": 25821556,
        "win": 12349336
    },
    "2010-05-09": {
        "linux": 11168929,
        "linux64": 12657595,
        "mac": 25822872
    },
    "2010-05-10": {
        "linux": 11165892,
        "linux64": 12658877,
        "mac": 25820171,
        "win": 12354180
    },
    "2010-05-11": {
        "linux": 11117487,
        "linux64": 12644433,
        "mac": 25749615,
        "win": 12321932
    },
    "2010-05-12": {
        "linux": 11129940,
        "linux64": 12640875,
        "mac": 25748370,
        "win": 12309081
    },
    "2010-05-13": {
        "linux": 11142418,
        "linux64": 12646411,
        "mac": 25764346,
        "win": 12332380
    },
    "2010-05-14": {
        "linux": 11141039,
        "linux64": 12650042,
        "mac": 25765495,
        "win": 12332415
    },
    "2010-05-15": {
        "linux": 11135163,
        "linux64": 12647232,
        "mac": 25756334,
        "win": 12348083
    },
    "2010-05-16": {
        "linux": 11133055,
        "linux64": 12650389,
        "mac": 25764670,
        "win": 12352595
    },
    "2010-05-17": {
        "linux": 11136694,
        "linux64": 12645035,
        "mac": 25760795,
        "win": 12352524
    },
    "2010-05-18": {
        "linux": 11141129,
        "linux64": 12652844,
        "mac": 25782979,
        "win": 12345330
    },
    "2010-05-19": {
        "linux": 11149698,
        "linux64": 12657708,
        "mac": 25797403,
        "win": 12343375
    },
    "2010-05-20": {
        "linux": 11139782,
        "linux64": 12662049,
        "mac": 25784501,
        "win": 12346082
    },
    "2010-05-21": {
        "linux": 11148425,
        "linux64": 12657293,
        "mac": 25791225,
        "win": 12343144
    },
    "2010-05-22": {
        "linux": 11140745,
        "linux64": 12663157,
        "mac": 25792828,
        "win": 12365720
    },
    "2010-05-23": {
        "linux": 11162614,
        "linux64": 12671616,
        "mac": 25785483,
        "win": 12367817
    },
    "2010-05-24": {
        "linux": 10577658,
        "linux64": 12038111,
        "mac": 25390309,
        "win": 12373202
    },
    "2010-05-25": {
        "linux": 11114799,
        "linux64": 12672531,
        "mac": 25462667,
        "win": 12383575
    },
    "2010-05-26": {
        "linux": 11126527,
        "linux64": 12665055,
        "mac": 25453842,
        "win": 12386278
    },
    "2010-05-27": {
        "linux": 11121559,
        "linux64": 12667297,
        "mac": 25460401,
        "win": 12388912
    },
    "2010-05-28": {
        "linux": 11127307,
        "linux64": 12673703,
        "mac": 25474716,
        "win": 12398882
    },
    "2010-05-29": {
        "linux": 11126308,
        "linux64": 12669301,
        "mac": 25483868,
        "win": 12401645
    },
    "2010-05-30": {
        "linux": 11130415,
        "linux64": 12673111,
        "mac": 25479942,
        "win": 12403699
    },
    "2010-05-31": {
        "linux": 11127202,
        "linux64": 12671347,
        "mac": 25479678,
        "win": 12403201
    },
    "2010-06-01": {
        "linux": 11126410,
        "linux64": 12675953,
        "mac": 25486883,
        "win": 12405610
    },
    "2010-06-02": {
        "linux": 11127796,
        "linux64": 12683675,
        "mac": 25501138,
        "win": 12409291
    },
    "2010-06-03": {
        "linux": 11133679,
        "linux64": 12691056,
        "mac": 25507916,
        "win": 12425342
    },
    "2010-06-04": {
        "linux": 11129316,
        "linux64": 12686502,
        "mac": 25506955,
        "win": 12419868
    },
    "2010-06-05": {
        "linux": 11124472,
        "linux64": 12684261,
        "mac": 25512614,
        "win": 12413015
    },
    "2010-06-06": {
        "linux": 11129033,
        "linux64": 12685089,
        "mac": 14676887,
        "win": 12417471
    },
    "2010-06-07": {
        "linux": 11131105,
        "linux64": 12693171,
        "mac": 25524214,
        "win": 12429375
    },
    "2010-06-08": {
        "linux": 11130341,
        "linux64": 12693246,
        "mac": 25524455,
        "win": 12428491
    },
    "2010-06-09": {
        "linux": 11210682,
        "linux64": 12718311,
        "mac": 25680733,
        "win": 12472157
    },
    "2010-06-10": {
        "linux": 11199946,
        "linux64": 12715529,
        "mac": 25679048,
        "win": 12482642
    },
    "2010-06-11": {
        "linux": 11200120,
        "linux64": 12712740,
        "mac": 25685157,
        "win": 12477151
    },
    "2010-06-12": {
        "linux": 11240582,
        "linux64": 12762916,
        "mac": 25760566,
        "win": 12527971
    },
    "2010-06-13": {
        "linux": 11242042,
        "linux64": 12764649,
        "mac": 25756388,
        "win": 12528252
    },
    "2010-06-14": {
        "linux": 11247455,
        "linux64": 12764604,
        "mac": 25769657,
        "win": 12530515
    },
    "2010-06-15": {
        "linux": 11243903,
        "linux64": 12748939,
        "mac": 25737303,
        "win": 12500845
    },
    "2010-06-16": {
        "linux": 11236262,
        "linux64": 12753738,
        "mac": 25743960,
        "win": 12503563
    },
    "2010-06-17": {
        "linux": 11163146,
        "linux64": 12728071,
        "mac": 25736142,
        "win": 12500998
    },
    "2010-06-18": {
        "linux": 11157685,
        "linux64": 12727665,
        "mac": 25738419,
        "win": 12506912
    },
    "2010-06-19": {
        "linux": 11169186,
        "linux64": 12757097,
        "mac": 25803803,
        "win": 12521705
    },
    "2010-06-20": {
        "linux": 11169852,
        "linux64": 12755613,
        "mac": 25791831,
        "win": 12515437
    },
    "2010-06-21": {
        "linux": 11166617,
        "linux64": 12755396,
        "mac": 25793285,
        "win": 12517014
    },
    "2010-06-22": {
        "linux": 11244341,
        "linux64": 12746118,
        "mac": 25814720,
        "win": 12513630
    },
    "2010-06-23": {
        "linux": 11265867,
        "linux64": 12765681,
        "mac": 25785989,
        "win": 12538140
    },
    "2010-06-24": {
        "linux": 11333501,
        "linux64": 12828608,
        "mac": 25953881,
        "win": 12606232
    },
    "2010-06-25": {
        "linux": 11336477,
        "linux64": 12879516,
        "mac": 25962625,
        "win": 12618138
    },
    "2010-06-26": {
        "linux": 11343496,
        "linux64": 12895467,
        "mac": 26040254,
        "win": 12611725
    },
    "2010-06-27": {
        "linux": 11326274,
        "linux64": 12853062,
        "mac": 26034497,
        "win": 12623962
    },
    "2010-06-28": {
        "linux": 11330077,
        "linux64": 12852468,
        "mac": 26033551,
        "win": 12647539
    },
    "2010-06-29": {
        "linux": 11350844,
        "linux64": 12908350,
        "mac": 26039057,
        "win": 12641097
    },
    "2010-06-30": {
        "linux": 11351149,
        "linux64": 12912382,
        "mac": 26047187,
        "win": 12636764
    },
    "2010-07-01": {
        "linux": 11473364,
        "linux64": 13014750,
        "mac": 26420216,
        "win": 12716754
    },
    "2010-07-02": {
        "linux": 11434281,
        "linux64": 13018270,
        "mac": 26418739,
        "win": 12687547
    },
    "2010-07-03": {
        "linux": 11447269,
        "linux64": 12997322,
        "mac": 26419319,
        "win": 12693435
    },
    "2010-07-04": {
        "linux": 11456255,
        "linux64": 13020620,
        "mac": 26432918,
        "win": 12693094
    },
    "2010-07-05": {
        "linux": 11418074,
        "linux64": 13037372,
        "mac": 26392535,
        "win": 12670630
    },
    "2010-07-06": {
        "linux": 11411675,
        "linux64": 13040398,
        "mac": 26390556,
        "win": 12671820
    },
    "2010-07-07": {
        "linux": 11418572,
        "linux64": 13013389,
        "mac": 26390368,
        "win": 12672858
    },
    "2010-07-08": {
        "linux": 11419934,
        "linux64": 13011082,
        "mac": 26392349,
        "win": 12677633
    },
    "2010-07-09": {
        "linux": 11411787,
        "linux64": 13010383,
        "mac": 26386317,
        "win": 12683403
    },
    "2010-07-10": {
        "linux": 11414191,
        "linux64": 13013151,
        "mac": 26385470,
        "win": 12684878
    },
    "2010-07-11": {
        "linux": 11412024,
        "linux64": 13036010,
        "mac": 26390318,
        "win": 12696768
    },
    "2010-07-12": {
        "linux": 11421028,
        "linux64": 13011232,
        "mac": 26392379,
        "win": 12689813
    },
    "2010-07-13": {
        "linux": 11415315,
        "linux64": 13037603,
        "mac": 26386441,
        "win": 12695624
    },
    "2010-07-14": {
        "linux": 11419042,
        "linux64": 13017699,
        "mac": 26399013,
        "win": 12673350
    },
    "2010-07-15": {
        "linux": 11595168,
        "linux64": 13085409,
        "mac": 26763318,
        "win": 12768052
    },
    "2010-07-16": {
        "linux": 11615310,
        "linux64": 13080139,
        "mac": 26848500,
        "win": 12817503
    },
    "2010-07-17": {
        "linux": 11635035,
        "linux64": 13089828,
        "mac": 26883303,
        "win": 12826452
    },
    "2010-07-18": {
        "linux": 11656704,
        "linux64": 13128643,
        "mac": 26881830,
        "win": 12802173
    },
    "2010-07-19": {
        "linux": 11645659,
        "linux64": 13101959,
        "mac": 26882430,
        "win": 12830135
    },
    "2010-07-20": {
        "linux": 11654025,
        "linux64": 13134065,
        "mac": 26892360,
        "win": 12836823
    },
    "2010-07-21": {
        "linux": 11649731,
        "linux64": 13079315,
        "mac": 26896924,
        "win": 12802833
    },
    "2010-07-22": {
        "linux": 11655610,
        "linux64": 13078929,
        "mac": 26905573,
        "win": 12847497
    },
    "2010-07-23": {
        "linux": 11684809,
        "linux64": 13097846,
        "mac": 26938162,
        "win": 12817367
    },
    "2010-07-24": {
        "linux": 11699082,
        "linux64": 13162944,
        "mac": 26996480,
        "win": 12830369
    },
    "2010-07-25": {
        "linux": 11697021,
        "linux64": 13159653,
        "mac": 27000594,
        "win": 12846569
    },
    "2010-07-26": {
        "linux": 11702365,
        "linux64": 13162678,
        "mac": 27005436,
        "win": 12847474
    },
    "2010-07-27": {
        "linux": 11706041,
        "linux64": 13163156,
        "mac": 26994567,
        "win": 12860916
    },
    "2010-07-28": {
        "linux": 11705112,
        "linux64": 13167874,
        "mac": 27000979,
        "win": 12847779
    },
    "2010-07-29": {
        "linux": 11706460,
        "linux64": 13179020,
        "mac": 27026813,
        "win": 12871497
    },
    "2010-07-30": {
        "linux": 11700353,
        "linux64": 13171968,
        "mac": 27014382,
        "win": 12866734
    },
    "2010-07-31": {
        "linux": 11624881,
        "linux64": 13190220,
        "mac": 15531486,
        "win": 12874216
    },
    "2010-08-01": {
        "linux": 11782722,
        "linux64": 13273769,
        "mac": 27213163,
        "win": 12931608
    },
    "2010-08-02": {
        "linux": 11793421,
        "linux64": 13278311,
        "mac": 27229848,
        "win": 12951496
    },
    "2010-08-03": {
        "linux": 11794697,
        "linux64": 13289437,
        "mac": 27249200,
        "win": 12953517
    },
    "2010-08-04": {
        "linux": 11787125,
        "linux64": 13257773,
        "mac": 27209131,
        "win": 12941232
    },
    "2010-08-05": {
        "linux": 11777650,
        "linux64": 13291284,
        "mac": 27228078,
        "win": 12933851
    },
    "2010-08-06": {
        "linux": 11777799,
        "linux64": 13255824,
        "mac": 27206335,
        "win": 12933361
    },
    "2010-08-07": {
        "linux": 11729294,
        "linux64": 13281568,
        "mac": 27389187,
        "win": 12926569
    },
    "2010-08-08": {
        "linux": 11742546,
        "linux64": 13282382,
        "mac": 27388747,
        "win": 12940360
    },
    "2010-08-09": {
        "linux": 11730519,
        "linux64": 13283848,
        "mac": 27392842,
        "win": 12935795
    },
    "2010-08-10": {
        "linux": 11732269,
        "linux64": 13286592,
        "mac": 27398221,
        "win": 12934913
    },
    "2010-08-11": {
        "linux": 11746998,
        "linux64": 13294784,
        "mac": 27444604,
        "win": 13039437
    },
    "2010-08-12": {
        "linux": 11744597,
        "linux64": 13318531,
        "mac": 27452361,
        "win": 12961911
    },
    "2010-08-13": {
        "linux": 12074235,
        "linux64": 13624969,
        "mac": 27768224,
        "win": 13569811
    },
    "2010-08-14": {
        "linux": 12085963,
        "linux64": 13636460,
        "mac": 29228355,
        "win": 13416571
    },
    "2010-08-15": {
        "linux": 12110973,
        "linux64": 13668967,
        "mac": 29233441,
        "win": 13423199
    },
    "2010-08-16": {
        "linux": 12108276,
        "linux64": 13672180,
        "mac": 16662423,
        "win": 13417607
    },
    "2010-08-17": {
        "linux": 12105715,
        "linux64": 13660436,
        "mac": 29247195,
        "win": 13417334
    },
    "2010-08-18": {
        "linux": 12121116,
        "linux64": 13664088,
        "mac": 29321316,
        "win": 13435184
    },
    "2010-08-19": {
        "linux": 12983515,
        "linux64": 14473378,
        "mac": 29970348,
        "win": 13753996
    },
    "2010-08-20": {
        "linux": 12989122,
        "linux64": 14501711,
        "mac": 30021457,
        "win": 13775293
    },
    "2010-08-21": {
        "linux": 12929550,
        "linux64": 14541857,
        "mac": 30091101,
        "win": 13802482
    },
    "2010-08-22": {
        "linux": 12930825,
        "linux64": 14540113,
        "mac": 30111844,
        "win": 13801307
    },
    "2010-08-23": {
        "linux": 12932737,
        "linux64": 14542790,
        "mac": 30127325,
        "win": 13803685
    },
    "2010-08-24": {
        "linux": 12999160,
        "linux64": 14530957,
        "mac": 30122468,
        "win": 13792905
    },
    "2010-08-25": {
        "linux": 12921811,
        "linux64": 14545660,
        "mac": 30131784,
        "win": 13798322
    },
    "2010-08-26": {
        "linux": 13004634,
        "linux64": 14602741,
        "mac": 17532168,
        "win": 13853781
    },
    "2010-08-27": {
        "linux": 13065696,
        "linux64": 14634389,
        "mac": 30271011,
        "win": 13863135
    },
    "2010-08-28": {
        "linux": 13076264,
        "linux64": 14638694,
        "mac": 30414708,
        "win": 13880061
    },
    "2010-08-29": {
        "linux": 13072415,
        "linux64": 14654166,
        "mac": 30470643,
        "win": 13891489
    },
    "2010-08-30": {
        "linux": 13073136,
        "linux64": 14654110,
        "mac": 30477885,
        "win": 13904184
    },
    "2010-08-31": {
        "linux": 13072455,
        "linux64": 14652839,
        "mac": 30481113,
        "win": 13912272
    },
    "2010-09-01": {
        "linux": 12957338,
        "linux64": 14580230,
        "mac": 30407716,
        "win": 13714039
    },
    "2010-09-02": {
        "linux": 13007421,
        "linux64": 14550565,
        "mac": 30405617,
        "win": 13702666
    },
    "2010-09-03": {
        "linux": 13010755,
        "linux64": 14554713,
        "mac": 30412054,
        "win": 13711436
    },
    "2010-09-04": {
        "linux": 12977614,
        "linux64": 14581424,
        "mac": 30417346,
        "win": 13733963
    },
    "2010-09-05": {
        "linux": 12980188,
        "linux64": 14572507,
        "mac": 30427177,
        "win": 13741295
    },
    "2010-09-06": {
        "linux": 13028220,
        "linux64": 14585511,
        "mac": 30407110,
        "win": 13745592
    },
    "2010-09-07": {
        "linux": 13019055,
        "linux64": 14568318,
        "mac": 30398152,
        "win": 13729303
    },
    "2010-09-08": {
        "linux": 13013063,
        "linux64": 14565043,
        "mac": 30401228,
        "win": 13711257
    },
    "2010-09-09": {
        "linux": 13048946,
        "linux64": 14600057,
        "mac": 30512861,
        "win": 13733908
    },
    "2010-09-10": {
        "linux": 13076134,
        "linux64": 14627873,
        "mac": 30525597,
        "win": 13750183
    },
    "2010-09-11": {
        "linux": 13087574,
        "linux64": 14636919,
        "mac": 30559024,
        "win": 13765496
    },
    "2010-09-12": {
        "linux": 13169739,
        "linux64": 14785812,
        "mac": 30779660,
        "win": 13930943
    },
    "2010-09-13": {
        "linux": 13167176,
        "linux64": 14745144,
        "mac": 30774445,
        "win": 13917843
    },
    "2010-09-14": {
        "linux": 13179642,
        "linux64": 14748542,
        "mac": 30805450,
        "win": 13915208
    },
    "2010-09-15": {
        "linux": 13204355,
        "linux64": 14760091,
        "mac": 30862779,
        "win": 13904091
    },
    "2010-09-16": {
        "linux": 13280319,
        "linux64": 14849443,
        "mac": 30985410,
        "win": 13966488
    },
    "2010-09-17": {
        "linux": 13309361,
        "linux64": 14862606,
        "mac": 31060889,
        "win": 13995250
    },
    "2010-09-18": {
        "linux": 13309297,
        "linux64": 14864050,
        "mac": 31065827,
        "win": 13956418
    },
    "2010-09-19": {
        "linux": 13315153,
        "linux64": 14870930,
        "mac": 31098972,
        "win": 13962233
    },
    "2010-09-20": {
        "linux": 13315638,
        "linux64": 14872358,
        "mac": 31097213,
        "win": 13960747
    },
    "2010-09-21": {
        "linux": 13328174,
        "linux64": 14878109,
        "mac": 31093985,
        "win": 13990769
    },
    "2010-09-22": {
        "linux": 13331038,
        "linux64": 14872486,
        "mac": 31104269,
        "win": 13966801
    },
    "2010-09-23": {
        "linux": 13332085,
        "linux64": 14887955,
        "mac": 31106232,
        "win": 13965283
    },
    "2010-09-24": {
        "linux": 13350726,
        "linux64": 14906853,
        "mac": 31169930,
        "win": 13976866
    },
    "2010-09-25": {
        "linux": 13349771,
        "linux64": 14885222,
        "mac": 31167240,
        "win": 13981556
    },
    "2010-09-26": {
        "linux": 13350652,
        "linux64": 14908385,
        "mac": 31166567,
        "win": 13982742
    },
    "2010-09-27": {
        "linux": 13350102,
        "linux64": 14901444,
        "mac": 32606899,
        "win": 13978994
    },
    "2010-09-28": {
        "linux": 13345158,
        "linux64": 14894584,
        "mac": 32601673,
        "win": 14005101
    },
    "2010-09-29": {
        "linux": 13357840,
        "linux64": 14914943,
        "mac": 32738459,
        "win": 14016359
    },
    "2010-09-30": {
        "linux": 13359002,
        "linux64": 14933475,
        "mac": 32735927,
        "win": 14018449
    },
    "2010-10-01": {
        "linux": 13358209,
        "linux64": 14931783,
        "mac": 32739669,
        "win": 14028485
    },
    "2010-10-02": {
        "linux": 13377373,
        "linux64": 14945736,
        "mac": 32799238,
        "win": 14042942
    },
    "2010-10-03": {
        "linux64": 14945962,
        "mac": 32804357,
        "win": 14046679
    },
    "2010-10-04": {
        "linux": 13376684,
        "linux64": 14944213,
        "mac": 32803477,
        "win": 14046504
    },
    "2010-10-05": {
        "linux": 13378070,
        "linux64": 14944850,
        "mac": 32801915,
        "win": 14044411
    },
    "2010-10-06": {
        "linux": 13377847,
        "linux64": 14945440,
        "mac": 32802050,
        "win": 14049104
    },
    "2010-10-07": {
        "linux": 13410708,
        "linux64": 14963541,
        "mac": 32876618,
        "win": 14076115
    },
    "2010-10-08": {
        "linux": 13416574,
        "linux64": 14964674,
        "mac": 32881059,
        "win": 14077104
    },
    "2010-10-09": {
        "linux": 13420042,
        "linux64": 14969263,
        "mac": 32884728,
        "win": 14085762
    },
    "2010-10-10": {
        "linux": 13414837,
        "linux64": 14971180,
        "mac": 32888768,
        "win": 14092911
    },
    "2010-10-11": {
        "linux": 13413230,
        "linux64": 14968670,
        "mac": 32886137,
        "win": 14088010
    },
    "2010-10-12": {
        "linux": 13468557,
        "linux64": 15034891,
        "mac": 32977800,
        "win": 14208733
    },
    "2010-10-13": {
        "linux": 13542776,
        "linux64": 15067052,
        "mac": 32999289,
        "win": 14197506
    },
    "2010-10-14": {
        "linux": 13543746,
        "linux64": 15067816,
        "mac": 33156077,
        "win": 14221264
    },
    "2010-10-15": {
        "linux": 13548518,
        "linux64": 15075076,
        "mac": 33153579,
        "win": 14220540
    },
    "2010-10-16": {
        "linux": 13559289,
        "linux64": 15085462,
        "mac": 33202359,
        "win": 14235470
    },
    "2010-10-17": {
        "linux": 13561091,
        "linux64": 15085773,
        "mac": 33197518,
        "win": 14233805
    },
    "2010-10-18": {
        "linux": 13559620,
        "linux64": 15082339,
        "mac": 33165502,
        "win": 14234279
    },
    "2010-10-19": {
        "linux": 13534176,
        "linux64": 15055642,
        "mac": 33193440,
        "win": 14156792
    },
    "2010-10-20": {
        "linux": 13542140,
        "linux64": 15087895,
        "mac": 33286182,
        "win": 14204001
    },
    "2010-10-21": {
        "linux": 13558984,
        "linux64": 15130976,
        "mac": 33352508,
        "win": 14224347
    },
    "2010-10-22": {
        "linux": 13574846,
        "linux64": 15194271,
        "mac": 33422514,
        "win": 14227237
    },
    "2010-10-23": {
        "linux": 13574655,
        "linux64": 15193282,
        "mac": 33424454,
        "win": 14245024
    },
    "2010-10-24": {
        "linux": 13574160,
        "linux64": 15192027,
        "mac": 33424041,
        "win": 14225816
    },
    "2010-10-25": {
        "linux": 13573896,
        "linux64": 15157649,
        "mac": 33427036,
        "win": 14221951
    },
    "2010-10-26": {
        "linux": 13582341,
        "linux64": 15124946,
        "mac": 33448101,
        "win": 14244773
    },
    "2010-10-27": {
        "linux": 13522183,
        "linux64": 15119789,
        "mac": 33453271,
        "win": 14227628
    },
    "2010-10-28": {
        "linux": 13575225,
        "linux64": 15121601,
        "mac": 33457968,
        "win": 14231691
    },
    "2010-10-29": {
        "linux": 13573546,
        "linux64": 15163955,
        "mac": 33451553,
        "win": 14229721
    },
    "2010-10-30": {
        "linux": 13577984,
        "linux64": 15163802,
        "mac": 33457752,
        "win": 14236803
    },
    "2010-10-31": {
        "linux": 13579133,
        "linux64": 15167085,
        "mac": 33457616,
        "win": 14241577
    },
    "2010-11-01": {
        "linux": 13577426,
        "linux64": 15167993,
        "mac": 33428795,
        "win": 14244890
    },
    "2010-11-02": {
        "linux": 13578773,
        "linux64": 15169359,
        "mac": 33419600,
        "win": 14239101
    },
    "2010-11-03": {
        "linux": 13577700,
        "linux64": 15126348,
        "mac": 33417227,
        "win": 14238873
    },
    "2010-11-04": {
        "linux": 13576444,
        "linux64": 15124308,
        "mac": 33439837,
        "win": 14242043
    },
    "2010-11-05": {
        "linux": 13587553,
        "linux64": 15137922,
        "mac": 33452128,
        "win": 14250084
    },
    "2010-11-06": {
        "linux": 13587396,
        "linux64": 15133464,
        "mac": 33433539,
        "win": 14246711
    },
    "2010-11-07": {
        "linux": 13589647,
        "linux64": 15144124,
        "mac": 33448419,
        "win": 14248089
    },
    "2010-11-08": {
        "linux": 13583451,
        "linux64": 15194970,
        "mac": 33466436,
        "win": 14257444
    },
    "2010-11-09": {
        "linux": 13602549,
        "linux64": 15208157,
        "mac": 33674897,
        "win": 14262687
    },
    "2010-11-10": {
        "linux": 13605841,
        "linux64": 15163831,
        "mac": 33696479,
        "win": 14254030
    },
    "2010-11-11": {
        "linux": 13605735,
        "linux64": 15166757,
        "mac": 33690755,
        "win": 14262420
    },
    "2010-11-12": {
        "linux": 13606475,
        "linux64": 15170782,
        "mac": 33687939,
        "win": 14261155
    },
    "2010-11-13": {
        "linux": 13605857,
        "linux64": 15175067,
        "mac": 33713127,
        "win": 14275515
    },
    "2010-11-14": {
        "linux": 13603207,
        "linux64": 15175640,
        "mac": 33711408,
        "win": 14273907
    },
    "2010-11-15": {
        "linux": 13603647,
        "linux64": 15176575,
        "mac": 33705222,
        "win": 14278102
    },
    "2010-11-16": {
        "linux": 13607855,
        "linux64": 15170470,
        "mac": 33738621,
        "win": 14184914
    },
    "2010-11-17": {
        "linux": 13616952,
        "linux64": 15210765,
        "mac": 33754081,
        "win": 14209367
    },
    "2010-11-18": {
        "linux": 13602008,
        "linux64": 15229614,
        "mac": 33677681,
        "win": 14214918
    },
    "2010-11-19": {
        "linux": 13605982,
        "linux64": 15180486,
        "mac": 33677915,
        "win": 14214554
    },
    "2010-11-20": {
        "linux": 13619540,
        "linux64": 15208567,
        "mac": 33706743,
        "win": 14233278
    },
    "2010-11-21": {
        "linux": 13622349,
        "linux64": 15260898,
        "mac": 33720092,
        "win": 14239366
    },
    "2010-11-22": {
        "linux": 13623212,
        "linux64": 15219970,
        "mac": 33713475,
        "win": 14261347
    },
    "2010-11-23": {
        "linux": 13623772,
        "linux64": 15224551,
        "mac": 33683374,
        "win": 14237162
    },
    "2010-11-24": {
        "linux": 13641415,
        "linux64": 15241281,
        "mac": 33822651,
        "win": 14300792
    },
    "2010-11-25": {
        "linux": 13636105,
        "linux64": 15279449,
        "mac": 33856499,
        "win": 14300373
    },
    "2010-11-26": {
        "linux": 13639576,
        "linux64": 15282449,
        "mac": 33856021,
        "win": 14312063
    },
    "2010-11-27": {
        "linux": 13638660,
        "linux64": 15282280,
        "mac": 33853609,
        "win": 14306644
    },
    "2010-11-28": {
        "linux": 13639962,
        "linux64": 15286484,
        "mac": 33853343,
        "win": 14304063
    },
    "2010-11-29": {
        "linux": 13637191,
        "linux64": 15288181,
        "mac": 33862340,
        "win": 14317424
    },
    "2010-11-30": {
        "linux": 13637730,
        "linux64": 15267035,
        "mac": 33802921,
        "win": 14310225
    },
    "2010-12-01": {
        "linux": 13639885,
        "linux64": 15269061,
        "mac": 33824649,
        "win": 14311006
    },
    "2010-12-02": {
        "linux": 13637522,
        "linux64": 15288335,
        "mac": 33829274,
        "win": 14306749
    },
    "2010-12-03": {
        "linux": 13642141,
        "linux64": 15276381,
        "mac": 33864429,
        "win": 14314743
    },
    "2010-12-04": {
        "linux": 13604289,
        "linux64": 15281074,
        "mac": 33841139,
        "win": 14701868
    },
    "2010-12-05": {
        "linux": 13605282,
        "linux64": 15288895,
        "mac": 33842453,
        "win": 14705307
    },
    "2010-12-06": {
        "linux": 13603582,
        "linux64": 15302258,
        "mac": 33849357,
        "win": 14700832
    },
    "2010-12-07": {
        "linux": 13609795,
        "linux64": 15295016,
        "mac": 33872532,
        "win": 14702627
    },
    "2010-12-08": {
        "linux": 13700785,
        "linux64": 15370953,
        "mac": 33956894,
        "win": 14713361
    },
    "2010-12-09": {
        "linux": 13617461,
        "linux64": 15312118,
        "mac": 33905089,
        "win": 14709604
    },
    "2010-12-10": {
        "linux": 13626632,
        "linux64": 15322694,
        "mac": 33897071,
        "win": 14733564
    },
    "2010-12-11": {
        "linux": 13629736,
        "linux64": 15320204,
        "mac": 33898134,
        "win": 14741744
    },
    "2010-12-12": {
        "linux": 13629637,
        "linux64": 15321099,
        "mac": 33908304,
        "win": 14731668
    },
    "2010-12-13": {
        "linux": 13631731,
        "linux64": 15339712,
        "mac": 33908362,
        "win": 14723483
    },
    "2010-12-14": {
        "linux": 13631329,
        "linux64": 15322356,
        "mac": 33916601,
        "win": 14740837
    },
    "2010-12-15": {
        "linux": 13628786,
        "linux64": 15321089,
        "mac": 33911228,
        "win": 14730644
    },
    "2010-12-16": {
        "linux": 13621170,
        "linux64": 15322477,
        "mac": 33897395,
        "win": 14708749
    },
    "2010-12-17": {
        "linux": 13624367,
        "linux64": 15323378,
        "mac": 33925623,
        "win": 14732195
    },
    "2010-12-18": {
        "linux": 13627920,
        "linux64": 15322751,
        "mac": 33936333,
        "win": 14726416
    },
    "2010-12-19": {
        "linux": 13626024,
        "linux64": 15328543,
        "mac": 33937376,
        "win": 14717998
    },
    "2010-12-20": {
        "linux": 13625906,
        "linux64": 15328980,
        "mac": 33946625,
        "win": 14722518
    },
    "2010-12-21": {
        "linux": 13628686,
        "linux64": 15333117,
        "mac": 33952517,
        "win": 14726394
    },
    "2010-12-22": {
        "linux": 13649159,
        "linux64": 15351781,
        "mac": 33951038,
        "win": 14767458
    },
    "2010-12-23": {
        "linux": 13649619,
        "linux64": 15365473,
        "mac": 33958572,
        "win": 14759203
    },
    "2010-12-24": {
        "linux": 13651185,
        "linux64": 15366976,
        "mac": 33954776,
        "win": 14765120
    },
    "2010-12-25": {
        "linux": 13649793,
        "linux64": 15370237,
        "mac": 33960711,
        "win": 14773618
    },
    "2010-12-26": {
        "linux": 13649355,
        "linux64": 15348003,
        "mac": 33954785,
        "win": 14771357
    },
    "2010-12-27": {
        "linux": 13640534,
        "linux64": 15343898,
        "mac": 33956651,
        "win": 14763249
    },
    "2010-12-28": {
        "linux": 13702034,
        "linux64": 15482152,
        "mac": 33930968,
        "win": 14757354
    },
    "2010-12-29": {
        "linux": 13704472,
        "linux64": 15478923,
        "mac": 33949241,
        "win": 14754406
    },
    "2010-12-30": {
        "linux": 13689075,
        "linux64": 15415748,
        "mac": 33945919,
        "win": 14771976
    },
    "2010-12-31": {
        "linux": 13689909,
        "linux64": 15486623,
        "mac": 33932855,
        "win": 14776400
    },
    "2011-01-01": {
        "linux": 13688638,
        "linux64": 15469937,
        "mac": 33932550,
        "win": 14773188
    },
    "2011-01-02": {
        "linux": 13690217,
        "linux64": 15467817,
        "mac": 33932228,
        "win": 14770443
    },
    "2011-01-03": {
        "linux": 13692792,
        "linux64": 15446844,
        "mac": 33933258,
        "win": 14771595
    },
    "2011-01-04": {
        "linux": 13697974,
        "linux64": 15453782,
        "mac": 33939246,
        "win": 14765764
    },
    "2011-01-05": {
        "linux": 13709555,
        "linux64": 15511343,
        "mac": 33990904,
        "win": 14787416
    },
    "2011-01-06": {
        "linux": 13713127,
        "linux64": 15481938,
        "mac": 34003729,
        "win": 14788397
    },
    "2011-01-07": {
        "linux": 13713647,
        "linux64": 15450022,
        "mac": 34017016,
        "win": 14788546
    },
    "2011-01-08": {
        "linux": 13737570,
        "linux64": 15543657,
        "mac": 34090313,
        "win": 14807775
    },
    "2011-01-09": {
        "linux": 13742012,
        "linux64": 15545917,
        "mac": 34147427,
        "win": 14810534
    },
    "2011-01-10": {
        "linux": 13741695,
        "linux64": 15506726,
        "mac": 34148088,
        "win": 14812554
    },
    "2011-01-11": {
        "linux": 13741428,
        "linux64": 15471449,
        "mac": 34139510,
        "win": 14813838
    },
    "2011-01-12": {
        "linux": 13755131,
        "linux64": 15512976,
        "mac": 34138930,
        "win": 14830972
    },
    "2011-01-13": {
        "linux": 13756243,
        "linux64": 15511110,
        "mac": 34144652,
        "win": 14834126
    },
    "2011-01-14": {
        "linux": 13774795,
        "linux64": 15463958,
        "mac": 34130285,
        "win": 14810170
    },
    "2011-01-15": {
        "linux": 13774185,
        "linux64": 15555951,
        "mac": 34227408,
        "win": 14825225
    },
    "2011-01-16": {
        "linux": 13775241,
        "linux64": 15466393,
        "mac": 34164215,
        "win": 14829617
    },
    "2011-01-17": {
        "linux": 13775862,
        "linux64": 15469876,
        "mac": 34164600,
        "win": 14828256
    },
    "2011-01-18": {
        "linux": 13787464,
        "linux64": 15525962,
        "mac": 34224474,
        "win": 14843454
    },
    "2011-01-19": {
        "linux": 13787833,
        "linux64": 15531187,
        "mac": 34226697,
        "win": 14831587
    },
    "2011-01-20": {
        "linux": 13803547,
        "linux64": 15532710,
        "mac": 34245563,
        "win": 14847372
    },
    "2011-01-21": {
        "linux": 13806460,
        "linux64": 15495191,
        "mac": 34214449,
        "win": 14847723
    },
    "2011-01-22": {
        "linux": 13803744,
        "linux64": 15495683,
        "mac": 34214099,
        "win": 14842191
    },
    "2011-01-23": {
        "linux": 13805139,
        "linux64": 15497406,
        "mac": 34214385,
        "win": 14822625
    },
    "2011-01-24": {
        "linux": 13805115,
        "linux64": 15558088,
        "mac": 34256371,
        "win": 14847841
    },
    "2011-01-25": {
        "linux": 13563136,
        "linux64": 14630705,
        "mac": 34235782,
        "win": 14836106
    },
    "2011-01-26": {
        "linux": 13563798,
        "linux64": 14631222,
        "mac": 34273989,
        "win": 14838575
    },
    "2011-01-27": {
        "linux": 13555910,
        "linux64": 14624168,
        "mac": 34264865,
        "win": 14831166
    },
    "2011-01-28": {
        "linux": 13562601,
        "linux64": 14657258,
        "mac": 34250312,
        "win": 14812379
    },
    "2011-01-29": {
        "linux": 13564207,
        "linux64": 14636678,
        "mac": 34268783,
        "win": 14822369
    },
    "2011-01-30": {
        "linux": 13570294,
        "linux64": 14713062,
        "mac": 34268791,
        "win": 14842822
    },
    "2011-01-31": {
        "linux": 13572983,
        "linux64": 14643588,
        "mac": 34272268,
        "win": 14845080
    },
    "2011-02-01": {
        "linux": 13588178,
        "linux64": 14721374,
        "mac": 34296352,
        "win": 14870751
    },
    "2011-02-02": {
        "linux": 13589322,
        "linux64": 14667517,
        "mac": 34272839,
        "win": 14862795
    },
    "2011-02-03": {
        "linux": 13587718,
        "linux64": 14704078,
        "mac": 34274478,
        "win": 14849913
    },
    "2011-02-04": {
        "linux": 13589815,
        "linux64": 14713984,
        "mac": 34280088,
        "win": 14855741
    },
    "2011-02-05": {
        "linux": 13590933,
        "linux64": 14704372,
        "mac": 34279468,
        "win": 14854572
    },
    "2011-02-06": {
        "linux": 13591547,
        "linux64": 14716892,
        "mac": 34281403,
        "win": 14853388
    },
    "2011-02-07": {
        "linux": 13596336,
        "linux64": 14658903,
        "mac": 34284123,
        "win": 14859279
    },
    "2011-02-08": {
        "linux": 13599681,
        "linux64": 14662480,
        "mac": 34290859,
        "win": 16615447
    },
    "2011-02-09": {
        "linux": 13608290,
        "linux64": 14677912,
        "mac": 34319895,
        "win": 16619345
    },
    "2011-02-10": {
        "linux": 13606420,
        "linux64": 14735395,
        "mac": 34295466,
        "win": 16623134
    },
    "2011-02-11": {
        "linux": 13607154,
        "linux64": 14686887,
        "mac": 34305393,
        "win": 16612791
    },
    "2011-02-12": {
        "linux": 13609265,
        "linux64": 14697382,
        "mac": 34331689,
        "win": 16623599
    },
    "2011-02-13": {
        "linux": 13609430,
        "linux64": 14678027,
        "mac": 34349852,
        "win": 16621919
    },
    "2011-02-14": {
        "linux": 13610211,
        "linux64": 14697602,
        "mac": 34347550,
        "win": 16625499
    },
    "2011-02-15": {
        "linux": 13611435,
        "linux64": 14699584,
        "mac": 34345863,
        "win": 16626638
    },
    "2011-02-16": {
        "linux": 13620483,
        "linux64": 14751433,
        "mac": 34359167,
        "win": 16638257
    },
    "2011-02-17": {
        "linux": 13638765,
        "linux64": 14743338,
        "mac": 34392907,
        "win": 16653319
    },
    "2011-02-18": {
        "linux": 13636532,
        "linux64": 14736947,
        "mac": 34400002,
        "win": 16638843
    },
    "2011-02-19": {
        "linux": 13643053,
        "linux64": 14778135,
        "mac": 34408217,
        "win": 16647475
    },
    "2011-02-20": {
        "linux": 13642790,
        "linux64": 14746705,
        "mac": 34388431,
        "win": 16639650
    },
    "2011-02-21": {
        "linux": 13643844,
        "linux64": 14780005,
        "mac": 34388613,
        "win": 16638180
    },
    "2011-02-22": {
        "linux": 13644408,
        "linux64": 14699143,
        "mac": 34430226,
        "win": 16638804
    },
    "2011-02-23": {
        "linux": 13643368,
        "linux64": 14754169,
        "mac": 34430873,
        "win": 16640727
    },
    "2011-02-24": {
        "linux": 13644789,
        "linux64": 14779735,
        "mac": 34431197,
        "win": 16639485
    },
    "2011-02-25": {
        "linux": 13646026,
        "linux64": 14774951,
        "mac": 34376210,
        "win": 16653681
    },
    "2011-02-26": {
        "linux": 13648436,
        "linux64": 14773648,
        "mac": 34392404,
        "win": 16659535
    },
    "2011-02-27": {
        "linux": 13613034,
        "linux64": 14774318,
        "mac": 34400230,
        "win": 16654015
    },
    "2011-02-28": {
        "linux": 13646465,
        "linux64": 14771191,
        "mac": 34375773,
        "win": 16647734
    },
    "2011-03-01": {
        "linux": 13908580,
        "linux64": 15621795,
        "mac": 34425181,
        "win": 16645416
    },
    "2011-03-02": {
        "linux": 13914595,
        "linux64": 15600001,
        "mac": 34417605,
        "win": 16655707
    },
    "2011-03-03": {
        "linux": 13765481,
        "linux64": 15511769,
        "mac": 34444229,
        "win": 16666780
    },
    "2011-03-04": {
        "linux": 13765986,
        "linux64": 15512066,
        "mac": 34443576,
        "win": 16627154
    },
    "2011-03-05": {
        "linux": 13736082,
        "linux64": 15518738,
        "mac": 34443865,
        "win": 16667124
    },
    "2011-03-06": {
        "linux": 13766725,
        "linux64": 15514434,
        "mac": 34445567,
        "win": 16644138
    },
    "2011-03-07": {
        "linux": 13766627,
        "linux64": 15514321,
        "mac": 34444921,
        "win": 16643239
    },
    "2011-03-08": {
        "linux": 13733311,
        "linux64": 15516595,
        "mac": 34448828,
        "win": 16644553
    },
    "2011-03-09": {
        "linux": 13767021,
        "linux64": 15519098,
        "mac": 34450085,
        "win": 16666891
    },
    "2011-03-10": {
        "linux": 13769264,
        "linux64": 15514753,
        "mac": 34433772,
        "win": 16665281
    },
    "2011-03-11": {
        "linux": 13737428,
        "linux64": 15517796,
        "mac": 34430967,
        "win": 16666707
    },
    "2011-03-12": {
        "linux": 13766036,
        "linux64": 15480891,
        "mac": 34433611,
        "win": 16666475
    },
    "2011-03-13": {
        "linux": 13736428,
        "linux64": 15516493,
        "mac": 34434513,
        "win": 16635733
    },
    "2011-03-14": {
        "linux": 13736946,
        "linux64": 15481669,
        "mac": 34434688,
        "win": 16636234
    },
    "2011-03-15": {
        "linux": 13766552,
        "linux64": 15516486,
        "mac": 34432946,
        "win": 16667523
    },
    "2011-03-16": {
        "linux": 13770670,
        "linux64": 15519709,
        "mac": 34440641,
        "win": 16665446
    },
    "2011-03-17": {
        "linux": 13771648,
        "linux64": 15520595,
        "mac": 34441130,
        "win": 16663083
    },
    "2011-03-18": {
        "linux": 13770399,
        "linux64": 15475108,
        "mac": 34436091,
        "win": 16664847
    },
    "2011-03-19": {
        "linux": 13771722,
        "linux64": 15521404,
        "mac": 34449604,
        "win": 16886896
    },
    "2011-03-20": {
        "linux": 13772104,
        "linux64": 15474210,
        "mac": 34450668,
        "win": 16882766
    },
    "2011-03-21": {
        "linux": 13772150,
        "linux64": 15475234,
        "mac": 34451513,
        "win": 16884527
    },
    "2011-03-22": {
        "linux": 13772358,
        "linux64": 15516703,
        "mac": 34450775,
        "win": 16881492
    },
    "2011-03-23": {
        "linux": 14605587,
        "linux64": 15696420,
        "mac": 35506687,
        "win": 17940189
    },
    "2011-03-24": {
        "linux": 14611912,
        "linux64": 15668051,
        "mac": 35521568,
        "win": 17929010
    },
    "2011-03-25": {
        "linux": 14600154,
        "linux64": 15662407,
        "mac": 35496492,
        "win": 17927927
    },
    "2011-03-26": {
        "linux": 14598551,
        "linux64": 15697005,
        "mac": 35501476,
        "win": 17924640
    },
    "2011-03-27": {
        "linux": 14603208,
        "linux64": 15695030,
        "mac": 35518015,
        "win": 17928124
    },
    "2011-03-28": {
        "linux": 14599927,
        "linux64": 15645901,
        "mac": 35513141,
        "win": 17923508
    },
    "2011-03-29": {
        "linux": 14604819,
        "linux64": 15707550,
        "mac": 35514416,
        "win": 17929765
    },
    "2011-03-30": {
        "linux": 14597157,
        "linux64": 15632724,
        "mac": 35410050,
        "win": 17914548
    },
    "2011-03-31": {
        "linux": 14601807,
        "linux64": 15645131,
        "mac": 35417761,
        "win": 17925088
    },
    "2011-04-01": {
        "linux": 14604034,
        "linux64": 15594284,
        "mac": 35426313,
        "win": 17935354
    },
    "2011-04-02": {
        "linux": 14607452,
        "linux64": 15599656,
        "mac": 35454547,
        "win": 17938269
    },
    "2011-04-03": {
        "linux": 14609106,
        "linux64": 15598289,
        "mac": 35456588,
        "win": 17938314
    },
    "2011-04-04": {
        "linux": 14608474,
        "linux64": 15597917,
        "mac": 35457271,
        "win": 17943992
    },
    "2011-04-05": {
        "linux": 14609001,
        "linux64": 15598327,
        "mac": 35455964,
        "win": 17944540
    },
    "2011-04-06": {
        "linux": 14608985,
        "linux64": 15651982,
        "mac": 35441084,
        "win": 17936437
    },
    "2011-04-07": {
        "linux": 14609519,
        "linux64": 15596530,
        "mac": 35455594,
        "win": 17934432
    },
    "2011-04-08": {
        "linux": 14600907,
        "linux64": 15637713,
        "mac": 35422067,
        "win": 17933842
    },
    "2011-04-09": {
        "linux": 14592196,
        "linux64": 15578127,
        "mac": 35445866,
        "win": 17936617
    },
    "2011-04-10": {
        "linux": 14603755,
        "linux64": 15590546,
        "mac": 35443340,
        "win": 17953239
    },
    "2011-04-11": {
        "linux": 14594899,
        "linux64": 15657132,
        "mac": 35460686,
        "win": 17939677
    },
    "2011-04-12": {
        "linux": 14821747,
        "linux64": 15815806,
        "win": 18419065
    },
    "2011-04-13": {
        "linux": 14836189,
        "linux64": 15833283,
        "mac": 36013349,
        "win": 18270617
    },
    "2011-04-14": {
        "linux": 14837950,
        "linux64": 15848226,
        "mac": 36013846,
        "win": 18274529
    },
    "2011-04-15": {
        "linux": 14828671,
        "linux64": 15833099,
        "mac": 36017954,
        "win": 18262873
    },
    "2011-04-16": {
        "linux": 14830514,
        "linux64": 15837466,
        "mac": 36019307,
        "win": 18262654
    },
    "2011-04-17": {
        "linux": 14825642,
        "linux64": 15832104,
        "mac": 36014871,
        "win": 18262005
    },
    "2011-04-18": {
        "linux": 14827700,
        "linux64": 15833018,
        "mac": 36014658,
        "win": 18266206
    },
    "2011-04-19": {
        "linux": 14838673,
        "linux64": 15845878,
        "mac": 36096219,
        "win": 18267496
    },
    "2011-04-20": {
        "linux": 14839221,
        "linux64": 15846602,
        "mac": 36098183,
        "win": 18267768
    },
    "2011-04-21": {
        "linux": 14838621,
        "linux64": 15849541,
        "mac": 36084930,
        "win": 18271848
    },
    "2011-04-22": {
        "linux": 14841331,
        "linux64": 15848569,
        "mac": 36100967,
        "win": 18269755
    },
    "2011-04-23": {
        "linux": 14840355,
        "linux64": 15839261,
        "mac": 36064344,
        "win": 18271889
    },
    "2011-04-24": {
        "linux": 14842315,
        "linux64": 15846611,
        "mac": 36062525,
        "win": 18269581
    },
    "2011-04-25": {
        "linux": 14841019,
        "linux64": 15848411,
        "mac": 36061207,
        "win": 18272769
    },
    "2011-04-26": {
        "linux": 14840241,
        "linux64": 15848297,
        "mac": 36062869,
        "win": 18275674
    },
    "2011-04-27": {
        "linux": 14852508,
        "linux64": 15855428,
        "mac": 36059669,
        "win": 18305580
    },
    "2011-04-28": {
        "linux": 14854742,
        "linux64": 15892460,
        "mac": 36080691,
        "win": 18301513
    },
    "2011-04-29": {
        "linux": 15314980,
        "linux64": 17072333,
        "mac": 36084628,
        "win": 18313235
    },
    "2011-04-30": {
        "linux": 15274123,
        "linux64": 17079656,
        "mac": 36036683,
        "win": 18262191
    },
    "2011-05-01": {
        "linux": 15272289,
        "linux64": 17043836,
        "mac": 36049622,
        "win": 18267321
    },
    "2011-05-02": {
        "linux": 15274374,
        "linux64": 17079230,
        "mac": 36047082,
        "win": 18263552
    },
    "2011-05-03": {
        "linux": 15274764,
        "linux64": 17078149,
        "mac": 36058661,
        "win": 18274669
    },
    "2011-05-04": {
        "linux": 15280798,
        "linux64": 17087980,
        "mac": 36075883,
        "win": 18281743
    },
    "2011-05-05": {
        "linux": 14540569,
        "linux64": 16220418,
        "mac": 36152848,
        "win": 18329077
    },
    "2011-05-06": {
        "linux": 15031395,
        "linux64": 16676198,
        "mac": 36139406,
        "win": 18596663
    },
    "2011-05-07": {
        "linux": 15030318,
        "linux64": 16706695,
        "mac": 36165609,
        "win": 18597420
    },
    "2011-05-08": {
        "linux": 15034136,
        "linux64": 16713143,
        "mac": 36171022,
        "win": 18601913
    },
    "2011-05-09": {
        "linux": 15030220,
        "linux64": 16674301,
        "mac": 36141872,
        "win": 18571524
    },
    "2011-05-10": {
        "linux": 15048339,
        "linux64": 16717013,
        "mac": 36156414,
        "win": 18589962
    },
    "2011-05-11": {
        "linux": 15051493,
        "linux64": 16763583,
        "mac": 36187363,
        "win": 18598518
    },
    "2011-05-12": {
        "linux": 15054851,
        "linux64": 16694246,
        "mac": 36185372,
        "win": 18600235
    },
    "2011-05-13": {
        "linux": 15073072,
        "linux64": 16680492,
        "mac": 36234744,
        "win": 18611003
    },
    "2011-05-14": {
        "linux": 15074363,
        "linux64": 16678584,
        "mac": 36224803,
        "win": 18612716
    },
    "2011-05-15": {
        "linux": 15070961,
        "linux64": 16714085,
        "mac": 36219243,
        "win": 18614666
    },
    "2011-05-16": {
        "linux": 15072080,
        "linux64": 16680756,
        "mac": 36219375,
        "win": 18616882
    },
    "2011-05-17": {
        "linux": 15074079,
        "linux64": 16682640,
        "mac": 36219976,
        "win": 18616423
    },
    "2011-05-18": {
        "linux": 15084889,
        "linux64": 16740131,
        "mac": 36163468,
        "win": 18606351
    },
    "2011-05-19": {
        "linux": 15085841,
        "linux64": 16746352,
        "mac": 36166410,
        "win": 18609809
    },
    "2011-05-20": {
        "linux": 15107971,
        "linux64": 16698295,
        "mac": 36177727,
        "win": 18633517
    },
    "2011-05-21": {
        "linux": 15119807,
        "linux64": 16706715,
        "mac": 36225152,
        "win": 18705744
    },
    "2011-05-22": {
        "linux": 15156393,
        "linux64": 16723280,
        "mac": 36261052,
        "win": 18729130
    },
    "2011-05-23": {
        "linux": 15142437,
        "linux64": 16767289,
        "mac": 36288438,
        "win": 18733862
    },
    "2011-05-24": {
        "linux": 15156282,
        "linux64": 16801840,
        "mac": 36293100,
        "win": 18745715
    },
    "2011-05-25": {
        "linux": 15154703,
        "linux64": 16808036,
        "mac": 36315826,
        "win": 18750517
    },
    "2011-05-26": {
        "linux": 15197588,
        "linux64": 16757909,
        "mac": 36369220,
        "win": 18754254
    },
    "2011-05-27": {
        "linux": 15157582,
        "linux64": 16721324,
        "mac": 36316583,
        "win": 18481614
    },
    "2011-05-28": {
        "linux": 15203790,
        "linux64": 16843365,
        "mac": 36359242,
        "win": 18473744
    },
    "2011-05-29": {
        "linux": 15191507,
        "linux64": 16806593,
        "mac": 36360726,
        "win": 18488676
    },
    "2011-05-30": {
        "linux": 15192003,
        "linux64": 16812325,
        "mac": 36330548,
        "win": 18498684
    },
    "2011-05-31": {
        "linux": 15192737,
        "linux64": 16749867,
        "mac": 36355680,
        "win": 18483803
    },
    "2011-06-01": {
        "linux": 15183645,
        "linux64": 16846088,
        "mac": 36358373,
        "win": 18496116
    },
    "2011-06-02": {
        "linux": 15193140,
        "linux64": 16752460,
        "mac": 36331735,
        "win": 18509505
    },
    "2011-06-03": {
        "linux": 15197444,
        "linux64": 16809187,
        "mac": 36389276,
        "win": 18503925
    },
    "2011-06-04": {
        "linux": 15219362,
        "linux64": 16834617,
        "mac": 36286022,
        "win": 18509480
    },
    "2011-06-05": {
        "linux": 15193655,
        "linux64": 16745098,
        "mac": 36277912,
        "win": 18482412
    },
    "2011-06-06": {
        "linux": 15194284,
        "linux64": 16793152,
        "mac": 36217956,
        "win": 18477714
    },
    "2011-06-07": {
        "linux": 15180010,
        "linux64": 16788086,
        "mac": 36248209,
        "win": 18468602
    },
    "2011-06-08": {
        "linux": 15175678,
        "linux64": 16825997,
        "mac": 36183644,
        "win": 18470225
    },
    "2011-06-09": {
        "linux": 15180010,
        "linux64": 16739974,
        "mac": 36178697,
        "win": 18461977
    },
    "2011-06-10": {
        "linux": 15180000,
        "linux64": 16741950,
        "mac": 36252947,
        "win": 18467844
    },
    "2011-06-11": {
        "linux": 15172848,
        "linux64": 16731025,
        "mac": 36249578,
        "win": 18466834
    },
    "2011-06-12": {
        "linux": 15173859,
        "linux64": 16735105,
        "mac": 36247595,
        "win": 18464490
    },
    "2011-06-13": {
        "linux": 15175391,
        "linux64": 16733884,
        "mac": 36245406,
        "win": 18464431
    },
    "2011-06-14": {
        "linux": 15181131,
        "linux64": 16732947,
        "mac": 36227976,
        "win": 18463985
    },
    "2011-06-15": {
        "linux": 15206457,
        "linux64": 16781167,
        "mac": 36354134,
        "win": 18462709
    },
    "2011-06-16": {
        "linux": 15197216,
        "linux64": 16776540,
        "mac": 36402206,
        "win": 18465297
    },
    "2011-06-17": {
        "linux": 15198997,
        "linux64": 16862880,
        "mac": 36361290,
        "win": 18465573
    },
    "2011-06-18": {
        "linux": 15211274,
        "linux64": 16867358,
        "mac": 36345396,
        "win": 18450423
    },
    "2011-06-19": {
        "linux": 15188015,
        "linux64": 16823566,
        "mac": 36407675,
        "win": 18470231
    },
    "2011-06-20": {
        "linux": 15190304,
        "linux64": 16853094,
        "mac": 36405316,
        "win": 18468288
    },
    "2011-06-21": {
        "linux": 15232506,
        "linux64": 16868818,
        "mac": 36463169,
        "win": 18499561
    },
    "2011-06-22": {
        "linux": 15237593,
        "linux64": 16817648,
        "mac": 36463934,
        "win": 18503901
    },
    "2011-06-23": {
        "linux": 15243846,
        "linux64": 16853051,
        "mac": 36524479,
        "win": 18513355
    },
    "2011-06-24": {
        "linux": 15240778,
        "linux64": 16850778,
        "mac": 36469742,
        "win": 18505861
    },
    "2011-06-25": {
        "linux": 15248691,
        "linux64": 16827665,
        "mac": 36489007,
        "win": 18518590
    },
    "2011-06-26": {
        "linux": 15281704,
        "linux64": 16868846,
        "mac": 36444617,
        "win": 18564726
    },
    "2011-06-27": {
        "linux": 15281271,
        "linux64": 16868938,
        "mac": 36445237,
        "win": 18564769
    },
    "2011-06-28": {
        "linux": 15350017,
        "linux64": 16977992,
        "mac": 36584614,
        "win": 18568247
    },
    "2011-06-29": {
        "linux": 15273693,
        "linux64": 16906266,
        "mac": 36896855,
        "win": 18560567
    },
    "2011-06-30": {
        "linux": 15274311,
        "linux64": 16905415,
        "mac": 36936651,
        "win": 18570583
    },
    "2011-07-01": {
        "linux": 15353954,
        "linux64": 16954869,
        "mac": 36937382,
        "win": 18588936
    },
    "2011-07-02": {
        "linux": 15352556,
        "linux64": 16953445,
        "mac": 36934439,
        "win": 18581373
    },
    "2011-07-03": {
        "linux": 15346722,
        "linux64": 16953941,
        "mac": 36948318,
        "win": 18632535
    },
    "2011-07-04": {
        "linux": 15347601,
        "linux64": 17008743,
        "mac": 36948162,
        "win": 18621932
    },
    "2011-07-05": {
        "linux": 15350814,
        "linux64": 16967382,
        "mac": 36980996,
        "win": 18634214
    },
    "2011-07-06": {
        "linux": 15350182,
        "linux64": 16964997,
        "mac": 36931607,
        "win": 18641360
    },
    "2011-07-07": {
        "linux": 15371092,
        "linux64": 16980992,
        "mac": 36949149,
        "win": 18639750
    },
    "2011-07-08": {
        "linux": 15368471,
        "linux64": 16987090,
        "mac": 37055752,
        "win": 18641413
    },
    "2011-07-09": {
        "linux": 15372662,
        "linux64": 16988675,
        "mac": 37087771,
        "win": 18645547
    },
    "2011-07-10": {
        "linux": 15372635,
        "linux64": 16984811,
        "mac": 37086770,
        "win": 18651886
    },
    "2011-07-11": {
        "linux": 15373317,
        "linux64": 16987027,
        "mac": 36978452,
        "win": 18654485
    },
    "2011-07-12": {
        "linux": 15374662,
        "linux64": 16983706,
        "mac": 36984111,
        "win": 18653643
    },
    "2011-07-13": {
        "linux": 15369516,
        "linux64": 17034887,
        "mac": 36996745,
        "win": 18653470
    },
    "2011-07-14": {
        "linux": 15381446,
        "linux64": 16993147,
        "mac": 37034310,
        "win": 18660788
    },
    "2011-07-15": {
        "linux": 15395342,
        "linux64": 17003560,
        "mac": 37028621,
        "win": 18676578
    },
    "2011-07-16": {
        "linux": 15396952,
        "linux64": 17005215,
        "mac": 37027879,
        "win": 18677009
    },
    "2011-07-17": {
        "linux": 15396689,
        "linux64": 17095021,
        "mac": 37028970,
        "win": 18673964
    },
    "2011-07-18": {
        "linux": 15398521,
        "linux64": 16995395,
        "mac": 36990911,
        "win": 18671618
    },
    "2011-07-19": {
        "linux": 15396481,
        "linux64": 16995915,
        "mac": 36994275,
        "win": 18678152
    },
    "2011-07-20": {
        "linux": 15396255,
        "linux64": 17013690,
        "mac": 37023813,
        "win": 18680434
    },
    "2011-07-21": {
        "linux": 15609364,
        "linux64": 17279441,
        "mac": 37347748,
        "win": 18968622
    },
    "2011-07-22": {
        "linux": 15600590,
        "linux64": 17238974,
        "mac": 37351172,
        "win": 18964835
    },
    "2011-07-23": {
        "linux": 15774818,
        "linux64": 17585969,
        "mac": 37573314,
        "win": 19186858
    },
    "2011-07-24": {
        "linux": 15773842,
        "linux64": 17563487,
        "mac": 37561707,
        "win": 19184353
    },
    "2011-07-25": {
        "linux": 15766711,
        "linux64": 17558064,
        "mac": 37562875,
        "win": 19189022
    },
    "2011-07-26": {
        "linux": 15764762,
        "linux64": 17554546,
        "mac": 37510504,
        "win": 19182525
    },
    "2011-07-27": {
        "linux": 16111835,
        "linux64": 17846707,
        "mac": 37846273,
        "win": 19508105
    },
    "2011-07-28": {
        "linux": 16113835,
        "linux64": 17853104,
        "mac": 37829366,
        "win": 19510290
    },
    "2011-07-29": {
        "linux": 16126801,
        "linux64": 17862855,
        "mac": 37834178,
        "win": 19523168
    },
    "2011-07-30": {
        "linux": 16127562,
        "linux64": 17861493,
        "mac": 37832054,
        "win": 19516112
    },
    "2011-07-31": {
        "linux": 16126805,
        "linux64": 17862792,
        "mac": 37823742,
        "win": 19510064
    },
    "2011-08-01": {
        "linux": 16126659,
        "linux64": 17859118,
        "mac": 38284093,
        "win": 19511602
    },
    "2011-08-02": {
        "linux": 16145075,
        "linux64": 17944230,
        "mac": 38283776,
        "win": 19552182
    },
    "2011-08-03": {
        "linux": 16148163,
        "linux64": 17907924,
        "mac": 38325268,
        "win": 19553057
    },
    "2011-08-04": {
        "linux": 16151024,
        "linux64": 17916900,
        "mac": 38361792,
        "win": 19561773
    },
    "2011-08-05": {
        "linux": 16151275,
        "linux64": 17963791,
        "mac": 37936088,
        "win": 19567333
    },
    "2011-08-06": {
        "linux": 16152543,
        "linux64": 17923580,
        "mac": 37959504,
        "win": 19573283
    },
    "2011-08-07": {
        "linux": 16156453,
        "linux64": 17924723,
        "mac": 37949614,
        "win": 19571011
    },
    "2011-08-08": {
        "linux": 16167716,
        "linux64": 17940366,
        "mac": 37980544,
        "win": 19581160
    },
    "2011-08-09": {
        "linux": 16179018,
        "linux64": 17950861,
        "mac": 37977843,
        "win": 19619955
    },
    "2011-08-10": {
        "linux": 16175028,
        "linux64": 17947817,
        "mac": 38015251,
        "win": 19620278
    },
    "2011-08-11": {
        "linux": 16177219,
        "linux64": 17949354,
        "mac": 38009458,
        "win": 19621320
    },
    "2011-08-12": {
        "linux": 16176393,
        "linux64": 17946584,
        "mac": 38002495,
        "win": 19617869
    },
    "2011-08-13": {
        "linux": 16195258,
        "linux64": 17965051,
        "mac": 38017732,
        "win": 19642299
    },
    "2011-08-14": {
        "linux": 16288204,
        "linux64": 18007202,
        "mac": 38177006,
        "win": 19729989
    },
    "2011-08-15": {
        "linux": 16324651,
        "linux64": 18070499,
        "mac": 38252976,
        "win": 19758749
    },
    "2011-08-16": {
        "linux": 16327123,
        "linux64": 18111205,
        "mac": 38287544,
        "win": 19766458
    },
    "2011-08-17": {
        "linux": 16329973,
        "linux64": 18076952,
        "mac": 38309063,
        "win": 19775481
    },
    "2011-08-18": {
        "linux": 16328238,
        "linux64": 18111011,
        "mac": 38306926,
        "win": 19773481
    },
    "2011-08-19": {
        "linux": 16443904,
        "linux64": 18182661,
        "mac": 38305363,
        "win": 19742135
    },
    "2011-08-20": {
        "linux": 16328463,
        "linux64": 18078933,
        "mac": 38312946,
        "win": 19744676
    },
    "2011-08-21": {
        "linux": 16326620,
        "linux64": 18086699,
        "mac": 38313630,
        "win": 19742610
    },
    "2011-08-22": {
        "linux": 16335380,
        "linux64": 18095560,
        "mac": 38320751,
        "win": 19759548
    },
    "2011-08-23": {
        "linux": 16334041,
        "linux64": 18127086,
        "mac": 38321540,
        "win": 19759170
    },
    "2011-08-24": {
        "linux": 16335549,
        "linux64": 18098116,
        "mac": 38323041,
        "win": 19762123
    },
    "2011-08-25": {
        "linux": 16327590,
        "linux64": 18165127,
        "mac": 38461927,
        "win": 19877952
    },
    "2011-08-26": {
        "linux": 16658334,
        "linux64": 18456985,
        "mac": 38750267,
        "win": 20144291
    },
    "2011-08-27": {
        "linux": 16673972,
        "linux64": 18451578,
        "mac": 38802702,
        "win": 20162955
    },
    "2011-08-28": {
        "linux": 16683086,
        "linux64": 18450736,
        "mac": 38816249,
        "win": 20193167
    },
    "2011-08-29": {
        "linux": 16676635,
        "linux64": 18480841,
        "mac": 38771855,
        "win": 20192013
    },
    "2011-08-30": {
        "linux": 16802464,
        "linux64": 18695039,
        "mac": 39714852,
        "win": 20322643
    },
    "2011-08-31": {
        "linux": 16808999,
        "linux64": 18697221,
        "mac": 39697274,
        "win": 20325465
    },
    "2011-09-01": {
        "linux": 16866192,
        "linux64": 18752065,
        "mac": 39757805,
        "win": 20383983
    },
    "2011-09-02": {
        "linux": 16878886,
        "linux64": 18764353,
        "mac": 39811360,
        "win": 20387126
    },
    "2011-09-03": {
        "linux": 16877745,
        "linux64": 18777322,
        "win": 20397733
    },
    "2011-09-04": {
        "linux": 16869496,
        "linux64": 18765386,
        "mac": 39802635,
        "win": 20396560
    },
    "2011-09-05": {
        "linux": 16876050,
        "linux64": 18729663,
        "mac": 39798387,
        "win": 20393308
    },
    "2011-09-06": {
        "linux": 16878065,
        "linux64": 18770317,
        "mac": 39866264,
        "win": 20397168
    },
    "2011-09-07": {
        "linux": 16881809,
        "linux64": 18765420,
        "mac": 39873537,
        "win": 20407149
    },
    "2011-09-08": {
        "linux": 16879816,
        "linux64": 18772032,
        "mac": 39860105,
        "win": 20401809
    },
    "2011-09-09": {
        "linux": 16888775,
        "linux64": 18772118,
        "mac": 39837685,
        "win": 20412667
    },
    "2011-09-10": {
        "linux": 16889615,
        "linux64": 18789859,
        "mac": 39868829,
        "win": 20419993
    },
    "2011-09-11": {
        "linux": 16889190,
        "linux64": 18790356,
        "mac": 39869389,
        "win": 20416935
    },
    "2011-09-12": {
        "linux": 16890348,
        "linux64": 18744384,
        "mac": 39869317,
        "win": 20419246
    },
    "2011-09-13": {
        "linux": 16891187,
        "linux64": 18793146,
        "mac": 39867614,
        "win": 20420742
    },
    "2011-09-14": {
        "linux": 16892188,
        "linux64": 18796645,
        "mac": 39881949,
        "win": 20417861
    },
    "2011-09-15": {
        "linux": 16892594,
        "linux64": 18675620,
        "mac": 39885638,
        "win": 20419255
    },
    "2011-09-16": {
        "linux": 16939870,
        "linux64": 18833408,
        "mac": 39857937,
        "win": 20426986
    },
    "2011-09-17": {
        "linux": 16941711,
        "linux64": 18834293,
        "mac": 39874251,
        "win": 20421192
    },
    "2011-09-18": {
        "linux": 16941971,
        "linux64": 18816680,
        "mac": 39873974,
        "win": 20427922
    },
    "2011-09-19": {
        "linux": 16942348,
        "linux64": 18791155,
        "mac": 39932792,
        "win": 20428999
    },
    "2011-09-20": {
        "linux": 16942949,
        "linux64": 18759633,
        "mac": 39901102,
        "win": 20435771
    },
    "2011-09-21": {
        "linux": 16943218,
        "linux64": 18826557,
        "mac": 39894417,
        "win": 20434421
    },
    "2011-09-22": {
        "linux": 16895989,
        "linux64": 18746445,
        "mac": 39829408,
        "win": 20427737
    },
    "2011-09-23": {
        "linux": 16912018,
        "linux64": 18811187,
        "mac": 39845575,
        "win": 20427288
    },
    "2011-09-24": {
        "linux": 16940101,
        "linux64": 18847440,
        "mac": 39918609,
        "win": 20458234
    },
    "2011-09-25": {
        "linux": 16914247,
        "linux64": 18768952,
        "mac": 39888525,
        "win": 20426156
    },
    "2011-09-26": {
        "linux": 16914411,
        "linux64": 18811234,
        "mac": 39889888,
        "win": 20425543
    },
    "2011-09-27": {
        "linux": 16916536,
        "linux64": 18717481,
        "mac": 39885095,
        "win": 20434964
    },
    "2011-09-28": {
        "linux": 16946233,
        "linux64": 18848527,
        "mac": 39920655,
        "win": 20470136
    },
    "2011-09-29": {
        "linux": 16952591,
        "linux64": 18858767,
        "mac": 39949893,
        "win": 20483080
    },
    "2011-09-30": {
        "linux": 16989848,
        "linux64": 18779115,
        "mac": 40004046,
        "win": 20496847
    },
    "2011-10-01": {
        "linux": 16987534,
        "linux64": 18812245,
        "mac": 39999605,
        "win": 20490873
    },
    "2011-10-02": {
        "linux": 16988430,
        "linux64": 18814298,
        "mac": 39979983,
        "win": 20501301
    },
    "2011-10-03": {
        "linux": 16987347,
        "linux64": 18880100,
        "mac": 39999705,
        "win": 15430569,
        "win64": 16412908
    },
    "2011-10-04": {
        "linux": 16992013,
        "linux64": 18827376,
        "mac": 40001797,
        "win": 15430181,
        "win64": 16411686
    },
    "2011-10-05": {
        "linux": 16997180,
        "linux64": 18832710,
        "mac": 40009391,
        "win": 15438105,
        "win64": 16419845
    },
    "2011-10-06": {
        "linux": 17003704,
        "linux64": 18839607,
        "mac": 40101400,
        "win": 15438717,
        "win64": 15677833
    },
    "2011-10-07": {
        "linux": 17003215,
        "linux64": 18891625,
        "mac": 40117816,
        "win": 15436708,
        "win64": 15690537
    },
    "2011-10-08": {
        "linux": 17013124,
        "linux64": 18847946,
        "mac": 40120266,
        "win": 15451856,
        "win64": 15697365
    },
    "2011-10-09": {
        "linux": 17010711,
        "linux64": 18897301,
        "mac": 40127700,
        "win": 15451743,
        "win64": 15700327
    },
    "2011-10-10": {
        "linux": 17015334,
        "linux64": 18901695,
        "mac": 40136854,
        "win": 15456223,
        "win64": 15697440
    },
    "2011-10-11": {
        "linux": 17039136,
        "linux64": 18955335,
        "mac": 40252998,
        "win": 15467058,
        "win64": 15715473
    },
    "2011-10-12": {
        "linux": 17041903,
        "linux64": 18955534,
        "mac": 40267921,
        "win": 15467703,
        "win64": 15714539
    },
    "2011-10-13": {
        "linux": 17029261,
        "linux64": 18861885,
        "mac": 40286430,
        "win": 15467873,
        "win64": 15728322
    },
    "2011-10-14": {
        "linux": 17143229,
        "linux64": 19057510,
        "mac": 40375951,
        "win": 15598860,
        "win64": 15846232
    },
    "2011-10-15": {
        "linux": 17141144,
        "linux64": 19050782,
        "mac": 40396434,
        "win": 15595064,
        "win64": 15859807
    },
    "2011-10-16": {
        "linux": 17142811,
        "linux64": 19050914,
        "mac": 40397566,
        "win": 15598987,
        "win64": 15855834
    },
    "2011-10-17": {
        "linux": 17141002,
        "linux64": 19067775,
        "mac": 40404110,
        "win": 15599320,
        "win64": 15854746
    },
    "2011-10-18": {
        "linux": 17132485,
        "linux64": 19011469,
        "mac": 40396871,
        "win": 15580534,
        "win64": 15851675
    },
    "2011-10-19": {
        "linux": 17059836,
        "linux64": 18922121,
        "mac": 40378639,
        "win": 15586320,
        "win64": 15853108
    },
    "2011-10-20": {
        "linux": 17135265,
        "linux64": 19025799,
        "mac": 40404376,
        "win": 15596444,
        "win64": 15859460
    },
    "2011-10-21": {
        "linux": 17062042,
        "linux64": 18988638,
        "mac": 40474861,
        "win": 15596402,
        "win64": 15865343
    },
    "2011-10-22": {
        "linux": 17071587,
        "linux64": 18982047,
        "mac": 40435169,
        "win": 15592100,
        "win64": 15864859
    },
    "2011-10-23": {
        "linux": 17222619,
        "linux64": 19007727,
        "mac": 40680117,
        "win": 15580462,
        "win64": 15831067
    },
    "2011-10-24": {
        "linux": 17226987,
        "linux64": 19008149,
        "mac": 40654570,
        "win": 15575949,
        "win64": 15832881
    },
    "2011-10-25": {
        "linux": 17226397,
        "linux64": 19008770,
        "mac": 40654198,
        "win": 15586218,
        "win64": 15827834
    },
    "2011-10-26": {
        "linux": 17240469,
        "linux64": 19019127,
        "mac": 40651719,
        "win": 15607653,
        "win64": 15856793
    },
    "2011-10-27": {
        "linux": 17236781,
        "linux64": 19013256,
        "mac": 40657459,
        "win": 15606120,
        "win64": 15847811
    },
    "2011-10-28": {
        "linux": 17242794,
        "linux64": 18934181,
        "mac": 41106239,
        "win": 15880502,
        "win64": 16156809
    },
    "2011-10-29": {
        "linux": 17244060,
        "linux64": 18935309,
        "mac": 41107005,
        "win": 15880570,
        "win64": 16154867
    },
    "2011-10-30": {
        "linux": 17235140,
        "linux64": 18852178,
        "mac": 41060889,
        "win": 15883802,
        "win64": 16157869
    },
    "2011-10-31": {
        "linux": 17249065,
        "linux64": 18962243,
        "mac": 41158353,
        "win": 15884154,
        "win64": 16148230
    },
    "2011-11-01": {
        "linux": 17201296,
        "linux64": 18839343,
        "mac": 40249739,
        "win": 15785348,
        "win64": 16048444
    },
    "2011-11-02": {
        "linux": 17226972,
        "linux64": 18916034,
        "mac": 40281100,
        "win": 15814251,
        "win64": 16072153
    },
    "2011-11-03": {
        "linux": 17256354,
        "linux64": 18941074,
        "mac": 40337555,
        "win": 15847787,
        "win64": 16111194
    },
    "2011-11-04": {
        "linux": 17261245,
        "linux64": 18974613,
        "mac": 40653154,
        "win": 15853850,
        "win64": 16119092
    },
    "2011-11-05": {
        "linux": 17264832,
        "linux64": 18981635,
        "mac": 40680733,
        "win": 15874603,
        "win64": 16159063
    },
    "2011-11-06": {
        "linux": 17277073,
        "linux64": 18992462,
        "mac": 40673203,
        "win": 15882086,
        "win64": 16158377
    },
    "2011-11-07": {
        "linux": 17272650,
        "linux64": 18991167,
        "mac": 40706463,
        "win": 15889444,
        "win64": 16148684
    },
    "2011-11-08": {
        "linux": 17272742,
        "linux64": 18991604,
        "mac": 40706991,
        "win": 15887924,
        "win64": 16172017
    },
    "2011-11-09": {
        "linux": 17290031,
        "linux64": 19005974,
        "mac": 40758492,
        "win": 15890311,
        "win64": 16171582
    },
    "2011-11-10": {
        "linux": 17296144,
        "linux64": 19009320,
        "mac": 40755148,
        "win": 15896173,
        "win64": 16182502
    },
    "2011-11-11": {
        "linux": 17300518,
        "linux64": 19018544,
        "mac": 40751440,
        "win": 15895267,
        "win64": 16192604
    },
    "2011-11-12": {
        "linux": 17324834,
        "linux64": 19043405,
        "mac": 40940740,
        "win": 15906439,
        "win64": 16187342
    },
    "2011-11-13": {
        "linux": 17299701,
        "linux64": 18997783,
        "mac": 41031292,
        "win": 15909998,
        "win64": 16195751
    },
    "2011-11-14": {
        "linux": 17302610,
        "linux64": 18976111,
        "mac": 41031505,
        "win": 15907805,
        "win64": 16186976
    },
    "2011-11-15": {
        "linux": 17305722,
        "linux64": 18980088,
        "mac": 41053085,
        "win": 15917205,
        "win64": 16199931
    },
    "2011-11-16": {
        "linux": 17309903,
        "linux64": 18987197,
        "mac": 41054581,
        "win": 15921001,
        "win64": 16201794
    },
    "2011-11-17": {
        "linux": 17312153,
        "linux64": 18975103,
        "mac": 41048706,
        "win": 15922307,
        "win64": 16201662
    },
    "2011-11-18": {
        "linux": 17365801,
        "linux64": 19038605,
        "mac": 41077649,
        "win": 16095455,
        "win64": 16377098
    },
    "2011-11-19": {
        "linux": 17365111,
        "linux64": 19041189,
        "mac": 41111331,
        "win": 16095345,
        "win64": 16384360
    },
    "2011-11-20": {
        "linux": 17367543,
        "linux64": 19049345,
        "mac": 41105778,
        "win": 16099875,
        "win64": 16375028
    },
    "2011-11-21": {
        "linux": 17362380,
        "linux64": 19048834,
        "mac": 41106057,
        "win": 16102493,
        "win64": 16388995
    },
    "2011-11-22": {
        "linux": 17370106,
        "linux64": 19056366,
        "mac": 41075827,
        "win": 16104839,
        "win64": 17112291
    },
    "2011-11-23": {
        "linux": 17371819,
        "linux64": 19056018,
        "mac": 41038427,
        "win": 16103379,
        "win64": 17123329
    },
    "2011-11-24": {
        "linux": 17366465,
        "linux64": 19050281,
        "mac": 41047253,
        "win": 16109328,
        "win64": 17120645
    },
    "2011-11-25": {
        "linux": 17372890,
        "linux64": 19052523,
        "mac": 41054565,
        "win": 16112556,
        "win64": 17129978
    },
    "2011-11-26": {
        "linux": 17373752,
        "linux64": 19069430,
        "mac": 41130984,
        "win": 16120628,
        "win64": 17123737
    },
    "2011-11-27": {
        "linux": 17370818,
        "linux64": 19142339,
        "mac": 41120726,
        "win": 16118379,
        "win64": 17128978
    },
    "2011-11-28": {
        "linux": 17373334,
        "linux64": 19066780,
        "mac": 41120524,
        "win": 16120301,
        "win64": 17128161
    },
    "2011-11-29": {
        "linux": 17366334,
        "linux64": 19054149,
        "mac": 41092258,
        "win": 16115424,
        "win64": 17124168
    },
    "2011-11-30": {
        "linux": 17377894,
        "linux64": 19068560,
        "mac": 41093908,
        "win": 16128778,
        "win64": 17132321
    },
    "2011-12-01": {
        "linux": 17383987,
        "linux64": 19061917,
        "mac": 41089407,
        "win": 16142195,
        "win64": 17142524
    },
    "2011-12-02": {
        "linux": 17378537,
        "linux64": 19074158,
        "mac": 41130509,
        "win": 16136513,
        "win64": 17151062
    },
    "2011-12-03": {
        "linux": 17395389,
        "linux64": 19081566,
        "mac": 41146277,
        "win": 16152273,
        "win64": 17176420
    },
    "2011-12-04": {
        "linux": 17401025,
        "linux64": 19101367,
        "mac": 41030665,
        "win": 16164787,
        "win64": 17174254
    },
    "2011-12-05": {
        "linux": 17400018,
        "linux64": 19097159,
        "mac": 41052190,
        "win": 16163214,
        "win64": 17173687
    },
    "2011-12-06": {
        "linux": 17403411,
        "linux64": 19095825,
        "mac": 41040999,
        "win": 16159760,
        "win64": 17179916
    },
    "2011-12-07": {
        "linux": 17407080,
        "linux64": 19185562,
        "mac": 41043608,
        "win": 16176313,
        "win64": 17183298
    },
    "2011-12-08": {
        "linux": 17406844,
        "linux64": 19115718,
        "mac": 41034207,
        "win": 16176592,
        "win64": 17189905
    },
    "2011-12-09": {
        "linux": 17558027,
        "linux64": 19319500,
        "mac": 41068470,
        "win": 16178776,
        "win64": 17183224
    },
    "2011-12-10": {
        "linux": 17556396,
        "linux64": 19318818,
        "mac": 41085770,
        "win": 16181008,
        "win64": 17183976
    },
    "2011-12-11": {
        "linux": 17521343,
        "linux64": 19256881,
        "mac": 41017532,
        "win": 16170576,
        "win64": 17175008
    },
    "2011-12-12": {
        "linux": 17534652,
        "linux64": 19288694,
        "mac": 41013262,
        "win": 16176424,
        "win64": 17171936
    },
    "2011-12-13": {
        "linux": 17520705,
        "linux64": 19301475,
        "mac": 41010149,
        "win": 16175336,
        "win64": 17167992
    },
    "2011-12-14": {
        "linux": 17527479,
        "linux64": 19278973,
        "mac": 41015604,
        "win": 16171976,
        "win64": 17181216
    },
    "2011-12-15": {
        "linux": 17541341,
        "linux64": 19355169,
        "mac": 41086520,
        "win": 16066968,
        "win64": 17039848
    },
    "2011-12-16": {
        "linux": 17565009,
        "linux64": 19342465,
        "mac": 41174991,
        "win": 16079320,
        "win64": 17055176
    },
    "2011-12-17": {
        "linux": 17668126,
        "linux64": 19432730,
        "mac": 41220830,
        "win": 16178704,
        "win64": 17149530
    },
    "2011-12-18": {
        "linux": 17681467,
        "linux64": 19449048,
        "mac": 41267460,
        "win": 16178488,
        "win64": 17148449
    },
    "2011-12-19": {
        "linux": 17713739,
        "linux64": 19478658,
        "mac": 41533685,
        "win": 16185640,
        "win64": 17154283
    },
    "2011-12-20": {
        "linux": 17820892,
        "linux64": 19633639,
        "mac": 41716527,
        "win": 16269640,
        "win64": 17260052
    },
    "2011-12-21": {
        "linux": 17823577,
        "linux64": 19657475,
        "mac": 41715483,
        "win": 16270792,
        "win64": 17259686
    },
    "2011-12-22": {
        "linux": 17829933,
        "linux64": 19550475,
        "mac": 41718207,
        "win": 16270824,
        "win64": 17271386
    },
    "2011-12-23": {
        "linux": 17827461,
        "linux64": 19550520,
        "mac": 41717095,
        "win": 16271336,
        "win64": 17264799
    },
    "2011-12-24": {
        "linux": 17835769,
        "linux64": 19578032,
        "mac": 41715592,
        "win": 16261064,
        "win64": 17250242
    },
    "2011-12-25": {
        "linux": 17800657,
        "linux64": 19535170,
        "mac": 41628233,
        "win": 16252120,
        "win64": 17252741
    },
    "2011-12-26": {
        "linux": 17799584,
        "linux64": 19573178,
        "mac": 41628864,
        "win": 16250640,
        "win64": 17256397
    },
    "2011-12-27": {
        "linux": 17798028,
        "linux64": 19536141,
        "mac": 41683761,
        "win": 16254768,
        "win64": 17250485
    },
    "2011-12-28": {
        "linux": 17800865,
        "linux64": 19534011,
        "mac": 41651060,
        "win": 16255136,
        "win64": 17250468
    },
    "2011-12-29": {
        "linux": 17801856,
        "linux64": 19595248,
        "mac": 41687766,
        "win": 16256064,
        "win64": 17258282
    },
    "2011-12-30": {
        "linux": 17797263,
        "linux64": 19531861,
        "mac": 41643483,
        "win": 16253008,
        "win64": 17258020
    },
    "2011-12-31": {
        "linux": 17803493,
        "linux64": 19535965,
        "mac": 41711237,
        "win": 16260288,
        "win64": 17274063
    },
    "2012-01-01": {
        "linux": 17802075,
        "linux64": 19539984,
        "mac": 41707333,
        "win": 16259880,
        "win64": 17260442
    },
    "2012-01-02": {
        "linux": 17809185,
        "linux64": 19623133,
        "mac": 41708317,
        "win": 16256840,
        "win64": 17255851
    },
    "2012-01-03": {
        "linux": 17801117,
        "linux64": 19643544,
        "mac": 41708175,
        "win": 16259376,
        "win64": 17269926
    },
    "2012-01-04": {
        "linux64": 19540563,
        "mac": 41703814,
        "win": 16260816,
        "win64": 17263774
    },
    "2012-01-05": {
        "linux": 17819427,
        "linux64": 19548495,
        "mac": 41732249,
        "win": 16291968,
        "win64": 17276313
    },
    "2012-01-06": {
        "linux": 17843387,
        "linux64": 19607419,
        "mac": 41753731,
        "win": 16302552,
        "win64": 17256168
    },
    "2012-01-07": {
        "linux": 17765582,
        "linux64": 19580621,
        "mac": 41697769,
        "win": 16272248,
        "win64": 17251327
    },
    "2012-01-08": {
        "linux": 17766993,
        "linux64": 19560034,
        "mac": 41707369,
        "win": 16279584,
        "win64": 17257133
    },
    "2012-01-09": {
        "linux": 17768345,
        "linux64": 19541085,
        "mac": 41706699,
        "win": 16281856,
        "win64": 17258153
    },
    "2012-01-10": {
        "linux": 17776066,
        "linux64": 19585766,
        "mac": 41651772,
        "win": 16284256,
        "win64": 17271362
    },
    "2012-01-11": {
        "linux": 17775151,
        "linux64": 19588200,
        "mac": 41642265,
        "win": 16295760,
        "win64": 17270574
    },
    "2012-01-12": {
        "linux": 17791965,
        "linux64": 19595665,
        "mac": 39230214,
        "win": 16303064,
        "win64": 17284180
    },
    "2012-01-13": {
        "linux": 17785106,
        "linux64": 19599087,
        "mac": 39249501,
        "win": 16300528,
        "win64": 17281394
    },
    "2012-01-14": {
        "linux": 17796400,
        "linux64": 19618648,
        "mac": 39265142,
        "win": 16293952,
        "win64": 17283104
    },
    "2012-01-15": {
        "linux": 17775169,
        "linux64": 19602876,
        "mac": 39257599,
        "win": 16279448,
        "win64": 17256925
    },
    "2012-01-16": {
        "linux": 17769371,
        "linux64": 19549988,
        "mac": 39264836,
        "win": 16277680,
        "win64": 17257553
    },
    "2012-01-17": {
        "linux": 17771048,
        "linux64": 19600412,
        "mac": 39199027,
        "win": 16279584,
        "win64": 17254443
    },
    "2012-01-18": {
        "linux": 17775380,
        "linux64": 19603050,
        "mac": 39271702,
        "win": 16281816,
        "win64": 17271181
    },
    "2012-01-19": {
        "linux": 17810973,
        "linux64": 19593505,
        "mac": 39313067,
        "win": 16305216,
        "win64": 17291275
    },
    "2012-01-20": {
        "linux": 17867680,
        "linux64": 19619376,
        "mac": 39413377,
        "win": 16327352,
        "win64": 17316411
    },
    "2012-01-21": {
        "linux": 17838374,
        "linux64": 19665060,
        "mac": 39419529,
        "win": 16329712,
        "win64": 17310664
    },
    "2012-01-22": {
        "linux": 17840728,
        "linux64": 19608900,
        "mac": 39418905,
        "win": 16325768,
        "win64": 17310269
    },
    "2012-01-23": {
        "linux": 17842731,
        "linux64": 19609102,
        "mac": 39419438,
        "win": 16323600,
        "win64": 17314101
    },
    "2012-01-24": {
        "linux": 17863719,
        "linux64": 19620721,
        "mac": 39414859,
        "win": 16348616,
        "win64": 17330379
    },
    "2012-01-25": {
        "linux": 17881780,
        "linux64": 19638325,
        "mac": 39445680,
        "win": 16354456,
        "win64": 17342540
    },
    "2012-01-26": {
        "linux": 17935206,
        "linux64": 19682836,
        "mac": 39521348,
        "win": 16404416,
        "win64": 17385984
    },
    "2012-01-27": {
        "linux": 18073448,
        "linux64": 19935248,
        "mac": 39449412,
        "win": 16372160,
        "win64": 17361701
    },
    "2012-01-28": {
        "linux": 18077933,
        "linux64": 19941028,
        "mac": 39448897,
        "win": 16366784,
        "win64": 17356964
    },
    "2012-01-29": {
        "linux": 18115188,
        "linux64": 19977865,
        "mac": 39549354,
        "win": 16413800,
        "win64": 17397269
    },
    "2012-01-30": {
        "linux": 18112737,
        "linux64": 19977350,
        "mac": 39548147,
        "win": 16412504,
        "win64": 17399019
    },
    "2012-01-31": {
        "linux": 18117834,
        "linux64": 19988902,
        "mac": 39546203,
        "win": 16421336,
        "win64": 17413705
    },
    "2012-02-01": {
        "linux": 18119072,
        "linux64": 19987416,
        "mac": 39534477,
        "win": 16412920,
        "win64": 17404938
    },
    "2012-02-02": {
        "linux": 18120882,
        "linux64": 19991695,
        "mac": 39540867,
        "win": 16397888,
        "win64": 17408500
    },
    "2012-02-03": {
        "linux": 18125499,
        "linux64": 19999677,
        "mac": 39583688,
        "win": 16469712,
        "win64": 17436185
    },
    "2012-02-04": {
        "linux": 18128590,
        "linux64": 20000006,
        "mac": 39601825,
        "win": 16470096,
        "win64": 17434901
    },
    "2012-02-05": {
        "linux": 18129766,
        "linux64": 19981817,
        "mac": 39588501,
        "win": 16466464,
        "win64": 17442161
    },
    "2012-02-06": {
        "linux": 18130132,
        "linux64": 20010582,
        "mac": 39597204,
        "win": 16467568,
        "win64": 17435258
    },
    "2012-02-07": {
        "linux": 18130838,
        "linux64": 20009540,
        "mac": 39611997,
        "win": 16471352,
        "win64": 17437416
    },
    "2012-02-08": {
        "linux": 18208086,
        "linux64": 20098039,
        "mac": 39719012,
        "win": 16559200,
        "win64": 17521849
    },
    "2012-02-09": {
        "linux": 18214597,
        "linux64": 20118233,
        "mac": 39729686,
        "win": 16554528,
        "win64": 17524058
    },
    "2012-02-10": {
        "linux": 18203406,
        "linux64": 20109155,
        "mac": 39702803,
        "win": 16540832,
        "win64": 17522768
    },
    "2012-02-11": {
        "linux": 18207207,
        "linux64": 20106251,
        "mac": 39723612,
        "win": 16549504,
        "win64": 17521744
    },
    "2012-02-12": {
        "linux": 18206656,
        "linux64": 20098144,
        "mac": 39735806,
        "win": 16546272,
        "win64": 17514415
    },
    "2012-02-13": {
        "linux": 18211287,
        "linux64": 20120296,
        "mac": 39726666,
        "win": 16548832,
        "win64": 17514879
    },
    "2012-02-14": {
        "linux": 18206881,
        "linux64": 20112149,
        "mac": 39745198,
        "win": 16551296,
        "win64": 17522301
    },
    "2012-02-15": {
        "linux": 18207976,
        "linux64": 20107848,
        "mac": 39729795,
        "win": 16548440,
        "win64": 17518721
    },
    "2012-02-16": {
        "linux": 18231624,
        "linux64": 20091527,
        "mac": 39781921,
        "win": 16563976,
        "win64": 17540120
    },
    "2012-02-17": {
        "linux": 18237186,
        "linux64": 20159909,
        "mac": 39767315,
        "win": 16564096,
        "win64": 17543686
    },
    "2012-02-18": {
        "linux": 18253482,
        "linux64": 20171764,
        "mac": 39823770,
        "win": 16573568,
        "win64": 17547180
    },
    "2012-02-19": {
        "linux": 18271367,
        "linux64": 20166413,
        "mac": 39820066,
        "win": 16573720,
        "win64": 17545750
    },
    "2012-02-20": {
        "linux": 18275123,
        "linux64": 20177944,
        "mac": 39815895,
        "win": 16574568,
        "win64": 17550441
    },
    "2012-02-21": {
        "linux": 18259604,
        "linux64": 20178461,
        "mac": 39814464,
        "win": 16575480,
        "win64": 17548155
    },
    "2012-02-22": {
        "linux": 18275932,
        "linux64": 20175174,
        "mac": 39833204,
        "win": 16576720,
        "win64": 17571440
    },
    "2012-02-23": {
        "linux": 18287569,
        "linux64": 20184952,
        "mac": 39819316,
        "win": 16587128,
        "win64": 17568588
    },
    "2012-02-24": {
        "linux": 18272431,
        "linux64": 20176990,
        "mac": 39812851,
        "win": 16569144,
        "win64": 17557905
    },
    "2012-02-25": {
        "linux": 18310669,
        "linux64": 20197986,
        "mac": 39834090,
        "win": 16602320,
        "win64": 17592571
    },
    "2012-02-26": {
        "linux": 18310723,
        "linux64": 20198982,
        "mac": 39829831,
        "win": 16606392,
        "win64": 17590481
    },
    "2012-02-27": {
        "linux": 18308685,
        "linux64": 20255403,
        "mac": 39832149,
        "win": 16601520,
        "win64": 17589315
    },
    "2012-02-28": {
        "linux": 18322190,
        "linux64": 20209125,
        "mac": 39850638,
        "win": 16622496,
        "win64": 17603006
    },
    "2012-02-29": {
        "linux": 18332424,
        "linux64": 20213425,
        "mac": 39893956,
        "win": 16622544,
        "win64": 17618333
    },
    "2012-03-01": {
        "linux": 18316896,
        "linux64": 20205046,
        "mac": 39854049,
        "win": 16614064,
        "win64": 17589235
    },
    "2012-03-02": {
        "linux": 18314971,
        "linux64": 20209619,
        "mac": 39871689,
        "win": 16613728,
        "win64": 17595840
    },
    "2012-03-03": {
        "linux": 18320567,
        "linux64": 20201730,
        "mac": 39924808,
        "win": 16618968,
        "win64": 17597096
    },
    "2012-03-04": {
        "linux": 18343956,
        "linux64": 20286328,
        "mac": 39968650,
        "win": 16633488,
        "win64": 17611531
    },
    "2012-03-05": {
        "linux": 18347928,
        "linux64": 20207909,
        "mac": 39965102,
        "win": 16639248,
        "win64": 17608225
    },
    "2012-03-06": {
        "linux": 18349690,
        "linux64": 20205231,
        "mac": 39980246,
        "win": 16635176,
        "win64": 17608931
    },
    "2012-03-07": {
        "linux": 18352803,
        "linux64": 20286352,
        "mac": 39986751,
        "win": 16635840,
        "win64": 17615693
    },
    "2012-03-08": {
        "linux": 18349390,
        "linux64": 20206829,
        "mac": 39992212,
        "win": 16644272,
        "win64": 17613655
    },
    "2012-03-09": {
        "linux": 18348936,
        "linux64": 20212515,
        "mac": 40027959,
        "win": 16660368,
        "win64": 17629703
    },
    "2012-03-10": {
        "linux": 18359566,
        "linux64": 20216569,
        "mac": 40044131,
        "win": 16660032,
        "win64": 17633956
    },
    "2012-03-11": {
        "linux": 18359108,
        "linux64": 20219835,
        "mac": 40059485,
        "win": 16660648,
        "win64": 17636352
    },
    "2012-03-12": {
        "linux": 18366726,
        "linux64": 20214688,
        "mac": 40070803,
        "win": 16666608,
        "win64": 17636348
    },
    "2012-03-13": {
        "linux": 18251342,
        "linux64": 20102992,
        "mac": 40190664,
        "win": 16691144,
        "win64": 18006748
    },
    "2012-03-14": {
        "linux": 18255967,
        "linux64": 20112805,
        "mac": 40218759,
        "win": 16700840,
        "win64": 18018322
    },
    "2012-03-15": {
        "linux": 18260561,
        "linux64": 20117463,
        "mac": 40212987,
        "win": 16711016,
        "win64": 18025151
    },
    "2012-03-16": {
        "linux": 18285089,
        "linux64": 20145211,
        "mac": 40239650,
        "win": 16729000,
        "win64": 18041794
    },
    "2012-03-17": {
        "linux": 18283414,
        "linux64": 20137324,
        "mac": 40283191,
        "win": 16726184,
        "win64": 18042534
    },
    "2012-03-18": {
        "linux": 18263355,
        "linux64": 20125174,
        "mac": 40236992,
        "win": 16707984,
        "win64": 18018646
    },
    "2012-03-19": {
        "linux": 18264490,
        "linux64": 20128056,
        "mac": 40225826,
        "win": 16711784,
        "win64": 18019119
    },
    "2012-03-20": {
        "linux": 18251275,
        "linux64": 20121450,
        "mac": 40257251,
        "win": 16704464,
        "win64": 18014111
    },
    "2012-03-21": {
        "linux": 18252697,
        "linux64": 20119559,
        "mac": 40256527,
        "win": 16702104,
        "win64": 18010811
    },
    "2012-03-22": {
        "linux": 18252713,
        "linux64": 20122007,
        "mac": 40231290,
        "win": 16682944,
        "win64": 17995463
    },
    "2012-03-23": {
        "linux": 19060387,
        "linux64": 20810980,
        "mac": 41000108,
        "win": 17354072,
        "win64": 18668201
    },
    "2012-03-24": {
        "linux": 19069928,
        "linux64": 20864747,
        "mac": 41024312,
        "win": 17364208,
        "win64": 18679186
    },
    "2012-03-25": {
        "linux": 19072550,
        "linux64": 20871837,
        "mac": 41017055,
        "win": 17366096,
        "win64": 18682470
    },
    "2012-03-26": {
        "linux": 19062395,
        "linux64": 20858089,
        "mac": 41008778,
        "win": 17366656,
        "win64": 18667760
    },
    "2012-03-27": {
        "linux": 19074037,
        "linux64": 20869838,
        "mac": 41019509,
        "win": 17369320,
        "win64": 18688616
    },
    "2012-03-28": {
        "linux": 19067626,
        "linux64": 20865564,
        "mac": 41025891,
        "win": 17364784,
        "win64": 18685311
    },
    "2012-03-29": {
        "linux": 19068741,
        "linux64": 20862047,
        "mac": 41025747,
        "win": 17366640,
        "win64": 18677344
    },
    "2012-03-30": {
        "linux": 19077462,
        "linux64": 20871989,
        "mac": 41035301,
        "win": 17376288,
        "win64": 18692679
    },
    "2012-03-31": {
        "linux": 19101825,
        "linux64": 20915902,
        "mac": 41191417,
        "win": 17411120,
        "win64": 18724429
    },
    "2012-04-01": {
        "linux": 19102318,
        "linux64": 20914951,
        "mac": 41187911,
        "win": 17404136,
        "win64": 18725510
    },
    "2012-04-02": {
        "linux": 19098671,
        "linux64": 20925541,
        "mac": 41186701,
        "win": 17409312,
        "win64": 18722470
    },
    "2012-04-03": {
        "linux": 19103715,
        "linux64": 20918471,
        "mac": 41189173,
        "win": 17407944,
        "win64": 18716124
    },
    "2012-04-04": {
        "linux": 19104701,
        "linux64": 20921447,
        "mac": 41210835,
        "win": 17413640,
        "win64": 18727843
    },
    "2012-04-05": {
        "linux": 19108309,
        "linux64": 20935088,
        "mac": 41200850,
        "win": 17413656,
        "win64": 18732060
    },
    "2012-04-06": {
        "linux": 19106977,
        "linux64": 20986701,
        "mac": 41200714,
        "win": 17414728,
        "win64": 18727847
    },
    "2012-04-07": {
        "linux": 19108854,
        "linux64": 20929374,
        "mac": 41231133,
        "win": 17415072,
        "win64": 18727908
    },
    "2012-04-08": {
        "linux": 19105018,
        "linux64": 20940734,
        "mac": 41228326,
        "win": 17417928,
        "win64": 18738183
    },
    "2012-04-09": {
        "linux": 19106901,
        "linux64": 20931733,
        "mac": 41227602,
        "win": 17423536,
        "win64": 18730416
    },
    "2012-04-10": {
        "linux": 22517343,
        "linux64": 24326566,
        "mac": 41091491,
        "win": 17410408,
        "win64": 18731609
    },
    "2012-04-11": {
        "linux": 22522276,
        "linux64": 24313936,
        "mac": 41090565,
        "win": 17421480,
        "win64": 18728941
    },
    "2012-04-12": {
        "linux": 22541703,
        "linux64": 24335071,
        "mac": 41102836,
        "win": 17445440,
        "win64": 18759427
    },
    "2012-04-13": {
        "linux": 22505218,
        "linux64": 24325192,
        "mac": 41160945,
        "win": 17423624,
        "win64": 18761062
    },
    "2012-04-14": {
        "linux": 22561983,
        "linux64": 24325790,
        "mac": 41172207,
        "win": 17418536,
        "win64": 18751499
    },
    "2012-04-15": {
        "linux": 22588901,
        "linux64": 24456854,
        "mac": 41173363,
        "win": 17436616,
        "win64": 18780932
    },
    "2012-04-16": {
        "linux": 22586092,
        "linux64": 24459053,
        "mac": 41118291,
        "win": 17438984,
        "win64": 18788659
    },
    "2012-04-17": {
        "linux": 22585362,
        "linux64": 24469316,
        "mac": 41157591,
        "win": 17196960,
        "win64": 18802515
    },
    "2012-04-18": {
        "linux": 22717886,
        "linux64": 24548117,
        "mac": 41318724,
        "win": 17623248,
        "win64": 18993471
    },
    "2012-04-19": {
        "linux": 22715646,
        "linux64": 24548433,
        "mac": 41353796,
        "win": 17621504,
        "win64": 18994915
    },
    "2012-04-20": {
        "linux": 22716887,
        "linux64": 24549085,
        "mac": 41342547,
        "win": 17632976,
        "win64": 19004427
    },
    "2012-04-21": {
        "linux": 22735756,
        "linux64": 24574727,
        "mac": 41337166
    },
    "2012-04-22": {
        "linux": 22732474,
        "linux64": 24581027,
        "mac": 41356325,
        "win": 17435024,
        "win64": 19034313
    },
    "2012-04-23": {
        "linux": 22733294,
        "linux64": 24581802,
        "mac": 41341917,
        "win": 17433832,
        "win64": 19031091
    },
    "2012-04-24": {
        "linux": 22736083,
        "linux64": 24603996,
        "mac": 41349636,
        "win": 17669752,
        "win64": 19034165
    },
    "2012-04-25": {
        "linux": 22737996,
        "linux64": 24604241,
        "mac": 41349325,
        "win": 17441120,
        "win64": 19035905
    },
    "2012-04-26": {
        "linux": 22793092,
        "linux64": 24649048,
        "mac": 41367469,
        "win": 17455376,
        "win64": 19048268
    },
    "2012-04-27": {
        "linux": 22799449,
        "linux64": 24650536,
        "mac": 41415069,
        "win": 17463264,
        "win64": 19067179
    },
    "2012-04-28": {
        "linux": 22831682,
        "linux64": 24682417,
        "mac": 41449160,
        "win": 17503464,
        "win64": 19105135
    },
    "2012-04-29": {
        "linux": 22833538,
        "linux64": 24686733,
        "mac": 41448225,
        "win": 17506664,
        "win64": 19099867
    },
    "2012-04-30": {
        "linux": 22843517,
        "linux64": 24682127,
        "mac": 42119484,
        "win": 17510016,
        "win64": 19109938
    },
    "2012-05-01": {
        "linux": 22937980,
        "linux64": 24693392,
        "mac": 42257864,
        "win": 17757936,
        "win64": 19126089
    },
    "2012-05-02": {
        "linux": 22939198,
        "linux64": 24693098,
        "mac": 42257382,
        "win": 17532704,
        "win64": 19128605
    },
    "2012-05-03": {
        "linux": 23010991,
        "linux64": 24803724,
        "mac": 42502684,
        "win": 17887784,
        "win64": 19230988
    },
    "2012-05-04": {
        "linux": 23046512,
        "linux64": 24866048,
        "mac": 42526591,
        "win": 17903192,
        "win64": 19256244
    },
    "2012-05-05": {
        "linux": 23034228,
        "linux64": 24874007,
        "mac": 42525083,
        "win": 17907928,
        "win64": 19260705
    },
    "2012-05-06": {
        "linux": 23033121,
        "linux64": 24863462,
        "mac": 42578794,
        "win": 17910824,
        "win64": 19262313
    },
    "2012-05-07": {
        "linux": 23034854,
        "linux64": 24879758,
        "mac": 42583734,
        "win": 17911088,
        "win64": 19264621
    },
    "2012-05-08": {
        "linux": 23040049,
        "linux64": 24859114,
        "mac": 42593298,
        "win": 17920504,
        "win64": 19270780
    },
    "2012-05-09": {
        "linux": 23054972,
        "linux64": 24886492,
        "mac": 42573400,
        "win": 17927608,
        "win64": 19299784
    },
    "2012-05-10": {
        "linux": 23109332,
        "linux64": 24964263,
        "mac": 42643695,
        "win": 17999448,
        "win64": 19367027
    },
    "2012-05-11": {
        "linux": 23113907,
        "linux64": 24937456,
        "mac": 42646796,
        "win": 18012200,
        "win64": 19387433
    },
    "2012-05-12": {
        "linux": 23150712,
        "linux64": 25003789,
        "mac": 42668393,
        "win": 18050040,
        "win64": 19419112
    },
    "2012-05-13": {
        "linux": 23174121,
        "linux64": 25029070,
        "mac": 42692962,
        "win": 18073608,
        "win64": 19448741
    },
    "2012-05-14": {
        "linux": 23175962,
        "linux64": 25015023,
        "mac": 42719980,
        "win": 18078912,
        "win64": 19448781
    },
    "2012-05-15": {
        "linux": 23174691,
        "linux64": 25011697,
        "mac": 42690125,
        "win": 18084120,
        "win64": 19453779
    },
    "2012-05-16": {
        "linux": 23184724,
        "linux64": 25028260,
        "mac": 42720853,
        "win": 18089744,
        "win64": 19455588
    },
    "2012-05-17": {
        "linux": 23197013,
        "linux64": 25070756,
        "mac": 42751360,
        "win": 18105016,
        "win64": 19476311
    },
    "2012-05-18": {
        "linux": 23199326,
        "linux64": 25061907,
        "mac": 42777733,
        "win": 18109984,
        "win64": 19486994
    },
    "2012-05-19": {
        "linux": 23211097,
        "linux64": 25123246,
        "mac": 42921288,
        "win": 18116808,
        "win64": 19489966
    },
    "2012-05-20": {
        "linux": 23204770,
        "linux64": 25104589,
        "mac": 42936795,
        "win": 18123560,
        "win64": 19496874
    },
    "2012-05-21": {
        "linux": 23213048,
        "linux64": 25112847,
        "mac": 42930187,
        "win": 18128464,
        "win64": 19510603
    },
    "2012-05-22": {
        "linux": 23025883,
        "linux64": 24950642,
        "mac": 42753168,
        "win": 17941920,
        "win64": 19321909
    },
    "2012-05-23": {
        "linux": 23053908,
        "linux64": 24961696,
        "mac": 42807920,
        "win": 17950928,
        "win64": 19341442
    },
    "2012-05-24": {
        "linux": 23054271,
        "linux64": 24988595,
        "mac": 42832720,
        "win": 17954544,
        "win64": 19341259
    },
    "2012-05-25": {
        "linux": 23056930,
        "linux64": 24996242,
        "mac": 42850613,
        "win": 17950872,
        "win64": 19330483
    },
    "2012-05-26": {
        "linux": 23055289,
        "linux64": 24997426,
        "mac": 42851228,
        "win": 17952080,
        "win64": 19339721
    },
    "2012-05-27": {
        "linux": 23095252,
        "linux64": 24968110,
        "mac": 42857152,
        "win": 17959864,
        "win64": 19357077
    },
    "2012-05-28": {
        "linux": 23096903,
        "linux64": 24968857,
        "mac": 42854923,
        "win": 17958648,
        "win64": 19354501
    },
    "2012-05-29": {
        "linux": 23121543,
        "linux64": 24954789,
        "mac": 42898508,
        "win": 17964176,
        "win64": 19353141
    },
    "2012-05-30": {
        "linux": 23119872,
        "linux64": 24955729,
        "mac": 42870239,
        "win": 17965960,
        "win64": 19353279
    },
    "2012-05-31": {
        "linux": 23130170,
        "linux64": 24966690,
        "mac": 42877988,
        "win": 17973472,
        "win64": 19363904
    },
    "2012-06-01": {
        "linux": 23093446,
        "linux64": 24926630,
        "mac": 42871021,
        "win": 18068008,
        "win64": 19218474
    },
    "2012-06-02": {
        "linux": 22886693,
        "linux64": 24750972,
        "mac": 42845598,
        "win": 17797936,
        "win64": 18946293
    },
    "2012-06-03": {
        "linux": 22899309,
        "linux64": 24762175,
        "mac": 42851781,
        "win": 17803240,
        "win64": 18957815
    },
    "2012-06-04": {
        "linux": 22974459,
        "linux64": 24851032,
        "mac": 42999499,
        "win": 17820064,
        "win64": 18971650
    },
    "2012-06-05": {
        "linux": 23082849,
        "linux64": 24992564,
        "mac": 43041789,
        "win": 17879056,
        "win64": 19032600
    },
    "2012-06-06": {
        "linux": 23121211,
        "linux64": 25032633,
        "mac": 42495838,
        "win": 17885480,
        "win64": 19050832
    },
    "2012-06-07": {
        "linux": 23122445,
        "linux64": 25026526,
        "win": 17895120,
        "win64": 19062967,
        "mac": 42525393
    },
    "2012-06-08": {
        "linux": 23122445,
        "linux64": 25026595,
        "win": 17896192,
        "win64": 19071068,
        "mac": 42526225
    },
    "2012-06-09": {
        "linux": 23138615,
        "linux64": 25091996,
        "win": 17904960,
        "win64": 19068618,
        "mac": 42597111
    },
    "2012-06-10": {
        "linux": 23078996,
        "linux64": 25031936,
        "win": 17729792,
        "win64": 18894385,
        "mac": 42393243
    },
    "2012-06-11": {
        "linux": 23089576,
        "linux64": 25033906,
        "win": 17733856,
        "win64": 18891359,
        "mac": 42412851
    },
    "2012-06-12": {
        "linux": 23088988,
        "linux64": 25096396,
        "win": 17730072,
        "win64": 18890969,
        "mac": 42415033
    },
    "2012-06-13": {
        "linux": 23118885,
        "linux64": 25098329,
        "win": 17757024,
        "win64": 18895787,
        "mac": 42424248
    },
    "2012-06-14": {
        "linux": 23124758,
        "linux64": 25148707,
        "win": 17752472,
        "win64": 18889191,
        "mac": 42445797
    },
    "2012-06-15": {
        "linux": 23121756,
        "linux64": 25119052,
        "mac": 42437789
    },
    "2012-06-16": {
        "linux": 23136174,
        "linux64": 25177017,
        "win": 17893032,
        "win64": 19046129,
        "mac": 42504505
    },
    "2012-06-17": {
        "linux": 23154553,
        "linux64": 25255389,
        "win": 17915968,
        "win64": 19084408,
        "mac": 42526556
    },
    "2012-06-18": {
        "linux": 23151829,
        "linux64": 25249568,
        "win": 17917664,
        "win64": 19077629,
        "mac": 42571028
    },
    "2012-06-19": {
        "linux": 23501697,
        "linux64": 26432353,
        "win": 17908456,
        "win64": 19081037,
        "mac": 42371985
    },
    "2012-06-20": {
        "linux": 23472200,
        "linux64": 26439512,
        "win": 17907880,
        "win64": 19076582,
        "mac": 42330772
    },
    "2012-06-21": {
        "linux": 23486743,
        "linux64": 26411019,
        "win": 17911528,
        "win64": 19087520,
        "mac": 42958176
    },
    "2012-06-22": {
        "linux": 23490079,
        "linux64": 26420367,
        "win": 17918336,
        "win64": 19093674,
        "mac": 42988223
    },
    "2012-06-23": {
        "linux": 23492910,
        "linux64": 26453841,
        "win": 17925800,
        "win64": 19090567,
        "mac": 42990470
    },
    "2012-06-24": {
        "linux": 23493602,
        "linux64": 26431314,
        "win": 17925928,
        "win64": 19092919,
        "mac": 42966806
    },
    "2012-06-25": {
        "linux": 23492656,
        "linux64": 26431053,
        "win": 17931304,
        "win64": 19092591,
        "mac": 42971813
    },
    "2012-06-26": {
        "linux": 23492714,
        "linux64": 26445608,
        "win": 17934608,
        "win64": 19079436,
        "mac": 42962088
    },
    "2012-06-27": {
        "linux": 23507760,
        "linux64": 26454269,
        "win": 17941536,
        "win64": 19117481,
        "mac": 42981431
    },
    "2012-06-28": {
        "linux": 23561950,
        "linux64": 26492814,
        "win": 17955248,
        "win64": 19132845,
        "mac": 43050345
    },
    "2012-06-29": {
        "linux": 23568353,
        "linux64": 26495279,
        "win": 17952368,
        "win64": 19140675,
        "mac": 43052739
    },
    "2012-06-30": {
        "linux": 23562723,
        "linux64": 26493369,
        "win": 17959176,
        "win64": 19136527,
        "mac": 43046711
    },
    "2012-07-01": {
        "linux": 23609781,
        "linux64": 26530919,
        "win": 17973528,
        "win64": 19157636,
        "mac": 43205661
    },
    "2012-07-02": {
        "linux": 23624780,
        "linux64": 26603334,
        "win": 17981664,
        "win64": 19179471,
        "mac": 43223084
    },
    "2012-07-03": {
        "linux": 23614461,
        "linux64": 26610030
    },
    "2012-07-04": {
        "linux": 23620847,
        "linux64": 26544344,
        "win": 18008712,
        "win64": 19190689,
        "mac": 43234416
    },
    "2012-07-05": {
        "linux": 23654761,
        "linux64": 26660848,
        "win": 18018488,
        "win64": 19216643,
        "mac": 43242210
    },
    "2012-07-06": {
        "linux": 23771643,
        "linux64": 26735906,
        "win": 18049592,
        "win64": 19225526,
        "mac": 42987120
    },
    "2012-07-07": {
        "linux": 23779825,
        "win": 18055320,
        "win64": 19251232
    },
    "2012-07-08": {
        "linux": 23856463,
        "linux64": 26851818,
        "win": 18129992,
        "win64": 19317277,
        "mac": 43082483
    },
    "2012-07-09": {},
    "2012-07-10": {
        "linux": 24303944,
        "linux64": 27956587,
        "win": 18722552,
        "win64": 19989615,
        "mac": 43160601
    },
    "2012-07-11": {
        "linux": 24324292,
        "linux64": 28065654,
        "win": 18745112,
        "win64": 19999037,
        "mac": 43204076
    },
    "2012-07-12": {
        "linux": 24339944,
        "linux64": 28085264,
        "win": 18763168,
        "win64": 20016557,
        "mac": 43195281
    },
    "2012-07-13": {
        "linux": 24925802,
        "linux64": 28032162,
        "win": 18799960,
        "win64": 20028821,
        "mac": 45380367
    },
    "2012-07-14": {
        "linux": 24941532,
        "linux64": 28081177,
        "win": 18814072,
        "win64": 20059437,
        "mac": 45376680
    },
    "2012-07-15": {
        "linux": 24976043,
        "linux64": 28184182,
        "win": 18845136,
        "win64": 20077051,
        "mac": 45424947
    },
    "2012-07-16": {
        "linux": 25001128,
        "linux64": 28245921,
        "win": 18849136,
        "win64": 20076623,
        "mac": 45480534
    },
    "2012-07-17": {
        "linux": 25040213,
        "linux64": 28260029,
        "win": 18877272,
        "win64": 20111257,
        "mac": 45537702
    },
    "2012-07-18": {
        "linux": 25053113,
        "linux64": 28261764,
        "win": 18879392,
        "win64": 20118550,
        "mac": 45587046
    },
    "2012-07-19": {
        "linux": 25041536,
        "linux64": 28267347,
        "win": 18898544,
        "win64": 20114489,
        "mac": 44245150
    },
    "2012-07-20": {
        "linux": 25051802,
        "linux64": 28262771,
        "win": 18897216,
        "win64": 20123522,
        "mac": 44228846
    },
    "2012-07-21": {
        "linux64": 30191300,
        "mac": 46354383
    },
    "2012-07-22": {
        "linux": 27053975,
        "linux64": 30198074,
        "win": 21042296,
        "win64": 22262879,
        "mac": 46379043
    },
    "2012-07-23": {
        "linux": 27786676,
        "linux64": 31024674,
        "win": 21677968,
        "win64": 22922804,
        "mac": 46975353
    },
    "2012-07-24": {
        "linux": 27795002,
        "linux64": 30984816,
        "win": 21677816,
        "win64": 22910646,
        "mac": 46987883
    },
    "2012-07-25": {
        "linux": 26917835,
        "linux64": 30173294,
        "win": 20786184,
        "win64": 22028714,
        "mac": 46128770
    },
    "2012-07-26": {
        "linux": 26941064,
        "linux64": 30203545,
        "mac": 46157178
    },
    "2012-07-27": {
        "linux": 27017219,
        "linux64": 30236320,
        "win": 20840648,
        "win64": 22084512,
        "mac": 46221839
    },
    "2012-07-28": {
        "linux": 27033185,
        "linux64": 30240244,
        "win": 20847384,
        "win64": 22111957,
        "mac": 46232109
    },
    "2012-07-29": {
        "linux": 27055139,
        "linux64": 30302580,
        "win": 20855064,
        "win64": 22092614,
        "mac": 46310228
    },
    "2012-07-30": {
        "linux": 27001112,
        "linux64": 30180609,
        "win": 20791792,
        "win64": 22033490,
        "mac": 46242974
    },
    "2012-07-31": {
        "linux": 26985055,
        "linux64": 30171374,
        "win": 20781144,
        "win64": 22021614,
        "mac": 46226338
    },
    "2012-08-01": {
        "linux": 27118316,
        "linux64": 30322089,
        "win": 21063912,
        "win64": 22338300,
        "mac": 46555349
    },
    "2012-08-02": {
        "linux": 27125080,
        "linux64": 30321608,
        "win": 21064880,
        "win64": 22314754,
        "mac": 46533621
    },
    "2012-08-03": {
        "linux": 27153002,
        "linux64": 30436930,
        "win": 21075160,
        "win64": 22324870,
        "mac": 46640820
    },
    "2012-08-04": {
        "linux": 27179744,
        "linux64": 30467460,
        "win": 21085040,
        "win64": 22336262,
        "mac": 46675413
    },
    "2012-08-05": {
        "linux": 27194955,
        "linux64": 30462101,
        "win": 21091256,
        "win64": 22341833,
        "mac": 46671682
    },
    "2012-08-06": {
        "linux": 27205096,
        "linux64": 30466320,
        "win": 21094624,
        "win64": 22358664,
        "mac": 46663361
    },
    "2012-08-07": {
        "linux": 27204978,
        "linux64": 30483640,
        "win": 21096032,
        "win64": 22358001,
        "mac": 46693736
    },
    "2012-08-08": {
        "linux": 27209179,
        "linux64": 30467937,
        "win": 21097320,
        "win64": 22357729,
        "mac": 46669779
    },
    "2012-08-09": {
        "linux": 25412645,
        "linux64": 28640478,
        "win": 19095192,
        "win64": 20346239,
        "mac": 44705259
    },
    "2012-08-10": {
        "linux": 25420202,
        "linux64": 28650474,
        "win": 19105456,
        "win64": 20374971,
        "mac": 44749678
    },
    "2012-08-11": {
        "linux": 25419758,
        "linux64": 28659196,
        "win": 19107312,
        "win64": 20363531,
        "mac": 44761264
    },
    "2012-08-12": {
        "linux": 25413088,
        "linux64": 28686914,
        "win": 19118952,
        "win64": 20380842,
        "mac": 44807849
    },
    "2012-08-13": {
        "linux": 25442447,
        "linux64": 28685859,
        "win": 19119560,
        "win64": 20382837,
        "mac": 44802168
    },
    "2012-08-14": {
        "linux": 25449785,
        "linux64": 28694503,
        "win": 19128200,
        "win64": 20381876,
        "mac": 44825039
    },
    "2012-08-15": {
        "linux": 25445396,
        "linux64": 28645045,
        "win": 19140856,
        "win64": 20398400,
        "mac": 44839037
    },
    "2012-08-16": {
        "linux": 25499493,
        "linux64": 28763958,
        "win": 19167392,
        "win64": 20429435,
        "mac": 44603628
    },
    "2012-08-17": {
        "linux": 25517601,
        "linux64": 28817035,
        "win": 19178792,
        "win64": 20452946,
        "mac": 44592063
    },
    "2012-08-18": {
        "linux": 25562493,
        "linux64": 28829316,
        "win": 19188400,
        "win64": 20472363,
        "mac": 44665281
    },
    "2012-08-19": {
        "linux": 25578400,
        "linux64": 28776936,
        "win": 19200280,
        "win64": 20478648,
        "mac": 44686133
    },
    "2012-08-20": {
        "linux": 25576408,
        "linux64": 28843410,
        "win": 19207424,
        "win64": 20486509,
        "mac": 44681656
    },
    "2012-08-21": {
        "linux": 25576935,
        "linux64": 28848114,
        "win": 19213400,
        "win64": 20482874,
        "mac": 44696318
    },
    "2012-08-22": {
        "linux": 25619767,
        "linux64": 28881287,
        "win": 19240704,
        "win64": 20514884,
        "mac": 44697357
    },
    "2012-08-23": {
        "linux": 25637694,
        "linux64": 28904732,
        "win": 19265416,
        "win64": 20531323,
        "mac": 44719416
    },
    "2012-08-24": {
        "linux": 25763396,
        "linux64": 28992199,
        "win": 19361168,
        "win64": 20627106,
        "mac": 44907588
    },
    "2012-08-25": {
        "linux": 25768393,
        "linux64": 29053606,
        "win": 19367736,
        "win64": 20632925,
        "mac": 44900924
    },
    "2012-08-26": {
        "linux": 25864948,
        "linux64": 29133217,
        "win": 19412560,
        "win64": 20697430,
        "mac": 45051297
    },
    "2012-08-27": {
        "linux": 25871300,
        "linux64": 29163041,
        "win": 19418632,
        "win64": 20689289,
        "mac": 45015235
    },
    "2012-08-28": {
        "linux": 25863774,
        "linux64": 29164377,
        "win": 19424368,
        "win64": 20692273,
        "mac": 45057456
    },
    "2012-08-29": {
        "linux": 25887967,
        "linux64": 29180591,
        "win": 19432112,
        "win64": 20703086,
        "mac": 45084075
    },
    "2012-08-30": {
        "linux": 25886603,
        "linux64": 29183296,
        "win": 19429632,
        "win64": 20712223,
        "mac": 45080352
    },
    "2012-08-31": {
        "linux": 25892877,
        "linux64": 29182104,
        "win": 19438392,
        "win64": 20711897,
        "mac": 45086851
    },
    "2012-09-01": {
        "linux": 25908939,
        "linux64": 29202229,
        "win": 19435728,
        "win64": 20729859,
        "mac": 45117796
    },
    "2012-09-02": {
        "linux": 25911208,
        "linux64": 29126838,
        "win": 19443752,
        "win64": 20716740,
        "mac": 45079631
    },
    "2012-09-03": {
        "linux": 25916976,
        "linux64": 29132484,
        "win": 19441256,
        "win64": 20716766,
        "mac": 45112609
    },
    "2012-09-04": {
        "linux": 25913805,
        "linux64": 29208035,
        "win": 19445712,
        "win64": 20719838,
        "mac": 45094090
    },
    "2012-09-05": {
        "linux": 25939114,
        "linux64": 29152995,
        "win": 19452520,
        "win64": 20723750,
        "mac": 45126284
    },
    "2012-09-06": {
        "linux": 25959235,
        "linux64": 29166400,
        "win": 19454136,
        "win64": 20720605,
        "mac": 45138035
    },
    "2012-09-07": {
        "linux": 25963766,
        "linux64": 29260661,
        "win": 19461472,
        "win64": 20741583,
        "mac": 45160744
    },
    "2012-09-08": {
        "linux": 25968818,
        "linux64": 29209721,
        "win": 19469368,
        "win64": 20753185,
        "mac": 45187785
    },
    "2012-09-09": {
        "linux": 25968501,
        "linux64": 29211018,
        "win": 19479360,
        "win64": 20764218,
        "mac": 45182735
    },
    "2012-09-10": {
        "linux": 25971650,
        "linux64": 29215353,
        "win": 19473656,
        "win64": 20763430,
        "mac": 45187999
    },
    "2012-09-11": {
        "linux": 25978660,
        "linux64": 29275272,
        "win": 19469048,
        "win64": 20755565,
        "mac": 45179956
    },
    "2012-09-12": {
        "linux": 26333892,
        "linux64": 29647561,
        "win": 19691096,
        "win64": 20970210,
        "mac": 45893214
    },
    "2012-09-13": {
        "linux": 26334126,
        "linux64": 29655045,
        "win": 19695632,
        "win64": 20976027,
        "mac": 45894047
    },
    "2012-09-14": {
        "linux": 26359558,
        "linux64": 29695446,
        "win": 19715336,
        "win64": 21011544,
        "mac": 45925015
    },
    "2012-09-15": {
        "linux": 26364244,
        "linux64": 29664774,
        "win": 19716104,
        "win64": 21005103,
        "mac": 45935053
    },
    "2012-09-16": {
        "linux": 26366204,
        "linux64": 29662332,
        "win": 19713104,
        "win64": 20997606,
        "mac": 45945786
    },
    "2012-09-17": {
        "linux": 26373970,
        "linux64": 29661710,
        "win": 19716936,
        "win64": 21010817,
        "mac": 45923978
    },
    "2012-09-18": {
        "linux": 26408199,
        "linux64": 29697838,
        "win": 19714936,
        "win64": 21001251,
        "mac": 46004976
    },
    "2012-09-19": {
        "linux": 26421798,
        "linux64": 29800196,
        "win": 19717120,
        "win64": 21009128,
        "mac": 46018915
    },
    "2012-09-20": {
        "linux": 26431404,
        "linux64": 29830648,
        "win": 19715512,
        "win64": 21017763,
        "mac": 45904307
    },
    "2012-09-21": {
        "linux": 26422956,
        "linux64": 29485255,
        "win": 19748584,
        "win64": 21033084,
        "mac": 45953186
    },
    "2012-09-22": {
        "linux": 26517059,
        "linux64": 29505214,
        "win": 19764456,
        "win64": 21056515,
        "mac": 46011952
    },
    "2012-09-23": {
        "linux": 26460967,
        "linux64": 29522269,
        "win": 19766752,
        "win64": 21062557,
        "mac": 46009633
    },
    "2012-09-24": {
        "linux": 26485545,
        "linux64": 29560925,
        "win": 19795240,
        "win64": 21090234,
        "mac": 46035990
    },
    "2012-09-25": {
        "linux": 26530464,
        "linux64": 29586049,
        "win": 19805432,
        "win64": 21110951,
        "mac": 46049877
    },
    "2012-09-26": {
        "linux": 26531703,
        "linux64": 29595458,
        "win": 19807632,
        "win64": 21105685,
        "mac": 46087197
    },
    "2012-09-27": {
        "linux": 26554246,
        "linux64": 29610079,
        "win": 19828968,
        "win64": 21131099,
        "mac": 46103768
    },
    "2012-09-28": {
        "linux": 26447562,
        "linux64": 29624370,
        "win": 19819800,
        "win64": 21124698,
        "mac": 46114762
    },
    "2012-09-29": {
        "linux": 26590735,
        "linux64": 29624976,
        "win": 19860264,
        "win64": 21172171,
        "mac": 46217948
    },
    "2012-09-30": {
        "linux": 26573991,
        "linux64": 29699172,
        "win": 19860440,
        "win64": 21163446,
        "mac": 46470095
    },
    "2012-10-01": {
        "linux": 26617194,
        "linux64": 29713262,
        "win": 19866144,
        "win64": 20537149,
        "mac": 46537074
    },
    "2012-10-02": {
        "linux": 26663129,
        "linux64": 29741464,
        "win": 19899808,
        "win64": 20573848,
        "mac": 46584904
    },
    "2012-10-03": {
        "linux": 26680653,
        "linux64": 29763307,
        "win": 19912808,
        "win64": 20587531,
        "mac": 46610244
    },
    "2012-10-04": {
        "linux": 26695948,
        "linux64": 29805405,
        "win": 19975696,
        "win64": 20661022,
        "mac": 46655346
    },
    "2012-10-05": {
        "linux": 26726971,
        "linux64": 29843847,
        "win": 19984272,
        "win64": 20661479,
        "mac": 46686455
    },
    "2012-10-06": {
        "linux": 26626858,
        "linux64": 29712169,
        "win": 19823952,
        "win64": 20549009,
        "mac": 46522830
    },
    "2012-10-07": {
        "linux": 26643529,
        "linux64": 29757412,
        "win": 19825304,
        "win64": 20557212,
        "mac": 46583640
    },
    "2012-10-08": {},
    "2012-10-09": {
        "linux": 27548123,
        "linux64": 30726638,
        "win": 20206856,
        "win64": 21005136,
        "mac": 48436433
    },
    "2012-10-10": {
        "linux": 27564596,
        "linux64": 30751874,
        "win": 20211584,
        "win64": 21017096,
        "mac": 48427917
    },
    "2012-10-11": {
        "linux": 27563067,
        "linux64": 30754511,
        "win": 20207920,
        "win64": 21020761,
        "mac": 48425478
    },
    "2012-10-12": {
        "linux": 27574157,
        "linux64": 30759639,
        "win": 20218648,
        "win64": 21023705,
        "mac": 48361414
    },
    "2012-10-13": {
        "linux": 27573357,
        "linux64": 30756814,
        "win": 20225640,
        "win64": 21026849,
        "mac": 48368549
    },
    "2012-10-14": {
        "linux": 27554705,
        "linux64": 30711276,
        "win": 20214400,
        "win64": 21006787,
        "mac": 48247414
    },
    "2012-10-15": {
        "linux": 27479027,
        "linux64": 30705283,
        "win": 20218600,
        "win64": 21015067,
        "mac": 48246548
    },
    "2012-10-16": {
        "linux": 27565628,
        "linux64": 30713369,
        "win": 20220088,
        "win64": 21012242,
        "mac": 48272645
    },
    "2012-10-17": {
        "linux": 27564767,
        "linux64": 30711054,
        "win": 20212528,
        "win64": 21020025,
        "mac": 48298858
    },
    "2012-10-18": {
        "linux": 27598453,
        "linux64": 30779912,
        "win": 20231928,
        "win64": 21042135,
        "mac": 48347580
    },
    "2012-10-19": {
        "linux": 27597489,
        "linux64": 30779120,
        "win": 20228344,
        "win64": 21052287,
        "mac": 48401560
    },
    "2012-10-20": {
        "linux": 27599943,
        "linux64": 30795328,
        "win": 20229576,
        "win64": 21060194,
        "mac": 48441891
    },
    "2012-10-21": {
        "linux": 27556855,
        "linux64": 30719803,
        "win": 20219464,
        "win64": 21047779,
        "mac": 48347778
    },
    "2012-10-22": {
        "linux": 27556035,
        "linux64": 30707103,
        "win": 20220808,
        "win64": 21048760,
        "mac": 48343697
    },
    "2012-10-23": {
        "linux": 27551561,
        "linux64": 30721282,
        "win": 20235264,
        "win64": 21060322,
        "mac": 48283632
    },
    "2012-10-24": {
        "linux": 27569946,
        "linux64": 30741672,
        "win": 20252704,
        "win64": 21073794,
        "mac": 48315710
    },
    "2012-10-25": {
        "linux": 27579305,
        "linux64": 30754370,
        "win": 20266416,
        "win64": 21078750,
        "mac": 48289671
    },
    "2012-10-26": {
        "linux": 27580636,
        "linux64": 30773110,
        "win": 20278504,
        "win64": 21086486,
        "mac": 48301646
    },
    "2012-10-27": {
        "linux": 27616428,
        "linux64": 30814086,
        "win": 20306344,
        "win64": 21117269,
        "mac": 48379579
    },
    "2012-10-28": {
        "linux": 27632047,
        "linux64": 30826944,
        "win": 20315216,
        "win64": 21126799,
        "mac": 48404768
    },
    "2012-10-29": {
        "linux": 27628104,
        "linux64": 30826116,
        "win": 20310632,
        "win64": 21129017,
        "mac": 48407037
    },
    "2012-10-30": {
        "linux": 27622568,
        "linux64": 30807147,
        "win": 20311720,
        "win64": 21124645,
        "mac": 48378425
    },
    "2012-10-31": {
        "linux": 27628803,
        "linux64": 30825083,
        "win": 20320592,
        "win64": 21786438,
        "mac": 48385642
    },
    "2012-11-01": {
        "linux": 27595905,
        "linux64": 30712276,
        "win": 20315272,
        "win64": 21802184,
        "mac": 48268017
    },
    "2012-11-02": {
        "linux": 27590830,
        "linux64": 30729359,
        "win": 20329456,
        "win64": 21804977,
        "mac": 48315704
    },
    "2012-11-03": {
        "linux": 27624338,
        "linux64": 30757643,
        "win": 20341872,
        "win64": 21809392,
        "mac": 48368487
    },
    "2012-11-04": {
        "linux": 27626496,
        "linux64": 30775895,
        "win": 20340752,
        "win64": 21821001,
        "mac": 48395593
    },
    "2012-11-05": {
        "linux": 27673531,
        "linux64": 30767798,
        "win": 20343312,
        "win64": 21816918,
        "mac": 48373868
    },
    "2012-11-06": {
        "linux": 27627692,
        "linux64": 30784224,
        "win": 20346432,
        "win64": 21818067,
        "mac": 48417040
    },
    "2012-11-07": {
        "linux": 27671394,
        "linux64": 30835823,
        "win": 20349872,
        "win64": 21818852,
        "mac": 48481960
    },
    "2012-11-08": {
        "linux64": 30870754,
        "win": 20383488,
        "win64": 21856886,
        "mac": 48478381
    },
    "2012-11-09": {
        "linux": 27781117,
        "linux64": 30930732,
        "win": 20391952,
        "win64": 21854275,
        "mac": 48503548
    },
    "2012-11-10": {
        "linux": 27756752,
        "linux64": 30938275,
        "win": 20439408,
        "win64": 21916977,
        "mac": 48562043
    },
    "2012-11-11": {
        "linux": 27764344,
        "linux64": 31006724,
        "win": 20450528,
        "win64": 21922419,
        "mac": 48564745
    },
    "2012-11-12": {
        "linux": 27745881,
        "linux64": 30986156,
        "win": 20440640,
        "win64": 21921100,
        "mac": 48715279
    },
    "2012-11-13": {
        "linux": 27819615,
        "linux64": 31034232,
        "win": 20476040,
        "win64": 21943864,
        "mac": 48770684
    },
    "2012-11-14": {
        "linux": 27824870,
        "linux64": 31035209,
        "win": 20472944,
        "win64": 21958358,
        "mac": 48737754
    },
    "2012-11-15": {
        "linux": 27836457,
        "linux64": 31022794,
        "win": 20476600,
        "win64": 21972664,
        "mac": 48794465
    },
    "2012-11-16": {
        "linux": 27824007,
        "linux64": 30923020,
        "win": 20470504,
        "win64": 21950072,
        "mac": 48776305
    },
    "2012-11-17": {
        "linux": 27819150,
        "linux64": 31016483,
        "win": 20470552,
        "win64": 21966799,
        "mac": 48780155
    },
    "2012-11-18": {
        "linux": 27771276,
        "linux64": 31050612,
        "win": 20489584,
        "win64": 21987431,
        "mac": 48745530
    },
    "2012-11-19": {
        "linux": 27967265,
        "linux64": 31019721,
        "win": 20500480,
        "win64": 21981391,
        "mac": 48824898
    },
    "2012-11-20": {
        "linux": 27774335,
        "linux64": 30948609,
        "win": 20489104,
        "win64": 21981609,
        "mac": 48713349
    },
    "2012-11-21": {
        "linux": 27810649,
        "linux64": 31077436,
        "win": 20530240,
        "win64": 22009833,
        "mac": 48781412
    },
    "2012-11-22": {
        "linux": 27835219,
        "linux64": 31062987,
        "win": 20534448,
        "win64": 22028663,
        "mac": 48873398
    },
    "2012-11-23": {
        "linux": 27959001,
        "linux64": 31011558,
        "win": 20542040,
        "win64": 22036186,
        "mac": 49045296
    },
    "2012-11-24": {
        "linux": 27959962,
        "linux64": 31010591,
        "win": 20538320,
        "win64": 22037745,
        "mac": 49046938
    },
    "2012-11-25": {
        "linux": 27972490,
        "linux64": 31011099,
        "win": 20540200,
        "win64": 22041830,
        "mac": 49027433
    },
    "2012-11-26": {
        "linux": 28025508,
        "linux64": 31047616,
        "win": 20537880,
        "win64": 22034385,
        "mac": 49043508
    },
    "2012-11-27": {
        "linux": 28024859,
        "linux64": 31013444,
        "win": 20536784,
        "win64": 22043903,
        "mac": 49024034
    },
    "2012-11-28": {
        "linux": 27840647,
        "linux64": 30996281,
        "win": 20547568,
        "win64": 22043365,
        "mac": 49051407
    },
    "2012-11-29": {
        "linux": 27944025,
        "linux64": 30991577,
        "win": 20543704,
        "win64": 22045644,
        "mac": 49077266
    },
    "2012-11-30": {
        "linux": 27839722,
        "linux64": 31001325,
        "win": 20563040,
        "win64": 22056215,
        "mac": 49018841
    },
    "2012-12-01": {
        "linux": 27888097,
        "linux64": 31027415,
        "win": 20592680,
        "win64": 22081180,
        "mac": 49109824
    },
    "2012-12-02": {
        "linux": 27914046,
        "linux64": 31043896,
        "win": 20603656,
        "win64": 22099416,
        "mac": 49103271
    },
    "2012-12-03": {
        "linux": 28035827,
        "linux64": 31029876,
        "win": 20594944,
        "win64": 22107914,
        "mac": 49115617
    },
    "2012-12-04": {
        "linux": 27987779,
        "linux64": 31033057,
        "win": 20611576,
        "win64": 22101367,
        "mac": 49149724
    },
    "2012-12-05": {
        "linux": 27994672,
        "linux64": 31064386,
        "win": 20619024,
        "win64": 22093810,
        "mac": 49126585
    },
    "2012-12-06": {
        "linux": 27904609,
        "linux64": 31024530,
        "win": 20598944,
        "win64": 22094938,
        "mac": 49122463
    },
    "2012-12-07": {
        "linux": 27910834,
        "linux64": 31024160,
        "win": 20614264,
        "win64": 22103263,
        "mac": 49147270
    },
    "2012-12-08": {
        "linux": 27955155,
        "linux64": 31075482,
        "win": 20626800,
        "win64": 22119907,
        "mac": 49279058
    },
    "2012-12-09": {
        "linux": 27958850,
        "linux64": 31082091,
        "win": 20628024,
        "win64": 22128412,
        "mac": 49248189
    },
    "2012-12-10": {
        "linux": 27967379,
        "linux64": 31104225,
        "win": 20632240,
        "win64": 22133518,
        "mac": 49227104
    },
    "2012-12-11": {
        "linux": 27968257,
        "linux64": 31101294,
        "win": 20639288,
        "win64": 22137994,
        "mac": 49256800
    },
    "2012-12-12": {},
    "2012-12-13": {
        "linux": 28041028,
        "linux64": 31166081,
        "win": 20664624,
        "win64": 22173248,
        "mac": 49326957
    },
    "2012-12-14": {
        "linux": 28032597,
        "linux64": 31173201,
        "win": 20672800,
        "win64": 22188157,
        "mac": 49139882
    },
    "2012-12-15": {
        "linux": 28045393,
        "linux64": 31199302,
        "win": 20696408,
        "win64": 22192749,
        "mac": 49194313
    },
    "2012-12-16": {
        "linux": 28104800,
        "linux64": 31260989,
        "win": 20769184,
        "win64": 22270759,
        "mac": 49281629
    },
    "2012-12-17": {
        "linux": 28104685,
        "linux64": 31262433,
        "win": 20770064,
        "win64": 22270038,
        "mac": 49292467
    },
    "2012-12-18": {
        "linux": 28160479,
        "linux64": 31358867,
        "win": 20837720,
        "win64": 22339999,
        "mac": 49415794
    },
    "2012-12-19": {
        "linux": 28197078,
        "linux64": 31362336,
        "win": 20861432,
        "win64": 22366859,
        "mac": 49483833
    },
    "2012-12-20": {
        "linux": 28179343,
        "linux64": 31350481,
        "win": 20854584,
        "win64": 22376055,
        "mac": 49438949
    },
    "2012-12-21": {
        "linux": 28220122,
        "linux64": 31416045,
        "win": 20873432,
        "win64": 22380760,
        "mac": 49504186
    },
    "2012-12-22": {
        "linux": 28191599,
        "linux64": 31355003,
        "win": 20874888,
        "win64": 22392624,
        "mac": 49527399
    },
    "2012-12-23": {
        "linux": 28371945,
        "linux64": 31591460,
        "win": 20923624,
        "win64": 22452702,
        "mac": 49614054
    },
    "2012-12-24": {
        "linux": 28319491,
        "linux64": 31604605,
        "win": 20926688,
        "win64": 22441990,
        "mac": 49608823
    },
    "2012-12-25": {
        "linux": 28457339,
        "linux64": 31586403,
        "win": 20951760,
        "mac": 49789616
    },
    "2012-12-26": {
        "linux": 28471246,
        "linux64": 31572243,
        "win": 20942992,
        "mac": 49814167
    },
    "2012-12-27": {
        "linux": 28461193,
        "linux64": 31602732,
        "win": 20949712,
        "win64": 22462760,
        "mac": 49809962
    },
    "2012-12-28": {
        "linux": 28445881,
        "linux64": 31650104,
        "win": 20953088,
        "win64": 22467115,
        "mac": 49855017
    },
    "2012-12-29": {
        "linux": 28529367,
        "linux64": 31665490,
        "win": 20958000,
        "win64": 22455665,
        "mac": 49889908
    },
    "2012-12-30": {
        "linux": 28411275,
        "linux64": 31641792,
        "win": 20949696,
        "win64": 21879186,
        "mac": 49850673
    },
    "2012-12-31": {
        "linux": 28411709,
        "linux64": 31643289,
        "win": 20955312,
        "win64": 22466706,
        "mac": 49870417
    },
    "2013-01-01": {
        "linux": 28450452,
        "linux64": 31578049,
        "win": 20950792,
        "win64": 22468319,
        "mac": 49866306
    },
    "2013-01-02": {
        "linux": 28413960,
        "linux64": 31638005,
        "win": 20960584,
        "win64": 22477089,
        "mac": 49895416
    },
    "2013-01-03": {
        "linux": 28361601,
        "linux64": 31640095,
        "win": 20963976,
        "win64": 22466221,
        "mac": 49880145
    },
    "2013-01-04": {
        "linux": 28409073,
        "linux64": 31680589,
        "win": 20957992,
        "win64": 22461628,
        "mac": 49882156
    },
    "2013-01-05": {
        "linux": 28400390,
        "linux64": 31630906,
        "win": 20951760,
        "win64": 22463387,
        "mac": 49938447
    },
    "2013-01-06": {
        "linux": 28458106,
        "linux64": 31728546,
        "win": 20978176,
        "win64": 22498050,
        "mac": 50051145
    },
    "2013-01-07": {
        "linux": 28591766,
        "linux64": 31734106,
        "win": 21041064,
        "win64": 22555053,
        "mac": 50138927
    },
    "2013-01-08": {
        "win64": 21950816
    },
    "2013-01-09": {
        "linux": 28616186,
        "linux64": 31824955,
        "win": 21062216,
        "win64": 22092569,
        "mac": 50203575
    },
    "2013-01-10": {
        "linux": 28598208,
        "linux64": 31816893,
        "win": 21071304,
        "mac": 50214342
    },
    "2013-01-11": {
        "linux": 28593763,
        "linux64": 31828930,
        "win": 21081656,
        "mac": 50217805
    },
    "2013-01-12": {
        "linux": 28591289,
        "linux64": 31908685,
        "win": 21155208,
        "mac": 50363001
    },
    "2013-01-13": {
        "linux": 28594287,
        "linux64": 31919814,
        "win": 21153640,
        "mac": 50418711
    },
    "2013-01-14": {
        "linux": 28600143,
        "linux64": 32020959,
        "win": 21153208,
        "mac": 50433608
    }
};
