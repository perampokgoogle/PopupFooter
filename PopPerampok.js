
(function($) {

    $.fn.popscroll = function(options) {

		var opts = $.extend({
		            theme         : 'simple',
		            msg           : 'Your custom Text',
		            network       : 'facebook',
		            position      : 'br',
		            animation  	  : '',
		            triggerpoint  : 100,
		            channel 	  : 'https://www.facebook.com/perampokgoogle',
		            bgcolor   	  : '#ffffff',
		            textcolor     : '#303030',
		            scrollback	  : false,
		            closecookie   : false,
		            cookiedays    : 10,
		            fb_hide_cover : true,
		            fb_show_posts : false,
		        }, options);




		var PerampokGoogle_hide_cookie=false;
  		if(opts.closecookie){
	  		var PerampokGoogle_ps_cookie=PerampokGoogle_get_cookie("PerampokGoogle_popscroll")
	  		
	  		if(PerampokGoogle_ps_cookie=="false"){
	  			PerampokGoogle_hide_cookie=true;
	  		}
  		}

  		if(!PerampokGoogle_hide_cookie){

			var PerampokGoogle_is_mobile = false;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			    PerampokGoogle_is_mobile = true;
			}

			var PerampokGoogle_oldie=false;

			if (!PerampokGoogle_supports_transitions()) {
				PerampokGoogle_oldie = true;
			}

			var PerampokGoogle_asp=new Array;
				PerampokGoogle_asp['bl']=new Array;
				PerampokGoogle_asp['bl']['ls']="30px";
				PerampokGoogle_asp['bl']['rs']="auto";
				PerampokGoogle_asp['bl']['bs']="-500px";
				PerampokGoogle_asp['bl']['le']="30px";
				PerampokGoogle_asp['bl']['re']="auto";
				PerampokGoogle_asp['bl']['be']="-10px";

				PerampokGoogle_asp['bls']=new Array;
				PerampokGoogle_asp['bls']['cs']=true;
				PerampokGoogle_asp['bls']['ls']="30px";
				PerampokGoogle_asp['bls']['rs']="auto";
				PerampokGoogle_asp['bls']['bs']="-2px";

				PerampokGoogle_asp['br']=new Array;
				PerampokGoogle_asp['br']['rs']="30px";
				PerampokGoogle_asp['br']['ls']="auto";
				PerampokGoogle_asp['br']['bs']="-500px";
				PerampokGoogle_asp['br']['le']="auto";
				PerampokGoogle_asp['br']['re']="30px";
				PerampokGoogle_asp['br']['be']="-10px";

				PerampokGoogle_asp['brs']=new Array;
				PerampokGoogle_asp['brs']['cs']=true;
				PerampokGoogle_asp['brs']['rs']="30px";
				PerampokGoogle_asp['brs']['ls']="auto";
				PerampokGoogle_asp['brs']['bs']="-2px";

				PerampokGoogle_asp['sl']=new Array;
				PerampokGoogle_asp['sl']['ls']="-400px";
				PerampokGoogle_asp['sl']['rs']="auto";
				PerampokGoogle_asp['sl']['bs']="40px";
				PerampokGoogle_asp['sl']['le']="-2px";
				PerampokGoogle_asp['sl']['rs']="auto";
				PerampokGoogle_asp['sl']['bs']="40px";

				PerampokGoogle_asp['sls']=new Array;
				PerampokGoogle_asp['sls']['cs']=true;
				PerampokGoogle_asp['sls']['ls']="-2px";
				PerampokGoogle_asp['sls']['rs']="auto";
				PerampokGoogle_asp['sls']['bs']="40px";

				PerampokGoogle_asp['sr']=new Array;
				PerampokGoogle_asp['sr']['ls']="auto";
				PerampokGoogle_asp['sr']['rs']="-400px";
				PerampokGoogle_asp['sr']['bs']="40px";
				PerampokGoogle_asp['sr']['le']="auto";
				PerampokGoogle_asp['sr']['re']="-2px";
				PerampokGoogle_asp['sr']['bs']="40px";

				PerampokGoogle_asp['srs']=new Array;
				PerampokGoogle_asp['srs']['cs']=true;
				PerampokGoogle_asp['srs']['ls']="auto";
				PerampokGoogle_asp['srs']['rs']="-2px";
				PerampokGoogle_asp['srs']['bs']="40px";


			var PerampokGoogle_fps_ac_simple=false;
			var PerampokGoogle_slider_active=new Array;


			var close_img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRUlEQVR4Xu2aOa4UMRCGvycIEBCwhCwCLsAqyIAABHeAe4BACIn9HsAlWAQiY3lcgTWHhCUAgf7RtDQaerrLdpX7PaY7nW67/s+/y2O7VljyZ2XJ9TMCGB2w5ATGKbDkBvjvkqAc/SdlUK1TYDNwFbgI7AI+AfeBO8DPlA4D3t0KXAMuTGP7DDwEbgLf+vqzAJD4Z8DxlsZeAueBr30dBf2+E3gCHGpp/y1wsg+CBcBt4EqHgDfA2QEgSPxT4GBHbHd7YjflgA/A3p4RrA3BIl4hK/Z9XbFbHPAL2GCwcC0IVvEK+TewsRTAuz6KMx1EQ0gRr7AU+4FSADemWdZggskrq8CZgJzQlfAWxabYr5cC2AQ8B05YCQRAyBH/CjgN/CgFoO+3TZebowNAyBFvnoqWJNhozoWgJfJLArjZV3dMl7q2dX5Rk2bxaiAFQIkTciCEi88BUAtCFfG5APTdduAxkJoTLE6oJr4EQC4E/T/XErkoJ1QVXwrAG4LEa2NzOCFhJiW8tnZTk2BbG5oOCvxIQuDzThhEvIcDGs0lEDQI1Ue+CdzDAaUQFENV28861RNAkxNSp0PCzKF4zs935g0gEoK7eM8cMA82J6l1OSFEfCQAte0FIUx8NAAPCKHiawAogRAufgSQsR1OWbJKRr/pJ9wFEctgE/xSJ0Ev8eFOiHCAt/hQCN4AosQ3ENyP3D0B5IhXktNzLCG7ukLwApArXkdkerSBSj1ec7l88QBQIr65Vh/iyH1CvhSAh/jG/YNAKAHgKX4wCLkAIsQ3ECKP3P/JtTkAIsWXQOg7cm9daFIB1BBfFUIKgJriZyGknjEmOcEKYAjxVSBYAGwBXiRefHhvY3PuHfSP8ZRHmdw94FLCX1Vv8SVOUCGnCjwXPhYHqCp0txFAlPhcCC5lctba22jxOQctLmVyH4E9PQ6oJT4Vwntgf+kUULnp5Y5GaotPgXCrr8TPkgO0CqhMrm3PrlK0cwE1gcaUM7l8ebRgK/16Wib3vdQB+l4QVDCtknQlRE0Llctrheisw7MqKXhP1exNbJqqStoPADm3U7zHdrgg7rXxqWUKrI1Ig6IYAQSBXTfNjg5YN0MVFOjogCCw66bZv1sI8UFM29qyAAAAAElFTkSuQmCC";
			

		
			if(opts.network=='facebook'){
				$('<div/>', {
				    'id':'fb-root'
				}).appendTo(this);

				(function(d, s, id) {
	  				var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.5";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));

				var channelsetup=$('<div/>', {
				    'class':'fb-page',
				    'data-href':opts.channel,
				    'data-width':"280",
				    'data-small-header':"true",
				    'data-adapt-container-width':'ture',
				    'data-hide-cover':opts.fb_hide_cover,
				    'data-show-posts':opts.fb_show_posts
				});

			}



			if(opts.theme=='simple'){
				var custompart=$('<div/>', {
				    'id':'PerampokGoogle_fanpageslider_box',
				    'class':'PerampokGoogle_fanpageslider_boxref PerampokGoogle_ani_handel_simple',
				    'style': 'border-radius:5px',
				}).appendTo(this);

				$('<div/>', {
					'id':'PerampokGoogle_fanpageslider_box_head'
				}).appendTo("#PerampokGoogle_fanpageslider_box");

				$('<img/>', {
				    'class':'PerampokGoogle_fps_close PerampokGoogle_fps_close_btn',
				    'src':close_img
				}).on('click', function(){
	    			PerampokGoogle_close_slider('PerampokGoogle_ani_handel_simple');
				}).appendTo("#PerampokGoogle_fanpageslider_box_head");

				$('<div/>', {
					'id':'PerampokGoogle_fanpageslider_box_mid'
				}).appendTo("#PerampokGoogle_fanpageslider_box");

				$('<div/>', {
				    'class':'PerampokGoogle_fanpageslider_customtext',
				    'text': opts.msg 
				}).appendTo($("#PerampokGoogle_fanpageslider_box_mid"));

				$("#PerampokGoogle_fanpageslider_box_mid").append(channelsetup);

			}



	  		custompart.css("background", opts.bgcolor);
	  		custompart.css("color", opts.textcolor);

			jQuery(window).scroll(function() {  
				if(!PerampokGoogle_is_mobile){
				  if(jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - opts.triggerpoint) {
				       PerampokGoogle_show_slider("PerampokGoogle_ani_handel_"+opts.theme, opts.position+opts.animation);
				   }
				  
				   if (opts.scrollback && PerampokGoogle_slider_active["PerampokGoogle_ani_handel_"+opts.theme]){
					  if(jQuery(window).scrollTop() + jQuery(window).height() < jQuery(document).height() - opts.triggerpoint) {
					       PerampokGoogle_hide_slider("PerampokGoogle_ani_handel_"+opts.theme, opts.position+opts.animation);
					   }
					}


				}
			});

			
		}

		function PerampokGoogle_show_slider(target,ani){
			if(PerampokGoogle_oldie){ 
				ani=ani.substring(0,2);
			}

			if(!PerampokGoogle_slider_active[target]){
				PerampokGoogle_slider_active[target]=true;
				PerampokGoogle_slider_active[target]=new Array;
				PerampokGoogle_slider_active[target]['ani']=ani;
				PerampokGoogle_postion_slider(target,ani);

				jQuery("."+target ).addClass("PerampokGoogle_ani_"+ani);

				if(PerampokGoogle_asp[ani]["cs"]){
					jQuery( "."+target ).addClass("PerampokGoogle_cs_start_"+ani);
					setTimeout(function(){jQuery( "."+target ).addClass("PerampokGoogle_cs_trans_"+ani); }, 10);
					setTimeout(function(){jQuery( "."+target ).addClass("PerampokGoogle_cs_end_"+ani); }, 10);
				}else {
					jQuery( "."+target ).animate({
						left: PerampokGoogle_asp[ani]["le"],
						right: PerampokGoogle_asp[ani]["re"],
						bottom: PerampokGoogle_asp[ani]["be"]
					}, 700 );
				}
			}
		}

		function PerampokGoogle_close_slider(target){
			var ani =PerampokGoogle_slider_active[target]['ani'];
			if(PerampokGoogle_asp[ani]["cs"]){
				jQuery( "."+target ).removeClass("PerampokGoogle_cs_end_"+ani);
			}else{
				jQuery( "."+target ).animate({
					left: PerampokGoogle_asp[ani]["ls"],
					right: PerampokGoogle_asp[ani]["rs"],
					bottom: PerampokGoogle_asp[ani]["bs"]
				}, 700 );	
			}
			PerampokGoogle_slider_active[target]=true;

			if(opts.closecookie){
				PerampokGoogle_set_cookie("PerampokGoogle_popscroll", "false", opts.cookiedays);
			}
		}

		function PerampokGoogle_hide_slider(target){
			if(typeof PerampokGoogle_slider_active[target]['ani'] != 'undefined' && PerampokGoogle_slider_active[target]){
				var ani =PerampokGoogle_slider_active[target]['ani'];
				if(PerampokGoogle_asp[ani]["cs"]){
					jQuery( "."+target ).removeClass("PerampokGoogle_cs_end_"+ani);
				}else{
					jQuery( "."+target ).animate({
						left: PerampokGoogle_asp[ani]["ls"],
						right: PerampokGoogle_asp[ani]["rs"],
						bottom: PerampokGoogle_asp[ani]["bs"]
					}, 700 );	
				}

				PerampokGoogle_slider_active[target]=false;
			}
		}

		function PerampokGoogle_postion_slider(target,ani){
			jQuery( "."+target ).css("left", PerampokGoogle_asp[ani]["ls"]);
			jQuery( "."+target ).css("right", PerampokGoogle_asp[ani]["rs"]);	
			jQuery( "."+target ).css("bottom", PerampokGoogle_asp[ani]["bs"]);	
		}     


		function PerampokGoogle_set_cookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function PerampokGoogle_get_cookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		    }
		    return "";
		}		

		function PerampokGoogle_supports_transitions() {
		    var b = document.body || document.documentElement,
		        s = b.style,
		        p = 'transition';

		    if (typeof s[p] == 'string') { return true; }

		    var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
		    p = p.charAt(0).toUpperCase() + p.substr(1);

		    for (var i=0; i<v.length; i++) {
		        if (typeof s[v[i] + p] == 'string') { return true; }
		    }

		    return false;
		}

		

    }


}(jQuery));