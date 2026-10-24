import { useEffect, useRef } from "react";
import { LG } from "../data.jsx";

export default function Legal({k,onClose}){const r=useRef(null),L=LG[k];
useEffect(()=>{const e=ev=>{if(ev.key==="Escape")onClose()};window.addEventListener("keydown",e);document.body.style.overflow="hidden";r.current&&r.current.focus();return()=>{window.removeEventListener("keydown",e);document.body.style.overflow=""}},[]);
return <div className="mo" onClick={onClose}><div className="md" role="dialog" aria-modal="true" aria-labelledby="lt" onClick={e=>e.stopPropagation()}><button ref={r} className="x" onClick={onClose}>Close</button><h2 id="lt">{L.t}</h2><p className="up">Last updated October 23, 2026</p>{L.s.map(x=><div key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div>}
