import { NextPage } from 'next'
import LoginForm from "./login"
import Link from "next/link"

const Home: NextPage = () => {
  return (


    <div>

      <h1 className='title'>

      </h1>

      <LoginForm />
      <Link href="/search"> Log in </Link>


      <div id="g_id_onload"
        data-client_id="123228452042-3psvhb7dhvvv6o90i4a2624au0o6dank.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000"
        data-itp_support="true">
      </div>

      <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
      </div>

      <script src="https://accounts.google.com/gsi/client" async></script>

    </div>


  )
}

export default Home






