 
<script src="http://developers.kakao.com/sdk/js/kakao.min.js"></script>

Kakao.init('c65ef05a10b8080f80969bfb56d13033');
Kakao.Auth.login({
    success:  function(authObj){

        Kakao.API.request({
            url:'v2/user/me',
            success:function(res){
                console.log(res);

                var id = res.id;
                var email = res.kakao_account.email;
                var name = res.properties.nickname;
                var html = '<BR>' + email + '<BR>' + name;

                $('body').append(html);
            }
        })
        console.log(authObj);
        var token = authObj.access_token;

    },
    fail: function(err){
        alert(JSON.stringify(err));
    }
});