'use strict';

eventsApp.controller('EventController', 
	function EventController($scope) {

		// variables
		// $scope.snippet = '<span style="color:red">hi there</span>';
		// $scope.boolValue = true;
		// $scope.mystyle = {color:'red'};
		// $scope.myclass = "blue";
		// $scope.buttonDisabled = true;
		$scope.sortorder = 'name';

		$scope.event = {
			name: 'Angular Boot Camp',
			date: 1359781015626,
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: 'img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives masterclass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.',
					upVoteCount: 5
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Beginner',
					abstract: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.',
					upVoteCount: 10
				},
				{
					name: 'Well behaved controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.',
					upVoteCount: 3
				}
			]
		};

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
          session.upVoteCount--;
        };

	}
);