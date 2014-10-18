(function(window,undefined){var rootjQuery,readyList,document=window.document,location=window.location,navigator=window.navigator,_jQuery=window.jQuery,_$=window.$,core_push=Array.prototype.push,core_slice=Array.prototype.slice,core_indexOf=Array.prototype.indexOf,core_toString=Object.prototype.toString,core_hasOwn=Object.prototype.hasOwnProperty,core_trim=String.prototype.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery)},core_pnum=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,core_rnotwhite=/\S/,core_rspace=/\s+/,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return(letter+"").toUpperCase()},DOMContentLoaded=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready()}else if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready()}},class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this}if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this}if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]}else{match=rquickExpr.exec(selector)}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=context&&context.nodeType?context.ownerDocument||context:document;selector=jQuery.parseHTML(match[1],doc,true);if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){this.attr.call(selector,context,true)}return jQuery.merge(this,selector)}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector)}this.length=1;this[0]=elem}this.context=document;this.selector=selector;return this}}else if(!context||context.jquery){return(context||rootjQuery).find(selector)}else{return this.constructor(context).find(selector)}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector)}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context}return jQuery.makeArray(selector,this)},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return core_slice.call(this)},get:function(num){return num==null?this.toArray():num<0?this[this.length+num]:this[num]},pushStack:function(elems,name,selector){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector}else if(name){ret.selector=this.selector+"."+name+"("+selector+")"}return ret},each:function(callback,args){return jQuery.each(this,callback,args)},ready:function(fn){jQuery.ready.promise().done(fn);return this},eq:function(i){i=+i;return i===-1?this.slice(i):this.slice(i,i+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(core_slice.apply(this,arguments),"slice",core_slice.call(arguments).join(","))},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},end:function(){return this.prevObject||this.constructor(null)},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}}if(length===i){target=this;--i}for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}return target};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}return jQuery},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++}else{jQuery.ready(true)}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return}if(!document.body){return setTimeout(jQuery.ready,1)}jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return}readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready")}},isFunction:function(obj){return jQuery.type(obj)==="function"},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array"},isWindow:function(obj){return obj!=null&&obj==obj.window},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj)},type:function(obj){return obj==null?String(obj):class2type[core_toString.call(obj)]||"object"},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false}try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}var key;for(key in obj){}return key===undefined||core_hasOwn.call(obj,key)},isEmptyObject:function(obj){var name;for(name in obj){return false}return true},error:function(msg){throw new Error(msg)},parseHTML:function(data,context,scripts){var parsed;if(!data||typeof data!=="string"){return null}if(typeof context==="boolean"){scripts=context;context=0}context=context||document;if(parsed=rsingleTag.exec(data)){return[context.createElement(parsed[1])]}parsed=jQuery.buildFragment([data],context,scripts?null:[]);return jQuery.merge([],(parsed.cacheable?jQuery.clone(parsed.fragment):parsed.fragment).childNodes)},parseJSON:function(data){if(!data||typeof data!=="string"){return null}data=jQuery.trim(data);if(window.JSON&&window.JSON.parse){return window.JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)()}jQuery.error("Invalid JSON: "+data)},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null}try{if(window.DOMParser){tmp=new DOMParser;xml=tmp.parseFromString(data,"text/xml")}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data)}}catch(e){xml=undefined}if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}return xml},noop:function(){},globalEval:function(data){if(data&&core_rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data)})(data)}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback,args){var name,i=0,length=obj.length,isObj=length===undefined||jQuery.isFunction(obj);if(args){if(isObj){for(name in obj){if(callback.apply(obj[name],args)===false){break}}}else{for(;i<length;){if(callback.apply(obj[i++],args)===false){break}}}}else{if(isObj){for(name in obj){if(callback.call(obj[name],name,obj[name])===false){break}}}else{for(;i<length;){if(callback.call(obj[i],i,obj[i++])===false){break}}}}return obj},trim:core_trim&&!core_trim.call("﻿ ")?function(text){return text==null?"":core_trim.call(text)}:function(text){return text==null?"":(text+"").replace(rtrim,"")},makeArray:function(arr,results){var type,ret=results||[];if(arr!=null){type=jQuery.type(arr);if(arr.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(arr)){core_push.call(ret,arr)}else{jQuery.merge(ret,arr)}}return ret},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i)}len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i}}}return-1},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j]}}else{while(second[j]!==undefined){first[i++]=second[j++]}}first.length=i;return first},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i])}}return ret},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&(length>0&&elems[0]&&elems[length-1]||length===0||jQuery.isArray(elems));if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value}}}else{for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value}}}return ret.concat.apply([],ret)},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}if(!jQuery.isFunction(fn)){return undefined}args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context,args.concat(core_slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy},access:function(elems,fn,key,value,chainable,emptyGet,pass){var exec,bulk=key==null,i=0,length=elems.length;if(key&&typeof key==="object"){for(i in key){jQuery.access(elems,fn,i,key[i],1,emptyGet,value)}chainable=1}else if(value!==undefined){exec=pass===undefined&&jQuery.isFunction(value);if(bulk){if(exec){exec=fn;fn=function(elem,key,value){return exec.call(jQuery(elem),value)}}else{fn.call(elems,value);fn=null}}if(fn){for(;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass)}}chainable=1}return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet},now:function(){return(new Date).getTime()}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready,1)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false)}else{document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var top=false;try{top=window.frameElement==null&&document.documentElement}catch(e){}if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left")}catch(e){return setTimeout(doScrollCheck,50)}jQuery.ready()}})()}}}return readyList.promise(obj)};jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});rootjQuery=jQuery(document);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.split(core_rspace),function(_,flag){object[flag]=true});return object}jQuery.Callbacks=function(options){options=typeof options==="string"?optionsCache[options]||createOptions(options):jQuery.extend({},options);var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break}}firing=false;if(list){if(stack){if(stack.length){fire(stack.shift())}}else if(memory){list=[]}else{self.disable()}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)}}else if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing){firingLength=list.length}else if(memory){firingStart=start;fire(memory)}}return this},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--}if(index<=firingIndex){firingIndex--}}}})}return this},has:function(fn){return jQuery.inArray(fn,list)>-1},empty:function(){list=[];return this},disable:function(){list=stack=memory=undefined;return this},disabled:function(){return!list},lock:function(){stack=undefined;if(!memory){self.disable()}return this},locked:function(){return!stack},fireWith:function(context,args){args=args||[];args=[context,args.slice?args.slice():args];if(list&&(!fired||stack)){if(firing){stack.push(args)}else{fire(args)}}return this},fire:function(){self.fireWith(this,arguments);return this},fired:function(){return!!fired}};return self};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state},always:function(){deferred.done(arguments).fail(arguments);return this},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=fns[i];deferred[tuple[1]](jQuery.isFunction(fn)?function(){var returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned])}}:newDefer[action])});fns=null}).promise()},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[i^1][2].disable,tuples[2][2].lock)}deferred[tuple[0]]=list.fire;deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}return deferred},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values)}else if(!--remaining){deferred.resolveWith(contexts,values)}}},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))}else{--remaining}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)}return deferred.promise()}});jQuery.support=function(){var support,all,a,select,opt,input,fragment,eventName,i,isSupported,clickFn,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!a||!all.length){return{}}select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support={leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.5/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:input.value==="on",optSelected:opt.selected,getSetAttribute:div.className!=="t",enctype:!!document.createElement("form").enctype,html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:document.compatMode==="CSS1Compat",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test}catch(e){support.deleteExpando=false}if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",clickFn=function(){support.noCloneEvent=false});div.cloneNode(true).fireEvent("onclick");div.detachEvent("onclick",clickFn)}input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.lastChild);support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;support.appendChecked=input.checked;fragment.removeChild(input);fragment.appendChild(div);if(div.attachEvent){for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;isSupported=eventName in div;if(!isSupported){div.setAttribute(eventName,"return;");isSupported=typeof div[eventName]==="function"}support[i+"Bubbles"]=isSupported}}jQuery(function(){var container,div,tds,marginDiv,divReset="padding:0;margin:0;border:0;display:block;overflow:hidden;",body=document.getElementsByTagName("body")[0];if(!body){return}container=document.createElement("div");container.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";body.insertBefore(container,body.firstChild);div=document.createElement("div");container.appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=tds[0].offsetHeight===0;tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&tds[0].offsetHeight===0;div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";support.boxSizing=div.offsetWidth===4;support.doesNotIncludeMarginInBodyOffset=body.offsetTop!==1;if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=document.createElement("div");marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";div.appendChild(marginDiv);support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight)}if(typeof div.style.zoom!=="undefined"){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=div.offsetWidth===3;div.style.display="block";div.style.overflow="visible";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=div.offsetWidth!==3;container.style.zoom=1}body.removeChild(container);container=div=tds=marginDiv=null});fragment.removeChild(div);all=a=select=opt=input=fragment=div=null;return support}();var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem)},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return}var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||!pvt&&!cache[id].data)&&getByName&&data===undefined){return}if(!id){if(isNode){elem[internalKey]=id=jQuery.deletedIds.pop()||jQuery.guid++}else{id=internalKey}}if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop}}if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name)}else{cache[id].data=jQuery.extend(cache[id].data,name)}}thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={}}thisCache=thisCache.data}if(data!==undefined){thisCache[jQuery.camelCase(name)]=data}if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)]}}else{ret=thisCache}return ret},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return}var thisCache,i,l,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return}if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name]}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name]}else{name=name.split(" ")}}}for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]]}if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return}}}if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return}}if(isNode){jQuery.cleanData([elem],true)}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id]}else{cache[id]=null}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true)},acceptData:function(elem){var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData}});jQuery.fn.extend({data:function(key,value){var parts,part,attr,name,l,elem=this[0],i=0,data=null;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attr=elem.attributes;for(l=attr.length;i<l;i++){name=attr[i].name;if(!name.indexOf("data-")){name=jQuery.camelCase(name.substring(5));dataAttr(elem,name,data[name])}}jQuery._data(elem,"parsedAttrs",true)}}return data}if(typeof key==="object"){return this.each(function(){jQuery.data(this,key)})}parts=key.split(".",2);parts[1]=parts[1]?"."+parts[1]:"";part=parts[1]+"!";return jQuery.access(this,function(value){if(value===undefined){data=this.triggerHandler("getData"+part,[parts[0]]);if(data===undefined&&elem){data=jQuery.data(elem,key);data=dataAttr(elem,key,data)}return data===undefined&&parts[1]?this.data(parts[0]):data}parts[1]=value;this.each(function(){var self=jQuery(this);self.triggerHandler("setData"+part,parts);jQuery.data(this,key,value);self.triggerHandler("changeData"+part,parts)})},null,value,arguments.length>1,null,false)},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)})}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data}catch(e){}jQuery.data(elem,key,data)}else{data=undefined}}return data}function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue}if(name!=="toJSON"){return false}}return true}jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data))}else{queue.push(data)}}return queue||[]}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}if(fn){if(type==="fx"){queue.unshift("inprogress")}delete hooks.stop;fn.call(elem,next,hooks)}if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery.removeData(elem,type+"queue",true);jQuery.removeData(elem,key,true)})})}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}if(arguments.length<setter){return jQuery.queue(this[0],type)}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout)}})},clearQueue:function(type){return this.queue(type||"fx",[])},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!--count){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}resolve();return defer.promise(obj)}});var nodeHook,boolHook,fixSpecified,rclass=/[\t\r\n]/g,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea|)$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name]}catch(e){}})},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))})}if(value&&typeof value==="string"){classNames=value.split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(setClass.indexOf(" "+classNames[c]+" ")<0){setClass+=classNames[c]+" "}}elem.className=jQuery.trim(setClass)}}}}return this},removeClass:function(value){var removes,className,elem,c,cl,i,l;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))})}if(value&&typeof value==="string"||value===undefined){removes=(value||"").split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=removes.length;c<cl;c++){while(className.indexOf(" "+removes[c]+" ")>=0){className=className.replace(" "+removes[c]+" "," ")}}elem.className=value?jQuery.trim(className):""}}}return this},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)})}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(core_rspace);while(className=classNames[i++]){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className)}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)}this.className=this.className||value===false?"":jQuery._data(this,"__className__")||""}})},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true}}return false},val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}return}isFunction=jQuery.isFunction(value);return this.each(function(i){var val,self=jQuery(this);if(this.nodeType!==1){return}if(isFunction){val=value.call(this,i,self.val())}else{val=value}if(val==null){val=""}else if(typeof val==="number"){val+=""}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""})}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}values.push(value)}}return values},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0});if(!values.length){elem.selectedIndex=-1}return values}}},attrFn:{},attr:function(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}if(pass&&jQuery.isFunction(jQuery.fn[name])){return jQuery(elem)[name](value)}if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value)}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook)}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return}else if(hooks&&"set"in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret}else{elem.setAttribute(name,value+"");return value}}else if(hooks&&"get"in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret}else{ret=elem.getAttribute(name);return ret===null?undefined:ret}},removeAttr:function(elem,value){var propName,attrNames,name,isBool,i=0;if(value&&elem.nodeType===1){attrNames=value.split(core_rspace);for(;i<attrNames.length;i++){name=attrNames[i];if(name){propName=jQuery.propFix[name]||name;isBool=rboolean.test(name);if(!isBool){jQuery.attr(elem,name,"")}elem.removeAttribute(getSetAttribute?name:propName);if(isBool&&propName in elem){elem[propName]=false}}}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed")
}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}return value}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name)}return name in elem?elem.value:null},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name)}elem.value=value}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}else{return elem[name]=value}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret}else{return elem[name]}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined}}}});boolHook={get:function(elem,name){var attrNode,property=jQuery.prop(elem,name);return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined},set:function(elem,value,name){var propName;if(value===false){jQuery.removeAttr(elem,name)}else{propName=jQuery.propFix[name]||name;if(propName in elem){elem[propName]=true}elem.setAttribute(name,name.toLowerCase())}return name}};if(!getSetAttribute){fixSpecified={name:true,id:true,coords:true};nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&(fixSpecified[name]?ret.value!=="":ret.specified)?ret.value:undefined},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret)}return ret.value=value+""}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value}}})});jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){if(value===""){value="false"}nodeHook.set(elem,value,name)}}}if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret}})})}if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined},set:function(elem,value){return elem.style.cssText=value+""}}}if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex}}return null}})}if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding"}if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value}}})}jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0}}})});var rformElems=/^(?:textarea|input|select)$/i,rtypenamespace=/^([^\.]*|)(?:\.(.+)|)$/,rhoverHack=/(?:^|\s)hover(\.\S+|)\b/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,hoverHack=function(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1")};jQuery.event={add:function(elem,types,handler,data,selector){var elemData,eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,handlers,special;if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return}if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}if(!handler.guid){handler.guid=jQuery.guid++}events=elemData.events;if(!events){elemData.events=events={}}eventHandle=elemData.handle;if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined};eventHandle.elem=elem}types=jQuery.trim(hoverHack(types)).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=tns[1];namespaces=(tns[2]||"").split(".").sort();special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);handlers=events[type];if(!handlers){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle)}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)}else{handlers.push(handleObj)}jQuery.event.global[type]=true}elem=null},global:{},remove:function(elem,types,handler,selector,mappedTypes){var t,tns,type,origType,namespaces,origCount,j,events,special,eventType,handleObj,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return}types=jQuery.trim(hoverHack(types||"")).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=origType=tns[1];namespaces=tns[2];if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)}continue}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;eventType=events[type]||[];origCount=eventType.length;namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(j=0;j<eventType.length;j++){handleObj=eventType[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!namespaces||namespaces.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){eventType.splice(j--,1);if(handleObj.selector){eventType.delegateCount--}if(special.remove){special.remove.call(elem,handleObj)}}}if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)}delete events[type]}}if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery.removeData(elem,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(event,data,elem,onlyHandlers){if(elem&&(elem.nodeType===3||elem.nodeType===8)){return}var cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType,type=event.type||event,namespaces=[];if(rfocusMorph.test(type+jQuery.event.triggered)){return}if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true}if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return}event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);event.type=type;event.isTrigger=true;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;ontype=type.indexOf(":")<0?"on"+type:"";if(!elem){cache=jQuery.cache;for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true)}}return}event.result=undefined;if(!event.target){event.target=elem}data=data!=null?jQuery.makeArray(data):[];data.unshift(event);special=jQuery.event.special[type]||{};if(special.trigger&&special.trigger.apply(elem,data)===false){return}eventPath=[[elem,special.bindType||type]];if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;cur=rfocusMorph.test(bubbleType+type)?elem:elem.parentNode;for(old=elem;cur;cur=cur.parentNode){eventPath.push([cur,bubbleType]);old=cur}if(old===(elem.ownerDocument||document)){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType])}}for(i=0;i<eventPath.length&&!event.isPropagationStopped();i++){cur=eventPath[i][0];event.type=eventPath[i][1];handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data)}handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault()}}event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&(type!=="focus"&&type!=="blur"||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){old=elem[ontype];if(old){elem[ontype]=null}jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(old){elem[ontype]=old}}}}return event.result},dispatch:function(event){event=jQuery.event.fix(event||window.event);var i,j,cur,ret,selMatch,matched,matches,handleObj,sel,related,handlers=(jQuery._data(this,"events")||{})[event.type]||[],delegateCount=handlers.delegateCount,args=core_slice.call(arguments),run_all=!event.exclusive&&!event.namespace,special=jQuery.event.special[event.type]||{},handlerQueue=[];args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return}if(delegateCount&&!(event.button&&event.type==="click")){for(cur=event.target;cur!=this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){selMatch={};matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector;if(selMatch[sel]===undefined){selMatch[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}if(selMatch[sel]){matches.push(handleObj)}}if(matches.length){handlerQueue.push({elem:cur,matches:matches})}}}}if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)})}for(i=0;i<handlerQueue.length&&!event.isPropagationStopped();i++){matched=handlerQueue[i];event.currentTarget=matched.elem;for(j=0;j<matched.matches.length&&!event.isImmediatePropagationStopped();j++){handleObj=matched.matches[j];if(run_all||!event.namespace&&!handleObj.namespace||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;event.handleObj=handleObj;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation()}}}}}if(special.postDispatch){special.postDispatch.call(this,event)}return event.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode}return event}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement}if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0}return event}},fix:function(event){if(event[jQuery.expando]){return event}var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=jQuery.Event(originalEvent);for(i=copy.length;i;){prop=copy[--i];event[prop]=originalEvent[prop]}if(!event.target){event.target=originalEvent.srcElement||document}if(event.target.nodeType===3){event.target=event.target.parentNode}event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem)}else{jQuery.event.dispatch.call(elem,e)}if(e.isDefaultPrevented()){event.preventDefault()}}};jQuery.event.handle=jQuery.event.dispatch;jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]==="undefined"){elem[name]=null}elem.detachEvent(name,handle)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse}else{this.type=src}if(props){jQuery.extend(this,props)}this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true};function returnFalse(){return false}function returnTrue(){return true}jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation()},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector;if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}return ret}}});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false}jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"_submit_attached")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true});jQuery._data(form,"_submit_attached",true)}})},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true)}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false}jQuery.event.remove(this,"._submit")}}}if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false}jQuery.event.simulate("change",this,event,true)})}return false}jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"_change_attached")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true)}});jQuery._data(elem,"_change_attached",true)}})},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||elem.type!=="radio"&&elem.type!=="checkbox"){return event.handleObj.handler.apply(this,arguments)}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName)}}}if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true)}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true)}}}})}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}for(type in types){this.on(type,selector,data,types[type],one)}return this}if(data==null&&fn==null){fn=selector;data=selector=undefined}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;selector=undefined}}if(fn===false){fn=returnFalse}else if(!fn){return this}if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)})},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}return this}if(selector===false||typeof selector==="function"){fn=selector;selector=undefined}if(fn===false){fn=returnFalse}return this.each(function(){jQuery.event.remove(this,types,fn,selector)})},bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},live:function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this},die:function(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);return this},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true)}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false};toggler.guid=guid;while(i<args.length){args[i++].guid=guid}return this.click(toggler)},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null}return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)};if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks}if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks}});(function(window,undefined){var cachedruns,assertGetIdNotName,Expr,getText,isXML,contains,compile,sortOrder,hasDuplicate,outermostContext,baseHasDuplicate=true,strundefined="undefined",expando=("sizcache"+Math.random()).replace(".",""),Token=String,document=window.document,docElem=document.documentElement,dirruns=0,done=0,pop=[].pop,push=[].push,slice=[].slice,indexOf=[].indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i}}return-1},markFunction=function(fn,value){fn[expando]=value==null||value;return fn},createCache=function(){var cache={},keys=[];return markFunction(function(key,value){if(keys.push(key)>Expr.cacheLength){delete cache[keys.shift()]}return cache[key+" "]=value},cache)},classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),operators="([*^$|!~]?=)",attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:"+operators+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+attributes+")|[^:]|\\\\.)*|.*))\\)|)",pos=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([\\x20\\t\\r\\n\\f>+~])"+whitespace+"*"),rpseudo=new RegExp(pseudos),rquickExpr=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rnot=/^:not/,rsibling=/[\x20\t\r\n\f]*[+~]/,rendsWithNot=/:not\($/,rheader=/h\d/i,rinputs=/input|select|textarea|button/i,rbackslash=/\\(?!\\)/g,matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),NAME:new RegExp("^\\[name=['\"]?("+characterEncoding+")['\"]?\\]"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),POS:new RegExp(pos,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|"+pos,"i")},assert=function(fn){var div=document.createElement("div");try{return fn(div)}catch(e){return false}finally{div=null}},assertTagNameNoComments=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length}),assertHrefNotNormalized=assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild&&typeof div.firstChild.getAttribute!==strundefined&&div.firstChild.getAttribute("href")==="#"}),assertAttributes=assert(function(div){div.innerHTML="<select></select>";var type=typeof div.lastChild.getAttribute("multiple");return type!=="boolean"&&type!=="string"}),assertUsableClassName=assert(function(div){div.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!div.getElementsByClassName||!div.getElementsByClassName("e").length){return false}div.lastChild.className="e";return div.getElementsByClassName("e").length===2}),assertUsableName=assert(function(div){div.id=expando+0;div.innerHTML="<a name='"+expando+"'></a><div name='"+expando+"'></div>";docElem.insertBefore(div,docElem.firstChild);var pass=document.getElementsByName&&document.getElementsByName(expando).length===2+document.getElementsByName(expando+0).length;assertGetIdNotName=!document.getElementById(expando);docElem.removeChild(div);return pass});try{slice.call(docElem.childNodes,0)[0].nodeType}catch(e){slice=function(i){var elem,results=[];for(;elem=this[i];i++){results.push(elem)}return results}}function Sizzle(selector,context,results,seed){results=results||[];context=context||document;var match,elem,xml,m,nodeType=context.nodeType;if(!selector||typeof selector!=="string"){return results}if(nodeType!==1&&nodeType!==9){return[]}xml=isXML(context);if(!xml&&!seed){if(match=rquickExpr.exec(selector)){if(m=match[1]){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results}}else{return results}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}}else if(match[2]){push.apply(results,slice.call(context.getElementsByTagName(selector),0));return results}else if((m=match[3])&&assertUsableClassName&&context.getElementsByClassName){push.apply(results,slice.call(context.getElementsByClassName(m),0));return results}}}return select(selector.replace(rtrim,"$1"),context,results,seed,xml)}Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){return Sizzle(expr,null,null,[elem]).length>0};function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j])}}})})}getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(nodeType){if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}}else if(nodeType===3||nodeType===4){return elem.nodeValue}}else{for(;node=elem[i];i++){ret+=getText(node)}}return ret};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};contains=Sizzle.contains=docElem.contains?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&adown.contains&&adown.contains(bup))}:docElem.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode){if(b===a){return true}}return false};Sizzle.attr=function(elem,name){var val,xml=isXML(elem);if(!xml){name=name.toLowerCase()}if(val=Expr.attrHandle[name]){return val(elem)}if(xml||assertAttributes){return elem.getAttribute(name)}val=elem.getAttributeNode(name);return val?typeof elem[name]==="boolean"?elem[name]?name:null:val.specified?val.value:null:null};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:assertHrefNotNormalized?{}:{href:function(elem){return elem.getAttribute("href",2)},type:function(elem){return elem.getAttribute("type")}},find:{ID:assertGetIdNotName?function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m&&m.parentNode?[m]:[]}}:function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m?m.id===id||typeof m.getAttributeNode!==strundefined&&m.getAttributeNode("id").value===id?[m]:undefined:[]}},TAG:assertTagNameNoComments?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag)}}:function(tag,context){var results=context.getElementsByTagName(tag);if(tag==="*"){var elem,tmp=[],i=0;for(;elem=results[i];i++){if(elem.nodeType===1){tmp.push(elem)}}return tmp}return results},NAME:assertUsableName&&function(tag,context){if(typeof context.getElementsByName!==strundefined){return context.getElementsByName(name)}},CLASS:assertUsableClassName&&function(className,context,xml){if(typeof context.getElementsByClassName!==strundefined&&!xml){return context.getElementsByClassName(className)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(rbackslash,"");match[3]=(match[4]||match[5]||"").replace(rbackslash,"");if(match[2]==="~="){match[3]=" "+match[3]+" "}return match.slice(0,4)},CHILD:function(match){match[1]=match[1].toLowerCase();if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0])}match[3]=+(match[3]?match[4]+(match[5]||1):2*(match[2]==="even"||match[2]==="odd"));match[4]=+(match[6]+match[7]||match[2]==="odd")}else if(match[2]){Sizzle.error(match[0])}return match},PSEUDO:function(match){var unquoted,excess;if(matchExpr["CHILD"].test(match[0])){return null}if(match[3]){match[2]=match[3]}else if(unquoted=match[4]){if(rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){unquoted=unquoted.slice(0,excess);match[0]=match[0].slice(0,excess)}match[2]=unquoted}return match.slice(0,3)}},filter:{ID:assertGetIdNotName?function(id){id=id.replace(rbackslash,"");return function(elem){return elem.getAttribute("id")===id}}:function(id){id=id.replace(rbackslash,"");return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===id}},TAG:function(nodeName){if(nodeName==="*"){return function(){return true}}nodeName=nodeName.replace(rbackslash,"").toLowerCase();return function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(className){var pattern=classCache[expando][className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")})},ATTR:function(name,operator,check){return function(elem,context){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}if(!operator){return true}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.substr(result.length-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.substr(0,check.length+1)===check+"-":false}},CHILD:function(type,argument,first,last){if(type==="nth"){return function(elem){var node,diff,parent=elem.parentNode;if(first===1&&last===0){return true}if(parent){diff=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){diff++;
if(elem===node){break}}}}diff-=last;return diff===first||diff%first===0&&diff/first>=0}}return function(elem){var node=elem;switch(type){case"only":case"first":while(node=node.previousSibling){if(node.nodeType===1){return false}}if(type==="first"){return true}node=elem;case"last":while(node=node.nextSibling){if(node.nodeType===1){return false}}return true}}},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(elem){return fn(elem,0,args)}}return fn}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem)}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop()}}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),enabled:function(elem){return elem.disabled===false},disabled:function(elem){return elem.disabled===true},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}return elem.selected===true},parent:function(elem){return!Expr.pseudos["empty"](elem)},empty:function(elem){var nodeType;elem=elem.firstChild;while(elem){if(elem.nodeName>"@"||(nodeType=elem.nodeType)===3||nodeType===4){return false}elem=elem.nextSibling}return true},header:function(elem){return rheader.test(elem.nodeName)},text:function(elem){var type,attr;return elem.nodeName.toLowerCase()==="input"&&(type=elem.type)==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===type)},radio:createInputPseudo("radio"),checkbox:createInputPseudo("checkbox"),file:createInputPseudo("file"),password:createInputPseudo("password"),image:createInputPseudo("image"),submit:createButtonPseudo("submit"),reset:createButtonPseudo("reset"),button:function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},input:function(elem){return rinputs.test(elem.nodeName)},focus:function(elem){var doc=elem.ownerDocument;return elem===doc.activeElement&&(!doc.hasFocus||doc.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},active:function(elem){return elem===elem.ownerDocument.activeElement},first:createPositionalPseudo(function(){return[0]}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),even:createPositionalPseudo(function(matchIndexes,length){for(var i=0;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){for(var i=1;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;--i>=0;){matchIndexes.push(i)}return matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;++i<length;){matchIndexes.push(i)}return matchIndexes})}};function siblingCheck(a,b,ret){if(a===b){return ret}var cur=a.nextSibling;while(cur){if(cur===b){return-1}cur=cur.nextSibling}return 1}sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0}return(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b){hasDuplicate=true;return 0}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex}var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(aup===bup){return siblingCheck(a,b)}else if(!aup){return-1}else if(!bup){return 1}while(cur){ap.unshift(cur);cur=cur.parentNode}cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode}al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i])}}return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1)};[0,0].sort(sortOrder);baseHasDuplicate=!hasDuplicate;Sizzle.uniqueSort=function(results){var elem,duplicates=[],i=1,j=0;hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(;elem=results[i];i++){if(elem===results[i-1]){j=duplicates.push(i)}}while(j--){results.splice(duplicates[j],1)}}return results};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[expando][selector+" "];if(cached){return parseOnly?0:cached.slice(0)}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}groups.push(tokens=[])}matched=false;if(match=rcombinators.exec(soFar)){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=match[0].replace(rtrim," ")}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=type;matched.matches=match}}if(!matched){break}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&combinator.dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while(elem=elem[dir]){if(checkNonElements||elem.nodeType===1){return matcher(elem,context,xml)}}}:function(elem,context,xml){if(!xml){var cache,dirkey=dirruns+" "+doneName+" ",cachedkey=dirkey+cachedruns;while(elem=elem[dir]){if(checkNonElements||elem.nodeType===1){if((cache=elem[expando])===cachedkey){return elem.sizset}else if(typeof cache==="string"&&cache.indexOf(dirkey)===0){if(elem.sizset){return elem}}else{elem[expando]=cachedkey;if(matcher(elem,context,xml)){elem.sizset=true;return elem}elem.sizset=false}}}}else{while(elem=elem[dir]){if(checkNonElements||elem.nodeType===1){if(matcher(elem,context,xml)){return elem}}}}}}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false}}return true}:matchers[0]}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}return newUnmatched}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){temp.push(matcherIn[i]=elem)}}postFinder(null,matcherOut=[],temp,xml)}i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)}else{push.apply(results,matcherOut)}}})}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1},implicitRelative,true),matchers=[function(elem,context,xml){return!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml))}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&tokens.slice(0,i-1).join("").replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&tokens.join(""))}matchers.push(matcher)}}return elementMatcher(matchers)}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=dirruns+=contextBackup==null?1:Math.E;if(outermost){outermostContext=context!==document&&context;cachedruns=superMatcher.el}for(;(elem=elems[i])!=null;i++){if(byElement&&elem){for(j=0;matcher=elementMatchers[j];j++){if(matcher(elem,context,xml)){results.push(elem);break}}if(outermost){dirruns=dirrunsUnique;cachedruns=++superMatcher.el}}if(bySet){if(elem=!matcher&&elem){matchedCount--}if(seed){unmatched.push(elem)}}}matchedCount+=i;if(bySet&&i!==matchedCount){for(j=0;matcher=setMatchers[j];j++){matcher(unmatched,setMatched,context,xml)}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}setMatched=condense(setMatched)}push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results)}}if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}return unmatched};superMatcher.el=0;return bySet?markFunction(superMatcher):superMatcher}compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[expando][selector+" "];if(!cached){if(!group){group=tokenize(selector)}i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached)}else{elementMatchers.push(cached)}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers))}return cached};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}return results}function select(selector,context,results,seed,xml){var i,tokens,token,type,find,match=tokenize(selector),j=match.length;if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&!xml&&Expr.relative[tokens[1].type]){context=Expr.find["ID"](token.matches[0].replace(rbackslash,""),context,xml)[0];if(!context){return results}selector=selector.slice(tokens.shift().length)}for(i=matchExpr["POS"].test(selector)?-1:tokens.length-1;i>=0;i--){token=tokens[i];if(Expr.relative[type=token.type]){break}if(find=Expr.find[type]){if(seed=find(token.matches[0].replace(rbackslash,""),rsibling.test(tokens[0].type)&&context.parentNode||context,xml)){tokens.splice(i,1);selector=seed.length&&tokens.join("");if(!selector){push.apply(results,slice.call(seed,0));return results}break}}}}}compile(selector,match)(seed,context,xml,results,rsibling.test(selector));return results}if(document.querySelectorAll){(function(){var disconnectedMatch,oldSelect=select,rescape=/'|\\/g,rattributeQuotes=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,rbuggyQSA=[":focus"],rbuggyMatches=[":active"],matches=docElem.matchesSelector||docElem.mozMatchesSelector||docElem.webkitMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector;assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}});assert(function(div){div.innerHTML="<p test=''></p>";if(div.querySelectorAll("[test^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:\"\"|'')")}div.innerHTML="<input type='hidden'/>";if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")}});rbuggyQSA=new RegExp(rbuggyQSA.join("|"));select=function(selector,context,results,seed,xml){if(!seed&&!xml&&!rbuggyQSA.test(selector)){var groups,i,old=true,nid=expando,newContext=context,newSelector=context.nodeType===9&&selector;if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if(old=context.getAttribute("id")){nid=old.replace(rescape,"\\$&")}else{context.setAttribute("id",nid)}nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+groups[i].join("")}newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",")}if(newSelector){try{push.apply(results,slice.call(newContext.querySelectorAll(newSelector),0));return results}catch(qsaError){}finally{if(!old){context.removeAttribute("id")}}}}return oldSelect(selector,context,results,seed,xml)};if(matches){assert(function(div){disconnectedMatch=matches.call(div,"div");try{matches.call(div,"[test!='']:sizzle");rbuggyMatches.push("!=",pseudos)}catch(e){}});rbuggyMatches=new RegExp(rbuggyMatches.join("|"));Sizzle.matchesSelector=function(elem,expr){expr=expr.replace(rattributeQuotes,"='$1']");if(!isXML(elem)&&!rbuggyMatches.test(expr)&&!rbuggyQSA.test(expr)){try{var ret=matches.call(elem,expr);if(ret||disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}}catch(e){}}return Sizzle(expr,null,null,[elem]).length>0}}})()}Expr.pseudos["nth"]=Expr.pseudos["eq"];function setFilters(){}Expr.filters=setFilters.prototype=Expr.pseudos;Expr.setFilters=new setFilters;Sizzle.attr=jQuery.attr;jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains})(window);var runtil=/Until$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,isSimple=/^.[^:#\[\.,]*$/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,l,length,n,r,ret,self=this;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true}}})}ret=this.pushStack("","find",selector);for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break}}}}}return ret},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true}}})},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector)},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector)},is:function(selector){return!!selector&&(typeof selector==="string"?rneedsContext.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0)},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){cur=this[i];while(cur&&cur.ownerDocument&&cur!==context&&cur.nodeType!==11){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break}cur=cur.parentNode}}ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors)},index:function(elem){if(!elem){return this[0]&&this[0].parentNode?this.prevAll().length:-1}if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem))}return jQuery.inArray(elem.jquery?elem[0]:elem,this)},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all))},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});jQuery.fn.andSelf=jQuery.fn.addBack;function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11}function sibling(cur,dir){do{cur=cur[dir]}while(cur&&cur.nodeType!==1);return cur}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents:function(elem){return jQuery.dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children:function(elem){return jQuery.sibling(elem.firstChild)},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until}if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret)}ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if(this.length>1&&rparentsprev.test(name)){ret=ret.reverse()}return this.pushStack(ret,name,core_slice.call(arguments).join(","))}});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")"}return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems)},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur)}cur=cur[dir]}return matched},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n)}}return r}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep})}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return elem===qualifier===keep})}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep)}else{qualifier=jQuery.filter(qualifier,filtered)}}return jQuery.grep(elements,function(elem,i){return jQuery.inArray(elem,qualifier)>=0===keep})}function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop())}}return safeFrag}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rcheckableType=/^(?:checkbox|radio)$/,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"X<div>","</div>"]}jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value))},null,value,arguments.length)},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0])}wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild}return elem}).append(this)}return this},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.appendChild(elem)}})},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.insertBefore(elem,this.firstChild)}})},before:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this)})}if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(set,this),"before",this.selector)}},after:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling)})}if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(this,set),"after",this.selector)}},remove:function(selector,keepData){var elem,i=0;for(;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem])}if(elem.parentNode){elem.parentNode.removeChild(elem)}}}return this},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"))}while(elem.firstChild){elem.removeChild(elem.firstChild)}}return this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));elem.innerHTML=value}}elem=0}catch(e){}}if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith:function(value){if(!isDisconnected(this[0])){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old))})}if(typeof value!=="string"){value=jQuery(value).detach()}return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value)}else{jQuery(parent).append(value)}})}return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this},detach:function(selector){return this.remove(selector,true)},domManip:function(args,table,callback){args=[].concat.apply([],args);var results,first,fragment,iNoClone,i=0,value=args[0],scripts=[],l=this.length;if(!jQuery.support.checkClone&&l>1&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback)})}if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback)})}if(this[0]){results=jQuery.buildFragment(args,this,scripts);fragment=results.fragment;first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}if(first){table=table&&jQuery.nodeName(first,"tr");for(iNoClone=results.cacheable||l-1;i<l;i++){callback.call(table&&jQuery.nodeName(this[i],"table")?findOrAppend(this[i],"tbody"):this[i],i===iNoClone?fragment:jQuery.clone(fragment,true,true))}}fragment=first=null;if(scripts.length){jQuery.each(scripts,function(i,elem){if(elem.src){if(jQuery.ajax){jQuery.ajax({url:elem.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{jQuery.error("no ajax")}}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,""))}if(elem.parentNode){elem.parentNode.removeChild(elem)}})}}return this}});function findOrAppend(elem,tag){return elem.getElementsByTagName(tag)[0]||elem.appendChild(elem.ownerDocument.createElement(tag))}function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}if(curData.data){curData.data=jQuery.extend({},curData.data)}}function cloneFixAttributes(src,dest){var nodeName;if(dest.nodeType!==1){return}if(dest.clearAttributes){dest.clearAttributes()}if(dest.mergeAttributes){dest.mergeAttributes(src)}nodeName=dest.nodeName.toLowerCase();if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML}if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value}}else if(nodeName==="option"){dest.selected=src.defaultSelected}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}else if(nodeName==="script"&&dest.text!==src.text){dest.text=src.text}dest.removeAttribute(jQuery.expando)}jQuery.buildFragment=function(args,context,scripts){var fragment,cacheable,cachehit,first=args[0];context=context||document;context=!context.nodeType&&context[0]||context;context=context.ownerDocument||context;if(args.length===1&&typeof first==="string"&&first.length<512&&context===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(jQuery.support.html5Clone||!rnoshimcache.test(first))){cacheable=true;fragment=jQuery.fragments[first];cachehit=fragment!==undefined}if(!fragment){fragment=context.createDocumentFragment();jQuery.clean(args,context,fragment,scripts);if(cacheable){jQuery.fragments[first]=cachehit&&fragment}}return{fragment:fragment,cacheable:cacheable}};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),l=insert.length,parent=this.length===1&&this[0].parentNode;if((parent==null||parent&&parent.nodeType===11&&parent.childNodes.length===1)&&l===1){insert[original](this[0]);return this}else{for(;i<l;i++){elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems)}return this.pushStack(ret,name,insert.selector)}}});function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*")}else if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*")}else{return[]}}function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var srcElements,destElements,i,clone;if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true)}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild)}if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i])}}}if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i])}}}srcElements=destElements=null;return clone},clean:function(elems,context,fragment,scripts){var i,j,elem,tag,wrap,depth,div,hasBody,tbody,len,handleScript,jsTags,safe=context===document&&safeFragment,ret=[];if(!context||typeof context.createDocumentFragment==="undefined"){context=document}for(i=0;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+=""}if(!elem){continue}if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem)}else{safe=safe||createSafeFragment(context);div=context.createElement("div");safe.appendChild(div);elem=elem.replace(rxhtmlTag,"<$1></$2>");tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;depth=wrap[0];div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild
}if(!jQuery.support.tbody){hasBody=rtbody.test(elem);tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j])}}}if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild)}elem=div.childNodes;div.parentNode.removeChild(div)}}if(elem.nodeType){ret.push(elem)}else{jQuery.merge(ret,elem)}}if(div){elem=div=safe=null}if(!jQuery.support.appendChecked){for(i=0;(elem=ret[i])!=null;i++){if(jQuery.nodeName(elem,"input")){fixDefaultChecked(elem)}else if(typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked)}}}if(fragment){handleScript=function(elem){if(!elem.type||rscriptType.test(elem.type)){return scripts?scripts.push(elem.parentNode?elem.parentNode.removeChild(elem):elem):fragment.appendChild(elem)}};for(i=0;(elem=ret[i])!=null;i++){if(!(jQuery.nodeName(elem,"script")&&handleScript(elem))){fragment.appendChild(elem);if(typeof elem.getElementsByTagName!=="undefined"){jsTags=jQuery.grep(jQuery.merge([],elem.getElementsByTagName("script")),handleScript);ret.splice.apply(ret,[i+1,0].concat(jsTags));i+=jsTags.length}}}}return ret},cleanData:function(elems,acceptData){var data,id,elem,type,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.removeEvent(elem,type,data.handle)}}}if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey]}else if(elem.removeAttribute){elem.removeAttribute(internalKey)}else{elem[internalKey]=null}jQuery.deletedIds.push(id)}}}}}});(function(){var matched,browser;jQuery.uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"}};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome){browser.webkit=true}else if(browser.webkit){browser.safari=true}jQuery.browser=browser;jQuery.sub=function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context)}jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context)}return jQuery.fn.init.call(this,selector,context,rootjQuerySub)};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub}})();var curCSS,iframe,iframeDoc,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([-+])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"],eventsToggle=jQuery.fn.toggle;function vendorPropName(style,name){if(name in style){return name}var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name}}return origName}function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)}function showHide(elements,show){var elem,display,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}values[index]=jQuery._data(elem,"olddisplay");if(show){if(!values[index]&&elem.style.display==="none"){elem.style.display=""}if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName))}}else{display=curCSS(elem,"display");if(!values[index]&&display!=="none"){jQuery._data(elem,"olddisplay",display)}}}for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"}}return elements}jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show:function(){return showHide(this,true)},hide:function(){return showHide(this)},toggle:function(state,fn2){var bool=typeof state==="boolean";if(jQuery.isFunction(state)&&jQuery.isFunction(fn2)){return eventsToggle.apply(this,arguments)}return this.each(function(){if(bool?state:isHidden(this)){jQuery(this).show()}else{jQuery(this).hide()}})}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number"}if(value==null||type==="number"&&isNaN(value)){return}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"}if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret}return style[name]}},css:function(elem,name,numeric,extra){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra)}if(val===undefined){val=curCSS(elem,name)}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}if(numeric||extra!==undefined){num=parseFloat(val);return numeric||jQuery.isNumeric(num)?num||0:val}return val},swap:function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}ret=callback.call(elem);for(name in options){elem.style[name]=old[name]}return ret}});if(window.getComputedStyle){curCSS=function(elem,name){var ret,width,minWidth,maxWidth,computed=window.getComputedStyle(elem,null),style=elem.style;if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}return ret}}else if(document.documentElement.currentStyle){curCSS=function(elem,name){var left,rsLeft,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style;if(ret==null&&style&&style[name]){ret=style[name]}if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left}style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft}}return ret===""?"auto":ret}}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}function augmentWidthOrHeight(elem,name,extra,isBorderBox){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true)}if(isBorderBox){if(extra==="content"){val-=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0}if(extra!=="margin"){val-=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0}}else{val+=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0;if(extra!=="padding"){val+=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0}}}return val}function getWidthOrHeight(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,valueIsBorderBox=true,isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box";if(val<=0||val==null){val=curCSS(elem,name);if(val<0||val==null){val=elem.style[name]}if(rnumnonpx.test(val)){return val}valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0}return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox)+"px"}function css_defaultDisplay(nodeName){if(elemdisplay[nodeName]){return elemdisplay[nodeName]}var elem=jQuery("<"+nodeName+">").appendTo(document.body),display=elem.css("display");elem.remove();if(display==="none"||display===""){iframe=document.body.appendChild(iframe||jQuery.extend(document.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write("<!doctype html><html><body>");iframeDoc.close()}elem=iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));display=curCSS(elem,"display");document.body.removeChild(iframe)}elemdisplay[nodeName]=display;return display}jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){if(elem.offsetWidth===0&&rdisplayswap.test(curCSS(elem,"display"))){return jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)})}else{return getWidthOrHeight(elem,name,extra)}}},set:function(elem,value,extra){return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box"):0)}}});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":computed?"1":""},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(currentStyle&&!currentStyle.filter){return}}style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity}}}jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){return jQuery.swap(elem,{display:"inline-block"},function(){if(computed){return curCSS(elem,"marginRight")}})}}}if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){var ret=curCSS(elem,prop);return rnumnonpx.test(ret)?jQuery(elem).position()[prop]+"px":ret}}}})}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth===0&&elem.offsetHeight===0||!jQuery.support.reliableHiddenOffsets&&(elem.style&&elem.style.display||curCSS(elem,"display"))==="none"};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem)}}jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i,parts=typeof value==="string"?value.split(" "):[value],expanded={};for(i=0;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}return expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rselectTextarea=/^(?:select|textarea)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){jQuery.each(a,function(){add(this.name,this.value)})}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}return s.join("&").replace(r20,"+")};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{add(prefix,obj)}}var ajaxLocParts,ajaxLocation,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes=["*/"]+["*"];try{ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}var dataType,list,placeBefore,dataTypes=dataTypeExpression.toLowerCase().split(core_rspace),i=0,length=dataTypes.length;if(jQuery.isFunction(func)){for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*"}list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func)}}}}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var selection,list=structure[dataType],i=0,length=list?list.length:0,executeOnly=structure===prefilters;for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected)}}}if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected)}return selection}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key]}}if(deep){jQuery.extend(true,target,deep)}}jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)}if(!this.length){return this}var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off)}if(jQuery.isFunction(params)){callback=params;params=undefined}else if(params&&typeof params==="object"){type="POST"}jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status){if(callback){self.each(callback,response||[jqXHR.responseText,status,jqXHR])}}}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText)});return this};jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.on(o,f)}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined}return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type})}});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings)}else{settings=target;target=jQuery.ajaxSettings}ajaxExtend(target,settings);return target},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined}options=options||{};var ifModifiedKey,responseHeadersString,responseHeaders,transport,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value}return this},getAllResponseHeaders:function(){return state===2?responseHeadersString:null},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2]}}match=responseHeaders[key.toLowerCase()]}return match===undefined?null:match},overrideMimeType:function(type){if(!state){s.mimeType=type}return this},abort:function(statusText){statusText=statusText||strAbort;if(transport){transport.abort(statusText)}done(0,statusText);return this}};function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return}state=2;if(timeoutTimer){clearTimeout(timeoutTimer)}transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}if(status>=200&&status<300||status===304){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[ifModifiedKey]=modified}modified=jqXHR.getResponseHeader("Etag");if(modified){jQuery.etag[ifModifiedKey]=modified}}if(status===304){statusText="notmodified";isSuccess=true}else{isSuccess=ajaxConvert(s,response);statusText=isSuccess.state;success=isSuccess.data;error=isSuccess.error;isSuccess=!error}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0}}}jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error])}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!--jQuery.active){jQuery.event.trigger("ajaxStop")}}}deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.add;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]]}}else{tmp=map[jqXHR.status];jqXHR.always(tmp)}}return this};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(core_rspace);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))))}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR}fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;delete s.data}ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+(ret===s.url?(rquery.test(s.url)?"&":"?")+"_="+ts:"")}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey])}if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey])}}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()}strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i])}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}try{state=1;transport.send(requestHeaders,done)}catch(e){if(state<2){done(-1,e)}else{throw e}}}return jqXHR},active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type]}}while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type")}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}if(dataTypes[0]in responses){finalDataType=dataTypes[0]}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}if(!firstDataType){firstDataType=type}}finalDataType=finalDataType||firstDataType}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}return responses[finalDataType]}}function ajaxConvert(s,response){var conv,conv2,current,tmp,dataTypes=s.dataTypes.slice(),prev=dataTypes[0],converters={},i=0;if(s.dataFilter){response=s.dataFilter(response,s.dataType)}if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}for(;current=dataTypes[++i];){if(current!=="*"){if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2]}else if(converters[conv2]!==true){current=tmp[0];dataTypes.splice(i--,0,current)}break}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)}else{try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}prev=current}}return{state:"success",data:response}}var oldCallbacks=[],rquestion=/\?/,rjsonp=/(=)\?(?=&|$)|\?\?/,nonce=jQuery.now();jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,data=s.data,url=s.url,hasCallback=s.jsonp!==false,replaceInUrl=hasCallback&&rjsonp.test(url),replaceInData=hasCallback&&!replaceInUrl&&typeof data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(data);if(s.dataTypes[0]==="jsonp"||replaceInUrl||replaceInData){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;overwritten=window[callbackName];if(replaceInUrl){s.url=url.replace(rjsonp,"$1"+callbackName)}else if(replaceInData){s.data=data.replace(rjsonp,"$1"+callbackName)}else if(hasCallback){s.url+=(rquestion.test(url)?"&":"?")+s.jsonp+"="+callbackName}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}return responseContainer[0]};s.dataTypes[0]="json";window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])}responseContainer=overwritten=undefined});return"script"}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false}if(s.crossDomain){s.type="GET";s.global=false}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset}script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script)}script=undefined;if(!isAbort){callback(200,"success")}}};head.insertBefore(script,head.firstChild)},abort:function(){if(script){script.onload(0,1)}}}}});var xhrCallbacks,xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1)}}:false,xhrId=0;function createStandardXHR(){try{return new window.XMLHttpRequest}catch(e){}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR()}:createStandardXHR;(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&"withCredentials"in xhr})})(jQuery.ajaxSettings.xhr());if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password)}else{xhr.open(s.type,s.url,s.async)}if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i]}}if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType)}if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}try{for(i in headers){xhr.setRequestHeader(i,headers[i])}}catch(_){}xhr.send(s.hasContent&&s.data||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle]}}if(isAbort){if(xhr.readyState!==4){xhr.abort()}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml}try{responses.text=xhr.responseText}catch(e){}try{statusText=xhr.statusText}catch(e){statusText=""}if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404}else if(status===1223){status=204}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException)}}if(responses){complete(status,statusText,responses,responseHeaders)}};if(!s.async){callback()}else if(xhr.readyState===4){setTimeout(callback,0)}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort)}xhrCallbacks[handle]=callback}xhr.onreadystatechange=callback}},abort:function(){if(callback){callback(0,1)}}}}})}var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([-+])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var end,unit,tween=this.createTween(prop,value),parts=rfxnum.exec(value),target=tween.cur(),start=+target||0,scale=1,maxIterations=20;if(parts){end=+parts[2];unit=parts[3]||(jQuery.cssNumber[prop]?"":"px");if(unit!=="px"&&start){start=jQuery.css(tween.elem,prop,true)||end||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)}tween.unit=unit;tween.start=start;tween.end=parts[1]?start+(parts[1]+1)*end:end}return tween}]};function createFxNow(){setTimeout(function(){fxNow=undefined},0);return fxNow=jQuery.now()}function createTweens(animation,props){jQuery.each(props,function(prop,value){var collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(collection[index].call(animation,prop,value)){return}}})}function Animation(elem,properties,options){var result,index=0,tweenerIndex=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem}),tick=function(){var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;
for(;index<length;index++){animation.tweens[index].run(percent)}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining}else{deferred.resolveWith(elem,[animation]);return false}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end,easing){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;for(;index<length;index++){animation.tweens[index].run(1)}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])}else{deferred.rejectWith(elem,[animation,gotoEnd])}return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result}}createTweens(animation,props);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}jQuery.fx.timer(jQuery.extend(tick,{anim:animation,queue:animation.opts.queue,elem:elem}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0]}if(index!==name){props[name]=value;delete props[index]}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}}else{specialEasing[name]=easing}}}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"]}else{props=props.split(" ")}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback)}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)}else{animationPrefilters.push(callback)}}});function defaultPrefilter(elem,props,opts){var index,prop,value,length,dataShow,toggle,tween,hooks,oldfire,anim=this,style=elem.style,orig={},handled=[],hidden=elem.nodeType&&isHidden(elem);if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block"}else{style.zoom=1}}}if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.done(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}}for(index in props){value=props[index];if(rfxtypes.exec(value)){delete props[index];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue}handled.push(index)}}length=handled.length;if(length){dataShow=jQuery._data(elem,"fxshow")||jQuery._data(elem,"fxshow",{});if("hidden"in dataShow){hidden=dataShow.hidden}if(toggle){dataShow.hidden=!hidden}if(hidden){jQuery(elem).show()}else{anim.done(function(){jQuery(elem).hide()})}anim.done(function(){var prop;jQuery.removeData(elem,"fxshow",true);for(prop in orig){jQuery.style(elem,prop,orig[prop])}});for(index=0;index<length;index++){prop=handled[index];tween=anim.createTween(prop,hidden?dataShow[prop]:0);orig[prop]=dataShow[prop]||jQuery.style(elem,prop);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0}}}}}function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)}else{this.pos=eased=percent}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(hooks&&hooks.set){hooks.set(this)}else{Tween.propHooks._default.set(this)}return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]}result=jQuery.css(tween.elem,tween.prop,false,"");return!result||result==="auto"?0:result},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"||!i&&jQuery.isFunction(speed)&&jQuery.isFunction(easing)?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)}});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty){anim.stop(true)}};return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}if(clearQueue&&type!==false){this.queue(type||"fx",[])}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1)}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}if(includeWidth){attrs.opacity=attrs.width=type}return attrs}jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx"}opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)}if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.easing={linear:function(p){return p},swing:function(p){return.5-Math.cos(p*Math.PI)/2}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}if(!timers.length){jQuery.fx.stop()}fxNow=undefined};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)&&!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.interval=13;jQuery.fx.stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length}}var rroot=/^(?:body|html)$/i;jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}var docElem,body,win,clientTop,clientLeft,scrollTop,scrollLeft,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return}if((body=doc.body)===elem){return jQuery.offset.bodyOffset(elem)}docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box}if(typeof elem.getBoundingClientRect!=="undefined"){box=elem.getBoundingClientRect()}win=getWindow(doc);clientTop=docElem.clientTop||body.clientTop||0;clientLeft=docElem.clientLeft||body.clientLeft||0;scrollTop=win.pageYOffset||docElem.scrollTop;scrollLeft=win.pageXOffset||docElem.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft}};jQuery.offset={bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0}return{top:top,left:left}},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative"}var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)}if(options.top!=null){props.top=options.top-curOffset.top+curTop}if(options.left!=null){props.left=options.left-curOffset.left+curLeft}if("using"in options){options.using.call(elem,props)}else{curElem.css(props)}}};jQuery.fn.extend({position:function(){if(!this[0]){return}var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent}return offsetParent||document.body})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?prop in win?win[prop]:win.document.documentElement[method]:elem[method]}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop())}else{elem[method]=val}},method,val,arguments.length,null)}});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false}jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]}if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}return value===undefined?jQuery.css(elem,type,value,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable,null)}})});window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery})}})(window);/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function($){var hasOwnProperty=Object.prototype.hasOwnProperty;if(!$.fn.detach){$.fn.detach=function(){return this.each(function(){if(this.parentNode){this.parentNode.removeChild(this)}})}}function Canvas(cls,container){var element=container.children("."+cls)[0];if(element==null){element=document.createElement("canvas");element.className=cls;$(element).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(container);if(!element.getContext){if(window.G_vmlCanvasManager){element=window.G_vmlCanvasManager.initElement(element)}else{throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")}}}this.element=element;var context=this.context=element.getContext("2d");var devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;this.pixelRatio=devicePixelRatio/backingStoreRatio;this.resize(container.width(),container.height());this.textContainer=null;this.text={};this._textCache={}}Canvas.prototype.resize=function(width,height){if(width<=0||height<=0){throw new Error("Invalid dimensions for plot, width = "+width+", height = "+height)}var element=this.element,context=this.context,pixelRatio=this.pixelRatio;if(this.width!=width){element.width=width*pixelRatio;element.style.width=width+"px";this.width=width}if(this.height!=height){element.height=height*pixelRatio;element.style.height=height+"px";this.height=height}context.restore();context.save();context.scale(pixelRatio,pixelRatio)};Canvas.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)};Canvas.prototype.render=function(){var cache=this._textCache;for(var layerKey in cache){if(hasOwnProperty.call(cache,layerKey)){var layer=this.getTextLayer(layerKey),layerCache=cache[layerKey];layer.hide();for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){if(position.active){if(!position.rendered){layer.append(position.element);position.rendered=true}}else{positions.splice(i--,1);if(position.rendered){position.element.detach()}}}if(positions.length==0){delete styleCache[key]}}}}}layer.show()}}};Canvas.prototype.getTextLayer=function(classes){var layer=this.text[classes];if(layer==null){if(this.textContainer==null){this.textContainer=$("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)}layer=this.text[classes]=$("<div></div>").addClass(classes).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)}return layer};Canvas.prototype.getTextInfo=function(layer,text,font,angle,width){var textStyle,layerCache,styleCache,info;text=""+text;if(typeof font==="object"){textStyle=font.style+" "+font.variant+" "+font.weight+" "+font.size+"px/"+font.lineHeight+"px "+font.family}else{textStyle=font}layerCache=this._textCache[layer];if(layerCache==null){layerCache=this._textCache[layer]={}}styleCache=layerCache[textStyle];if(styleCache==null){styleCache=layerCache[textStyle]={}}info=styleCache[text];if(info==null){var element=$("<div></div>").html(text).css({position:"absolute","max-width":width,top:-9999}).appendTo(this.getTextLayer(layer));if(typeof font==="object"){element.css({font:textStyle,color:font.color})}else if(typeof font==="string"){element.addClass(font)}info=styleCache[text]={width:element.outerWidth(true),height:element.outerHeight(true),element:element,positions:[]};element.detach()}return info};Canvas.prototype.addText=function(layer,x,y,text,font,angle,width,halign,valign){var info=this.getTextInfo(layer,text,font,angle,width),positions=info.positions;if(halign=="center"){x-=info.width/2}else if(halign=="right"){x-=info.width}if(valign=="middle"){y-=info.height/2}else if(valign=="bottom"){y-=info.height}for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=true;return}}position={active:true,rendered:false,element:positions.length?info.element.clone():info.element,x:x,y:y};positions.push(position);position.element.css({top:Math.round(y),left:Math.round(x),"text-align":halign})};Canvas.prototype.removeText=function(layer,x,y,text,font,angle){if(text==null){var layerCache=this._textCache[layer];if(layerCache!=null){for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){position.active=false}}}}}}}else{var positions=this.getTextInfo(layer,text,font,angle).positions;for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=false}}}};function Plot(placeholder,data_,options_,plugins){var series=[],options={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false,zero:true},shadowSize:3,highlightColor:null},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},surface=null,overlay=null,eventHolder=null,ctx=null,octx=null,xaxes=[],yaxes=[],plotOffset={left:0,right:0,top:0,bottom:0},plotWidth=0,plotHeight=0,hooks={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},plot=this;plot.setData=setData;plot.setupGrid=setupGrid;plot.draw=draw;plot.getPlaceholder=function(){return placeholder};plot.getCanvas=function(){return surface.element};plot.getPlotOffset=function(){return plotOffset};plot.width=function(){return plotWidth};plot.height=function(){return plotHeight};plot.offset=function(){var o=eventHolder.offset();o.left+=plotOffset.left;o.top+=plotOffset.top;return o};plot.getData=function(){return series};plot.getAxes=function(){var res={},i;$.each(xaxes.concat(yaxes),function(_,axis){if(axis)res[axis.direction+(axis.n!=1?axis.n:"")+"axis"]=axis});return res};plot.getXAxes=function(){return xaxes};plot.getYAxes=function(){return yaxes};plot.c2p=canvasToAxisCoords;plot.p2c=axisToCanvasCoords;plot.getOptions=function(){return options};plot.highlight=highlight;plot.unhighlight=unhighlight;plot.triggerRedrawOverlay=triggerRedrawOverlay;plot.pointOffset=function(point){return{left:parseInt(xaxes[axisNumber(point,"x")-1].p2c(+point.x)+plotOffset.left,10),top:parseInt(yaxes[axisNumber(point,"y")-1].p2c(+point.y)+plotOffset.top,10)}};plot.shutdown=shutdown;plot.destroy=function(){shutdown();placeholder.removeData("plot").empty();series=[];options=null;surface=null;overlay=null;eventHolder=null;ctx=null;octx=null;xaxes=[];yaxes=[];hooks=null;highlights=[];plot=null};plot.resize=function(){var width=placeholder.width(),height=placeholder.height();surface.resize(width,height);overlay.resize(width,height)};plot.hooks=hooks;initPlugins(plot);parseOptions(options_);setupCanvases();setData(data_);setupGrid();draw();bindEvents();function executeHooks(hook,args){args=[plot].concat(args);for(var i=0;i<hook.length;++i)hook[i].apply(this,args)}function initPlugins(){var classes={Canvas:Canvas};for(var i=0;i<plugins.length;++i){var p=plugins[i];p.init(plot,classes);if(p.options)$.extend(true,options,p.options)}}function parseOptions(opts){$.extend(true,options,opts);if(opts&&opts.colors){options.colors=opts.colors}if(options.xaxis.color==null)options.xaxis.color=$.color.parse(options.grid.color).scale("a",.22).toString();if(options.yaxis.color==null)options.yaxis.color=$.color.parse(options.grid.color).scale("a",.22).toString();if(options.xaxis.tickColor==null)options.xaxis.tickColor=options.grid.tickColor||options.xaxis.color;if(options.yaxis.tickColor==null)options.yaxis.tickColor=options.grid.tickColor||options.yaxis.color;if(options.grid.borderColor==null)options.grid.borderColor=options.grid.color;if(options.grid.tickColor==null)options.grid.tickColor=$.color.parse(options.grid.color).scale("a",.22).toString();var i,axisOptions,axisCount,fontSize=placeholder.css("font-size"),fontSizeDefault=fontSize?+fontSize.replace("px",""):13,fontDefaults={style:placeholder.css("font-style"),size:Math.round(.8*fontSizeDefault),variant:placeholder.css("font-variant"),weight:placeholder.css("font-weight"),family:placeholder.css("font-family")};axisCount=options.xaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.xaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color}axisOptions=$.extend(true,{},options.xaxis,axisOptions);options.xaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color}if(!axisOptions.font.lineHeight){axisOptions.font.lineHeight=Math.round(axisOptions.font.size*1.15)}}}axisCount=options.yaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.yaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color}axisOptions=$.extend(true,{},options.yaxis,axisOptions);options.yaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color}if(!axisOptions.font.lineHeight){axisOptions.font.lineHeight=Math.round(axisOptions.font.size*1.15)}}}if(options.xaxis.noTicks&&options.xaxis.ticks==null)options.xaxis.ticks=options.xaxis.noTicks;if(options.yaxis.noTicks&&options.yaxis.ticks==null)options.yaxis.ticks=options.yaxis.noTicks;if(options.x2axis){options.xaxes[1]=$.extend(true,{},options.xaxis,options.x2axis);options.xaxes[1].position="top";if(options.x2axis.min==null){options.xaxes[1].min=null}if(options.x2axis.max==null){options.xaxes[1].max=null}}if(options.y2axis){options.yaxes[1]=$.extend(true,{},options.yaxis,options.y2axis);options.yaxes[1].position="right";if(options.y2axis.min==null){options.yaxes[1].min=null}if(options.y2axis.max==null){options.yaxes[1].max=null}}if(options.grid.coloredAreas)options.grid.markings=options.grid.coloredAreas;if(options.grid.coloredAreasColor)options.grid.markingsColor=options.grid.coloredAreasColor;if(options.lines)$.extend(true,options.series.lines,options.lines);if(options.points)$.extend(true,options.series.points,options.points);if(options.bars)$.extend(true,options.series.bars,options.bars);if(options.shadowSize!=null)options.series.shadowSize=options.shadowSize;if(options.highlightColor!=null)options.series.highlightColor=options.highlightColor;for(i=0;i<options.xaxes.length;++i)getOrCreateAxis(xaxes,i+1).options=options.xaxes[i];for(i=0;i<options.yaxes.length;++i)getOrCreateAxis(yaxes,i+1).options=options.yaxes[i];for(var n in hooks)if(options.hooks[n]&&options.hooks[n].length)hooks[n]=hooks[n].concat(options.hooks[n]);executeHooks(hooks.processOptions,[options])}function setData(d){series=parseData(d);fillInSeriesOptions();processData()}function parseData(d){var res=[];for(var i=0;i<d.length;++i){var s=$.extend(true,{},options.series);if(d[i].data!=null){s.data=d[i].data;delete d[i].data;$.extend(true,s,d[i]);d[i].data=s.data}else s.data=d[i];res.push(s)}return res}function axisNumber(obj,coord){var a=obj[coord+"axis"];if(typeof a=="object")a=a.n;if(typeof a!="number")a=1;return a}function allAxes(){return $.grep(xaxes.concat(yaxes),function(a){return a})}function canvasToAxisCoords(pos){var res={},i,axis;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used)res["x"+axis.n]=axis.c2p(pos.left)}for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used)res["y"+axis.n]=axis.c2p(pos.top)}if(res.x1!==undefined)res.x=res.x1;if(res.y1!==undefined)res.y=res.y1;return res}function axisToCanvasCoords(pos){var res={},i,axis,key;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used){key="x"+axis.n;if(pos[key]==null&&axis.n==1)key="x";if(pos[key]!=null){res.left=axis.p2c(pos[key]);break}}}for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used){key="y"+axis.n;if(pos[key]==null&&axis.n==1)key="y";if(pos[key]!=null){res.top=axis.p2c(pos[key]);break}}}return res}function getOrCreateAxis(axes,number){if(!axes[number-1])axes[number-1]={n:number,direction:axes==xaxes?"x":"y",options:$.extend(true,{},axes==xaxes?options.xaxis:options.yaxis)};return axes[number-1]}function fillInSeriesOptions(){var neededColors=series.length,maxIndex=-1,i;for(i=0;i<series.length;++i){var sc=series[i].color;if(sc!=null){neededColors--;if(typeof sc=="number"&&sc>maxIndex){maxIndex=sc}}}if(neededColors<=maxIndex){neededColors=maxIndex+1}var c,colors=[],colorPool=options.colors,colorPoolSize=colorPool.length,variation=0;for(i=0;i<neededColors;i++){c=$.color.parse(colorPool[i%colorPoolSize]||"#666");if(i%colorPoolSize==0&&i){if(variation>=0){if(variation<.5){variation=-variation-.2}else variation=0}else variation=-variation}colors[i]=c.scale("rgb",1+variation)}var colori=0,s;for(i=0;i<series.length;++i){s=series[i];if(s.color==null){s.color=colors[colori].toString();++colori}else if(typeof s.color=="number")s.color=colors[s.color].toString();if(s.lines.show==null){var v,show=true;for(v in s)if(s[v]&&s[v].show){show=false;break}if(show)s.lines.show=true}if(s.lines.zero==null){s.lines.zero=!!s.lines.fill}s.xaxis=getOrCreateAxis(xaxes,axisNumber(s,"x"));s.yaxis=getOrCreateAxis(yaxes,axisNumber(s,"y"))}}function processData(){var topSentry=Number.POSITIVE_INFINITY,bottomSentry=Number.NEGATIVE_INFINITY,fakeInfinity=Number.MAX_VALUE,i,j,k,m,length,s,points,ps,x,y,axis,val,f,p,data,format;function updateAxis(axis,min,max){if(min<axis.datamin&&min!=-fakeInfinity)axis.datamin=min;if(max>axis.datamax&&max!=fakeInfinity)axis.datamax=max}$.each(allAxes(),function(_,axis){axis.datamin=topSentry;axis.datamax=bottomSentry;axis.used=false});for(i=0;i<series.length;++i){s=series[i];s.datapoints={points:[]};executeHooks(hooks.processRawData,[s,s.data,s.datapoints])}for(i=0;i<series.length;++i){s=series[i];data=s.data;format=s.datapoints.format;if(!format){format=[];format.push({x:true,number:true,required:true});format.push({y:true,number:true,required:true});if(s.bars.show||s.lines.show&&s.lines.fill){var autoscale=!!(s.bars.show&&s.bars.zero||s.lines.show&&s.lines.zero);format.push({y:true,number:true,required:false,defaultValue:0,autoscale:autoscale});if(s.bars.horizontal){delete format[format.length-1].y;format[format.length-1].x=true}}s.datapoints.format=format}if(s.datapoints.pointsize!=null)continue;s.datapoints.pointsize=format.length;ps=s.datapoints.pointsize;points=s.datapoints.points;var insertSteps=s.lines.show&&s.lines.steps;s.xaxis.used=s.yaxis.used=true;for(j=k=0;j<data.length;++j,k+=ps){p=data[j];var nullify=p==null;if(!nullify){for(m=0;m<ps;++m){val=p[m];f=format[m];if(f){if(f.number&&val!=null){val=+val;if(isNaN(val))val=null;else if(val==Infinity)val=fakeInfinity;else if(val==-Infinity)val=-fakeInfinity}if(val==null){if(f.required)nullify=true;if(f.defaultValue!=null)val=f.defaultValue}}points[k+m]=val}}if(nullify){for(m=0;m<ps;++m){val=points[k+m];if(val!=null){f=format[m];if(f.autoscale!==false){if(f.x){updateAxis(s.xaxis,val,val)}if(f.y){updateAxis(s.yaxis,val,val)}}}points[k+m]=null}}else{if(insertSteps&&k>0&&points[k-ps]!=null&&points[k-ps]!=points[k]&&points[k-ps+1]!=points[k+1]){for(m=0;m<ps;++m)points[k+ps+m]=points[k+m];points[k+1]=points[k-ps+1];k+=ps}}}}for(i=0;i<series.length;++i){s=series[i];executeHooks(hooks.processDatapoints,[s,s.datapoints])}for(i=0;i<series.length;++i){s=series[i];points=s.datapoints.points;ps=s.datapoints.pointsize;format=s.datapoints.format;var xmin=topSentry,ymin=topSentry,xmax=bottomSentry,ymax=bottomSentry;for(j=0;j<points.length;j+=ps){if(points[j]==null)continue;for(m=0;m<ps;++m){val=points[j+m];f=format[m];if(!f||f.autoscale===false||val==fakeInfinity||val==-fakeInfinity)continue;if(f.x){if(val<xmin)xmin=val;if(val>xmax)xmax=val}if(f.y){if(val<ymin)ymin=val;if(val>ymax)ymax=val}}}if(s.bars.show){var delta;switch(s.bars.align){case"left":delta=0;break;case"right":delta=-s.bars.barWidth;break;default:delta=-s.bars.barWidth/2}if(s.bars.horizontal){ymin+=delta;ymax+=delta+s.bars.barWidth}else{xmin+=delta;xmax+=delta+s.bars.barWidth}}updateAxis(s.xaxis,xmin,xmax);updateAxis(s.yaxis,ymin,ymax)}$.each(allAxes(),function(_,axis){if(axis.datamin==topSentry)axis.datamin=null;if(axis.datamax==bottomSentry)axis.datamax=null})}function setupCanvases(){placeholder.css("padding",0).children().filter(function(){return!$(this).hasClass("flot-overlay")&&!$(this).hasClass("flot-base")}).remove();if(placeholder.css("position")=="static")placeholder.css("position","relative");surface=new Canvas("flot-base",placeholder);overlay=new Canvas("flot-overlay",placeholder);ctx=surface.context;octx=overlay.context;eventHolder=$(overlay.element).unbind();var existing=placeholder.data("plot");if(existing){existing.shutdown();overlay.clear()}placeholder.data("plot",plot)}function bindEvents(){if(options.grid.hoverable){eventHolder.mousemove(onMouseMove);eventHolder.bind("mouseleave",onMouseLeave)}if(options.grid.clickable)eventHolder.click(onClick);executeHooks(hooks.bindEvents,[eventHolder])}function shutdown(){if(redrawTimeout)clearTimeout(redrawTimeout);eventHolder.unbind("mousemove",onMouseMove);eventHolder.unbind("mouseleave",onMouseLeave);eventHolder.unbind("click",onClick);executeHooks(hooks.shutdown,[eventHolder])}function setTransformationHelpers(axis){function identity(x){return x}var s,m,t=axis.options.transform||identity,it=axis.options.inverseTransform;if(axis.direction=="x"){s=axis.scale=plotWidth/Math.abs(t(axis.max)-t(axis.min));m=Math.min(t(axis.max),t(axis.min))}else{s=axis.scale=plotHeight/Math.abs(t(axis.max)-t(axis.min));s=-s;m=Math.max(t(axis.max),t(axis.min))}if(t==identity)axis.p2c=function(p){return(p-m)*s};else axis.p2c=function(p){return(t(p)-m)*s};if(!it)axis.c2p=function(c){return m+c/s};else axis.c2p=function(c){return it(m+c/s)}}function measureTickLabels(axis){var opts=axis.options,ticks=axis.ticks||[],labelWidth=opts.labelWidth||0,labelHeight=opts.labelHeight||0,maxWidth=labelWidth||(axis.direction=="x"?Math.floor(surface.width/(ticks.length||1)):null),legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=opts.font||"flot-tick-label tickLabel";for(var i=0;i<ticks.length;++i){var t=ticks[i];if(!t.label)continue;var info=surface.getTextInfo(layer,t.label,font,null,maxWidth);labelWidth=Math.max(labelWidth,info.width);labelHeight=Math.max(labelHeight,info.height)}axis.labelWidth=opts.labelWidth||labelWidth;axis.labelHeight=opts.labelHeight||labelHeight}function allocateAxisBoxFirstPhase(axis){var lw=axis.labelWidth,lh=axis.labelHeight,pos=axis.options.position,isXAxis=axis.direction==="x",tickLength=axis.options.tickLength,axisMargin=options.grid.axisMargin,padding=options.grid.labelMargin,innermost=true,outermost=true,first=true,found=false;$.each(isXAxis?xaxes:yaxes,function(i,a){if(a&&(a.show||a.reserveSpace)){if(a===axis){found=true}else if(a.options.position===pos){if(found){outermost=false}else{innermost=false}}if(!found){first=false}}});if(outermost){axisMargin=0}if(tickLength==null){tickLength=first?"full":5}if(!isNaN(+tickLength))padding+=+tickLength;if(isXAxis){lh+=padding;if(pos=="bottom"){plotOffset.bottom+=lh+axisMargin;axis.box={top:surface.height-plotOffset.bottom,height:lh}}else{axis.box={top:plotOffset.top+axisMargin,height:lh};plotOffset.top+=lh+axisMargin}}else{lw+=padding;if(pos=="left"){axis.box={left:plotOffset.left+axisMargin,width:lw};plotOffset.left+=lw+axisMargin}else{plotOffset.right+=lw+axisMargin;axis.box={left:surface.width-plotOffset.right,width:lw}}}axis.position=pos;axis.tickLength=tickLength;axis.box.padding=padding;axis.innermost=innermost}function allocateAxisBoxSecondPhase(axis){if(axis.direction=="x"){axis.box.left=plotOffset.left-axis.labelWidth/2;axis.box.width=surface.width-plotOffset.left-plotOffset.right+axis.labelWidth}else{axis.box.top=plotOffset.top-axis.labelHeight/2;axis.box.height=surface.height-plotOffset.bottom-plotOffset.top+axis.labelHeight}}function adjustLayoutForThingsStickingOut(){var minMargin=options.grid.minBorderMargin,axis,i;if(minMargin==null){minMargin=0;for(i=0;i<series.length;++i)minMargin=Math.max(minMargin,2*(series[i].points.radius+series[i].points.lineWidth/2))}var margins={left:minMargin,right:minMargin,top:minMargin,bottom:minMargin};$.each(allAxes(),function(_,axis){if(axis.reserveSpace&&axis.ticks&&axis.ticks.length){if(axis.direction==="x"){margins.left=Math.max(margins.left,axis.labelWidth/2);margins.right=Math.max(margins.right,axis.labelWidth/2)}else{margins.bottom=Math.max(margins.bottom,axis.labelHeight/2);margins.top=Math.max(margins.top,axis.labelHeight/2)}}});plotOffset.left=Math.ceil(Math.max(margins.left,plotOffset.left));plotOffset.right=Math.ceil(Math.max(margins.right,plotOffset.right));plotOffset.top=Math.ceil(Math.max(margins.top,plotOffset.top));plotOffset.bottom=Math.ceil(Math.max(margins.bottom,plotOffset.bottom))}function setupGrid(){var i,axes=allAxes(),showGrid=options.grid.show;for(var a in plotOffset){var margin=options.grid.margin||0;plotOffset[a]=typeof margin=="number"?margin:margin[a]||0}executeHooks(hooks.processOffset,[plotOffset]);for(var a in plotOffset){if(typeof options.grid.borderWidth=="object"){plotOffset[a]+=showGrid?options.grid.borderWidth[a]:0}else{plotOffset[a]+=showGrid?options.grid.borderWidth:0}}$.each(axes,function(_,axis){var axisOpts=axis.options;axis.show=axisOpts.show==null?axis.used:axisOpts.show;axis.reserveSpace=axisOpts.reserveSpace==null?axis.show:axisOpts.reserveSpace;setRange(axis)});if(showGrid){var allocatedAxes=$.grep(axes,function(axis){return axis.show||axis.reserveSpace});$.each(allocatedAxes,function(_,axis){setupTickGeneration(axis);setTicks(axis);snapRangeToTicks(axis,axis.ticks);measureTickLabels(axis)});for(i=allocatedAxes.length-1;i>=0;--i)allocateAxisBoxFirstPhase(allocatedAxes[i]);adjustLayoutForThingsStickingOut();$.each(allocatedAxes,function(_,axis){allocateAxisBoxSecondPhase(axis)})}plotWidth=surface.width-plotOffset.left-plotOffset.right;plotHeight=surface.height-plotOffset.bottom-plotOffset.top;$.each(axes,function(_,axis){setTransformationHelpers(axis)});if(showGrid){drawAxisLabels()}insertLegend()}function setRange(axis){var opts=axis.options,min=+(opts.min!=null?opts.min:axis.datamin),max=+(opts.max!=null?opts.max:axis.datamax),delta=max-min;if(delta==0){var widen=max==0?1:.01;if(opts.min==null)min-=widen;if(opts.max==null||opts.min!=null)max+=widen}else{var margin=opts.autoscaleMargin;if(margin!=null){if(opts.min==null){min-=delta*margin;if(min<0&&axis.datamin!=null&&axis.datamin>=0)min=0}if(opts.max==null){max+=delta*margin;if(max>0&&axis.datamax!=null&&axis.datamax<=0)max=0}}}axis.min=min;axis.max=max}function setupTickGeneration(axis){var opts=axis.options;var noTicks;if(typeof opts.ticks=="number"&&opts.ticks>0)noTicks=opts.ticks;else noTicks=.3*Math.sqrt(axis.direction=="x"?surface.width:surface.height);var delta=(axis.max-axis.min)/noTicks,dec=-Math.floor(Math.log(delta)/Math.LN10),maxDec=opts.tickDecimals;if(maxDec!=null&&dec>maxDec){dec=maxDec}var magn=Math.pow(10,-dec),norm=delta/magn,size;if(norm<1.5){size=1}else if(norm<3){size=2;if(norm>2.25&&(maxDec==null||dec+1<=maxDec)){size=2.5;++dec}}else if(norm<7.5){size=5}else{size=10}size*=magn;if(opts.minTickSize!=null&&size<opts.minTickSize){size=opts.minTickSize}axis.delta=delta;axis.tickDecimals=Math.max(0,maxDec!=null?maxDec:dec);axis.tickSize=opts.tickSize||size;if(opts.mode=="time"&&!axis.tickGenerator){throw new Error("Time mode requires the flot.time plugin.")}if(!axis.tickGenerator){axis.tickGenerator=function(axis){var ticks=[],start=floorInBase(axis.min,axis.tickSize),i=0,v=Number.NaN,prev;do{prev=v;v=start+i*axis.tickSize;ticks.push(v);++i}while(v<axis.max&&v!=prev);return ticks};axis.tickFormatter=function(value,axis){var factor=axis.tickDecimals?Math.pow(10,axis.tickDecimals):1;var formatted=""+Math.round(value*factor)/factor;if(axis.tickDecimals!=null){var decimal=formatted.indexOf(".");var precision=decimal==-1?0:formatted.length-decimal-1;if(precision<axis.tickDecimals){return(precision?formatted:formatted+".")+(""+factor).substr(1,axis.tickDecimals-precision)}}return formatted}}if($.isFunction(opts.tickFormatter))axis.tickFormatter=function(v,axis){return""+opts.tickFormatter(v,axis)};if(opts.alignTicksWithAxis!=null){var otherAxis=(axis.direction=="x"?xaxes:yaxes)[opts.alignTicksWithAxis-1];if(otherAxis&&otherAxis.used&&otherAxis!=axis){var niceTicks=axis.tickGenerator(axis);if(niceTicks.length>0){if(opts.min==null)axis.min=Math.min(axis.min,niceTicks[0]);if(opts.max==null&&niceTicks.length>1)axis.max=Math.max(axis.max,niceTicks[niceTicks.length-1])}axis.tickGenerator=function(axis){var ticks=[],v,i;for(i=0;i<otherAxis.ticks.length;++i){v=(otherAxis.ticks[i].v-otherAxis.min)/(otherAxis.max-otherAxis.min);v=axis.min+v*(axis.max-axis.min);ticks.push(v)}return ticks};if(!axis.mode&&opts.tickDecimals==null){var extraDec=Math.max(0,-Math.floor(Math.log(axis.delta)/Math.LN10)+1),ts=axis.tickGenerator(axis);if(!(ts.length>1&&/\..*0$/.test((ts[1]-ts[0]).toFixed(extraDec))))axis.tickDecimals=extraDec}}}}function setTicks(axis){var oticks=axis.options.ticks,ticks=[];if(oticks==null||typeof oticks=="number"&&oticks>0)ticks=axis.tickGenerator(axis);else if(oticks){if($.isFunction(oticks))ticks=oticks(axis);else ticks=oticks}var i,v;axis.ticks=[];for(i=0;i<ticks.length;++i){var label=null;var t=ticks[i];if(typeof t=="object"){v=+t[0];if(t.length>1)label=t[1]}else v=+t;if(label==null)label=axis.tickFormatter(v,axis);if(!isNaN(v))axis.ticks.push({v:v,label:label})}}function snapRangeToTicks(axis,ticks){if(axis.options.autoscaleMargin&&ticks.length>0){if(axis.options.min==null)axis.min=Math.min(axis.min,ticks[0].v);if(axis.options.max==null&&ticks.length>1)axis.max=Math.max(axis.max,ticks[ticks.length-1].v)}}function draw(){surface.clear();executeHooks(hooks.drawBackground,[ctx]);var grid=options.grid;if(grid.show&&grid.backgroundColor)drawBackground();if(grid.show&&!grid.aboveData){drawGrid()}for(var i=0;i<series.length;++i){executeHooks(hooks.drawSeries,[ctx,series[i]]);drawSeries(series[i])}executeHooks(hooks.draw,[ctx]);if(grid.show&&grid.aboveData){drawGrid()}surface.render();triggerRedrawOverlay()}function extractRange(ranges,coord){var axis,from,to,key,axes=allAxes();for(var i=0;i<axes.length;++i){axis=axes[i];if(axis.direction==coord){key=coord+axis.n+"axis";if(!ranges[key]&&axis.n==1)key=coord+"axis";if(ranges[key]){from=ranges[key].from;to=ranges[key].to;break}}}if(!ranges[key]){axis=coord=="x"?xaxes[0]:yaxes[0];from=ranges[coord+"1"];to=ranges[coord+"2"]}if(from!=null&&to!=null&&from>to){var tmp=from;from=to;to=tmp}return{from:from,to:to,axis:axis}}function drawBackground(){ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.fillStyle=getColorOrGradient(options.grid.backgroundColor,plotHeight,0,"rgba(255, 255, 255, 0)");ctx.fillRect(0,0,plotWidth,plotHeight);ctx.restore()}function drawGrid(){var i,axes,bw,bc;ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var markings=options.grid.markings;if(markings){if($.isFunction(markings)){axes=plot.getAxes();axes.xmin=axes.xaxis.min;axes.xmax=axes.xaxis.max;axes.ymin=axes.yaxis.min;axes.ymax=axes.yaxis.max;markings=markings(axes)}for(i=0;i<markings.length;++i){var m=markings[i],xrange=extractRange(m,"x"),yrange=extractRange(m,"y");if(xrange.from==null)xrange.from=xrange.axis.min;if(xrange.to==null)xrange.to=xrange.axis.max;
if(yrange.from==null)yrange.from=yrange.axis.min;if(yrange.to==null)yrange.to=yrange.axis.max;if(xrange.to<xrange.axis.min||xrange.from>xrange.axis.max||yrange.to<yrange.axis.min||yrange.from>yrange.axis.max)continue;xrange.from=Math.max(xrange.from,xrange.axis.min);xrange.to=Math.min(xrange.to,xrange.axis.max);yrange.from=Math.max(yrange.from,yrange.axis.min);yrange.to=Math.min(yrange.to,yrange.axis.max);var xequal=xrange.from===xrange.to,yequal=yrange.from===yrange.to;if(xequal&&yequal){continue}xrange.from=Math.floor(xrange.axis.p2c(xrange.from));xrange.to=Math.floor(xrange.axis.p2c(xrange.to));yrange.from=Math.floor(yrange.axis.p2c(yrange.from));yrange.to=Math.floor(yrange.axis.p2c(yrange.to));if(xequal||yequal){var lineWidth=m.lineWidth||options.grid.markingsLineWidth,subPixel=lineWidth%2?.5:0;ctx.beginPath();ctx.strokeStyle=m.color||options.grid.markingsColor;ctx.lineWidth=lineWidth;if(xequal){ctx.moveTo(xrange.to+subPixel,yrange.from);ctx.lineTo(xrange.to+subPixel,yrange.to)}else{ctx.moveTo(xrange.from,yrange.to+subPixel);ctx.lineTo(xrange.to,yrange.to+subPixel)}ctx.stroke()}else{ctx.fillStyle=m.color||options.grid.markingsColor;ctx.fillRect(xrange.from,yrange.to,xrange.to-xrange.from,yrange.from-yrange.to)}}}axes=allAxes();bw=options.grid.borderWidth;for(var j=0;j<axes.length;++j){var axis=axes[j],box=axis.box,t=axis.tickLength,x,y,xoff,yoff;if(!axis.show||axis.ticks.length==0)continue;ctx.lineWidth=1;if(axis.direction=="x"){x=0;if(t=="full")y=axis.position=="top"?0:plotHeight;else y=box.top-plotOffset.top+(axis.position=="top"?box.height:0)}else{y=0;if(t=="full")x=axis.position=="left"?0:plotWidth;else x=box.left-plotOffset.left+(axis.position=="left"?box.width:0)}if(!axis.innermost){ctx.strokeStyle=axis.options.color;ctx.beginPath();xoff=yoff=0;if(axis.direction=="x")xoff=plotWidth+1;else yoff=plotHeight+1;if(ctx.lineWidth==1){if(axis.direction=="x"){y=Math.floor(y)+.5}else{x=Math.floor(x)+.5}}ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff);ctx.stroke()}ctx.strokeStyle=axis.options.tickColor;ctx.beginPath();for(i=0;i<axis.ticks.length;++i){var v=axis.ticks[i].v;xoff=yoff=0;if(isNaN(v)||v<axis.min||v>axis.max||t=="full"&&(typeof bw=="object"&&bw[axis.position]>0||bw>0)&&(v==axis.min||v==axis.max))continue;if(axis.direction=="x"){x=axis.p2c(v);yoff=t=="full"?-plotHeight:t;if(axis.position=="top")yoff=-yoff}else{y=axis.p2c(v);xoff=t=="full"?-plotWidth:t;if(axis.position=="left")xoff=-xoff}if(ctx.lineWidth==1){if(axis.direction=="x")x=Math.floor(x)+.5;else y=Math.floor(y)+.5}ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff)}ctx.stroke()}if(bw){bc=options.grid.borderColor;if(typeof bw=="object"||typeof bc=="object"){if(typeof bw!=="object"){bw={top:bw,right:bw,bottom:bw,left:bw}}if(typeof bc!=="object"){bc={top:bc,right:bc,bottom:bc,left:bc}}if(bw.top>0){ctx.strokeStyle=bc.top;ctx.lineWidth=bw.top;ctx.beginPath();ctx.moveTo(0-bw.left,0-bw.top/2);ctx.lineTo(plotWidth,0-bw.top/2);ctx.stroke()}if(bw.right>0){ctx.strokeStyle=bc.right;ctx.lineWidth=bw.right;ctx.beginPath();ctx.moveTo(plotWidth+bw.right/2,0-bw.top);ctx.lineTo(plotWidth+bw.right/2,plotHeight);ctx.stroke()}if(bw.bottom>0){ctx.strokeStyle=bc.bottom;ctx.lineWidth=bw.bottom;ctx.beginPath();ctx.moveTo(plotWidth+bw.right,plotHeight+bw.bottom/2);ctx.lineTo(0,plotHeight+bw.bottom/2);ctx.stroke()}if(bw.left>0){ctx.strokeStyle=bc.left;ctx.lineWidth=bw.left;ctx.beginPath();ctx.moveTo(0-bw.left/2,plotHeight+bw.bottom);ctx.lineTo(0-bw.left/2,0);ctx.stroke()}}else{ctx.lineWidth=bw;ctx.strokeStyle=options.grid.borderColor;ctx.strokeRect(-bw/2,-bw/2,plotWidth+bw,plotHeight+bw)}}ctx.restore()}function drawAxisLabels(){$.each(allAxes(),function(_,axis){var box=axis.box,legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=axis.options.font||"flot-tick-label tickLabel",tick,x,y,halign,valign;surface.removeText(layer);if(!axis.show||axis.ticks.length==0)return;for(var i=0;i<axis.ticks.length;++i){tick=axis.ticks[i];if(!tick.label||tick.v<axis.min||tick.v>axis.max)continue;if(axis.direction=="x"){halign="center";x=plotOffset.left+axis.p2c(tick.v);if(axis.position=="bottom"){y=box.top+box.padding}else{y=box.top+box.height-box.padding;valign="bottom"}}else{valign="middle";y=plotOffset.top+axis.p2c(tick.v);if(axis.position=="left"){x=box.left+box.width-box.padding;halign="right"}else{x=box.left+box.padding}}surface.addText(layer,x,y,tick.label,font,null,null,halign,valign)}})}function drawSeries(series){if(series.lines.show)drawSeriesLines(series);if(series.bars.show)drawSeriesBars(series);if(series.points.show)drawSeriesPoints(series)}function drawSeriesLines(series){function plotLine(datapoints,xoffset,yoffset,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,prevx=null,prevy=null;ctx.beginPath();for(var i=ps;i<points.length;i+=ps){var x1=points[i-ps],y1=points[i-ps+1],x2=points[i],y2=points[i+1];if(x1==null||x2==null)continue;if(y1<=y2&&y1<axisy.min){if(y2<axisy.min)continue;x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min}else if(y2<=y1&&y2<axisy.min){if(y1<axisy.min)continue;x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min}if(y1>=y2&&y1>axisy.max){if(y2>axisy.max)continue;x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max}else if(y2>=y1&&y2>axisy.max){if(y1>axisy.max)continue;x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max}if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min}else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min}if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max}else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max}if(x1!=prevx||y1!=prevy)ctx.moveTo(axisx.p2c(x1)+xoffset,axisy.p2c(y1)+yoffset);prevx=x2;prevy=y2;ctx.lineTo(axisx.p2c(x2)+xoffset,axisy.p2c(y2)+yoffset)}ctx.stroke()}function plotLineArea(datapoints,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,bottom=Math.min(Math.max(0,axisy.min),axisy.max),i=0,top,areaOpen=false,ypos=1,segmentStart=0,segmentEnd=0;while(true){if(ps>0&&i>points.length+ps)break;i+=ps;var x1=points[i-ps],y1=points[i-ps+ypos],x2=points[i],y2=points[i+ypos];if(areaOpen){if(ps>0&&x1!=null&&x2==null){segmentEnd=i;ps=-ps;ypos=2;continue}if(ps<0&&i==segmentStart+ps){ctx.fill();areaOpen=false;ps=-ps;ypos=1;i=segmentStart=segmentEnd+ps;continue}}if(x1==null||x2==null)continue;if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min}else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min}if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max}else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max}if(!areaOpen){ctx.beginPath();ctx.moveTo(axisx.p2c(x1),axisy.p2c(bottom));areaOpen=true}if(y1>=axisy.max&&y2>=axisy.max){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.max));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.max));continue}else if(y1<=axisy.min&&y2<=axisy.min){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.min));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.min));continue}var x1old=x1,x2old=x2;if(y1<=y2&&y1<axisy.min&&y2>=axisy.min){x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min}else if(y2<=y1&&y2<axisy.min&&y1>=axisy.min){x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min}if(y1>=y2&&y1>axisy.max&&y2<=axisy.max){x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max}else if(y2>=y1&&y2>axisy.max&&y1<=axisy.max){x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max}if(x1!=x1old){ctx.lineTo(axisx.p2c(x1old),axisy.p2c(y1))}ctx.lineTo(axisx.p2c(x1),axisy.p2c(y1));ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));if(x2!=x2old){ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));ctx.lineTo(axisx.p2c(x2old),axisy.p2c(y2))}}}ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineJoin="round";var lw=series.lines.lineWidth,sw=series.shadowSize;if(lw>0&&sw>0){ctx.lineWidth=sw;ctx.strokeStyle="rgba(0,0,0,0.1)";var angle=Math.PI/18;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/2),Math.cos(angle)*(lw/2+sw/2),series.xaxis,series.yaxis);ctx.lineWidth=sw/2;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/4),Math.cos(angle)*(lw/2+sw/4),series.xaxis,series.yaxis)}ctx.lineWidth=lw;ctx.strokeStyle=series.color;var fillStyle=getFillStyle(series.lines,series.color,0,plotHeight);if(fillStyle){ctx.fillStyle=fillStyle;plotLineArea(series.datapoints,series.xaxis,series.yaxis)}if(lw>0)plotLine(series.datapoints,0,0,series.xaxis,series.yaxis);ctx.restore()}function drawSeriesPoints(series){function plotPoints(datapoints,radius,fillStyle,offset,shadow,axisx,axisy,symbol){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){var x=points[i],y=points[i+1];if(x==null||x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)continue;ctx.beginPath();x=axisx.p2c(x);y=axisy.p2c(y)+offset;if(symbol=="circle")ctx.arc(x,y,radius,0,shadow?Math.PI:Math.PI*2,false);else symbol(ctx,x,y,radius,shadow);ctx.closePath();if(fillStyle){ctx.fillStyle=fillStyle;ctx.fill()}ctx.stroke()}}ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var lw=series.points.lineWidth,sw=series.shadowSize,radius=series.points.radius,symbol=series.points.symbol;if(lw==0)lw=1e-4;if(lw>0&&sw>0){var w=sw/2;ctx.lineWidth=w;ctx.strokeStyle="rgba(0,0,0,0.1)";plotPoints(series.datapoints,radius,null,w+w/2,true,series.xaxis,series.yaxis,symbol);ctx.strokeStyle="rgba(0,0,0,0.2)";plotPoints(series.datapoints,radius,null,w/2,true,series.xaxis,series.yaxis,symbol)}ctx.lineWidth=lw;ctx.strokeStyle=series.color;plotPoints(series.datapoints,radius,getFillStyle(series.points,series.color),0,false,series.xaxis,series.yaxis,symbol);ctx.restore()}function drawBar(x,y,b,barLeft,barRight,fillStyleCallback,axisx,axisy,c,horizontal,lineWidth){var left,right,bottom,top,drawLeft,drawRight,drawTop,drawBottom,tmp;if(horizontal){drawBottom=drawRight=drawTop=true;drawLeft=false;left=b;right=x;top=y+barLeft;bottom=y+barRight;if(right<left){tmp=right;right=left;left=tmp;drawLeft=true;drawRight=false}}else{drawLeft=drawRight=drawTop=true;drawBottom=false;left=x+barLeft;right=x+barRight;bottom=b;top=y;if(top<bottom){tmp=top;top=bottom;bottom=tmp;drawBottom=true;drawTop=false}}if(right<axisx.min||left>axisx.max||top<axisy.min||bottom>axisy.max)return;if(left<axisx.min){left=axisx.min;drawLeft=false}if(right>axisx.max){right=axisx.max;drawRight=false}if(bottom<axisy.min){bottom=axisy.min;drawBottom=false}if(top>axisy.max){top=axisy.max;drawTop=false}left=axisx.p2c(left);bottom=axisy.p2c(bottom);right=axisx.p2c(right);top=axisy.p2c(top);if(fillStyleCallback){c.fillStyle=fillStyleCallback(bottom,top);c.fillRect(left,top,right-left,bottom-top)}if(lineWidth>0&&(drawLeft||drawRight||drawTop||drawBottom)){c.beginPath();c.moveTo(left,bottom);if(drawLeft)c.lineTo(left,top);else c.moveTo(left,top);if(drawTop)c.lineTo(right,top);else c.moveTo(right,top);if(drawRight)c.lineTo(right,bottom);else c.moveTo(right,bottom);if(drawBottom)c.lineTo(left,bottom);else c.moveTo(left,bottom);c.stroke()}}function drawSeriesBars(series){function plotBars(datapoints,barLeft,barRight,fillStyleCallback,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){if(points[i]==null)continue;drawBar(points[i],points[i+1],points[i+2],barLeft,barRight,fillStyleCallback,axisx,axisy,ctx,series.bars.horizontal,series.bars.lineWidth)}}ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineWidth=series.bars.lineWidth;ctx.strokeStyle=series.color;var barLeft;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-series.bars.barWidth;break;default:barLeft=-series.bars.barWidth/2}var fillStyleCallback=series.bars.fill?function(bottom,top){return getFillStyle(series.bars,series.color,bottom,top)}:null;plotBars(series.datapoints,barLeft,barLeft+series.bars.barWidth,fillStyleCallback,series.xaxis,series.yaxis);ctx.restore()}function getFillStyle(filloptions,seriesColor,bottom,top){var fill=filloptions.fill;if(!fill)return null;if(filloptions.fillColor)return getColorOrGradient(filloptions.fillColor,bottom,top,seriesColor);var c=$.color.parse(seriesColor);c.a=typeof fill=="number"?fill:.4;c.normalize();return c.toString()}function insertLegend(){if(options.legend.container!=null){$(options.legend.container).html("")}else{placeholder.find(".legend").remove()}if(!options.legend.show){return}var fragments=[],entries=[],rowStarted=false,lf=options.legend.labelFormatter,s,label;for(var i=0;i<series.length;++i){s=series[i];if(s.label){label=lf?lf(s.label,s):s.label;if(label){entries.push({label:label,color:s.color})}}}if(options.legend.sorted){if($.isFunction(options.legend.sorted)){entries.sort(options.legend.sorted)}else if(options.legend.sorted=="reverse"){entries.reverse()}else{var ascending=options.legend.sorted!="descending";entries.sort(function(a,b){return a.label==b.label?0:a.label<b.label!=ascending?1:-1})}}for(var i=0;i<entries.length;++i){var entry=entries[i];if(i%options.legend.noColumns==0){if(rowStarted)fragments.push("</tr>");fragments.push("<tr>");rowStarted=true}fragments.push('<td class="legendColorBox"><div style="border:1px solid '+options.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+entry.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel">'+entry.label+"</td>")}if(rowStarted)fragments.push("</tr>");if(fragments.length==0)return;var table='<table style="font-size:smaller;color:'+options.grid.color+'">'+fragments.join("")+"</table>";if(options.legend.container!=null)$(options.legend.container).html(table);else{var pos="",p=options.legend.position,m=options.legend.margin;if(m[0]==null)m=[m,m];if(p.charAt(0)=="n")pos+="top:"+(m[1]+plotOffset.top)+"px;";else if(p.charAt(0)=="s")pos+="bottom:"+(m[1]+plotOffset.bottom)+"px;";if(p.charAt(1)=="e")pos+="right:"+(m[0]+plotOffset.right)+"px;";else if(p.charAt(1)=="w")pos+="left:"+(m[0]+plotOffset.left)+"px;";var legend=$('<div class="legend">'+table.replace('style="','style="position:absolute;'+pos+";")+"</div>").appendTo(placeholder);if(options.legend.backgroundOpacity!=0){var c=options.legend.backgroundColor;if(c==null){c=options.grid.backgroundColor;if(c&&typeof c=="string")c=$.color.parse(c);else c=$.color.extract(legend,"background-color");c.a=1;c=c.toString()}var div=legend.children();$('<div style="position:absolute;width:'+div.width()+"px;height:"+div.height()+"px;"+pos+"background-color:"+c+';"> </div>').prependTo(legend).css("opacity",options.legend.backgroundOpacity)}}}var highlights=[],redrawTimeout=null;function findNearbyItem(mouseX,mouseY,seriesFilter){var maxDistance=options.grid.mouseActiveRadius,smallestDistance=maxDistance*maxDistance+1,item=null,foundPoint=false,i,j,ps;for(i=series.length-1;i>=0;--i){if(!seriesFilter(series[i]))continue;var s=series[i],axisx=s.xaxis,axisy=s.yaxis,points=s.datapoints.points,mx=axisx.c2p(mouseX),my=axisy.c2p(mouseY),maxx=maxDistance/axisx.scale,maxy=maxDistance/axisy.scale;ps=s.datapoints.pointsize;if(axisx.options.inverseTransform)maxx=Number.MAX_VALUE;if(axisy.options.inverseTransform)maxy=Number.MAX_VALUE;if(s.lines.show||s.points.show){for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1];if(x==null)continue;if(x-mx>maxx||x-mx<-maxx||y-my>maxy||y-my<-maxy)continue;var dx=Math.abs(axisx.p2c(x)-mouseX),dy=Math.abs(axisy.p2c(y)-mouseY),dist=dx*dx+dy*dy;if(dist<smallestDistance){smallestDistance=dist;item=[i,j/ps]}}}if(s.bars.show&&!item){var barLeft,barRight;switch(s.bars.align){case"left":barLeft=0;break;case"right":barLeft=-s.bars.barWidth;break;default:barLeft=-s.bars.barWidth/2}barRight=barLeft+s.bars.barWidth;for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1],b=points[j+2];if(x==null)continue;if(series[i].bars.horizontal?mx<=Math.max(b,x)&&mx>=Math.min(b,x)&&my>=y+barLeft&&my<=y+barRight:mx>=x+barLeft&&mx<=x+barRight&&my>=Math.min(b,y)&&my<=Math.max(b,y))item=[i,j/ps]}}}if(item){i=item[0];j=item[1];ps=series[i].datapoints.pointsize;return{datapoint:series[i].datapoints.points.slice(j*ps,(j+1)*ps),dataIndex:j,series:series[i],seriesIndex:i}}return null}function onMouseMove(e){if(options.grid.hoverable)triggerClickHoverEvent("plothover",e,function(s){return s["hoverable"]!=false})}function onMouseLeave(e){if(options.grid.hoverable)triggerClickHoverEvent("plothover",e,function(s){return false})}function onClick(e){triggerClickHoverEvent("plotclick",e,function(s){return s["clickable"]!=false})}function triggerClickHoverEvent(eventname,event,seriesFilter){var offset=eventHolder.offset(),canvasX=event.pageX-offset.left-plotOffset.left,canvasY=event.pageY-offset.top-plotOffset.top,pos=canvasToAxisCoords({left:canvasX,top:canvasY});pos.pageX=event.pageX;pos.pageY=event.pageY;var item=findNearbyItem(canvasX,canvasY,seriesFilter);if(item){item.pageX=parseInt(item.series.xaxis.p2c(item.datapoint[0])+offset.left+plotOffset.left,10);item.pageY=parseInt(item.series.yaxis.p2c(item.datapoint[1])+offset.top+plotOffset.top,10)}if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.auto==eventname&&!(item&&h.series==item.series&&h.point[0]==item.datapoint[0]&&h.point[1]==item.datapoint[1]))unhighlight(h.series,h.point)}if(item)highlight(item.series,item.datapoint,eventname)}placeholder.trigger(eventname,[pos,item])}function triggerRedrawOverlay(){var t=options.interaction.redrawOverlayInterval;if(t==-1){drawOverlay();return}if(!redrawTimeout)redrawTimeout=setTimeout(drawOverlay,t)}function drawOverlay(){redrawTimeout=null;octx.save();overlay.clear();octx.translate(plotOffset.left,plotOffset.top);var i,hi;for(i=0;i<highlights.length;++i){hi=highlights[i];if(hi.series.bars.show)drawBarHighlight(hi.series,hi.point);else drawPointHighlight(hi.series,hi.point)}octx.restore();executeHooks(hooks.drawOverlay,[octx])}function highlight(s,point,auto){if(typeof s=="number")s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1))}var i=indexOfHighlight(s,point);if(i==-1){highlights.push({series:s,point:point,auto:auto});triggerRedrawOverlay()}else if(!auto)highlights[i].auto=false}function unhighlight(s,point){if(s==null&&point==null){highlights=[];triggerRedrawOverlay();return}if(typeof s=="number")s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1))}var i=indexOfHighlight(s,point);if(i!=-1){highlights.splice(i,1);triggerRedrawOverlay()}}function indexOfHighlight(s,p){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series==s&&h.point[0]==p[0]&&h.point[1]==p[1])return i}return-1}function drawPointHighlight(series,point){var x=point[0],y=point[1],axisx=series.xaxis,axisy=series.yaxis,highlightColor=typeof series.highlightColor==="string"?series.highlightColor:$.color.parse(series.color).scale("a",.5).toString();if(x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)return;var pointRadius=series.points.radius+series.points.lineWidth/2;octx.lineWidth=pointRadius;octx.strokeStyle=highlightColor;var radius=1.5*pointRadius;x=axisx.p2c(x);y=axisy.p2c(y);octx.beginPath();if(series.points.symbol=="circle")octx.arc(x,y,radius,0,2*Math.PI,false);else series.points.symbol(octx,x,y,radius,false);octx.closePath();octx.stroke()}function drawBarHighlight(series,point){var highlightColor=typeof series.highlightColor==="string"?series.highlightColor:$.color.parse(series.color).scale("a",.5).toString(),fillStyle=highlightColor,barLeft;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-series.bars.barWidth;break;default:barLeft=-series.bars.barWidth/2}octx.lineWidth=series.bars.lineWidth;octx.strokeStyle=highlightColor;drawBar(point[0],point[1],point[2]||0,barLeft,barLeft+series.bars.barWidth,function(){return fillStyle},series.xaxis,series.yaxis,octx,series.bars.horizontal,series.bars.lineWidth)}function getColorOrGradient(spec,bottom,top,defaultColor){if(typeof spec=="string")return spec;else{var gradient=ctx.createLinearGradient(0,top,0,bottom);for(var i=0,l=spec.colors.length;i<l;++i){var c=spec.colors[i];if(typeof c!="string"){var co=$.color.parse(defaultColor);if(c.brightness!=null)co=co.scale("rgb",c.brightness);if(c.opacity!=null)co.a*=c.opacity;c=co.toString()}gradient.addColorStop(i/(l-1),c)}return gradient}}}$.plot=function(placeholder,data,options){var plot=new Plot($(placeholder),data,options,$.plot.plugins);return plot};$.plot.version="0.8.3";$.plot.plugins=[];$.fn.plot=function(data,options){return this.each(function(){$.plot(this,data,options)})};function floorInBase(n,base){return base*Math.floor(n/base)}})(jQuery);/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($){var options={xaxis:{timezone:null,timeformat:null,twelveHourClock:false,monthNames:null}};function floorInBase(n,base){return base*Math.floor(n/base)}function formatDate(d,fmt,monthNames,dayNames){if(typeof d.strftime=="function"){return d.strftime(fmt)}var leftPad=function(n,pad){n=""+n;pad=""+(pad==null?"0":pad);return n.length==1?pad+n:n};var r=[];var escape=false;var hours=d.getHours();var isAM=hours<12;if(monthNames==null){monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(dayNames==null){dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}var hours12;if(hours>12){hours12=hours-12}else if(hours==0){hours12=12}else{hours12=hours}for(var i=0;i<fmt.length;++i){var c=fmt.charAt(i);if(escape){switch(c){case"a":c=""+dayNames[d.getDay()];break;case"b":c=""+monthNames[d.getMonth()];break;case"d":c=leftPad(d.getDate());break;case"e":c=leftPad(d.getDate()," ");break;case"h":case"H":c=leftPad(hours);break;case"I":c=leftPad(hours12);break;case"l":c=leftPad(hours12," ");break;case"m":c=leftPad(d.getMonth()+1);break;case"M":c=leftPad(d.getMinutes());break;case"q":c=""+(Math.floor(d.getMonth()/3)+1);break;case"S":c=leftPad(d.getSeconds());break;case"y":c=leftPad(d.getFullYear()%100);break;case"Y":c=""+d.getFullYear();break;case"p":c=isAM?""+"am":""+"pm";break;case"P":c=isAM?""+"AM":""+"PM";break;case"w":c=""+d.getDay();break}r.push(c);escape=false}else{if(c=="%"){escape=true}else{r.push(c)}}}return r.join("")}function makeUtcWrapper(d){function addProxyMethod(sourceObj,sourceMethod,targetObj,targetMethod){sourceObj[sourceMethod]=function(){return targetObj[targetMethod].apply(targetObj,arguments)}}var utc={date:d};if(d.strftime!=undefined){addProxyMethod(utc,"strftime",d,"strftime")}addProxyMethod(utc,"getTime",d,"getTime");addProxyMethod(utc,"setTime",d,"setTime");var props=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"];for(var p=0;p<props.length;p++){addProxyMethod(utc,"get"+props[p],d,"getUTC"+props[p]);addProxyMethod(utc,"set"+props[p],d,"setUTC"+props[p])}return utc}function dateGenerator(ts,opts){if(opts.timezone=="browser"){return new Date(ts)}else if(!opts.timezone||opts.timezone=="utc"){return makeUtcWrapper(new Date(ts))}else if(typeof timezoneJS!="undefined"&&typeof timezoneJS.Date!="undefined"){var d=new timezoneJS.Date;d.setTimezone(opts.timezone);d.setTime(ts);return d}else{return makeUtcWrapper(new Date(ts))}}var timeUnitSize={second:1e3,minute:60*1e3,hour:60*60*1e3,day:24*60*60*1e3,month:30*24*60*60*1e3,quarter:3*30*24*60*60*1e3,year:365.2425*24*60*60*1e3};var baseSpec=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]];var specMonths=baseSpec.concat([[3,"month"],[6,"month"],[1,"year"]]);var specQuarters=baseSpec.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);function init(plot){plot.hooks.processOptions.push(function(plot,options){$.each(plot.getAxes(),function(axisName,axis){var opts=axis.options;if(opts.mode=="time"){axis.tickGenerator=function(axis){var ticks=[];var d=dateGenerator(axis.min,opts);var minSize=0;var spec=opts.tickSize&&opts.tickSize[1]==="quarter"||opts.minTickSize&&opts.minTickSize[1]==="quarter"?specQuarters:specMonths;if(opts.minTickSize!=null){if(typeof opts.tickSize=="number"){minSize=opts.tickSize}else{minSize=opts.minTickSize[0]*timeUnitSize[opts.minTickSize[1]]}}for(var i=0;i<spec.length-1;++i){if(axis.delta<(spec[i][0]*timeUnitSize[spec[i][1]]+spec[i+1][0]*timeUnitSize[spec[i+1][1]])/2&&spec[i][0]*timeUnitSize[spec[i][1]]>=minSize){break}}var size=spec[i][0];var unit=spec[i][1];if(unit=="year"){if(opts.minTickSize!=null&&opts.minTickSize[1]=="year"){size=Math.floor(opts.minTickSize[0])}else{var magn=Math.pow(10,Math.floor(Math.log(axis.delta/timeUnitSize.year)/Math.LN10));var norm=axis.delta/timeUnitSize.year/magn;if(norm<1.5){size=1}else if(norm<3){size=2}else if(norm<7.5){size=5}else{size=10}size*=magn}if(size<1){size=1}}axis.tickSize=opts.tickSize||[size,unit];var tickSize=axis.tickSize[0];unit=axis.tickSize[1];var step=tickSize*timeUnitSize[unit];if(unit=="second"){d.setSeconds(floorInBase(d.getSeconds(),tickSize))}else if(unit=="minute"){d.setMinutes(floorInBase(d.getMinutes(),tickSize))}else if(unit=="hour"){d.setHours(floorInBase(d.getHours(),tickSize))}else if(unit=="month"){d.setMonth(floorInBase(d.getMonth(),tickSize))}else if(unit=="quarter"){d.setMonth(3*floorInBase(d.getMonth()/3,tickSize))}else if(unit=="year"){d.setFullYear(floorInBase(d.getFullYear(),tickSize))}d.setMilliseconds(0);if(step>=timeUnitSize.minute){d.setSeconds(0)}if(step>=timeUnitSize.hour){d.setMinutes(0)}if(step>=timeUnitSize.day){d.setHours(0)}if(step>=timeUnitSize.day*4){d.setDate(1)}if(step>=timeUnitSize.month*2){d.setMonth(floorInBase(d.getMonth(),3))}if(step>=timeUnitSize.quarter*2){d.setMonth(floorInBase(d.getMonth(),6))}if(step>=timeUnitSize.year){d.setMonth(0)}var carry=0;var v=Number.NaN;var prev;do{prev=v;v=d.getTime();ticks.push(v);if(unit=="month"||unit=="quarter"){if(tickSize<1){d.setDate(1);var start=d.getTime();d.setMonth(d.getMonth()+(unit=="quarter"?3:1));var end=d.getTime();d.setTime(v+carry*timeUnitSize.hour+(end-start)*tickSize);carry=d.getHours();d.setHours(0)}else{d.setMonth(d.getMonth()+tickSize*(unit=="quarter"?3:1))}}else if(unit=="year"){d.setFullYear(d.getFullYear()+tickSize)}else{d.setTime(v+step)}}while(v<axis.max&&v!=prev);return ticks};axis.tickFormatter=function(v,axis){var d=dateGenerator(v,axis.options);if(opts.timeformat!=null){return formatDate(d,opts.timeformat,opts.monthNames,opts.dayNames)}var useQuarters=axis.options.tickSize&&axis.options.tickSize[1]=="quarter"||axis.options.minTickSize&&axis.options.minTickSize[1]=="quarter";var t=axis.tickSize[0]*timeUnitSize[axis.tickSize[1]];var span=axis.max-axis.min;var suffix=opts.twelveHourClock?" %p":"";var hourCode=opts.twelveHourClock?"%I":"%H";var fmt;if(t<timeUnitSize.minute){fmt=hourCode+":%M:%S"+suffix}else if(t<timeUnitSize.day){if(span<2*timeUnitSize.day){fmt=hourCode+":%M"+suffix}else{fmt="%b %d "+hourCode+":%M"+suffix}}else if(t<timeUnitSize.month){fmt="%b %d"}else if(useQuarters&&t<timeUnitSize.quarter||!useQuarters&&t<timeUnitSize.year){if(span<timeUnitSize.year){fmt="%b"}else{fmt="%b %Y"}}else if(useQuarters&&t<timeUnitSize.year){if(span<timeUnitSize.year){fmt="Q%q"}else{fmt="Q%q %Y"}}else{fmt="%Y"}var rt=formatDate(d,fmt,opts.monthNames,opts.dayNames);return rt}}})})}$.plot.plugins.push({init:init,options:options,name:"time",version:"1.0"});$.plot.formatDate=formatDate;$.plot.dateGenerator=dateGenerator})(jQuery);/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);(function($){var options={};function init(plot){function onResize(){var placeholder=plot.getPlaceholder();if(placeholder.width()==0||placeholder.height()==0)return;plot.resize();plot.setupGrid();plot.draw()}function bindEvents(plot,eventHolder){plot.getPlaceholder().resize(onResize)}function shutdown(plot,eventHolder){plot.getPlaceholder().unbind("resize",onResize)}plot.hooks.bindEvents.push(bindEvents);plot.hooks.shutdown.push(shutdown)}$.plot.plugins.push({init:init,options:options,name:"resize",version:"1.0"})})(jQuery);/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($){function init(plot){var selection={first:{x:-1,y:-1},second:{x:-1,y:-1},show:false,active:false};var savedhandlers={};var mouseUpHandler=null;function onMouseMove(e){if(selection.active){updateSelection(e);plot.getPlaceholder().trigger("plotselecting",[getSelection()])}}function onMouseDown(e){if(e.which!=1)return;document.body.focus();if(document.onselectstart!==undefined&&savedhandlers.onselectstart==null){savedhandlers.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!==undefined&&savedhandlers.ondrag==null){savedhandlers.ondrag=document.ondrag;document.ondrag=function(){return false}}setSelectionPos(selection.first,e);selection.active=true;mouseUpHandler=function(e){onMouseUp(e)};$(document).one("mouseup",mouseUpHandler)}function onMouseUp(e){mouseUpHandler=null;if(document.onselectstart!==undefined)document.onselectstart=savedhandlers.onselectstart;if(document.ondrag!==undefined)document.ondrag=savedhandlers.ondrag;selection.active=false;updateSelection(e);if(selectionIsSane())triggerSelectedEvent();else{plot.getPlaceholder().trigger("plotunselected",[]);plot.getPlaceholder().trigger("plotselecting",[null])}return false}function getSelection(){if(!selectionIsSane())return null;if(!selection.show)return null;var r={},c1=selection.first,c2=selection.second;$.each(plot.getAxes(),function(name,axis){if(axis.used){var p1=axis.c2p(c1[axis.direction]),p2=axis.c2p(c2[axis.direction]);r[name]={from:Math.min(p1,p2),to:Math.max(p1,p2)}}});return r}function triggerSelectedEvent(){var r=getSelection();plot.getPlaceholder().trigger("plotselected",[r]);if(r.xaxis&&r.yaxis)plot.getPlaceholder().trigger("selected",[{x1:r.xaxis.from,y1:r.yaxis.from,x2:r.xaxis.to,y2:r.yaxis.to}])}function clamp(min,value,max){return value<min?min:value>max?max:value}function setSelectionPos(pos,e){var o=plot.getOptions();var offset=plot.getPlaceholder().offset();var plotOffset=plot.getPlotOffset();pos.x=clamp(0,e.pageX-offset.left-plotOffset.left,plot.width());pos.y=clamp(0,e.pageY-offset.top-plotOffset.top,plot.height());if(o.selection.mode=="y")pos.x=pos==selection.first?0:plot.width();if(o.selection.mode=="x")pos.y=pos==selection.first?0:plot.height()}function updateSelection(pos){if(pos.pageX==null)return;setSelectionPos(selection.second,pos);if(selectionIsSane()){selection.show=true;plot.triggerRedrawOverlay()}else clearSelection(true)}function clearSelection(preventEvent){if(selection.show){selection.show=false;plot.triggerRedrawOverlay();if(!preventEvent)plot.getPlaceholder().trigger("plotunselected",[])}}function extractRange(ranges,coord){var axis,from,to,key,axes=plot.getAxes();for(var k in axes){axis=axes[k];if(axis.direction==coord){key=coord+axis.n+"axis";if(!ranges[key]&&axis.n==1)key=coord+"axis";if(ranges[key]){from=ranges[key].from;to=ranges[key].to;break}}}if(!ranges[key]){axis=coord=="x"?plot.getXAxes()[0]:plot.getYAxes()[0];from=ranges[coord+"1"];to=ranges[coord+"2"]}if(from!=null&&to!=null&&from>to){var tmp=from;from=to;to=tmp}return{from:from,to:to,axis:axis}}function setSelection(ranges,preventEvent){var axis,range,o=plot.getOptions();if(o.selection.mode=="y"){selection.first.x=0;selection.second.x=plot.width()}else{range=extractRange(ranges,"x");selection.first.x=range.axis.p2c(range.from);selection.second.x=range.axis.p2c(range.to)}if(o.selection.mode=="x"){selection.first.y=0;selection.second.y=plot.height()}else{range=extractRange(ranges,"y");selection.first.y=range.axis.p2c(range.from);selection.second.y=range.axis.p2c(range.to)}selection.show=true;plot.triggerRedrawOverlay();if(!preventEvent&&selectionIsSane())triggerSelectedEvent()}function selectionIsSane(){var minSize=plot.getOptions().selection.minSize;return Math.abs(selection.second.x-selection.first.x)>=minSize&&Math.abs(selection.second.y-selection.first.y)>=minSize}plot.clearSelection=clearSelection;plot.setSelection=setSelection;plot.getSelection=getSelection;plot.hooks.bindEvents.push(function(plot,eventHolder){var o=plot.getOptions();if(o.selection.mode!=null){eventHolder.mousemove(onMouseMove);eventHolder.mousedown(onMouseDown)}});plot.hooks.drawOverlay.push(function(plot,ctx){if(selection.show&&selectionIsSane()){var plotOffset=plot.getPlotOffset();var o=plot.getOptions();ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var c=$.color.parse(o.selection.color);ctx.strokeStyle=c.scale("a",.8).toString();ctx.lineWidth=1;ctx.lineJoin=o.selection.shape;ctx.fillStyle=c.scale("a",.4).toString();var x=Math.min(selection.first.x,selection.second.x)+.5,y=Math.min(selection.first.y,selection.second.y)+.5,w=Math.abs(selection.second.x-selection.first.x)-1,h=Math.abs(selection.second.y-selection.first.y)-1;ctx.fillRect(x,y,w,h);ctx.strokeRect(x,y,w,h);ctx.restore()}});plot.hooks.shutdown.push(function(plot,eventHolder){eventHolder.unbind("mousemove",onMouseMove);eventHolder.unbind("mousedown",onMouseDown);if(mouseUpHandler)$(document).unbind("mouseup",mouseUpHandler)})}$.plot.plugins.push({init:init,options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})})(jQuery);(function () {
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
        mode: "time",
        color: "transparent"
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
