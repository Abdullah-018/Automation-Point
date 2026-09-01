'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'automation-point-theme';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const syncFrame = window.requestAnimationFrame(() => setTheme(readTheme()));

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem(storageKey)) return;
      const nextTheme: Theme = event.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };
    const syncStoredTheme = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      const nextTheme: Theme = event.newValue === 'dark' ? 'dark' : 'light';
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };

    media.addEventListener('change', syncSystemTheme);
    window.addEventListener('storage', syncStoredTheme);
    return () => {
      window.cancelAnimationFrame(syncFrame);
      media.removeEventListener('change', syncSystemTheme);
      window.removeEventListener('storage', syncStoredTheme);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <button
      type="button"
      className="theme-toggle"
      data-active-theme={theme}
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>
      </span>
      <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M20 15.3A8.4 8.4 0 0 1 8.7 4a8.5 8.5 0 1 0 11.3 11.3Z"/></svg>
      </span>
    </button>
  );
}
