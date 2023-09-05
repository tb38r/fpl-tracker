

// export default function TimeComponent(props){

//     return(
//      <div className="text-center text-pink font-large">
//        {props.time} weeks
//      </div>
//     )
// }
"use client"

export default function TimeComponent(props) {
  return (
    <div
      className={`text-center ${
        props.activeIndex === props.index ? 'bg-green-300' : 'bg-yellow-300'
      } text-pink font-large cursor-pointer`}
      onClick={() => props.handleComponentClick(props.index)}
    >
      {props.time} weeks
    </div>
  );
}