var parkCode = localStorage.getItem("parkCode");
var parkName = localStorage.getItem("parkName");
var parkState = localStorage.getItem("state");

window.onload = function what(){
	document.getElementById('name').innerHTML = parkName;
	document.getElementById('state').innerHTML = parkState;
};


var articlesURL = 'https://developer.nps.gov/api/v1/newsreleases?parkCode=' + parkCode + '&api_key=pPWYtEYMTN7Q9hiBJPETmtHdtyq4PqnpWjY63bNU';
console.log(articlesURL);

$.getJSON(articlesURL, function(data) {
	arr = data.data;

	for (var i = 0; i < arr.length; i++) {
  		var articleInfo = arr[i];

  		var imgURL = articleInfo["image"]['url'];
		var title = articleInfo["title"];
		var desc = articleInfo["abstract"];
		var url = articleInfo["url"];
		var releaseDate = articleInfo["releasedate"];
		var date = releaseDate.substring(0,10);


		if (imgURL != "") {

	  		var container = document.createElement('div'); 
	  		var imgDiv = document.createElement('div');
	  		var textContainer = document.createElement('div');
	  		var titleDiv = document.createElement('div');
	  		var dateDiv = document.createElement('div');
	  		var descDiv = document.createElement('div');

	  		textContainer.id = 'textContainer';
	  		container.id = 'container';
	  		imgDiv.id = 'imgDiv';
	  		titleDiv.id = 'title';
	  		dateDiv.id = 'date';
	  		descDiv.id = 'desc';

	  		$(titleDiv).append($('<a href="' + url + '">'+ title +'</a>').css({'color': 'black', 'text-decoration': 'none'}));
	  		descDiv.textContent = desc;
	  		dateDiv.textContent = date;

	  		var imgurlCSS = 'url("'+imgURL+'")';
	  		$(imgDiv).css({'background-image': imgurlCSS, 'background-repeat': 'no-repeat', 'background-size': 'cover'});

	  		textContainer.appendChild(titleDiv);
	  		textContainer.appendChild(dateDiv);
	  		textContainer.appendChild(descDiv);

	  		container.appendChild(imgDiv);
	  		container.appendChild(textContainer);
	  		$('.PgTwo').append(container);

	  		container.addEventListener('click', function (event) {
     			var textContainerInfo = ($(this).children('div')[1]);
 	  			var titleInfo = $(textContainerInfo).children()[0];
     			var childLink = $(titleInfo).children().attr('href');
     			window.location = childLink;
			});
	  		
  		}

  		else {

	  		var container = document.createElement('div'); 
	  		var textContainer = document.createElement('div');
	  		var titleDiv = document.createElement('div');
	  		var dateDiv = document.createElement('div');
	  		var descDiv = document.createElement('div');

	  		$(titleDiv).append($('<a href="' + url + '">'+ title +'</a>').css({'color': 'black', 'text-decoration': 'none'}));
	  		descDiv.textContent = desc;
	  		dateDiv.textContent = date;

	  		textContainer.id = 'textContainer2';
	  		container.id = 'container';
	  		titleDiv.id = 'title';
	  		dateDiv.id = 'date';
	  		descDiv.id = 'desc';

	  		textContainer.appendChild(titleDiv);
	  		textContainer.appendChild(dateDiv);
	  		textContainer.appendChild(descDiv);

	  		container.appendChild(textContainer);
	  		$('.PgTwo').append(container);

	  		container.addEventListener('click', function (event) {
     			var divs = $(this).children('a')['context'];
     			var textContainerInfo = ($(divs).children('div')[0]);
     			var titleInfo = ($(textContainerInfo).children('div')[0]);
     			var childLink = $(textContainerInfo).children().children().attr('href');
     			window.location = childLink;
			});
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