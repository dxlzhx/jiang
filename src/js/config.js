require.config({
 	dist : "/", 
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min", "lib/jquery/jquery-1.12.4.min"],
		"cookie" : "/lib/jquery_plugins/jquery.cookie",
		"zoom" : "/lib/jquery_plugins/jquery.elevateZoom",
		"fly" : "/lib/jquery_plugins/jquery.fly.min",
		"template" : "/lib/arttemplate/template",
		"load" : "/js/loadHeaderFooter",
		"xmCarousel" : "/js/jquery.xmCarousel",
		"list":"/js/list"
		
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		},
		"xmCarousel" : {
			deps : ["jquery"]
		},
		"template": {
			deps : ["jquery"]
		},
		"fly":{
			deps:["jquery"]
		}
	}
});