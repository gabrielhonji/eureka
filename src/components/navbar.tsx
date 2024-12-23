import { useEffect } from 'react';
import { Link } from 'react-router';
import { HandleColorScheme, ToggleColorScheme } from '../../res/script/colorScheme.tsx';

interface Props {
  route: 'home' | 'subject' | 'cycles' | 'account' | 'none';
}

const Navbar = ({route}: Props): JSX.Element => {
  useEffect(() => {
    HandleColorScheme();
  }, [])

  return (
    <nav className="flex gap-4 p-16 items-center justify-between">
      <div className='flex gap-4 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" className="fill-slate-950 dark:fill-neutral-50" fill="none">
          <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"/>
        </svg>
        <h2 className="font-bold">EUREKA</h2>
        <button className='toggle-color' type="button" onClick={() => ToggleColorScheme()}>TOGGLE COLOR</button>
      </div>
      { route == 'none' ?
        ''
        :
        <ul className='flex gap-6'>
          <li><Link className={`navbar-link ${route == 'home' ? 'active' : ''}`} to={'/home'}>Home</Link></li>
          <li><Link className={`navbar-link ${route == 'subject' ? 'active' : ''}`} to={'/subjects'}>Matérias</Link></li>
          <li><Link className={`navbar-link ${route == 'cycles' ? 'active' : ''}`} to={'/cycles'}>Ciclos</Link></li>
        </ul>
      }
    </nav>
  )
}

export default Navbar;