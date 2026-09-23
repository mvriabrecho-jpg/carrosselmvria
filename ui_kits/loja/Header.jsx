function Header({bagCount,onHome,onBag}){
const {IconButton}=window.OMVRIABrechDesignSystem_bd6a77;
return <header style={{position:'sticky',top:0,zIndex:20,background:'rgba(255,255,255,.92)',backdropFilter:'blur(8px)',borderBottom:'1px solid var(--line)'}}>
<div style={{background:'var(--ink)',color:'var(--paper)',fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',textAlign:'center',padding:'9px 0'}}>Frete grátis acima de R$ 250 · Peças higienizadas</div>
<div style={{maxWidth:1240,margin:'0 auto',height:72,padding:'0 24px',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center'}}>
<nav style={{display:'flex',gap:28,fontSize:12,letterSpacing:'.14em',textTransform:'uppercase'}}>{['Novidades','Curadoria','Tendências','Sobre'].map(x=><a key={x} href="#" onClick={e=>{e.preventDefault();onHome()}} style={{textDecoration:'none'}}>{x}</a>)}</nav>
<button onClick={onHome} style={{background:'none',border:'none',cursor:'pointer',textAlign:'center',color:'var(--ink)'}}><img src="../../assets/logo-black.png" alt="MVRIA Brechó" style={{height:44,display:'block'}}/></button>
<div style={{display:'flex',justifyContent:'flex-end',gap:4}}><IconButton icon="search" label="Buscar"/><IconButton icon="heart" label="Favoritos"/><span style={{position:'relative'}}><IconButton icon="shopping-bag" label="Sacola" onClick={onBag}/>{bagCount>0&&<span style={{position:'absolute',top:4,right:2,minWidth:16,height:16,borderRadius:8,background:'var(--caramel)',color:'#fff',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center'}}>{bagCount}</span>}</span></div>
</div></header>;}
function Footer(){
const {Input,Button}=window.OMVRIABrechDesignSystem_bd6a77;
return <footer style={{background:'var(--linen)',marginTop:96}}><div style={{maxWidth:1240,margin:'0 auto',padding:'64px 24px 40px',display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:48}}>
<div><div style={{fontFamily:'var(--font-display)',fontSize:28,lineHeight:1.2,marginBottom:12}}>A curadoria da semana <i>no seu e-mail.</i></div><div style={{display:'flex',gap:8,alignItems:'flex-end'}}><Input placeholder="seu@email.com" style={{flex:1}}/><Button>Assinar</Button></div></div>
<div style={{display:'flex',flexDirection:'column',gap:10,fontSize:14}}><b style={{fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500}}>Ajuda</b><span>Como funciona</span><span>Trocas e devoluções</span><span>Guia de medidas</span></div>
<div style={{display:'flex',flexDirection:'column',gap:10,fontSize:14}}><b style={{fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',fontWeight:500}}>Contato</b><span>Instagram</span><span>WhatsApp</span></div>
</div><div style={{textAlign:'center',fontSize:11,color:'var(--ink-3)',padding:'0 0 32px',letterSpacing:'.14em'}}>© 2026 MVRIA BRECHÓ</div></footer>;}
Object.assign(window,{Header,Footer});