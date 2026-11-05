const DEFAULT_NAMES = ["손소희", "임묘광", "임세아", "김온외할머니", "임태완", "이주란", "손하익", "안지민", "임현상", "임현수", "손채은", "손지호", "하니 명복", "친정 외가", "친정 친가", "시댁 외가", "시댁 친가", "김경순 권", "장혜진 지역", "이승아 방면", "조정자지역", "한정순총지역", "제물포권", "인천1방면", "신순경 지부", "김연례 지구", "최순옥총지구", "민한순총지구", "유신윤지구부", "주명분총반담", "이윤아총반담", "재능회원님", "송희순 박문", "황정숙 박문", "최병정제공자", "박문회원님", "동산지구", "욱일지구", "니치렌대성인님", "마키쿠치 선생님", "도다선생님", "이케다 선생님", "가네코사모님", "SGI 한국본부", "SGI 일본본부", "SGI 전세계", "청년1", "청년2", "청년3", "청년4", "청년5", "청년6", "청년7", "청년8", "청년9", "청년10", "아시아", "유럽", "아프리카", "북아메리카", "남아마레카", "중앙아메리카", "오세아니아", "남극 북극", "우주전체", "아시아드7단지", "아시아드6단지", "아시아드8단지", "아시아드5단지", "아.센트럴자이", "한내들퍼스티지", "아시아드1단지", "아시아드2단지", "패스트박스", "메리어트", "테슬라", "삼성", "SK하이닉스", "현대", "기아", "LG", "셀트리온", "네이버", "한화", "카카오", "KT", "대한항공", "CJ", "포스코", "롯데", "하나금융", "GS", "대기업", "중소기업", "소기업", "인천광역시", "서울특별시", "부산광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청도", "전라도", "경상도", "제주특별자치도", "평생자산", "사업아이디어", "주원빌라", "한울", "해찬솔", "다온", "서은주 담당", "남선미 부", "이보미 부", "방성임 부", "소린씨", "윤지애 부", "이미복 반담", "조민호씨", "김영희지구", "이은옥지구", "구정분", "구정미", "김영주", "유희정", "김유나+어머니", "로나 샘", "김윤정 수학", "임서윤 영어", "남득예 권부", "이재숙 부방", "김순미 부방", "최민경+가족", "신혜옥+가족", "윤영경+가족", "정미선+가족", "오정옥+가족", "고은정+가족", "남소영샘", "간석4동주민센터", "남동구청", "해돋이", "임채범 남유", "정유하 4세", "김도윤 초6", "박서원 초4", "김라윤 초1", "손하윤 초6", "임세아 초4", "영무궁화", "(재능)", "손소희", "이윤아", "민지혜", "(욱일)", "계진", "윤가현", "장선형", "홍나예", "(동산)", "윤정아", "정미진", "정용진", "정경민"];
const DEFAULT_PRAYERS = [["가족 모두의 건강과 평안", "가족 모두가 건강할 수 있도록 기원합니다. 세아 알러지 없는 체질로 바뀌도록 기원합니다.\n임종의 때에 통증 전혀 없이 잠들 듯 아주 편안히 갈 수 있는 대복운으로!\n가족을 포함한 일가친척, 소속 회원과 간부님, 주위 분들 모두 건강할 수 있게 기원합니다."], ["매일 스승께 보은하는 삶", "매일 스승께 보은만 할 수 있는 제자로 살아가며 매일 맑고 청정한 부처의 정신과 생명으로 살아갈 수 있게 기원합니다."], ["풍요로운 자산과 지혜", "알뜰히 생활하고 저축 잘할 수 있게 기원합니다.\n평생 광선유포에 많은 공양을 할 수 있는 자산이 생길 수 있도록, 자동 자산 아이디어와 불지혜가 생길 수 있도록 기원합니다."], ["가족 모두의 자신감과 리더십", "온 가족이 각자 언제 어디서나 자신감 넘치는 리더십 있는 사람이 될 수 있게 기원합니다."], ["절복과 선구의 길", "온 가족이 절복의 선구에 서서 청년부 1만 명 절복할 수 있도록 기원합니다.\n정기적으로 칸나 할 곳이 생길 수 있게 기원합니다."], ["온 우주가 지켜주는 행복", "온 가족의 행복을 온 우주의 제천이 지켜줄 수 있도록 기원합니다."], ["손소희의 재능과 사회 공헌", "손소희에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임묘광님의 재능과 사회 공헌", "임묘광님에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["임세아의 재능과 사회 공헌", "임세아 해돋이에게 딱 맞는 재능을 찾아내어 사회에 도움이 될 수 있도록 기원합니다."], ["더 크고 깊은 삶", "인간의 시각, 생각, 오감, 육체 모든 것을 뛰어넘는 크고 깊은 삶을 살아가게 기원합니다.\n인간 의식을 뛰어넘는 생각, 정신, 육체, 마음을 갖도록 기원합니다."], ["좋은 환경의 보금자리", "공기 좋고 따뜻한 에너지로 포근히 둘러싸인 아파트로 이사 갈 수 있도록 기원합니다.\n산책로가 많고 공기 좋고 인프라가 형성되어 있으며 교통 좋은 곳, 공기와 위치와 에너지가 좋은 아파트를 구입할 수 있는 복운을 기원합니다."], ["우리 가족 기원문 1~5", "1) 가족 모두 건강하기 (정신과 신체 모두 건강)\n2) 월 수입 천만 원 이상 될 수 있는 복운으로\n3) 자신 스스로를 아끼고 사랑하기\n4) 가족끼리 서로를 존중하고 서로의 행복을 매일 수시로 기원해 주기\n5) 각자 목표를 이루어 사회에 무엇이라도 공헌하는 승리의 인생으로 나아가기!!!"], ["우리 가족 기원문 6", "스승 이케다 선생님께 감사한 마음을 갖고 스승을 매일 구도하며, 선생님이라면 지금 나에게 어떤 격려를 해주실까를 항상 생각하며 살아가기.\n보은하는 승리의 인생으로 살아가기."], ["우리 가족 기원문 7~9", "7) 세아, 온 우주가 제천이 되어 알러지와 아토피가 없어지고 정상 체질로 건강하게 지내며, 잘 맞는 항생제와 치료 방법을 찾을 수 있도록 기원합니다.\n8) 세아가 세계에 공헌하는 대인재이자 리더로 성장할 수 있게 기원합니다.\n9) 세아 평생 주위에 좋은 분들이 넘쳐나고 세아를 제천선신이 항상 지켜주는 복운 넘치는 인생이 될 수 있도록 기원합니다. 평생 좋은 친구들이 넘쳐나고 학창 시절 좋은 선생님들을 만나게 기원합니다."]];

