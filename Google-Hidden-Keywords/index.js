/*
Update:
V 1.1 - Jan 21, 2019
V 1.0 - init, Sep 24, 2018
*/

// bookmarklet, compressed code
javascript:(function(){for(var d="",a=document.querySelectorAll("div[data-base-uri] > div[jsname]"),b=0;b<a.length;b++){a[b].querySelector("div[jsname]").style="display:inherit;";a[b].style="display:inherit; opacity:1; border:1px solid #bbb; padding:5px; font-weight:bold; margin-left:0px; background:#eaeac3;";for(var e=a[b].querySelectorAll("div[data-ved]"),c=0;c<e.length;c++)d+=e[c].textContent+"\r\n"}a=document.createElement("textarea");a.value=d;a.spellcheck=!1;a.onclick=function(){this.select()};a.style="width: 400px;height: 300px;position: absolute;top: 125px;z-index: 9999;right:0;white-space: pre;";document.body.appendChild(a)})();

// pretty print code
(function() {
  var selector = 'div[data-base-uri] > div[jsname]';
  for (var d = "", a = document.querySelectorAll(selector), b = 0; b < a.length; b++) {
    a[b].querySelector("div[jsname]").style = "display:inherit;"
    a[b].style = "display:inherit; opacity:1; border:1px solid #bbb; padding:5px; font-weight:bold; margin-left:0px; background:#eaeac3;";
    for (var e = a[b].querySelectorAll("div[data-ved]"), c = 0; c < e.length; c++) {
      d += e[c].textContent + "\r\n";
    }
  }
  a = document.createElement("textarea");
  a.value = d;
  a.spellcheck = !1;
  a.onclick = function() {
    this.select();
  };
  a.style = "width: 400px;height: 300px;position: absolute;top: 125px;z-index: 9999;right:0;white-space: pre;";
  document.body.appendChild(a);
})();

