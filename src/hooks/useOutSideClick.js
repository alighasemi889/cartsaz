import { useRef,useEffect } from "react";

function useOutSideClick(handler) {
    const ref = useRef();
    useEffect(() => {
      function handleOutClick(e) {
        if(ref.current && !ref.current.contains(e.target) ){
            handler();
         }
      }
      document.addEventListener('click',handleOutClick,true);
      return () => {
      document.removeEventListener('click',handleOutClick,true);
      }
    }, [handler])
    return ref;
    
}
export default useOutSideClick;