const STORAGE_KEY = "daily-prayer-journal-v1";
const today = new Date();
const currentYear = Math.max(2026, today.getFullYear());
const currentMonth = today.getMonth() + 1;
let data = loadData();
let activeScreen = "home";

function monthKey(y, m) {
  return `${y}-${String(m).padStart(2, "0")}`;
}

function defaultPrayerList() {
  return DEFAULT_PRAYERS.map((p, i) => ({
    id: "p" + i,
    title: p[0],
    text: p[1]
  }));
}

function normalizePrayers(prayers) {
  if (!Array.isArray(prayers)) return [];
  return prayers.map((p, i) => {
    if (Array.isArray(p)) {
      return { id: "p" + i, title: p[0] || "", text: p[1] || "" };
    }
    return {
      id: p.id || "p" + i,
      title: p.title || "",
      text: p.text || ""
    };
  });
}

function loadData() {
  const thisMonth = monthKey(currentYear, currentMonth);

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saved) {
      const monthlyNames = saved.monthlyNames && typeof saved.monthlyNames === "object"
        ? { ...saved.monthlyNames } : {};
      const monthlyPrayers = saved.monthlyPrayers && typeof saved.monthlyPrayers === "object"
        ? { ...saved.monthlyPrayers } : {};

      // 이전 버전의 월별 저장 형식(monthly)을 새 형식으로 옮깁니다.
      if (saved.monthly && typeof saved.monthly === "object") {
        for (const [k, value] of Object.entries(saved.monthly)) {
          if (!monthlyNames[k] && Array.isArray(value.names)) {
            monthlyNames[k] = [...value.names];
          }
          if (!monthlyPrayers[k] && Array.isArray(value.prayers)) {
            monthlyPrayers[k] = normalizePrayers(value.prayers);
          }
        }
      }

      // 예전 전체 저장 방식의 명단/기원문은 현재 달에만 보존합니다.
      if (!Object.prototype.hasOwnProperty.call(monthlyNames, thisMonth) &&
          Array.isArray(saved.names)) {
        monthlyNames[thisMonth] = [...saved.names];
      }
      if (!Object.prototype.hasOwnProperty.call(monthlyPrayers, thisMonth) &&
          Array.isArray(saved.prayers)) {
        monthlyPrayers[thisMonth] = normalizePrayers(saved.prayers);
      }

      // 새 설치에서만 현재 달에 기본 내용을 보여줍니다.
      if (!Object.keys(monthlyNames).length && !Array.isArray(saved.names)) {
        monthlyNames[thisMonth] = [...DEFAULT_NAMES];
      }
      if (!Object.keys(monthlyPrayers).length && !Array.isArray(saved.prayers)) {
        monthlyPrayers[thisMonth] = defaultPrayerList();
      }

      return {
        monthlyNames,
        monthlyPrayers,
        rosterChecks: saved.rosterChecks || {},
        prayerChecks: saved.prayerChecks || {}
      };
    }
  } catch (e) {
    console.warn("저장 데이터를 읽지 못했습니다.", e);
  }

  return {
    monthlyNames: { [thisMonth]: [...DEFAULT_NAMES] },
    monthlyPrayers: { [thisMonth]: defaultPrayerList() },
    rosterChecks: {},
    prayerChecks: {}
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateCounts();
}

