
function validate() 
{
	if(document.getElementById("name").value == "abc" && document.getElementById("password").value == "abc")
	{
		alert("Login successful");
	}
	else
	{
		alert("Please enter valid Id/password");
	}

};