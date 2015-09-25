(function(ng)
{
	'use strict';
	var
	init = function(){
		ng
		.module('app', [])
		.directive('autocomplete', ['$http', '$compile', autocompleteFunction])
		.controller('ctrl', ctrlFunction)
	},
	
	ctrlFunction = function($scope)
	{	
		$scope.persons = 'meghdar';
	},

	autocompleteFunction = function($http, $compile)
	{
		return {
			restrict : 'A',
			scope: {
				dataType: '=localItems'
			},
			link: function(scope, elem, attrs)
			{
				console.log(scope);
				console.log(attrs);
				var 
				imageTemplate = '<div>image</div>',
				videoTemplate = '<div>video</div>',
				template = '',
				templateChooser = function(type)
				{
					switch (type)
					{
						case 'image':
							template = imageTemplate;
							break;
						case 'video':
							template = videoTemplate;
							break;
					}
						return template;		
				},

				elementParent = $("<div class=ac ></div>");
				var t = templateChooser('image');
				elementParent.append(templateChooser('image'));
				$("body").append(elementParent);
			}
		}
	}
	;
	init();
	
})(this.angular);