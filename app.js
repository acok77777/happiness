(() => {
"use strict";
const KEY="happiness-prayer-data-v1";
const DEFAULT_NAMES=["손소희", "임묘광", "임세아", "김온외할머니", "임태완", "이주란", "손하익", "안지민", "임현상", "임현수", "손채은", "손지호", "하니 명복", "친정 외가", "친정 친가", "시댁 외가", "시댁 친가", "김경순 권", "장혜진 지역", "이승아 방면", "조정자지역", "한정순총지역", "제물포권", "인천1방면", "신순경 지부", "김연례 지구", "최순옥총지구", "민한순총지구", "유신윤지구부", "주명분총반담", "이윤아총반담", "재능회원님", "송희순 박문", "황정숙 박문", "최병정제공자", "박문회원님", "동산지구", "욱일지구", "니치렌대성인님", "마키쿠치 선생님", "도다선생님", "이케다 선생님", "가네코사모님", "SGI 한국본부", "SGI 일본본부", "SGI 전세계", "청년1", "청년2", "청년3", "청년4", "청년5", "청년6", "청년7", "청년8", "청년9", "청년10", "아시아", "유럽", "아프리카", "북아메리카", "남아마레카", "중앙아메리카", "오세아니아", "남극 북극", "우주전체", "아시아드7단지", "아시아드6단지", "아시아드8단지", "아시아드5단지", "아.센트럴자이", "한내들퍼스티지", "아시아드1단지", "아시아드2단지", "패스트박스", "메리어트", "테슬라", "삼성", "SK하이닉스", "현대", "기아", "LG", "셀트리온", "네이버", "한화", "카카오", "KT", "대한항공", "CJ", "포스코", "롯데", "하나금융", "GS", "대기업", "중소기업", "소기업", "인천광역시", "서울특별시", "부산광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청도", "전라도", "경상도", "제주특별자치도", "평생자산", "사업아이디어", "주원빌라", "한울", "해찬솔", "다온", "서은주 담당", "남선미 부", "이보미 부", "방성임 부", "소린씨", "윤지애 부", "이미복 반담", "조민호씨", "김영희지구", "이은옥지구", "구정분", "구정미", "김영주", "유희정", "김유나+어머니", "로나 샘", "김윤정 수학", "임서윤 영어", "남득예 권부", "이재숙 부방", "김순미 부방", "최민경+가족", "신혜옥+가족", "윤영경+가족", "정미선+가족", "오정옥+가족", "고은정+가족", "남소영샘", "간석4동주민센터", "남동구청", "해돋이", "임채범 남유", "정유하 4세", "김도윤 초6", "박서원 초4", "김라윤 초1", "손하윤 초6", "임세아 초4", "이윤아", "민지혜", "계진", "윤가현", "장선형", "홍나예", "윤정아", "정미진", "정용진", "정경민"];
const DEFAULT_PRAYERS=[["가족 모두의 건강", "가족 모두가 건강할 수 있도록 기원합니다. 세아 알러지 없는 체질로 바뀌도록 기원합니다.\n임종의 때에 통증 전혀 없이 잠들 듯 아주 편안히 갈 수 있는 대복운으로!\n가족을 포함한 일가친척, 소속 회원과 간부님, 주위 분들 모두 건강할 수 있게 기원합니다."], ["맑고 청정한 생명", "매일 스승께 보은만 할 수 있는 제자로 살아가며 매일 맑고 청정한 부처의 정신과 생명으로 살아갈 수 있게 기원합니다."], ["자산과 지혜", "알뜰히 생활하고 저축 잘할 수 있게 기원합니다.\n평생 광선유포에 많은 공양을 할 수 있는 자산이 생길 수 있도록, 자동 자산 아이디어가 생기고 불지혜가 생길 수 있도록 기원합니다."], ["가족의 자신감과 리더십", "온 가족이 각자 언제 어디서나 자신감 넘치는 리더십 있는 사람이 될 수 있게 기원합니다."], ["절복과 선구", "온 가족이 절복의 선구에 서서 청년부 1만 명 절복할 수 있도록 기원합니다.\n정기적으로 칸나 할 곳이 생길 수 있게 기원합니다."], ["온 우주의 수호", "온 가족의 행복을 온 우주의 제천이 지켜줄 수 있도록 기원합니다."], ["손소희의 재능", "손소희에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임묘광님의 재능", "임묘광님에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임세아의 재능", "임세아 해돋이에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["깊고 넓은 삶", "인간의 시각, 생각, 오감, 육체 모든 것을 뛰어넘는 크고 깊은 삶을 살아가게 기원합니다.\n인간 의식을 뛰어넘는 생각, 정신, 육체, 마음을 갖도록 기원합니다."], ["행복한 보금자리", "공기 좋고 따뜻한 에너지로 포근히 둘러싸인 아파트로 이사 갈 수 있도록 기원합니다.\n산책로가 많고 공기 좋고 인프라가 형성되어 있으며 교통 좋은 곳, 공기와 위치와 에너지가 좋은 아파트를 구입할 수 있는 복운을 기원합니다."], ["우리 가족 기원문 1", "가족 모두 건강하기 (정신과 신체 모두 건강)."], ["우리 가족 기원문 2", "월 수입 천만 원 이상 될 수 있는 복운으로."], ["우리 가족 기원문 3", "자신 스스로를 아끼고 사랑하기."], ["우리 가족 기원문 4", "가족끼리 서로를 존중하고 서로의 행복을 매일 수시로 기원해 주기."], ["우리 가족 기원문 5", "각자 목표를 이루어 사회에 무엇이라도 공헌하는 승리의 인생으로 나아가기!"], ["우리 가족 기원문 6", "스승 이케다 선생님께 감사한 마음을 갖고 스승을 매일 구도하며, 선생님이라면 지금 나에게 어떤 격려를 해주실까를 항상 생각하며 살아가기.\n보은하는 승리의 인생으로 살아가기."], ["우리 가족 기원문 7", "세아에게 온 우주가 제천이 되어 알러지와 아토피가 없어지고 정상 체질로 성장하며, 먹을 수 있는 항생제 약을 찾을 수 있도록 기원합니다."], ["우리 가족 기원문 8", "세아가 세계에 공헌하는 대인재이자 리더로 성장할 수 있게 기원합니다."], ["우리 가족 기원문 9", "세아 평생 주위에 좋은 분들이 넘쳐나고 세아를 제천선신이 항상 지켜주는 복운 넘치는 인생이 될 수 있도록 기원합니다.\n평생 좋은 친구들이 넘쳐나고 학창 시절 좋은 선생님들을 만나게 기원합니다."]];
const $=id=>document.getElementById(id);
const today=new Date();
const state=load();
let screenStack=["home"], manageType="names", editingIndex=-1;
let year=2026, month=today.getFullYear()>=2026?today.getMonth()+1:1;
function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||"null");
    if(saved && Array.isArray(saved.names) && Array.isArray(saved.prayers)) return saved;
  }catch(e){}
  return {names:DEFAULT_NAMES.slice(),prayers:DEFAULT_PRAYERS.map(p=>({title:p[0],body:p[1]})),nameChecks:{},prayerChecks:{}};
}
function persist(show=false){
  try{localStorage.setItem(KEY,JSON.stringify(state));if(show)toast("저장했어요 🌸");}
  catch(e){toast("저장 공간이 부족해요. 백업 파일을 먼저 저장해 주세요.");}
}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1900);}
function keyFor(y,m){return `${y}-${String(m).padStart(2,"0")}`;}
function daysIn(y,m){return new Date(y,m,0).getDate();}
function checkKey(kind,y,m,item,d){return `${keyFor(y,m)}|${item}|${d}`;}
function checked(kind,y,m,item,d){const obj=kind==="name"?state.nameChecks:state.prayerChecks;return !!obj[checkKey(kind,y,m,item,d)];}
function setChecked(kind,y,m,item,d,val){const obj=kind==="name"?state.nameChecks:state.prayerChecks;const k=checkKey(kind,y,m,item,d);if(val)obj[k]=true;else delete obj[k];persist();updateProgress(kind);}
function fillDates(prefix){
  const ys=$(prefix+"Year"),ms=$(prefix+"Month");
  ys.innerHTML="";for(let y=2026;y<=2100;y++){const o=document.createElement("option");o.value=y;o.textContent=y+"년";ys.append(o);}
  ms.innerHTML="";for(let m=1;m<=12;m++){const o=document.createElement("option");o.value=m;o.textContent=m+"월";ms.append(o);}
  ys.value=year;ms.value=month;
  ys.addEventListener("change",()=>{year=+ys.value;renderAll();});
  ms.addEventListener("change",()=>{month=+ms.value;renderAll();});
  $(prefix+"Today").addEventListener("click",()=>{year=Math.max(2026,today.getFullYear());month=today.getMonth()+1;ys.value=year;ms.value=month;renderAll();});
}
function renderRoster(){
  const table=$("rosterTable"),days=daysIn(year,month);
  let html="<thead><tr><th>이름 / 날짜</th>";
  for(let d=1;d<=days;d++)html+=`<th>${d}</th>`;
  html+="</tr></thead><tbody>";
  state.names.forEach((name,i)=>{
    html+=`<tr><td>${esc(name)}</td>`;
    for(let d=1;d<=days;d++){const c=checked("name",year,month,i,d);html+=`<td><input type="checkbox" aria-label="${esc(name)} ${d}일" data-kind="name" data-item="${i}" data-day="${d}" ${c?"checked":""}></td>`;}
    html+="</tr>";
  });
  html+="</tbody>";table.innerHTML=html;
  table.querySelectorAll("input").forEach(el=>el.addEventListener("change",()=>setChecked("name",year,month,+el.dataset.item,+el.dataset.day,el.checked)));
  updateProgress("name");
}
function renderPrayers(){
  const root=$("prayerList"),days=daysIn(year,month);root.innerHTML="";
  state.prayers.forEach((p,i)=>{
    const card=document.createElement("article");card.className="prayer-card";
    const top=document.createElement("div");top.className="prayer-top";
    const num=document.createElement("span");num.className="prayer-number";num.textContent=i+1;
    const content=document.createElement("div");content.style.flex="1";
    const h=document.createElement("h3");h.textContent=p.title;
    const body=document.createElement("div");body.className="prayer-body";body.textContent=p.body;
    content.append(h,body);top.append(num,content);card.append(top);
    const checks=document.createElement("div");checks.className="day-checks";
    for(let d=1;d<=days;d++){
      const label=document.createElement("label");label.className="day-chip";
      const input=document.createElement("input");input.type="checkbox";input.checked=checked("prayer",year,month,i,d);input.setAttribute("aria-label",`${p.title} ${d}일`);
      input.addEventListener("change",()=>setChecked("prayer",year,month,i,d,input.checked));
      const span=document.createElement("span");span.textContent=d+"일";
      label.append(input,span);checks.append(label);
    }
    card.append(checks);root.append(card);
  });
  updateProgress("prayer");
}
function updateProgress(kind){
  const days=daysIn(year,month),items=kind==="name"?state.names:state.prayers,obj=kind==="name"?state.nameChecks:state.prayerChecks;
  let count=0;for(let i=0;i<items.length;i++)for(let d=1;d<=days;d++)if(obj[checkKey(kind,year,month,i,d)])count++;
  const total=items.length*days,pct=total?Math.round(count/total*100):0;
  const prefix=kind==="name"?"roster":"prayer";
  $(prefix+"ProgressText").textContent=`이번 달 실천 ${count}회`;
  $(prefix+"ProgressPct").textContent=pct+"%";
  $(prefix+"Progress").style.width=pct+"%";
}
function renderAll(){ $("rosterYear").value=year;$("prayerYear").value=year;$("rosterMonth").value=month;$("prayerMonth").value=month;renderRoster();renderPrayers();}
function showScreen(id,push=true){
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  if(push && screenStack[screenStack.length-1]!==id)screenStack.push(id);
  window.scrollTo({top:0,behavior:"smooth"});
}
function goBack(){if(screenStack.length>1)screenStack.pop();showScreen(screenStack[screenStack.length-1]||"home",false);}
function openManager(type){
  manageType=type;editingIndex=-1;
  $("dialogTitle").textContent=type==="names"?"🌸 명단 추가 · 수정 · 삭제":"🧁 기원문 추가 · 수정 · 삭제";
  $("itemTitle").placeholder=type==="names"?"이름을 입력하세요":"기원문 제목을 입력하세요";
  $("itemBody").hidden=type==="names";$("itemBody").value="";$("itemTitle").value="";
  renderManageItems();$("manageDialog").showModal();
}
function renderManageItems(){
  const root=$("manageItems"),items=manageType==="names"?state.names:state.prayers;root.innerHTML="";
  items.forEach((item,i)=>{
    const row=document.createElement("div");row.className="manage-row";
    const label=document.createElement("span");label.className="item-label";label.textContent=manageType==="names"?item:item.title;
    const edit=document.createElement("button");edit.textContent="수정";edit.addEventListener("click",()=>{
      editingIndex=i;$("itemTitle").value=manageType==="names"?item:item.title;$("itemBody").value=manageType==="names"?"":item.body;$("manageForm").querySelector("button").textContent="수정 저장";
    });
    const del=document.createElement("button");del.textContent="삭제";del.className="delete";del.addEventListener("click",()=>{
      if(!confirm("삭제할까요? 관련 체크 기록도 함께 정리하려면 백업을 먼저 권장합니다."))return;
      items.splice(i,1);persist();renderManageItems();renderAll();toast("삭제했어요.");
    });
    row.append(label,edit,del);root.append(row);
  });
}
$("manageForm").addEventListener("submit",e=>{
  e.preventDefault();const title=$("itemTitle").value.trim(),body=$("itemBody").value.trim();
  if(!title){toast("내용을 입력해 주세요.");return;}
  const items=manageType==="names"?state.names:state.prayers;
  const value=manageType==="names"?title:{title,body};
  if(editingIndex>=0){items[editingIndex]=value;editingIndex=-1;}else items.push(value);
  $("itemTitle").value="";$("itemBody").value="";$("manageForm").querySelector("button").textContent="＋ 추가하기";
  persist();renderManageItems();renderAll();toast("반영했어요 🌷");
});
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function backup(){
  persist();const blob=new Blob([JSON.stringify({...state,backupDate:new Date().toISOString()},null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`가족기원문_백업_${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);toast("백업 파일을 만들었어요.");
}
function restore(file){
  const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!Array.isArray(data.names)||!Array.isArray(data.prayers))throw Error();if(!confirm("현재 기록을 백업 파일 내용으로 교체할까요?"))return;state.names=data.names;state.prayers=data.prayers;state.nameChecks=data.nameChecks||{};state.prayerChecks=data.prayerChecks||{};persist();renderAll();toast("백업을 복원했어요.");}catch(e){alert("올바른 가족기원문 백업 파일이 아닙니다.");}};reader.readAsText(file);
}
document.querySelectorAll("[data-screen]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.screen)));
document.querySelectorAll("[data-home]").forEach(b=>b.addEventListener("click",()=>{screenStack=["home"];showScreen("home",false);}));
document.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",goBack));
$("editNames").addEventListener("click",()=>openManager("names"));
$("editPrayers").addEventListener("click",()=>openManager("prayers"));
$("closeDialog").addEventListener("click",()=>$("manageDialog").close());
$("backupBtn").addEventListener("click",backup);
$("restoreBtn").addEventListener("click",()=>$("restoreFile").click());
$("restoreFile").addEventListener("change",e=>{if(e.target.files[0])restore(e.target.files[0]);e.target.value="";});
$("saveRoster").addEventListener("click",()=>persist(true));
$("savePrayer").addEventListener("click",()=>persist(true));
fillDates("roster");fillDates("prayer");renderAll();
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
})();
