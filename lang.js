// lang.js

const translations = {
  fr: {
    title: "CHOISISSEZ VOTRE TÉLÉCOMMANDE :",
    "telecommande-classique": "Télécommande Standard",
    "telecommande-malentendants": "Télécommande Malentendants",
    "label-cognitive": "Télécommande Simplifiée",
    "telecommande-malvoyants": "Télécommande Malvoyants",
    sous_titres: "SOUS-TITRES",
    audiodescription: "AUDIODESCRIPTION",
    back: "RETOUR",
  },
  en: {
 title: "CHOOSE YOUR REMOTE CONTROL :",
 "telecommande-classique":  "Standard Remote Control",
 "telecommande-malentendants":  "Hearing Impaired Remote Control",
 "label-cognitive": "Simplified Remote Control",
 "telecommande-malvoyants":  "Visually Impaired Remote Control",
 back: "Back",
  sous_titres: "SUBTITLES",
  audiodescription: "AUDIO DESCRIPTION",
  back: "Back",
  },
  es: {
    title: "ELIGE TU MANDO A DISTANCIA :",
    "telecommande-classique": "Mando clásico",
    "telecommande-malentendants": "Mando auditivo",
    "label-cognitive": "Mando simplificado",
    "telecommande-malvoyants": "Mando visual adaptado",
      sous_titres: "SUBTÍTULOS",
  audiodescription: "AUDIODESCRIPCIÓN",
  back: "Volver",
  },

  ar: {
    title: "اختر جهاز التحكم عن بعد الخاص بك:",
    "telecommande-classique": "معيار",
    "telecommande-malentendants": "ضعف السمع",
    "label-cognitive": "مبسط",
    "telecommande-malvoyants": "ضعاف البصر",
      sous_titres: "الترجمة",
  audiodescription: "الوصف الصوتي",
  back: "رجوع",
  },

    bg: {
    title:  "Стандартно дистанционно управление",
    "telecommande-classique": "Дистанционно управление за хора с увреден слух",
    "telecommande-malentendants": "Опростено дистанционно управление",
    "label-cognitive": "Дистанционно управление за хора със зрителни увреждания",
    "telecommande-malvoyants":  "Дистанционно управление за хора със зрителни увреждания",
      sous_titres: "СУБТИТРИ",
  audiodescription: "АУДИООПИСАНИЕ",
  back: "Назад",
  },
  
  bs:{
  title: "IZABERI SVOJ DALJINSKI UPRAVLJAČ:",
  "telecommande-classique":"Standardni daljinski",
  "telecommande-malentendants":"Daljinski za osobe s oštećenim sluhom",
  "label-cognitive": "Pojednostavljeni daljinski",
  "telecommande-malvoyants":"Daljinski za osobe s oštećenim vidom",
  sous_titres: "TITLOVI",
  audiodescription: "AUDIODESKRIPCIJA",
  back: "Nazad",
},

  cs: {
    title: "VYBERTE SI DÁLKOVÝ OVLADAČ:",
    "telecommande-classique": "Standardní ovladač",
    "telecommande-malentendants": "Ovladač pro osoby se sluchovým postižením",
    "label-cognitive": "Zjednodušený ovladač",
    "telecommande-malvoyants":  "Ovladač pro osoby se zrakovým postižením",
    back: "Zpět",
      sous_titres: "TITULKY",
  audiodescription: "AUDIO POPIS",
  back: "Zpět",
  },

da: {
  title: "VÆLG DIN FJERNBETJENING:",
  "telecommande-classique": "Standardfjernbetjening",
  "telecommande-malentendants": "Fjernbetjening til hørehæmmede",
  "label-cognitive": "Forenklet fjernbetjening",
  "telecommande-malvoyants": "Fjernbetjening til synshæmmede",
    sous_titres: "UNDERTEKSTER",
  audiodescription: "LYDBESKRIVELSE",
  back: "Tilbage",
},

de: {
  title: "WÄHLEN SIE IHRE FERNBEDIENUNG:",
  "telecommande-classique": "Standardfernbedienung",
  "telecommande-malentendants": "Fernbedienung für Hörgeschädigte",
  "label-cognitive": "Vereinfachte Fernbedienung",
  "telecommande-malvoyants": "Fernbedienung für Sehgeschädigte",
  sous_titres: "UNTERTITEL",
  audiodescription: "AUDIODESKRIPTION",
  back: "Zurück",

},

el: {
  title: "ΕΠΙΛΕΞΤΕ ΤΟ ΤΗΛΕΧΕΙΡΙΣΤΗΡΙΟ ΣΑΣ:",
  "telecommande-classique": "Τυπικό τηλεχειριστήριο",
  "telecommande-malentendants": "Τηλεχειριστήριο για άτομα με προβλήματα ακοής",
  "label-cognitive": "Απλοποιημένο τηλεχειριστήριο",
  "telecommande-malvoyants": "Τηλεχειριστήριο για άτομα με προβλήματα όρασης",
  sous_titres: "ΥΠΟΤΙΤΛΟΙ",
  audiodescription: "ΗΧΗΤΙΚΗ ΠΕΡΙΓΡΑΦΗ",
  back: "Πίσω",
},

fa: {
  title: "ریموت کنترل خود را انتخاب کنید:",
  "telecommande-classique": "ریموت کنترل استاندارد",
  "telecommande-malentendants": "ریموت برای افراد با مشکلات شنوایی",
  "label-cognitive": "ریموت ساده‌شده",
  "telecommande-malvoyants": "ریموت برای افراد با مشکلات بینایی",
  sous_titres: "زیرنویس",
  audiodescription: "توصیف صوتی",
  back: "برگشت",
},

fi: {
  title: "VALITSE KAUKOSÄÄDIN:",
  "telecommande-classique": "Vakio kaukosäädin",
  "telecommande-malentendants": "Kaukosäädin kuulovammaisille",
  "label-cognitive": "Yksinkertaistettu kaukosäädin",
  "telecommande-malvoyants": "Kaukosäädin näkövammaisille",
  sous_titres: "TEKSTITYKSET",
  audiodescription: "AUDIOKUVAUS",
  back: "Takaisin",
},

he: {
  title: "בחר את השלט שלך:",
  "telecommande-classique": "שלט סטנדרטי",
  "telecommande-malentendants": "שלט ללקויי שמיעה",
  "label-cognitive": "שלט פשוט",
  "telecommande-malvoyants": "שלט ללקויי ראייה",
  sous_titres: "כתוביות",
  audiodescription: "תיאור קולי",
  back: "בְּחֲזָרָה",
},

hi: {
  title: "अपना रिमोट चुनें:",
  "telecommande-classique": "मानक रिमोट",
  "telecommande-malentendants": "श्रवण बाधितों के लिए रिमोट",
  "label-cognitive": "सरल रिमोट",
  "telecommande-malvoyants": "दृष्टिबाधितों के लिए रिमोट",
  sous_titres: "उपशीर्षक",
  audiodescription: "ऑडियो विवरण",
  back: "पीछे",
},

hr: {
  title: "ODABERI SVOJ DALJINSKI:",
  "telecommande-classique": "Standardni daljinski upravljač",
  "telecommande-malentendants": "Daljinski za osobe s oštećenim sluhom",
  "label-cognitive": "Pojednostavljeni daljinski upravljač",
  "telecommande-malvoyants": "Daljinski za osobe s oštećenim vidom",
  sous_titres: "TITLOVI",
  audiodescription: "AUDIODESKRIPCIJA",
  back: "Nazad",
},
hu: {
  title: "VÁLASSZA KI A TÁVIRÁNYÍTÓT:",
  "telecommande-classique": "Standard távirányító",
  "telecommande-malentendants": "Távirányító hallássérülteknek",
  "label-cognitive": "Egyszerűsített távirányító",
  "telecommande-malvoyants": "Távirányító látássérülteknek",
  sous_titres: "FELIRATOK",
  audiodescription: "HANGOS LEÍRÁS",
  back: "Vissza",
},
it: {
  title: "SCEGLI IL TUO TELECOMANDO:",
  "telecommande-classique": "Telecomando standard",
  "telecommande-malentendants": "Telecomando per ipoudenti",
  "label-cognitive": "Telecomando semplificato",
  "telecommande-malvoyants": "Telecomando per ipovedenti",
  sous_titres: "SOTTOTITOLI",
  audiodescription: "AUDIODESCRIZIONE",
  back: "Indietro",
},
ja: {
  title: "リモコンを選択してください：",
  "telecommande-classique": "標準リモコン",
  "telecommande-malentendants": "聴覚障害者用リモコン",
  "label-cognitive": "簡易リモコン",
  "telecommande-malvoyants": "視覚障害者用リモコン",
  sous_titres: "字幕",
  audiodescription: "音声解説",
  back: "戻る",
},
ko: {
  title: "리모컨을 선택하세요:",
  "telecommande-classique": "표준 리모컨",
  "telecommande-malentendants": "청각 장애인을 위한 리모컨",
  "label-cognitive": "간단한 리모컨",
  "telecommande-malvoyants": "시각 장애인을 위한 리모컨",
  sous_titres: "자막",
  audiodescription: "오디오 설명",
  back: "뒤로",
},
nl: {
  title: "KIES JE AFSTANDSBEDIENING:",
  "telecommande-classique": "Standaard afstandsbediening",
  "telecommande-malentendants": "Afstandsbediening voor slechthorenden",
  "label-cognitive": "Vereenvoudigde afstandsbediening",
  "telecommande-malvoyants": "Afstandsbediening voor slechtzienden",
  sous_titres: "ONDERTITELS",
  audiodescription: "AUDIODESCRIPTIE",
  back: "Terug",
},
no: {
  title: "VELG DIN FJERNKONTROLL:",
  "telecommande-classique": "Standard fjernkontroll",
  "telecommande-malentendants": "Fjernkontroll for hørselshemmede",
  "label-cognitive": "Forenklet fjernkontroll",
  "telecommande-malvoyants": "Fjernkontroll for synshemmede",
  sous_titres: "TEKSTING",
  audiodescription: "LYDBESKRIVELSE",
  back: "Tilbake",
},
pl: {
  title: "WYBIERZ SWÓJ PILOT:",
  "telecommande-classique": "Standardowy pilot",
  "telecommande-malentendants": "Pilot dla niedosłyszących",
  "label-cognitive": "Uproszczony pilot",
  "telecommande-malvoyants": "Pilot dla niedowidzących",
  sous_titres: "NAPISY",
  audiodescription: "AUDIOOPIS",
  back: "Wstecz",
},
pt: {
  title: "ESCOLHA O SEU CONTROLE REMOTO:",
  "telecommande-classique": "Controle remoto padrão",
  "telecommande-malentendants": "Controle remoto para deficientes auditivos",
  "label-cognitive": "Controle remoto simplificado",
  "telecommande-malvoyants": "Controle remoto para deficientes visuais",
  sous_titres: "LEGENDAS",
  audiodescription: "AUDIODESCRIÇÃO",
  back: "Voltar",
},
ro: {
  title: "ALEGE TELECOMANDA:",
  "telecommande-classique": "Telecomandă standard",
  "telecommande-malentendants": "Telecomandă pentru persoane cu deficiențe de auz",
  "label-cognitive": "Telecomandă simplificată",
  "telecommande-malvoyants": "Telecomandă pentru persoane cu deficiențe de vedere",
  sous_titres: "SUBTITRĂRI",
  audiodescription: "DESCRIERE AUDIO",
  back: "Înapoi",
},
ru: {
  title: "ВЫБЕРИТЕ СВОЙ ПУЛЬТ ДИСТАНЦИОННОГО УПРАВЛЕНИЯ:",
  "telecommande-classique": "Стандартный пульт",
  "telecommande-malentendants": "Пульт для людей с нарушением слуха",
  "label-cognitive": "Упрощённый пульт",
  "telecommande-malvoyants": "Пульт для людей с нарушением зрения",
  sous_titres: "СУБТИТРЫ",
  audiodescription: "АУДИООПИСАНИЕ",
  back: "Назад",
},
sk: {
  title: "VYBERTE SI DIAĽKOVÉ OVLÁDANIE:",
  "telecommande-classique": "Štandardné diaľkové ovládanie",
  "telecommande-malentendants": "Diaľkové ovládanie pre sluchovo postihnutých",
  "label-cognitive": "Zjednodušené diaľkové ovládanie",
  "telecommande-malvoyants": "Diaľkové ovládanie pre zrakovo postihnutých",
  sous_titres: "TITULKY",
  audiodescription: "AUDIOPOPIS",
  back: "Späť",
},
sl: {
  title: "IZBERITE SVOJ DALJINSKI UPRAVLJALNIK:",
  "telecommande-classique": "Standardni daljinski upravljalnik",
  "telecommande-malentendants": "Daljinski upravljalnik za naglušne osebe",
  "label-cognitive": "Poenostavljen daljinski upravljalnik",
  "telecommande-malvoyants": "Daljinski upravljalnik za slabovidne osebe",
  sous_titres: "PODNAPISI",
  audiodescription: "ZVOČNI OPIS",
  back: "Nazaj",
},
sr: {
  title: "ИЗАБЕРИТЕ СВОЈ ДАЉИНСКИ УПРАВЉАЧ:",
  "telecommande-classique": "Стандардни даљински управљач",
  "telecommande-malentendants": "Даљински за особе са оштећеним слухом",
  "label-cognitive": "Поједностављени даљински управљач",
  "telecommande-malvoyants": "Даљински за особе са оштећеним видом",
  sous_titres: "ТИТЛОВИ",
  audiodescription: "АУДИО ОПИС",
  back: "Назад",
},
sv: {
  title: "VÄLJ DIN FJÄRRKONTROLL:",
  "telecommande-classique": "Standardfjärrkontroll",
  "telecommande-malentendants": "Fjärrkontroll för hörselskadade",
  "label-cognitive": "Förenklad fjärrkontroll",
  "telecommande-malvoyants": "Fjärrkontroll för synskadade",
  sous_titres: "TEXTNING",
  audiodescription: "LJUDDESKRIPTION",
  back: "Tillbaka",
},
tr: {
  title: "UZAKTAN KUMANDANIZI SEÇİN:",
  "telecommande-classique": "Standart uzaktan kumanda",
  "telecommande-malentendants": "İşitme engelliler için uzaktan kumanda",
  "label-cognitive": "Basitleştirilmiş uzaktan kumanda",
  "telecommande-malvoyants": "Görme engelliler için uzaktan kumanda",
  sous_titres: "ALT YAZI",
  audiodescription: "SES AÇIKLAMASI",
  back: "Geri",
},
zh: {
  title: "请选择您的遥控器：",
  "telecommande-classique": "标准遥控器",
  "telecommande-malentendants": "听障人士遥控器",
  "label-cognitive": "简化遥控器",
  "telecommande-malvoyants": "视障人士遥控器",
  sous_titres: "字幕",
  audiodescription: "音频描述",
  back: "返回",
},

};

