"use client";

import { Helmet } from "react-helmet";

const Chat = () => {
  return (
    <section>
      {/* <!-- Messenger Chat plugin Code --> */}
      <div id="fb-root"></div>

      {/* <!-- Your Chat plugin code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Helmet>
        <script>
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "103296525886048");
            chatbox.setAttribute("attribution", "biz_inbox");
          `}
        </script>

        {/* <!-- Your SDK code --> */}
        <script>
          {`
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v16.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </script>
{/*         <script>
          {`
           window.chatbaseConfig = {
    chatbotId: "IhPHkApTGMjUvda-GS9Kk",
  } `}
</script>
<script
  className="hidden md:flex"
  src="https://www.chatbase.co/embed.min.js"
  id="IhPHkApTGMjUvda-GS9Kk"
  defer>
         
</script> */}
      </Helmet>
    </section>
  );
};

export default Chat;
