var parkCode = localStorage.getItem("parkCode");
var parkName = localStorage.getItem("parkName");
var parkState = localStorage.getItem("state");

window.onload = function what(){
	document.getElementById('name').innerHTML = parkName;
	document.getElementById('state').innerHTML = parkState;
};

var articlesURL = 'https://developer.nps.gov/api/v1/articles?parkCode=' + parkCode + '&api_key=pPWYtEYMTN7Q9hiBJPETmtHdtyq4PqnpWjY63bNU';
console.log(articlesURL);

$.getJSON(articlesURL, function(data) {
	arr = data.data;

	for (var i = 0; i < arr.length; i++) {
  		var articleInfo = arr[i];
  		console.log(articleInfo);

  		var imgURL = articleInfo["listingimage"]['url'];
		var title = articleInfo["title"];
		var desc = articleInfo["listingdescription"];
		var url = articleInfo["url"];

		if (imgURL != "") {

	  		var imgWrapperDiv = document.createElement('div');
	  		var imgDiv = document.createElement('div');
	  		var descDiv = document.createElement('div');
	  		
	  		imgDiv.id = 'imgDiv';
	  		imgWrapperDiv.id = 'imgWrapperDiv';
	  		descDiv.id = 'descDiv';

	  		descDiv.textContent = desc;
	  		var imgurlCSS = 'url("'+imgURL+'")';
	  		$(imgDiv).css({'background-image': imgurlCSS, 'background-repeat': 'no-repeat', 'background-size': 'cover'});

	  		// $(imgDiv).append($('<a href="' + url + '" id=link>'+ title +'</a>').css('text-decoration', 'none').hover(function(e) { 

	  		$(imgDiv).append($('<a href="' + url + '" id=link >'+ title +'</a>').css('text-decoration', 'none').hover(function(e) { 
				$(event.target).attr('class');
	  		}));

			imgWrapperDiv.appendChild(imgDiv);
			imgWrapperDiv.appendChild(descDiv);
	  		$('.PgTwo').append(imgWrapperDiv);


	  		// var container = document.createElement('div'); 
	  		// var imgDiv = document.createElement('div');
	  		// var textContainer = document.createElement('div');
	  		// var titleDiv = document.createElement('div');

	  		// $(container).append($('<a href="' + url + '">'+ title +'</a>').css({'color': 'black', 'text-decoration': 'none'}));
	  		// textContainer.textContent = desc;

	  		// var imgurlCSS = 'url("'+imgURL+'")';
	  		// $(imgDiv).css({'background-image': imgurlCSS, 'background-repeat': 'no-repeat', 'background-size': 'cover'});

	  		// textContainer.id = 'textContainer';
	  		// container.id = 'container';
	  		// imgDiv.id = 'imgDiv';
	  		// titleDiv.id = 'title';

	  		// container.appendChild(imgDiv);
	  		// container.appendChild(textContainer);
	  		// $('.PgTwo').append(container);
  		}
  	}

});


// Sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "275px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}