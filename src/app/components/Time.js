



export default function Time(props) {
  const { time, index } = props;


  return (
    <div
      className={`flex justify-center items-center hover:bg-emerald-400 text-xs md:text-lg  ${
        props.activeIndex === props.index ? 'bg-emerald-700' : 'bg-gray-300'
      } font-large cursor-pointer font-bold md:text-lg`}
      onClick={() => props.handleComponentClick(props.index)}
      data-testid="testButton"

    >
      {time} WEEKS
    </div>
  );
}