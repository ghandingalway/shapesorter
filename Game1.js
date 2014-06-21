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
