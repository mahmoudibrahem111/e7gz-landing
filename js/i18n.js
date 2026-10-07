// E7GZ landing page — in-page EN/AR translation
(function () {
  var STORAGE_KEY = "e7gz-lang";

  var AR = {
    "doc.title": "E7GZ — احجز. العب. اربح | تطبيق حجز ملاعب القدم",
    "doc.desc":
      "E7GZ هو تطبيقك المثالي لحجز ملاعب القدم، والانضمام للمباريات، والتواصل مع اللاعبين. سريع، سهل، وموثوق.",

    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.screenshots": "لقطات الشاشة",
    "nav.how": "كيف يعمل",
    "nav.install": "التثبيت",
    "nav.contact": "تواصل معنا",
    "nav.download": "حمّل التطبيق",

    "hero.title": "احجز. العب.<br />اربح مع <span class=\"green\">E7GZ</span>",
    "hero.sub":
      "E7GZ هو تطبيقك المثالي لحجز ملاعب القدم، والانضمام للمباريات، والتواصل مع اللاعبين. سريع، سهل، وموثوق.",
    "hero.apk": "حمّل APK لأندرويد",
    "hero.apkNote": "لهواتف أندرويد — تنزيل مباشر لملف APK",
    "hero.web": "افتح تطبيق الويب",
    "hero.webNote": "لآيفن — يفتح في Safari بدون تنزيل",
    "hero.installLink": "كيف تثبّته على هاتفك — دليل خطوة بخطوة &larr;",

    "trust.pay.t": "دفع آمن",
    "trust.pay.s": "عملية دفع مؤمّنة ومشفّرة",
    "trust.instant.t": "حجز فوري",
    "trust.instant.s": "توفر لحظي للمواعيد",
    "trust.play.t": "العب معًا",
    "trust.play.s": "ادعُ أو انضم للمباريات",

    "features.eyebrow": "المميزات",
    "features.title": "كل ما تحتاجه<br />لاستمتع باللعبة",
    "features.sub":
      "سواء كنت تلعب أو تدير الملعب، يمنحك E7GZ كل الأدوات — احجز الملاعب، انضم للمباريات، وتحكّم في تجربتك، وأدر عملك.",

    "tabs.players": "للاعبين",
    "tabs.owners": "لأصحاب الملاعب",
    "tabs.playerApp": "تطبيق اللاعب",
    "tabs.ownerApp": "تطبيق المالك",

    "feat1.title": "اكتشف الملاعب وفلترها",
    "feat1.desc":
      "تصفّح الملاعب القريبة منك على الخريطة، وفلتر حسب نوع الملعب — 5 ضد 5، 7 ضد 7، فوتسال مغطى — قارن الأسعار، واحفظ المفضلة.",
    "feat2.title": "حجز فوري للمواعيد",
    "feat2.desc":
      "اختر ملعب، وشاهد التوفر اللحظي بأسعار مباشرة بالجنيه، حدد وقتك، وادفع بأمان بالبطاقات أو المحافظ الإلكترونية.",
    "feat3.title": "انضم أو أنشئ مباراة",
    "feat3.desc":
      "اعثر على مباريات مفتوحة قريبة منك، وشاهد الأماكن وهي تمتلئ لحظيًا، وانضم بضغطة واحدة — أو أنشئ مباراتك وتحدّث مع فريقك.",
    "feat4.title": "تابع حجوزاتك",
    "feat4.desc":
      "كل حجوزاتك في مكان واحد — القادمة والسابقة والملغاة — مع تفاصيل الملعب والمواعيد والأسعار وسجل الحجز الكامل.",
    "feat5.title": "لوحة تحكم المالك المباشرة",
    "feat5.desc":
      "إيراد اليوم وحجوزاتك والمواعيد الفاضية في نظرة واحدة — لكل ملاعبك. بدّل بين المنشآت فورًا وسجّل زبائن الحضور.",
    "feat6.title": "التقويم اليومي",
    "feat6.desc":
      "كل حجز على خط زمني واضح. شاهد الحجوزات والإيراد وسعر الساعة لأي يوم، وأدر المواعيد المؤكدة لكل ملعب.",
    "feat7.title": "قالب الساعات الأسبوعي",
    "feat7.desc":
      "حدّد ساعات العمل المتكررة مرة واحدة — المواعيد القادمة تتولّد تلقائيًا. فعّل الأيام أو أوقفها، وعدّل أوقات الفتح والإغلاق، وعدّل أي يوم لاحقًا.",
    "feat8.title": "إدارة متعددة للملاعب",
    "feat8.desc":
      "سجّل ملاعب جديدة، وأضف صورًا وأسعارًا ومميزات، وأدر كل منشآتك من تطبيق واحد — مع حجوزات الحضور المباشر ليبقى كل شيء دقيقًا.",

    "shots.eyebrow": "لقطات الشاشة",
    "shots.title": "ألقي نظرة داخل <span class=\"green\">E7GZ</span>",
    "shots.sub":
      "تطبيق واحد، تجربتان — تطبيق للاعبين للحجز واللعب، وتطبيق للمالكين لإدارة ملاعبك.",

    "shot1.title": "اكتشف الملاعب",
    "shot1.desc":
      "اعثر على ملاعب كرة القدم والبادل والسلة القريبة منك مع توفر لحظي.",
    "shot2.title": "تصفّح وفلتر",
    "shot2.desc":
      "فلتر حسب نوع الملعب، وقارن الأسعار، واحفظ ملاعبك المفضلة بضغطة واحدة.",
    "shot3.title": "انضم للمباريات",
    "shot3.desc":
      "استضِف مباراتك أو انضم لمباريات مفتوحة واملأ الأماكن بلاعبين قريبين.",
    "shot4.title": "أدِر فريقك",
    "shot4.desc":
      "تابع اللاعبين المؤكدين، وتحدّث مع فريقك، وأدر مباراتك في مكان واحد.",
    "shot5.title": "احجز في ثواني",
    "shot5.desc":
      "حدّد تاريخك وموعدك، وشاهد الأسعار المباشرة، وأكّد حجزك فورًا.",
    "shot6.title": "تابع الحجوزات",
    "shot6.desc":
      "شاهد الحجوزات القادمة والسابقة والملغاة مع الأسعار والسجل الكامل.",
    "shot7.title": "لوحة تحكم المالك",
    "shot7.desc":
      "إيراد مباشر، وحجوزات اليوم، والمواعيد الباقية، وكل ملاعبك — بدّل بينها بضغطة واحدة.",
    "shot8.title": "التقويم اليومي",
    "shot8.desc":
      "كل حجز على خط زمني مع إيراد اليوم وسعر الساعة — أكّد المواعيد وأدرها بسهولة.",
    "shot9.title": "الساعات الأسبوعية",
    "shot9.desc":
      "حدّد ساعات عمل متكررة كل يوم — المواعيد تتولّد تلقائيًا، ويمكنك تعديل أي يوم لاحقًا.",

    "how.eyebrow": "كيف يعمل",
    "how.title": "من الحجز إلى انطلاق المباراة<br />في 4 خطوات بسيطة",

    "step1.title": "افتح وسجّل",
    "step1.desc":
      "ثبّت تطبيق الويب على هاتفك (أو حمّل APK لأندرويد) وأنشئ ملفك اللاعب في أقل من دقيقة.",
    "step2.title": "اعثر على ملعبك",
    "step2.desc":
      "تصفّح الملاعب القريبة، وشاهد المرافق والتقييمات والمواقع على الخريطة.",
    "step3.title": "اختر موعدًا وادفع",
    "step3.desc":
      "اختر الموعد المتاح، وادفع بأمان بالبطاقة أو المحفظة الإلكترونية.",
    "step4.title": "العب!",
    "step4.desc":
      "احضر ولعب — أو أنشئ مباراة وادعُ اللاعبين لملء الأماكن.",

    "ostep1.title": "انشر ملعبك",
    "ostep1.desc":
      "سجّل كمالك، وأضف الصور والأسعار والمرافق — نراجع إعلانك وننشره.",
    "ostep2.title": "حدّد الساعات والأسعار",
    "ostep2.desc":
      "حدّد ساعات فتحك الأسبوعية مرة واحدة — المواعيد القادمة تتولّد تلقائيًا كل يوم.",
    "ostep3.title": "أدِر الحجوزات",
    "ostep3.desc":
      "تابع كل حجز على تقويم يومي مباشر، وأكّد المواعيد، وسجّل زبائن الحضور المباشر.",
    "ostep4.title": "طوّر عملك",
    "ostep4.desc":
      "راقب إيراد اليوم وحجوزاتك والمواعيد الفاضية في نظرة واحدة — على كل ملاعبك.",

    "prices.eyebrow": "الأسعار",
    "prices.title": "أسعار تجريبية للملاعب<br />لكل ساعة",
    "prices.sub":
      "الأسعار يحدّدها صاحب الملعب بالجنيه المصري وتشمل الضرائب المطبّقة. هذه عينة مما ستدفعه على E7GZ:",
    "prices.unit": "ج.م / ساعة",
    "price1.type": "ملعب 5 ضد 5",
    "price1.desc": "أرضية مغطاة وإنارة ليلية — مدينة نصر، القاهرة.",
    "price2.type": "ملعب 7 ضد 7",
    "price2.desc": "ملعب عشبي في الهواء الطلق مع غرف تبديل — الجيزة.",
    "price3.type": "ملعب فوتسال",
    "price3.desc": "ملعب صلب مغطى، مثالي للعب 5 ضد 5 — المعادي.",
    "price4.type": "ملعب 11 ضد 11",
    "price4.desc": "ملعب بحجم كامل مع مدرجات — السادس من أكتوبر.",
    "price5.type": "أرضية مميزة",
    "price5.desc": "أرضية اصطناعية بجودة FIFA، مغطاة ومكيّفة — القاهرة الجديدة.",
    "prices.note":
      "قد تختلف الأسعار النهائية حسب الملعب وموعد الحجز وأوقات الذروة — ويتم تأكيدها دائمًا في التطبيق قبل الدفع بأمان.",

    "install.eyebrow": "ثبّته على هاتفك",
    "install.title": "أضف E7GZ إلى شاشتك الرئيسية<br />بضع ضغطات",
    "install.sub":
      "تطبيق الويب يعمل بملء الشاشة وبدون إنترنت — لا حاجة لمتجر تطبيقات. اتبع خطوات هاتفك:",
    "install.iphone": "آيفن — Safari",
    "install.ios1":
      "افتح <a href=\"https://www.e7gz.app\" target=\"_blank\" rel=\"noopener\">www.e7gz.app</a> في <strong>Safari</strong>",
    "install.ios2":
      "اضغط زر <strong>مشاركة</strong> <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"install-mini\"><path d=\"M4 12v8h16v-8\" /><path d=\"M12 16V4M8 8l4-4 4 4\" /></svg> (المربع الذي يحمل سهمًا لأعلى)",
    "install.ios3":
      "مرر للأسفل واضغط <strong>«إضافة إلى الشاشة الرئيسية»</strong> ثم <strong>إضافة</strong>",
    "install.iosNote":
      "يظهر E7GZ على شاشتك الرئيسية ويفتح بملء الشاشة، تمامًا مثل أي تطبيق.",
    "install.android": "أندرويد — Chrome",
    "install.and1":
      "افتح <a href=\"https://www.e7gz.app\" target=\"_blank\" rel=\"noopener\">www.e7gz.app</a> في <strong>Chrome</strong>",
    "install.and2": "اضغط قائمة <strong>&#8942;</strong> (في الزاوية العلوية اليمنى)",
    "install.and3":
      "اضغط <strong>«تثبيت التطبيق»</strong> (أو «إضافة إلى الشاشة الرئيسية») ثم <strong>تثبيت</strong>",
    "install.andNote":
      "يُضاف E7GZ إلى شاشتك الرئيسية بأيقونته الخاصة — افتحه مثل أي تطبيق آخر.",
    "install.openWeb": "افتح تطبيق الويب (لآيفن)",
    "install.openWebNote": "يفتح في Safari — أضفه إلى شاشتك الرئيسية",
    "install.dlApk": "حمّل APK لأندرويد",
    "install.dlApkNote": "لهواتف أندرويد — ثبّت ملف APK",

    "cta.title": "جاهز للعب؟",
    "cta.sub":
      "حمّل E7GZ اليوم واحجز ماتشك القادم في ثواني.<br />لديك أسئلة؟ تواصل معنا عبر<br /><a href=\"mailto:e7gzsupport@gmail.com\">e7gzsupport@gmail.com</a><br /><a href=\"tel:+201155246156\">+20 115 524 6156</a>",
    "cta.apk": "حمّل APK لأندرويد",
    "cta.apkNote": "لهواتف أندرويد — تنزيل مباشر لملف APK",
    "cta.web": "افتح تطبيق الويب",
    "cta.webNote": "لآيفن — يفتح في Safari بدون تنزيل",
    "cta.back": "العودة إلى الأعلى &uarr;",

    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.copy":
      "© 2026 E7GZ. جميع الحقوق محفوظة · <a href=\"privacy.html\">سياسة الخصوصية</a> · <a href=\"terms.html\">شروط الاستخدام</a>"
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
