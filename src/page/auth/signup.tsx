import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";

function Signup() {
  const [passwordView, setPasswordView] = useState(false);

  const navigate = useNavigate();
  
  const HandleSignup = () => {
    return navigate('/register/subjects')
  }

  return (
    <div className="content">
      <Navbar />
      <form onSubmit={HandleSignup} className="flex flex-col gap-8 max-w-[400px] m-auto mb-8">
        <div>
          <h1>Bem vindo!</h1>
          <p>Faça o cadastro para continuar</p>
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
          <div className="flex gap-1">
            <span className="text-xs">Ao cadastrar-se, você aceita os termos de uso.</span>
            <button className="emphasis-primary text-xs" type="button" onClick={() => navigate('instagram.com/gabriel.honji')} >Ler termos.</button>
          </div>
        </div>
        <button className="button-component tertiary-color" type="submit">Cadastrar-se</button>
      </form>
      <div className="flex mx-auto w-fit gap-1">
        <h5>Já tem uma conta?</h5>
        <button className="emphasis-primary font-medium" type="button" onClick={() => navigate('/login')} >Conecte-se!</button>
      </div>
    </div>
  )
}

export default Signup;
