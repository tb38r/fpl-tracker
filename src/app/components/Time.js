



export default function Time(props) {
  const { time, index } = props;


  return (
    <div
      className={`flex justify-center items-center hover:bg-emerald-400  ${
        props.activeIndex === props.index ? 'bg-emerald-700' : 'bg-gray-300'
      } text-pink font-large cursor-pointer font-bold`}
      onClick={() => props.handleComponentClick(props.index)}
      data-testid="testButton"

    >
      {time} WEEKS
    </div>
  );
}