angular.module('starter')
.controller('recentChatCtrl', function($scope) {
	//TODO set the badge in future
	$scope.recentChats = [
		{	'id':1,
			'name':'dinesh',
			'lastMsg':'This is the last message',
			'image':'http://extremelifechanger.com/web_images/avatar-sam09-8-251.jpg',
		},
		{	'id':2,
			'name':'dinesh',
			'lastMsg':'This is the last message',
			'image':'http://extremelifechanger.com/web_images/avatar-sam09-8-251.jpg',
		},
		{	'id':3,
			'name':'dinesh',
			'lastMsg':'This is the last message',
			'image':'http://extremelifechanger.com/web_images/avatar-sam09-8-251.jpg',
		},

	]
})
