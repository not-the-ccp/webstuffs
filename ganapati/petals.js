/* Ganapati Product No. 21 — marigold petals and the hundred-and-eight names */
(function () {
  "use strict";

  // Falling marigold petals
  var layer = document.getElementById("petals");
  var PETALS = 16;
  if (layer) {
    for (var i = 0; i < PETALS; i++) {
      var p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
      var dur = 9 + Math.random() * 14;
      p.style.animationDuration = dur + "s";
      p.style.animationDelay = (-Math.random() * dur) + "s";
      var s = 0.6 + Math.random() * 0.9;
      p.style.transform = "scale(" + s + ")";
      layer.appendChild(p);
    }
  }

  // The hundred and eight names, scrolling across the top band
  var NAMES = [
    "Ganapati", "Vinayaka", "Ekadanta", "Lambodara", "Gajakarna", "Vakratunda",
    "Kirtivarman", "Vighnaharta", "Sureshvara", "Dharmadhara", "Sthanesvara", "Pillaiyar",
    "Bala Ganapati", "Siddhivinsa", "Kamalanana", "Mandasura", "Vakdanta", "Pratham Pujya",
    "Kripanasa", "Chaturbhuja", "Mahaganapati", "Tarakeshvara", "Nagendra", "Prabhakar",
    "Raghava", "Hastinaka", "Kandarpa", "Bhagava", "Nandighosa", "Chamunda", "Rudreshvara",
    "Kamala", "Tusshara", "Vikata", "Modakavahana", "Gajakarna", "Balarama", "Jalandara",
    "Kamalaksha", "Vijaya", "Shubhakara", "Kulakala", "Mahadeva", "Kripanidhi", "Bala",
    "Chandikesha", "Tarakana", "Ganendra", "Kumara", "Aindra", "Kshiti", "Pavanaputra",
    "Suryaputra", "Chandraputra", "Agni", "Vayu", "Indra", "Kubera", "Yama", "Varuna",
    "Kala", "Mrityu", "Shiva", "Vishnu", "Brahma", "Ganesha", "Ganesh", "Ganapathy",
    "Vighneshwara", "Vighnesh", "Vignesh", "Shri Ganesh", "Bappa", "Vitthala", "Pancha Ganapati",
    "Tatpurusha", "Ganabhimana", "Siddhi Vinayaka", "Rama Vinayaka", "Chinmayachar", "Mahadev",
    "Anant", "Anadi", "Ananta", "Bhavani", "Bhairava", "Chandra", "Dakshinamoorthy", "Gajamukunda",
    "Harihara", "Ishana", "Jyeshthaka", "Kama", "Kalidasa", "Kamrupa", "Kesava", "Keshava",
    "Kodanda", "Krishna", "Lakshmana", "Mandara", "Naga", "Nara", "Narayana", "Nishkala",
    "Om", "Padmini", "Panchaakshara", "Parimala", "Pavana", "Pundarika", "Raga", "Rama",
    "Rudra", "Samudra", "Saraswati", "Seshanna", "Shanmukha", "Shankara", "Shanti", "Surya",
    "Triloka", "Uttama", "Vayu", "Vedanta", "Vidya", "Vishwesha", "Vrata", "Vrikodara",
    "Yamantaka", "Aruna", "Ganeshaya Namah"
  ];
  var band = document.getElementById("names");
  if (band) {
    var inner = document.createElement("span");
    inner.className = "sutra-inner";
    var text = NAMES.join(" \u00B7 ") + " \u00B7 ";
    inner.textContent = text + text; // duplicated for a seamless loop
    band.appendChild(inner);
  }
})();
