import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react";

function Header() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;
  return (
    <div>
      <div className="text-3xl font-bold underline">
        The current theme is: {theme}
        <button onClick={() => setTheme("light")}>روشن</button>
        <button onClick={() => setTheme("dark")}>تیره</button>
      </div>
    </div>
  );
}

export default memo(Header);
