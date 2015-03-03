angular.module('starter')
.controller('chatCtrl', function($scope) {
	//TODO set something for the account controllation
	//sent Status 0 for sent 
	//			  1 for received
	//			  2 for read		
	$scope.chats = [
		{
			id:1,
			message:'this is the message',
			sent:true,
			time:1425381857594,
			sentStatus:0 
		},
		{
			id:1,
			message:'this is the message',
			sent:true,
			time:1425381857594,
			sentStatus:1 
		},
		{
			id:1,
			message:'this is the message',
			sent:false,
			time:1425381857594,
			sentStatus:2
		},
		{
			id:1,
			message:'this is the message',
			sent:false,
			time:1425381857594,
			sentStatus:2
		}
	]
})
