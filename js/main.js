var campaignID = "aaaaaaaaaaaa";
var clientID = "";
var product = 1111;
var price = 111;
var region = 1001;

!function (e, t, r) { function n() { for (; d[0] && "loaded" == d[0][f];)c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i) } for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)a = e.createElement(t), "async" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s }(document, "script", [
  "https://api.leadwyz.com/script_v4",
  "https://api.leadwyz.com/js/order.js"
]);
