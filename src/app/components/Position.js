export default function Position(props) {
  const { position, index } = props;



  return (
    <div
      className={`flex justify-center items-center hover:bg-sky-400 text-[10px] md:text-lg ${
        props.activeIndex === props.index ? "bg-sky-600" : "bg-gray-300"
      }   cursor-pointer font-bold md:text-lg`}
      onClick={() => props.handleComponentClick(props.index)}
      data-testid="positionButton"
    >
      {position}
    </div>

    
  );
}
