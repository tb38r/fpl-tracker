
import OuterShell from "./OuterShell";

export default  function BaseBody(props) {
  //const [apidata, setApiData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://fantasy.premierleague.com/api/event/1/live/"
//       );
//       const data = await response.json();
//       setApiData(data);
//     };
//     fetchData();


//   }, []);

  return (
    <div className="h-2/5 grid gap-2 grid-cols-4 pt-20">
      <OuterShell surname="Lawal" score="11.8" teamname="newcastleunited" />
      <OuterShell surname="Mutungi" score="11.3" teamname="manchesterunited" />
      <OuterShell surname="Million" score="11.4" teamname="tottenham" />
      <OuterShell surname="Khatri" score="11.1" teamname="manchesterunited" />
    </div>
  );
}
