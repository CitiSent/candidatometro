var Candidatometro=Candidatometro||{};Candidatometro.Totals=function(){"use strict";function t(n){e=n;e.each(function(){var e=d3.select(this);e.append("h6").attr("class","tc-tot")});t.update()}var e;t.update=function(){e.each(function(e){var n=d3.select(this),r=e.data.values(),i=15,s=[{name:"Positivo",cls:"bc-pos",count:d3.sum(r,function(e){return e.pos})},{name:"Neutro",cls:"bc-neu",count:d3.sum(r,function(e){return e.neu})},{name:"Negativo",cls:"bc-neg",count:d3.sum(r,function(e){return e.neg})}],o=d3.sum(s,function(e){return e.count}),u=_.template("<%= total %> POSTS",{total:o.toLocaleString()});s.forEach(function(e){e.perc=100*e.count/o});n.select("h6.tc-tot").text(u);var a=n.selectAll("div").data(s).enter().append("div").attr("class","row");a.append("div").attr("class","col-sm-5 tright").append("p").text(function(e){return e.name});var f=a.append("div").attr("class","col-sm-7"),l=t.int(f.style("width")),c=f.append("svg").attr("width",l).attr("height",i),h=d3.scale.linear().domain([0,100]).range([0,l-20]);c.append("rect").attr("width",function(e){return h(e.perc)}).attr("height",i).attr("class",function(e){return e.cls});c.append("text").attr("x",function(e){return h(e.perc)+2}).attr("y",i-2).text(function(e){return e.perc.toFixed(1)+"%"}).attr("fill","#555")})};t.int=function(e){return parseInt(e,10)};_.extend(t,Backbone.Events);return t};Candidatometro.BubbleChart=function(){"use strict";function r(e){n=e;n.each(function(){})}var e=d3.map(),t,n;r.update=function(){n.each(function(t){var n=d3.select(this),i=e.get(t.name),s=n.selectAll("div").data(i).enter().append("div").attr("class","graph-cell");s.append("div").attr("class","visible-xs visible-sm topic-label").text(function(e){return e.name});var o=s.append("div").attr("class","svg-container"),u=r.int(o.style("height")),a=u,f=u/2-1,l=o.append("svg").attr("width",a).attr("height",u),c=d3.scale.sqrt().domain(d3.extent(i,function(e){return e.total})).range([2,f]);l.append("circle").attr("cx",a/2).attr("cy",u/2).attr("r",function(e){return c(e.total)}).attr("class","bubble")})};r.int=function(e){return parseInt(e,10)};r.mdataset=function(e){t=e;r.listenTo(t,"multidataset:ready",r.parseData);return r};r.parseData=function(){t.keys().forEach(function(n){var r=t.get(n).items(),i=[];r.forEach(function(e,t){var n={name:e,pos:0,neg:0,neu:0,total:0};t.forEach(function(e,t){n.pos+=t.pos;n.neg+=t.neg;n.neu+=t.neu});n.total=n.pos+n.neg+n.neu;i.push(n)});e.set(n,i)});r.trigger("data:ready")};_.extend(r,Backbone.Events);r.on("data:ready",r.update);return r};Candidatometro.BarChart=function(){"use strict";function s(n){i=n;i.each(function(){var n=d3.select(this),r=n.append("svg"),i=s.int(n.style("width"))-30;r.attr("width",i).attr("height",t);r.append("g").attr("class","bc-chart").attr("transform",s.svgt([e.left,e.top]));r.append("g").attr("class","bc-xaxis").attr("transform",s.svgt([e.left,t+e.top]));r.append("g").attr("class","bc-yaxis").attr("transform",s.svgt([0,e.top]))});s.update()}var e={top:2,right:20,bottom:18,left:30},t=80,n=null,r=null,i;s.update=function(){i.each(function(t){var n=_.pluck(t.data.entries(),"value"),r=d3.select(this),i=s.int(r.style("width"))-e.left-e.top,o=s.int(r.style("height"))-e.top-e.bottom,u=r.select("svg"),a=u.select("g.bc-chart"),f=u.select("g.bc-xaxis"),l=u.select("g.bc-yaxis");u.attr("width",i+e.left+e.right).attr("height",o+e.top+e.bottom);f.attr("transform",s.svgt([e.left,o+e.top]));l.attr("transform",s.svgt([e.left,e.top]));var c=Math.floor(i/s.timeDomain().length),h=d3.time.scale().domain(d3.extent(s.timeDomain())).rangeRound([c/2,i-c/2]),p=d3.extent(n,function(e){return d3.max([e.pos+e.neu/2,e.neg+e.neu/2])}),d=s.postDomain()?s.postDomain():p,v=d3.scale.linear().domain(d).range([2,o/2]),m=a.selectAll("g.bc-item").data(n).enter().append("g").attr("class","bc-item").attr("transform",function(e){return s.svgt([h(e.date)-c/2,o/2])}).on("mouseover",function(e){d3.select(this).append("text").attr("class","bc-info").attr("x",10).attr("y",0).text(e.date)});m.append("rect").attr("y",function(e){return-v(e.pos+e.neu/2)}).attr("width",c).attr("height",function(e){return v(e.pos+e.neu/2)}).attr("class","bc-pos");m.append("rect").attr("y",0).attr("width",c).attr("height",function(e){return v(e.neg+e.neu/2)}).attr("class","bc-neg");m.append("rect").attr("y",function(e){return-v(e.neu/2)}).attr("width",c).attr("height",function(e){return v(e.neu)}).attr("class","bc-neu");m.append("rect").attr("y",-o/2).attr("height",o).attr("width",c).classed("bc-phantom",!0).on("mouseover",function(e){var t=d3.select("body").append("div").attr("class","bc-tooltip");t.append("p").attr("class","bc-tooltip-title").text(e.date.toDateString());var n=t.append("p").attr("class","bc-tooltip-info");n.append("span").text(e.pos).attr("class","bc-pos");n.append("span").text(" + ");n.append("span").text(e.neu).attr("class","bc-neu");n.append("span").text(" + ");n.append("span").text(e.neg).attr("class","bc-neg");n.append("span").text(" = ");n.append("span").text(e.pos+e.neu+e.neg)}).on("mousemove",function(){var e=d3.select("body").select("div.bc-tooltip"),t=s.int(e.style("height"));e.style("left",d3.event.pageX+10+"px").style("top",d3.event.pageY-t/2+"px")}).on("mouseout",function(){d3.select("body").select("div.bc-tooltip").remove()});var g=d3.svg.axis().scale(h).orient("bottom").tickFormat(d3.time.format("%e %b %Y")),y=v.range(),b=d3.scale.linear().domain(d).range([y[1],y[0]]),w=d3.svg.axis().scale(b).ticks(4).outerTickSize(0).orient("left");f.call(g);l.call(w)})};s.timeDomain=function(e){if(!arguments.length)return n;n=e;return s};s.postDomain=function(e){if(!arguments.length)return r;r=e;return s};s.int=function(e){return parseInt(e,10)};s.svgt=function(e){return"translate("+e+")"};s.svgs=function(e){return"scale("+e+")"};_.extend(s,Backbone.Events);return s};Candidatometro.MultiDataset=function(){"use strict";function r(){}var e,t=0,n=d3.map();r.data=function(t){e=t;e.forEach(function(e){var t=Candidatometro.Dataset().json(e.url);n.set(e.name,t);r.listenTo(t,"dataset:ready",r.waitData)});return r};r.waitData=function(){t+=1;t===e.length&&r.trigger("multidataset:ready")};r.get=function(e){return n.get(e)};r.keys=function(){return n.keys()};r.map=function(){return n};_.extend(r,Backbone.Events);return r};Candidatometro.Dataset=function(){"use strict";function n(){}var e,t=d3.map();n.json=function(r){d3.json(r,function(r){function i(e){e.values=d3.map();e.data.forEach(function(t){var n=t.t.split("-").map(function(e){return+e});e.values.set(t.t,{neg:t.n,neu:t.m,pos:t.p,date:new Date(n[0],n[1]-1,n[2])})});e.children&&e.children.forEach(function(t){i(t);t.values.forEach(function(t,n){var r=e.values.get(t);e.values.set(t,{neg:r.neg+n.neg,neu:r.neu+n.neu,pos:r.pos+n.pos,date:r.date})})})}e=r;e.children.forEach(function(e){i(e);t.set(e.topic,e.values)});n.trigger("dataset:ready")});return n};n.data=function(){return e};n.items=function(){return t};_.extend(n,Backbone.Events);return n};