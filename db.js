let DB={kapal:[],clear:{},crew:[],log:[],uang:[],ins:[]};
try{let s=localStorage.getItem('INDONUSA_DB');if(s)DB=JSON.parse(s);}catch(e){}
function save(){localStorage.setItem('INDONUSA_DB',JSON.stringify(DB));}
function kapalOptions(selectId){
  let el=document.getElementById(selectId); if(!el) return;
  el.innerHTML='<option value="">-- Pilih Kapal --</option>'+DB.kapal.map(k=>`<option value="${k.id}">${k.nama} - ${k.pelabuhan}</option>`).join('');
}
function getNamaKapal(manualId,selectId){
  let m=document.getElementById(manualId); if(m&&m.value.trim()) return m.value.trim();
  let s=document.getElementById(selectId); if(s&&s.value){let k=DB.kapal.find(x=>x.id==s.value); if(k) return k.nama;}
  return '';
}
function menu(active){
  let m=[['index.html','📊 Dashboard'],['kapal.html','🚢 Kapal Masuk'],['clear.html','📋 Clearance'],['crew.html','👨‍✈️ Crew Change'],['log.html','⛽ Provision & Bunker'],['uang.html','💰 Finance D/A'],['insiden.html','🚨 Insiden'],['data.html','📁 Semua Data']];
  document.getElementById('menu').innerHTML=m.map(x=>`<a href="${x[0]}" class="${x[0]===active?'active':''}">${x[1]}</a>`).join('');
}