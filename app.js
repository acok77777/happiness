
/* =========================================
   🌸 진심으로 행복을 기원합니다
   FAMILY PRAYER JOURNAL
   2026년 ~ 2100년
========================================= */

const STORAGE_KEY = "daily-prayer-journal-v1";

const today = new Date();
const START_YEAR = 2026;
const END_YEAR = 2100;

const currentYear = Math.min(
    END_YEAR,
    Math.max(START_YEAR, today.getFullYear())
);

// =========================================
// 🌷 기본 명단
// =========================================

const DEFAULT_NAMES = [
"손소희",
"임묘광",
"임세아",
"김온외할머니",
"임태완",
"이주란",
"손하익",
"안지민",
"임현상",
"임현수",
"손채은",
"손지호",
"하니 명복",
"친정 외가",
"친정 친가",
"시댁 외가",
"시댁 친가",
"김경순 권",
"장혜진 지역",
"이승아 방면",
"조정자지역",
"한정순총지역",
"제물포권",
"인천1방면",
"신순경 지부",
"김연례 지구",
"최순옥총지구",
"민한순총지구",
"유신윤지구부",
"주명분총반담",
"이윤아총반담",
"재능회원님",
"송희순 박문",
"황정숙 박문",
"최병정제공자",
"박문회원님",
"동산지구",
"욱일지구",

"니치렌대성인님",
"마키쿠치 선생님",
"도다선생님",
"이케다 선생님",
"가네코사모님",
"SGI 한국본부",
"SGI 일본본부",
"SGI 전세계",

"청년1",
"청년2",
"청년3",
"청년4",
"청년5",
"청년6",
"청년7",
"청년8",
"청년9",
"청년10",

"아시아",
"유럽",
"아프리카",
"북아메리카",
"남아마레카",
"중앙아메리카",
"오세아니아",
"남극 북극",
"우주전체",

"아시아드7단지",
"아시아드6단지",
"아시아드8단지",
"아시아드5단지",
"아.센트럴자이",
"한내들퍼스티지",
"아시아드1단지",
"아시아드2단지",

"패스트박스",
"메리어트",
"테슬라",
"삼성",
"SK하이닉스",
"현대",
"기아",
"LG",
"셀트리온",
"네이버",
"한화",
"카카오",
"KT",
"대한항공",
"CJ",
"포스코",
"롯데",
"하나금융",
"GS",
"대기업",
"중소기업",
"소기업",

"인천광역시",
"서울특별시",
"부산광역시",
"광주광역시",
"대전광역시",
"울산광역시",
"세종특별자치시",
"경기도",
"강원도",
"충청도",
"전라도",
"경상도",
"제주특별자치도",

"평생자산",
"사업아이디어",

"주원빌라",
"한울",
"해찬솔",
"다온",

"서은주 담당",
"남선미 부",
"이보미 부",
"방성임 부",
"소린씨",
"윤지애 부",
"이미복 반담",
"조민호씨",
"김영희지구",
"이은옥지구",

"구정분",
"구정미",
"김영주",
"유희정",
"김유나+어머니",
"로나 샘",
"김윤정 수학",
"임서윤 영어",

"남득예 권부",
"이재숙 부방",
"김순미 부방",

"최민경+가족",
"신혜옥+가족",
"윤영경+가족",
"정미선+가족",
"오정옥+가족",
"고은정+가족",

"남소영샘",
"간석4동주민센터",
"남동구청",

"해돋이",
"임채범 남유",
"정유하 4세",
"김도윤 초6",
"박서원 초4",
"김라윤 초1",
"손하윤 초6",
"임세아 초4",

"영무궁화",
"(재능)",
"손소희",
"이윤아",
"민지혜",

"(욱일)",
"계진",
"윤가현",
"장선형",
"홍나예",

"(동산)",
"윤정아",
"정미진",
"정용진",
"정경민"
];

// =========================================
// 🌸 가족 기원문 14개
// =========================================

