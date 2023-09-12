export default function Honourables(props) {
  return (
    <div className="bg-slate-500 flex flex-row justify-between h-full">
      <div className="text-blue-500">{props.name}</div> <div className="text-blue-500">{props.score}</div>
    </div>
  );
}
