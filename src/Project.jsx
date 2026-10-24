import { useEffect, useRef } from "react";

export default function Project({list,i,setI,onClose}){const r=useRef(null),p=list[i],n=list.length,go=d=>setI((i+d+n)%n);
useEffect(()=>{const e=ev=>{if(ev.key==="Escape")onClose();else if(n>1&&ev.key==="ArrowRight")go(1);else if(n>1&&ev.key==="ArrowLeft")go(-1)};window.addEventListener("keydown",e);document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",e);document.body.style.overflow=""}},[i]);
useEffect(()=>{r.current&&r.current.focus()},[]);
return <div className="mo" onClick={onClose}><div className="md pd" role="dialog" aria-modal="true" aria-labelledby="pt" onClick={e=>e.stopPropagation()}><button ref={r} className="x" onClick={onClose}>Close</button>
<div className={"pv"+(p[4]?" pi":"")}>{p[4]?<img src={p[4]} alt={p[0]}/>:p[2]}
{n>1&&<><button className="pn l" aria-label="Previous photo" onClick={()=>go(-1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><button className="pn r" aria-label="Next photo" onClick={()=>go(1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg></button></>}</div>
<h2 id="pt">{p[0]}</h2><p className="up">{p[1]} · {p[3]}{n>1?" · "+(i+1)+" / "+n:""}</p>
<a className="btn" href="#contact" onClick={onClose}>Request a similar job</a></div></div>}
