import "./CardFlip.css"
import { useEffect, useState } from "react";


function CardFlip(props) {
  console.log(props)
  const [angle, setAngle] = useState("0deg");
  
  useEffect(() => {
    const interval = setTimeout(() => {
      // console.log('every second')
      if (angle === "0deg") {
        setAngle("180deg");
      }
      // else if (angle === "180deg") {
      //   setAngle("0deg");
      // }
    }, props.sec);
    return () => clearInterval(interval);
  }, [angle]);

  const styles = { transform: `rotateY(${angle})` };

  return (
    <div className="flip-card">
      <div className="flip-card-inner" style={styles}>
        <div className="flip-card-front">
          <img src={props.img} />
        </div>
        <div className="flip-card-back">
        <h1>{props.title}</h1>
          <p>{props.body.map(paragraph =>
            <div>{paragraph}<br /><br /></div>)}</p>
        </div>
      </div>
    </div>
  )
}
export default CardFlip;