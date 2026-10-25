const questions = [
  {id:1,topic:"Yo‘l belgilari",sign:"traffic-light-red",q:"Qizil chiroq yonganda haydovchi nima qilishi kerak?",a:["Harakatni davom ettirish","To‘xtash chizig‘i oldida to‘xtash","Tezlikni oshirish","Faqat signal berish"],correct:1,explain:"Taqiqlovchi qizil signal harakatlanishni qat'iy taqiqlaydi."},
  {id:2,topic:"Yo‘l belgilari",sign:"give-way",q:"Ushbu teskari uchburchak shaklidagi belgi nimani bildiradi?",a:["Asosiy yo‘l boshlanishini","Yo‘l berish talabini (boshqa transportlarga yo‘l berish)","To‘xtamasdan o‘tishni","Bir tomonlama harakatni"],correct:1,explain:"2.4 'Yo‘l bering' belgisi haydovchidan kesib o‘tilayotgan yo‘ldagi transport vositalariga yo‘l berishni talab qiladi."},
  {id:3,topic:"Xavfsiz haydash",sign:"pedestrian",q:"Piyodalar o‘tish joyiga yaqinlashganda haydovchi nima qilishi shart?",a:["Tezlikni oshirish","Piyodalarga yo‘l berish uchun tezlikni pasaytirish yoki to‘xtash","Signalni uzluksiz chalish","Chapga keskin burilish"],correct:1,explain:"Piyodalar xavfsizligini ta’minlash va qatnov qismiga chiqqan piyodalarga yo‘l berish kerak."},
  {id:4,topic:"Yo‘l belgilari",sign:"speed-60",q:"Ushbu qizil hoshiyali '60' belgisi nimani anglatadi?",a:["Eng kam ruxsat etilgan tezlik 60 km/soat","Tavsiya etilgan tezlik 60 km/soat","Ruxsat etilgan maksimal tezlik 60 km/soat","60 metr qolgan"],correct:2,explain:"3.24 'Yuqori tezlik cheklangan' belgisi ko‘rsatilgan tezlikdan (60 km/soat) ortiq harakatlanishni taqiqlaydi."},
  {id:5,topic:"Chorrahalar",q:"Tartibga solinmagan teng ahamiyatli yo‘llar chorrahasida odatda kimga yo‘l beriladi?",a:["Chapdan kelayotgan transportga","O‘ngdan kelayotgan transportga (o‘ng qo‘l qoidasi)","Faqat yuk mashinasiga","Hech kimga"],correct:1,explain:"Teng ahamiyatli yo‘llar chorrahasida o‘ng tomondan kelayotgan transportga yo‘l berish qoidasi qo‘llanadi."},
  {id:6,topic:"Xavfsiz haydash",q:"Xavfsizlik kamaridan kim foydalanishi shart?",a:["Faqat tajribasiz haydovchilar","Faqat old o‘rindiqdagi yo‘lovchi","Qoidalarda belgilangan tartibda haydovchi va barcha yo‘lovchilar","Faqat shahar tashqarisida"],correct:2,explain:"Xavfsizlik kamari jarohatlanish xavfini keskin kamaytiradi; undan belgilangan tartibda hamma foydalanishi lozim."},
  {id:7,topic:"Yo‘l belgilari",sign:"mandatory-straight",q:"Ko‘k doira ichidagi to‘g‘riga yo‘nalgan oq strelka nimani bildiradi?",a:["Faqat to‘g‘riga harakatlanish majburiyligini","Bir tomonlama harakat tugaganini","O‘ngga burilish ruxsatini","Qayrilib olish taqiqlanganini"],correct:0,explain:"4.1.1 'To‘g‘riga harakatlanish' majburiy yo‘nalish belgisi hisoblanadi."},
  {id:8,topic:"Chorrahalar",sign:"traffic-light-green",q:"Yashil svetofor yonganda haydovchi qanday harakat qilishi kerak?",a:["Har qanday holatda to‘xtamasdan yurish","Harakat xavfsizligiga ishonch hosil qilib, ruxsat etilgan yo‘nalishda yurish","Piyodalarni e’tiborsiz qoldirish","Darhol orqaga burilish"],correct:1,explain:"Yashil signal ruxsat beradi, ammo chorrahani bo‘shatish va piyodalar xavfsizligini ta’minlash shart."},
  {id:9,topic:"Xavfsiz haydash",q:"Haydash vaqtida qo‘lda telefondan foydalanish nimaga olib keladi?",a:["Reaksiya tezlashishiga","Avariya xavfi kamayishiga","Diqqat chalg‘ib, to‘qnashuv xavfi ko‘p marta oshishiga","Yoqilg‘i tejalishiga"],correct:2,explain:"Telefon bilan chalg‘ish haydovchining diqqatini yo‘ldan uzadi va xavfli holatni yuzaga keltiradi."},
  {id:10,topic:"Birinchi yordam",q:"Yo‘l-transport hodisasida birinchi navbatda nima qilish zarur?",a:["Voqea joyi xavfsizligini ta'minlash va favqulodda xizmatlarga (103, 102) xabar berish","Videoga olib ijtimoiy tarmoqqa joylash","Avtomobillarni darhol surib qo‘yish","Shoshilmasdan kutish"],correct:0,explain:"Avvalo o‘zingiz va atrofingizdagilar xavfsizligini ta’minlang hamda tegishli tezkor xizmatlarni chaqiring."},
  {id:11,topic:"Yo‘l belgilari",sign:"stop",q:"Qizil sakkizburchakli 'STOP' belgisi oldida nima qilish shart?",a:["Faqat boshqa mashina kelsa to‘xtash","To‘xtash chizig‘i yoki belgi oldida to‘liq to‘xtash","Faqat sekinlashib o‘tib ketish","Faqat signal berib o‘tish"],correct:1,explain:"2.5 'To‘xtamasdan harakatlanish taqiqlangan' (STOP) belgisi har qanday holatda transport vositasini to‘liq to‘xtatishni talab qiladi."},
  {id:12,topic:"Chorrahalar",q:"Burilish yoki qayrilib olishdan oldin haydovchi nima qilishi kerak?",a:["Burilish ko‘rsatkichini (povorotnik) oldindan yoqish","Faqat uzoqni yorituvchi faralarni yoqish","Tezlikni keskin oshirish","Signal chalish"],correct:0,explain:"Haydovchi manevr boshlashdan oldin tegishli yo‘nalish ko‘rsatkichlari bilan ogohlantirish berishi shart."},
  {id:13,topic:"Xavfsiz haydash",q:"Yomg‘irli va sirpanchiq yo‘lda xavfsizlik uchun qaysi chora to‘g‘ri?",a:["Oldingi avtomobilgacha oraliq masofani kamaytirish","Tezlikni oshirish","Tezlikni pasaytirish va oraliq masofani oshirish","Faqat tormozni keskin bosish"],correct:2,explain:"Nam yo‘lda tormoz masofasi 1.5 - 2 baravar uzayadi, shuning uchun tezlik pasaytiriladi va masofa oshiriladi."},
  {id:14,topic:"Birinchi yordam",q:"Jarohatlangan kishida kuchli arterial qon ketish kuzatilsa, nima qilinadi?",a:["Jarohatdan yuqoriroqqa qon to‘xtatuvchi bog‘lam (jgut) qo‘yish","Jarohatga sovuq suv quyish","Faqat spirt surtish","Hech narsa qilmaslik"],correct:0,explain:"Arterial qon ketishida qon sachrab chiqadi; jarohatdan yuqoriga jgut qo‘yilib, vaqti qayd etiladi."},
  {id:15,topic:"Yo‘l belgilari",sign:"priority",q:"Sariq rangli romb ko‘rinishidagi ushbu belgi nimani bildiradi?",a:["Asosiy yo‘l (harakatlanishda ustunlikka egalik)","Toraygan yo‘l","Xavfli burilish","Aylanma harakat"],correct:0,explain:"2.1 'Asosiy yo‘l' belgisi tartibga solinmagan chorrahalardan o‘tishda haydovchiga ustunlik beradi."},
  {id:16,topic:"Chorrahalar",q:"Chapga burilishda ro‘paradan to‘g‘riga yoki o‘ngga ketayotgan transportga:",a:["Yo‘l berish shart","Yo‘l berish taqiqlangan","Faqat yuk mashinasi bo‘lsa yo‘l beriladi","Signal chalib o‘tib ketiladi"],correct:0,explain:"Teng huquqli sharoitda chapga burilayotgan haydovchi qarama-qarshi tomondan to‘g‘riga yoki o‘ngga harakatlanayotgan transportga yo‘l berishi shart."},
  {id:17,topic:"Xavfsiz haydash",q:"Haydash paytida qattiq uyqu yoki charchoq sezilsa, eng to‘g‘ri harakat qaysi?",a:["Musiqani baland qilib yo‘lda davom etish","Xavfsiz joyda to‘xtab, 15-20 daqiqa uxlab dam olish","Tezlikni oshirib manzilga shoshilish","Kofeni uzluksiz ichib ketaverish"],correct:1,explain:"Uxlab qolish — yo‘ldagi eng og‘ir oqibatli avariyalarning asosiy sabablaridan biridir; to‘xtab dam olish shart."},
  {id:18,topic:"Yo‘l belgilari",sign:"parking",q:"Ko‘k rangli fondagi 'P' belgisi nimani anglatadi?",a:["Piyodalar zonasi","Avtoturargoh (to‘xtab turish joyi)","Pulli yo‘l","Politsiya nazorat posti"],correct:1,explain:"6.4 'To‘xtab turish joyi' (Parking) transport vositalarining to‘xtab turishi uchun mo‘ljallangan hududni bildiradi."},
  {id:19,topic:"Xavfsiz haydash",q:"Oldinda ketayotgan avtomobil bilan xavfsiz oraliq masofani saqlash nimaga kerak?",a:["Boshqa transportlar oraga kirmasligi uchun","Oldingi transport keskin to‘xtaganda to‘qnashuvdan qochish uchun","Tezlikni oshirish uchun","Yoqilg‘i sarfini kamaytirish uchun"],correct:1,explain:"Xavfsiz masofa kutilmagan vaziyatlarda reaksiya bildirish va to‘xtash uchun yetarli masofani ta'minlaydi."},
  {id:20,topic:"Yo‘l belgilari",sign:"no-entry",q:"Ushbu qizil fondagi oq to‘g‘riburchakli ('G‘isht') belgi nimani taqiqlaydi?",a:["Barcha transport vositalarining kirishini","Faqat yuk mashinalarining kirishini","To‘xtab turishni","Tezlikni 60 dan oshirishni"],correct:0,explain:"3.1 'Kirish taqiqlangan' belgisi ushbu yo‘nalishda har qanday transport vositalarining harakatlanishini taqiqlaydi."},
  {id:21,topic:"Chorrahalar",q:"Svetoforning miltillovchi sariq signali nimani anglatadi?",a:["Chorraha tartibga solinmaganligini va xavf mavjudligini","Qizil chiroqqa tayyor turishni","Faqat politsiya yurishini","Harakat butunlay yopilganini"],correct:0,explain:"Miltillovchi sariq signal tartibga solinmagan chorraha haqida ogohlantiradi va ustunlik belgilari asosida harakatlanishni talab qiladi."},
  {id:22,topic:"Chorrahalar",q:"Tartibga soluvchi (YPX xodimi) ishorasi bilan svetofor signallari mos kelmasa:",a:["Haydovchi o‘z xohishicha harakat qiladi","Tartibga soluvchining ko‘rsatmasi ustuvor hisoblanadi","Svetofor qoidasi ustun bo‘ladi","Hamma to‘xtab kutishi shart"],correct:1,explain:"Tartibga soluvchining signallari va ko‘rsatmalari svetofor va yo‘l belgilariga nisbatan har doim ustuvordir."},
  {id:23,topic:"Xavfsiz haydash",q:"Tumanli sharoitda qaysi chiroqlardan foydalanish tavsiya etiladi?",a:["Uzoqni yorituvchi faralar","Tuman chiroqlari va yaqinni yorituvchi faralar","Chiroqlarni butunlay o‘chirish","Faqat avariya chirog‘i"],correct:1,explain:"Uzoqni yorituvchi chiroq tumandan aks etib, ko‘zni qamashtiradi; tuman chiroqlari va yaqin nur esa yo‘lni yaxshi yoritadi."},
  {id:24,topic:"Yo‘l belgilari",q:"Qizil hoshiyali doira ichidagi belgilar odatda qaysi guruhga kiradi?",a:["Axborot-ko‘rsatkich belgilari","Taqiqlovchi va cheklovchi belgilar","Servis belgilari","Tavsiya belgilari"],correct:1,explain:"Qizil doira shaklidagi belgilar muayyan cheklov va taqiqlarni o‘rnatadi."},
  {id:25,topic:"Birinchi yordam",q:"Kuyish holatida jarohatlangan sohaga nima qilish tavsiya etilmaydi?",a:["Sovuq toza suv bilan sovutish","Yog‘, maz yoki tish pastasi surtish","Toza quruq bog‘lam qo‘yish","Zudlik bilan shifokorga murojaat qilish"],correct:1,explain:"Kuygan joyga yog‘ yoki pasta surtish issiqlik chiqishiga to‘sqinlik qilib, to‘qimalarning chuqurroq zararlanishiga olib keladi."},
  {id:26,topic:"Xavfsiz haydash",q:"Bolalar bog‘chasi yoki maktab yaqinida harakatlanganda nima zarur?",a:["Tezlikni pasaytirish va favqulodda to‘xtashga tayyor turish","Signal chalib bolalarni qo‘rqitish","Tezlikni oshirib o‘tib ketish","Faqat avariya chirog‘ini yoqish"],correct:0,explain:"Bolalar xavfni to‘liq baholay olmaydi va kutilmaganda yo‘lga chiqishi mumkin."},
  {id:27,topic:"Chorrahalar",q:"Aylanma harakat tashkil etilgan chorrahaga kirishda kim ustunlikka ega?",a:["Har doim aylanaga kirayotgan transport","Qoidaga ko‘ra aylanada harakatlanayotgan transport (agar belgilar boshqacha ko‘rsatmasa)","Faqat avtobuslar","O‘ng tomondan kirayotganlar"],correct:1,explain:"Agar belgilarda boshqa tartib belgilanmagan bo‘lsa, aylanma harakatdagi transport vositalari aylanaga kiruvchilarga nisbatan ustunlikka ega."},
  {id:28,topic:"Xavfsiz haydash",q:"Qorong‘i vaqtda ro‘paradan kelayotgan transport ko‘zni qamashtirsa, nima qilinadi?",a:["Tezlikni oshirish","Avariya chirog‘ini yoqib, yo‘nalishni o‘zgartirmasdan to‘xtash","Qarama-qarshi haydovchiga uzoq nur yoqib qasos olish","Rulni o‘ngga keskin burish"],correct:1,explain:"Ko‘z qamashganda haydovchi avariya ishorasini yoqishi va harakat bo‘lagini o‘zgartirmagan holda sekin to‘xtashi shart."},
  {id:29,topic:"Birinchi yordam",q:"Hushsiz yotgan kishida nafas olish yo‘llarini ochish uchun nima qilinadi?",a:["Boshni orqaga ohista egib, iyakni yuqoriga ko‘tarish","Uni o‘tirg‘izish","Boshini oldinga egish","Sovuq suv sepish"],correct:0,explain:"Boshni orqaga engash va iyakni ko‘tarish tilning orqaga ketib nafas yo‘lini to‘sib qo‘yishining oldini oladi."},
  {id:30,topic:"Xavfsiz haydash",q:"Avtomobil shinalarining eskirishi qanday xavf tug‘diradi?",a:["Yo‘l bilan ilashish pasayadi va tormoz masofasi uzayadi","Hech qanday xavfi yo‘q","Tezlik o‘z-o‘zidan oshadi","Faqat tashqi ko‘rinishi o‘zgaradi"],correct:0,explain:"Eskirgan shinalar sirpanish, akvaplaning va to‘xtash masofasining sezilarli oshishiga olib keladi."}
];

