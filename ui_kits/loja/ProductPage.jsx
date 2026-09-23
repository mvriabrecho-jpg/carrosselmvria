function ProductPage({p,onAdd,onBack,fav,toggleFav}){
const {Button,IconButton,Badge,Tabs,Icon,Tooltip}=window.OMVRIABrechDesignSystem_bd6a77;
const [tab,setTab]=React.useState('Medidas');
const TINT={rose:'var(--rose)',sage:'var(--sage)',lavender:'var(--lavender)',butter:'var(--butter)',sky:'var(--sky)',linen:'var(--linen-2)'};
const fmt=v=>'R$ '+v.toFixed(2).replace('.',',');
return <main style={{maxWidth:1240,margin:'0 auto',padding:'24px'}}>
<button onClick={onBack} style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:6,fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',padding:'8px 0 24px',fontFamily:'inherit'}}><Icon name="arrow-left" size={16}/>Voltar</button>
<div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:64}}>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>{[0,1,2,3].map(i=><div key={i} style={{aspectRatio:'4/5',background:TINT[p.tint],gridColumn:i===0?'span 2':undefined}}/>)}</div>
<div style={{position:'sticky',top:140,alignSelf:'start',display:'flex',flexDirection:'column',gap:20}}>
<div style={{display:'flex',gap:8}}>{p.badge&&<Badge tone={p.badgeTone||'sage'}>{p.badge}</Badge>}<Badge tone="paper" style={{border:'1px solid var(--line)'}}>Higienizada</Badge></div>
<div><span style={{fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--ink-3)'}}>{p.brand} · Tam. {p.size}</span><h1 style={{margin:'8px 0 0',fontFamily:'var(--font-display)',fontWeight:400,fontSize:40,lineHeight:1.1}}>{p.title}</h1></div>
<div style={{display:'flex',gap:12,alignItems:'baseline',fontSize:20}}><span style={{fontWeight:500,color:p.oldPrice?'var(--accent-sale)':'var(--ink)'}}>{fmt(p.price)}</span>{p.oldPrice&&<span style={{fontSize:15,color:'var(--ink-4)',textDecoration:'line-through'}}>{fmt(p.oldPrice)}</span>}</div>
<p style={{margin:0,color:'var(--ink-2)'}}>{p.desc}</p>
<div style={{display:'flex',gap:8}}><Button fullWidth size="lg" disabled={p.sold} onClick={()=>onAdd(p)}>{p.sold?'Vendido':'Adicionar à sacola'}</Button><IconButton icon="heart" label="Favoritar" variant="outline" size={56} active={fav} onClick={toggleFav} style={{borderRadius:0}}/></div>
<div style={{display:'flex',alignItems:'center',gap:10,fontSize:13,color:'var(--ink-3)'}}><Icon name="sparkles" size={16}/>Peça única. Quando vende, não volta.</div>
<Tabs items={['Medidas','Estado','Cuidados']} value={tab} onChange={setTab} style={{marginTop:12}}/>
{tab==='Medidas'&&<div style={{display:'flex',flexDirection:'column'}}>{p.measures.map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid var(--line)',fontSize:14}}><span>{k}</span><span>{v}</span></div>)}<div style={{marginTop:12,fontSize:12,color:'var(--ink-3)',display:'flex',gap:6,alignItems:'center'}}><Tooltip content="Peça esticada, sem forçar"><Icon name="ruler" size={14}/></Tooltip>Como medimos</div></div>}
{tab==='Estado'&&<p style={{margin:0,fontSize:14}}>{p.cond}. Lavada e higienizada antes do envio.</p>}
{tab==='Cuidados'&&<p style={{margin:0,fontSize:14}}>Lavar à mão em água fria. Secar à sombra.</p>}
</div></div></main>;}
Object.assign(window,{ProductPage});