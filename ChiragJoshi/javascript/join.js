
//login javascript
var objPeople = [
	{ 
		email: "chirag@gmail.com",
		password: "joshi"
	},
	{ 
		email: "junaid@gmail.com",
		password: "rizvi"
	},
	{ 
		email: "mikhail@gmail.com",
		password: "pak"
	},
	{ 
		email: "praveen@gmail.com",
		password: "sudharsanan"
	},
	{ 
		email: "taylar@gmail.com",
		password: "oats"
	}

]

function getinfo() {
	var email = document.getElementById('email1').value
	var password = document.getElementById('password1').values

	for(var i = 0; i < objPeople.length; i++) {
		if(email == objPeople[i].email && password == objPeople[i].password) {
			console.log(email + " is logged in!!!")
			return
		}
	}
	console.log("incorrect email or password")
	
}



//comment javascript

function render(data){
	var html = '<div id="comentBox"><div class="item"><span>'+data.name+'</span><p>'+data.body+'</p></div><div class="clear"></div></div>'; 
	$("#container").append(html);
}

$(document).ready(function(){
    var coment = [
        {"name": "Chirag Joshi", "body": "this is first coment 1"}
    	];
    
    	for(var i=0;i<coment.length;i++){
			render(coment[i]);
		}

	$('#addcoment').click(function(){
		var addobj = {
			"name": $('#name').val(),
			"body": $('#body').val()
		};
		console.log(addobj);
		coment.push(addobj);
		render(addobj);
	});
});
		





