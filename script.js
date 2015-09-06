(function(ng)
{
	'use strict';
	var
	init = function(){
		ng
		.module('app', [])
		.directive('autocomplete', ['$http', autocompleteFunction])
		.controller('ctrl', ctrlFunction)
	},
	
	ctrlFunction = function($scope)
	{	
		$scope.persons = [
			{
				name: 'milad',
				family: 'khanmohammadi'
			},
			{
				name: 'ali',
				family: 'bakhtiari'
			},
			{
				name: 'reza',
				family: 'shakeri'
			}
		]
	},

	autocompleteFunction = function($http)
	{
		return {
			restrict : 'A',
			scope: true, // a child scope inherits from the parents
			templateUrl: 'simpleList.html',
			link: function(scope, elem, attrs)
			{
				elem.bind('keyup', function(){
					$http
						.get("customers.php?searchKey=" + this.value)
						.success(function(response){
							console.log(response);
						})
				})
			}
		}
	}
	;
	init();
	
})(this.angular);