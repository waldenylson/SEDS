var dtjava=function(){function r(d){return(d!=undefined&&d!=null)}function s(d){return(d!=null&&typeof d!="undefined")}function A(d,aU){for(var w=0;w<d.length;w++){if(aU.indexOf(d[w])!=-1){return true}}return false}var v=(function(){var d=document.getElementsByTagName("script");var w=d[d.length-1].getAttribute("src");return w.substring(0,w.lastIndexOf("/")+1)})();var ah=false;postponeNativePluginInstallation=false;var ay="1.7.0_06";var U=document;var N=window;var aF=false;var z=[];var X=null;function k(d){if(aF){d()}else{z[z.length]=d}}function H(){if(!aF){try{var w=U.getElementsByTagName("body")[0].appendChild(U.createElement("div"));w.parentNode.removeChild(w)}catch(aU){return}aF=true;for(var d=0;d<z.length;d++){z[d]()}}}function a(w){if(s(N.addEventListener)){N.addEventListener("load",w,false)}else{if(s(U.addEventListener)){U.addEventListener("load",w,false)}else{if(s(N.attachEvent)){N.attachEvent("onload",w)}else{if(typeof N.onload=="function"){var d=N.onload;N.onload=function(){d();w()}}else{N.onload=w}}}}}function at(){var a7=s(U.getElementById)&&s(U.getElementsByTagName)&&s(U.createElement);var a1=navigator.userAgent.toLowerCase(),a5=navigator.platform.toLowerCase();var ba=a5?/win/.test(a5):/win/.test(a1),aW=a5?/mac/.test(a5):/mac/.test(a1),a0=a5?/linux/.test(a5):/linux/.test(a1),a3=/chrome/.test(a1),d=!a3&&/webkit/.test(a1)?parseFloat(a1.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,a9=/opera/.test(a1),aX=null,w=null;var a4=false;try{a4=s(window.execScript);if(!a4){a4=(navigator.userAgent.match(/Trident/i)!=null)}}catch(aY){a4=false}if(aW){if((a5&&/intel/.test(a5))||/intel/.test(a1)){aX="intel"}var a2=a1.match(/(1[0-9_\.]+)[^0-9_\.]/);w=r(a2)?a2[0].replace(/_/g,"."):null}var a8=navigator.mimeTypes;var aZ=null;var aV=null;var aU=null;for(var a2=0;a2<a8.length;a2++){var a6=navigator.mimeTypes[a2].type;if(a6.indexOf("application/x-java-applet;jpi-version")!=-1&&a6.indexOf("=")!=-1){aZ=a6.substring(a6.indexOf("=")+1)}if(a6.indexOf("application/x-java-applet;deploy")!=-1&&a6.indexOf("=")!=-1){aV=a6.substring(a6.indexOf("=")+1)}if(a6.indexOf("application/x-java-applet;javafx")!=-1&&a6.indexOf("=")!=-1){aU=a6.substring(a6.indexOf("=")+1)}}return{haveDom:a7,wk:d,ie:a4,win:ba,linux:a0,mac:aW,op:a9,chrome:a3,jre:aZ,deploy:aV,fx:aU,cputype:aX,osVersion:w}}var au=false;function aj(){if(au){return}X=at();if(!X.haveDom){return}if((s(U.readyState)&&U.readyState=="complete")||(!s(U.readyState)&&(U.getElementsByTagName("body")[0]||U.body))){H()}if(!aF){if(s(U.addEventListener)){U.addEventListener("DOMContentLoaded",H,false)}if(X.ie&&X.win){if(s(U.addEventListener)){U.addEventListener("onreadystatechange",function(){if(U.readyState=="complete"){U.removeEventListener("onreadystatechange",arguments.callee,false);H()}},false)}else{U.attachEvent("onreadystatechange",function(){if(U.readyState=="complete"){U.detachEvent("onreadystatechange",arguments.callee);H()}})}if(N==top){(function(){if(aF){return}try{U.documentElement.doScroll("left")}catch(d){setTimeout(arguments.callee,0);return}H()})()}}if(X.wk){(function(){if(aF){return}if(!/loaded|complete/.test(U.readyState)){setTimeout(arguments.callee,0);return}H()})()}a(H)}if(!ag()){S()}}function E(d){for(var w in d){this[w]=d[w]}this.toString=function(){return"MISMATCH [os="+this.os+", browser="+this.browser+", jre="+this.jre+", fx="+this.fx+", relaunch="+this.relaunch+", platform="+this.platform+"]"};this.isUnsupportedPlatform=function(){return this.os};this.isUnsupportedBrowser=function(){return this.browser};this.jreStatus=function(){return this.jre};this.jreInstallerURL=function(aU){if(!this.os&&(this.jre=="old"||this.jre=="none")){return al(aU)}return null};this.javafxStatus=function(){return this.fx};this.javafxInstallerURL=function(aU){if(!this.os&&(this.fx=="old"||this.fx=="none")){return Q(aU)}return null};this.canAutoInstall=function(){return F(this.platform,this.jre,this.fx)};this.isRelaunchNeeded=function(){return this.relaunch}}function aH(aU){if(X.fx!=null&&i(aU,X.fx)){return X.fx}var w=f();if(r(w)){try{return w.getInstalledFXVersion(aU)}catch(d){}}return null}function B(d){if(d!=null){return d.join(" ")}else{return null}}function T(w,d){if(r(w)){w.push(d);return w}else{var aU=[d];return aU}}function P(aV,w,d){var aX=an(aV,true);if(!(r(aX)&&r(aX.url))){throw"Required attribute missing! (application url need to be specified)"}w=new dtjava.Platform(w);d=new dtjava.Callbacks(d);var aU=function(){var a1=r(w.jvmargs)?w.jvmargs:null;if(r(w.javafx)){var a7=aH(w.javafx);a1=T(a1," -Djnlp.fx="+a7);if(!r(aV.toolkit)||aV.toolkit=="fx"){a1=T(a1," -Djnlp.tk=jfx")}}if(ag()&&!(X.linux&&X.chrome)){if(aM(aX,a1,d)){return}}var aY=f();if(r(aY)){try{try{if(aQ("10.6+",X.deploy)){var a4={url:aX.url};if(r(a1)){a4.vmargs=a1}if(r(aX.params)){var a0={};for(var a3 in aX.params){a0[a3]=String(aX.params[a3])}a4.params=a0}if(r(aX.jnlp_content)){a4.jnlp_content=aX.jnlp_content}var a2=aY.launchApp(a4);if(a2==0){if(s(d.onRuntimeError)){d.onRuntimeError(aX.id)}}}else{if(!aY.launchApp(aX.url,aX.jnlp_content,B(a1))){if(s(d.onRuntimeError)){d.onRuntimeError(aX.id)}}}return}catch(a5){if(!aY.launchApp(aX.url,aX.jnlp_content)){if(s(d.onRuntimeError)){d.onRuntimeError(aX.id)}}return}}catch(a6){}}var aZ=af(aX.url);if(r(U.body)){U.body.appendChild(aZ)}else{U.write(aZ.innerHTML)}};var aW=M(w);if(aW!=null){V(aX,w,aW,d,aU)}else{aU()}}function J(aU,w,d){if(s(d.onDeployError)){d.onDeployError(aU,w)}}function aL(d){return d!=null&&s(d.version)}function aa(d,aU){var aV=f();if(aV==null){return}if(aL(aV)){aU(aV)}else{var w=null;if(!s(dtjava.dtPendingCnt)||dtjava.dtPendingCnt==0){w=function(){if(aL(aV)){if(r(dtjava.dtPending)){for(var aW in dtjava.dtPending){dtjava.dtPending[aW]()}}return}if(dtjava.dtPendingCnt>0){dtjava.dtPendingCnt--;setTimeout(w,500)}}}if(!r(dtjava.dtPending)||dtjava.dtPendingCnt==0){dtjava.dtPending={}}dtjava.dtPending[d]=aU;dtjava.dtPendingCnt=1000;if(w!=null){w()}}}function V(aW,aV,a2,aX,aZ){var w=f();if(X.chrome&&X.win&&w!=null&&!aL(w)){var d;if(r(aW.placeholder)){var aY=function(){N.open("http://www.java.com/en/download/faq/chrome.xml");return false};var a1="Please give Java permission to run on this browser web page.";var a0="Click for more information.";var a3="";ax(aW,a1,a0,a3,"javafx-chrome.png",aY);d=aW.id+"-embed"}else{a2.jre="blocked";J(aW,a2,aX);d="launch"}var aU=function(){var a5=M(aV);if(a5==null){aZ()}else{V(aW,aV,a5,aX,aZ)}};aa(d,aU);return}if(!a2.isUnsupportedPlatform()&&!a2.isUnsupportedBrowser()){if(am(a2)&&s(aX.onInstallNeeded)){var a4=function(){var a5=M(aV);if(a5==null){aZ()}else{J(aW,a5,aX)}};aX.onInstallNeeded(aW,aV,aX,a2.canAutoInstall(),a2.isRelaunchNeeded(),a4);return}}J(aW,a2,aX)}function ag(){if(X.deploy!=null){return aQ("10.6+",X.deploy)}return false}function ac(d){return d!=null&&s(d.version)}function aP(){return document.getElementById("dtlite")}function j(){if(aP()!=null){return}var w=document.createElement("embed");w.width="10px";w.height="10px";w.id="dtlite";w.type="application/x-java-applet";var aU=document.createElement("div");aU.style.position="relative";aU.style.left="-10000px";aU.appendChild(w);var d=document.getElementsByTagName("body");d[0].appendChild(aU)}function x(w){var aU=aP();if(aU==null){j();aU=aP()}if(ac(aU)){w(aU)}else{var d=null;if(!s(dtjava.dtlitePendingCnt)||dtjava.dtlitePendingCnt==0){d=function(){if(s(aU.version)){if(dtjava.pendingLaunch!=null){dtjava.pendingLaunch(aU)}dtjava.pendingLaunch=null;return}if(dtjava.dtlitePendingCnt>0){dtjava.dtlitePendingCnt--;setTimeout(d,500)}}}dtjava.pendingLaunch=w;dtjava.dtlitePendingCnt=1000;if(d!=null){d()}}}function aM(aV,w,d){var aU=function(){var aW=aP();if(aW==null){if(s(d.onRuntimeError)){d.onRuntimeError(aV.id)}}var aZ={url:aV.url};if(r(w)){aZ.vmargs=w}if(r(aV.params)){var a0={};for(var aX in aV.params){a0[aX]=String(aV.params[aX])}aZ.params=a0}if(r(aV.jnlp_content)){aZ.jnlp_content=aV.jnlp_content}var aY=aW.launchApp(aZ);if(aY==0){if(s(d.onRuntimeError)){d.onRuntimeError(aV.id)}}};if(aQ("10.4+",X.deploy)){x(aU);return true}return false}function af(w){var d=null;if(X.ie){d=U.createElement("object");d.width="1px";d.height="1px";var aU=U.createElement("param");aU.name="launchjnlp";aU.value=w;d.appendChild(aU);aU=U.createElement("param");aU.name="docbase";aU.value=r(U.documentURI)?U.documentURI:U.URL;d.appendChild(aU);if(!X.ie){d.type="application/x-java-applet;version=1.7"}else{d.classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"}}else{d=U.createElement("embed");d.width="0px";d.height="0px";d.setAttribute("launchjnlp",w);d.setAttribute("docbase",(r(U.documentURI)?U.documentURI:U.URL));d.type="application/x-java-applet;version=1.7"}var aV=U.createElement("div");aV.style.position="relative";aV.style.left="-10000px";aV.appendChild(d);return aV}function i(aU,d){if(aU==null||aU.length==0){return true}var aV=aU.charAt(aU.length-1);var w=(aV=="*");if(!w){if(aV=="+"){return aQ(aU,d)}else{return aQ(aU+"+",d)}}else{return(aQ(aU.charAt(0)+".*",d)&&aQ(aU.substring(0,aU.length-1)+"+",d))}}function t(w){if(w!=null){var aU=w.charAt(w.length-1);if(aU<"0"||aU>"9"){w=w.substring(0,w.length-1)}}if(w==null||w.length==0){return[0,0,0,0]}var d=w.split(".");while(d.length<4){d.push(0)}return d}function aQ(aV,w){if(aV==null||aV.length==0){return true}var aY=aV.charAt(aV.length-1);if(aY!="+"&&aY!="*"&&!(aV.indexOf("_")!=-1&&aY!="_")){aV=aV+"*";aY="*"}aV=aV.substring(0,aV.length-1);if(aV.length>0){var aX=aV.charAt(aV.length-1);if(aX=="."||aX=="_"){aV=aV.substring(0,aV.length-1)}}if(aY=="*"){return(w.indexOf(aV)==0)}else{if(aY=="+"){var aW=t(aV);var aU=t(w);for(var d=0;d<aW.length;d++){if(aW[d]<aU[d]){return true}else{if(aW[d]>aU[d]){return false}}}return true}}return false}function aI(){if(!ag()){if(postponeNativePluginInstallation&&r(U.body)){S();postponeNativePluginInstallation=false}var d=f();if(d!=null){return true}return false}return true}function u(aZ){if(X.jre!=null){if(aQ(aZ,X.jre)){return"ok"}}var aY=f();if(aY!=null){var aV=aY.jvms;for(var aX=0;aV!=null&&aX<aV.getLength();aX++){if(aQ(aZ,aV.get(aX).version)){if(!X.ie&&r(navigator.mimeTypes)){if(!r(navigator.mimeTypes["application/x-java-applet"])){return"disabled"}}return"ok"}}return"none"}if(X.ie){var d=["1.8.0","1.7.0","1.6.0","1.5.0"];for(var aU=0;aU<d.length;aU++){if(aQ(aZ,d[aU])){try{var aW=new ActiveXObject("JavaWebStart.isInstalled."+d[aU]+".0");return"ok"}catch(w){}}}}return"none"}function C(){var w=["iPhone","iPod"];var aU=A(w,navigator.userAgent);var d=(X.mac&&X.chrome&&X.cputype=="intel");auto=aU||(f()!=null);return{os:aU,browser:d,auto:auto}}function ai(){if(X.ie){try{var d=10*ScriptEngineMajorVersion()+ScriptEngineMinorVersion();if(d<57){return true}}catch(w){return true}}return false}function aD(){var d;if(X.win){d=X.op||X.wk||ai();return{os:false,browser:d}}else{if(X.mac&&X.cputype=="intel"){var w=!aQ("10.7.3+",X.osVersion);d=X.op||(X.mac&&X.chrome);return{os:w,browser:d}}else{if(X.linux){d=X.op;return{os:false,browser:d}}else{return{os:true,browser:false}}}}}function ao(d){if(r(d)&&d.length>0){var w=d.charAt(d.length-1);if(w=="*"){d=d.substring(0,d.length-1)+"+"}else{if(w!="+"){d=d+"+"}}}return d}function M(d){var w=new dtjava.Platform(d);w.jvm=ao(w.jvm);return g(w)}function g(aU){aU=new dtjava.Platform(aU);var aV="ok",a2="ok",a1=false,aX=false,aY=false,w,d;if(r(aU.jvm)&&u(aU.jvm)!="ok"){var aZ=u("*");if(aZ=="ok"){a2="old"}else{a2=aZ}d=C();if(d.os){a2="unsupported";aX=true}aY=d.browser}if(r(aU.javafx)){d=aD();if(d.os||d.browser){aV="unsupported";aX=aX||d.os;aY=aY||d.browser}else{if(X.fx!=null){if(i(aU.javafx,X.fx)){aV="ok"}else{if(i("2.0+",X.fx)){aV="old"}}}else{if(X.win){try{w=f();var a0=w.getInstalledFXVersion(aU.javafx);if(a0==""||a0==null){a0=w.getInstalledFXVersion("2.0+");if(a0==null||a0==""){aV="none"}else{aV="old"}}}catch(aW){aV="none"}}else{if(X.mac||X.linux){aV="none"}}}}}a1=a1||(!aX&&aY);if(aV!="ok"||a2!="ok"||a1||aX||aY){return new E({fx:aV,jre:a2,relaunch:a1,os:aX,browser:aY,platform:aU})}else{if(!aI()){return new E({fx:aV,jre:"none",relaunch:a1,os:aX,browser:aY,platform:aU})}}return null}function R(){var d=null;d=navigator.userLanguage;if(d==null){d=navigator.systemLanguage}if(d==null){d=navigator.language}if(d!=null){d=d.replace("-","_")}return d}function al(d){if(!r(d)){d=R()}return"http://java.com/dt-redirect?"+((r(window.location)&&r(window.location.href))?("&returnPage="+window.location.href):"")+(r(d)?("&locale="+d):"")}function Q(d){return"http://www.oracle.com/technetwork/java/javafx/downloads/index.html"}function am(d){if(d!=null){var aU=d.jreStatus();var w=d.javafxStatus();return(aU=="none"||w=="none"||aU=="old"||w=="old")&&(w!="disabled"&&aU!="disabled")}return false}function aw(w,aU,aV,a0,aY,a2){var a1,d;if(aU){a1="Java";d="java"}else{a1="JavaFX";d="javafx"}var aX,aW,aZ;if(aV){aX="A newer version of "+a1+"is required to view the content on this page.";aW="Please click here to update "+a1;aZ="upgrade_"+d+".png"}else{aX="View the content on this page.";aW="Please click here to install "+a1;aZ="get_"+d+".png"}var a3="Click to install "+a1;ax(w,aX,aW,a3,aZ,a2)}function ax(w,aX,aW,a0,aY,aZ){var d=U.createElement("div");d.width=aK(w.width);d.height=aK(w.height);var aV=U.createElement("a");aV.href="";aV.onclick=function(){aZ();return false};if(w.width<250||w.height<160){d.appendChild(U.createElement("p").appendChild(U.createTextNode(aX)));aV.appendChild(U.createTextNode(aW));d.appendChild(aV)}else{var aU=U.createElement("img");aU.src=v+aY;aU.alt=a0;aU.style.borderWidth="0px";aU.style.borderStyle="none";aV.appendChild(aU);d.appendChild(aV)}m(w.placeholder);w.placeholder.appendChild(d)}function aq(d){if(aQ(d.jvm,ay)&&i(d.javafx,"2.2.0")){return true}return false}function l(aV,w,aW,aZ,a0,a1){var aY=function(){e(aV,w,aW,a1)};var a2=g(w);if(!r(a2)){if(r(a1)){a1()}}var aX=r(a2)&&(a2.javafxStatus()=="old"||a2.jreStatus()=="old");if(r(aV.placeholder)){if(aq(w)){aw(aV,true,aX,aZ,a0,aY)}else{aw(aV,(a2.jreStatus()!="ok"),aX,aZ,a0,aY)}}else{var d=aZ;var aU=null;if(!d){if(aq(w)){if(aX){aU="A newer version of Java is required to view the content on this page. Please click here to update Java."}else{aU="To view the content on this page, please click here to install Java."}d=confirm(aU)}else{if(aX){aU="A newer version of JavaFX is required to view the content on this page. Please click here to update JavaFX."}else{aU="To view the content on this page, please click here to install JavaFX."}d=confirm(aU)}}if(d){aY()}}}function n(d){if(!X.ie){return true}if(aQ("10.0.0+",f().version)){return true}if(d==null){return false}return !aQ("1.6.0_33+",d)}function F(d,aV,w){if(!X.win){return false}var aU=f();if(aU==null||!s(aU.version)){return false}if(aV!="ok"){if(!n(d.jvm)){return false}}if(w!="ok"){if(!aq(d)){if(!aQ("10.0.0+",f().version)){return false}}else{if(!n(ay)){return false}}}return true}function e(aV,aU,aW,aZ){var a1=g(aU);aW=new dtjava.Callbacks(aW);if(r(a1)&&a1.isUnsupportedPlatform()){J(aV,a1,aW);return false}var a0=(aV!=null)?aV.placeholder:null;var d,aX;if(am(a1)){if(a1.canAutoInstall()){var w=f();var aY=function(){var a4=function(a5){if(a5==10000+1){return}d=["success","ignore","error:download","error:generic","error:generic","error:generic","error:generic","error:cancelled"];if(a5>19900){if(a5==20000+1602||a5===20000-2){aX="error:cancelled"}else{aX="error:generic"}}else{if(a5>=10000&&a5<=19900){aX=(a5>=10000&&a5<10000+d.length)?d[a5-10000]:"error:unknown"}else{aX="error:generic"}}if(s(aW.onInstallFinished)){aW.onInstallFinished(a0,"javafx",aX,a1.isRelaunchNeeded())}if(a5==0){if(r(aZ)){aZ()}}};if(s(aW.onInstallStarted)){aW.onInstallStarted(a0,"JavaFX",true,true)}var a3=0;try{a3=w.installJavaFX(aU.javafx,a4)}catch(a2){a3=0}if(a3==0){a3=w.installJavaFX(aU.javafx);setTimeout(function(){setTimeout(function(){a4(a3?1:0)},0)},0)}};if(a1.jre!="ok"||aq(aU)){setTimeout(function(){var a3=function(a6){if(a6==10000+1){return}if(a6>19900){aX="error:generic"}else{if(a6==-1){aX="error:generic"}else{if(a6>10000){aX="error:generic"}else{if(a6==0){aX="success"}else{aX="error:generic"}}}}if(s(aW.onInstallFinished)){aW.onInstallFinished(a0,"jre",aX,a1.isRelaunchNeeded())}if(a6==0){a1=g(aU);if(a1!=null&&a1.jre=="ok"&&!ah&&a1.fx!="ok"){setTimeout(aY,0)}else{if(aZ!=null){aZ()}}}};if(s(aW.onInstallStarted)){aW.onInstallStarted(a0,"Java",true,true)}var a4=0;try{a4=w.installJRE(aU.jvm,aU.javafx,a3)}catch(a2){a4=0}if(a4==0){var a5=aU.jvm;if(a1.fx!="ok"&&aq(aU)){a5=ay;if(aU.jvm.indexOf("*")!=-1){a5+="*"}else{if(aU.jvm.indexOf("+")!=-1){a5+="+"}}}try{a4=w.installJRE(a5,a3)}catch(a2){a4=0}if(a4==0){try{a4=w.installJRE(a5)}catch(a2){a4=0}setTimeout(function(){setTimeout(function(){a3(a4)},0)},0)}}},0)}else{if(!ah&&a1.fx!="ok"){setTimeout(aY,0)}}}else{if(a1.jre!="ok"||aq(aU)){if(s(aW.onInstallStarted)){aW.onInstallStarted(a0,"Java",false,f()!=null)}aO()}else{if(a1.fx!="ok"){if(s(aW.onInstallStarted)){aW.onInstallStarted(a0,"JavaFX",false,f()!=null)}aJ()}else{J(aV,a1,aW)}}}}else{if(aZ!=null){aZ()}return true}return false}function aO(){N.open(al())}function aJ(){N.open(ab)}function aS(aX){if(aX.placeholder!=null){var aV=aX.width,aZ=aX.height;var aY=!(aV<100&&aZ<100);var aU=aY?"javafx-loading-100x100.gif":"javafx-loading-25x25.gif";var d=aY?80:25;var aW=aY?80:25;var w=U.createElement("img");w.src=v+aU;w.alt="";w.style.position="relative";w.style.top="50%";w.style.left="50%";w.style.marginTop=aK(-aW/2);w.style.marginLeft=aK(-d/2);return w}else{return null}}function aC(w){if(w.placeholder!=null){var d=U.createElement("p");d.appendChild(U.createTextNode("FIXME - add real message!"));return d}return null}function m(d){while(d.hasChildNodes()){d.removeChild(d.firstChild)}}function ad(aW,aU,d,w){if(aW!=null){var aV=null;if(d){aV=(aU=="JavaFX")?"install:inprogress:javafx":"install:inprogress:jre"}else{aV=(aU=="JavaFX")?"install:inprogress:javafx:manual":"install:inprogress:jre:manual"}aN(aV)}}function o(aX,w,d,aW){var aU;if(d!="success"){var aV=null;if(w=="javafx"){if(!aI()){aV="install:fx:error:nojre"}else{aV="install:fx:"+d}}else{aV="install:jre:"+d}if(aX!=null){aU=O(aV,null);m(aX);aX.appendChild(aU)}else{N.alert(ar(aV))}}else{if(aW){aU=aN("install:fx:restart");m(aX);aX.appendChild(aU)}}}function aT(w,d){if(d==null){code="success"}else{if(d.isUnsupportedBrowser()){code="browser"}else{if(d.jreStatus()!="ok"){code="jre:"+d.jreStatus()}else{if(d.javafxStatus()!="ok"){code="javafx:"+d.javafxStatus()}else{if(d.isRelaunchNeeded()){code="relaunch"}else{code="unknown "+d.toString()}}}}}if(w.placeholder!=null){D(w.id,code,null)}else{N.alert(ar(code))}}function W(w){var d=L(w);if(K(w)!=null){D(w,"launch:fx:generic:embedded",function(){ap(L(w),false);return false})}else{N.alert(ar("launch:fx:generic"))}}function f(){navigator.plugins.refresh(false);return document.getElementById("dtjavaPlugin")}function S(){if(f()!=null){return}if(!r(U.body)&&!aF){k(function(){S()});postponeNativePluginInstallation=true;return}var aU=null;if(X.ie){aU=U.createElement("object");aU.width="1px";aU.height="1px";aU.classid="clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA"}else{if(!X.wk&&!X.op&&navigator.mimeTypes!=null){var aW="application/java-deployment-toolkit";var aV=false;for(var w=0;w<navigator.mimeTypes.length;w++){var d=navigator.mimeTypes[w];aV=aV||((d.type==aW)&&d.enabledPlugin)}if(aV){aU=U.createElement("embed");aU.setAttribute("type",aV?aW:oldMimeType);aU.setAttribute("hidden","true")}}}if(aU!=null){aU.setAttribute("id","dtjavaPlugin");U.body.appendChild(aU)}}var y=0;function az(d){if(r(d.id)){return d.id}else{y++;return("dtjava-app-"+y)}}function G(aU,aW,aX){var w=U.createElement("div");w.width=aK(aU.width);w.height=aK(aU.height);w.id=aU.id+"-app";w.style.position="relative";var d=U.createElement("applet");d.code="dummy.class";d.id=aU.id;d.width=aK(aU.width);d.height=aK(aU.height);var aY={jnlp_href:aU.url,java_status_events:true,type:"application/x-java-applet"};if(r(aU.jnlp_content)){aY.jnlp_embedded=aU.jnlp_content}if(r(aW.javafx)){if(!r(aU.toolkit)||aU.toolkit=="fx"){aY.javafx_version=((aW.javafx=="*")?"2.0+":aW.javafx)}aY.separate_jvm=true;aY.javafx_applet_id=d.id;aY.scriptable=true}else{if(aU.scriptable){aY.scriptable=true}if(aU.sharedjvm){aY.separate_jvm=true}}if(r(aW.jvmargs)){aY.java_arguments=aW.jvmargs}var aZ,aV;for(aZ in aU.params){if(!r(aY[aZ])){aV=U.createElement("param");aV.name=aZ;aV.value=aU.params[aZ];d.appendChild(aV)}}for(aZ in aY){aV=U.createElement("param");aV.name=aZ;aV.value=aY[aZ];d.appendChild(aV)}if(s(aX.onGetNoPluginMessage)){aV=U.createElement("noapplet");var a0=aX.onGetNoPluginMessage(aU);aV.appendChild(a0)}w.appendChild(d);return w}function L(w){var d=U.getElementById(w+"-app");if(d==null){d=U.getElementById(w)}return d}function ap(w,d){if(!r(w)){return}if(d){w.style.left=-10000}else{w.style.left="0px"}}function Y(w,d){if(!r(w)){return}if(d){w.style.visibility="hidden"}else{w.style.visibility="visible"}}function h(aV){try{var aU=K(aV);if(aU!=null&&aU.style!=null&&aU.style.visibility=="visible"){return}var d=L(aV);ap(d,false);Y(U.getElementById(aV+"-splash"),true)}catch(w){}}var ab="http://java.com/javafx";var ak={"launch:fx:generic":["JavaFX application could not launch due to system configuration."," See ","a","http://java.com/javafx","java.com/javafx"," for troubleshooting information."],"launch:fx:generic:embedded":["JavaFX application could not launch due to system configuration ","(","onclick","show error details",")."," See ","a","http://java.com/javafx","java.com/javafx"," for troubleshooting information."],"install:fx:restart":["Restart your browser to complete the JavaFX installation,"," then return to this page."],"install:fx:error:generic":["JavaFX install not completed."," See ","a","http://java.com/javafx","java.com/javafx"," for troubleshooting information."],"install:fx:error:download":["JavaFX install could not start because of a download error."," See ","a","http://java.com/javafx","java.com/javafx"," for troubleshooting information."],"install:fx:error:cancelled":["JavaFX install was cancelled."," Reload the page and click on the download button to try again."],"install:jre:error:cancelled":["Java install was cancelled."," Reload the page and click on the download button to try again."],"install:jre:error:generic":["Java install not completed."," See ","a","http://java.com/","java.com"," for troubleshooting information."],"install:jre:error:download":["Java install could not start because of a download error."," See ","a","http://java.com/","java.com/"," for troubleshooting information."],"install:inprogress:jre":["Java install in progress."],"install:inprogress:javafx":["JavaFX install in progress."],"install:inprogress:javafx:manual":["Please download and run JavaFX Setup from ","a",Q(null),"java.com/javafx",". When complete, restart your browser to finish the installation,"," then return to this page."],"install:inprogress:jre:manual":["Please download and run Java Setup from ","a",al(),"java.com/download",". When complete, reload the page."],"install:fx:error:nojre":["b","Installation failed.","br","Java Runtime is required to install JavaFX and view this content. ","a",al(),"Download Java Runtime"," and run the installer. Then reload the page to install JavaFX."],browser:["Content can not be displayed using your Web browser. Please open this page using another browser."],"jre:none":["JavaFX application requires a recent Java runtime. Please download and install the latest JRE from ","a","http://java.com","java.com","."],"jre:old":["JavaFX application requires a recent Java runtime. Please download and install the latest JRE from ","a","http://java.com","java.com","."],"jre:plugin":["b","A Java plugin is required to view this content.","br","Make sure that ","a","http://java.com","a recent Java runtime"," is installed, and the Java plugin is enabled."],"jre:blocked":["Please give Java permission to run. This will allow Java to present content provided on this page."],"jre:unsupported":["b","Java is required to view this content but Java is currently unsupported on this platform.","br","Please consult ","a","http://java.com","the Java documentation"," for list of supported platforms."],"jre:browser":["b","Java plugin is required to view this content but Java plugin is currently unsupported in this browser.","br","Please try to launch this application using other browser. Please consult ","a","http://java.com","the Java documentation"," for list of supported browsers for your OS."],"javafx:unsupported":["b","JavaFX 2.0 is required to view this content but JavaFX is currently unsupported on this platform.","br","Please consult ","a",ab,"the JavaFX documentation"," for list of supported platforms."],"javafx:old":["This application requires newer version of JavaFX runtime. ","Please download and install the latest JavaFX Runtime from ","a",ab,"java.com/javafx","."],"javafx:none":["b","JavaFX 2.0 is required to view this content.","br","a",ab,"Get the JavaFX runtime from java.com/javafx"," and run the installer. Then restart the browser."],"javafx:disabled":["JavaFX is disabled. Please open Java Control Panel, switch to Advanced tab and enable it. ","Then restart the browser."],"jre:oldplugin":["New generation Java plugin is required to view this content. Please open Java Control Panel and enable New Generation Java Plugin."],"jre:disabled":["Java plugin appear to be disabled in your browser. "," Please enable Java in the browser options."]};function aB(w,d,aX){var aV=0;var aU=U.createElement("p");if(d!=null){aU.appendChild(d)}var aW;while(aV<w.length){switch(w[aV]){case"a":aW=U.createElement(w[aV]);aW.href=w[aV+1];aW.appendChild(U.createTextNode(w[aV+2]));aV=aV+2;break;case"br":aW=U.createElement(w[aV]);break;case"b":aW=U.createElement(w[aV]);aW.appendChild(U.createTextNode(w[aV+1]));aV++;break;case"onclick":aW=U.createElement("a");aW.href="";if(aX==null){aX=function(){return false}}aW.onclick=aX;aW.appendChild(U.createTextNode(w[aV+1]));aV=aV+1;break;default:aW=U.createTextNode(w[aV]);break}aU.appendChild(aW);aV++}return aU}function ar(aV){var w="";var d=ak[aV];var aU=0;if(r(d)){while(aU<d.length){if(d[aU]!="a"&&d[aU]!="br"&&d[aU]!="b"){w+=d[aU]}else{if(d[aU]=="a"){aU++}}aU++}}else{w="Unknown error: ["+aV+"]"}return w}function K(d){return U.getElementById(d+"-error")}function D(aV,d,w){var aU=K(aV);if(!r(aU)){return}m(aU);aU.appendChild(O(d,w));aU.style.visibility="visible";Y(U.getElementById(aV+"-splash"),true);ap(L(aV),true)}function O(aV,aW){var aU=U.createElement("div");var w=U.createElement("img");w.src=v+"error.png";w.width="16px";w.height="16px";w.alt="";w.style.cssFloat="left";w.style.styleFloat="left";w.style.margin="0px 10px 60px 10px";w.style.verticalAlign="text-top";var d=ak[aV];if(!r(d)){d=[aV]}var aX=null;if(s(aW)){aX=function(){if(r(aU.parentNode)){aU.parentNode.removeChild(aU)}try{aW()}catch(aY){}return false}}aU.appendChild(aB(d,w,aX));return aU}function aN(aU){var w=U.createElement("div");var d=ak[aU];if(!r(d)){d=[aU]}w.appendChild(aB(d,null,null));return w}function an(w,d){var aU=null;if(r(w)){if(d&&typeof w==="string"){aU=new dtjava.App(w,null)}else{if(w instanceof dtjava.App){aU=w}else{aU=new dtjava.App(w.url,w)}}}return aU}function ae(w,aU){var d=new dtjava.Callbacks(aU);if(w.javafx==null&&d.onGetSplash===aS){d.onGetSplash=null}return d}function aK(d){if(isFinite(d)){return d+"px"}else{return d}}function Z(aU,w,aV){var d=aU.id+"-"+aV;var aW=U.createElement("div");aW.id=d;aW.style.width=aK(aU.width);aW.style.height=aK(aU.height);aW.style.position="absolute";aW.style.backgroundColor="white";if(w!=null){aW.appendChild(w)}return aW}var b={};function aA(aV,d){if(d==null){d=b[aV];if(r(d)){b[aV]=null}else{return}}var w=document.getElementById(aV);if(!r(w)){return}if(s(d.onJavascriptReady)){var aU=d.onJavascriptReady;if(w.status<2){w.onLoad=function(){aU(aV);w.onLoad=null}}}if(s(d.onRuntimeError)){if(w.status<3){w.onError=function(){d.onRuntimeError(aV)}}else{if(w.status==3){d.onRuntimeError(aV)}}}}function aE(aU,d){if(!r(d)||!(s(d.onDeployError)||s(d.onJavascriptReady))){return null}var w=U.createElement("script");b[aU]=d;w.text="dtjava.installCallbacks('"+aU+"')";return w}function aR(w){var d=Z(w,null,"error");d.style.visibility="hidden";return d}function I(aV,w,aW){var aZ=an(aV,false);if(!(r(aZ)&&r(aZ.url)&&r(aZ.width)&&r(aZ.height)&&r(aZ.placeholder))){throw"Required attributes are missing! (url, width, height and placeholder are required)"}aZ.id=az(aZ);if((typeof aZ.placeholder=="string")){var aX=U.getElementById(aZ.placeholder);if(aX==null){throw"Application placeholder [id="+aZ.placeholder+"] not found."}aZ.placeholder=aX}aZ.placeholder.appendChild(aR(aZ));w=new dtjava.Platform(w);var d=ae(w,aW);var aU=M(w);var aY=function(){var a1=G(aZ,w,d);var a2=(d.onGetSplash==null)?null:d.onGetSplash(aV);aZ.placeholder.style.position="relative";if(a2!=null){var a0=Z(aZ,a2,"splash");Y(a0,false);ap(a1,true);m(aZ.placeholder);aZ.placeholder.appendChild(aR(aZ));aZ.placeholder.appendChild(a0);aZ.placeholder.appendChild(a1)}else{m(aZ.placeholder);aZ.placeholder.appendChild(aR(aZ));aZ.placeholder.appendChild(a1)}setTimeout(function(){aA(aZ.id,d)},0)};if(aU!=null){V(aZ,w,aU,d,aY)}else{aY()}}function q(aW){if(r(aW)){var d=aW.width;var aV=aW.height;var aU="dummy";return new dtjava.App(aU,{id:aW.id,width:d,height:aV,placeholder:aW.parentNode})}else{throw"Can not find applet with null id"}}function aG(aZ,w,aX){var aU=U.getElementById(aZ);var aY=q(aU);var d=ae(w,aX);w=new dtjava.Platform(w);var aW=function(){aY.placeholder.insertBefore(aR(aY),aU);if(d.onGetSplash!=null){var a1=d.onGetSplash(aY);if(r(a1)){var a0=Z(aY,a1,"splash");if(r(a0)){aY.placeholder.style.position="relative";aY.placeholder.insertBefore(a0,aU);ap(aU,true)}}}};var aV=M(w);if(aV!=null){V(aY,w,aV,d,aW)}else{aW()}}function av(aU,w,d){k(function(){aG(aU,w,d)})}aj();return{version:"20120720",validate:function(d){return g(d)},install:function(d,w){return e(null,d,w,null)},launch:function(w,d,aU){return P(w,d,aU)},embed:function(aU,w,d){return I(aU,w,d)},register:function(aU,d,w){return av(aU,d,w)},hideSplash:function(d){return h(d)},addOnloadCallback:function(w,d){if(d||(X.chrome&&!X.win)){a(w)}else{k(w)}},installCallbacks:function(w,d){aA(w,d)},Platform:function(w){this.jvm="1.6+";this.javafx=null;this.plugin="*";this.jvmargs=null;for(var d in w){this[d]=w[d];if(this["jvmargs"]!=null&&typeof this.jvmargs=="string"){this["jvmargs"]=this["jvmargs"].split(" ")}}this.toString=function(){return"Platform [jvm="+this.jvm+", javafx="+this.javafx+", plugin="+this.plugin+", jvmargs="+this.jvmargs+"]"}},App:function(d,w){this.url=d;this.scriptable=true;this.sharedjvm=true;if(w!=undefined&&w!=null){this.id=w.id;this.jnlp_content=w.jnlp_content;this.width=w.width;this.height=w.height;this.params=w.params;this.scriptable=w.scriptable;this.sharedjvm=w.sharedjvm;this.placeholder=w.placeholder;this.toolkit=w.toolkit}this.toString=function(){var aU="null";var aV=true;if(r(this.params)){aU="{";for(p in this.params){aU+=((aV)?"":", ")+p+" => "+this.params[p];aV=false}aU+="}"}return"dtjava.App: [url="+this.url+", id="+this.id+", dimensions=("+this.width+","+this.height+"), toolkit="+this.toolkit+", embedded_jnlp="+(r(this.jnlp_content)?(this.jnlp_content.length+" bytes"):"NO")+", params="+aU+"]"}},Callbacks:function(d){this.onGetSplash=aS;this.onInstallNeeded=l;this.onInstallStarted=ad;this.onInstallFinished=o;this.onDeployError=aT;this.onGetNoPluginMessage=aC;this.onJavascriptReady=null;this.onRuntimeError=W;for(c in d){this[c]=d[c]}}}}();