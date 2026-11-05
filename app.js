const DEFAULT_NAMES = ["손소희", "임묘광", "임세아", "김온외할머니", "임태완", "이주란", "손하익", "안지민", "임현상", "임현수", "손채은", "손지호", "하니 명복", "친정 외가", "친정 친가", "시댁 외가", "시댁 친가", "김경순 권", "장혜진 지역", "이승아 방면", "조정자지역", "한정순총지역", "제물포권", "인천1방면", "신순경 지부", "김연례 지구", "최순옥총지구", "민한순총지구", "유신윤지구부", "주명분총반담", "이윤아총반담", "재능회원님", "송희순 박문", "황정숙 박문", "최병정제공자", "박문회원님", "동산지구", "욱일지구", "니치렌대성인님", "마키쿠치 선생님", "도다선생님", "이케다 선생님", "가네코사모님", "SGI 한국본부", "SGI 일본본부", "SGI 전세계", "청년1", "청년2", "청년3", "청년4", "청년5", "청년6", "청년7", "청년8", "청년9", "청년10", "아시아", "유럽", "아프리카", "북아메리카", "남아마레카", "중앙아메리카", "오세아니아", "남극 북극", "우주전체", "아시아드7단지", "아시아드6단지", "아시아드8단지", "아시아드5단지", "아.센트럴자이", "한내들퍼스티지", "아시아드1단지", "아시아드2단지", "패스트박스", "메리어트", "테슬라", "삼성", "SK하이닉스", "현대", "기아", "LG", "셀트리온", "네이버", "한화", "카카오", "KT", "대한항공", "CJ", "포스코", "롯데", "하나금융", "GS", "대기업", "중소기업", "소기업", "인천광역시", "서울특별시", "부산광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청도", "전라도", "경상도", "제주특별자치도", "평생자산", "사업아이디어", "주원빌라", "한울", "해찬솔", "다온", "서은주 담당", "남선미 부", "이보미 부", "방성임 부", "소린씨", "윤지애 부", "이미복 반담", "조민호씨", "김영희지구", "이은옥지구", "구정분", "구정미", "김영주", "유희정", "김유나+어머니", "로나 샘", "김윤정 수학", "임서윤 영어", "남득예 권부", "이재숙 부방", "김순미 부방", "최민경+가족", "신혜옥+가족", "윤영경+가족", "정미선+가족", "오정옥+가족", "고은정+가족", "남소영샘", "간석4동주민센터", "남동구청", "해돋이", "임채범 남유", "정유하 4세", "김도윤 초6", "박서원 초4", "김라윤 초1", "손하윤 초6", "임세아 초4", "영무궁화", "(재능)", "손소희", "이윤아", "민지혜", "(욱일)", "계진", "윤가현", "장선형", "홍나예", "(동산)", "윤정아", "정미진", "정용진", "정경민"];
const DEFAULT_PRAYERS = [["가족 모두의 건강과 평안", "가족 모두가 건강할 수 있도록 기원합니다. 세아 알러지 없는 체질로 바뀌도록 기원합니다.\n임종의 때에 통증 전혀 없이 잠들 듯 아주 편안히 갈 수 있는 대복운으로!\n가족을 포함한 일가친척, 소속 회원과 간부님, 주위 분들 모두 건강할 수 있게 기원합니다."], ["매일 스승께 보은하는 삶", "매일 스승께 보은만 할 수 있는 제자로 살아가며 매일 맑고 청정한 부처의 정신과 생명으로 살아갈 수 있게 기원합니다."], ["풍요로운 자산과 지혜", "알뜰히 생활하고 저축 잘할 수 있게 기원합니다.\n평생 광선유포에 많은 공양을 할 수 있는 자산이 생길 수 있도록, 자동 자산 아이디어와 불지혜가 생길 수 있도록 기원합니다."], ["가족 모두의 자신감과 리더십", "온 가족이 각자 언제 어디서나 자신감 넘치는 리더십 있는 사람이 될 수 있게 기원합니다."], ["절복과 선구의 길", "온 가족이 절복의 선구에 서서 청년부 1만 명 절복할 수 있도록 기원합니다.\n정기적으로 칸나 할 곳이 생길 수 있게 기원합니다."], ["온 우주가 지켜주는 행복", "온 가족의 행복을 온 우주의 제천이 지켜줄 수 있도록 기원합니다."], ["손소희의 재능과 사회 공헌", "손소희에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임묘광님의 재능과 사회 공헌", "임묘광님에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임세아의 재능과 사회 공헌", "임세아 해돋이에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["더 크고 깊은 삶", "인간의 시각, 생각, 오감, 육체 모든 것을 뛰어넘는 크고 깊은 삶을 살아가게 기원합니다.\n인간 의식을 뛰어넘는 생각, 정신, 육체, 마음을 갖도록 기원합니다."], ["좋은 환경의 보금자리", "공기 좋고 따뜻한 에너지로 포근히 둘러싸인 아파트로 이사 갈 수 있도록 기원합니다.\n산책로가 많고 공기 좋고 인프라가 형성되어 있으며 교통 좋은 곳, 공기와 위치와 에너지가 좋은 아파트를 구입할 수 있는 복운을 기원합니다."], ["우리 가족 기원문 1~5", "1) 가족 모두 건강하기 (정신과 신체 모두 건강)\n2) 월 수입 천만 원 이상 될 수 있는 복운으로\n3) 자신 스스로를 아끼고 사랑하기\n4) 가족끼리 서로를 존중하고 서로의 행복을 매일 수시로 기원해 주기\n5) 각자 목표를 이루어 사회에 무엇이라도 공헌하는 승리의 인생으로 나아가기!!!"], ["우리 가족 기원문 6", "스승 이케다 선생님께 감사한 마음을 갖고 스승을 매일 구도하며, 선생님이라면 지금 나에게 어떤 격려를 해주실까를 항상 생각하며 살아가기.\n보은하는 승리의 인생으로 살아가기."], ["우리 가족 기원문 7~9", "7) 세아, 온 우주가 제천이 되어 알러지와 아토피가 없어지고 정상 체질로 건강하게 지내며, 잘 맞는 항생제와 치료 방법을 찾을 수 있도록 기원합니다.\n8) 세아가 세계에 공헌하는 대인재이자 리더로 성장할 수 있게 기원합니다.\n9) 세아 평생 주위에 좋은 분들이 넘쳐나고 세아를 제천선신이 항상 지켜주는 복운 넘치는 인생이 될 수 있도록 기원합니다. 평생 좋은 친구들이 넘쳐나고 학창 시절 좋은 선생님들을 만나게 기원합니다."]];
const STORAGE_KEY = "daily-prayer-journal-v1";
const today = new Date();
const currentYear = Math.max(2026, today.getFullYear());
let data = loadData();
let activeScreen = "home";

