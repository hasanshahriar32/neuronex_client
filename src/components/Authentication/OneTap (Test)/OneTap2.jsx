import { Helmet } from "react-helmet";

const OneTap = () => {
  return (
    <div>
      <Helmet>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Helmet>
      <div
        id="g_id_onload"
        data-client_id="179292359244-p33587fda97a3fgp27s66k06q6a1gjun.apps.googleusercontent.com"
        data-context="signin"
        // data-ux_mode="redirect"
        data-ux_mode="popup"
        // data-login_uri="login"
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangle"
        data-theme="filled_black"
        // data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};

export default OneTap;
