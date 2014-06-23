var init = function()
(function()
{
var init = function()
{
	var audiofile = document.getElementById("applause");
	var Gap = [];
	var GapSvg = document.getElementsByClassName("gaps");
	var Game = document.getElementsByClassName("draggable");
	var shapecolour = ["red", "yellow", "blue", "green", "purple", "orange","red", "yellow", "blue", "green", "purple", "orange"];
	
	for(var i=0; i<GapSvg.length; i++)
	{
		var GapCoords = {};
		if(GapSvg[i].getAttribute("x"))
		{
			GapCoords.height = Number(GapSvg[i].getAttribute("height"))-10;
			GapCoords.width = Number(GapSvg[i].getAttribute("width"))-10;
			GapCoords.xtop = Number(GapSvg[i].getAttribute("x"))-10;
			GapCoords.xbottom = GapCoords.xtop+GapCoords.width+30;
			GapCoords.ytop = Number(GapSvg[i].getAttribute("y"))-10;
			GapCoords.ybottom = GapCoords.ytop+GapCoords.height+30;
			Gap.push(GapCoords);
		}
		else if(GapSvg[i].getAttribute("r"))
		{
			GapCoords.xtop = Number(GapSvg[i].getAttribute("cx"))-Number(GapSvg[i].getAttribute("r"));
			GapCoords.xbottom = Number(GapSvg[i].getAttribute("cx"))+Number(GapSvg[i].getAttribute("r"));
			GapCoords.ytop = Number(GapSvg[i].getAttribute("cy"))-Number(GapSvg[i].getAttribute("r"));
			GapCoords.ybottom = Number(GapSvg[i].getAttribute("cy"))+Number(GapSvg[i].getAttribute("r"));
			GapCoords.radius = Number(GapSvg[i].getAttribute("r"))-5;
			Gap.push(GapCoords);
		}
		else if(GapSvg[i].getAttribute("rx"))
		{
			GapCoords.xtop = Number(GapSvg[i].getAttribute("cx"))-Number(GapSvg[i].getAttribute("rx"));
			GapCoords.xbottom = Number(GapSvg[i].getAttribute("cx"))+Number(GapSvg[i].getAttribute("rx"));
			GapCoords.ytop = Number(GapSvg[i].getAttribute("cy"))-Number(GapSvg[i].getAttribute("ry"));
			GapCoords.ybottom = Number(GapSvg[i].getAttribute("cy"))+Number(GapSvg[i].getAttribute("ry"));
			GapCoords.radiusx = Number(GapSvg[i].getAttribute("rx"))-5;
			GapCoords.radiusy = Number(GapSvg[i].getAttribute("ry"))-5;
			Gap.push(GapCoords);
		}
	}
	var pointermovefunction = function(e)
	{
		if(this.getAttribute("x"))
		{
			this.setAttribute("x", (e.pageX-50));
			this.setAttribute("y", (e.pageY-50));
			for(var i=0; i<Gap.length; i++)
			{
		   		if((Number(this.getAttribute("x"))>=Gap[i].xtop)
					&& (Number(this.getAttribute("x"))<=Gap[i].xbottom) 
					&& (Number(this.getAttribute("y"))>=Gap[i].ytop)
					&& (Number(this.getAttribute("y"))<=Gap[i].ybottom)
					&& (Number(this.getAttribute("height"))===Gap[i].height)
					&& (Number(this.getAttribute("width"))===Gap[i].width))
				{
					audiofile.play();
					this.setAttribute("x", (Gap[i].xtop+15));
					this.setAttribute("y", (Gap[i].ytop+15));
			 		this.fadechange = 1;
					this.removeEventListener("pointermove", pointermovefunction);
					var self = this;
					var fadeout= function()
					{
						if (self.fadechange <= 0)
						{
							cancelAnimationFrame(requestAnimationFrameID);
							var parent = self.parentNode;
							parent.removeChild(self);
							return;
						}
						self.setAttribute("opacity", self.fadechange);
						self.fadechange -= 0.01;
						requestAnimationFrameID = requestAnimationFrame(fadeout);
					}
					var requestAnimationFrameID = requestAnimationFrame(fadeout);
				}
			}
		}
		else if(this.getAttribute("r"))
		{
			this.setAttribute("cx", e.pageX);
			this.setAttribute("cy", e.pageY);
			for(var i=0; i<Gap.length; i++)
			{
		   		if((Number(this.getAttribute("cx"))>=Gap[i].xtop)
					&& (Number(this.getAttribute("cx"))<=Gap[i].xbottom) 
					&& (Number(this.getAttribute("cy"))>=Gap[i].ytop)
					&& (Number(this.getAttribute("cy"))<=Gap[i].ybottom)
					&& (Number(this.getAttribute("r"))===Gap[i].radius))
				{
					audiofile.play();
					this.setAttribute("cx", Gap[i].xtop+Gap[i].radius+5);
					this.setAttribute("cy", Gap[i].ytop+Gap[i].radius+5);
			 		this.fadechange = 1;
					this.removeEventListener("pointermove", pointermovefunction);
					var self = this;
					var fadeout= function()
					{
						if (self.fadechange <= 0)
						{
							cancelAnimationFrame(requestAnimationFrameID);
							var parent = self.parentNode;
							parent.removeChild(self);
							return;
						}
						self.setAttribute("opacity", self.fadechange);
						self.fadechange -= 0.01;
						requestAnimationFrameID = requestAnimationFrame(fadeout);
					}
					var requestAnimationFrameID = requestAnimationFrame(fadeout);
				}
			}
			
		}
		else if(this.getAttribute("rx"))
		{
			this.setAttribute("cx", e.pageX);
			this.setAttribute("cy", e.pageY);
			for(var i=0; i<Gap.length; i++)
			{
		   		if((Number(this.getAttribute("cx"))>=Gap[i].xtop)
					&& (Number(this.getAttribute("cx"))<=Gap[i].xbottom) 
					&& (Number(this.getAttribute("cy"))>=Gap[i].ytop)
					&& (Number(this.getAttribute("cy"))<=Gap[i].ybottom)
					&& (Number(this.getAttribute("rx"))===Gap[i].radiusx))
				{
					audiofile.play();
					this.setAttribute("cx", Gap[i].xtop+Gap[i].radiusx+5);
					this.setAttribute("cy", Gap[i].ytop+Gap[i].radiusy+5);
			 		this.fadechange = 1;
					this.removeEventListener("pointermove", pointermovefunction)
					var self = this;
					var fadeout= function()
					{
						if (self.fadechange <= 0)
						{
							cancelAnimationFrame(requestAnimationFrameID);
							var parent = self.parentNode;
							parent.removeChild(self);
							return;
						}
						self.setAttribute("opacity", self.fadechange);
						self.fadechange -= 0.01;
						requestAnimationFrameID = requestAnimationFrame(fadeout);
					}
					var requestAnimationFrameID = requestAnimationFrame(fadeout);
				}
			}
			
		}
	}
	for(var i =0; i<Game.length; i++)
	{
		Game[i].addEventListener("pointermove", pointermovefunction, false);
		var colourchooser = (Math.floor(Math.random()*shapecolour.length));
		Game[i].setAttribute("fill", shapecolour[colourchooser]);
		Game[i].setAttribute("stroke", shapecolour[colourchooser]);
		shapecolour.splice(colourchooser, 1);
	}
}
var sums = function()
{
	var Game = document.getElementsByClassName("draggable");
	var xchooser ;
	var ychooser;
	var locationrandom = function()
	{
		xchooser = (Math.floor(Math.random()*800))
		ychooser = (Math.floor(Math.random()*700));
	}
	var settoorigin = function()
	{
		for(var i=0; i<Game.length; i++)
		{
			if(Game[i].getAttribute("x"))
			{
			Game[i].setAttribute("x", 0);
			Game[i].setAttribute("y", 0);
			}
			else if(Game[i].getAttribute("cx"))
			{
			Game[i].setAttribute("cx", 0);
			Game[i].setAttribute("cy", 0);	
			}
		}
	}
	var getdimensions = function()
	{
		for(var i=0; i<Game.length; i++)
		{
			var margin = 100;
			if(Game[i].getAttribute("x"))
			{
			Game[i].xmin = Number(Game[i].getAttribute("x"))-margin;
			Game[i].xmax = Number(Game[i].getAttribute("x"))+Number(Game[i].getAttribute("width"))+margin;
			Game[i].ymin = Number(Game[i].getAttribute("y"))-margin;
			Game[i].ymax = Number(Game[i].getAttribute("y"))+Number(Game[i].getAttribute("height"))+margin;
			}
			else if(Game[i].getAttribute("r"))
			{
			Game[i].xmin = Number(Game[i].getAttribute("cx"))-Number(Game[i].getAttribute("r"))-margin;
			Game[i].xmax = Number(Game[i].getAttribute("cx"))+Number(Game[i].getAttribute("r"))+margin;
			Game[i].ymin = Number(Game[i].getAttribute("cy"))-Number(Game[i].getAttribute("r"))+margin;
			Game[i].ymax = Number(Game[i].getAttribute("cy"))+Number(Game[i].getAttribute("r"))+margin;	
			}
			else if(Game[i].getAttribute("rx"))
			{
			Game[i].xmin = Number(Game[i].getAttribute("cx"))-Number(Game[i].getAttribute("rx"))-margin;
			Game[i].xmax = Number(Game[i].getAttribute("cx"))+Number(Game[i].getAttribute("rx"))+margin;
			Game[i].ymin = Number(Game[i].getAttribute("cy"))-Number(Game[i].getAttribute("ry"))+margin;
			Game[i].ymax = Number(Game[i].getAttribute("cy"))+Number(Game[i].getAttribute("ry"))+margin;
			}
		}
	}
	var movetorandom = function()
	{
		for(var i=0; i<Game.length; i++)
		{
			if(Game[i].xmin <= 1)
			{
				locationrandom();
				if(Game[i].getAttribute("x"))
				{
					Game[i].setAttribute("x", xchooser);
					Game[i].setAttribute("y", ychooser);	
					for(var k=i+1; k<Game.length; k++)
					{
						if(Game[i].xmin<Game[k].xmax && Game[i].xmin>Game[k].xmin && Game[i].ymin<Game[k].ymax && Game[i].ymin>Game[k].ymin)
						{
							Game[i].setAttribute("x", 0);
							Game[i].setAttribute("y", 0);
						}
					}
				}
				else if(Game[i].getAttribute("cx"))
				{
					Game[i].setAttribute("cx", xchooser);
					Game[i].setAttribute("cy", ychooser);	
					for(var k=i+1; k<Game.length; k++)
					{
						if(Game[i].xmin<Game[k].xmax && Game[i].xmin>Game[k].xmin && Game[i].ymin<Game[k].ymax && Game[i].ymin>Game[k].ymin)
						{
							Game[i].setAttribute("cx", 0);
							Game[i].setAttribute("cy", 0);
						}
					}
				}
			}
		}
		movetorandom();
	}
	settoorigin();
	getdimensions();
	movetorandom();
}
window.init = init;
window.sums = sums;
})();
