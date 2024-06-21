// hooks/useDisableRightClick.ts
import { useEffect } from "react";

const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
};

export default useDisableRightClick;