const DEFAULT_PRAYERS = [
{
    title: "가족 모두의 건강과 평안",
    text: `가족 모두가 건강할 수 있도록 기원합니다.
세아 알러지 없는 체질로 바뀌도록 기원합니다.
임종의 때에 통증 전혀 없이 잠들 듯 아주 편안히 갈 수 있는 대복운으로!
가족을 포함한 일가친척, 소속 회원과 간부님, 주위 분들 모두 건강할 수 있게 기원합니다.`
},
{
    title: "매일 스승께 보은하는 삶",
    text: `매일 스승께 보은만 할 수 있는 제자로 살아가며
매일 맑고 청정한 부처의 정신과 생명으로 살아갈 수 있게 기원합니다.`
},
{
    title: "풍요로운 자산과 지혜",
    text: `알뜰히 생활하고 저축 잘할 수 있게 기원합니다.
평생 광선유포에 많은 공양을 할 수 있는 자산이 생길 수 있도록
자동 자산 아이디어가 생길 수 있게,
불지혜가 생길 수 있도록 기원합니다.`
},
{
    title: "가족 모두의 자신감과 리더십",
    text: `온 가족이 각자 언제 어디서나 자신감 넘치는
리더십 있는 사람이 될 수 있게 기원합니다.`
},
{
    title: "절복과 선구의 길",
    text: `온 가족이 절복의 선구에 서서 청년부 1만 명 절복할 수 있도록 기원합니다.
정기적으로 칸나 할 곳이 생길 수 있게 기원합니다.`
},
{
    title: "온 우주가 지켜주는 행복",
    text: `온 가족의 행복을 온 우주의 제천이 지켜줄 수 있도록 기원합니다.`
},
{
    title: "손소희의 재능과 사회 공헌",
    text: `손소희에게 딱 맞는 재능을 찾아내어
사회에 도움이 될 수 있도록 기원합니다.`
},
{
    title: "임묘광님의 재능과 사회 공헌",
    text: `임묘광님에게 딱 맞는 재능을 찾아내어
사회에 도움이 될 수 있도록 기원합니다.`
},
{
    title: "임세아의 재능과 사회 공헌",
    text: `임세아 해돋이에게 딱 맞는 재능을 찾아내어
사회에 도움이 될 수 있도록 기원합니다.`
},
{
    title: "더 크고 깊은 삶",
    text: `인간의 시각, 생각, 오감, 육체 모든 것을 뛰어넘는
크고 깊은 삶을 살아가게 기원합니다.
인간 의식을 뛰어넘는 생각, 정신, 육체, 마음을 갖도록 기원합니다.`
},
{
    title: "좋은 환경의 보금자리",
    text: `공기 좋고 따뜻한 에너지로 포근히 둘러싸인 아파트로 이사 갈 수 있도록 기원합니다.
산책로 많고 공기 좋고 인프라가 형성되어 있으며 교통 좋은 곳,
공기와 위치와 에너지가 좋은 아파트를 구입할 수 있는 복운을 기원합니다.`
},
{
    title: "우리 가족 기원문 1~5",
    text: `1) 가족 모두 건강하기 (정신과 신체 모두 건강)

2) 월 수입 천만 원 이상 될 수 있는 복운으로

3) 자신 스스로를 아끼고 사랑하기

4) 가족끼리 서로를 존중하고 서로의 행복을 매일 수시로 기원해 주기

5) 각자 목표를 이루어 사회에 무엇이라도 공헌하는 승리의 인생으로 나아가기!!!`
},
{
    title: "우리 가족 기원문 6",
    text: `스승 이케다 선생님께 감사한 마음을 갖고 스승을 매일 구도하며
선생님이라면 지금 나에게 어떤 격려를 해주실까?를 항상 생각하며 살아가기.
보은하는 승리의 인생으로 살아가기.`
},
{
    title: "우리 가족 기원문 7~9",
    text: `7) 세아, 온 우주가 제천이 되어 알러지와 아토피가 없어지고 정상 체질로 건강하게 지내며, 잘 맞는 항생제와 치료 방법을 찾을 수 있도록 기원합니다.

8) 세아가 세계에 공헌하는 대인재이자 리더로 성장할 수 있게 기원합니다.

9) 세아 평생 주위에 좋은 분들이 넘쳐나고 세아를 제천선신이 항상 지켜주는 복운 넘치는 인생이 될 수 있도록 기원합니다.
평생 좋은 친구들이 넘쳐나고 학창 시절 좋은 선생님들을 만나게 기원합니다.`
}
];

// =========================================
// 화면 요소
// =========================================

const rosterYear = document.getElementById("rosterYear");
const rosterMonth = document.getElementById("rosterMonth");
const prayerYear = document.getElementById("prayerYear");
const prayerMonth = document.getElementById("prayerMonth");

// =========================================
// 저장 데이터 불러오기
// =========================================

