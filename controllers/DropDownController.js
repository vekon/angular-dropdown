angular.module("main",[]).controller("DropDownController",DropDownController);

//DropDownController.$inject = ['$scope'];

function DropDownController(){
	this.dropDownValues = ['Java','Java Script','Scala'];
};