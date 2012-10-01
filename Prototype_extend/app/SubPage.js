
define(['app/Page'] , function(Page){

   var subPage = Object.create(Page);

    subPage.name = "subPage";

	subPage.sayHowdy = function() {
console.log ("sayhowdy = "  );

	};



  return subPage;

});