function loadData() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );

        if (saved && Array.isArray(saved.names)) {
            return {
                names: saved.names,
                prayers: Array.isArray(saved.prayers)
                    ? saved.prayers
                    : DEFAULT_PRAYERS.map((p, i) => ({
                        ...p,
                        id: "p" + i
                    })),
                rosterChecks: saved.rosterChecks || {},
                prayerChecks: saved.prayerChecks || {}
            };
        }
    } catch (error) {
        console.error("데이터 불러오기 실패", error);
    }

    return {
        names: [...DEFAULT_NAMES],

        prayers: DEFAULT_PRAYERS.map((p, i) => ({
            ...p,
            id: "p" + i
        })),

        rosterChecks: {},
        prayerChecks: {}
    };
}

let data = loadData();

// =========================================
// 💗 자동 저장
// =========================================

function saveData() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

        updateCounts();

    } catch (error) {
        alert("저장 공간이 부족합니다.");
        console.error(error);
    }
}

// =========================================
// 🌷 연도 선택
// 2026년부터 2100년까지
// =========================================

function yearOptions(select) {
    select.innerHTML = "";

    for (
        let year = START_YEAR;
        year <= END_YEAR;
        year++
    ) {
        const option = document.createElement("option");

        option.value = year;
        option.textContent = year + "년";

        select.appendChild(option);
    }
}

// =========================================
// 월 선택
// =========================================

function monthOptions(select) {
    select.innerHTML = "";

    for (let month = 1; month <= 12; month++) {
        const option = document.createElement("option");

        option.value = month;
        option.textContent = month + "월";

        select.appendChild(option);
    }
}

// =========================================
// 연도 / 월 초기화
// =========================================

function initSelectors() {
    yearOptions(rosterYear);
    yearOptions(prayerYear);

    monthOptions(rosterMonth);
    monthOptions(prayerMonth);

    rosterYear.value = currentYear;
    prayerYear.value = currentYear;

    rosterMonth.value = today.getMonth() + 1;
    prayerMonth.value = today.getMonth() + 1;
}

// =========================================
// 해당 월의 날짜 수
// =========================================

function daysInMonth(year, month) {
    return new Date(
        Number(year),
        Number(month),
        0
    ).getDate();
}

// =========================================
// 체크 데이터 키
// =========================================

function makeKey(year, month, day, id) {
    return [
        year,
        String(month).padStart(2, "0"),
        String(day).padStart(2, "0"),
        id
    ].join("-");
}

// =========================================
// 화면 이동
// =========================================

function showScreen(name) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(name + "Screen");

    if (!target) return;

    target.classList.add("active");

    if (name === "roster") renderRoster();
    if (name === "prayers") renderPrayers();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =========================================
// 🌼 명단 기원 기록
// =========================================

function renderRoster() {
    const year = Number(rosterYear.value);
    const month = Number(rosterMonth.value);

    const totalDays = daysInMonth(year, month);

    const table = document.getElementById("rosterTable");

    table.innerHTML = "";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const firstHeader = document.createElement("th");

    firstHeader.textContent = "기원 명단";

    headerRow.appendChild(firstHeader);

    for (let day = 1; day <= totalDays; day++) {
        const th = document.createElement("th");

        th.className = "day-head";
        th.textContent = day;

        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    data.names.forEach((name, index) => {
        const tr = document.createElement("tr");

        const nameCell = document.createElement("td");

        nameCell.textContent = name;

        tr.appendChild(nameCell);

        for (let day = 1; day <= totalDays; day++) {
            const td = document.createElement("td");

            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";

            const key = makeKey(
                year,
                month,
                day,
                index
            );

            checkbox.checked = !!data.rosterChecks[key];

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    data.rosterChecks[key] = true;
                } else {
                    delete data.rosterChecks[key];
                }

                saveData();
            });

            td.appendChild(checkbox);
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    updateCounts();
}

// =========================================
// 🌸 가족 기원문 기록
// =========================================

function renderPrayers() {
    const year = Number(prayerYear.value);
    const month = Number(prayerMonth.value);

    const totalDays = daysInMonth(year, month);

    const list = document.getElementById("prayerList");

    list.innerHTML = "";

    data.prayers.forEach(prayer => {
        const card = document.createElement("article");

        card.className = "prayer-card";

        const top = document.createElement("div");

        top.className = "prayer-card-top";

        const flower = document.createElement("span");

        flower.className = "prayer-number";
        flower.textContent = "✿";

        const title = document.createElement("h3");

        title.textContent = prayer.title;

        top.append(flower, title);

        card.appendChild(top);

        const text = document.createElement("p");

        text.textContent = prayer.text;

        card.appendChild(text);

        const daysBox = document.createElement("div");

        daysBox.className = "prayer-days";

        const caption = document.createElement("div");

        caption.className = "prayer-days-caption";
        caption.textContent = "🌷 날짜별 기원 체크";

        daysBox.appendChild(caption);

        const grid = document.createElement("div");

        grid.className = "day-check-grid";

        for (let day = 1; day <= totalDays; day++) {
            const label = document.createElement("label");

            label.className = "day-check";

            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";

            const key = makeKey(
                year,
                month,
                day,
                prayer.id
            );

            checkbox.checked = !!data.prayerChecks[key];

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    data.prayerChecks[key] = true;
                } else {
                    delete data.prayerChecks[key];
                }

                saveData();
            });

            const number = document.createElement("span");

            number.textContent = day;

            label.append(checkbox, number);

            grid.appendChild(label);
        }

        daysBox.appendChild(grid);

        card.appendChild(daysBox);

        list.appendChild(card);
    });

    updateCounts();
}