const topics = ["Yo‘l belgilari", "Chorrahalar", "Xavfsiz haydash", "Birinchi yordam"];

const tickets = [
  {name:"1-bilet", desc:"Asosiy belgilar va xavfsizlik", ids:[1,2,3,4,5,6]},
  {name:"2-bilet", desc:"Svetofor va chorrahalar", ids:[7,8,9,10,11,12]},
  {name:"3-bilet", desc:"Yo‘l vaziyatlari va tezlik", ids:[13,14,15,16,17,18]},
  {name:"4-bilet", desc:"Xavfsiz harakat va birinchi yordam", ids:[19,20,21,22,23,24]},
  {name:"5-bilet", desc:"Aralash yakuniy sinov", ids:[25,26,27,28,29,30]}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const defaultState = {
  name: "",
  answered: 0,
  correct: 0,
  completedTickets: [],
  completedTopics: [],
  mistakes: [],
  history: [],
  dailyAnswers: {},
  theme: "dark"
};

let state;
try {
  state = {...defaultState, ...JSON.parse(localStorage.getItem("pravaAcademyState") || "{}")};
} catch {
  state = {...defaultState};
}

function save() {
  localStorage.setItem("pravaAcademyState", JSON.stringify(state));
  updateProgress();
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("show"), 2400);
}

