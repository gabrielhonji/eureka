import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";

function Login() {
  const [passwordView, setPasswordView] = useState(false);

  const navigate = useNavigate();
  
  return (
    <div className="content">
      <Navbar />
      <form className="flex flex-col gap-8 max-w-[400px] m-auto mb-8">
        <div>
          <h1>Boa volta!</h1>
          <p>Faça o login para continuar</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input className="input-component secondary-color" placeholder="Email:" type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha:</label>
            <div className="input-container secondary-color flex">
              <input className="input-field" placeholder="Senha:" type={passwordView ? 'text' : 'password'} id="password" name="password" />
              <label htmlFor="password">
                <button onClick={() => setPasswordView(!passwordView)} className="input-button" type="button">
                  {
                    passwordView ?
                    <IconEye size={28} stroke={1}/>
                    :
                    <IconEyeOff size={28} stroke={1}/>
                  }
                </button>
              </label>
            </div>
          </div>
          <button className="hover-emphasis-primary font-medium text-left" type="button" onClick={() => navigate('/recovery')} >Esqueceu a senha?</button>
        </div>
        <button className="button-component tertiary-color" type="submit">Conectar-se</button>
      </form>
      <div className="flex mx-auto w-fit gap-1">
        <h5>Ainda não tem uma conta?</h5>
        <button className="emphasis-primary font-medium" type="button" onClick={() => navigate('/signup')} >Cadastre-se!</button>
      </div>
    </div>
  )
}

export default Login;
