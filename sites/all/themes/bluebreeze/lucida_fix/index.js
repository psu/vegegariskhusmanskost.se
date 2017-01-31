
//<![CDATA[

/* based on http://cse-mjmcl.cse.bris.ac.uk/blog/2005/08/18/1124396539593.html */

function add_stylesheet(name) {
  var base_url = 'http://www.vegetariskhusmanskost.se/sites/all/themes/bluebreeze/';

  var style_url = base_url + name + '.css';

  if(document.createStyleSheet) {
    document.createStyleSheet(style_url);
  } else {
    var styles = "@import url(' '+ style_url +' ');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
  
}


/**
 * JavaScript code to detect available availability of a 
 * particular font in a browser using JavaScript and CSS. 
 * 
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/jsoncookies
 * License: Creative Commons Attribution-ShareAlike 2.5
 *          http://creativecommons.org/licenses/by-sa/2.5/
 * Version: 0.1
 * Updated: Aug 11, 2007 10:09am
 * 
 */

/**
 * Actual function that does all the work. Returns an array with all the info.
 * My Assumption is that most of the browsers will have arial set as their default sans-serif font.
 */
var Detector = function(){
	var h = document.getElementsByTagName("BODY")[0];
	var d = document.createElement("DIV");
	var s = document.createElement("SPAN");
	d.appendChild(s);
	d.style.fontFamily = "sans-serif";		//font for the parent element DIV.
	s.style.fontFamily = "sans-serif";		//arial font used as a comparator.
	s.style.fontSize   = "72px";			//we test using 72px font size, we may use any size. I guess larger the better.
	s.innerHTML        = "mmmmmmmmmml";		//we use m or w because these two characters take up the maximum width. And we use a L so that the same matching fonts can get separated
	h.appendChild(d);
	var defaultWidth   = s.offsetWidth;		//now we have the defaultWidth
	var defaultHeight  = s.offsetHeight;	//and the defaultHeight, we compare other fonts with these.
	h.removeChild(d);
	/* test
	 * params:
	 * font - name of the font you wish to detect
	 * return: 
	 * f[0] - Input font name.
	 * f[1] - Computed width.
	 * f[2] - Computed height.
	 * f[3] - Detected? (true/false).
	 */
	function test(font) {
		h.appendChild(d);
		var f = [];
		f[0] = s.style.fontFamily = font;	// Name of the font
		f[1] = s.offsetWidth;				// Width
		f[2] = s.offsetHeight;				// Height
		h.removeChild(d);
		font = font.toLowerCase();
		if (font == "arial" || font == "sans-serif") {
			f[3] = true;	// to set arial and sans-serif true
		} else {
			f[3] = (f[1] != defaultWidth || f[2] != defaultHeight);	// Detected?
		}
		return f;
	}
	this.test = test;
}



var d = new Detector();
var e = d.test('Lucida Grande');
if (e[3] == false) {
  add_stylesheet('lucida_fix');
}

//]]>

