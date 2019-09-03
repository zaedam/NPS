var queryURL = localStorage.getItem("queryURL");
console.log(queryURL);

$.getJSON(queryURL, function(data) {
	arr = data.data[0];
  	console.log(arr);

	var fullName = arr["fullName"];
	var state = arr["states"];
	var desc = arr["description"];
	var parkCode = arr["parkCode"];

	var states = new Map([ ["AL","Alabama"], ["AK","Alaska"], ["AZ","Arizona"], ["AR","Arkansas"], ["CA","California"], ["CO","Colorado"], ["CT","Connecticut"], ["DE","Delaware"], ["FL","Florida"], ["GA","Georgia"], ["HI","Hawaii"], ["ID","Idaho"], ["IL","Illinois"], ["IN","Indiana"], ["IA","Iowa"], ["KS","Kansas"], ["KY","Kentucky"], ["LA","Louisiana"], ["ME","Maine"], ["MD","Maryland"], ["MA","Massachusetts"], ["MI","Michigan"], ["MN","Minnesota"], ["MS","Mississippi"], ["MO","Missouri"], ["MT","Montana"], ["NE","Nebraska"], ["NV","Nevada"], ["NH","New Hampshire"], ["NJ","New Jersey"], ["NM","New Mexico"], ["NY","New York"], ["NC","North Carolina"], ["ND","North Dakota"], ["OH","Ohio"], ["OK","Oklahoma"], ["OR","Oregon"], ["PA","Pennsylvania"], ["RI","Rhode Island"], ["SC","South Carolina"], ["SD","South Dakota"], ["TN","Tennessee"], ["TX","Texas"], ["UT","Utah"], ["VT","Vermont"], ["VA","Virginia"], ["WA","Washington"], ["WV","West Virginia"], ["WI","Wisconsin"], ["WY","Wyoming"] ]); 
	
	if (state.length==2) {
		state = states.get(state);
	}

	if (fullName=="Kaloko-Honok&#333;hau National Historical Park") {
		fullName = "Kaloko-Honokohau National Historical Park";
	}
	if (fullName=="Pu`uhonua O H&#333;naunau National Historical Park") {
		fullName = "Pu`uhonua O Honaunau National Historical Park";
	}
	if (fullName=="Pu`ukohol&#257; Heiau National Historic Site") {
		fullName = "Pu`ukohola Heiau National Historic Site";
	}

  	$('#name').append(fullName);
  	$('#state').append(state);
  	$('#desc').append(desc);
  	

	localStorage.setItem("parkCode", parkCode);
	localStorage.setItem("parkName", fullName);
	localStorage.setItem("state", state);
});

// Sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "275px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// HOW TO SEND MESSAGES TO NEW WINDOW ///////////////////////////////////////////////////////////////////////////////

// console.log(window.opener.queryURL);
// console.log(window.opener.my_special_setting);


// window.addEventListener("message", receiveMessage, false);
// function receiveMessage(event) {
// 	console.log(event.data);
// }
// // OR
// window.addEventListener("message", function (event) {
// 	console.log(event.data);
// });


// var mySpecialSetting = localStorage.getItem("mySepcialSetting");
// console.log(mySpecialSetting);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// HOW TO OPEN PAGES ON SAME/NEW WINDOW /////////////////////////////////////////////////////////////////////////////


// window.open('SearchPage.html');
// window.location.href = 'SearchPage.html';