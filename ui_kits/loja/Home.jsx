function Home({onOpen,favs,toggleFav}){
const {ProductCard,Tabs,Button,Tag,Select}=window.OMVRIABrechDesignSystem_bd6a77;
const [cat,setCat]=React.useState('Tudo');
const P=window.MVRIA_PRODUCTS.filter(p=>cat==='Tudo'||p.cat===cat);
return <main>
<section style={{maxWidth:1240,margin:'0 auto',padding:'24px 24px 0'}}><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:520,background:'var(--rose)'}}>
<div style={{padding:'72px 64px',display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
<span style={{fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',fontWeight:500,color:'var(--rose-deep)'}}>Curadoria · Outono 2026</span>
<h1 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:64,lineHeight:1.05,letterSpacing:'-.01em'}}>Alfaiataria leve <i>para dias amenos</i></h1>
<p style={{margin:0,fontSize:17,fontWeight:300,maxWidth:400,color:'var(--ink-2)'}}>Selecionamos peças de linho e seda que seguem a tendência da estação. Todas lavadas, passadas e prontas para usar.</p>
<div style={{display:'flex',gap:12}}><Button iconRight="arrow-right">Ver a curadoria</Button><Button variant="secondary">Como funciona</Button></div></div>
<div style={{background:'var(--linen-2)',display:'flex',alignItems:'flex-end',justifyContent:'flex-end',padding:16,fontSize:11,color:'var(--ink-4)',letterSpacing:'.14em',textTransform:'uppercase'}}>Foto editorial</div>
</div></section>
<section style={{maxWidth:1240,margin:'0 auto',padding:'96px 24px 0'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:32}}><div><span style={{fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--ink-3)'}}>Chegou esta semana</span><h2 style={{margin:'8px 0 0',fontFamily:'var(--font-display)',fontWeight:400,fontSize:40}}>Novidades</h2></div><Select options={['Novidades','Menor preço','Maior preço']} style={{width:200}}/></div>
<Tabs items={['Tudo','Alfaiataria','Vestidos','Jeans','Tricô','Saias']} value={cat} onChange={setCat} style={{marginBottom:32}}/>
<div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'40px 24px'}}>{P.map(p=><ProductCard key={p.id} {...p} favorite={favs.includes(p.id)} onFavorite={()=>toggleFav(p.id)} onClick={()=>onOpen(p)}/>)}</div>
</section>
<section style={{maxWidth:1240,margin:'0 auto',padding:'96px 24px 0'}}><div style={{background:'var(--lavender)',padding:'56px 64px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center'}}>
<div><span style={{fontSize:11,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--lavender-deep)',fontWeight:500}}>Radar de tendências</span><h2 style={{margin:'10px 0 0',fontFamily:'var(--font-display)',fontWeight:400,fontSize:36,lineHeight:1.15}}>O que vai estar em alta <i>nos próximos meses</i></h2></div>
<div style={{display:'flex',flexDirection:'column',gap:16}}><p style={{margin:0,color:'var(--ink-2)'}}>Toda semana a gente conta o que viu nas passarelas e como adaptar com peças que já existem.</p><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{['Linho','Tons manteiga','Saia midi','Mocassim'].map(t=><Tag key={t}>{t}</Tag>)}</div></div>
</div></section>
</main>;}
Object.assign(window,{Home});