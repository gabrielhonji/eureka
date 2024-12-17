import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Signup() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
  }

  const [passwordView, setPasswordView] = useState(false);

  const navigate = useNavigate();
  
  return (
    <div className="content">
      <nav className="flex gap-4 p-16 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" className="fill-slate-950 dark:fill-neutral-50" fill="none">
          <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"/>
        </svg>
        <h2 className="space-grotesk-font font-bold">EUREKA</h2>
        <button type="button" onClick={() => toggleDarkMode()}>TOGGLE COLOR</button>
      </nav>
      <form className="flex flex-col gap-8 max-w-[400px] m-auto mb-8">
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
              <button onClick={() => setPasswordView(!passwordView)} className="input-button" type="button">
                {
                  passwordView ?
                  <IconEye size={28} stroke={1}/>
                  :
                  <IconEyeOff size={28} stroke={1}/>
                }
              </button>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-xs">Ao cadastrar-se, você aceita os termos de uso.</span>
            <button className="emphasis-primary text-xs" type="button" onClick={() => navigate('instagram.com/gabriel.honji')} >Ler termos.</button>
          </div>
        </div>
        <button className="button-component tertiary-color" type="submit">Conectar-se</button>
      </form>
      <div className="flex mx-auto w-fit gap-1">
        <h5>Já tem uma conta?</h5>
        <button className="emphasis-primary font-medium" type="button" onClick={() => navigate('/login')} >Conecte-se!</button>
      </div>
    </div>
  )
}

export default Signup;
