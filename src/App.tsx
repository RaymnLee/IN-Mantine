import { MantineProvider, ColorScheme } from "@mantine/core";
import Shell from "./components/AppShell";
import { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";

// Custom theme is applied to all components in App
function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemColorScheme = darkModeMediaQuery.matches ? 'dark' : 'light';

    setColorScheme(systemColorScheme);

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      const isDarkMode = event.matches;
      const newColorScheme = isDarkMode ? 'dark' : 'light';

      setColorScheme(newColorScheme);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
  }, [setColorScheme]);
  return (
    <MantineProvider
      theme={{
        colorScheme: colorScheme,
        components: {
          Button: {
            defaultProps: {
              variant: "default",
              color: "dark",
              radius: "xs",
              size: "xs",
            },
          },
        },
      }}
      
      withGlobalStyles
      withNormalizeCSS
    >
      <Shell />
    </MantineProvider>
  );
}

export default App;
