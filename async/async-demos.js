var pgm = (function(){
	
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`)
	}

	//callback
	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`)
		});
	}

	var addAsyncEvents = (function(){
		var _subscribers = [];

		function subscribe(subscriber){
			_subscribers.push(subscriber);
		}

		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				_subscribers.forEach(subscriber => subscriber(result));
			}, 4000);
		}
		return{
			subscribe : subscribe,
			process : process
		}
	})();

	/*
	pgm.addAsyncEvents.process(100,200);
	pgm.addAsyncEvents.subscribe((result) => {
		console.log(`[@Client] result = ${result}`);
	});
	*/


	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 4000);
		});
		
		return promise;
	}


	return {
		addAsyncClient : addAsyncClient,
		addSyncClient : addSyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})();