function getMonthNames(y, m) {
  const k = monthKey(y, m);
  if (!Array.isArray(data.monthlyNames[k])) data.monthlyNames[k] = [];
  return data.monthlyNames[k];
}

function getMonthPrayers(y, m) {
  const k = monthKey(y, m);
  if (!Array.isArray(data.monthlyPrayers[k])) data.monthlyPrayers[k] = [];
  return data.monthlyPrayers[k];
}

function selectedMonth(type) {
  const prefix = type === "roster" ? "roster" : "prayer";
  return {
    y: Number(document.getElementById(prefix + "Year").value),
    m: Number(document.getElementById(prefix + "Month").value)
  };
}

function yearOptions(select) {
  select.innerHTML = "";
  for (let y = 2026; y <= 2100; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y + "년";
    select.append(option);
  }
}

function monthOptions(select) {
  select.innerHTML = "";
  for (let m = 1; m <= 12; m++) {
    const option = document.createElement("option");
    option.value = m;
    option.textContent = m + "월";
    select.append(option);
  }
}

function initSelectors() {
  ["rosterYear", "prayerYear"].forEach(id => {
    const select = document.getElementById(id);
    yearOptions(select);
    select.value = currentYear;
  });
  ["rosterMonth", "prayerMonth"].forEach(id => {
    const select = document.getElementById(id);
    monthOptions(select);
    select.value = currentMonth;
  });
}

function daysInMonth(y, m) {
  return new Date(Number(y), Number(m), 0).getDate();
}

