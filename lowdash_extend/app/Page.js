
define(["app/AbstractPage"] , function( AbstractPage){

/*
  function Page () {

  }*/

var Page = function (name) {
	//this.name = name;
 };

	_.extend(Page.prototype, AbstractPage.prototype , {

		name: "Tis",

		sayHello: function () {
			console.log ("hello = " );
			this.sayTen ();
			this.sayFive ();// call to super aka abstracrPage
		},


		sayTen: function () {
			console.log (" 10 = "  );
		},

		callFuncOnChild : function () {
			console.log (" callFuncOnChild CHILD = " );
		}




		});


/*
	function Page (argument) {
		this.name = argument;
	}
/*

	page.sayHello = function (argument) {
		console.log ("hello = "  );
	};
 */


 return Page;

});