// =========================================
// 체크 개수
// =========================================

function updateCounts() {
    const count = Object.keys(
        data.rosterChecks
    ).length;

    const countElement = document.getElementById(
        "rosterCount"
    );

    if (countElement) {
        countElement.textContent = count + "개 체크";
    }
}

// =========================================
// 🧁 명단 관리 창
// =========================================

function openNameManager() {
    renderNameManager();

    document.getElementById("nameDialog").showModal();
}

function renderNameManager() {
    const list = document.getElementById("nameManageList");

    list.innerHTML = "";

    data.names.forEach((name, index) => {
        const row = document.createElement("div");

        row.className = "manage-item";

        const span = document.createElement("span");

        span.textContent = name;

        const editButton = document.createElement("button");

        editButton.textContent = "수정";

        editButton.onclick = () => {
            const newName = prompt("이름 수정", name);

            if (newName === null) return;

            if (newName.trim()) {
                data.names[index] = newName.trim();

                saveData();

                renderNameManager();
                renderRoster();
            }
        };

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "삭제";
        deleteButton.className = "delete";

        deleteButton.onclick = () => {
            if (
                confirm(
                    "'" + name + "'을(를) 삭제할까요?"
                )
            ) {
                data.names.splice(index, 1);

                saveData();

                renderNameManager();
                renderRoster();
            }
        };

        row.append(span, editButton, deleteButton);

        list.appendChild(row);
    });
}

// =========================================
// 기원문 관리 창
// =========================================

function openPrayerManager() {
    renderPrayerManager();

    document.getElementById("prayerDialog").showModal();
}

function renderPrayerManager() {
    const list = document.getElementById("prayerManageList");

    list.innerHTML = "";

    data.prayers.forEach((prayer, index) => {
        const row = document.createElement("div");

        row.className = "manage-item";

        const span = document.createElement("span");

        span.textContent = prayer.title;

        const editButton = document.createElement("button");

        editButton.textContent = "수정";

        editButton.onclick = () => {
            const newTitle = prompt(
                "기원문 제목",
                prayer.title
            );

            if (newTitle === null) return;

            const newText = prompt(
                "기원문 내용",
                prayer.text
            );

            if (newText === null) return;

            if (newTitle.trim() && newText.trim()) {
                prayer.title = newTitle.trim();
                prayer.text = newText.trim();

                saveData();

                renderPrayerManager();
                renderPrayers();
            }
        };

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "삭제";
        deleteButton.className = "delete";

        deleteButton.onclick = () => {
            if (
                confirm(
                    "'" + prayer.title + "' 기원문을 삭제할까요?"
                )
            ) {
                data.prayers.splice(index, 1);

                saveData();

                renderPrayerManager();
                renderPrayers();
            }
        };

        row.append(span, editButton, deleteButton);

        list.appendChild(row);
    });
}

// =========================================
// 명단 추가
// =========================================

function addName(event) {
    event.preventDefault();

    const input = document.getElementById("newNameInput");

    const name = input.value.trim();

    if (!name) {
        alert("이름을 입력해 주세요.");
        return;
    }

    data.names.push(name);

    input.value = "";

    saveData();

    renderNameManager();
    renderRoster();
}

// =========================================
// 기원문 추가
// =========================================