function key(y, m, d, id) {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}-${id}`;
}

function showScreen(name) {
  activeScreen = name;
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(name + "Screen").classList.add("active");
  if (name === "roster") renderRoster();
  if (name === "prayers") renderPrayers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderRoster() {
  const y = Number(rosterYear.value);
  const m = Number(rosterMonth.value);
  const names = getMonthNames(y, m);
  const table = document.getElementById("rosterTable");
  table.innerHTML = "";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const first = document.createElement("th");
  first.textContent = "기원 명단";
  headerRow.append(first);

  for (let d = 1; d <= daysInMonth(y, m); d++) {
    const th = document.createElement("th");
    th.className = "day-head";
    th.textContent = d;
    headerRow.append(th);
  }
  thead.append(headerRow);
  table.append(thead);

  const tbody = document.createElement("tbody");
  names.forEach((name, i) => {
    const tr = document.createElement("tr");
    const th = document.createElement("td");
    th.textContent = name;
    tr.append(th);

    for (let d = 1; d <= daysInMonth(y, m); d++) {
      const td = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("aria-label", `${name} ${y}년 ${m}월 ${d}일`);
      const checkKey = key(y, m, d, i);
      checkbox.checked = !!data.rosterChecks[checkKey];
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) data.rosterChecks[checkKey] = true;
        else delete data.rosterChecks[checkKey];
        saveData();
      });
      td.append(checkbox);
      tr.append(td);
    }
    tbody.append(tr);
  });

  table.append(tbody);
  updateCounts();
}

function renderPrayers() {
  const y = Number(prayerYear.value);
  const m = Number(prayerMonth.value);
  const prayers = getMonthPrayers(y, m);
  const list = document.getElementById("prayerList");
  list.innerHTML = "";

  prayers.forEach(prayer => {
    const card = document.createElement("article");
    card.className = "prayer-card";

    const top = document.createElement("div");
    top.className = "prayer-card-top";
    const number = document.createElement("span");
    number.className = "prayer-number";
    number.textContent = "✿";
    const title = document.createElement("h3");
    title.textContent = prayer.title;
    top.append(number, title);
    card.append(top);

    const content = document.createElement("p");
    content.textContent = prayer.text;
    card.append(content);

    const line = document.createElement("div");
    line.className = "prayer-checkline";
    const label = document.createElement("label");
    const todayCheckbox = document.createElement("input");
    todayCheckbox.type = "checkbox";
    const todayKey = key(y, m, today.getDate(), prayer.id);
    todayCheckbox.checked = !!data.prayerChecks[todayKey];
    label.append(todayCheckbox, document.createTextNode("오늘 기원 완료"));

    const date = document.createElement("span");
    date.textContent = `${y}년 ${m}월`;
    line.append(label, date);
    card.append(line);

    todayCheckbox.addEventListener("change", () => {
      if (todayCheckbox.checked) data.prayerChecks[todayKey] = true;
      else delete data.prayerChecks[todayKey];
      saveData();
    });

    const days = document.createElement("div");
    days.className = "prayer-days";
    const caption = document.createElement("div");
    caption.className = "prayer-days-caption";
    caption.textContent = "날짜별 기원 체크";
    days.append(caption);

    const grid = document.createElement("div");
    grid.className = "day-check-grid";
    for (let d = 1; d <= daysInMonth(y, m); d++) {
      const dayLabel = document.createElement("label");
      dayLabel.className = "day-check";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const checkKey = key(y, m, d, prayer.id);
      checkbox.checked = !!data.prayerChecks[checkKey];
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) data.prayerChecks[checkKey] = true;
        else delete data.prayerChecks[checkKey];
        saveData();
      });
      const span = document.createElement("span");
      span.textContent = d;
      dayLabel.append(checkbox, span);
      grid.append(dayLabel);
    }
    days.append(grid);
    card.append(days);
    list.append(card);
  });

  updateCounts();
}

function updateCounts() {
  const yearSelect = document.getElementById("rosterYear");
  const monthSelect = document.getElementById("rosterMonth");
  if (!yearSelect || !monthSelect) return;

  const prefix = `${yearSelect.value}-${String(monthSelect.value).padStart(2, "0")}-`;
  const count = Object.keys(data.rosterChecks).filter(k => k.startsWith(prefix)).length;
  const el = document.getElementById("rosterCount");
  if (el) el.textContent = count + "개 체크";
}

function copyPreviousMonth(type) {
  const isRoster = type === "roster";
  const { y, m } = selectedMonth(type);
  const previousDate = new Date(y, m - 2, 1);
  const py = previousDate.getFullYear();
  const pm = previousDate.getMonth() + 1;
  if (py < 2026) {
    alert("2026년 1월 이전 달은 불러올 수 없습니다.");
    return;
  }

  const previousKey = monthKey(py, pm);
  const currentKey = monthKey(y, m);
  const previousItems = isRoster
    ? (data.monthlyNames[previousKey] || [])
    : (data.monthlyPrayers[previousKey] || []);

  if (!previousItems.length) {
    alert(`${py}년 ${pm}월에 저장된 ${isRoster ? "명단" : "가족기원문"}이 없습니다.`);
    return;
  }

  const itemName = isRoster ? "명단" : "가족기원문";
  if (!confirm(`${py}년 ${pm}월 ${itemName} ${previousItems.length}개를 ${y}년 ${m}월로 불러올까요?\n현재 달의 ${itemName}은 전달 내용으로 교체됩니다.`)) {
    return;
  }

  if (isRoster) {
    data.monthlyNames[currentKey] = [...previousItems];
  } else {
    data.monthlyPrayers[currentKey] = previousItems.map(p => ({ ...p }));
  }

  saveData();
  if (isRoster) {
    renderRoster();
    if (document.getElementById("nameDialog").open) renderNameManager();
  } else {
    renderPrayers();
    if (document.getElementById("prayerDialog").open) renderPrayerManager();
  }
  alert("전달 내용을 불러왔습니다. 원본 달의 내용은 변경되지 않았어요. ♡");
}

function openNameManager() {
  renderNameManager();
  document.getElementById("nameDialog").showModal();
}

function renderNameManager() {
  const { y, m } = selectedMonth("roster");
  const names = getMonthNames(y, m);
  const list = document.getElementById("nameManageList");
  list.innerHTML = "";

  names.forEach((name, i) => {
    const row = document.createElement("div");
    row.className = "manage-item";
    const span = document.createElement("span");
    span.textContent = name;

    const edit = document.createElement("button");
    edit.textContent = "수정";
    edit.onclick = () => {
      const value = prompt("이름 수정", name);
      if (value && value.trim()) {
        names[i] = value.trim();
        saveData();
        renderNameManager();
        renderRoster();
      }
    };

    const del = document.createElement("button");
    del.textContent = "삭제";
    del.className = "delete";
    del.onclick = () => {
      if (confirm(`'${name}'을(를) ${y}년 ${m}월 명단에서 삭제할까요?`)) {
        names.splice(i, 1);
        saveData();
        renderNameManager();
        renderRoster();
      }
    };

    row.append(span, edit, del);
    list.append(row);
  });
}

function openPrayerManager() {
  renderPrayerManager();
  document.getElementById("prayerDialog").showModal();
}

function renderPrayerManager() {
  const { y, m } = selectedMonth("prayers");
  const prayers = getMonthPrayers(y, m);
  const list = document.getElementById("prayerManageList");
  list.innerHTML = "";

  prayers.forEach((prayer, i) => {
    const row = document.createElement("div");
    row.className = "manage-item";
    const span = document.createElement("span");
    span.textContent = prayer.title;

    const edit = document.createElement("button");
    edit.textContent = "수정";
    edit.onclick = () => {
      const title = prompt("기원문 제목 수정", prayer.title);
      if (title === null) return;
      const text = prompt("기원문 내용 수정", prayer.text);
      if (text === null) return;
      if (title.trim() && text.trim()) {
        prayer.title = title.trim();
        prayer.text = text.trim();
        saveData();
        renderPrayerManager();
        renderPrayers();
      }
    };

    const del = document.createElement("button");
    del.textContent = "삭제";
    del.className = "delete";
    del.onclick = () => {
      if (confirm(`'${prayer.title}' 기원문을 ${y}년 ${m}월에서 삭제할까요?`)) {
        prayers.splice(i, 1);
        saveData();
        renderPrayerManager();
        renderPrayers();
      }
    };

    row.append(span, edit, del);
    list.append(row);
  });
}

function exportBackup() {
  const blob = new Blob([JSON.stringify({
    app: "prayer-journal",
    version: 2,
    exportedAt: new Date().toISOString(),
    data
  }, null, 2)], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `기원문백업-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(reader.result);
      const incoming = obj.data || obj;
      if (!confirm("현재 기록을 백업 파일 내용으로 바꿀까요? 기존 데이터는 덮어씁니다.")) return;

      const monthlyNames = incoming.monthlyNames && typeof incoming.monthlyNames === "object"
        ? { ...incoming.monthlyNames } : {};
      const monthlyPrayers = incoming.monthlyPrayers && typeof incoming.monthlyPrayers === "object"
        ? { ...incoming.monthlyPrayers } : {};

      if (incoming.monthly && typeof incoming.monthly === "object") {
        for (const [k, value] of Object.entries(incoming.monthly)) {
          if (!monthlyNames[k] && Array.isArray(value.names)) monthlyNames[k] = [...value.names];
          if (!monthlyPrayers[k] && Array.isArray(value.prayers)) {
            monthlyPrayers[k] = normalizePrayers(value.prayers);
          }
        }
      }

      // 구버전 백업의 단일 명단/기원문은 현재 달로 가져옵니다.
      const thisMonth = monthKey(currentYear, currentMonth);
      if (!Object.keys(monthlyNames).length && Array.isArray(incoming.names)) {
        monthlyNames[thisMonth] = [...incoming.names];
      }
      if (!Object.keys(monthlyPrayers).length && Array.isArray(incoming.prayers)) {
        monthlyPrayers[thisMonth] = normalizePrayers(incoming.prayers);
      }

      data = {
        monthlyNames,
        monthlyPrayers,
        rosterChecks: incoming.rosterChecks || {},
        prayerChecks: incoming.prayerChecks || {}
      };
      saveData();
      renderRoster();
      renderPrayers();
      alert("백업을 복원했습니다.");
    } catch (e) {
      alert("백업 파일을 읽을 수 없습니다: " + e.message);
    }
  };
  reader.readAsText(file);
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.go));
});
document.querySelectorAll("[data-home]").forEach(button => {
  button.addEventListener("click", () => showScreen("home"));
});
document.querySelectorAll("[data-back]").forEach(button => {
  button.addEventListener("click", () => showScreen("home"));
});

