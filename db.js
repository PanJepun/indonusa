let DB={};
try{let r=localStorage.getItem('INDONUSA_DB'); if(r) DB=JSON.parse(r);}catch(e){DB={};}
if(!DB.kapal) DB.kapal=[];
if(!DB.crewChange) DB.crewChange={};
if(!DB.clearance) DB.clearance={};
if(!DB.provision) DB.provision={};
if(!DB.finance) DB.finance={};
if(!DB.insiden) DB.insiden={};
function save(){ try{localStorage.setItem('INDONUSA_DB',JSON.stringify(DB));}catch(e){} }
function menu(aktif){
  let el=document.getElementById('menu'); if(!el) return;
  let list=[['index.html','🏠 Dashboard'],['kapal.html','⛴️ Kapal Masuk'],['clear.html','📋 Clearance'],['crew.html','👨‍✈️ Crew Change'],['provision.html','📦 Provision'],['finance.html','💰 Finance'],['insiden.html','🚨 Insiden'],['data.html','📦 Semua Data']];
  el.innerHTML=list.map(m=>`<a href="${m[0]}" ${m[0]===aktif?'style="background:#F5B301;color:#000;font-weight:900"':''}>${m[1]}</a>`).join('');
}
function getNamaKapal(idInput,idSelect){
  let v=document.getElementById(idInput)?.value.trim(); if(v) return v;
  let s=document.getElementById(idSelect); if(s&&s.value) return s.options[s.selectedIndex].text.trim(); return '';
}
function isiDropdown(id){
  let sel=document.getElementById(id); if(!sel) return;
  let list=Array.isArray(DB.kapal)?DB.kapal:Object.values(DB.kapal||{});
  let val=sel.value;
  sel.innerHTML='<option value="">-- Pilih Kapal --</option>'+list.filter(k=>k&&k.nama).map(k=>`<option value="${k.nama}">${k.nama}</option>`).join('');
  if(val) sel.value=val;
}
function hitungCrew(){
  let t=0; Object.values(DB.crewChange||{}).forEach(d=>{ t+=(d.on||[]).length+(d.off||[]).length; }); return t;
}