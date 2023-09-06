



export default function TimeComponent(props) {
  const { time, index } = props;


  return (
    <div
      className={`flex justify-center items-center ${
        props.activeIndex === props.index ? 'bg-green-300' : 'bg-gray-300'
      } text-pink font-large cursor-pointer`}
      onClick={() => props.handleComponentClick(props.index)}
    >
      {time} WEEKS
    </div>
  );
}