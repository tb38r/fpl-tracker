
export default function PositionComponent(props) {
    const { position, index } = props;
  
    return (
      <div
        className={`flex justify-center items-center ${
          props.activeIndex === props.index ? 'bg-red-300' : 'bg-gray-300'
        } text-pink font-large cursor-pointer`}
        onClick={() => props.handleComponentClick(props.index)}
      >
        {position} 
      </div>
    );
  }