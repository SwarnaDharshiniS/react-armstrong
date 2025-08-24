const { useState } = React;

function Armstrong() {
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState("—");
  const check = () => {
    const n = parseInt(val);
    if (isNaN(n) || n < 0) { setMsg("Enter a valid non-negative integer."); return; }
    const digits = n.toString().length;
    let sum = 0, t = n;
    while (t > 0) { const d = t % 10; sum += Math.pow(d, digits); t = Math.floor(t/10); }
    setMsg(sum===n?`${n} is an Armstrong number`:`${n} is not an Armstrong number`);
  };
  return (<div className="card">
    <label>Enter a number</label>
    <input type="number" value={val} onChange={e=>setVal(e.target.value)} />
    <div className="controls">
      <button className="primary" onClick={check}>Check</button>
      <button className="secondary" onClick={()=>{{setVal('');setMsg('—')}}}>Clear</button>
    </div>
    <div className="result">{msg}</div>
  </div>);
}
function App(){ return <Armstrong/>; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
