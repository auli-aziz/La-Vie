import Goal from "../models/goal";

export const GOALS = [
  new Goal(
    1,
    "Membakar 5 kg lemak",
    "Goal ini betujuan untuk menurunkan berat badan dan menjadi lebih atletis",
    15,
    "14 July 2023",
    "Health",
    [
      "lakukan 20 push up 3 set",
      "hindari makan fast food",
      "makan buah-buahan di pagi hari",
      "jogging keliling UI",
    ],
    [
      "bakar 1kg pada minggu pertama",
      "bakar 2kg pada minggu kedua",
      "jogging 5km",
      "bakar 2 kg pada minggu 3 dan 4",
    ],
    null,
    "yellow",
    true,
    false
  ),
  new Goal(
    2,
    "Membaca 48 Laws of Power",
    "Aku pengen belajar cara memanipulasi orang hihi",
    20,
    "16 July 2023",
    "Books",
    [
      "Membaca 15 halaman di pagi hari",
      "Membaca 30 halaman di siang hari",
      "Membaca 15 halaman di malam hari",
    ],
    [
      "Menyelesaikan BAB 1",
      "Menyelesaikan BAB 2",
      "Menyelesaikan BAB 3",
      "Menyelesaikan BAB 4",
    ],
    "law pertama paling berguna menurut aku",
    "blue",
    false,
    false
  ),
  new Goal(
    3,
    "Mendapatkan A di ulangan matematika",
    "aku punya goal ini untuk ngebanggain orang tua",
    80,
    "23 September 2023",
    "Academics",
    [
      "belajar pagi sejam mulai jam 7",
      "belajar malem dua jam mulai jam 8 malem",
    ],
    [
      "bisa mengerjakan 10 soal limit",
      "bisa mengerjakan 10 soal barisan dan deret",
      "bisa mengerjakan 10 soal turunan",
      "bisa mengerjakan 10 soal integral",
    ],
    null,
    "yellow",
    true,
    false
  ),
  new Goal(
    4,
    "Get accepted to harvard medical school",
    "I am a highschool student from California. I have a big interest in biology and i am currently learning to represent my highschool in a competition. My dream is to get accepted at Harvard and study medecine.",
    63,
    "12 August 2023",
    "Academics",
    ["study for an hour at 7 am", "prepare for next week's contest at 8 pm"],
    [
      "Perfect score on SAT",
      "1st place in iGEM",
      "1st place in ASHG National DNA Day Essay Contest",
    ],
    "don't forget to also focus on improving your interpersonal skills",
    "red",
    true,
    true
  ),
];