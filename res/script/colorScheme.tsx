import { getCookie, setCookie } from 'typescript-cookie';

export const HandleColorScheme = () => {
  const colorScheme = getCookie('colorScheme');
  if (colorScheme == 'dark') {
    document.body.classList.add('dark');
  } else {
    setCookie('colorScheme', 'light');
    document.body.classList.remove('dark');
  }
}

export const ToggleColorScheme = () => {
  const colorScheme = getCookie('colorScheme');
  if (colorScheme == 'dark') setCookie('colorScheme', 'light');
  if (colorScheme == 'light') setCookie('colorScheme', 'dark');
  HandleColorScheme();
}