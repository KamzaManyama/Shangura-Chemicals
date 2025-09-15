
    // This is a simple simulation - in a real scenario, you would fetch this from your server
    function updateProgress() {
      const progressElement = document.querySelector('.progress-value');
      const timeElement = document.querySelector('.text-primary-600');
      
      // Simulate progress (this would come from your maintenance system)
      const startTime = new Date().getTime();
      const totalDuration = 45 * 60 * 1000; // 45 minutes in milliseconds
      
      function update() {
        const elapsed = new Date().getTime() - startTime;
        const percentage = Math.min(95, Math.floor((elapsed / totalDuration) * 100));
        
        if (percentage < 95) {
          const remaining = Math.max(0, totalDuration - elapsed);
          const minutes = Math.floor(remaining / (60 * 1000));
          
          progressElement.style.width = `${percentage}%`;
          timeElement.textContent = `Approximately ${minutes} minutes remaining`;
          
          requestAnimationFrame(update);
        } else {
          progressElement.style.width = '95%';
          timeElement.textContent = 'Finalizing updates...';
        }
      }
      
      update();
    }
    
    // Start the progress animation when page loads
    document.addEventListener('DOMContentLoaded', updateProgress);

	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
