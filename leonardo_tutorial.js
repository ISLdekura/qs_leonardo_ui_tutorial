define( 
	[
		"qlik",
		'text!./template.ng.html',
		'text!./dialog-template.ng.html'
	],
	function ( qlik, template, dialogTemplate ) {

		return {
			support : {
				snapshot: true,
				export: true,
				exportData : false
			},
			template: template,
			controller: ['$scope', 'luiDialog', function( $scope, luiDialog){
				$scope.openDialog = function(){
					luiDialog.show({
						template: dialogTemplate,
						input: {
							name: $scope.name
						},
						controller: ['$scope', function($scope){
							$scope.text = 'Hello world'
						}]
					})
				}
			}]
		};

} );