function byId(id) {
  return questions.find(q => q.id === Number(id));
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function getSignSvg(type) {
  switch(type) {
    case "stop":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="STOP yo'l belgisi">
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" stroke-width="4"/>
        <text x="50" y="58" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">STOP</text>
      </svg>`;
    case "speed-60":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Tezlik cheklovi 60 belgisi">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" stroke-width="10"/>
        <text x="50" y="55" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="34" fill="#111827" text-anchor="middle" dominant-baseline="middle">60</text>
      </svg>`;
    case "give-way":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Yo'l bering belgisi">
        <polygon points="10,15 90,15 50,85" fill="#ffffff" stroke="#dc2626" stroke-width="9"/>
      </svg>`;
    case "priority":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Asosiy yo'l belgisi">
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill="#fbbf24" stroke="#ffffff" stroke-width="7" rx="3"/>
      </svg>`;
    case "traffic-light-red":
      return `<svg viewBox="0 0 60 110" width="55" height="100" aria-label="Qizil svetofor">
        <rect x="5" y="5" width="50" height="100" rx="14" fill="#1e2230" stroke="#3b4261" stroke-width="3"/>
        <circle cx="30" cy="24" r="13" fill="#ef4444" filter="drop-shadow(0 0 8px #ef4444)"/>
        <circle cx="30" cy="55" r="13" fill="#3e2e15"/>
        <circle cx="30" cy="86" r="13" fill="#133621"/>
      </svg>`;
    case "traffic-light-green":
      return `<svg viewBox="0 0 60 110" width="55" height="100" aria-label="Yashil svetofor">
        <rect x="5" y="5" width="50" height="100" rx="14" fill="#1e2230" stroke="#3b4261" stroke-width="3"/>
        <circle cx="30" cy="24" r="13" fill="#3e1b1d"/>
        <circle cx="30" cy="55" r="13" fill="#3e2e15"/>
        <circle cx="30" cy="86" r="13" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)"/>
      </svg>`;
    case "pedestrian":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Piyodalar o'tish joyi belgisi">
        <rect x="5" y="5" width="90" height="90" rx="12" fill="#2563eb"/>
        <polygon points="50,15 85,82 15,82" fill="#ffffff"/>
        <rect x="28" y="76" width="44" height="4" fill="#2563eb"/>
        <rect x="33" y="70" width="34" height="3" fill="#2563eb"/>
        <circle cx="48" cy="38" r="5" fill="#111827"/>
        <path d="M47,44 L53,56 L61,68 M47,44 L39,58 M47,48 L56,47 L62,55 M47,48 L38,49" stroke="#111827" stroke-width="4" stroke-linecap="round" fill="none"/>
      </svg>`;
    case "parking":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Avtoturargoh belgisi">
        <rect x="5" y="5" width="90" height="90" rx="12" fill="#2563eb"/>
        <text x="50" y="56" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="58" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">P</text>
      </svg>`;
    case "no-entry":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="Kirish taqiqlangan belgisi">
        <circle cx="50" cy="50" r="45" fill="#dc2626"/>
        <rect x="18" y="42" width="64" height="16" fill="#ffffff" rx="3"/>
      </svg>`;
    case "mandatory-straight":
      return `<svg viewBox="0 0 100 100" width="80" height="80" aria-label="To'g'riga harakatlanish belgisi">
        <circle cx="50" cy="50" r="45" fill="#2563eb"/>
        <path d="M50,20 L66,38 L54,38 L54,78 L46,78 L46,38 L34,38 Z" fill="#ffffff"/>
      </svg>`;
    default:
      return "";
  }
}

function updateProgress() {
  const pct = state.answered ? Math.round(state.correct / state.answered * 100) : 0;
  $("#progressPercent").textContent = `${pct}%`;
  $("#progressRing").style.background = `conic-gradient(var(--green) ${pct * 3.6}deg, #203752 ${pct * 3.6}deg)`;
  $("#ticketProgressText").textContent = `${state.completedTickets.length} / ${tickets.length}`;
  $("#topicProgressText").textContent = `${state.completedTopics.length} / ${topics.length}`;
  $("#answeredText").textContent = `${state.answered} ta`;
  $("#ticketBar").style.width = `${state.completedTickets.length / tickets.length * 100}%`;
  $("#topicBar").style.width = `${state.completedTopics.length / topics.length * 100}%`;
  $("#answerBar").style.width = `${Math.min(state.answered / 30, 1) * 100}%`;
}

let examTimerInterval = null;

function clearExamTimer() {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }
}

function showView(view) {
  clearExamTimer();
  $("#hero").classList.toggle("hidden", view !== "home");
  $(".stats-strip").classList.toggle("hidden", view !== "home");
  $("#homeContent").classList.toggle("hidden", view !== "home");
  $("#viewPanel").classList.toggle("hidden", view === "home");
  $$(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  $("#mainNav").classList.remove("open");

  if (view === "home") return;

  const title = $("#viewTitle"), desc = $("#viewDescription"), content = $("#viewContent");
  content.innerHTML = "";

  const views = {
    exam: ["Imtihon simulyatori", "20 ta savol, 20 daqiqa vaqt chegarasi. Ruxsat etilgan xatolar: ko‘pi bilan 2 ta."],
    tickets: ["Biletlar", "Namuna biletlardan birini tanlang."],
    topics: ["Mavzular", "Yo‘l harakati qoidalarini mavzu bo‘yicha mashq qiling."],
    mistakes: ["Xatolarim", "Oldin noto‘g‘ri javob berilgan savollarni qayta yeching."],
    smart: ["Smart test", "Aralash savollardan iborat 10 talik mashq."],
    stats: ["Statistika", "O‘z natijalaringizni kuzating."],
    profile: ["Profil", "Ismingiz va o‘qish ma’lumotlaringiz."]
  };

  [title.textContent, desc.textContent] = views[view] || views.home;

  if (view === "exam") {
    const examQuestions = shuffle(questions).slice(0, 20);
    renderQuiz(examQuestions, content, "exam");
  } else if (view === "tickets") {
    content.innerHTML = '<div class="cards-list">' + tickets.map((t, i) => `
      <article class="learning-card">
        <div>
          <span class="eyebrow">BILET ${i + 1}</span>
          <h3>${escapeHtml(t.name)}</h3>
          <p>${escapeHtml(t.desc)}</p>
          <p style="color:var(--green);font-weight:700">${t.ids.length} ta savol</p>
        </div>
        <button class="primary" data-ticket="${i}">Biletni boshlash →</button>
      </article>
    `).join("") + '</div>';
  } else if (view === "topics") {
    content.innerHTML = '<div class="cards-list">' + topics.map((t, i) => `
      <article class="learning-card">
        <div>
          <span class="feature-icon ${["purple","green","red","violet"][i]}">${["▤","↔","✓","✚"][i]}</span>
          <h3 style="margin-top:12px">${escapeHtml(t)}</h3>
          <p>${questions.filter(q => q.topic === t).length} ta mashq savoli</p>
        </div>
        <button class="primary" data-topic="${escapeHtml(t)}">Mavzuni boshlash →</button>
      </article>
    `).join("") + '</div>';
  } else if (view === "mistakes") {
    const wrong = state.mistakes.map(byId).filter(Boolean);
    content.innerHTML = wrong.length ? `
      <div class="question-list">${wrong.map(q => `
        <article class="quiz-card" style="margin-bottom:14px">
          ${q.sign ? `<div class="question-illustration">${getSignSvg(q.sign)}</div>` : ""}
          <h3>${escapeHtml(q.q)}</h3>
          <p>To‘g‘ri javob: <b style="color:var(--green)">${escapeHtml(q.a[q.correct])}</b></p>
          <p style="color:var(--muted);font-size:13px">${escapeHtml(q.explain)}</p>
          <button class="secondary mini" data-practice="${q.id}">Qayta mashq qilish</button>
        </article>
      `).join("")}</div>
    ` : '<div class="empty-state"><h3>Hozircha xatolar yo‘q 🎉</h3><p>Test yeching. Noto‘g‘ri javoblaringiz shu yerda jamlanadi.</p></div>';
  } else if (view === "smart") {
    const set = shuffle(questions).slice(0, 10);
    renderQuiz(set, content, "smart");
  } else if (view === "stats") {
    const rate = state.answered ? Math.round(state.correct / state.answered * 100) : 0;
    content.innerHTML = `
      <div class="stat-big-grid">
        <div class="stat-big"><strong>${state.answered}</strong><span>Javob berilgan savol</span></div>
        <div class="stat-big"><strong>${state.correct}</strong><span>To‘g‘ri javob</span></div>
        <div class="stat-big"><strong>${rate}%</strong><span>To‘g‘rilik darajasi</span></div>
        <div class="stat-big"><strong>${state.completedTickets.length}</strong><span>Tugallangan bilet</span></div>
      </div>
      <article class="learning-card" style="margin-top:20px">
        <h3>O‘rganish bo‘yicha maslahat</h3>
        <p>${rate >= 85 ? "Ajoyib natija! Bilimingiz yuqori darajada. 20 daqiqalik Imtihon rejimida o‘zingizni sinab ko‘ring!" : "Muntazam ravishda mashq qiling. Xatolar bo‘limidagi savollarni qayta ko‘rib chiqish natijani tez oshiradi."}</p>
        <button class="primary" data-view="exam">⏱ Imtihonni boshlash</button>
      </article>
    `;
  } else if (view === "profile") {
    content.innerHTML = `
      <article class="profile-card">
        <div class="profile-avatar">${state.name ? escapeHtml(state.name[0].toUpperCase()) : "?"}</div>
        <h2>${state.name ? escapeHtml(state.name) : "Mehmon foydalanuvchi"}</h2>
        <p>Barcha natijalar va progress ushbu brauzerda xavfsiz saqlanadi.</p>
        <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="primary" id="editProfile">Ismni o‘zgartirish</button>
          <button class="secondary" id="resetProgress">Progressni tozalash</button>
        </div>
      </article>
    `;
  }
  content.scrollIntoView({behavior: "smooth", block: "start"});
}

function renderQuiz(set, container, kind = "quiz") {
  let index = 0, score = 0;
  clearExamTimer();

  let timeLeft = 20 * 60; // 20 minutes for exam

  const finishQuiz = () => {
    clearExamTimer();
    const pct = Math.round(score / set.length * 100);
    const mistakesCount = set.length - score;

    if (kind === "ticket" && pct >= 70 && !state.completedTickets.includes(activeTicket)) {
      state.completedTickets.push(activeTicket);
      save();
    }
    if (kind === "topic" && pct >= 70 && !state.completedTopics.includes(activeTopic)) {
      state.completedTopics.push(activeTopic);
      save();
    }

    if (kind === "exam") {
      const passed = score >= 18;
      container.innerHTML = `
        <div class="quiz-result ${passed ? 'passed' : 'failed'}">
          <span class="eyebrow">${passed ? '🎉 TABRIKLAYMIZ!' : '⚠️ IMTIHON TUGADI'}</span>
          <h2>${passed ? 'Imtihondan muvaffaqiyatli o‘tdingiz!' : 'Afsuski, imtihondan o‘ta olmadingiz'}</h2>
          <strong>${score} / ${set.length}</strong>
          <p>${passed ? `Siz 20 ta savoldan ${score} tasiga to‘g‘ri javob berdingiz (${mistakesCount} ta xato). Ruxsat etilgan me'yor: ko‘pi bilan 2 ta xato.` : `Siz ${mistakesCount} ta xatoga yo‘l qo‘ydingiz. Imtihondan o‘tish uchun kamida 18 ta to‘g‘ri javob (ko‘pi bilan 2 ta xato) kerak.`}</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="primary" id="retryQuiz">Qayta topshirish</button>
            <button class="secondary" data-view="mistakes">Xatolarni ko‘rish</button>
            <button class="secondary" data-view="home">Bosh sahifa</button>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="quiz-result ${pct >= 70 ? 'passed' : 'failed'}">
          <span class="eyebrow">MASHQ TUGADI</span>
          <h2>Natijangiz</h2>
          <strong>${score} / ${set.length}</strong>
          <p>${pct}% to‘g‘ri javob. ${pct >= 80 ? 'Juda yaxshi natija!' : 'Yana bir bor mashq qilib ko‘ring.'}</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="primary" id="retryQuiz">Qayta ishlash</button>
            <button class="secondary" data-view="home">Bosh sahifa</button>
          </div>
        </div>
      `;
    }

    $("#retryQuiz").onclick = () => renderQuiz(kind === "exam" ? shuffle(questions).slice(0, 20) : shuffle(set), container, kind);
    save();
  };

  if (kind === "exam") {
    examTimerInterval = setInterval(() => {
      timeLeft--;
      const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const sec = String(timeLeft % 60).padStart(2, '0');
      const timerEl = $("#examTimer");
      if (timerEl) {
        timerEl.textContent = `⏱ ${min}:${sec}`;
        if (timeLeft <= 120) {
          timerEl.classList.add("warning");
        }
      }
      if (timeLeft <= 0) {
        toast("Vaqt tugadi!");
        finishQuiz();
      }
    }, 1000);
  }

  const draw = () => {
    if (index >= set.length) {
      finishQuiz();
      return;
    }

    const q = set[index];
    const signSvg = q.sign ? getSignSvg(q.sign) : "";
    const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const sec = String(timeLeft % 60).padStart(2, '0');

    container.innerHTML = `
      <div class="quiz-card">
        <div class="exam-header">
          <div>
            <span class="eyebrow">${escapeHtml(q.topic)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            ${kind === "exam" ? `<span class="exam-timer ${timeLeft <= 120 ? 'warning' : ''}" id="examTimer">⏱ ${min}:${sec}</span>` : ""}
            <span class="pill">${index + 1} / ${set.length}</span>
          </div>
        </div>

        ${signSvg ? `<div class="question-illustration">${signSvg}</div>` : ""}

        <h3>${escapeHtml(q.q)}</h3>
        <div class="quiz-options">
          ${q.a.map((a, i) => `
            <button class="answer-option" data-answer="${i}">
              <span class="letter">${"ABCD"[i]}</span>
              <span>${escapeHtml(a)}</span>
            </button>
          `).join("")}
        </div>
        <p class="feedback" id="quizFeedback"></p>
        <div class="daily-controls">
          <button class="secondary mini" id="speakQuestion">🔊 Eshitish</button>
          <button class="primary mini" id="quizNext" disabled>Keyingi →</button>
        </div>
      </div>
    `;

    $$(".answer-option").forEach(btn => {
      btn.onclick = () => {
        if (btn.disabled) return;
        const choice = Number(btn.dataset.answer);
        const correct = choice === q.correct;

        $$(".answer-option").forEach((b, i) => {
          b.disabled = true;
          if (i === q.correct) b.classList.add("correct");
          else if (i === choice) b.classList.add("wrong");
        });

        $("#quizFeedback").textContent = (correct ? "To‘g‘ri! " : "Noto‘g‘ri. ") + q.explain;

        if (correct) {
          score++;
        }
        state.answered++;
        if (correct) {
          state.correct++;
        } else {
          if (!state.mistakes.includes(q.id)) {
            state.mistakes.push(q.id);
          }
        }
        state.history.push({id: q.id, correct, date: Date.now()});
        save();
        $("#quizNext").disabled = false;
      };
    });

    $("#quizNext").onclick = () => {
      index++;
      draw();
    };

    $("#speakQuestion").onclick = () => {
      speak(q.q + ". Variantlar: " + q.a.map((a, i) => ("ABCD"[i]) + ": " + a).join(". "));
    };
  };

  draw();
}

let activeTicket = 0, activeTopic = "";

function openTicket(i) {
  activeTicket = i;
  showView("tickets");
  const t = tickets[i];
  $("#viewTitle").textContent = t.name;
  $("#viewDescription").textContent = t.desc;
  renderQuiz(t.ids.map(byId), $("#viewContent"), "ticket");
}

function openTopic(topic) {
  activeTopic = topic;
  showView("topics");
  $("#viewTitle").textContent = topic;
  $("#viewDescription").textContent = "Mavzu bo‘yicha mashq";
  renderQuiz(questions.filter(q => q.topic === topic), $("#viewContent"), "topic");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("Brauzeringiz ovozli o‘qishni qo‘llamaydi.");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.pitch = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.startsWith("uz")) ||
                         voices.find(v => v.lang.startsWith("tr")) ||
                         voices.find(v => v.lang.startsWith("ru")) ||
                         voices[0];
  if (preferredVoice) u.voice = preferredVoice;
  window.speechSynthesis.speak(u);
}

function dailyDraw() {
  const index = Number($("#dailyCount").textContent.split("/")[0]) - 1;
  const q = questions[index % questions.length];
  $("#dailyQuestion").textContent = q.q;
  $("#dailyCount").textContent = `${index + 1} / 5`;
  $("#dailyOptions").innerHTML = q.a.map((a, i) => `
    <button class="answer-option" data-daily="${i}">
      <span class="letter">${"ABCD"[i]}</span>
      <span>${escapeHtml(a)}</span>
    </button>
  `).join("");
  $("#dailyFeedback").textContent = "";

  $$(".answer-option[data-daily]").forEach(btn => {
    btn.onclick = () => {
      if (state.dailyAnswers[q.id] !== undefined) return;
      const choice = Number(btn.dataset.daily);
      const correct = choice === q.correct;
      state.dailyAnswers[q.id] = choice;

      $$(".answer-option[data-daily]").forEach((b, i) => {
        b.disabled = true;
        if (i === q.correct) b.classList.add("correct");
        else if (i === choice) b.classList.add("wrong");
      });

      $("#dailyFeedback").textContent = (correct ? "To‘g‘ri! " : `Javob: ${q.a[q.correct]}. `) + q.explain;
      state.answered++;
      if (correct) {
        state.correct++;
      } else if (!state.mistakes.includes(q.id)) {
        state.mistakes.push(q.id);
      }
      save();
    };
  });
}

function changeDaily(delta) {
  let n = Number($("#dailyCount").textContent.split("/")[0]) - 1;
  n = (n + delta + 5) % 5;
  $("#dailyCount").textContent = `${n + 1} / 5`;
  dailyDraw();
}

function openInfo(title, text) {
  $("#infoTitle").textContent = title;
  $("#infoText").textContent = text;
  $("#infoDialog").showModal();
}

document.addEventListener("click", e => {
  const viewBtn = e.target.closest("[data-view]");
  if (viewBtn) {
    e.preventDefault();
    showView(viewBtn.dataset.view);
  }
  const ticketBtn = e.target.closest("[data-ticket]");
  if (ticketBtn) openTicket(Number(ticketBtn.dataset.ticket));

  const topicBtn = e.target.closest("[data-topic]");
  if (topicBtn) openTopic(topicBtn.dataset.topic);

  const practice = e.target.closest("[data-practice]");
  if (practice) {
    const q = byId(practice.dataset.practice);
    showView("tickets");
    $("#viewTitle").textContent = "Xato ustida mashq";
    $("#viewDescription").textContent = "Ushbu savolga qayta javob bering";
    renderQuiz([q], $("#viewContent"), "practice");
  }

  if (e.target.id === "editProfile" || e.target.id === "loginBtn") {
    $("#userName").value = state.name || "";
    $("#loginDialog").showModal();
  }

  if (e.target.id === "resetProgress") {
    if (confirm("Barcha natijalar va progress o‘chirilsinmi?")) {
      state = {...defaultState, name: state.name, theme: state.theme};
      save();
      showView("stats");
      toast("Progress tozalandi.");
    }
  }
});

$("#mobileMenu").onclick = () => $("#mainNav").classList.toggle("open");
$("#howBtn").onclick = () => openInfo(
  "Qanday ishlaydi?",
  "Imtihon yoki mavzuni tanlang, savollarga javob bering. Real imtihon rejimida 20 ta savol va 20 daqiqa vaqt beriladi (ruxsat etilgan xatolar: maksimum 2 ta). Barcha natijalar va xatolaringiz ushbu brauzerda avtomatik saqlanadi."
);
$("#backHome").onclick = () => showView("home");
$("#dailyPrev").onclick = () => changeDaily(-1);
$("#dailyNext").onclick = () => changeDaily(1);

$("#themeToggle").onclick = () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.body.classList.toggle("light", state.theme === "light");
  save();
};

$("#saveProfile").onclick = () => {
  const val = $("#userName").value.trim();
  if (val) state.name = val;
  save();
  if (state.name) $("#loginBtn").textContent = `♙ ${state.name}`;
  setTimeout(() => toast(state.name ? `Xush kelibsiz, ${state.name}!` : "Profil saqlandi."), 0);
};

$("#faqBtn").onclick = () => openInfo(
  "Ko‘p so‘raladigan savollar",
  "Ushbu loyiha haydovchilik nazariyasini o‘rganish va imtihonga tayyorlanish uchun ishlab chiqilgan frontend simulyatordir. Ovozli tugma savolni o‘qib beradi, barcha statistikangiz esa brauzeringiz xotirasida (LocalStorage) xavfsiz saqlanadi."
);

document.body.classList.toggle("light", state.theme === "light");
dailyDraw();
updateProgress();

if (state.name) {
  $("#loginBtn").textContent = `♙ ${state.name}`;
}
