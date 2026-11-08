// A scrub through the years — the boathouse congregation's record.
(function () {
  var events = [
    { year: 1920, text: "18 May 1920 — Karol Józef Wojtyła is born in Wadowice, Poland, to a father in the military and a mother who will keep his first communion book until her death." },
    { year: 1938, text: "1938 — Wojtyła graduates from the all-boys high school in Wadowice, shortly before the war breaks out." },
    { year: 1939, text: "1939–1945 — To avoid being kidnapped and sent to a German forced labour camp, he signs up for quarry and soap-factory work; the worst months he hides in a potter’s workshop by the Kraków cathedral, playing small roles in the Rhapsody Theatre." },
    { year: 1946, text: "1 November 1946 — Ordained a priest in Kraków; the same year he takes the role of Cyrano at a festival in Rzeszów." },
    { year: 1964, text: "1964 — Archbishop of Kraków; his essay Personalism Is Not an Individualism circulates among the younger theologians." },
    { year: 1978, text: "16 October 1978 — Elected pope; head of the Catholic Church and sovereign of Vatican City until 2005, the first non-Italian pope since Adrian VI and the third longest-serving after St. Peter and Pius IX." },
    { year: 2005, text: "2 April 2005 — Pope John Paul II dies at the Vatican; St. Casimir’s adds the date to the parish calendar that winter." },
    { year: 2014, text: "27 April 2014 — Canonized in Rome; the congregation at St. Casimir’s orders an extra batch of cream lemonade." },
    { year: 2016, text: "2 April 2016 — The boathouse congregation sings the Gloria from the Flanders leaf on the eleventh anniversary, then drinks the whole pint of cream out of the Gallery 4 mugs." }
  ];

  var slider = document.getElementById("year");
  var out = document.getElementById("year-out");
  var event = document.getElementById("event");
  if (!slider || !out || !event) return;

  slider.addEventListener("input", function () {
    var y = Number(slider.value);
    out.textContent = y;
    var chosen = events[0].text;
    for (var i = 0; i < events.length; i++) {
      if (events[i].year <= y) chosen = events[i].text;
    }
    event.textContent = chosen;
  });
})();
