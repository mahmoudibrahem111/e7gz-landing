// E7GZ landing page — in-page EN/AR translation (Egyptian Arabic)
(function () {
  var STORAGE_KEY = "e7gz-lang";

  var AR = {
    "doc.title": "E7GZ — احجز. العب. اربح | تطبيق حجز ملاعب الكورة",
    "doc.desc":
      "E7GZ هو تطبيقك عشان تحجز ملاعب الكورة، وتنضم لمباريات، وتتواصل مع اللاعبين. سريع، سهل، وموثوق.",

    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.screenshots": "لقطات من التطبيق",
    "nav.how": "إزاي بيشتغل",
    "nav.install": "التثبيت",
    "nav.contact": "كلّمنا",
    "nav.download": "حمّل التطبيق",

    "hero.title": "احجز. العب.<br />اربح مع <span class=\"green\">E7GZ</span>",
    "hero.sub":
      "E7GZ هو تطبيقك عشان تحجز ملاعب الكورة، وتنضم لمباريات، وتتواصل مع اللاعبين. سريع، سهل، وموثوق.",
    "hero.apk": "حمّل APK للأندرويد",
    "hero.apkNote": "لفونات الأندرويد — تحميل مباشر للـ APK",
    "hero.web": "افتح تطبيق الويب",
    "hero.webNote": "للآيفن — بيفتح في Safari من غير تحميل",
    "hero.installLink": "إزاي تثبّته على موبايلك — شرح خطوة بخطوة &larr;",

    "trust.pay.t": "دفع آمن",
    "trust.pay.s": "دفع مؤمّن ومشفّر",
    "trust.instant.t": "حجز فوري",
    "trust.instant.s": "مواعيد فاضية لحظيًا",
    "trust.play.t": "العب مع أصحابك",
    "trust.play.s": "اتبع أو انضم لمباريات",

    "features.eyebrow": "المميزات",
    "features.title": "كل اللي محتاجه<br />عشان تستمتع باللعبة",
    "features.sub":
      "لو بتلعب أو بتدير الملعب، E7GZ بيديك كل الأدوات — احجز الملاعب، انضم للمباريات، وتحكّم في تجربتك، وأدر شغلك.",

    "tabs.players": "للاعبين",
    "tabs.owners": "لأصحاب الملاعب",
    "tabs.playerApp": "تطبيق اللاعب",
    "tabs.ownerApp": "تطبيق المالك",

    "feat1.title": "اكتشف الملاعب وفلترها",
    "feat1.desc":
      "اتفرّج على الملاعب القريبة منك على الخريطة، فلتر حسب نوع الملعب — 5 ضد 5، 7 ضد 7، فوتسال مغطى — قارن الأسعار، واحفظ المفضلة.",
    "feat2.title": "حجز فوري للمواعيد",
    "feat2.desc":
      "اختار ملعب، شوف المواعيد الفاضية والأسعار بالجنيه على طول، حدّد وقتك، وادفع بأمان بالكارت أو المحفظة الإلكترونية.",
    "feat3.title": "انضم أو اعمل مباراة",
    "feat3.desc":
      "لاقي مباريات مفتوحة قريبة منك، شوف الأماكن بتتملى لحظيًا، وانضم بضغطة واحدة — أو اعمل مباراتك واتكلم مع فريقك.",
    "feat4.title": "تابع حجوزاتك",
    "feat4.desc":
      "كل حجوزاتك في مكان واحد — اللي جاية والسابقة والملغاة — مع تفاصيل الملعب والمواعيد والأسعار وسجل الحجز كامل.",
    "feat5.title": "لوحة تحكم مباشرة للمالك",
    "feat5.desc":
      "إيراد اليوم وحجوزاتك والمواعيد الفاضية في نظرة واحدة — لكل ملاعبك. بدّل بين المنشآت على طول وسجّل زبائن الحضور.",
    "feat6.title": "التقويم اليومي",
    "feat6.desc":
      "كل حجز على خط زمني واضح. شوف الحجوزات والإيراد وسعر الساعة لأي يوم، وأدر المواعيد المؤكدة لكل ملعب.",
    "feat7.title": "مواعيد الشغل الأسبوعية",
    "feat7.desc":
      "حدّد مواعيد شغلك المتكررة مرة واحدة — المواعيد الجاية بتتولد أوتوماتيك. فعّل الأيام أو قفلها، وعدّل أوقات الفتح والإغلاق، وعدّل أي يوم بعدين.",
    "feat8.title": "أكتر من ملعب في تطبيق واحد",
    "feat8.desc":
      "سجّل ملاعب جديدة، زوّد صور وأسعار ومميزات، وأدر كل منشآتك من تطبيق واحد — مع حجوزات الحضور عشان كل حاجة تفضل مظبوطة.",

    "shots.eyebrow": "لقطات من التطبيق",
    "shots.title": "بص جوّه <span class=\"green\">E7GZ</span>",
    "shots.sub":
      "تطبيق واحد، تجربتين — تطبيق للّاعبين يحجزوا ويلعبوا، وتطبيق للمالكين يداروا بيه ملاعبهم.",

    "shot1.title": "اكتشف الملاعب",
    "shot1.desc":
      "لاقي ملاعب الكورة والبادل والسلة القريبة منك بمواعيد فاضية لحظيًا.",
    "shot2.title": "دوّر وفلتر",
    "shot2.desc":
      "فلتر حسب نوع الملعب، قارن الأسعار، واحفظ ملاعبك المفضلة بضغطة واحدة.",
    "shot3.title": "انضم للمباريات",
    "shot3.desc":
      "اتبع مباراتك أو انضم لمباريات مفتوحة وامتلأ الأماكن بلاعبين قريبين.",
    "shot4.title": "تابع فريقك",
    "shot4.desc":
      "شوف اللاعبين المؤكدين، اتكلم مع فريقك، وأدر مباراتك في مكان واحد.",
    "shot5.title": "احجز في ثواني",
    "shot5.desc":
      "اختار تاريخك وموعدك، شوف الأسعار المباشرة، وأكّد حجزك على طول.",
    "shot6.title": "شوف حجوزاتك",
    "shot6.desc":
      "شوف الحجوزات اللي جاية والسابقة والملغاة مع الأسعار والسجل كامل.",
    "shot7.title": "لوحة تحكم المالك",
    "shot7.desc":
      "إيراد مباشر، حجوزات اليوم، المواعيد الباقية، وكل ملاعبك — بدّل بينها بضغطة.",
    "shot8.title": "التقويم اليومي",
    "shot8.desc":
      "كل حجز على خط زمني مع إيراد اليوم وسعر الساعة — أكّد المواعيد وأدرها بسهولة.",
    "shot9.title": "مواعيد الأسبوع",
    "shot9.desc":
      "حدّد مواعيد شغل متكررة كل يوم — المواعيد بتتولد أوتوماتيك، وتقدر تعدّل أي يوم بعدين.",

    "how.eyebrow": "إزاي بيشتغل",
    "how.title": "من الحجز لبدء المباراة<br />في 4 خطوات بسيطة",

    "step1.title": "افتح وسجّل",
    "step1.desc":
      "ثبّت تطبيق الويب على موبايلك (أو حمّل APK للأندرويد) واعمل بروفايل اللاعب بتاعك في أقل من دقيقة.",
    "step2.title": "لاقي ملعبك",
    "step2.desc":
      "اتفرّج على الملاعب القريبة، شوف المرافق والتقييمات والأماكن على الخريطة.",
    "step3.title": "اختار موعد وادفع",
    "step3.desc":
      "اختار الموعد الفاضي، وادفع بأمان بالكارت أو المحفظة الإلكترونية.",
    "step4.title": "العب!",
    "step4.desc":
      "روح ولعب — أو اعمل مباراة واتبع اللاعبين يملاوا الأماكن.",

    "ostep1.title": "انشر ملعبك",
    "ostep1.desc":
      "سجّل كصاحب ملعب، زوّد صور وأسعار ومميزات — بنراجع إعلانك وبنشره.",
    "ostep2.title": "حدّد المواعيد والأسعار",
    "ostep2.desc":
      "حدّد ساعات فتحك الأسبوعية مرة واحدة — المواعيد الجاية بتتولد أوتوماتيك كل يوم.",
    "ostep3.title": "تابع الحجوزات",
    "ostep3.desc":
      "شوف كل حجز على تقويم يومي مباشر، أكّد المواعيد، وسجّل زبائن الحضور.",
    "ostep4.title": "زوّد شغلك",
    "ostep4.desc":
      "راقب إيراد اليوم وحجوزاتك والمواعيد الفاضية في نظرة واحدة — على كل ملاعبك.",

    "prices.eyebrow": "الأسعار",
    "prices.title": "أسعار تجريبية للملاعب<br />لكل ساعة",
    "prices.sub":
      "الأسعار بيحددها صاحب الملعب بالجنيه المصري وداخلها الضرائب. دي عينة من اللي هتدفعه على E7GZ:",
    "prices.unit": "ج.م / ساعة",
    "price1.type": "ملعب 5 ضد 5",
    "price1.desc": "أرضية مغطاة وإنارة ليلية — مدينة نصر، القاهرة.",
    "price2.type": "ملعب 7 ضد 7",
    "price2.desc": "ملعب عشب في الهواء الطلق مع غرف تبديل — الجيزة.",
    "price3.type": "ملعب فوتسال",
    "price3.desc": "ملعب مغطى، مثالي للعب 5 ضد 5 — المعادي.",
    "price4.type": "ملعب 11 ضد 11",
    "price4.desc": "ملعب بحجم كامل مع مدرجات — 6 أكتوبر.",
    "price5.type": "أرضية مميزة",
    "price5.desc": "أرضية صناعية بجودة FIFA، مغطاة ومكيّفة — القاهرة الجديدة.",
    "prices.note":
      "الأسعار النهائية ممكن تختلف حسب الملعب والميعاد وأوقات الذروة — ودائمًا بتتأكد في التطبيق قبل الدفع بأمان.",

    "install.eyebrow": "ثبّته على موبايلك",
    "install.title": "زوّد E7GZ على شاشة موبايلك<br />بضغطة أو اتنين",
    "install.sub":
      "تطبيق الويب بيشتغل بملء الشاشة وبدون نت — مش محتاج متجر تطبيقات. اتبع خطوات موبايلك:",
    "install.iphone": "آيفن — Safari",
    "install.ios1":
      "افتح <a href=\"https://www.e7gz.app\" target=\"_blank\" rel=\"noopener\">www.e7gz.app</a> في <strong>Safari</strong>",
    "install.ios2":
      "اضغط زر <strong>مشاركة</strong> <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"install-mini\"><path d=\"M4 12v8h16v-8\" /><path d=\"M12 16V4M8 8l4-4 4 4\" /></svg> (المربع اللي فيه سهم لأعلى)",
    "install.ios3":
      "انزل لتحت واضغط <strong>«إضافة إلى الشاشة الرئيسية»</strong> وبعدين <strong>إضافة</strong>",
    "install.iosNote":
      "E7GZ هتظهر على شاشة موبايلك وتفتح بملء الشاشة، زي أي تطبيق.",
    "install.android": "أندرويد — Chrome",
    "install.and1":
      "افتح <a href=\"https://www.e7gz.app\" target=\"_blank\" rel=\"noopener\">www.e7gz.app</a> في <strong>Chrome</strong>",
    "install.and2": "اضغط قائمة <strong>&#8942;</strong> (فوق على اليمين)",
    "install.and3":
      "اضغط <strong>«تثبيت التطبيق»</strong> (أو «إضافة إلى الشاشة الرئيسية») وبعدين <strong>تثبيت</strong>",
    "install.andNote":
      "E7GZ هتتضاف على شاشة موبايلك بأيقونتها الخاصة — افتحها زي أي تطبيق تاني.",
    "install.openWeb": "افتح تطبيق الويب (للآيفن)",
    "install.openWebNote": "بيفتح في Safari — ضيفه على شاشتك الرئيسية",
    "install.dlApk": "حمّل APK للأندرويد",
    "install.dlApkNote": "لفونات الأندرويد — ثبّت ملف الـ APK",

    "cta.title": "جاهز تلعب؟",
    "cta.sub":
      "حمّل E7GZ النهارده واحجز ماتشك الجاي في ثواني.<br />عندك أسئلة؟ كلّمنا على<br /><a href=\"mailto:e7gzsupport@gmail.com\">e7gzsupport@gmail.com</a><br /><a href=\"tel:+201155246156\">+20 115 524 6156</a>",
    "cta.apk": "حمّل APK للأندرويد",
    "cta.apkNote": "لفونات الأندرويد — تحميل مباشر للـ APK",
    "cta.web": "افتح تطبيق الويب",
    "cta.webNote": "للآيفن — بيفتح في Safari من غير تحميل",
    "cta.back": "ارجع لأعلى &uarr;",

    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.copy":
      "© 2026 E7GZ. كل الحقوق محفوظة · <a href=\"privacy.html\">سياسة الخصوصية</a> · <a href=\"terms.html\">شروط الاستخدام</a>"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) {
    el._enHtml = el.innerHTML;
  });

  var metaDesc = document.querySelector('meta[name="description"]');
  var EN_TITLE = document.title;
  var EN_DESC = metaDesc ? metaDesc.content : "";

  function apply(lang) {
    var isAr = lang === "ar";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.title = isAr ? AR["doc.title"] || EN_TITLE : EN_TITLE;
    if (metaDesc) metaDesc.content = isAr ? AR["doc.desc"] || EN_DESC : EN_DESC;

    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (isAr) {
        if (AR[key] != null) el.innerHTML = AR[key];
      } else {
        el.innerHTML = el._enHtml;
      }
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        isAr ? "Switch to English" : "تبديل اللغة إلى العربية"
      );
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  var saved = "en";
  try {
    saved = localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch (e) {}
  if (saved === "ar") apply("ar");

  var toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      apply(document.documentElement.lang === "ar" ? "en" : "ar");
    });
  }
})();
