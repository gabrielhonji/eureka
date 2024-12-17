import { useEffect } from 'react';
import { HandleColorScheme, ToggleColorScheme } from '../../res/script/colorScheme.tsx';

const Navbar = () => {
  useEffect(() => {
    HandleColorScheme();
  }, [])

  return (
    <nav className="flex gap-4 p-16 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" className="fill-slate-950 dark:fill-neutral-50" fill="none">
        <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"/>
      </svg>
      <h2 className="font-bold">EUREKA</h2>
      <button type="button" onClick={() => ToggleColorScheme()}>TOGGLE COLOR</button>
    </nav>
  )
}

export default Navbar;