document.getElementById("homeButton").addEventListener("click", () => showScreen("home"));
document.getElementById("backupButton").addEventListener("click", exportBackup);
document.getElementById("restoreButton").addEventListener("click", () => {
  document.getElementById("importFile").click();
});
document.getElementById("manageNamesButton").addEventListener("click", openNameManager);
document.getElementById("managePrayersButton").addEventListener("click", openPrayerManager);

document.getElementById("addNameButton").addEventListener("click", event => {
  event.preventDefault();
  const input = document.getElementById("newNameInput");
  const value = input.value.trim();
  if (!value) {
    alert("이름을 입력해 주세요.");
    return;
  }
  const { y, m } = selectedMonth("roster");
  getMonthNames(y, m).push(value);
  input.value = "";
  saveData();
  renderNameManager();
  renderRoster();
});

document.getElementById("addPrayerButton").addEventListener("click", event => {
  event.preventDefault();
  const titleInput = document.getElementById("prayerTitleInput");
  const textInput = document.getElementById("prayerTextInput");
  const title = titleInput.value.trim();
  const text = textInput.value.trim();
  if (!title || !text) {
    alert("제목과 내용을 모두 입력해 주세요.");
    return;
  }
  const { y, m } = selectedMonth("prayers");
  getMonthPrayers(y, m).push({ id: "p" + Date.now(), title, text });
  titleInput.value = "";
  textInput.value = "";
  saveData();
  renderPrayerManager();
  renderPrayers();
});