function applyTranslations(lang) {
  const dict = translations[lang] || translations["fr"];

  // Appliquer les traductions textuelles et l'accessibilité
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dict[key]; // Texte visible
      el.setAttribute("aria-label", dict[key]); // Pour VoiceOver
      el.setAttribute("lang", lang); // Accent correct
      if (el.tagName.toLowerCase() === "img") {
        el.setAttribute("alt", dict[key]); // Pour les images
      }
    }
  }

  // Cas spécifiques si les ID ne correspondent pas
  const retourEl = document.querySelector(".retour a");
  if (retourEl && dict.back) {
    retourEl.textContent = dict.back;
    retourEl.setAttribute("aria-label", dict.back);
    retourEl.setAttribute("lang", lang);
  }

  const subtitleEl = document.getElementById("subtitle-btn");
  if (subtitleEl && dict.sous_titres) {
    subtitleEl.textContent = dict.sous_titres;
    subtitleEl.setAttribute("aria-label", dict.sous_titres);
    subtitleEl.setAttribute("lang", lang);
  }

  const adEl = document.getElementById("audio-btn");
  if (adEl && dict.audiodescription) {
    adEl.textContent = dict.audiodescription;
    adEl.setAttribute("aria-label", dict.audiodescription);
    adEl.setAttribute("lang", lang);
  }

  // Met la langue globale pour VoiceOver
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-selector");

  // Détection de langue : localeStorage sinon navigateur, sinon fr
  let lang = localStorage.getItem("lang");
  if (!lang) {
    const browserLang = navigator.language?.split("-")[0];
    lang = translations[browserLang] ? browserLang : "fr";
    localStorage.setItem("lang", lang);
  }

  applyTranslations(lang);

  // Gestion du menu déroulant si présent
  if (selector) {
    selector.value = lang;
    selector.addEventListener("change", () => {
      const selectedLang = selector.value;
      localStorage.setItem("lang", selectedLang);
      applyTranslations(selectedLang);
    });
  }
});
