angular.module('psBlogApp', [])
	.run(function () {
		console.log('Hello, world, from psBlogApp!');
	})
	.directive('psCurrentTime', function () {
		return {
			template: '<h2 class="text-center">{{vm.currentTime}}</div>',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;
				vm.currentTime = new Date().toLocaleTimeString();
			}
		}
	});