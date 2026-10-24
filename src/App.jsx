import { useState, useEffect, useRef, Component } from "react";
import { SV, PR, PJ, TM, FQ, ADDRESS, PHONE, MAP_EMBED, MAP_QUERY, REVIEWS_URL } from "./data.jsx";
import Legal from "./components/Legal.jsx";
import Wa from "./components/Wa.jsx";

class Eb extends Component{state={e:0};static getDerivedStateFromError(){return{e:1}}render(){return this.state.e?null:this.props.children}}
const Chev=({d})=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>;
function Project({list,i,setI,onClose}){const r=useRef(null),p=list[i],n=list.length,go=d=>setI((i+d+n)%n);
useEffect(()=>{const e=ev=>{if(ev.key==="Escape")onClose();else if(n>1&&ev.key==="ArrowRight")go(1);else if(n>1&&ev.key==="ArrowLeft")go(-1)};window.addEventListener("keydown",e);document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",e);document.body.style.overflow=""}},[i]);
useEffect(()=>{r.current&&r.current.focus()},[]);
return <div className="mo" onClick={onClose}><div className="md pd" role="dialog" aria-modal="true" aria-labelledby="pt" onClick={e=>e.stopPropagation()}><button ref={r} className="x" onClick={onClose}>Close</button>
<div className={"pv"+(p[4]?" pi":"")}>{p[4]?<img src={p[4]} alt={p[0]}/>:p[2]}
{n>1&&<><button className="pn l" aria-label="Previous photo" onClick={()=>go(-1)}><Chev d="M15 5l-7 7 7 7"/></button><button className="pn r" aria-label="Next photo" onClick={()=>go(1)}><Chev d="M9 5l7 7-7 7"/></button></>}</div>
<h2 id="pt">{p[0]}</h2><p className="up">{p[1]} · {p[3]}{n>1?" · "+(i+1)+" / "+n:""}</p>
<a className="btn" href="#contact" onClick={onClose}>Request a similar job</a></div></div>}

export default function App(){
const [sc,setSc]=useState(false),[open,setOpen]=useState(false),[a,setA]=useState(0),[sent,setSent]=useState(false),[legal,setLegal]=useState(null),[pj,setPj]=useState(null),[more,setMore]=useState(false),[cat,setCat]=useState("All"),[theme,setTheme]=useState(()=>{try{const s=localStorage.getItem("theme");if(s)return s}catch(e){}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});
useEffect(()=>{document.documentElement.setAttribute("data-theme",theme);try{localStorage.setItem("theme",theme)}catch(e){}},[theme]);
useEffect(()=>{const f=()=>setSc(window.scrollY>40);f();window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);
const s=SV[a],go=()=>setOpen(false),fl=PJ.filter(p=>cat==="All"||p[1]===cat),vis=more||fl.length<=6?fl:fl.slice(0,6);
return <>
<nav className={sc||open?"s":""}><div className="wrap nb">
<a className="logo" href="#top"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#7fc4dc" strokeWidth="2.5"><rect x="2" y="2" width="22" height="22"/><path d="M13 2v22M2 13h22"/></svg>Jeff Enterprises</a>

<div className={"nl"+(open?" o":"")}><a href="#services" onClick={go}>Services</a><a href="#projects" onClick={go}>Projects</a><a href="#about" onClick={go}>About</a><a href="#location" onClick={go}>Find us</a><a href="#faq" onClick={go}>FAQ</a><a className="btn" href="#contact" onClick={go}>Get a quote</a></div>
<div className="tr"><button className="tt" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"} title={theme==="dark"?"Light mode":"Dark mode"}>{theme==="dark"?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400"/></svg>:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.800A9 9 0 1 1 11.200 3a7 7 0 0 0 9.800 9.800z"/></svg>}</button><button className="menu" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">{open?<path d="M5 5l14 14M19 5L5 19"/>:<path d="M4 7h16M4 12h16M4 17h16"/>}</svg></button></div>
</div></nav>
<header className="hero" id="top">
<video autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/hero.mp4" type="video/mp4"/></video>
<div className="wrap hc">
<h1>Aluminium, built to last.</h1>
<p>Windows, doors, glass fittings, indoor and office partitions, and custom designs. Quality workmanship, durability and customer satisfaction guaranteed.</p>
<div className="cta"><a className="btn" href="#contact">Get a free quote</a><a className="btn o" href="#services">See our work</a></div>
</div></header>
<div className="strip"><div className="wrap">
<div className="i"><b>Quality workmanship</b>Precision cutting, tight joints, clean finish.</div>
<div className="i"><b>Durable materials</b>Corrosion-resistant frames that stay straight for years.</div>
<div className="i"><b>Customer satisfaction</b>We don’t leave until you’re happy with the result.</div></div></div>
<section id="services"><div className="wrap">
<div className="sh"><h2>Everything aluminium, one team.</h2><p>From a single window to a full office fit-out, we handle the design, fabrication and installation.</p></div>
<div className="svc"><div className="sl" role="tablist">{SV.map((x,i)=><button key={x.n} role="tab" aria-selected={a===i} onClick={()=>setA(i)}>{x.n}<span aria-hidden="true">{a===i?"●":"+"}</span></button>)}</div>
<div className="sd" role="tabpanel" key={a}><div>{s.i}</div><div><h3>{s.n}</h3><p>{s.t}</p><ul>{s.tags.map(t=><li key={t}>{t}</li>)}</ul></div></div></div>
</div></section>
<section className="dk" id="process"><div className="wrap">
<div className="sh"><h2>From measurement to handover.</h2><p>A simple four-step process, so you always know what happens next.</p></div>
<div className="pr">{PR.map((p,i)=><div key={p[0]}><div className="n">{i+1}</div><h3>{p[0]}</h3><p>{p[1]}</p></div>)}</div>
</div></section>
<section id="why"><div className="wrap">
<div className="sh"><h2>Why customers come back.</h2><p>Aluminium work is only as good as the hands that fit it.</p></div>
<div className="why">
<div><h3>Quality workmanship</h3><p>Every frame is measured twice and cut once. Joints are tight, glass is level, and doors close without a fight.</p></div>
<div><h3>Built to last</h3><p>Aluminium doesn’t rust, warp or rot. We choose profiles and hardware that handle sun, rain and daily use.</p></div>
<div><h3>Made around you</h3><p>No off-the-shelf compromises. Your sizes, your finish, your layout, with a quote agreed before work begins.</p></div>
</div></div></section>
<section id="projects" style={{background:"var(--surf)"}}><div className="wrap">
<div className="sh"><h2>Previous jobs.</h2><p>A few of the homes, shops and offices we have fitted out.</p></div>
<div className="fl" role="group" aria-label="Filter projects">{["All","Windows","Doors","Glass","Partitions","Custom"].map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)}>{c}</button>)}</div>
<div className="pg">{vis.map((p,i)=><div className="pj" key={p[0]} onClick={()=>setPj(i)}><figure><div className={"im"+(p[4]?" pf":"")}>{p[4]?<img src={p[4]} alt={p[0]} loading="lazy" style={{objectPosition:p[5]||"50% 50%"}}/>:p[2]}<button className="pp" aria-label={"View details: "+p[0]} onClick={e=>{e.stopPropagation();setPj(i)}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></button></div><figcaption><h3>{p[0]}</h3><p>{p[1]} · {p[3]}</p></figcaption></figure></div>)}</div>
{!more&&fl.length>6&&<div className="pm"><button aria-label="Show more photos" onClick={()=>setMore(true)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></button><span>More photos</span></div>}
</div></section>
<section id="about"><div className="wrap ab">
<div className="pt ph"><img src="/ceo.jpg" alt="Portrait of the Founder and CEO" width="800" height="1067" loading="lazy"/></div>
<div><h2>A word from our CEO.</h2><blockquote>“Aluminium work is a trade of millimetres. Get the measurements and the finish right, and the job lasts for decades.”</blockquote><p>I started this company to give customers a team that turns up when it says it will, builds what was quoted and leaves the site clean. Every window, door and partition that leaves our workshop carries that promise.</p><p className="nm">Michael Hart<span>Founder and CEO</span></p></div>
</div></section>
<section className="rv" id="reviews"><div className="wrap">
<div className="rh"><h2>What our customers say.</h2><p>Real jobs, real feedback.</p></div>
<div className="rg">{TM.map(t=><figure className="rc" key={t[0]}><span className="av">{t[3]?<img src={t[3]} alt=""/>:<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="9" r="4"/><path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7z"/></svg>}</span><div className="st" role="img" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{t[0]}”</blockquote><figcaption><b>{t[1]}</b><span>{t[2]}</span></figcaption></figure>)}</div>
{REVIEWS_URL&&<div className="rf"><a className="btn" href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">View more reviews</a></div>}
</div></section>
<section id="location"><div className="wrap"><div className="mw">
<div className="mi"><h2>Visit our workshop.</h2><p><b>Address</b><br/>{ADDRESS}</p><p><b>Phone</b><br/><a href={"tel:"+PHONE.replace(/ /g,"")}>{PHONE}</a></p><p><b>Hours</b><br/>Monday to Saturday, 8:00 to 17:00</p><a className="btn" href={"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(MAP_QUERY)} target="_blank" rel="noopener noreferrer">Get directions</a></div>
<iframe className="mm" src={MAP_EMBED||"https://maps.google.com/maps?q="+encodeURIComponent(MAP_QUERY)+"&output=embed"} title="Map showing our workshop location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></div></section>
<section id="faq" style={{background:"var(--surf)"}}><div className="wrap fq">
<div><h2>Questions, answered.</h2><p className="m">Can’t find what you need? Message us on WhatsApp and we’ll reply quickly.</p></div>
<div>{FQ.map(f=><details key={f[0]}><summary>{f[0]}</summary><p>{f[1]}</p></details>)}</div>
</div></section>
<section className="dk" id="contact"><div className="wrap ct">
<div><h2>Tell us what you need built.</h2><p className="m">Send the details and we’ll get back to you with a free quote. Site visits arranged on request.</p></div>
{sent?<div className="ok" role="status">Thanks, we’ve got your request.<span>We’ll contact you shortly to discuss your project.</span></div>:
<form onSubmit={e=>{e.preventDefault();setSent(true)}}>
<div className="r2"><label>Name<input required name="n" autoComplete="name"/></label><label>Phone<input required name="p" type="tel" autoComplete="tel"/></label></div>
<label>Email<input name="e" type="email" autoComplete="email"/></label>
<label>What do you need?<select name="s">{SV.map(x=><option key={x.n}>{x.n}</option>)}</select></label>
<label>Project details<textarea name="d" rows="4" placeholder="Sizes, location, timeline…"></textarea></label>
<button className="btn" type="submit">Request a quote</button></form>}
</div></section>
<footer><div className="wrap"><span>© 2026 Jeff Enterprises. All rights reserved.</span><div className="fk"><button onClick={()=>setLegal("privacy")}>Privacy policy</button><button onClick={()=>setLegal("terms")}>Terms and conditions</button></div></div></footer>
<Wa/>{legal&&<Legal k={legal} onClose={()=>setLegal(null)}/>}{pj!==null&&fl[pj]&&<Eb key={pj}><Project list={fl} i={pj} setI={setPj} onClose={()=>setPj(null)}/></Eb>}
</>}
