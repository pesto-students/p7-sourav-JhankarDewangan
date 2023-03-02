import { useState } from "react";
import axios from "axios";
export default function Main(){
  
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);

      setResult(res.data.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };
  const handleclick = () => {
    fetchData();
    setInput("");
  };
  return(
    <div className="box">
    <p className="para" > More than just Shorter Links</p>
 <p>Build your brands recognition and get detailed insights on how your links are performing</p>
    <div className="middle">
<h1 className="URL">URL Shortener</h1>
<div className="middle-middle">
<input
  type="text" className="text"
  placeholder="Shorten Your API Here"
  value={input}
  onChange={(e) => setInput(e.target.value)}
></input>

<button onClick={handleclick} className="button1">Click</button>

</div>
</div>
<div className="result-box">
<p className="result">Shorten Link:{result}</p>
</div>
</div>
  )
}