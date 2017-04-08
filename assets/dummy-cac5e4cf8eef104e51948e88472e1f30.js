"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i,l){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default}),(0,i.default)(o,l.default.modulePrefix),e.default=o}),define("dummy/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("dummy/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({downRed:!0,upRed:!0,leftRed:!0,rightRed:!0,actions:{toggleDown:function(){this.toggleProperty("downRed")},toggleUp:function(){this.toggleProperty("upRed")},toggleLeft:function(){this.toggleProperty("leftRed")},toggleRight:function(){this.toggleProperty("rightRed")}}})}),define("dummy/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("dummy/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var l,o=n.default.exportApplicationGlobal;l="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),i[l]||(i[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[l]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("dummy/initializers/liquid-fire",["exports","liquid-fire/ember-internals"],function(e,t){(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});i.map(function(){}),e.default=i}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){e.default=t.default}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"0DsCt+yQ",block:'{"statements":[["open-element","h1",[]],["flush-element"],["text","liquid-fire-reveal"],["close-element"],["text","\\n\\n"],["open-element","p",[]],["flush-element"],["text","Below are examples of each of the liquid-fire-reveal transitions.\\nFor more information, check out the\\n"],["open-element","a",[]],["static-attr","href","https://github.com/kpfefferle/liquid-fire-reveal"],["flush-element"],["text","GitHub repo"],["close-element"],["text","."],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","id","examples"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","buttons"],["flush-element"],["text","\\n      "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"toggleDown"]],["flush-element"],["text","Click to Run Transition"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["liquid-if"],[["get",["downRed"]]],[["class"],["down"]],7,6],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","buttons"],["flush-element"],["text","\\n      "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"toggleUp"]],["flush-element"],["text","Click to Run Transition"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["liquid-if"],[["get",["upRed"]]],[["class"],["up"]],5,4],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","buttons"],["flush-element"],["text","\\n      "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"toggleLeft"]],["flush-element"],["text","Click to Run Transition"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["liquid-if"],[["get",["leftRed"]]],[["class"],["left"]],3,2],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","buttons"],["flush-element"],["text","\\n      "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"toggleRight"]],["flush-element"],["text","Click to Run Transition"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["block",["liquid-if"],[["get",["rightRed"]]],[["class"],["right"]],1,0],["text","  "],["close-element"],["text","\\n\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content blue"],["flush-element"],["text","revealRight"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content red"],["flush-element"],["text","revealRight"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content blue"],["flush-element"],["text","revealLeft"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content red"],["flush-element"],["text","revealLeft"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content blue"],["flush-element"],["text","revealUp"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content red"],["flush-element"],["text","revealUp"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content blue"],["flush-element"],["text","revealDown"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","div",[]],["static-attr","class","content red"],["flush-element"],["text","revealDown"],["open-element","br",[]],["flush-element"],["close-element"],["text","example"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/transitions",["exports"],function(e){e.default=function(){this.transition(this.hasClass("down"),this.use("revealDown",{duration:1e3})),this.transition(this.hasClass("up"),this.use("revealUp",{duration:1e3})),this.transition(this.hasClass("left"),this.use("revealLeft",{duration:1e3})),this.transition(this.hasClass("right"),this.use("revealRight",{duration:1e3}))}}),define("dummy/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/reveal-down",["exports","dummy/transitions/reveal"],function(e,t){e.default=function(e){return t.default.call(this,"y",1,e)}}),define("dummy/transitions/reveal-left",["exports","dummy/transitions/reveal"],function(e,t){e.default=function(e){return t.default.call(this,"x",-1,e)}}),define("dummy/transitions/reveal-right",["exports","dummy/transitions/reveal"],function(e,t){e.default=function(e){return t.default.call(this,"x",1,e)}}),define("dummy/transitions/reveal-up",["exports","dummy/transitions/reveal"],function(e,t){e.default=function(e){return t.default.call(this,"y",-1,e)}}),define("dummy/transitions/reveal",["exports","liquid-fire"],function(e,t){function n(e,n,o){var r=this,u=void 0,s=void 0,a=void 0,f={},d=l(this);return"x"===e.toLowerCase()?(u="translateX",s="width"):(u="translateY",s="height"),a=d?(0,t.finish)(d,"revealing-out"):t.Promise.resolve(),a.then(function(){var e=i(r,s);return f[u]=e*n+"px",r.oldElement.css({visibility:"",zIndex:1}),r.newElement.css({visibility:"",zIndex:0}),(0,t.animate)(r.oldElement,f,o,"revealing-out")})}function i(e,t){var n=[];return e.newElement&&(n.push(parseInt(e.newElement.css(t),10)),n.push(parseInt(e.newElement.parent().css(t),10))),e.oldElement&&(n.push(parseInt(e.oldElement.css(t),10)),n.push(parseInt(e.oldElement.parent().css(t),10))),Math.max.apply(null,n)}function l(e){for(var n=0;n<e.older.length;n++){var i=e.older[n];if((0,t.isAnimating)(i.element,"revealing-out"))return i.element}if((0,t.isAnimating)(e.oldElement,"revealing-out"))return e.oldElement}e.default=n}),define("dummy/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),i={default:n};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({});