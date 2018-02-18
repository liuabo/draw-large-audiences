(function(window){var svgSprite='<svg><symbol id="icon-jiantou-copy-copy" viewBox="0 0 1024 1024"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z"  ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M613.475512 1021.090975H410.530306c-192.501807 0-344.539079 0-344.539079-99.843549v-19.973364c0-187.120111 154.57976-339.331924 344.539079-339.331924h202.939388c189.959319 0 344.544897 152.211813 344.544897 339.331924v19.973364c-0.034908 99.843549-159.717097 99.843549-344.539079 99.843549zM410.495398 621.792414c-156.941888 0-284.648076 125.349878-284.648076 279.44674v19.967546c0 39.964183 164.505352 39.964183 284.648076 39.964182h202.945206c99.45374 0 284.653894 0 284.653894-39.964182v-19.967546c0-154.096861-127.712007-279.44674-284.653894-279.44674H410.495398z m91.343378-79.881821c-150.832936 0-273.483239-120.904889-273.483239-269.521147 0-148.610441 122.656121-269.480421 273.483239-269.480421s273.483239 120.86998 273.483239 269.480421c0 148.616259-122.685212 269.521147-273.483239 269.521147zM288.24654 272.389446c0 115.563919 95.817459 209.630145 213.592236 209.630144 117.786414 0 213.598055-94.031317 213.598055-209.630144S619.619372 62.794209 501.838776 62.794209c-117.774778 0-213.592237 94.037136-213.592236 209.595237z"  ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M671.589 511.711l-39.518-39.518-230.692-230.692-0.021 0.021a28.115 28.115 0 0 0-0.809-0.851c-10.935-10.935-28.663-10.935-39.598 0-10.935 10.935-10.935 28.663 0 39.598 0.278 0.278 0.564 0.545 0.851 0.809l-0.021 0.021L592.472 511.79l-231.94 231.94c-10.935 10.935-10.935 28.663 0 39.598s28.663 10.935 39.598 0L671.668 511.79l-0.079-0.079z"  ></path></symbol><symbol id="icon-menu2" viewBox="0 0 1024 1024"><path d="M918.507 443.947H104.64c-37.547 0-68.16 30.72-68.16 68.16 0 37.546 30.72 68.16 68.16 68.16h813.867c37.546 0 68.16-30.72 68.16-68.16s-30.72-68.16-68.16-68.16z m-0.32 306.88H104.32c-37.547 0-68.16 30.72-68.16 68.16 0 37.546 30.72 68.16 68.16 68.16h813.867c37.546 0 68.16-30.72 68.16-68.16 0-37.547-30.614-68.16-68.16-68.16z m1.066-610.667H105.387c-37.547 0-68.16 30.72-68.16 68.16 0 37.547 30.72 68.16 68.16 68.16h813.866c37.547 0 68.16-30.72 68.16-68.16 0-37.547-30.72-68.16-68.16-68.16z" fill="#555555" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)