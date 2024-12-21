import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";

function Recovery() {
  const [passwordView, setPasswordView] = useState(false);

  const navigate = useNavigate();
  
  const HandleRecovery = () => {
    return navigate('/register/subjects')
  }

  return (
    <div className="content">
      <Navbar />
      <form onSubmit={HandleRecovery} className="flex flex-col gap-8 max-w-[400px] m-auto mb-8">
        <div>
          <h1>Redefinir</h1>
          <p>Defina uma nova senha para sua conta</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input className="input-component secondary-color" placeholder="Email:" type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Nova senha:</label>
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
        </div>
        <div className="flex flex-col gap-4">
          <button className="button-component tertiary-color" type="submit">Alterar senha</button>
          <button onClick={() => navigate(-1)} className="button-component hover-color" type="button">Voltar</button>
        </div>
      </form>
    </div>
  )
}

export default Recovery;
