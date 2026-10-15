'use strict';
const days=[['Domingo','Dom','Gloriosos','0_jGY4bB0lw'],['Segunda-feira','Seg','Gozosos','bv5kK2VTX0k'],['Terça-feira','Ter','Dolorosos','0_jGY4bB0lw'],['Quarta-feira','Qua','Gloriosos','0_jGY4bB0lw'],['Quinta-feira','Qui','Luminosos','lO0uMSJa8g0'],['Sexta-feira','Sex','Dolorosos','0_jGY4bB0lw'],['Sábado','Sáb','Gozosos','bv5kK2VTX0k']];
const descriptions={Gozosos:'Contemple a anunciação, a visitação, o nascimento de Jesus, a apresentação e o encontro de Jesus no templo.',Dolorosos:'Contemple a oração no horto, a flagelação, a coroação de espinhos, o caminho da cruz e a crucificação.',Gloriosos:'Contemple a ressurreição, a ascensão, a vinda do Espírito Santo, a assunção de Maria e sua coroação.',Luminosos:'Contemple o batismo de Jesus, as bodas de Caná, o anúncio do Reino, a transfiguração e a instituição da Eucaristia.'};
const get=id=>document.getElementById(id),url=d=>'https://www.youtube.com/watch?v='+d[3],now=new Date(),today=days[now.getDay()];
get('date').textContent=new Intl.DateTimeFormat('pt-BR',{weekday:'long',day:'numeric',month:'long'}).format(now);get('today-name').textContent='Mistérios '+today[2];get('today-day').textContent=today[0]+' · Reze e contemple os mistérios do dia.';get('today-link').href=url(today);
function choose(i){const d=days[i];get('days').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.day)===i)));get('selected-name').textContent=d[0]+' · Mistérios '+d[2];get('selected-desc').textContent=descriptions[d[2]];get('selected-link').href=url(d)}
[1,2,3,4,5,6,0].forEach(i=>{
  const card=document.createElement('div');card.className='day-card';
  const b=document.createElement('button');b.type='button';b.dataset.day=i;b.textContent=days[i][0];b.setAttribute('aria-label','Consultar '+days[i][0]);b.addEventListener('click',()=>choose(i));
  const link=document.createElement('a');link.href=url(days[i]);link.target='_blank';link.rel='noopener noreferrer';link.textContent='Rezar o terço ↗';link.setAttribute('aria-label','Rezar o terço de '+days[i][0]+' — Mistérios '+days[i][2]);
  card.append(b,link);get('days').append(card);
});choose(now.getDay());
get('speed').addEventListener('change',e=>{get('audio').playbackRate=Number(e.target.value)});get('audio').addEventListener('error',()=>{get('status').textContent='Não foi possível carregar o áudio. Verifique sua conexão e tente novamente.'});get('audio').addEventListener('loadedmetadata',()=>{get('status').textContent='Áudio pronto. Aperte play para ouvir.'});


const player=get('audio'),playButton=get('audio-toggle');
function syncPlayback(){playButton.textContent=player.paused?'▶ Ouvir Salmo 91':'Ⅱ Pausar Salmo 91';playButton.setAttribute('aria-pressed',String(!player.paused));}
playButton.addEventListener('click',async()=>{
  if(!player.paused){player.pause();return;}
  try{await player.play();}catch(error){get('status').textContent='Não foi possível iniciar o áudio. Tente o controle de reprodução ao lado ou abaixo.';}
});
['play','pause','ended','error'].forEach(event=>player.addEventListener(event,syncPlayback));
const fontSteps=[100,115,130,150];let fontIndex=0;
try{const saved=Number(localStorage.getItem('salmos-font'));const found=fontSteps.indexOf(saved);if(found>=0)fontIndex=found;}catch(error){}
function applyFont(){
  document.documentElement.style.fontSize=(18*fontSteps[fontIndex]/100)+'px';
  get('font-size').textContent=fontSteps[fontIndex]+'%';
  get('font-less').disabled=fontIndex===0;get('font-more').disabled=fontIndex===fontSteps.length-1;
  try{localStorage.setItem('salmos-font',String(fontSteps[fontIndex]));}catch(error){}
}
get('font-less').addEventListener('click',()=>{fontIndex=Math.max(0,fontIndex-1);applyFont();});
get('font-more').addEventListener('click',()=>{fontIndex=Math.min(fontSteps.length-1,fontIndex+1);applyFont();});applyFont();
