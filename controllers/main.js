angular.module('livecode', []).controller('MainController', function($scope) {
	
	var responseType = 0;

	$scope.message = "Hey UIT Class!";
	$scope.showTypeName = false;

	$scope.inventory = [
		{
			name: 'Combo',
			price: 14.99,
			amount: 4,
			isDelivered: false
		},
		{
			name: 'Pep and Cheese',
			price: 10.99,
			amount: 1,
			isDelivered: false
		},
		{
			name: 'Meat Lovers',
			price: 16.99,
			amount: 10,
			isDelivered: true
		}
	];
	
	$scope.respond = function() {
		if (responseType == 0) {
			responseType = 1;
			$scope.message = "Let's get this class started!";
		}
		else {
			responseType = 0;
			$scope.message = "Let's go!";
		}
	};

	$scope.showTypeNameWindow = function() {
		$scope.showTypeName = true;
	};

	$scope.showName = function() {

		// Determine if the username is blank and print an error message if it is
		if ($scope.yourName == "" || $scope.yourName == undefined) {
			alert("Hey, how come you never entered a name?");
		}
		else {
			// Use the entered name to alert to the user
			alert("Hey there "+$scope.yourName+"!");

			// Close the new name window and return the new name button
			$scope.showTypeName = true;
		}
	};

	$scope.purchasePizza = function(pizza) {
		// alert to the user that the pizza has been purchased
		alert("Thanks for your purchase!");

		// decrement the amount of the pizza
		pizza.amount--;
	};
});




















