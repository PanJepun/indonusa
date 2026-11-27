// firebase-db.js - SATU KUNCI BUAT SEMUA HALAMAN
const firebaseConfig = { apiKey: "AIzaSyBI79kjr4WGpmh3OvUxKXcgRao8PMCcxIY", authDomain: "fir-panjepun.firebaseapp.com", projectId: "fir-panjepun", storageBucket: "fir-panjepun.firebasestorage.app", messagingSenderId: "399104502129", appId: "1:399104502129:web:3230853484a64d220c2ed0" };
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let DB = { kapal:[], clear:{}, clearance:{}, crewChange:{}, provision:{}, finance:{}, insiden:[], videos:[], master:{} };
try{ let l=JSON.parse(localStorage.getItem('INDONUSA_DB')||'{}'); if(l&&typeof l==='object') DB=Object.assign(DB,l); }catch(e){}
function simpanDB(){
  localStorage.setItem('INDONUSA_DB', JSON.stringify(DB));
  return db.collection("indonusa").doc("data_utama").set(DB).then(()=>{ let s=document.getElementById('statusSync'); if(s) s.innerText='✅ Tersimpan ke Firebase'; }).catch(e=>console.log(e.message));
}
// Dengerin Firebase, kalau ada perubahan di HP lain, langsung update di sini
db.collection("indonusa").doc("data_utama").onSnapshot(function(doc){
  if(doc.exists){ let d=doc.data()||{}; DB=Object.assign(DB,d); localStorage.setItem('INDONUSA_DB', JSON.stringify(DB)); }
  let s=document.getElementById('statusSync'); if(s) s.innerText='🟢 Firebase Aktif';
  if(typeof render==='function') render();
  if(typeof renderAll==='function') renderAll();
  if(typeof updateBadge==='function') updateBadge();
  if(typeof renderClear==='function') renderClear();
});