function addPrayer(event) {
    event.preventDefault();

    const title = document.getElementById(
        "prayerTitleInput"
    ).value.trim();

    const text = document.getElementById(
        "prayerTextInput"
    ).value.trim();

    if (!title || !text) {
        alert("제목과 내용을 모두 입력해 주세요.");
        return;
    }

    data.prayers.push({
        id: "p" + Date.now(),
        title,
        text
    });

    document.getElementById("prayerTitleInput").value = "";
    document.getElementById("prayerTextInput").value = "";

    saveData();

    renderPrayerManager();
    renderPrayers();
}

// =========================================
// 💾 백업 파일 저장
// =========================================

function exportBackup() {
    const backup = {
        app: "prayer-journal",
        version: 1,
        exportedAt: new Date().toISOString(),
        data
    };

    const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        "기원문백업-" +
        new Date().toISOString().slice(0, 10) +
        ".json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}

// =========================================
// 백업 복원
// =========================================

function importBackup(file) {
    const reader = new FileReader();

    reader.onload = () => {
        try {
            const backup = JSON.parse(reader.result);

            const incoming = backup.data || backup;

            if (
                !Array.isArray(incoming.names) ||
                !Array.isArray(incoming.prayers)
            ) {
                throw new Error("올바른 백업 파일이 아닙니다.");
            }

            if (
                confirm(
                    "현재 데이터를 백업 파일로 교체할까요?"
                )
            ) {
                data = {
                    names: incoming.names,
                    prayers: incoming.prayers,
                    rosterChecks: incoming.rosterChecks || {},
                    prayerChecks: incoming.prayerChecks || {}
                };

                saveData();

                renderRoster();
                renderPrayers();

                alert("🌸 백업 복원이 완료되었습니다.");
            }

        } catch (error) {
            alert(
                "백업 복원에 실패했습니다.\n" +
                error.message
            );
        }
    };

    reader.readAsText(file);
}

// =========================================
// 오늘 날짜로 이동
// =========================================

function goRosterToday() {
    rosterYear.value = currentYear;
    rosterMonth.value = today.getMonth() + 1;

    renderRoster();
}

function goPrayerToday() {
    prayerYear.value = currentYear;
    prayerMonth.value = today.getMonth() + 1;

    renderPrayers();
}

// =========================================
// 버튼 연결
// =========================================

function connectButton(id, callback) {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", callback);
    }
}

// 메인 화면 이동
document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen(button.dataset.go);
    });
});

// 나가기 / 이전 / 홈
document.querySelectorAll("[data-home]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("home");
    });
});

document.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("home");
    });
});

connectButton("homeButton", () => showScreen("home"));

// 명단 / 기원문 관리
connectButton("manageNamesButton", openNameManager);
connectButton("managePrayersButton", openPrayerManager);

// 추가
connectButton("addNameButton", addName);
connectButton("addPrayerButton", addPrayer);

// 오늘
connectButton("rosterToday", goRosterToday);
connectButton("prayerToday", goPrayerToday);

// 저장
connectButton("saveRosterButton", () => {
    saveData();
    alert("🌸 명단 기록을 저장했습니다.");
});

connectButton("savePrayerButton", () => {
    saveData();
    alert("🌸 기원문 기록을 저장했습니다.");
});

// 백업
connectButton("backupButton", exportBackup);

connectButton("restoreButton", () => {
    const input = document.getElementById("importFile");

    if (input) input.click();
});

// 백업 파일 선택
const importInput = document.getElementById("importFile");

if (importInput) {
    importInput.addEventListener("change", event => {
        const file = event.target.files[0];

        if (file) importBackup(file);

        event.target.value = "";
    });
}

// 연도 / 월 변경
rosterYear.addEventListener("change", renderRoster);
rosterMonth.addEventListener("change", renderRoster);

prayerYear.addEventListener("change", renderPrayers);
prayerMonth.addEventListener("change", renderPrayers);

// =========================================
// 앱 시작
// =========================================

initSelectors();

renderRoster();
renderPrayers();

// PWA 서비스 워커
if (
    "serviceWorker" in navigator &&
    location.protocol !== "file:"
) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .catch(error => {
                console.error(
                    "서비스 워커 등록 실패:",
                    error
                );
            });
    });
}

console.log("🌸 가족 기원문 앱 실행 완료");
console.log("명단 개수:", data.names.length);
console.log("기원문 개수:", data.prayers.length);
console.log("사용 가능 연도:", START_YEAR + " ~ " + END_YEAR);
