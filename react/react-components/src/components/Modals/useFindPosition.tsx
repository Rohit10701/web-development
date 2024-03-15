import React, { useEffect, useState } from 'react'


const useFindPosition = (outsideRef: React.RefObject<HTMLDivElement>) => {
    const [isOutside, setIsOutside] = useState(false);
    
    useEffect(()=>{
      const handleMouseMove = (event : MouseEvent) => {
        if (outsideRef.current){
          const posX = event.clientX
          const posY = event.clientY
  
          const {left, top, right, bottom} = outsideRef.current?.getBoundingClientRect()
          const xAxis = posX > left && posY < right
          const yAxis = posY > top && posY < bottom

          setIsOutside(!(xAxis && yAxis))
        }
      }
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, [outsideRef])
  return {isOutside}
}

export default useFindPosition