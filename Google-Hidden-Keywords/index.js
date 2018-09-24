// bookmarklet, compressed code
javascript:(function(){for(var d="",a=document.getElementsByTagName("div"),b=0;b<a.length;b++)if(/eobd_\d+/.test(a[b].id)){a[b].style="display: inherit;border: 1px solid #bbb;padding: 5px;font-weight: bold;margin-left: 15px;background: #eaeac3;";for(var e=a[b].getElementsByTagName("div"),c=0;c<e.length;c++)d+=e[c].textContent+"\r\n"}else/eobm_\d+/.test(a[b].id)&&(a[b].style="display:inherit;opacity:1;");a=document.createElement("textarea");a.value=d;a.spellcheck=!1;a.onclick=function(){this.select()};a.style="width: 400px;height: 300px;position: absolute;top: 125px;z-index: 9999;right:0;white-space: pre;";document.body.appendChild(a)})();

// pretty print code
(function() {
  for (var d = "", a = document.getElementsByTagName("div"), b = 0; b < a.length; b++) {
    if (/eobd_\d+/.test(a[b].id)) {
      a[b].style = "display: inherit;border: 1px solid #bbb;padding: 5px;font-weight: bold;margin-left: 15px;background: #eaeac3;";
      for (var e = a[b].getElementsByTagName("div"), c = 0; c < e.length; c++) {
        d += e[c].textContent + "\r\n";
      }
    } else {
      /eobm_\d+/.test(a[b].id) && (a[b].style = "display:inherit;opacity:1;");
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
