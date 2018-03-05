$(document).ready(function(){

	function createnode(element){
		return document.createElement(element);
	}

	function append(parent,el){
		return parent.appendChild(el);
	}

	/*
	function showLoading(selector){
		var html = "<div class='text-center'><img src = 'images/ajax-loader(4).gif'></img></div>"
		selector.innerHTML = html;
	}
	*/

	var inputText ="";
	var x=document.getElementById("query");
	//var selector = document.querySelector('#result');
	document.getElementById("query").onkeyup = function(e){
		if($('#field').css("padding","10% 0px 29.5% 0px") == true){
			$('field').css("padding","0px 0px 11% 0px");
		}
		$("ul li").hide();
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if(keycode==13){
			//showLoading(selector);

			var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=" + inputText;
			
			fetch(url)
			.then(resp => resp.json())
			.then(function(data){
				console.log(data);
				return data.query.search.map(function(item){
					var ul = document.getElementById("result");
					var li = createnode("li");
					var span = createnode("span");
					var link = "https://en.wikipedia.org/?curid=" + item.pageid;
					var html = "<h3><b><a href =" + link + " target = '_blank'>"; 
					html += item.title + "</b></h3>" + item.snippet + "</a>";
					span.innerHTML = html;
					append(li,span);
					append(ul,li);
					$("#field").css("padding","0px 0px 11% 0px");
				})
			})
			//return;
		}
		else{
			inputText = x.value;
		}
	}

    
});