
export default function PositionComponent(props) {
    const { position, index } = props;
  
    return (
      <div
        className={`flex justify-center items-center hover:bg-sky-400 ${
          props.activeIndex === props.index ? 'bg-sky-600' : 'bg-gray-300'
        } text-pink font-large cursor-pointer font-bold`}
        onClick={() => props.handleComponentClick(props.index)}
      >
        {position} 
      </div>
    );
  }