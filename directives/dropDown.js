angular.module("main",[]).directive("dropDown",function(){
	return {
		restrict:"E",
		templateUrl:"templates/drop-down.html",
		scope:{
			selected:"@",
			values:"=",
			changeValue:"&"
		},
		link:function(scope){
			scope.setValue = function(value){
				scope.selected = value;
				scope.isVisible = false;
			}
		}
	}
});