import { useEffect, useRef } from "react";

export default function Project({p,onClose}){const r=useRef(null);
useEffect(()=>{const e=ev=>{if(ev.key==="Escape")onClose()};window.addEventListener("keydown",e);document.body.style.overflow="hidden";r.current&&r.current.focus();return()=>{window.removeEventListener("keydown",e);document.body.style.overflow=""}},[]);
return <div className="mo" onClick={onClose}><div className="md pd" role="dialog" aria-modal="true" aria-labelledby="pt" onClick={e=>e.stopPropagation()}><button ref={r} className="x" onClick={onClose}>Close</button>
<div className="pv">{p[2]}</div>
<h2 id="pt">{p[0]}</h2><p className="up">{p[1]} · {p[3]}</p>
<a className="btn" href="#contact" onClick={onClose}>Request a similar job</a></div></div>}
