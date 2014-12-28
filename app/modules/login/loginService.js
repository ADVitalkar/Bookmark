myApp.service('LoginService', function(){
	var userName = '';
	var password = '';

	this.setCredentials = function(userName, password){
		this.userName = userName;
		this.password = password;
	};
	this.getCredentials = function(){
		alert(this);
		return this;
	}
})