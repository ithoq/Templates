function getRandomInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}function getStyle(a,b){var c="";return document.defaultView&&document.defaultView.getComputedStyle?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]),c}function onCreateElementNsReady(a){void 0!=document.createElementNS?a():setTimeout(function(){onCreateElementNsReady(a)},100)}JustGage=function(a){if(!a.id)return alert("Missing id parameter for gauge!"),!1;if(!document.getElementById(a.id))return alert('No element with id: "'+a.id+'" found!'),!1;this.config={id:a.id,title:a.title?a.title:"Title",titleFontColor:a.titleFontColor?a.titleFontColor:"#999999",value:a.value?a.value:0,valueFontColor:a.valueFontColor?a.valueFontColor:"#010101",min:a.min?a.min:0,max:a.max?a.max:100,showMinMax:null!=a.showMinMax?a.showMinMax:!0,gaugeWidthScale:a.gaugeWidthScale?a.gaugeWidthScale:1,gaugeColor:a.gaugeColor?a.gaugeColor:"#edebeb",label:a.label?a.label:"",showInnerShadow:null!=a.showInnerShadow?a.showInnerShadow:!0,shadowOpacity:a.shadowOpacity?a.shadowOpacity:.2,shadowSize:a.shadowSize?a.shadowSize:5,shadowVerticalOffset:a.shadowVerticalOffset?a.shadowVerticalOffset:3,levelColors:a.levelColors?a.levelColors:percentColors,levelColorsGradient:null!=a.levelColorsGradient?a.levelColorsGradient:!0,labelFontColor:a.labelFontColor?a.labelFontColor:"#b3b3b3",startAnimationTime:a.startAnimationTime?a.startAnimationTime:700,startAnimationType:a.startAnimationType?a.startAnimationType:">",refreshAnimationTime:a.refreshAnimationTime?a.refreshAnimationTime:700,refreshAnimationType:a.refreshAnimationType?a.refreshAnimationType:">"},a.value>this.config.max&&(this.config.value=this.config.max),a.value<this.config.min&&(this.config.value=this.config.min),this.originalValue=a.value,this.canvas=Raphael(this.config.id,"100%","100%");var b,c,d=1*getStyle(document.getElementById(this.config.id),"width").slice(0,-2),e=1*getStyle(document.getElementById(this.config.id),"height").slice(0,-2);d/e>1.25?(b=1.25*e,c=e):(b=d,c=d/1.25);var f=(d-b)/2,g=(e-c)/2,h=c/8>10?c/10:10,i=f+b/2,j=g+c/6.5,k=c/6.4>16?c/6.4:16,l=f+b/2,m=g+c/1.4,n=c/16>10?c/16:10,o=f+b/2,p=m+k/2+6,q=c/16>10?c/16:10,r=f+b/10+b/6.666666666666667*this.config.gaugeWidthScale/2,s=g+c/1.126760563380282,t=c/16>10?c/16:10,u=f+b-b/10-b/6.666666666666667*this.config.gaugeWidthScale/2,v=g+c/1.126760563380282;this.params={canvasW:d,canvasH:e,widgetW:b,widgetH:c,dx:f,dy:g,titleFontSize:h,titleX:i,titleY:j,valueFontSize:k,valueX:l,valueY:m,labelFontSize:n,labelX:o,labelY:p,minFontSize:q,minX:r,minY:s,maxFontSize:t,maxX:u,maxY:v},this.canvas.customAttributes.pki=function(a,b,c,d,e,f,g,h){var i,j=(1-(a-b)/(c-b))*Math.PI,k=d/2-d/10,l=k-d/6.666666666666667*h,m=d/2+f,n=e/1.25+g,o=d/2+f+k*Math.cos(j),p=e-(e-n)+g-k*Math.sin(j),q=d/2+f+l*Math.cos(j),r=e-(e-n)+g-l*Math.sin(j);return i+="M"+(m-l)+","+n+" ",i+="L"+(m-k)+","+n+" ",i+="A"+k+","+k+" 0 0,1 "+o+","+p+" ",i+="L"+q+","+r+" ",i+="A"+l+","+l+" 0 0,0 "+(m-l)+","+n+" ",i+="z ",{path:i}},this.gauge=this.canvas.path().attr({stroke:"none",fill:this.config.gaugeColor,pki:[this.config.max,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]}),this.gauge.id=this.config.id+"-gauge",this.level=this.canvas.path().attr({stroke:"none",fill:getColorForPercentage((this.config.value-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient),pki:[this.config.min,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]}),this.level.id=this.config.id+"-level",this.txtTitle=this.canvas.text(this.params.titleX,this.params.titleY,this.config.title),this.txtTitle.attr({"font-size":this.params.titleFontSize,"font-weight":"bold","font-family":"Arial",fill:this.config.titleFontColor,"fill-opacity":"1"}),this.txtTitle.id=this.config.id+"-txttitle",this.txtValue=this.canvas.text(this.params.valueX,this.params.valueY,this.originalValue),this.txtValue.attr({"font-size":this.params.valueFontSize,"font-weight":"bold","font-family":"Arial",fill:this.config.valueFontColor,"fill-opacity":"0"}),this.txtValue.id=this.config.id+"-txtvalue",this.txtLabel=this.canvas.text(this.params.labelX,this.params.labelY,this.config.label),this.txtLabel.attr({"font-size":this.params.labelFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":"0"}),this.txtLabel.id=this.config.id+"-txtlabel",this.txtMin=this.canvas.text(this.params.minX,this.params.minY,this.config.min),this.txtMin.attr({"font-size":this.params.minFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":1==this.config.showMinMax?"1":"0"}),this.txtMin.id=this.config.id+"-txtmin",this.txtMax=this.canvas.text(this.params.maxX,this.params.maxY,this.config.max),this.txtMax.attr({"font-size":this.params.maxFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":1==this.config.showMinMax?"1":"0"}),this.txtMax.id=this.config.id+"-txtmax";var w=this.canvas.canvas.childNodes[1],x="http://www.w3.org/2000/svg";9>ie?onCreateElementNsReady(function(){this.generateShadow()}):this.generateShadow(x,w),this.level.animate({pki:[this.config.value,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]},this.config.startAnimationTime,this.config.startAnimationType),this.txtValue.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType),this.txtLabel.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType)},JustGage.prototype.refresh=function(a){originalVal=a,a>this.config.max&&(a=this.config.max),a<this.config.min&&(a=this.config.min);var b=getColorForPercentage((a-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient);this.canvas.getById(this.config.id+"-txtvalue").attr({text:originalVal}),this.canvas.getById(this.config.id+"-level").animate({pki:[a,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale],fill:b},this.config.refreshAnimationTime,this.config.refreshAnimationType)};var percentColors=["#a9d70b","#f9c802","#ff0000"];JustGage.prototype.generateShadow=function(a,b){var c=document.createElementNS(a,"filter");c.setAttribute("id",this.config.id+"-inner-shadow"),b.appendChild(c);var d=document.createElementNS(a,"feOffset");d.setAttribute("dx",0),d.setAttribute("dy",this.config.shadowVerticalOffset),c.appendChild(d);var e=document.createElementNS(a,"feGaussianBlur");e.setAttribute("result","offset-blur"),e.setAttribute("stdDeviation",this.config.shadowSize),c.appendChild(e);var f=document.createElementNS(a,"feComposite");f.setAttribute("operator","out"),f.setAttribute("in","SourceGraphic"),f.setAttribute("in2","offset-blur"),f.setAttribute("result","inverse"),c.appendChild(f);var g=document.createElementNS(a,"feFlood");g.setAttribute("flood-color","black"),g.setAttribute("flood-opacity",this.config.shadowOpacity),g.setAttribute("result","color"),c.appendChild(g);var h=document.createElementNS(a,"feComposite");h.setAttribute("operator","in"),h.setAttribute("in","color"),h.setAttribute("in2","inverse"),h.setAttribute("result","shadow"),c.appendChild(h);var i=document.createElementNS(a,"feComposite");i.setAttribute("operator","over"),i.setAttribute("in","shadow"),i.setAttribute("in2","SourceGraphic"),c.appendChild(i),1==this.config.showInnerShadow&&(this.canvas.canvas.childNodes[2].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)"),this.canvas.canvas.childNodes[3].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)"))};var getColorForPercentage=function(a,b,c){var d=b.length;if(1===d)return b[0];for(var e=c?1/(d-1):1/d,f=new Array,g=0;g<b.length;g++){var h=c?e*g:e*(g+1),i=parseInt(cutHex(b[g]).substring(0,2),16),j=parseInt(cutHex(b[g]).substring(2,4),16),k=parseInt(cutHex(b[g]).substring(4,6),16);f[g]={pct:h,color:{r:i,g:j,b:k}}}if(0==a)return"rgb("+[f[0].color.r,f[0].color.g,f[0].color.b].join(",")+")";for(var g=0;g<f.length;g++)if(a<=f[g].pct){if(1==c){var l=f[g-1],m=f[g],n=m.pct-l.pct,o=(a-l.pct)/n,p=1-o,q=o,r={r:Math.floor(l.color.r*p+m.color.r*q),g:Math.floor(l.color.g*p+m.color.g*q),b:Math.floor(l.color.b*p+m.color.b*q)};return"rgb("+[r.r,r.g,r.b].join(",")+")"}return"rgb("+[f[g].color.r,f[g].color.g,f[g].color.b].join(",")+")"}},ie=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}();