function setupFacebook()
{
	window.fbAsyncInit = function()
	{
		FB.init
		({
		appId      : '142794929386010',
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
		link: 'http://www.ensor-soleil.com',
		name: 'Tic Tac Me',
		caption: 'I won ' + nbWin + ' game! BEAT THAT!',
		picture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Jogo_da_velha_-_tic_tac_toe.png',
	}, function(response){});
}

setupFacebook();
//sendFeed();