["rosterYear", "rosterMonth"].forEach(id => {
  document.getElementById(id).addEventListener("change", renderRoster);
});
["prayerYear", "prayerMonth"].forEach(id => {
  document.getElementById(id).addEventListener("change", renderPrayers);
});

document.getElementById("rosterToday").addEventListener("click", () => {
  rosterYear.value = currentYear;
  rosterMonth.value = currentMonth;
  renderRoster();
});
document.getElementById("prayerToday").addEventListener("click", () => {
  prayerYear.value = currentYear;
  prayerMonth.value = currentMonth;
  renderPrayers();
});

document.getElementById("copyPreviousRosterButton").addEventListener("click", () => {
  copyPreviousMonth("roster");
});
document.getElementById("copyPreviousPrayerButton").addEventListener("click", () => {
  copyPreviousMonth("prayers");
});

document.getElementById("saveRosterButton").addEventListener("click", () => {
  saveData();
  alert("명단 기원 기록을 저장했어요. ♡");
});
document.getElementById("savePrayerButton").addEventListener("click", () => {
  saveData();
  alert("가족기원문 기록을 저장했어요. ♡");
});

document.getElementById("importFile").addEventListener("change", event => {
  if (event.target.files[0]) importBackup(event.target.files[0]);
  event.target.value = "";
});
document.addEventListener("keydown", event => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
    document.getElementById("importFile").click();
  }
});

initSelectors();
renderRoster();
renderPrayers();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(console.error);
  });
}
