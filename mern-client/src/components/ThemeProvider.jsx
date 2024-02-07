import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-white text-gray-800 dark:text-white dark:bg-slate-500 min-h-screen">
        {children}
      </div>
    </div>
  );
}
