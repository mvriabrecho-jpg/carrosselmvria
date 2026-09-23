function Bag({open,items,onClose,onRemove,onCheckout}){
const {IconButton,Button,Radio}=window.OMVRIABrechDesignSystem_bd6a77;
const [frete,setFrete]=React.useState('pac');
const fmt=v=>'R$ '+v.toFixed(2).replace('.',',');
const sub=items.reduce((a,p)=>a+p.price,0); const fr=sub>=250?0:(frete==='pac'?18.9:32.5);
const TINT={rose:'var(--rose)',sage:'var(--sage)',lavender:'var(--lavender)',butter:'var(--butter)',sky:'var(--sky)',linen:'var(--linen-2)'};
return <><div onClick={onClose} style={{position:'fixed',inset:0,background:'var(--overlay)',opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity var(--dur-base) var(--ease-soft)',zIndex:40}}/>
<aside style={{position:'fixed',top:0,right:0,bottom:0,width:420,background:'var(--paper)',transform:open?'none':'translateX(100%)',transition:'transform var(--dur-slow) var(--ease-soft)',zIndex:41,display:'flex',flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 24px',borderBottom:'1px solid var(--line)'}}><span style={{fontFamily:'var(--font-display)',fontSize:24}}>Sua sacola</span><IconButton icon="x" label="Fechar" onClick={onClose}/></div>
<div style={{flex:1,overflow:'auto',padding:24,display:'flex',flexDirection:'column',gap:20}}>
{items.length===0&&<p style={{color:'var(--ink-3)',margin:0}}>Sua sacola está vazia por enquanto.</p>}
{items.map(p=><div key={p.id} style={{display:'flex',gap:16}}><div style={{width:80,aspectRatio:'4/5',background:TINT[p.tint]}}/><div style={{flex:1,display:'flex',flexDirection:'column',gap:4}}><span style={{fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--ink-3)'}}>{p.brand} · Tam. {p.size}</span><span style={{fontFamily:'var(--font-display)',fontSize:17}}>{p.title}</span><span style={{fontSize:14}}>{fmt(p.price)}</span></div><button onClick={()=>onRemove(p.id)} style={{alignSelf:'flex-start',background:'none',border:'none',fontSize:12,textDecoration:'underline',cursor:'pointer',color:'var(--ink-3)',fontFamily:'inherit'}}>Remover</button></div>)}
{items.length>0&&<div style={{display:'flex',flexDirection:'column',gap:12,paddingTop:12,borderTop:'1px solid var(--line)'}}><span style={{fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500}}>Frete</span><Radio name="fr" value="pac" checked={frete==='pac'} onChange={setFrete} label="PAC · 5 a 8 dias úteis"/><Radio name="fr" value="sedex" checked={frete==='sedex'} onChange={setFrete} label="Sedex · 1 a 3 dias úteis"/></div>}
</div>
<div style={{padding:24,borderTop:'1px solid var(--line)',display:'flex',flexDirection:'column',gap:10,background:'var(--linen)'}}>
<div style={{display:'flex',justifyContent:'space-between',fontSize:14}}><span>Subtotal</span><span>{fmt(sub)}</span></div>
<div style={{display:'flex',justifyContent:'space-between',fontSize:14}}><span>Frete</span><span>{items.length?(fr===0?'Grátis':fmt(fr)):'—'}</span></div>
<div style={{display:'flex',justifyContent:'space-between',fontSize:17,fontWeight:500,margin:'6px 0 8px'}}><span>Total</span><span>{fmt(sub+(items.length?fr:0))}</span></div>
<Button fullWidth size="lg" disabled={!items.length} onClick={onCheckout}>Finalizar compra</Button></div>
</aside></>;}
Object.assign(window,{Bag});