export interface PostProps {
  author: string;
  content: string;
  videoUrl: string;
  photoUrls: string[];
  likes: number;
  comments: number;
  date: string;
}

export const mockPosts = [
  {
    author: "Алексей Иванов",
    content: "Прогулка по осеннему парку 🍂",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    photoUrls: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2"
    ],
    likes: 128,
    comments: 14,
    date: "2024-05-10"
  },
  {
    author: "Мария Петрова",
    content: "Мой новый кофе-латте с корицей ☕",
    videoUrl: "",
    photoUrls: [
      "https://loremflickr.com/600/400?random=3",
      "https://loremflickr.com/600/400?random=4",
      "https://loremflickr.com/600/400?random=5"
    ],
    likes: 210,
    comments: 22,
    date: "2024-05-09"
  },
  {
    author: "Дмитрий Соколов",
    content: "Восхождение на холм утром — виды потрясающие!",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    photoUrls: [
      "https://loremflickr.com/600/400?random=6",
      "https://loremflickr.com/600/400?random=7"
    ],
    likes: 340,
    comments: 31,
    date: "2024-05-08"
  },
  {
    author: "Анна Козлова",
    content: "Домашний ужин с друзьями 🍝",
    videoUrl: "",
    photoUrls: [
      "https://loremflickr.com/600/400?random=8",
      "https://loremflickr.com/600/400?random=9",
      "https://loremflickr.com/600/400?random=10",
      "https://loremflickr.com/600/400?random=11"
    ],
    likes: 185,
    comments: 19,
    date: "2024-05-07"
  },
  {
    author: "Иван Смирнов",
    content: "Кот сегодня решил поработать на ноутбуке 😼",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    photoUrls: [
      "https://loremflickr.com/600/400?random=12",
      "https://loremflickr.com/600/400?random=13"
    ],
    likes: 520,
    comments: 63,
    date: "2024-05-06"
  },
  {
    author: "Екатерина Волкова",
    content: "Цветущая сакура в городе 🌸",
    videoUrl: "",
    photoUrls: [
      "https://loremflickr.com/600/400?random=14",
      "https://loremflickr.com/600/400?random=15"
    ],
    likes: 290,
    comments: 27,
    date: "2024-05-05"
  },
  {
    author: "Сергей Морозов",
    content: "Как я собрал аквариум за выходные 🐠",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    photoUrls: [
      "https://loremflickr.com/600/400?random=16",
      "https://loremflickr.com/600/400?random=17",
      "https://loremflickr.com/600/400?random=18"
    ],
    likes: 175,
    comments: 24,
    date: "2024-05-04"
  },
  {
    author: "Ольга Новикова",
    content: "Велопрогулка по набережной 🚴‍♀️",
    videoUrl: "",
    photoUrls: [
      "https://loremflickr.com/600/400?random=19",
      "https://loremflickr.com/600/400?random=20"
    ],
    likes: 230,
    comments: 18,
    date: "2024-05-03"
  },
  {
    author: "Артём Лебедев",
    content: "Тест нового объектива — результаты впечатляют!",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    photoUrls: [
      "https://loremflickr.com/600/400?random=21",
      "https://loremflickr.com/600/400?random=22",
      "https://loremflickr.com/600/400?random=23"
    ],
    likes: 410,
    comments: 45,
    date: "2024-05-02"
  },
  {
    author: "Наталья Зайцева",
    content: "Мой мини-сад на подоконнике 🌿",
    videoUrl: "",
    photoUrls: [
      "https://loremflickr.com/600/400?random=24",
      "https://loremflickr.com/600/400?random=25",
      "https://loremflickr.com/600/400?random=26",
      "https://loremflickr.com/600/400?random=27"
    ],
    likes: 165,
    comments: 12,
    date: "2024-05-01"
  }
];