function loadData(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved && Array.isArray(saved.names) && Array.isArray(saved.prayers)) return saved;
  }catch(e){ console.warn("저장 데이터를 읽지 못했습니다.",e); }
  return {names:[...DEFAULT_NAMES], prayers:DEFAULT_PRAYERS.map((p,i)=>({id:"p"+i,title:p[0],text:p[1]})), rosterChecks:{}, prayerChecks:{}};
}
function saveData(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateCounts();
}
function yearOptions(select){
  select.innerHTML="";
  for(let y=currentYear;y>=2026;y--){const o=document.createElement("option");o.value=y;o.textContent=y+"년";select.append(o);}
}
function monthOptions(select){
  select.innerHTML="";
  for(let m=1;m<=12;m++){const o=document.createElement("option");o.value=m;o.textContent=m+"월";select.append(o);}
}
function initSelectors(){
  ["rosterYear","prayerYear"].forEach(id=>{yearOptions(document.getElementById(id));document.getElementById(id).value=currentYear;});
  ["rosterMonth","prayerMonth"].forEach(id=>{monthOptions(document.getElementById(id));document.getElementById(id).value=today.getMonth()+1;});
}
function daysInMonth(y,m){return new Date(Number(y),Number(m),0).getDate();}
function key(y,m,d,id){return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}-${id}`;}
function showScreen(name){
  activeScreen=name;
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(name+"Screen").classList.add("active");
  if(name==="roster") renderRoster();
  if(name==="prayers") renderPrayers();
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderRoster(){
  const y=+rosterYear.value,m=+rosterMonth.value,days=daysInMonth(y,m);
  const table=document.getElementById("rosterTable");
  table.innerHTML="";
  const thead=document.createElement("thead"),hr=document.createElement("tr");
  const first=document.createElement("th");first.textContent="기원 명단";hr.append(first);
  for(let d=1;d<=days;d++){const th=document.createElement("th");th.className="day-head";th.textContent=d;hr.append(th);}
  thead.append(hr);table.append(thead);
  const tbody=document.createElement("tbody");
  data.names.forEach((name,i)=>{
    const tr=document.createElement("tr"),th=document.createElement("td");th.textContent=name;tr.append(th);
    for(let d=1;d<=days;d++){
      const td=document.createElement("td"),cb=document.createElement("input");cb.type="checkbox";cb.setAttribute("aria-label",`${name} ${y}년 ${m}월 ${d}일`);
      const k=key(y,m,d,i);cb.checked=!!data.rosterChecks[k];
      cb.addEventListener("change",()=>{if(cb.checked)data.rosterChecks[k]=true;else delete data.rosterChecks[k];saveData();});
      td.append(cb);tr.append(td);
    }
    tbody.append(tr);
  });
  table.append(tbody);updateCounts();
}
function renderPrayers(){
  const y=+prayerYear.value,m=+prayerMonth.value,days=daysInMonth(y,m),list=document.getElementById("prayerList");
  list.innerHTML="";
  data.prayers.forEach((p,i)=>{
    const card=document.createElement("article");card.className="prayer-card";
    const top=document.createElement("div");top.className="prayer-card-top";
    const number=document.createElement("span");number.className="prayer-number";number.textContent="✿";
    const title=document.createElement("h3");title.textContent=p.title;
    top.append(number,title);card.append(top);
    const text=document.createElement("p");text.textContent=p.text;card.append(text);
    const line=document.createElement("div");line.className="prayer-checkline";
    const label=document.createElement("label"),cb=document.createElement("input");cb.type="checkbox";cb.checked=!!data.prayerChecks[key(y,m,today.getDate(),p.id)];
    // 날짜별 체크 표시는 아래 일자 그리드에서 관리합니다.
    cb.checked=false; label.append(cb,document.createTextNode("오늘 기원 완료"));
    const date=document.createElement("span");date.textContent=`${y}년 ${m}월`;
    line.append(label,date);card.append(line);
    cb.checked=!!data.prayerChecks[key(y,m,today.getDate(),p.id)];
    cb.addEventListener("change",()=>{const k=key(y,m,today.getDate(),p.id);if(cb.checked)data.prayerChecks[k]=true;else delete data.prayerChecks[k];saveData();});
    const days=document.createElement("div");days.className="prayer-days";
    const caption=document.createElement("div");caption.className="prayer-days-caption";caption.textContent="날짜별 기원 체크";days.append(caption);
    const grid=document.createElement("div");grid.className="day-check-grid";
    for(let d=1;d<=daysInMonth(y,m);d++){
      const lab=document.createElement("label");lab.className="day-check";
      const box=document.createElement("input");box.type="checkbox";box.checked=!!data.prayerChecks[key(y,m,d,p.id)];
      box.addEventListener("change",()=>{const k=key(y,m,d,p.id);if(box.checked)data.prayerChecks[k]=true;else delete data.prayerChecks[k];saveData();});
      const span=document.createElement("span");span.textContent=d;
      lab.append(box,span);grid.append(lab);
    }
    days.append(grid);card.append(days);list.append(card);
  });
  updateCounts();
}
function updateCounts(){
  const rc=Object.keys(data.rosterChecks).length;
  const el=document.getElementById("rosterCount");if(el)el.textContent=rc+"개 체크";
}
function openNameManager(){
  const dlg=document.getElementById("nameDialog");renderNameManager();dlg.showModal();
}
function renderNameManager(){
  const list=document.getElementById("nameManageList");list.innerHTML="";
  data.names.forEach((name,i)=>{
    const row=document.createElement("div");row.className="manage-item";
    const span=document.createElement("span");span.textContent=name;
    const edit=document.createElement("button");edit.textContent="수정";edit.onclick=()=>{const v=prompt("이름 수정",name);if(v&&v.trim()){data.names[i]=v.trim();saveData();renderNameManager();renderRoster();}};
    const del=document.createElement("button");del.textContent="삭제";del.className="delete";del.onclick=()=>{if(confirm(`'${name}'을(를) 명단에서 삭제할까요?`)){data.names.splice(i,1);saveData();renderNameManager();renderRoster();}};
    row.append(span,edit,del);list.append(row);
  });
}
function openPrayerManager(){renderPrayerManager();document.getElementById("prayerDialog").showModal();}
function renderPrayerManager(){
  const list=document.getElementById("prayerManageList");list.innerHTML="";
  data.prayers.forEach((p,i)=>{
    const row=document.createElement("div");row.className="manage-item";
    const span=document.createElement("span");span.textContent=p.title;
    const edit=document.createElement("button");edit.textContent="수정";edit.onclick=()=>{
      const title=prompt("기원문 제목 수정",p.title);if(title===null)return;
      const text=prompt("기원문 내용 수정",p.text);if(text===null)return;
      if(title.trim()&&text.trim()){p.title=title.trim();p.text=text.trim();saveData();renderPrayerManager();renderPrayers();}
    };
    const del=document.createElement("button");del.textContent="삭제";del.className="delete";del.onclick=()=>{if(confirm(`'${p.title}' 기원문을 삭제할까요?`)){data.prayers.splice(i,1);saveData();renderPrayerManager();renderPrayers();}};
    row.append(span,edit,del);list.append(row);
  });
}
function exportBackup(){
  const blob=new Blob([JSON.stringify({app:"prayer-journal",version:1,exportedAt:new Date().toISOString(),data},null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`기원문백업-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);
}
function importBackup(file){
  const reader=new FileReader();reader.onload=()=>{
    try{const obj=JSON.parse(reader.result),incoming=obj.data||obj;
      if(!Array.isArray(incoming.names)||!Array.isArray(incoming.prayers))throw new Error("백업 형식이 올바르지 않습니다.");
      if(confirm("현재 기록을 백업 파일 내용으로 바꿀까요? 기존 데이터는 덮어씁니다.")){
        data={names:incoming.names,prayers:incoming.prayers,rosterChecks:incoming.rosterChecks||{},prayerChecks:incoming.prayerChecks||{}};
        saveData();renderRoster();renderPrayers();alert("백업을 복원했습니다.");
      }
    }catch(e){alert("백업 파일을 읽을 수 없습니다: "+e.message);}
  };reader.readAsText(file);
}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.go)));
document.querySelectorAll("[data-home]").forEach(b=>b.addEventListener("click",()=>showScreen("home")));
document.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",()=>showScreen("home")));
document.getElementById("homeButton").addEventListener("click",()=>showScreen("home"));
document.getElementById("backupButton").addEventListener("click",exportBackup);
document.getElementById("restoreButton").addEventListener("click",()=>document.getElementById("importFile").click());
document.getElementById("manageNamesButton").addEventListener("click",openNameManager);
document.getElementById("managePrayersButton").addEventListener("click",openPrayerManager);
document.getElementById("addNameButton").addEventListener("click",e=>{
  e.preventDefault();const input=document.getElementById("newNameInput"),v=input.value.trim();
  if(!v){alert("이름을 입력해 주세요.");return;}data.names.push(v);input.value="";saveData();renderNameManager();renderRoster();
});
document.getElementById("addPrayerButton").addEventListener("click",e=>{
  e.preventDefault();const title=document.getElementById("prayerTitleInput").value.trim(),text=document.getElementById("prayerTextInput").value.trim();
  if(!title||!text){alert("제목과 내용을 모두 입력해 주세요.");return;}
  data.prayers.push({id:"p"+Date.now(),title,text});document.getElementById("prayerTitleInput").value="";document.getElementById("prayerTextInput").value="";
  saveData();renderPrayerManager();renderPrayers();
});
["rosterYear","rosterMonth"].forEach(id=>document.getElementById(id).addEventListener("change",renderRoster));
["prayerYear","prayerMonth"].forEach(id=>document.getElementById(id).addEventListener("change",renderPrayers));
document.getElementById("rosterToday").addEventListener("click",()=>{rosterYear.value=currentYear;rosterMonth.value=today.getMonth()+1;renderRoster();});
document.getElementById("prayerToday").addEventListener("click",()=>{prayerYear.value=currentYear;prayerMonth.value=today.getMonth()+1;renderPrayers();});
document.getElementById("saveRosterButton").addEventListener("click",()=>{saveData();alert("명단 기원 기록을 저장했어요. ♡");});
document.getElementById("savePrayerButton").addEventListener("click",()=>{saveData();alert("가족기원문 기록을 저장했어요. ♡");});
document.getElementById("importFile").addEventListener("change",e=>{if(e.target.files[0])importBackup(e.target.files[0]);e.target.value="";});
// 백업 복원은 백업 버튼을 길게 누르는 대신 메인 하단의 키보드 단축키 Ctrl+Shift+I도 지원합니다.
document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="i")document.getElementById("importFile").click();});
initSelectors();renderRoster();renderPrayers();
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(console.error));}
