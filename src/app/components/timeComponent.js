

"use client"

export default function TimeComponent(props) {
  const { time, index } = props;

  return (
    <div
      className={`text-center ${
        props.activeIndex === props.index ? 'bg-green-300' : 'bg-yellow-300'
      } text-pink font-large cursor-pointer`}
      onClick={() => props.handleComponentClick(props.index)}
    >
      {time} weeks
    </div>
  );
}