var parkCode = localStorage.getItem("parkCode");
var parkName = localStorage.getItem("parkName");
var parkState = localStorage.getItem("state");

window.onload = function what(){
	document.getElementById('name').innerHTML = parkName;
	document.getElementById('state').innerHTML = parkState;
};

var articlesURL = 'https://developer.nps.gov/api/v1/events?parkCode=' + parkCode + '&limit=100&start=20&sort=date&api_key=pPWYtEYMTN7Q9hiBJPETmtHdtyq4PqnpWjY63bNU';
console.log(articlesURL);

$.getJSON(articlesURL, function(data) {
	arr = data.data;
	console.log(arr[0]);

	for (var i = 0; i < arr.length; i++) {
		var articleInfo = arr[i];
		console.log(articleInfo);

		var title = articleInfo["title"];
		var isFree = articleInfo["isfree"];
		var desc = articleInfo["description"];
		var date = articleInfo["date"];
		var fee = articleInfo["feeinfo"];
		var isAllDay = articleInfo["isallday"];
		var timeStart = articleInfo["times"][0]['timestart'];
		var timeEnd = articleInfo["times"][0]['timeend'];
		var location = articleInfo["location"];
		var phone = articleInfo["contacttelephonenumber"];
		var email = articleInfo["contactemailaddress"];
		var infourl = articleInfo["infourl"];
		var regurl = articleInfo["regresurl"];
		console.log('"'+location+'"');

		var container = document.createElement('div');
		var L = document.createElement('div');
		var R = document.createElement('div');

		$(L).append("<div id=title>"+title+"</div>");
		$(L).append("<div id=date>"+date+"</div>");
		if (infourl != "") {
			$(L).append('<button type="submit id=button">More Info</i></button>').on('click', function(event) {
				    event.preventDefault();
				    window.location = infourl;
				});
		}
		if (regurl != "") {
			$(L).append('<button type="submit" id=button>Register</i></button>').on('click', function(event) {
				    event.preventDefault();
				    window.location = regurl;
				});
		}
		$(R).append("<div id=desc>"+desc+"</div>");

		if (location=="") {
			$(R).append("<div id=details>Location: N/A</div>");
		}
		else {
			$(R).append("<div id=details>Location: "+location+"</div>");
		}
		if (phone=="" && email=="") {
			$(R).append("<div id=details>Contact Information: N/A</div>");
		}
		else if (phone!="" && email!="") {
			$(R).append("<div id=details>Contact Information: "+phone+" | "+email+"</div>");
		}
		else {
			$(R).append("<div id=details>Contact Information: "+phone+email+"</div>");
		}
		if (isAllDay == true) {
			$(R).append("<div id=details>Time: All Day</div>");			
		}
		else if (timeStart != "" && timeEnd != "") {
			$(R).append("<div id=details>Time: "+timeStart+" to "+timeEnd+"</div>");
		}
		else if (timeStart != "" ) {
			$(R).append("<div id=details>Time: "+timeStart+"</div>");
		}
		if (isFree==true) {
			$(R).append("<div id=details>Fee: Free</div>");
		}
		else {
			$(R).append("<div id=details>Fee: "+fee+"</div>");
		}

		container.id = 'container';
		L.id = 'L';
		R.id = 'R';

		container.appendChild(L);
		container.appendChild(R);
		$('.PgTwo').append(container);

  	}

  });


// Sidebar
function openNav() {
	document.getElementById("mySidenav").style.width = "275px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// Sidebar
function openNav() {
	document.getElementById("mySidenav").style.width = "275px";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}