function setupFacebook()
{
	window.fbAsyncInit = function()
	{
		FB.init
		({
		appId      : '643717749097895',
		xfbml      : true,
		version    : 'v2.3'
		});
	};

	(function(d, s, id)
	{
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}

function sendFeed(nbWin)
{
	FB.ui
	({
		method: 'feed',
		link: 'https://developers.facebook.com/docs/',
		caption: 'I won ' + nbWin + ' game! BEAT THAT!',
	}, function(response){});
}

setupFacebook();