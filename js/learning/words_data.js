const wordList = [
  // ------------------------------------------------------------------
  // 카테고리: 가족 (Family) - ID 1~15
  // ------------------------------------------------------------------
  {
    word_id: 1,
    category: "가족",
    japanese_word: "父",
    reading: "ちち",
    pronunciation: "[치치]",
    korean_meaning: "아버지",
    english_meaning: "father"
  },
  {
    word_id: 2,
    category: "가족",
    japanese_word: "母",
    reading: "はは",
    pronunciation: "[하하]",
    korean_meaning: "어머니",
    english_meaning: "mother"
  },
  {
    word_id: 3,
    category: "가족",
    japanese_word: "兄",
    reading: "あに",
    pronunciation: "[아니]",
    korean_meaning: "형/오빠",
    english_meaning: "older brother"
  },
  {
    word_id: 4,
    category: "가족",
    japanese_word: "姉",
    reading: "あね",
    pronunciation: "[아네]",
    korean_meaning: "누나/언니",
    english_meaning: "older sister"
  },
  {
    word_id: 5,
    category: "가족",
    japanese_word: "弟",
    reading: "おとうと",
    pronunciation: "[오토-토]",
    korean_meaning: "남동생",
    english_meaning: "younger brother"
  },
  {
    word_id: 6,
    category: "가족",
    japanese_word: "妹",
    reading: "いもうと",
    pronunciation: "[이모-토]",
    korean_meaning: "여동생",
    english_meaning: "younger sister"
  },
  {
    word_id: 7,
    category: "가족",
    japanese_word: "祖父",
    reading: "そふ",
    pronunciation: "[소후]",
    korean_meaning: "할아버지",
    english_meaning: "grandfather"
  },
  {
    word_id: 8,
    category: "가족",
    japanese_word: "祖母",
    reading: "そぼ",
    pronunciation: "[소보]",
    korean_meaning: "할머니",
    english_meaning: "grandmother"
  },
  {
    word_id: 9,
    category: "가족",
    japanese_word: "息子",
    reading: "むすこ",
    pronunciation: "[무스코]",
    korean_meaning: "아들",
    english_meaning: "son"
  },
  {
    word_id: 10,
    category: "가족",
    japanese_word: "娘",
    reading: "むすめ",
    pronunciation: "[무스메]",
    korean_meaning: "딸",
    english_meaning: "daughter"
  },
  {
    word_id: 11,
    category: "가족",
    japanese_word: "夫",
    reading: "おっと",
    pronunciation: "[옷토]",
    korean_meaning: "남편",
    english_meaning: "husband"
  },
  {
    word_id: 12,
    category: "가족",
    japanese_word: "妻",
    reading: "つま",
    pronunciation: "[츠마]",
    korean_meaning: "아내",
    english_meaning: "wife"
  },
  {
    word_id: 13,
    category: "가족",
    japanese_word: "両親",
    reading: "りょうしん",
    pronunciation: "[료-신]",
    korean_meaning: "부모님",
    english_meaning: "parents"
  },
  {
    word_id: 14,
    category: "가족",
    japanese_word: "家族",
    reading: "かぞく",
    pronunciation: "[카조쿠]",
    korean_meaning: "가족",
    english_meaning: "family"
  },
  {
    word_id: 15,
    category: "가족",
    japanese_word: "親戚",
    reading: "しんせき",
    pronunciation: "[신세키]",
    korean_meaning: "친척",
    english_meaning: "relatives"
  },
  // ------------------------------------------------------------------
  // 카테고리: 음식 (Food) - ID 16~30
  // ------------------------------------------------------------------
  {
    word_id: 16,
    category: "음식",
    japanese_word: "食べ物",
    reading: "たべもの",
    pronunciation: "[타베모노]",
    korean_meaning: "음식",
    english_meaning: "food"
  },
  {
    word_id: 17,
    category: "음식",
    japanese_word: "ご飯",
    reading: "ごはん",
    pronunciation: "[고한]",
    korean_meaning: "밥",
    english_meaning: "rice"
  },
  {
    word_id: 18,
    category: "음식",
    japanese_word: "パン",
    reading: "ぱん",
    pronunciation: "[팡]",
    korean_meaning: "빵",
    english_meaning: "bread"
  },
  {
    word_id: 19,
    category: "음식",
    japanese_word: "肉",
    reading: "にく",
    pronunciation: "[니쿠]",
    korean_meaning: "고기",
    english_meaning: "meat"
  },
  {
    word_id: 20,
    category: "음식",
    japanese_word: "魚",
    reading: "さかな",
    pronunciation: "[사카나]",
    korean_meaning: "생선",
    english_meaning: "fish"
  },
  {
    word_id: 21,
    category: "음식",
    japanese_word: "野菜",
    reading: "やさい",
    pronunciation: "[야사이]",
    korean_meaning: "야채",
    english_meaning: "vegetables"
  },
  {
    word_id: 22,
    category: "음식",
    japanese_word: "果物",
    reading: "くだもの",
    pronunciation: "[쿠다모노]",
    korean_meaning: "과일",
    english_meaning: "fruit"
  },
  {
    word_id: 23,
    category: "음식",
    japanese_word: "水",
    reading: "みず",
    pronunciation: "[미즈]",
    korean_meaning: "물",
    english_meaning: "water"
  },
  {
    word_id: 24,
    category: "음식",
    japanese_word: "お茶",
    reading: "おちゃ",
    pronunciation: "[오챠]",
    korean_meaning: "차",
    english_meaning: "tea"
  },
  {
    word_id: 25,
    category: "음식",
    japanese_word: "コーヒー",
    reading: "こーひー",
    pronunciation: "[코-히-]",
    korean_meaning: "커피",
    english_meaning: "coffee"
  },
  {
    word_id: 26,
    category: "음식",
    japanese_word: "牛乳",
    reading: "ぎゅうにゅう",
    pronunciation: "[규-뉴-]",
    korean_meaning: "우유",
    english_meaning: "milk"
  },
  {
    word_id: 27,
    category: "음식",
    japanese_word: "卵",
    reading: "たまご",
    pronunciation: "[타마고]",
    korean_meaning: "계란",
    english_meaning: "egg"
  },
  {
    word_id: 28,
    category: "음식",
    japanese_word: "砂糖",
    reading: "さとう",
    pronunciation: "[사토-]",
    korean_meaning: "설탕",
    english_meaning: "sugar"
  },
  {
    word_id: 29,
    category: "음식",
    japanese_word: "塩",
    reading: "しお",
    pronunciation: "[시오]",
    korean_meaning: "소금",
    english_meaning: "salt"
  },
  {
    word_id: 30,
    category: "음식",
    japanese_word: "醤油",
    reading: "しょうゆ",
    pronunciation: "[쇼-유]",
    korean_meaning: "간장",
    english_meaning: "soy sauce"
  },
  // ------------------------------------------------------------------
  // 카테고리: 동물 (Animals) - ID 31~45
  // ------------------------------------------------------------------
  {
    word_id: 31,
    category: "동물",
    japanese_word: "犬",
    reading: "いぬ",
    pronunciation: "[이누]",
    korean_meaning: "개",
    english_meaning: "dog"
  },
  {
    word_id: 32,
    category: "동물",
    japanese_word: "猫",
    reading: "ねこ",
    pronunciation: "[네코]",
    korean_meaning: "고양이",
    english_meaning: "cat"
  },
  {
    word_id: 33,
    category: "동물",
    japanese_word: "鳥",
    reading: "とり",
    pronunciation: "[토리]",
    korean_meaning: "새",
    english_meaning: "bird"
  },
  {
    word_id: 34,
    category: "동물",
    japanese_word: "魚",
    reading: "さかな",
    pronunciation: "[사카나]",
    korean_meaning: "물고기",
    english_meaning: "fish"
  },
  {
    word_id: 35,
    category: "동물",
    japanese_word: "馬",
    reading: "うま",
    pronunciation: "[우마]",
    korean_meaning: "말",
    english_meaning: "horse"
  },
  {
    word_id: 36,
    category: "동물",
    japanese_word: "牛",
    reading: "うし",
    pronunciation: "[우시]",
    korean_meaning: "소",
    english_meaning: "cow"
  },
  {
    word_id: 37,
    category: "동물",
    japanese_word: "豚",
    reading: "ぶた",
    pronunciation: "[부타]",
    korean_meaning: "돼지",
    english_meaning: "pig"
  },
  {
    word_id: 38,
    category: "동물",
    japanese_word: "羊",
    reading: "ひつじ",
    pronunciation: "[히츠지]",
    korean_meaning: "양",
    english_meaning: "sheep"
  },
  {
    word_id: 39,
    category: "동물",
    japanese_word: "鶏",
    reading: "にわとり",
    pronunciation: "[니와토리]",
    korean_meaning: "닭",
    english_meaning: "chicken"
  },
  {
    word_id: 40,
    category: "동물",
    japanese_word: "象",
    reading: "ぞう",
    pronunciation: "[조-]",
    korean_meaning: "코끼리",
    english_meaning: "elephant"
  },
  {
    word_id: 41,
    category: "동물",
    japanese_word: "ライオン",
    reading: "らいおん",
    pronunciation: "[라이온]",
    korean_meaning: "사자",
    english_meaning: "lion"
  },
  {
    word_id: 42,
    category: "동물",
    japanese_word: "虎",
    reading: "とら",
    pronunciation: "[토라]",
    korean_meaning: "호랑이",
    english_meaning: "tiger"
  },
  {
    word_id: 43,
    category: "동물",
    japanese_word: "熊",
    reading: "くま",
    pronunciation: "[쿠마]",
    korean_meaning: "곰",
    english_meaning: "bear"
  },
  {
    word_id: 44,
    category: "동물",
    japanese_word: "猿",
    reading: "さる",
    pronunciation: "[사루]",
    korean_meaning: "원숭이",
    english_meaning: "monkey"
  },
  {
    word_id: 45,
    category: "동물",
    japanese_word: "兎",
    reading: "うさぎ",
    pronunciation: "[우사기]",
    korean_meaning: "토끼",
    english_meaning: "rabbit"
  },
  // ------------------------------------------------------------------
  // 카테고리: 색깔 (Colors) - ID 46~60
  // ------------------------------------------------------------------
  {
    word_id: 46,
    category: "색깔",
    japanese_word: "赤",
    reading: "あか",
    pronunciation: "[아카]",
    korean_meaning: "빨강",
    english_meaning: "red"
  },
  {
    word_id: 47,
    category: "색깔",
    japanese_word: "青",
    reading: "あお",
    pronunciation: "[아오]",
    korean_meaning: "파랑",
    english_meaning: "blue"
  },
  {
    word_id: 48,
    category: "색깔",
    japanese_word: "黄色",
    reading: "きいろ",
    pronunciation: "[키이로]",
    korean_meaning: "노랑",
    english_meaning: "yellow"
  },
  {
    word_id: 49,
    category: "색깔",
    japanese_word: "緑",
    reading: "みどり",
    pronunciation: "[미도리]",
    korean_meaning: "초록",
    english_meaning: "green"
  },
  {
    word_id: 50,
    category: "색깔",
    japanese_word: "黒",
    reading: "くろ",
    pronunciation: "[쿠로]",
    korean_meaning: "검정",
    english_meaning: "black"
  },
  {
    word_id: 51,
    category: "색깔",
    japanese_word: "白",
    reading: "しろ",
    pronunciation: "[시로]",
    korean_meaning: "흰색",
    english_meaning: "white"
  },
  {
    word_id: 52,
    category: "색깔",
    japanese_word: "茶色",
    reading: "ちゃいろ",
    pronunciation: "[챠이로]",
    korean_meaning: "갈색",
    english_meaning: "brown"
  },
  {
    word_id: 53,
    category: "색깔",
    japanese_word: "紫",
    reading: "むらさき",
    pronunciation: "[무라사키]",
    korean_meaning: "보라색",
    english_meaning: "purple"
  },
  {
    word_id: 54,
    category: "색깔",
    japanese_word: "ピンク",
    reading: "ぴんく",
    pronunciation: "[핑크]",
    korean_meaning: "분홍색",
    english_meaning: "pink"
  },
  {
    word_id: 55,
    category: "색깔",
    japanese_word: "オレンジ",
    reading: "おれんじ",
    pronunciation: "[오렌지]",
    korean_meaning: "주황색",
    english_meaning: "orange"
  },
  {
    word_id: 56,
    category: "색깔",
    japanese_word: "灰色",
    reading: "はいいろ",
    pronunciation: "[하이이로]",
    korean_meaning: "회색",
    english_meaning: "gray"
  },
  {
    word_id: 57,
    category: "색깔",
    japanese_word: "金",
    reading: "きん",
    pronunciation: "[킨]",
    korean_meaning: "금색",
    english_meaning: "gold"
  },
  {
    word_id: 58,
    category: "색깔",
    japanese_word: "銀",
    reading: "ぎん",
    pronunciation: "[긴]",
    korean_meaning: "은색",
    english_meaning: "silver"
  },
  {
    word_id: 59,
    category: "색깔",
    japanese_word: "色",
    reading: "いろ",
    pronunciation: "[이로]",
    korean_meaning: "색",
    english_meaning: "color"
  },
  {
    word_id: 60,
    category: "색깔",
    japanese_word: "明るい",
    reading: "あかるい",
    pronunciation: "[아카루이]",
    korean_meaning: "밝다",
    english_meaning: "bright"
  },
  // ------------------------------------------------------------------
  // 카테고리: 숫자 (Numbers) - ID 61~75
  // ------------------------------------------------------------------
  {
    word_id: 61,
    category: "숫자",
    japanese_word: "一",
    reading: "いち",
    pronunciation: "[이치]",
    korean_meaning: "일/하나",
    english_meaning: "one"
  },
  {
    word_id: 62,
    category: "숫자",
    japanese_word: "二",
    reading: "に",
    pronunciation: "[니]",
    korean_meaning: "이/둘",
    english_meaning: "two"
  },
  {
    word_id: 63,
    category: "숫자",
    japanese_word: "三",
    reading: "さん",
    pronunciation: "[산]",
    korean_meaning: "삼/셋",
    english_meaning: "three"
  },
  {
    word_id: 64,
    category: "숫자",
    japanese_word: "四",
    reading: "よん",
    pronunciation: "[욘]",
    korean_meaning: "사/넷",
    english_meaning: "four"
  },
  {
    word_id: 65,
    category: "숫자",
    japanese_word: "五",
    reading: "ご",
    pronunciation: "[고]",
    korean_meaning: "오/다섯",
    english_meaning: "five"
  },
  {
    word_id: 66,
    category: "숫자",
    japanese_word: "六",
    reading: "ろく",
    pronunciation: "[로쿠]",
    korean_meaning: "육/여섯",
    english_meaning: "six"
  },
  {
    word_id: 67,
    category: "숫자",
    japanese_word: "七",
    reading: "なな",
    pronunciation: "[나나]",
    korean_meaning: "칠/일곱",
    english_meaning: "seven"
  },
  {
    word_id: 68,
    category: "숫자",
    japanese_word: "八",
    reading: "はち",
    pronunciation: "[하치]",
    korean_meaning: "팔/여덟",
    english_meaning: "eight"
  },
  {
    word_id: 69,
    category: "숫자",
    japanese_word: "九",
    reading: "きゅう",
    pronunciation: "[큐-]",
    korean_meaning: "구/아홉",
    english_meaning: "nine"
  },
  {
    word_id: 70,
    category: "숫자",
    japanese_word: "十",
    reading: "じゅう",
    pronunciation: "[쥬-]",
    korean_meaning: "십/열",
    english_meaning: "ten"
  },
  {
    word_id: 71,
    category: "숫자",
    japanese_word: "百",
    reading: "ひゃく",
    pronunciation: "[햐쿠]",
    korean_meaning: "백",
    english_meaning: "hundred"
  },
  {
    word_id: 72,
    category: "숫자",
    japanese_word: "千",
    reading: "せん",
    pronunciation: "[센]",
    korean_meaning: "천",
    english_meaning: "thousand"
  },
  {
    word_id: 73,
    category: "숫자",
    japanese_word: "万",
    reading: "まん",
    pronunciation: "[만]",
    korean_meaning: "만",
    english_meaning: "ten thousand"
  },
  {
    word_id: 74,
    category: "숫자",
    japanese_word: "数",
    reading: "かず",
    pronunciation: "[카즈]",
    korean_meaning: "수/숫자",
    english_meaning: "number"
  },
  {
    word_id: 75,
    category: "숫자",
    japanese_word: "番号",
    reading: "ばんごう",
    pronunciation: "[반고-]",
    korean_meaning: "번호",
    english_meaning: "number (code)"
  },
  // ------------------------------------------------------------------
  // 카테고리: 시간 (Time) - ID 76~90
  // ------------------------------------------------------------------
  {
    word_id: 76,
    category: "시간",
    japanese_word: "時間",
    reading: "じかん",
    pronunciation: "[지칸]",
    korean_meaning: "시간",
    english_meaning: "time"
  },
  {
    word_id: 77,
    category: "시간",
    japanese_word: "分",
    reading: "ふん",
    pronunciation: "[훈/푼]",
    korean_meaning: "분",
    english_meaning: "minute"
  },
  {
    word_id: 78,
    category: "시간",
    japanese_word: "秒",
    reading: "びょう",
    pronunciation: "[뵤-]",
    korean_meaning: "초",
    english_meaning: "second"
  },
  {
    word_id: 79,
    category: "시간",
    japanese_word: "時",
    reading: "じ",
    pronunciation: "[지]",
    korean_meaning: "시",
    english_meaning: "hour"
  },
  {
    word_id: 80,
    category: "시간",
    japanese_word: "日",
    reading: "ひ",
    pronunciation: "[히]",
    korean_meaning: "날/일",
    english_meaning: "day"
  },
  {
    word_id: 81,
    category: "시간",
    japanese_word: "週",
    reading: "しゅう",
    pronunciation: "[슈-]",
    korean_meaning: "주",
    english_meaning: "week"
  },
  {
    word_id: 82,
    category: "시간",
    japanese_word: "月",
    reading: "つき",
    pronunciation: "[츠키]",
    korean_meaning: "달/월",
    english_meaning: "moon/month"
  },
  {
    word_id: 83,
    category: "시간",
    japanese_word: "年",
    reading: "とし",
    pronunciation: "[토시]",
    korean_meaning: "해/년",
    english_meaning: "year"
  },
  {
    word_id: 84,
    category: "시간",
    japanese_word: "今日",
    reading: "きょう",
    pronunciation: "[쿄-]",
    korean_meaning: "오늘",
    english_meaning: "today"
  },
  {
    word_id: 85,
    category: "시간",
    japanese_word: "昨日",
    reading: "きのう",
    pronunciation: "[키노-]",
    korean_meaning: "어제",
    english_meaning: "yesterday"
  },
  {
    word_id: 86,
    category: "시간",
    japanese_word: "明日",
    reading: "あした",
    pronunciation: "[아시타]",
    korean_meaning: "내일",
    english_meaning: "tomorrow"
  },
  {
    word_id: 87,
    category: "시간",
    japanese_word: "朝",
    reading: "あさ",
    pronunciation: "[아사]",
    korean_meaning: "아침",
    english_meaning: "morning"
  },
  {
    word_id: 88,
    category: "시간",
    japanese_word: "昼",
    reading: "ひる",
    pronunciation: "[히루]",
    korean_meaning: "점심/낮",
    english_meaning: "noon"
  },
  {
    word_id: 89,
    category: "시간",
    japanese_word: "夜",
    reading: "よる",
    pronunciation: "[요루]",
    korean_meaning: "밤",
    english_meaning: "night"
  },
  {
    word_id: 90,
    category: "시간",
    japanese_word: "時計",
    reading: "とけい",
    pronunciation: "[토케이]",
    korean_meaning: "시계",
    english_meaning: "watch"
  },
  // ------------------------------------------------------------------
  // 카테고리: 날씨 (Weather) - ID 91~105
  // ------------------------------------------------------------------
  {
    word_id: 91,
    category: "날씨",
    japanese_word: "天気",
    reading: "てんき",
    pronunciation: "[텐키]",
    korean_meaning: "날씨",
    english_meaning: "weather"
  },
  {
    word_id: 92,
    category: "날씨",
    japanese_word: "晴れ",
    reading: "はれ",
    pronunciation: "[하레]",
    korean_meaning: "맑음",
    english_meaning: "sunny"
  },
  {
    word_id: 93,
    category: "날씨",
    japanese_word: "雨",
    reading: "あめ",
    pronunciation: "[아메]",
    korean_meaning: "비",
    english_meaning: "rain"
  },
  {
    word_id: 94,
    category: "날씨",
    japanese_word: "雪",
    reading: "ゆき",
    pronunciation: "[유키]",
    korean_meaning: "눈",
    english_meaning: "snow"
  },
  {
    word_id: 95,
    category: "날씨",
    japanese_word: "曇り",
    reading: "くもり",
    pronunciation: "[쿠모리]",
    korean_meaning: "흐림",
    english_meaning: "cloudy"
  },
  {
    word_id: 96,
    category: "날씨",
    japanese_word: "風",
    reading: "かぜ",
    pronunciation: "[카제]",
    korean_meaning: "바람",
    english_meaning: "wind"
  },
  {
    word_id: 97,
    category: "날씨",
    japanese_word: "暑い",
    reading: "あつい",
    pronunciation: "[아츠이]",
    korean_meaning: "덥다",
    english_meaning: "hot"
  },
  {
    word_id: 98,
    category: "날씨",
    japanese_word: "寒い",
    reading: "さむい",
    pronunciation: "[사무이]",
    korean_meaning: "춥다",
    english_meaning: "cold"
  },
  {
    word_id: 99,
    category: "날씨",
    japanese_word: "暖かい",
    reading: "あたたかい",
    pronunciation: "[아타타카이]",
    korean_meaning: "따뜻하다",
    english_meaning: "warm"
  },
  {
    word_id: 100,
    category: "날씨",
    japanese_word: "涼しい",
    reading: "すずしい",
    pronunciation: "[스즈시-]",
    korean_meaning: "시원하다",
    english_meaning: "cool"
  },
  {
    word_id: 101,
    category: "날씨",
    japanese_word: "湿度",
    reading: "しつど",
    pronunciation: "[시츠도]",
    korean_meaning: "습도",
    english_meaning: "humidity"
  },
  {
    word_id: 102,
    category: "날씨",
    japanese_word: "気温",
    reading: "きおん",
    pronunciation: "[키온]",
    korean_meaning: "기온",
    english_meaning: "temperature"
  },
  {
    word_id: 103,
    category: "날씨",
    japanese_word: "台風",
    reading: "たいふう",
    pronunciation: "[타이후-]",
    korean_meaning: "태풍",
    english_meaning: "typhoon"
  },
  {
    word_id: 104,
    category: "날씨",
    japanese_word: "雷",
    reading: "かみなり",
    pronunciation: "[카미나리]",
    korean_meaning: "천둥/번개",
    english_meaning: "thunder"
  },
  {
    word_id: 105,
    category: "날씨",
    japanese_word: "霧",
    reading: "きり",
    pronunciation: "[키리]",
    korean_meaning: "안개",
    english_meaning: "fog"
  },
  // ------------------------------------------------------------------
  // 카테고리: 교통 (Transport) - ID 106~120
  // ------------------------------------------------------------------
  {
    word_id: 106,
    category: "교통",
    japanese_word: "車",
    reading: "くるま",
    pronunciation: "[쿠루마]",
    korean_meaning: "자동차",
    english_meaning: "car"
  },
  {
    word_id: 107,
    category: "교통",
    japanese_word: "電車",
    reading: "でんしゃ",
    pronunciation: "[덴샤]",
    korean_meaning: "전철",
    english_meaning: "train"
  },
  {
    word_id: 108,
    category: "교통",
    japanese_word: "バス",
    reading: "ばす",
    pronunciation: "[바스]",
    korean_meaning: "버스",
    english_meaning: "bus"
  },
  {
    word_id: 109,
    category: "교통",
    japanese_word: "飛行機",
    reading: "ひこうき",
    pronunciation: "[히코-키]",
    korean_meaning: "비행기",
    english_meaning: "airplane"
  },
  {
    word_id: 110,
    category: "교통",
    japanese_word: "船",
    reading: "ふね",
    pronunciation: "[후네]",
    korean_meaning: "배",
    english_meaning: "ship"
  },
  {
    word_id: 111,
    category: "교통",
    japanese_word: "自転車",
    reading: "じてんしゃ",
    pronunciation: "[지텐샤]",
    korean_meaning: "자전거",
    english_meaning: "bicycle"
  },
  {
    word_id: 112,
    category: "교통",
    japanese_word: "歩く",
    reading: "あるく",
    pronunciation: "[아루쿠]",
    korean_meaning: "걷다",
    english_meaning: "walk"
  },
  {
    word_id: 113,
    category: "교통",
    japanese_word: "運転",
    reading: "うんてん",
    pronunciation: "[운텐]",
    korean_meaning: "운전",
    english_meaning: "drive"
  },
  {
    word_id: 114,
    category: "교통",
    japanese_word: "駅",
    reading: "えき",
    pronunciation: "[에키]",
    korean_meaning: "역",
    english_meaning: "station"
  },
  {
    word_id: 115,
    category: "교통",
    japanese_word: "空港",
    reading: "くうこう",
    pronunciation: "[쿠-코-]",
    korean_meaning: "공항",
    english_meaning: "airport"
  },
  {
    word_id: 116,
    category: "교통",
    japanese_word: "道",
    reading: "みち",
    pronunciation: "[미치]",
    korean_meaning: "길",
    english_meaning: "road"
  },
  {
    word_id: 117,
    category: "교통",
    japanese_word: "信号",
    reading: "しんごう",
    pronunciation: "[신고-]",
    korean_meaning: "신호등",
    english_meaning: "traffic light"
  },
  {
    word_id: 118,
    category: "교통",
    japanese_word: "橋",
    reading: "はし",
    pronunciation: "[하시]",
    korean_meaning: "다리",
    english_meaning: "bridge"
  },
  {
    word_id: 119,
    category: "교통",
    japanese_word: "地図",
    reading: "ちず",
    pronunciation: "[치즈]",
    korean_meaning: "지도",
    english_meaning: "map"
  },
  {
    word_id: 120,
    category: "교통",
    japanese_word: "切符",
    reading: "きっぷ",
    pronunciation: "[킵푸]",
    korean_meaning: "표/티켓",
    english_meaning: "ticket"
  },
  // ------------------------------------------------------------------
  // 카테고리: 학교 (School) - ID 121~135
  // ------------------------------------------------------------------
  {
    word_id: 121,
    category: "학교",
    japanese_word: "学校",
    reading: "がっこう",
    pronunciation: "[갓코-]",
    korean_meaning: "학교",
    english_meaning: "school"
  },
  {
    word_id: 122,
    category: "학교",
    japanese_word: "先生",
    reading: "せんせい",
    pronunciation: "[센세-]",
    korean_meaning: "선생님",
    english_meaning: "teacher"
  },
  {
    word_id: 123,
    category: "학교",
    japanese_word: "学生",
    reading: "がくせい",
    pronunciation: "[가쿠세-]",
    korean_meaning: "학생",
    english_meaning: "student"
  },
  {
    word_id: 124,
    category: "학교",
    japanese_word: "教室",
    reading: "きょうしつ",
    pronunciation: "[쿄-시츠]",
    korean_meaning: "교실",
    english_meaning: "classroom"
  },
  {
    word_id: 125,
    category: "학교",
    japanese_word: "本",
    reading: "ほん",
    pronunciation: "[혼]",
    korean_meaning: "책",
    english_meaning: "book"
  },
  {
    word_id: 126,
    category: "학교",
    japanese_word: "ペン",
    reading: "ぺん",
    pronunciation: "[펜]",
    korean_meaning: "펜",
    english_meaning: "pen"
  },
  {
    word_id: 127,
    category: "학교",
    japanese_word: "鉛筆",
    reading: "えんぴつ",
    pronunciation: "[엔피츠]",
    korean_meaning: "연필",
    english_meaning: "pencil"
  },
  {
    word_id: 128,
    category: "학교",
    japanese_word: "紙",
    reading: "かみ",
    pronunciation: "[카미]",
    korean_meaning: "종이",
    english_meaning: "paper"
  },
  {
    word_id: 129,
    category: "학교",
    japanese_word: "机",
    reading: "つくえ",
    pronunciation: "[츠쿠에]",
    korean_meaning: "책상",
    english_meaning: "desk"
  },
  {
    word_id: 130,
    category: "학교",
    japanese_word: "椅子",
    reading: "いす",
    pronunciation: "[이스]",
    korean_meaning: "의자",
    english_meaning: "chair"
  },
  {
    word_id: 131,
    category: "학교",
    japanese_word: "黒板",
    reading: "こくばん",
    pronunciation: "[코쿠반]",
    korean_meaning: "칠판",
    english_meaning: "blackboard"
  },
  {
    word_id: 132,
    category: "학교",
    japanese_word: "宿題",
    reading: "しゅくだい",
    pronunciation: "[슈쿠다이]",
    korean_meaning: "숙제",
    english_meaning: "homework"
  },
  {
    word_id: 133,
    category: "학교",
    japanese_word: "試験",
    reading: "しけん",
    pronunciation: "[시켄]",
    korean_meaning: "시험",
    english_meaning: "exam"
  },
  {
    word_id: 134,
    category: "학교",
    japanese_word: "勉強",
    reading: "べんきょう",
    pronunciation: "[벤쿄-]",
    korean_meaning: "공부",
    english_meaning: "study"
  },
  {
    word_id: 135,
    category: "학교",
    japanese_word: "授業",
    reading: "じゅぎょう",
    pronunciation: "[쥬교-]",
    korean_meaning: "수업",
    english_meaning: "class"
  },
  // ------------------------------------------------------------------
  // 카테고리: 집 (House) - ID 136~150
  // ------------------------------------------------------------------
  {
    word_id: 136,
    category: "집",
    japanese_word: "家",
    reading: "いえ",
    pronunciation: "[이에]",
    korean_meaning: "집",
    english_meaning: "house"
  },
  {
    word_id: 137,
    category: "집",
    japanese_word: "部屋",
    reading: "へや",
    pronunciation: "[헤야]",
    korean_meaning: "방",
    english_meaning: "room"
  },
  {
    word_id: 138,
    category: "집",
    japanese_word: "台所",
    reading: "だいどころ",
    pronunciation: "[다이도코로]",
    korean_meaning: "부엌",
    english_meaning: "kitchen"
  },
  {
    word_id: 139,
    category: "집",
    japanese_word: "寝室",
    reading: "しんしつ",
    pronunciation: "[신시츠]",
    korean_meaning: "침실",
    english_meaning: "bedroom"
  },
  {
    word_id: 140,
    category: "집",
    japanese_word: "お風呂",
    reading: "おふろ",
    pronunciation: "[오후로]",
    korean_meaning: "목욕탕/욕조",
    english_meaning: "bath"
  },
  {
    word_id: 141,
    category: "집",
    japanese_word: "トイレ",
    reading: "といれ",
    pronunciation: "[토이레]",
    korean_meaning: "화장실",
    english_meaning: "toilet"
  },
  {
    word_id: 142,
    category: "집",
    japanese_word: "玄関",
    reading: "げんかん",
    pronunciation: "[겐칸]",
    korean_meaning: "현관",
    english_meaning: "entrance"
  },
  {
    word_id: 143,
    category: "집",
    japanese_word: "窓",
    reading: "まど",
    pronunciation: "[마도]",
    korean_meaning: "창문",
    english_meaning: "window"
  },
  {
    word_id: 144,
    category: "집",
    japanese_word: "ドア",
    reading: "どあ",
    pronunciation: "[도아]",
    korean_meaning: "문",
    english_meaning: "door"
  },
  {
    word_id: 145,
    category: "집",
    japanese_word: "屋根",
    reading: "やね",
    pronunciation: "[야네]",
    korean_meaning: "지붕",
    english_meaning: "roof"
  },
  {
    word_id: 146,
    category: "집",
    japanese_word: "庭",
    reading: "にわ",
    pronunciation: "[니와]",
    korean_meaning: "정원/마당",
    english_meaning: "garden"
  },
  {
    word_id: 147,
    category: "집",
    japanese_word: "階段",
    reading: "かいだん",
    pronunciation: "[카이단]",
    korean_meaning: "계단",
    english_meaning: "stairs"
  },
  {
    word_id: 148,
    category: "집",
    japanese_word: "床",
    reading: "ゆか",
    pronunciation: "[유카]",
    korean_meaning: "마루/바닥",
    english_meaning: "floor"
  },
  {
    word_id: 149,
    category: "집",
    japanese_word: "壁",
    reading: "かべ",
    pronunciation: "[카베]",
    korean_meaning: "벽",
    english_meaning: "wall"
  },
  {
    word_id: 150,
    category: "집",
    japanese_word: "天井",
    reading: "てんじょう",
    pronunciation: "[텐죠-]",
    korean_meaning: "천장",
    english_meaning: "ceiling"
  },
  // ------------------------------------------------------------------
  // 카테고리: 옷 (Clothes) - ID 151~165
  // ------------------------------------------------------------------
  {
    word_id: 151,
    category: "옷",
    japanese_word: "服",
    reading: "ふく",
    pronunciation: "[후쿠]",
    korean_meaning: "옷",
    english_meaning: "clothes"
  },
  {
    word_id: 152,
    category: "옷",
    japanese_word: "シャツ",
    reading: "しゃつ",
    pronunciation: "[샤츠]",
    korean_meaning: "셔츠",
    english_meaning: "shirt"
  },
  {
    word_id: 153,
    category: "옷",
    japanese_word: "ズボン",
    reading: "ずぼん",
    pronunciation: "[즈봉]",
    korean_meaning: "바지",
    english_meaning: "pants"
  },
  {
    word_id: 154,
    category: "옷",
    japanese_word: "スカート",
    reading: "すかーと",
    pronunciation: "[스카-토]",
    korean_meaning: "치마",
    english_meaning: "skirt"
  },
  {
    word_id: 155,
    category: "옷",
    japanese_word: "靴",
    reading: "くつ",
    pronunciation: "[쿠츠]",
    korean_meaning: "구두/신발",
    english_meaning: "shoes"
  },
  {
    word_id: 156,
    category: "옷",
    japanese_word: "帽子",
    reading: "ぼうし",
    pronunciation: "[보-시]",
    korean_meaning: "모자",
    english_meaning: "hat"
  },
  {
    word_id: 157,
    category: "옷",
    japanese_word: "手袋",
    reading: "てぶくろ",
    pronunciation: "[테부쿠로]",
    korean_meaning: "장갑",
    english_meaning: "gloves"
  },
  {
    word_id: 158,
    category: "옷",
    japanese_word: "靴下",
    reading: "くつした",
    pronunciation: "[쿠츠시타]",
    korean_meaning: "양말",
    english_meaning: "socks"
  },
  {
    word_id: 159,
    category: "옷",
    japanese_word: "下着",
    reading: "したぎ",
    pronunciation: "[시타기]",
    korean_meaning: "속옷",
    english_meaning: "underwear"
  },
  {
    word_id: 160,
    category: "옷",
    japanese_word: "コート",
    reading: "こーと",
    pronunciation: "[코-토]",
    korean_meaning: "코트",
    english_meaning: "coat"
  },
  {
    word_id: 161,
    category: "옷",
    japanese_word: "ジャケット",
    reading: "じゃけっと",
    pronunciation: "[쟈켓토]",
    korean_meaning: "재킷",
    english_meaning: "jacket"
  },
  {
    word_id: 162,
    category: "옷",
    japanese_word: "ドレス",
    reading: "どれす",
    pronunciation: "[도레스]",
    korean_meaning: "드레스/원피스",
    english_meaning: "dress"
  },
  {
    word_id: 163,
    category: "옷",
    japanese_word: "ネクタイ",
    reading: "ねくたい",
    pronunciation: "[네쿠타이]",
    korean_meaning: "넥타이",
    english_meaning: "tie"
  },
  {
    word_id: 164,
    category: "옷",
    japanese_word: "ベルト",
    reading: "べると",
    pronunciation: "[베루토]",
    korean_meaning: "벨트",
    english_meaning: "belt"
  },
  {
    word_id: 165,
    category: "옷",
    japanese_word: "眼鏡",
    reading: "めがね",
    pronunciation: "[메가네]",
    korean_meaning: "안경",
    english_meaning: "glasses"
  },
  // ------------------------------------------------------------------
  // 카테고리: 신체 (Body) - ID 166~180
  // ------------------------------------------------------------------
  {
    word_id: 166,
    category: "신체",
    japanese_word: "体",
    reading: "からだ",
    pronunciation: "[카라다]",
    korean_meaning: "몸",
    english_meaning: "body"
  },
  {
    word_id: 167,
    category: "신체",
    japanese_word: "頭",
    reading: "あたま",
    pronunciation: "[아타마]",
    korean_meaning: "머리",
    english_meaning: "head"
  },
  {
    word_id: 168,
    category: "신체",
    japanese_word: "顔",
    reading: "かお",
    pronunciation: "[카오]",
    korean_meaning: "얼굴",
    english_meaning: "face"
  },
  {
    word_id: 169,
    category: "신체",
    japanese_word: "目",
    reading: "め",
    pronunciation: "[메]",
    korean_meaning: "눈",
    english_meaning: "eye"
  },
  {
    word_id: 170,
    category: "신체",
    japanese_word: "鼻",
    reading: "はな",
    pronunciation: "[하나]",
    korean_meaning: "코",
    english_meaning: "nose"
  },
  {
    word_id: 171,
    category: "신체",
    japanese_word: "口",
    reading: "くち",
    pronunciation: "[쿠치]",
    korean_meaning: "입",
    english_meaning: "mouth"
  },
  {
    word_id: 172,
    category: "신체",
    japanese_word: "耳",
    reading: "みみ",
    pronunciation: "[미미]",
    korean_meaning: "귀",
    english_meaning: "ear"
  },
  {
    word_id: 173,
    category: "신체",
    japanese_word: "手",
    reading: "て",
    pronunciation: "[테]",
    korean_meaning: "손",
    english_meaning: "hand"
  },
  {
    word_id: 174,
    category: "신체",
    japanese_word: "足",
    reading: "あし",
    pronunciation: "[아시]",
    korean_meaning: "발",
    english_meaning: "foot"
  },
  {
    word_id: 175,
    category: "신체",
    japanese_word: "腕",
    reading: "うで",
    pronunciation: "[우데]",
    korean_meaning: "팔",
    english_meaning: "arm"
  },
  {
    word_id: 176,
    category: "신체",
    japanese_word: "脚",
    reading: "あし",
    pronunciation: "[아시]",
    korean_meaning: "다리",
    english_meaning: "leg"
  },
  {
    word_id: 177,
    category: "신체",
    japanese_word: "指",
    reading: "ゆび",
    pronunciation: "[유비]",
    korean_meaning: "손가락",
    english_meaning: "finger"
  },
  {
    word_id: 178,
    category: "신체",
    japanese_word: "心臓",
    reading: "しんぞう",
    pronunciation: "[신조-]",
    korean_meaning: "심장",
    english_meaning: "heart"
  },
  {
    word_id: 179,
    category: "신체",
    japanese_word: "血",
    reading: "ち",
    pronunciation: "[치]",
    korean_meaning: "피",
    english_meaning: "blood"
  },
  {
    word_id: 180,
    category: "신체",
    japanese_word: "骨",
    reading: "ほね",
    pronunciation: "[호네]",
    korean_meaning: "뼈",
    english_meaning: "bone"
  },
  // ------------------------------------------------------------------
  // 카테고리: 감정 (Feeling) - ID 181~195
  // ------------------------------------------------------------------
  {
    word_id: 181,
    category: "감정",
    japanese_word: "気持ち",
    reading: "きもち",
    pronunciation: "[키모치]",
    korean_meaning: "기분/마음",
    english_meaning: "feeling"
  },
  {
    word_id: 182,
    category: "감정",
    japanese_word: "嬉しい",
    reading: "うれしい",
    pronunciation: "[우레시-]",
    korean_meaning: "기쁘다",
    english_meaning: "happy"
  },
  {
    word_id: 183,
    category: "감정",
    japanese_word: "悲しい",
    reading: "かなしい",
    pronunciation: "[카나시-]",
    korean_meaning: "슬프다",
    english_meaning: "sad"
  },
  {
    word_id: 184,
    category: "감정",
    japanese_word: "怒る",
    reading: "おこる",
    pronunciation: "[오코루]",
    korean_meaning: "화내다",
    english_meaning: "angry"
  },
  {
    word_id: 185,
    category: "감정",
    japanese_word: "驚く",
    reading: "おどろく",
    pronunciation: "[오도로쿠]",
    korean_meaning: "놀라다",
    english_meaning: "surprised"
  },
  {
    word_id: 186,
    category: "감정",
    japanese_word: "怖い",
    reading: "こわい",
    pronunciation: "[코와이]",
    korean_meaning: "무섭다",
    english_meaning: "scary"
  },
  {
    word_id: 187,
    category: "감정",
    japanese_word: "楽しい",
    reading: "たのしい",
    pronunciation: "[타노시-]",
    korean_meaning: "즐겁다",
    english_meaning: "fun"
  },
  {
    word_id: 188,
    category: "감정",
    japanese_word: "退屈",
    reading: "たいくつ",
    pronunciation: "[타이쿠츠]",
    korean_meaning: "지루하다",
    english_meaning: "boring"
  },
  {
    word_id: 189,
    category: "감정",
    japanese_word: "心配",
    reading: "しんぱい",
    pronunciation: "[심파이]",
    korean_meaning: "걱정",
    english_meaning: "worry"
  },
  {
    word_id: 190,
    category: "감정",
    japanese_word: "安心",
    reading: "あんしん",
    pronunciation: "[안신]",
    korean_meaning: "안심",
    english_meaning: "relief"
  },
  {
    word_id: 191,
    category: "감정",
    japanese_word: "愛",
    reading: "あい",
    pronunciation: "[아이]",
    korean_meaning: "사랑",
    english_meaning: "love"
  },
  {
    word_id: 192,
    category: "감정",
    japanese_word: "嫌い",
    reading: "きらい",
    pronunciation: "[키라이]",
    korean_meaning: "싫어하다",
    english_meaning: "hate"
  },
  {
    word_id: 193,
    category: "감정",
    japanese_word: "好き",
    reading: "すき",
    pronunciation: "[스키]",
    korean_meaning: "좋아하다",
    english_meaning: "like"
  },
  {
    word_id: 194,
    category: "감정",
    japanese_word: "嫌",
    reading: "いや",
    pronunciation: "[이야]",
    korean_meaning: "싫다",
    english_meaning: "dislike"
  },
  {
    word_id: 195,
    category: "감정",
    japanese_word: "幸せ",
    reading: "しあわせ",
    pronunciation: "[시아와세]",
    korean_meaning: "행복",
    english_meaning: "happiness"
  },
  // ------------------------------------------------------------------
  // 카테고리: 직업 (Job) - ID 196~210
  // ------------------------------------------------------------------
  {
    word_id: 196,
    category: "직업",
    japanese_word: "仕事",
    reading: "しごと",
    pronunciation: "[시고토]",
    korean_meaning: "일/직업",
    english_meaning: "job"
  },
  {
    word_id: 197,
    category: "직업",
    japanese_word: "医者",
    reading: "いしゃ",
    pronunciation: "[이샤]",
    korean_meaning: "의사",
    english_meaning: "doctor"
  },
  {
    word_id: 198,
    category: "직업",
    japanese_word: "教師",
    reading: "きょうし",
    pronunciation: "[쿄-시]",
    korean_meaning: "교사",
    english_meaning: "teacher"
  },
  {
    word_id: 199,
    category: "직업",
    japanese_word: "警察",
    reading: "けいさつ",
    pronunciation: "[케이사츠]",
    korean_meaning: "경찰",
    english_meaning: "police"
  },
  {
    word_id: 200,
    category: "직업",
    japanese_word: "消防士",
    reading: "しょうぼうし",
    pronunciation: "[쇼-보-시]",
    korean_meaning: "소방관",
    english_meaning: "firefighter"
  },
  {
    word_id: 201,
    category: "직업",
    japanese_word: "料理人",
    reading: "りょうりにん",
    pronunciation: "[료-리닌]",
    korean_meaning: "요리사",
    english_meaning: "cook"
  },
  {
    word_id: 202,
    category: "직업",
    japanese_word: "運転手",
    reading: "うんてんしゅ",
    pronunciation: "[운텐슈]",
    korean_meaning: "운전기사",
    english_meaning: "driver"
  },
  {
    word_id: 203,
    category: "직업",
    japanese_word: "店員",
    reading: "てんいん",
    pronunciation: "[텐인]",
    korean_meaning: "점원",
    english_meaning: "clerk"
  },
  {
    word_id: 204,
    category: "직업",
    japanese_word: "会社員",
    reading: "かいしゃいん",
    pronunciation: "[카이샤인]",
    korean_meaning: "회사원",
    english_meaning: "office worker"
  },
  {
    word_id: 205,
    category: "직업",
    japanese_word: "農家",
    reading: "のうか",
    pronunciation: "[노-카]",
    korean_meaning: "농부",
    english_meaning: "farmer"
  },
  {
    word_id: 206,
    category: "직업",
    japanese_word: "漁師",
    reading: "りょうし",
    pronunciation: "[료-시]",
    korean_meaning: "어부",
    english_meaning: "fisherman"
  },
  {
    word_id: 207,
    category: "직업",
    japanese_word: "歌手",
    reading: "かしゅ",
    pronunciation: "[카슈]",
    korean_meaning: "가수",
    english_meaning: "singer"
  },
  {
    word_id: 208,
    category: "직업",
    japanese_word: "俳優",
    reading: "はいゆう",
    pronunciation: "[하이유-]",
    korean_meaning: "배우",
    english_meaning: "actor"
  },
  {
    word_id: 209,
    category: "직업",
    japanese_word: "画家",
    reading: "がか",
    pronunciation: "[가카]",
    korean_meaning: "화가",
    english_meaning: "painter"
  },
  {
    word_id: 210,
    category: "직업",
    japanese_word: "作家",
    reading: "さっか",
    pronunciation: "[삭카]",
    korean_meaning: "작가",
    english_meaning: "writer"
  },
  // ------------------------------------------------------------------
  // 카테고리: 스포츠 (Sports) - ID 211~225
  // ------------------------------------------------------------------
  {
    word_id: 211,
    category: "스포츠",
    japanese_word: "スポーツ",
    reading: "すぽーつ",
    pronunciation: "[스포-츠]",
    korean_meaning: "스포츠",
    english_meaning: "sports"
  },
  {
    word_id: 212,
    category: "스포츠",
    japanese_word: "野球",
    reading: "やきゅう",
    pronunciation: "[야큐-]",
    korean_meaning: "야구",
    english_meaning: "baseball"
  },
  {
    word_id: 213,
    category: "스포츠",
    japanese_word: "サッカー",
    reading: "さっかー",
    pronunciation: "[삭카-]",
    korean_meaning: "축구",
    english_meaning: "soccer"
  },
  {
    word_id: 214,
    category: "스포츠",
    japanese_word: "テニス",
    reading: "てにす",
    pronunciation: "[테니스]",
    korean_meaning: "테니스",
    english_meaning: "tennis"
  },
  {
    word_id: 215,
    category: "스포츠",
    japanese_word: "バスケットボール",
    reading: "ばすけっとぼーる",
    pronunciation: "[바스켓토보-루]",
    korean_meaning: "농구",
    english_meaning: "basketball"
  },
  {
    word_id: 216,
    category: "스포츠",
    japanese_word: "水泳",
    reading: "すいえい",
    pronunciation: "[스이에-]",
    korean_meaning: "수영",
    english_meaning: "swimming"
  },
  {
    word_id: 217,
    category: "스포츠",
    japanese_word: "走る",
    reading: "はしる",
    pronunciation: "[하시루]",
    korean_meaning: "달리다",
    english_meaning: "run"
  },
  {
    word_id: 218,
    category: "스포츠",
    japanese_word: "ジャンプ",
    reading: "じゃんぷ",
    pronunciation: "[쟘푸]",
    korean_meaning: "점프하다",
    english_meaning: "jump"
  },
  {
    word_id: 219,
    category: "스포츠",
    japanese_word: "投げる",
    reading: "なげる",
    pronunciation: "[나게루]",
    korean_meaning: "던지다",
    english_meaning: "throw"
  },
  {
    word_id: 220,
    category: "스포츠",
    japanese_word: "蹴る",
    reading: "ける",
    pronunciation: "[케루]",
    korean_meaning: "차다",
    english_meaning: "kick"
  },
  {
    word_id: 221,
    category: "스포츠",
    japanese_word: "打つ",
    reading: "うつ",
    pronunciation: "[우츠]",
    korean_meaning: "치다",
    english_meaning: "hit"
  },
  {
    word_id: 222,
    category: "스포츠",
    japanese_word: "勝つ",
    reading: "かつ",
    pronunciation: "[카츠]",
    korean_meaning: "이기다",
    english_meaning: "win"
  },
  {
    word_id: 223,
    category: "스포츠",
    japanese_word: "負ける",
    reading: "まける",
    pronunciation: "[마케루]",
    korean_meaning: "지다",
    english_meaning: "lose"
  },
  {
    word_id: 224,
    category: "스포츠",
    japanese_word: "試合",
    reading: "しあい",
    pronunciation: "[시아이]",
    korean_meaning: "시합/게임",
    english_meaning: "game"
  },
  {
    word_id: 225,
    category: "스포츠",
    japanese_word: "チーム",
    reading: "ちーむ",
    pronunciation: "[치-무]",
    korean_meaning: "팀",
    english_meaning: "team"
  },
  // ------------------------------------------------------------------
  // 카테고리: 취미 (Hobby) - ID 226~240
  // ------------------------------------------------------------------
  {
    word_id: 226,
    category: "취미",
    japanese_word: "趣味",
    reading: "しゅみ",
    pronunciation: "[슈미]",
    korean_meaning: "취미",
    english_meaning: "hobby"
  },
  {
    word_id: 227,
    category: "취미",
    japanese_word: "読書",
    reading: "どくしょ",
    pronunciation: "[도쿠쇼]",
    korean_meaning: "독서",
    english_meaning: "reading"
  },
  {
    word_id: 228,
    category: "취미",
    japanese_word: "映画",
    reading: "えいが",
    pronunciation: "[에이가]",
    korean_meaning: "영화",
    english_meaning: "movie"
  },
  {
    word_id: 229,
    category: "취미",
    japanese_word: "音楽",
    reading: "おんがく",
    pronunciation: "[온가쿠]",
    korean_meaning: "음악",
    english_meaning: "music"
  },
  {
    word_id: 230,
    category: "취미",
    japanese_word: "絵",
    reading: "え",
    pronunciation: "[에]",
    korean_meaning: "그림",
    english_meaning: "picture"
  },
  {
    word_id: 231,
    category: "취미",
    japanese_word: "写真",
    reading: "しゃしん",
    pronunciation: "[샤신]",
    korean_meaning: "사진",
    english_meaning: "photo"
  },
  {
    word_id: 232,
    category: "취미",
    japanese_word: "料理",
    reading: "りょうり",
    pronunciation: "[료-리]",
    korean_meaning: "요리",
    english_meaning: "cooking"
  },
  {
    word_id: 233,
    category: "취미",
    japanese_word: "旅行",
    reading: "りょこう",
    pronunciation: "[료코-]",
    korean_meaning: "여행",
    english_meaning: "travel"
  },
  {
    word_id: 234,
    category: "취미",
    japanese_word: "ゲーム",
    reading: "げーむ",
    pronunciation: "[게-무]",
    korean_meaning: "게임",
    english_meaning: "game"
  },
  {
    word_id: 235,
    category: "취미",
    japanese_word: "釣り",
    reading: "つり",
    pronunciation: "[츠리]",
    korean_meaning: "낚시",
    english_meaning: "fishing"
  },
  {
    word_id: 236,
    category: "취미",
    japanese_word: "園芸",
    reading: "えんげい",
    pronunciation: "[엔게-]",
    korean_meaning: "원예",
    english_meaning: "gardening"
  },
  {
    word_id: 237,
    category: "취미",
    japanese_word: "散歩",
    reading: "さんぽ",
    pronunciation: "[산포]",
    korean_meaning: "산책",
    english_meaning: "walk"
  },
  {
    word_id: 238,
    category: "취미",
    japanese_word: "買い物",
    reading: "かいもの",
    pronunciation: "[카이모노]",
    korean_meaning: "쇼핑",
    english_meaning: "shopping"
  },
  {
    word_id: 239,
    category: "취미",
    japanese_word: "歌う",
    reading: "うたう",
    pronunciation: "[우타우]",
    korean_meaning: "노래하다",
    english_meaning: "sing"
  },
  {
    word_id: 240,
    category: "취미",
    japanese_word: "踊る",
    reading: "おどる",
    pronunciation: "[오도루]",
    korean_meaning: "춤추다",
    english_meaning: "dance"
  },
  // ------------------------------------------------------------------
  // 카테고리: 자연 (Nature) - ID 241~255
  // ------------------------------------------------------------------
  {
    word_id: 241,
    category: "자연",
    japanese_word: "自然",
    reading: "しぜん",
    pronunciation: "[시젠]",
    korean_meaning: "자연",
    english_meaning: "nature"
  },
  {
    word_id: 242,
    category: "자연",
    japanese_word: "山",
    reading: "やま",
    pronunciation: "[야마]",
    korean_meaning: "산",
    english_meaning: "mountain"
  },
  {
    word_id: 243,
    category: "자연",
    japanese_word: "川",
    reading: "かわ",
    pronunciation: "[카와]",
    korean_meaning: "강",
    english_meaning: "river"
  },
  {
    word_id: 244,
    category: "자연",
    japanese_word: "海",
    reading: "うみ",
    pronunciation: "[우미]",
    korean_meaning: "바다",
    english_meaning: "sea"
  },
  {
    word_id: 245,
    category: "자연",
    japanese_word: "森",
    reading: "もり",
    pronunciation: "[모리]",
    korean_meaning: "숲",
    english_meaning: "forest"
  },
  {
    word_id: 246,
    category: "자연",
    japanese_word: "木",
    reading: "き",
    pronunciation: "[키]",
    korean_meaning: "나무",
    english_meaning: "tree"
  },
  {
    word_id: 247,
    category: "자연",
    japanese_word: "花",
    reading: "はな",
    pronunciation: "[하나]",
    korean_meaning: "꽃",
    english_meaning: "flower"
  },
  {
    word_id: 248,
    category: "자연",
    japanese_word: "草",
    reading: "くさ",
    pronunciation: "[쿠사]",
    korean_meaning: "풀",
    english_meaning: "grass"
  },
  {
    word_id: 249,
    category: "자연",
    japanese_word: "石",
    reading: "いし",
    pronunciation: "[이시]",
    korean_meaning: "돌",
    english_meaning: "stone"
  },
  {
    word_id: 250,
    category: "자연",
    japanese_word: "土",
    reading: "つち",
    pronunciation: "[츠치]",
    korean_meaning: "흙",
    english_meaning: "soil"
  },
  {
    word_id: 251,
    category: "자연",
    japanese_word: "空",
    reading: "そら",
    pronunciation: "[소라]",
    korean_meaning: "하늘",
    english_meaning: "sky"
  },
  {
    word_id: 252,
    category: "자연",
    japanese_word: "雲",
    reading: "くも",
    pronunciation: "[쿠모]",
    korean_meaning: "구름",
    english_meaning: "cloud"
  },
  {
    word_id: 253,
    category: "자연",
    japanese_word: "星",
    reading: "ほし",
    pronunciation: "[호시]",
    korean_meaning: "별",
    english_meaning: "star"
  },
  {
    word_id: 254,
    category: "자연",
    japanese_word: "月",
    reading: "つき",
    pronunciation: "[츠키]",
    korean_meaning: "달",
    english_meaning: "moon"
  },
  {
    word_id: 255,
    category: "자연",
    japanese_word: "太陽",
    reading: "たいよう",
    pronunciation: "[타이요-]",
    korean_meaning: "태양",
    english_meaning: "sun"
  },
  // ------------------------------------------------------------------
  // 카테고리: 건물 (Building) - ID 256~270
  // ------------------------------------------------------------------
  {
    word_id: 256,
    category: "건물",
    japanese_word: "建物",
    reading: "たてもの",
    pronunciation: "[타테모노]",
    korean_meaning: "건물",
    english_meaning: "building"
  },
  {
    word_id: 257,
    category: "건물",
    japanese_word: "病院",
    reading: "びょういん",
    pronunciation: "[뵤-인]",
    korean_meaning: "병원",
    english_meaning: "hospital"
  },
  {
    word_id: 258,
    category: "건물",
    japanese_word: "銀行",
    reading: "ぎんこう",
    pronunciation: "[긴코-]",
    korean_meaning: "은행",
    english_meaning: "bank"
  },
  {
    word_id: 259,
    category: "건물",
    japanese_word: "郵便局",
    reading: "ゆうびんきょく",
    pronunciation: "[유-빈쿄쿠]",
    korean_meaning: "우체국",
    english_meaning: "post office"
  },
  {
    word_id: 260,
    category: "건물",
    japanese_word: "図書館",
    reading: "としょかん",
    pronunciation: "[토쇼칸]",
    korean_meaning: "도서관",
    english_meaning: "library"
  },
  {
    word_id: 261,
    category: "건물",
    japanese_word: "博物館",
    reading: "はくぶつかん",
    pronunciation: "[하쿠부츠칸]",
    korean_meaning: "박물관",
    english_meaning: "museum"
  },
  {
    word_id: 262,
    category: "건물",
    japanese_word: "映画館",
    reading: "えいがかん",
    pronunciation: "[에이가칸]",
    korean_meaning: "영화관",
    english_meaning: "cinema"
  },
  {
    word_id: 263,
    category: "건물",
    japanese_word: "レストラン",
    reading: "れすとらん",
    pronunciation: "[레스토란]",
    korean_meaning: "식당",
    english_meaning: "restaurant"
  },
  {
    word_id: 264,
    category: "건물",
    japanese_word: "ホテル",
    reading: "ほてる",
    pronunciation: "[호테루]",
    korean_meaning: "호텔",
    english_meaning: "hotel"
  },
  {
    word_id: 265,
    category: "건물",
    japanese_word: "店",
    reading: "みせ",
    pronunciation: "[미세]",
    korean_meaning: "가게",
    english_meaning: "store"
  },
  {
    word_id: 266,
    category: "건물",
    japanese_word: "市場",
    reading: "いちば",
    pronunciation: "[이치바]",
    korean_meaning: "시장",
    english_meaning: "market"
  },
  {
    word_id: 267,
    category: "건물",
    japanese_word: "公園",
    reading: "こうえん",
    pronunciation: "[코-엔]",
    korean_meaning: "공원",
    english_meaning: "park"
  },
  {
    word_id: 268,
    category: "건물",
    japanese_word: "橋",
    reading: "はし",
    pronunciation: "[하시]",
    korean_meaning: "다리",
    english_meaning: "bridge"
  },
  {
    word_id: 269,
    category: "건물",
    japanese_word: "塔",
    reading: "とう",
    pronunciation: "[토-]",
    korean_meaning: "탑",
    english_meaning: "tower"
  },
  {
    word_id: 270,
    category: "건물",
    japanese_word: "城",
    reading: "しろ",
    pronunciation: "[시로]",
    korean_meaning: "성",
    english_meaning: "castle"
  },
  // ------------------------------------------------------------------
  // 카테고리: 도구 (Tools) - ID 271~285
  // ------------------------------------------------------------------
  {
    word_id: 271,
    category: "도구",
    japanese_word: "道具",
    reading: "どうぐ",
    pronunciation: "[도-구]",
    korean_meaning: "도구",
    english_meaning: "tool"
  },
  {
    word_id: 272,
    category: "도구",
    japanese_word: "ナイフ",
    reading: "ないふ",
    pronunciation: "[나이후]",
    korean_meaning: "칼/나이프",
    english_meaning: "knife"
  },
  {
    word_id: 273,
    category: "도구",
    japanese_word: "フォーク",
    reading: "ふぉーく",
    pronunciation: "[호-쿠]",
    korean_meaning: "포크",
    english_meaning: "fork"
  },
  {
    word_id: 274,
    category: "도구",
    japanese_word: "スプーン",
    reading: "すぷーん",
    pronunciation: "[스푸-은]",
    korean_meaning: "숟가락",
    english_meaning: "spoon"
  },
  {
    word_id: 275,
    category: "도구",
    japanese_word: "箸",
    reading: "はし",
    pronunciation: "[하시]",
    korean_meaning: "젓가락",
    english_meaning: "chopsticks"
  },
  {
    word_id: 276,
    category: "도구",
    japanese_word: "皿",
    reading: "さら",
    pronunciation: "[사라]",
    korean_meaning: "접시",
    english_meaning: "plate"
  },
  {
    word_id: 277,
    category: "도구",
    japanese_word: "カップ",
    reading: "かっぷ",
    pronunciation: "[캅푸]",
    korean_meaning: "컵",
    english_meaning: "cup"
  },
  {
    word_id: 278,
    category: "도구",
    japanese_word: "鍋",
    reading: "なべ",
    pronunciation: "[나베]",
    korean_meaning: "냄비",
    english_meaning: "pot"
  },
  {
    word_id: 279,
    category: "도구",
    japanese_word: "包丁",
    reading: "ほうちょう",
    pronunciation: "[호-쵸-]",
    korean_meaning: "식칼",
    english_meaning: "kitchen knife"
  },
  {
    word_id: 280,
    category: "도구",
    japanese_word: "はさみ",
    reading: "はさみ",
    pronunciation: "[하사미]",
    korean_meaning: "가위",
    english_meaning: "scissors"
  },
  {
    word_id: 281,
    category: "도구",
    japanese_word: "鍵",
    reading: "かぎ",
    pronunciation: "[카기]",
    korean_meaning: "열쇠",
    english_meaning: "key"
  },
  {
    word_id: 282,
    category: "도구",
    japanese_word: "時計",
    reading: "とけい",
    pronunciation: "[토케이]",
    korean_meaning: "시계",
    english_meaning: "watch"
  },
  {
    word_id: 283,
    category: "도구",
    japanese_word: "電話",
    reading: "でんわ",
    pronunciation: "[덴와]",
    korean_meaning: "전화",
    english_meaning: "phone"
  },
  {
    word_id: 284,
    category: "도구",
    japanese_word: "カメラ",
    reading: "かめら",
    pronunciation: "[카메라]",
    korean_meaning: "카메라",
    english_meaning: "camera"
  },
  {
    word_id: 285,
    category: "도구",
    japanese_word: "傘",
    reading: "かさ",
    pronunciation: "[카사]",
    korean_meaning: "우산",
    english_meaning: "umbrella"
  },
  // ------------------------------------------------------------------
  // 카테고리: 기본 동사 (Basic Verbs) - ID 286~300
  // ------------------------------------------------------------------
  {
    word_id: 286,
    category: "기본동사",
    japanese_word: "する",
    reading: "する",
    pronunciation: "[스루]",
    korean_meaning: "하다",
    english_meaning: "do"
  },
  {
    word_id: 287,
    category: "기본동사",
    japanese_word: "行く",
    reading: "いく",
    pronunciation: "[이쿠]",
    korean_meaning: "가다",
    english_meaning: "go"
  },
  {
    word_id: 288,
    category: "기본동사",
    japanese_word: "来る",
    reading: "くる",
    pronunciation: "[쿠루]",
    korean_meaning: "오다",
    english_meaning: "come"
  },
  {
    word_id: 289,
    category: "기본동사",
    japanese_word: "見る",
    reading: "みる",
    pronunciation: "[미루]",
    korean_meaning: "보다",
    english_meaning: "see"
  },
  {
    word_id: 290,
    category: "기본동사",
    japanese_word: "聞く",
    reading: "きく",
    pronunciation: "[키쿠]",
    korean_meaning: "듣다",
    english_meaning: "hear"
  },
  {
    word_id: 291,
    category: "기본동사",
    japanese_word: "話す",
    reading: "はなす",
    pronunciation: "[하나스]",
    korean_meaning: "말하다",
    english_meaning: "speak"
  },
  {
    word_id: 292,
    category: "기본동사",
    japanese_word: "食べる",
    reading: "たべる",
    pronunciation: "[타베루]",
    korean_meaning: "먹다",
    english_meaning: "eat"
  },
  {
    word_id: 293,
    category: "기본동사",
    japanese_word: "飲む",
    reading: "のむ",
    pronunciation: "[노무]",
    korean_meaning: "마시다",
    english_meaning: "drink"
  },
  {
    word_id: 294,
    category: "기본동사",
    japanese_word: "寝る",
    reading: "ねる",
    pronunciation: "[네루]",
    korean_meaning: "자다",
    english_meaning: "sleep"
  },
  {
    word_id: 295,
    category: "기본동사",
    japanese_word: "起きる",
    reading: "おきる",
    pronunciation: "[오키루]",
    korean_meaning: "일어나다",
    english_meaning: "wake up"
  },
  {
    word_id: 296,
    category: "기본동사",
    japanese_word: "立つ",
    reading: "たつ",
    pronunciation: "[타츠]",
    korean_meaning: "서다",
    english_meaning: "stand"
  },
  {
    word_id: 297,
    category: "기본동사",
    japanese_word: "座る",
    reading: "すわる",
    pronunciation: "[스와루]",
    korean_meaning: "앉다",
    english_meaning: "sit"
  },
  {
    word_id: 298,
    category: "기본동사",
    japanese_word: "歩く",
    reading: "あるく",
    pronunciation: "[아루쿠]",
    korean_meaning: "걷다",
    english_meaning: "walk"
  },
  {
    word_id: 299,
    category: "기본동사",
    japanese_word: "走る",
    reading: "はしる",
    pronunciation: "[하시루]",
    korean_meaning: "달리다",
    english_meaning: "run"
  },
  {
    word_id: 300,
    category: "기본동사",
    japanese_word: "泳ぐ",
    reading: "およぐ",
    pronunciation: "[오요구]",
    korean_meaning: "수영하다",
    english_meaning: "swim"
  }
];