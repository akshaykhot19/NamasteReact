import { useEffect, useState } from "react";
    
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {

    //These event listeners will listen to the online and offline events of the browser
    // and update the isOnline state accordingly
    window.addEventListener("offline", ()=>{
        setIsOnline(false);
    }); 

    window.addEventListener("online", ()=>{
        setIsOnline(true);
    });

  }, []);

  return isOnline;
};

export default useOnlineStatus;
