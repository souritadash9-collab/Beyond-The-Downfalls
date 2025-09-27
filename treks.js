const treksData = {
    "Uttarakhand": {
        "Char Dham Yatra": {
            "Yamunotri Dham": { description: "Yamunotri Dham is the westernmost temple of the Char Dham pilgrimage, dedicated to Goddess Yamuna. Located at an altitude of 3,291 meters in the Garhwal Himalayas, it is the source of the sacred Yamuna River. The trek from Hanuman Chatti offers scenic views of snow-capped peaks, lush meadows, and bubbling hot springs. Pilgrims and trekkers experience both spiritual reverence and natural beauty along the route.", image:"images/yamunatri.jpg", distance:"13 km one-way trek from Hanuman Chatti.", difficulty:"Moderate – involves steep inclines, uneven paths, and rocky terrain", days:"1–2 days, depending on walking pace and acclimatization.", nearby:"Janki Chatti, Divya Shila, Surkanda Devi Temple." },
            "Gangotri Dham": { description: "Gangotri Dham is one of the holiest Hindu pilgrimage sites and marks the origin of the sacred Ganga River. Located at an altitude of 3,100 meters in the Uttarkashi district of Uttarakhand, the temple is dedicated to Goddess Ganga. The trek to Gaumukh, the glacier source of the Ganga, offers stunning views of snow-capped peaks, dense forests, and alpine meadows, making it a blend of spirituality and natural beauty", image:"images/gangotri.webp", distance:"18 km one-way trek from Gangotri town to Gaumukh", difficulty:"Moderate to Challenging – High altitude and icy paths", days:"2–3 days (including acclimatization)", nearby:"Gaumukh Glacier, Bhojbasa, Tapovan, Chirbasa" },
            "Kedarnath Dham": { description: "Kedarnath Dham is a revered Hindu temple dedicated to Lord Shiva, located at an altitude of 3,583 meters in the Garhwal Himalayan range. The trek from Gaurikund to Kedarnath takes you through scenic valleys, rivers, and dense pine forests. The temple is part of the Chota Char Dham pilgrimage and is especially significant during the summer months.", image:"images/kedarnath.webp", distance:"14 km trek from Gaurikund to Kedarnath", difficulty:"Moderate – Steep inclines and high-altitude trekking", days:"1 day (trek from Gaurikund)", nearby:"Gaurikund, Vasuki Tal, Bhairavnath Temple" },
            "Badrinath Dham": { description: "Badrinath Dham is a famous Hindu temple dedicated to Lord Vishnu, situated in the town of Badrinath at 3,133 meters in Uttarakhand. It lies on the banks of the Alaknanda River, surrounded by the Nar and Narayan mountain ranges. Pilgrims also visit nearby Mana Village, the last Indian village near the Indo-Tibetan border, to experience local culture and ancient traditions", image:"images/Badrinath.webp", distance:"3 km from Mana Village to Badrinath temple town", difficulty:"Easy – Accessible by road with short local treks", days:"1–2 days (including local sightseeing and short treks)", nearby:"Mana Village, Tapt Kund (hot springs), Neelkanth Peak" }
        },
        "Panch Kedar": {
            "Kedarnath": { description: "Most famous of the five, reached from Gaurikund.The trek from Gaurikund to Kedarnath takes you through scenic valleys, rivers, and dense pine forests. The temple is part of the Chota Char Dham pilgrimage and is especially significant during the summer months.", image:"images/kedarnath.webp", distance:"14 km trek from Gaurikund to Kedarnath", difficulty:"Moderate – Steep inclines and high-altitude trekking", days:"1 day (trek from Gaurikund)", nearby:"Gaurikund, Vasuki Tal, Bhairavnath Temple" },
            "Tungnath": { description: "Tungnath is the highest Shiva temple in the world, located at 3,680 meters in the Garhwal Himalayas. The trek starts from Chopta and passes through beautiful alpine meadows and dense forests. The temple is believed to be the place where Lord Shiva meditated, making it a spiritually significant destination.", image:"images/tungnath.webp", distance:"3.5 km trek from Chopta to Tungnath temple", difficulty:"Moderate – Steep ascent but well-marked trails", days:"1 day (Chopta to Tungnath and back)", nearby:"Chopta, Chandrashila peak" },
            "Rudranath": { description: "Rudranath is a remote and challenging temple dedicated to Lord Shiva, located at 3,600 meters. The trek takes you through thick forests, scenic valleys, and high-altitude meadows. This pilgrimage is considered difficult due to steep trails and rugged terrain but rewards trekkers with pristine landscapes and spiritual serenity.", image:"images/rudranath.jpg", distance:"18–20 km from Sari village", difficulty:"Difficult – Long ascent, rough terrain", days:"2–3 days", nearby:"Sari Village, Badhangarhi, Valley of Joshimath" },
            "Madhyamaheshwar": { description: "Madhyamaheshwar is a sacred temple dedicated to Lord Shiva, situated at 3,490 meters. The temple is believed to house the navel of Lord Shiva. The trek passes through lush forests, rivers, and charming villages, offering both spiritual and natural beauty. It is less crowded compared to Kedarnath, making it a peaceful retreat.", image:"images/madmaheshwar.webp", distance:"16 km trek from Helang to Madhyamaheshwar", difficulty:"Moderate – Dense forest and river crossings", days:"2 days", nearby:"Helang, Urgam Valley" },
            "Kalpeshwar": { description: "Kalpeshwar is a small cave temple dedicated to Lord Shiva, located at 2,200 meters. Unlike the other Panch Kedar temples, it is accessible year-round and offers a serene trekking experience through forests and meadows. Pilgrims often combine this trek with visits to the surrounding villages and scenic viewpoints.", image:"images/Kalpeshwar.jpg", distance:"3–4 km trek from Urgam village", difficulty:"Easy – Gentle ascent, suitable for beginners", days:"1 day", nearby:"Urgam Village, Urgam Valley" }
        },
        "Popular Treks": {
    "Har Ki Dun": { 
        description: "Har Ki Dun, famously called the 'Valley of Gods,' is a pristine alpine valley nestled in the Garhwal Himalayas. The trek winds through dense pine and oak forests, sparkling rivers, and traditional Garhwali villages. Snow-capped peaks tower above, and wildflowers bloom abundantly in summer, offering a magical experience for both nature lovers and spiritual seekers.", 
        image:"images/har ki doon valley.webp", 
        distance:"16–18 km (one-way)", 
        difficulty:"Easy to Moderate – Gentle climbs suitable for beginners", 
        days:"4–5 days", 
        nearby:"Osla Village, Sankri" 
    },
    "Kedarkantha Trek": { 
        description: "Kedarkantha is a winter paradise trek, famous for its thick blanket of snow and panoramic views of the Himalayas. The trail passes through charming villages, dense forests of oak, pine, and rhododendron, and open meadows. The summit offers breathtaking sunrise views over surrounding peaks, making it a favorite for photographers and adventure enthusiasts.", 
        image:"images/Kedarkantha-13.jpg", 
        distance:"20 km (round trip)", 
        difficulty:"Moderate – Gradual ascent, snow can make it slightly challenging", 
        days:"4 days", 
        nearby:"Gwaldam, Sankri" 
    },
    "Chopta-Chandrashila": { 
        description: "This trek takes adventurers to Tungnath, the world’s highest Shiva temple, before ascending to Chandrashila peak at 4,090 meters. Along the way, trekkers pass through lush green meadows, pine forests, and panoramic viewpoints. The summit provides 360-degree views of majestic Himalayan peaks, including Nanda Devi and Trishul, making every step rewarding.", 
        image:"images/chandrashila-top-view.jpg", 
        distance:"5 km trek from Chopta to Chandrashila summit", 
        difficulty:"Moderate – Steep ascent near summit", 
        days:"1–2 days", 
        nearby:"Chopta, Tungnath" 
    },
    "Valley of Flowers": { 
        description: "A UNESCO World Heritage Site, the Valley of Flowers is a breathtaking paradise filled with vibrant alpine flora, rare species, and cascading streams. The trek traverses lush green meadows, snow-dusted ridges, and serene waterfalls. The valley comes alive during the monsoon with a kaleidoscope of colors, making it one of India’s most spectacular floral treks.", 
        image:"images/valley of flowers.webp", 
        distance:"13 km (one-way) from Govindghat", 
        difficulty:"Easy to Moderate – Gentle terrain, accessible for beginners", 
        days:"3–4 days", 
        nearby:"Govindghat, Ghangaria" 
    },
    "Roopkund Trek": { 
        description: "The Roopkund Trek leads to the mysterious glacial lake, famously known as 'Skeleton Lake,' surrounded by snow-capped peaks. Trekkers journey through dense forests, high-altitude meadows, and rugged trails. The lake, with human skeletons visible at the bottom, offers a haunting yet awe-inspiring glimpse into history and nature’s raw beauty.", 
        image:"images/roopkund.webp", 
        distance:"53 km (round trip)", 
        difficulty:"Difficult – High altitude, steep climbs", 
        days:"8–9 days", 
        nearby:"Wan, Bedni Bugyal" 
    },
    "Kuari Pass": { 
        description: "Kuari Pass, known as the 'Lord Curzon Trail,' is a mesmerizing trek that provides breathtaking views of Nanda Devi, Dronagiri, and other Himalayan peaks. Trekkers pass through dense forests, alpine meadows, and snowfields during winter. The trail combines adventure, photography, and spiritual serenity, making it a truly unforgettable journey.", 
        image:"images/kuari pass.webp", 
        distance:"35 km (round trip)", 
        difficulty:"Moderate – Steep ascents, snow in winter", 
        days:"6–7 days", 
        nearby:"Joshimath, Auli" 
    },
    "Nag Tibba Trek": { 
        description: "Nag Tibba is a perfect weekend getaway trek offering panoramic views of the Garhwal Himalayas. The trail passes through quiet villages, dense forests, and open meadows. The summit reveals stunning sunrise and sunset vistas, making it a favorite for beginners and families seeking a quick, scenic adventure.", 
        image:"images/nag tibba.webp", 
        distance:"15 km (round trip)", 
        difficulty:"Easy – Gentle climb, suitable for beginners", 
        days:"1–2 days", 
        nearby:"Sankri, Pantwari" 
    },
    "Brahmatal Trek": { 
        description: "Brahmatal is a winter trek known for its serene frozen lake surrounded by snow-covered peaks. Trekkers enjoy the tranquility of alpine meadows, forests, and occasional snowfields. The trail offers spectacular sunrise views over Mount Trishul and Mount Nanda Ghunti, making it a peaceful yet visually stunning adventure.", 
        image:"images/bramhatal.webp", 
        distance:"16 km (round trip)", 
        difficulty:"Moderate – Snow can make it slippery", 
        days:"4–5 days", 
        nearby:"Mussourie, Lohajung" 
    },
    "Pindari Glacier Trek": { 
        description: "The Pindari Glacier Trek is a classic Kumaon adventure that takes trekkers through lush forests, rivers, and alpine meadows. The journey culminates at the magnificent Pindari Glacier, offering breathtaking views of snow-clad peaks. The trek combines natural beauty, challenging terrain, and cultural immersion in the surrounding villages.", 
        image:"images/pindari.webp", 
        distance:"90 km (round trip)", 
        difficulty:"Moderate – Some steep stretches", 
        days:"6–7 days", 
        nearby:"Lohajung, Dhakuri" 
    },
    "Phulara Ridge Trek": { 
        description: "Phulara Ridge is a rare ridge trek that offers uninterrupted panoramic views of the Himalayas. The trail passes through pristine forests, high-altitude meadows, and rugged landscapes. Ideal for adventurous trekkers seeking solitude and photography opportunities, this trek is both challenging and rewarding.", 
        image:"images/phulara ridge.webp", 
        distance:"30–35 km", 
        difficulty:"Moderate to Difficult – Ridge trek with exposed trails", 
        days:"5–6 days", 
        nearby:"Nainital, Kausani" 
    },
    "Dodital Trek": { 
        description: "Dodital is a serene trekking destination centered around a pristine freshwater lake, believed to be the birthplace of sage Ved Vyasa. The trail passes through rhododendron forests, rivers, and quiet villages, offering a peaceful escape from city life and a chance to connect with nature.", 
        image:"images/dodital.jpg", 
        distance:"22 km (round trip)", 
        difficulty:"Moderate – Gentle trails with occasional steep sections", 
        days:"4–5 days", 
        nearby:"Uttarkashi, Sangamchatti" 
    },
    "Binsar Trek": { 
        description: "Binsar is a short weekend trek offering breathtaking views of snow-capped Himalayan peaks. The trail winds through dense oak and pine forests and leads to viewpoints overlooking the mountains. It’s perfect for photography enthusiasts and those looking for a quick nature getaway.", 
        image:"images/binsar.webp", 
        distance:"10–12 km", 
        difficulty:"Easy – Gentle trails, suitable for beginners", 
        days:"1–2 days", 
        nearby:"Binsar, Almora" 
    }
},
"Underrated & Challenging": {
    "Bali Pass Trek": { 
        description: "Bali Pass is a high-altitude trek connecting the Har Ki Dun valley with Yamunotri. This challenging trek takes adventurers through dense pine and oak forests, alpine meadows, and snow-laden ridges. The views from the pass reveal panoramic vistas of the Bandarpunch and Kalanag ranges. Due to its remote location, trekkers experience solitude, pristine nature, and a true Himalayan adventure far from the crowds.", 
        image:"images/bali pass.webp", 
        distance:"36–38 km (round trip)", 
        difficulty:"Difficult – Steep ascents, high altitude, and unpredictable weather", 
        days:"7–8 days", 
        nearby:"Har Ki Dun, Osla Village" 
    },
    "Auden's Col Trek": { 
        description: "Auden's Col is a high-altitude pass located in the eastern Garhwal region. The trek offers an adventurous route through glaciers, snowfields, and rugged terrain. Trekkers are rewarded with dramatic views of Trisul, Nanda Devi, and other Himalayan giants. This expedition demands technical skills, stamina, and proper acclimatization, making it a dream trek for seasoned mountaineers seeking a remote wilderness experience.", 
        image:"images/auden col.webp", 
        distance:"45–50 km (round trip)", 
        difficulty:"Very Difficult – Glacier crossings, high altitude, and technical sections", 
        days:"8–10 days", 
        nearby:"Barkot, Kharkiya" 
    },
    "Kalindi Khal Trek": { 
        description: "Kalindi Khal is one of the most challenging multi-day treks in India, traversing glaciers, high passes, and alpine meadows. This trek connects the Gangotri and Badrinath regions, offering an epic journey through some of the remotest parts of the Garhwal Himalayas. The trek is for expert trekkers due to crevasse crossings, unpredictable weather, and strenuous climbs, but the awe-inspiring views of Mt. Kamet, Hathi Parvat, and surrounding glaciers make it unforgettable.", 
        image:"images/kalindi.webp", 
        distance:"70–75 km (round trip)", 
        difficulty:"Extremely Difficult – High altitude, glacier navigation, and technical terrain", 
        days:"10–12 days", 
        nearby:"Badrinath, Gangotri" 
    },
    "Ranthan Kharak Trek": { 
        description: "Ranthan Kharak is an offbeat trail in Kumaon, offering trekkers a pristine Himalayan experience away from mainstream routes. The trek passes through lush forests, serene villages, and meadows dotted with wildflowers. Panoramic views of Nanda Devi and Trishul ranges greet trekkers at every turn. Its remoteness and rugged terrain make it ideal for adventure seekers looking for tranquility and untouched natural beauty.", 
        image:"images/ranthan kharak.webp", 
        distance:"25–28 km (round trip)", 
        difficulty:"Moderate to Difficult – Rugged trails with steep sections", 
        days:"5–6 days", 
        nearby:"Munsiyari, Ralam Valley" 
    },
    "Mukta Top Trek": { 
        description: "Mukta Top is an offbeat trekking destination that takes you through dense forests, alpine meadows, and quaint villages. The summit provides mesmerizing views of the Kumaon Himalayas, including Panchachuli and Nanda Devi peaks. The trek is less crowded, offering a serene escape, and is perfect for trekkers who enjoy solitude, photography, and connecting deeply with nature.", 
        image:"images/mukta top.webp", 
        distance:"22–24 km (round trip)", 
        difficulty:"Moderate – Mix of steep ascents and gentle paths", 
        days:"4–5 days", 
        nearby:"Munsiyari, Thal Kedar" 
    },
    "Adi Kailash & Om Parvat": { 
        description: "Adi Kailash and Om Parvat trek is a spiritual journey to sacred peaks and glacial lakes in the far reaches of Uttarakhand. Trekkers experience remote Himalayan villages, pristine rivers, and high-altitude passes. Om Parvat, known for its unique snow pattern resembling the sacred 'Om,' adds a mystical charm. This trek combines adventure, spirituality, and breathtaking Himalayan vistas, making it a pilgrimage of both body and soul.", 
        image:"images/adi kailash.jpg", 
        distance:"50–55 km (round trip)", 
        difficulty:"Difficult – High altitude trekking, rugged terrain, and long days", 
        days:"8–9 days", 
        nearby:"Gunji, Sinla Pass" 
    },
    "Kafni Glacier Trek": { 
        description: "Kafni Glacier is a quieter alternative to the popular Pindari Glacier trek. The trail meanders through charming villages, dense forests, rivers, and alpine meadows. Trekkers are rewarded with spectacular views of the Kafni Glacier and surrounding snow-capped peaks. Its relative solitude and serene landscapes make it ideal for those seeking a peaceful yet challenging Himalayan adventure.", 
        image:"images/kafni glacier.webp", 
        distance:"22–24 km (round trip)", 
        difficulty:"Moderate – Steep stretches near the glacier, high altitude", 
        days:"4–5 days", 
        nearby:"Lohajung, Pindari Valley" 
    }
    }
    },
  "Himachal Pradesh": {
    "Religious Treks": {
        "Yulla Kanda Trek": { 
            description: "Yulla Kanda Trek is home to one of the highest Krishna temples in the world, perched amidst the breathtaking peaks of Himachal Pradesh. The trek winds through dense forests, terraced fields, and quaint Himalayan villages. Trekkers experience serene landscapes, the chanting of local devotees, and an authentic spiritual atmosphere. The journey combines physical challenge with divine tranquility, making it a unique pilgrimage trek.", 
            image:"images/yulla kanda.jpg", 
            distance:"10–12 km trek from base village", 
            difficulty:"Moderate – Steep paths, narrow trails, and high-altitude trekking", 
            days:"1–2 days", 
            nearby:"Sangla Valley, Baspa River, Kanda Village" 
        },
        "Shrikhand Mahadev": { 
            description: "Shrikhand Mahadev is a high-altitude pilgrimage trek dedicated to Lord Shiva. Starting from the village of Jaon, the trail takes trekkers through lush pine forests, alpine meadows, and challenging rocky paths. The summit offers awe-inspiring views of the Kinnaur and Spiti ranges. This trek is not just a spiritual journey but also a test of endurance, attracting adventurers seeking both divine blessings and thrilling Himalayan experiences.", 
            image:"images/shrikhand mahadev.jpg", 
            distance:"32 km round trip", 
            difficulty:"Difficult – Steep climbs, high-altitude exposure, and unpredictable weather", 
            days:"6–7 days", 
            nearby:"Jaon, Kalpa, Sarahan" 
        },
        "Manimahesh Lake": { 
            description: "Manimahesh Lake trek is an annual sacred pilgrimage dedicated to Lord Shiva. Located in the Chamba district, the trek traverses dense forests, river valleys, and high-altitude meadows. Pilgrims and trekkers alike witness the pristine lake reflecting the snow-capped peaks, offering a spiritual and visually stunning experience. The trek is usually undertaken during the Manimahesh Yatra season, attracting devotees from across the country.", 
            image:"images/manimahesh.webp", 
            distance:"14 km trek from Hadsar to Manimahesh Lake", 
            difficulty:"Moderate – Uphill trails, rocky paths, and variable weather", 
            days:"2–3 days", 
            nearby:"Hadsar, Chamba, Bharmour" 
        },
        "Prashar Lake": { 
            description: "Prashar Lake trek leads to a tranquil high-altitude lake in Mandi district, famous for its pagoda-style temple on the shore. The trek passes through thick cedar forests, meadows, and streams, providing peaceful natural surroundings. The temple adds a spiritual dimension, and the panoramic views of the Dhauladhar and Pir Panjal ranges make this trek a perfect blend of adventure, nature, and spirituality.", 
            image:"images/prashar lake.webp", 
            distance:"5–6 km trek from Baggi Village", 
            difficulty:"Easy to Moderate – Gentle ascent suitable for beginners", 
            days:"1 day", 
            nearby:"Baggi Village, Mandi, Janjehli Valley" 
        },
        "Bijli Mahadev": { 
            description: "Bijli Mahadev Trek is famous for its temple perched atop a cliff, known for attracting lightning strikes, giving the site its name. The trail passes through dense forests, rolling hills, and quaint villages, offering spectacular views of the Kullu Valley. Trekkers experience both spiritual devotion and adventure, as reaching the summit involves a moderate climb with occasional rock scrambling. The temple provides a panoramic vista of the surrounding Himalayan peaks.", 
            image:"images/bijli mahadev.jpg", 
            distance:"6 km trek from Solang Village to the temple", 
            difficulty:"Moderate – Steep ascents and rocky trails", 
            days:"1 day", 
            nearby:"Solang Valley, Kullu, Beas River" 
        }
    },

       "Popular Treks": {
    "Hampta Pass": { 
        description: "Hampta Pass Trek is a stunning crossover trek connecting Kullu Valley to Lahaul Valley, offering trekkers a mix of lush green valleys, rocky terrains, and snow-capped peaks. The trek begins from Jobra village and passes through Hampta Valley, known for its alpine meadows, dramatic cliffs, and picturesque streams. Trekkers experience varying landscapes, from dense forests to glacial paths, making it a favorite for both beginners and experienced trekkers looking for a diverse Himalayan adventure.", 
        image:"images/hempta pass.jpg", 
        distance:"35 km round trip from Jobra to Chatru", 
        difficulty:"Moderate – Mix of easy valley paths and steep inclines with snow in higher sections", 
        days:"4–5 days", 
        nearby:"Jobra, Hampta Valley, Chatru, Chandratal Lake" 
    },
    "Triund": { 
        description: "Triund Trek is a popular weekend trek near McLeod Ganj, offering panoramic views of the Dhauladhar ranges and Kangra Valley. The trail begins from Mcleod Ganj and winds through dense oak and rhododendron forests, passing quaint villages and streams. It’s ideal for beginners and those seeking a short, scenic trek. Camping at the Triund ridge provides a mesmerizing sunset and sunrise experience over the snow-capped peaks, making it a perfect combination of nature, adventure, and relaxation.", 
        image:"images/triund.jpg", 
        distance:"9 km one way from Mcleod Ganj to Triund", 
        difficulty:"Easy to Moderate – Gentle ascent suitable for beginners", 
        days:"1–2 days", 
        nearby:"Mcleod Ganj, Dharamkot, Bhagsu Village" 
    },
    "Beas Kund": { 
        description: "Beas Kund Trek takes you to the source of the Beas River, located at the base of Indrasan and Deo Tibba peaks. The trek begins from Solang Valley and passes through dense forests, waterfalls, and high-altitude meadows. Trekkers witness the pristine glacier-fed lake surrounded by majestic peaks, making it both a spiritual and adventurous experience. The trek is moderately challenging with steep ascents, rewarding trekkers with panoramic Himalayan views and an unforgettable alpine experience.", 
        image:"images/beas kund.webp", 
        distance:"13 km one way from Solang Valley to Beas Kund", 
        difficulty:"Moderate – Steep inclines and rocky terrain", 
        days:"2 days", 
        nearby:"Solang Valley, Dhundi, Indrasan Peak, Deo Tibba Peak" 
    },
    "Bhrigu Lake": { 
        description: "Bhrigu Lake Trek is a high-altitude trek near Manali, leading to the sacred Bhrigu Lake at 4,300 meters. The trek starts from Gulaba village and passes through meadows, streams, and scenic valleys. Surrounded by towering peaks, the lake is believed to have spiritual significance and is often frozen in winter. Trekkers enjoy a mix of adventure and serenity while camping under the stars, with panoramic views of the surrounding Himalayan ranges. It’s perfect for those seeking an offbeat and spiritually uplifting experience.", 
        image:"images/bhrigu lake.webp", 
        distance:"20 km round trip from Gulaba to Bhrigu Lake", 
        difficulty:"Moderate – High altitude with some steep sections", 
        days:"2–3 days", 
        nearby:"Gulaba, Solang Valley, Rohtang Pass" 
    },
    "Pin Parvati Pass": { 
        description: "Pin Parvati Pass Trek is a challenging high-altitude trek connecting the lush Parvati Valley to the remote Pin Valley in Spiti. Starting from Pulga village, trekkers pass through dense forests, waterfalls, alpine meadows, and glacial terrains. The trek offers a spectacular mix of greenery, snowfields, and barren landscapes. It’s ideal for experienced trekkers looking for adventure, endurance testing, and incredible Himalayan vistas. Crossing the pass provides an unmatched sense of accomplishment and scenic reward.", 
        image:"images/pin parvati pass.jpg", 
        distance:"55–60 km round trip from Pulga to Pin Valley", 
        difficulty:"Difficult – Long distances, high altitude, and challenging terrain", 
        days:"7–9 days", 
        nearby:"Pulga, Mantalai, Pin Valley National Park" 
    },
    "Buran Ghati": { 
        description: "Buran Ghati Trek is a thrilling adventure featuring snow walls, glacial streams, and dramatic Himalayan ridges. The trek starts from Manali and follows remote trails through dense forests, alpine meadows, and snow-laden passes. Buran Ghati is less crowded and ideal for trekkers seeking solitude and raw Himalayan landscapes. With its steep ascents and high-altitude passes, the trek demands physical endurance but rewards adventurers with breathtaking views, challenging climbs, and a true sense of Himalayan wilderness.", 
        image:"images/buran ghati.webp", 
        distance:"50 km round trip from Manali", 
        difficulty:"Difficult – Snow walls, steep climbs, and glacial terrain", 
        days:"6–7 days", 
        nearby:"Manali, Marhi, Rohtang Pass" 
    },
    "Kheerganga": { 
        description: "Kheerganga Trek is a serene trail in Parvati Valley, known for its natural hot springs and lush landscapes. Starting from Barshaini, the trek passes through pine forests, waterfalls, and quaint villages. Trekkers enjoy relaxing in the geothermal hot springs at the summit, making it a unique combination of adventure and rejuvenation. Kheerganga is ideal for beginners and seasoned trekkers alike, offering stunning valley views, a peaceful camping experience, and the chance to explore local Himachali culture along the way.", 
        image:"images/kheerganga.webp", 
        distance:"13 km one way from Barshaini to Kheerganga", 
        difficulty:"Moderate – Gentle ascent with some rocky paths", 
        days:"1–2 days", 
        nearby:"Barshaini, Pulga, Tosh Village" 
    }
},
 
        "Underrated & Challenging": {
    "Kugti Pass": { 
        description: "Kugti Pass Trek is a remote trail in Chamba district, offering a pristine Himalayan adventure away from the usual tourist routes. The trek takes you through dense forests, high-altitude meadows, and rugged mountain terrain. Trekkers are rewarded with sweeping views of the Kugti Glacier, snow-capped peaks, and the untouched beauty of the Chamba Valley. Ideal for experienced trekkers seeking solitude and raw Himalayan landscapes, this trek tests endurance while providing an unforgettable wilderness experience.", 
        image:"images/kugti pass.webp", 
        distance:"45 km round trip from Baggi Village", 
        difficulty:"Difficult – Long ascent, high altitude, and rugged terrain", 
        days:"6–7 days", 
        nearby:"Baggi Village, Chamba, Kugti Glacier" 
    },
    "Lamkhaga Pass": { 
        description: "Lamkhaga Pass Trek is a challenging high-altitude trek that connects Himachal Pradesh with Uttarakhand. Starting from Jaon village, trekkers navigate steep ascents, dense forests, and glacial paths to reach the pass at over 5,200 meters. The trek offers breathtaking views of Himalayan peaks, remote valleys, and pristine landscapes. It is considered one of the toughest treks in the region, suitable only for experienced trekkers seeking adventure, thrill, and unparalleled scenic rewards.", 
        image:"images/lamkhaga.jpg", 
        distance:"55 km round trip from Jaon", 
        difficulty:"Very Difficult – High altitude, technical terrain, snowfields", 
        days:"8–10 days", 
        nearby:"Jaon Village, Yamunotri, Jainti Glacier" 
    },
    "Friendship Peak": { 
        description: "Friendship Peak is a popular trekking and mountaineering destination near Manali, offering panoramic views of the Pir Panjal and Dhauladhar ranges. The trek begins from Solang Valley and ascends through lush meadows, forests, and rocky slopes, culminating at the summit at 5,289 meters. Ideal for adventure enthusiasts and beginner mountaineers, the trek provides a mix of trekking and light mountaineering, with the thrill of standing atop a Himalayan peak and witnessing breathtaking sunrise and sunset vistas.", 
        image:"images/friendship peak.webp", 
        distance:"14 km round trip from Solang Valley", 
        difficulty:"Moderate – Requires basic mountaineering skills", 
        days:"2 days", 
        nearby:"Solang Valley, Manali, Beas Kund" 
    },
    "Indrahar Pass": { 
        description: "Indrahar Pass Trek is an offbeat trek across the Dhauladhar ranges, connecting McLeod Ganj with Triund and Lahesh Caves. The trail passes through dense forests, cascading waterfalls, alpine meadows, and rugged ridges. At an altitude of 4,342 meters, the pass offers breathtaking views of Kangra Valley and Chamba ranges. Trekkers experience a mix of adventure, natural beauty, and solitude, making it one of the most scenic yet physically demanding treks in Himachal Pradesh.", 
        image:"images/indrahar pass.jpg", 
        distance:"20 km round trip from McLeod Ganj to Indrahar Pass", 
        difficulty:"Moderate to Difficult – Steep ascents and rocky terrain", 
        days:"3–4 days", 
        nearby:"McLeod Ganj, Triund, Lahesh Caves" 
    },
    "Kareri Lake": { 
        description: "Kareri Lake Trek is a high-altitude trek to a pristine glacial lake located at 2,934 meters near Dharamshala. The trek begins from Kareri Village and passes through thick pine forests, rolling meadows, and streams. Kareri Lake is sacred for local communities and offers an idyllic camping experience. Trekkers enjoy the serenity of the lake, panoramic Himalayan views, and the beauty of untouched landscapes, making it a perfect combination of adventure and peaceful retreat.", 
        image:"images/kareri-lake-trek-1024x767.webp", 
        distance:"13 km one way from Kareri Village", 
        difficulty:"Moderate – Gentle ascent with some rocky sections", 
        days:"1–2 days", 
        nearby:"Kareri Village, Dharamshala, Dhauladhar Range" 
    },
    "Charang Valley": { 
        description: "Charang Valley Trek is a remote trek in Kinnaur district, taking trekkers through untouched valleys, high-altitude meadows, and glacial streams. The trail offers incredible views of snow-capped peaks and pristine landscapes, providing an offbeat experience far from crowded routes. This trek is ideal for experienced trekkers seeking solitude, adventure, and a connection with nature, offering opportunities for wildlife sightings, photography, and an authentic Himalayan trekking experience.", 
        image:"images/charang valley.webp", 
        distance:"35–40 km round trip from Reckong Peo", 
        difficulty:"Difficult – Long trek with high-altitude terrain", 
        days:"6–7 days", 
        nearby:"Reckong Peo, Charang Village, Spiti River" 
    },
    "Malana Village": { 
        description: "Malana Village Trek is a culturally immersive trek to the ancient village of Malana in Parvati Valley. The village is known for its unique traditions, distinct language, and historic architecture. The trek passes through lush forests, meadows, and rivers, offering a blend of natural beauty and cultural exploration. Trekkers experience the mystique of the village while enjoying panoramic views of the Himalayas, making it a rewarding adventure for those interested in both trekking and local heritage.", 
        image:"images/malana village.webp", 
        distance:"12 km one way from Jari", 
        difficulty:"Moderate – Some steep sections and uneven terrain", 
        days:"1–2 days", 
        nearby:"Jari, Parvati Valley, Kheerganga" 
    },
    "Ghepan Ghat Lake": { 
        description: "Ghepan Ghat Lake Trek is a scenic and largely unexplored glacial lake trek in Himachal Pradesh. The trail takes trekkers through alpine meadows, dense forests, and glacial streams, culminating at a serene high-altitude lake surrounded by towering Himalayan peaks. This offbeat trek is ideal for adventurers seeking tranquility, natural beauty, and solitude, providing a rare opportunity to experience untouched landscapes, pristine waters, and the sheer magnificence of the high Himalayas.", 
        image:"images/ghepan ghat.webp", 
        distance:"18–20 km round trip from Narkanda", 
        difficulty:"Difficult – Steep climbs and high-altitude terrain", 
        days:"3–4 days", 
        nearby:"Narkanda, Hatu Peak, Sangla Valley" 
    }
}
   },
    "Ladakh": {
        "Iconic & Expedition Treks": {
    "Chadar Trek": { 
        description: "Chadar Trek is a legendary winter trek over the frozen Zanskar River in Ladakh, offering one of the most extreme and unique trekking experiences in India. Trekkers walk on a solid sheet of ice, surrounded by dramatic canyon walls and icy landscapes. The trek challenges endurance and resilience with sub-zero temperatures and remote terrain, but rewards adventurers with surreal beauty, traditional Ladakhi villages, and the thrill of traversing a frozen river that has been used for centuries by locals.", 
        image:"images/chadar.webp", 
        distance:"105 km round trip from Leh", 
        difficulty:"Very Difficult – Extreme cold, ice walking, high altitude", 
        days:"9–12 days", 
        nearby:"Leh, Zanskar Valley, Padum" 
    },
    "Markha Valley": { 
        description: "Markha Valley Trek is a classic trek through the arid yet stunning landscapes of Ladakh, weaving through ancient villages, monasteries, and rugged mountains. Trekkers experience the unique culture of Ladakhi people, encounter Himalayan wildlife, and cross high passes offering panoramic views of the Himalayas. The trek is moderately challenging with long days of walking through dry valleys, river crossings, and occasional snow patches, making it a rewarding journey for those seeking both adventure and cultural immersion.", 
        image:"images/markha  valley.webp", 
        distance:"65 km round trip from Leh", 
        difficulty:"Moderate – High altitude trekking with some steep ascents", 
        days:"6–7 days", 
        nearby:"Leh, Hemis, Spituk, Markha Village" 
    },
    "Kang Yatse II": { 
        description: "Kang Yatse II is a challenging trekking peak in the Markha Valley region of Ladakh, standing at 6,250 meters. Trekkers ascend through rugged terrain, glaciers, and high passes, making it ideal for experienced mountaineers and adventure enthusiasts. The trek offers unparalleled Himalayan vistas, technical climbing sections, and the chance to conquer a true Himalayan peak. It is a physically demanding expedition that tests endurance, stamina, and mountaineering skills, while rewarding climbers with breathtaking summit views.", 
        image:"images/kang yaste.jpg", 
        distance:"70 km including base camp approach", 
        difficulty:"Very Difficult – High-altitude mountaineering, glacier travel", 
        days:"8–10 days", 
        nearby:"Markha Valley, Leh, Kongmaru La" 
    },
    "Dzo Jongo East": { 
        description: "Dzo Jongo East is a remote and challenging expedition in the Trans-Himalayan region, suitable for expert trekkers and mountaineers. The trek features glaciers, snowfields, and rugged mountain terrain, offering an offbeat adventure with minimal human presence. Trekkers experience breathtaking vistas, wild landscapes, and the thrill of exploring a rarely visited Himalayan peak. The trek demands excellent fitness, technical climbing skills, and preparation for unpredictable weather, making it a true expedition for the adventurous soul.", 
        image:"images/dzo jongo east.webp", 
        distance:"Approx. 60–70 km including base camp approach", 
        difficulty:"Very Difficult – Technical trekking, glacier crossing, high altitude", 
        days:"7–9 days", 
        nearby:"Leh, Stok Range, Zanskar Valley" 
    },
    "Rumtse-Tso Moriri": { 
        description: "Rumtse to Tso Moriri Trek is a stunning trek across Ladakh's remote landscapes, connecting the picturesque village of Rumtse with the serene Tso Moriri Lake. Trekkers pass through high-altitude deserts, rugged valleys, and snow-capped peaks, experiencing the tranquility and vastness of the Trans-Himalayan region. The trek offers incredible opportunities for wildlife spotting, photography, and cultural encounters with remote Ladakhi communities, making it a perfect blend of adventure, nature, and solitude.", 
        image:"images/rumte tso moriri.webp", 
        distance:"90 km round trip", 
        difficulty:"Difficult – High-altitude trekking with steep sections", 
        days:"6–8 days", 
        nearby:"Rumtse, Tso Moriri Lake, Leh" 
    },
    "Phuktal Monastery": { 
        description: "Phuktal Monastery Trek is a remote Himalayan trek leading to one of the most secluded and beautiful monasteries in Zanskar, built into a cliff face. The trek passes through narrow gorges, pristine rivers, and dramatic landscapes, offering trekkers an immersive spiritual and natural experience. This offbeat trail is less frequented, providing solitude and a connection with the monastic lifestyle. The serene environment, combined with spectacular vistas, makes this trek both spiritually and visually rewarding for adventurers seeking tranquility.", 
        image:"images/phutkar monastery.webp", 
        distance:"Approx. 25 km from Tsarap Village", 
        difficulty:"Moderate – Remote trail with river crossings and uneven terrain", 
        days:"3–4 days", 
        nearby:"Zanskar Valley, Tsarap Village, Padum" 
    },
    "Snow Leopard Trek": { 
        description: "Snow Leopard Trek in Hemis National Park is a rare wildlife trekking expedition focused on spotting the elusive snow leopard in its natural habitat. The trek traverses high-altitude valleys, meadows, and rugged terrain, offering breathtaking views of the surrounding Himalayas. Trekkers may also encounter other wildlife such as ibex, blue sheep, and Himalayan marmots. This offbeat trek combines adventure, wildlife observation, and the thrill of exploring untouched landscapes, making it an unforgettable experience for nature enthusiasts and wildlife photographers.", 
        image:"images/snow leoperd.webp", 
        distance:"Approx. 50 km within Hemis National Park", 
        difficulty:"Difficult – High-altitude trekking, steep ascents, cold conditions", 
        days:"5–7 days", 
        nearby:"Leh, Hemis, Hemis National Park" 
    }
}
  },
    "Jammu & Kashmir": {
       "Lakes & Glaciers": {
    "Kashmir Great Lakes": { 
        description: "The Kashmir Great Lakes Trek is a spectacular high-altitude trek that covers multiple pristine alpine lakes surrounded by the majestic peaks of the Himalayas. Trekkers experience vibrant meadows, sparkling streams, and the changing hues of each lake, including Vishansar, Krishansar, and Gangbal. This moderately challenging trek offers a mix of natural beauty, wildlife sightings, and traditional Kashmiri village culture. Each day brings new scenery, making it a visual feast for photographers and nature lovers alike.", 
        image:"images/great lake trek.avif", 
        distance:"70–80 km round trip", 
        difficulty:"Moderate to Difficult – High-altitude trekking with long daily hikes", 
        days:"8–9 days", 
        nearby:"Ganderbal, Sonamarg, Vishansar Lake" 
    },
    "Tarsar Marsar": { 
        description: "The Tarsar Marsar Trek takes you through two breathtaking alpine lakes—Tarsar and Marsar—in the Kashmir Valley. Surrounded by snow-capped peaks and lush meadows, this trek offers an offbeat experience for nature lovers and adventure enthusiasts. The trail passes through remote villages, pine forests, and expansive valleys, providing both solitude and scenic beauty. Trekkers can enjoy camping beside the pristine lakes, stargazing at night, and witnessing the rich flora and fauna of the region.", 
        image:"images/tarsar marsar.jpg", 
        distance:"40–45 km round trip", 
        difficulty:"Moderate – Remote trails with river crossings and elevation changes", 
        days:"5–6 days", 
        nearby:"Aru Village, Lidder Valley, Sonamarg" 
    },
    "Nafran Valley": { 
        description: "The Nafran Valley Trek is a lesser-known, tranquil trek that takes you through untouched Himalayan landscapes. Trekkers pass through dense forests, high-altitude meadows, and pristine streams, with minimal tourist footfall. The valley offers spectacular views of surrounding peaks, vibrant wildflowers in summer, and a serene camping experience away from the crowds. It’s ideal for trekkers seeking solitude, adventure, and the raw beauty of the Himalayas.", 
        image:"images/nafran valley.webp", 
        distance:"30–35 km round trip", 
        difficulty:"Moderate – Some steep climbs and uneven terrain", 
        days:"4–5 days", 
        nearby:"Aru, Pahalgam, Lidder Valley" 
    },
    "Kolaoi Glacier": { 
        description: "Kolaoi Glacier Trek is a scenic adventure through the Lidder Valley, leading to the stunning Kolaoi Glacier. Trekkers navigate through alpine meadows, pine forests, and rocky paths, witnessing the dramatic landscape of snowfields and glacier-fed streams. This trek is perfect for those seeking an offbeat experience with breathtaking natural beauty. Camp under starry skies, cross small streams, and explore remote Himalayan terrains that few travelers venture to, making it both challenging and rewarding.", 
        image:"images/kolaoi glacier.webp", 
        distance:"25–30 km round trip", 
        difficulty:"Moderate – Glacier approach, uneven trails", 
        days:"4–5 days", 
        nearby:"Aru Village, Lidder River, Pahalgam" 
    }
}
  },
  "Sikkim": {
    "Popular Treks": {
        "Goechala": { 
            description: "Goechala Trek is one of the most iconic treks in Sikkim, offering breathtaking close-up views of the mighty Kanchenjunga, the world’s third-highest peak. Trekkers traverse through lush rhododendron forests, alpine meadows, and pristine streams, experiencing the unique flora and fauna of Kanchenjunga National Park. The trek includes challenging ascents and descents, rewarding adventurers with panoramic vistas, glacial views, and serene camping spots under starry skies. Ideal for nature lovers, photographers, and trekking enthusiasts seeking an unforgettable Himalayan adventure.", 
            image:"images/goechala.webp", 
            distance:"90 km round trip", 
            difficulty:"Difficult – High-altitude trekking with steep climbs", 
            days:"12–14 days", 
            nearby:"Yuksom, Dzongri, Thangsing" 
        },
        "Hilley Varsey": { 
            description: "Hilley Varsey Trek is a hidden gem in Sikkim, famous for its spectacular rhododendron sanctuary. The trail passes through dense forests adorned with vibrant flowers in spring, scenic villages, and sweeping valley views. Trekkers enjoy quiet, offbeat paths with minimal tourist traffic, perfect for immersive nature experiences and photography. The combination of natural beauty, tranquility, and panoramic Himalayan vistas makes this trek a rewarding journey for adventure seekers and nature enthusiasts alike.", 
            image:"images/hilley varsey.jpg", 
            distance:"25–30 km round trip", 
            difficulty:"Moderate – Gentle ascents and well-marked trails", 
            days:"4–5 days", 
            nearby:"Gangtok, Temi Tea Garden, Hilley Village" 
        },
        "Green Lake": { 
            description: "Green Lake Trek takes adventurers to a remote, pristine alpine lake situated at the base of Kanchenjunga. This challenging trek involves traversing rocky terrains, high-altitude meadows, and glacier-fed streams. Trekkers witness stunning reflections of snow-capped peaks on the lake’s surface, camp in serene surroundings, and enjoy the solitude of untouched Himalayan wilderness. The trek combines adventure, spirituality, and nature photography opportunities, making it a must-do for serious trekking enthusiasts seeking an offbeat experience.", 
            image:"images/green lake.jpg", 
            distance:"40 km round trip", 
            difficulty:"Difficult – High-altitude trekking and glacier approach", 
            days:"6–7 days", 
            nearby:"Yuksom, Dzongri, Kanchenjunga Base Camp" 
        },
        "Dzongri": { 
            description: "Dzongri Trek is a classic route within Kanchenjunga National Park, offering panoramic views of Kanchenjunga, Pandim, and other Himalayan peaks. The trail passes through dense forests, vibrant meadows, and quaint mountain villages. Camp near Dzongri Top to witness the sunrise over the towering peaks, and experience the tranquility of high-altitude wilderness. This trek is suitable for trekkers seeking moderate adventure with breathtaking vistas and a taste of Sikkim’s natural beauty.", 
            image:"images/Dzongri-Trek_27th-nov.webp", 
            distance:"35–40 km round trip", 
            difficulty:"Moderate – Well-marked trails with some steep climbs", 
            days:"5–6 days", 
            nearby:"Yuksom, Thangsing, Dzongri" 
        },
        "Phoktey Dara": { 
            description: "Phoktey Dara Trek offers mesmerizing views of the 'Sleeping Buddha' mountain range and is a relatively less crowded trek in Sikkim. The trail meanders through lush rhododendron forests, terraced fields, and small local settlements. Trekkers enjoy peaceful camping spots, panoramic mountain views, and immersive experiences in the culture and lifestyle of Himalayan villagers. The trek is perfect for photography, nature observation, and experiencing the serene side of Sikkim’s high-altitude terrain.", 
            image:"images/phoktey dara.webp", 
            distance:"20–25 km round trip", 
            difficulty:"Moderate – Gentle trails with occasional steep sections", 
            days:"3–4 days", 
            nearby:"Gangtok, Phodong, Phoktey Village" 
        }
    }
},

// West Bengal
"West Bengal": {
    "Singalila & Darjeeling": {
        "Sandakphu": { 
            description: "Sandakphu Trek is the crown jewel of West Bengal trekking, offering panoramic views of four of the world’s highest peaks, including Everest and Kanchenjunga. The trek winds through the Singalila Ridge, dense forests, and charming villages, with vibrant rhododendrons in spring. Trekkers enjoy a mix of challenging ascents, serene campsites, and stunning sunrise views from Sandakphu Top. The route provides excellent opportunities for nature photography, bird watching, and experiencing the unique Himalayan culture of Darjeeling and Sikkim border villages.", 
            image:"images/sandakfu.webp", 
            distance:"45 km round trip", 
            difficulty:"Moderate to Difficult – Long climbs with steep sections", 
            days:"5–6 days", 
            nearby:"Manebhanjan, Tumling, Sandakphu" 
        },
        "Gorkhey Samanden": { 
            description: "Gorkhey Samanden Trek is a serene, offbeat trail through traditional Himalayan villages in West Bengal. Trekkers pass through rhododendron forests, terraced fields, and meadows with spectacular mountain views. This trek is ideal for those seeking solitude and authentic cultural interactions with local communities. The trail offers peaceful camping spots, gentle climbs, and opportunities to observe the flora, fauna, and lifestyle of remote villages tucked in the lap of the Himalayas.", 
            image:"images/samanden.webp", 
            distance:"20–25 km round trip", 
            difficulty:"Moderate – Gentle inclines and forest trails", 
            days:"3–4 days", 
            nearby:"Gorkhey, Samanden, Rishyap" 
        },
        "Bajre Dara": { 
            description: "Bajre Dara Trek is a tranquil ridge trek in Darjeeling, offering panoramic views of the Kanchenjunga range and the surrounding valleys. The trail passes through forested ridges, terraced farmlands, and small hamlets, providing a peaceful trekking experience away from the crowds. Trekkers can enjoy stunning sunrises and sunsets, spot diverse Himalayan flora and fauna, and immerse themselves in the natural beauty and serenity of this offbeat trekking route.", 
            image:"images/bajre dara.jpg", 
            distance:"15–20 km round trip", 
            difficulty:"Easy to Moderate – Gentle ridges and scenic trails", 
            days:"2–3 days", 
            nearby:"Rishyap, Tumling, Darjeeling" 
        }
    }
},
//meghalaya
"Meghalaya": {
    "Popular Treks":{
        "Living Root Bridges (Cherrapunji & Nongriat)": { 
            description: "The Living Root Bridge trek in Meghalaya is one of India’s most unique trekking experiences. These bridges are naturally grown by guiding the roots of rubber fig trees across rivers and streams, creating sturdy pathways that last for centuries. The most famous is the Double Decker Root Bridge in Nongriat, which requires a descent of over 3,000 steps through lush valleys, waterfalls, and vibrant Khasi villages. Trekkers witness waterfalls like Rainbow Falls and Blue Lagoon, while enjoying Meghalaya’s rich culture. It’s a blend of adventure, ecology, and tradition that cannot be found anywhere else in the world.", 
            image:"images/living root bridge.webp", 
            distance:"6–8 km round trip including steps and side trails", 
            difficulty:"Moderate – Long stair climbs and steep sections", 
            days:"1–2 days", 
            nearby:"Cherrapunji, Nongriat Village, Shillong" 
        },
        "David Scott Trail": { 
            description: "One of Meghalaya’s oldest trekking routes, the David Scott Trail dates back to the British era and connects Mawphlang to Lad Mawphlang. The trek takes you through rolling hills, crystal-clear streams, Khasi villages, and scenic valleys. Along the way, trekkers encounter ancient stone pathways, hanging bridges, and panoramic views of the East Khasi Hills. It’s a historic and cultural trail that beautifully blends adventure with Meghalaya’s rural charm.", 
            image:"images/david scott trail.webp", 
            distance:"16–18 km (one-way trail)", 
            difficulty:"Moderate – Long trek with forest and valley crossings", 
            days:"1 day", 
            nearby:"Mawphlang, Shillong" 
        },
        "Smit to Laitlum Canyon": { 
            description: "This trek takes you from the traditional Khasi village of Smit to the stunning Laitlum Canyon, known as the 'end of the hills'. The trail passes through rolling meadows, forest patches, and panoramic ridges. From Laitlum, trekkers can see deep gorges, endless hill ranges, and breathtaking sunset views. It’s one of the most rewarding treks in Meghalaya for photographers and nature lovers alike.", 
            image:"images/latyum canyon.webp", 
            distance:"12–14 km (one-way)", 
            difficulty:"Easy to Moderate – Gradual ascents with open ridges", 
            days:"1 day", 
            nearby:"Shillong, Smit, Laitlum" 
        }
    }
    },
    //assam
    "Assam": {
        "Popular Treks":{
        "Kaziranga National Park Trek": { 
            description: "Kaziranga, famous for the one-horned rhinoceros, also offers guided treks along forest edges and buffer zones. Trekkers can experience wetlands, tall grasslands, and riverbanks where rhinos, wild elephants, swamp deer, and migratory birds thrive. The trek offers a unique mix of adventure and wildlife photography. Unlike typical Himalayan treks, Kaziranga provides an eco-adventure blending conservation and exploration.", 
            image:"images/kazirangra.webp", 
            distance:"5–7 km guided eco-trails", 
            difficulty:"Easy – Mostly flat terrain with grasslands", 
            days:"Half-day to 1 day", 
            nearby:"Kohora, Tezpur, Guwahati" 
        },
        "Haflong Trek": { 
            description: "Known as the 'Switzerland of the East', Haflong is Assam’s only hill station, offering scenic trekking routes across rolling hills, lakes, and tribal villages. The trek passes through orange orchards, bamboo forests, and viewpoints overlooking Haflong Lake. It’s a serene and cultural trekking experience that showcases the beauty of the Dima Hasao district.", 
            image:"images/haflong_.jpg", 
            distance:"8–10 km local treks around Haflong", 
            difficulty:"Easy to Moderate – Gentle hill trails", 
            days:"1–2 days", 
            nearby:"Haflong town, Dima Hasao district" 
        },
        "Manas National Park Trek": { 
            description: "A UNESCO World Heritage Site, Manas National Park offers guided treks and eco-trails along the foothills of the Bhutan Himalayas. Trekkers walk through sal forests, riverbanks, and grasslands with chances to spot tigers, elephants, golden langurs, and a variety of birds. The backdrop of the Himalayas adds to the charm of this wild trekking experience, making it a must-visit for eco-tourists and wildlife lovers.", 
            image:"images/manas national park.webp", 
            distance:"6–10 km eco-trails", 
            difficulty:"Easy to Moderate – Forest paths and grasslands", 
            days:"1–2 days", 
            nearby:"Barpeta Road, Guwahati, Bhutan border" 
        }
    }
    },

    // Nagaland
   "Nagaland": {
    "Trek Peaks": {
        "Dzukou Valley": { 
            description: "Dzukou Valley is a stunning trekking destination located on the border of Nagaland and Manipur, renowned for its seasonal carpet of vibrant flowers, lush green meadows, and rolling hills. Trekkers pass through dense forests, serene streams, and breathtaking viewpoints offering panoramic vistas of the surrounding mountains. The valley is especially famous for its lilies and rhododendrons that bloom in monsoon and spring. This trek provides a peaceful, offbeat experience for nature lovers, photographers, and adventure seekers looking to escape the crowds and immerse themselves in the beauty of Northeast India.", 
            image:"images/zuku valley.webp", 
            distance:"10–12 km round trip", 
            difficulty:"Moderate – Gentle ascents with some steep patches", 
            days:"2–3 days", 
            nearby:"Kohima, Viswema, Dzukou Valley" 
        },
        "Japfu Peak": { 
            description: "Japfu Peak, the highest peak in Nagaland, offers trekkers an exhilarating high-altitude experience with spectacular views of the surrounding hills and valleys. The trek passes through dense rhododendron forests, grasslands, and isolated villages, providing a mix of natural beauty and cultural encounters. Sunrise from the summit offers a mesmerizing panorama of the Eastern Himalayas. This trek is ideal for adventure enthusiasts seeking challenging trails, breathtaking landscapes, and the thrill of conquering Nagaland’s highest point.", 
            image:"images/japfu peak.webp", 
            distance:"15–18 km round trip", 
            difficulty:"Difficult – Steep climbs and high-altitude trekking", 
            days:"3–4 days", 
            nearby:"Kohima, Viswema" 
        }
    }
},

"Arunachal Pradesh": {
    "Treks": {
        "Tawang Monastery": { 
            description: "The Tawang Monastery trek takes you to the largest Buddhist monastery in India, nestled amidst the snow-capped mountains of Arunachal Pradesh. The trail winds through scenic valleys, pine forests, and quaint villages, providing a perfect blend of spiritual experience and trekking adventure. Trekkers can witness traditional Monpa culture, stunning landscapes, and panoramic views of the Himalayas. This trek is ideal for those seeking both cultural immersion and the serenity of high-altitude trekking.", 
            image:"images/tawang monastery.jpg", 
            distance:"15–20 km round trip", 
            difficulty:"Moderate – Well-marked trails with some steep sections", 
            days:"3–4 days", 
            nearby:"Tawang, Bum La, Sela Pass" 
        },
        "Monpa Trail": { 
            description: "The Monpa Trail offers an offbeat trekking experience through remote villages, dense forests, and terraced fields inhabited by the Monpa tribe. Trekkers get to witness the unique culture, lifestyle, and architecture of this indigenous community while enjoying serene landscapes, mountain streams, and vibrant flora. This trail is perfect for travelers seeking a combination of cultural exploration and nature immersion in Arunachal Pradesh.", 
            image:"images/monpa trail.webp", 
            distance:"20–25 km round trip", 
            difficulty:"Moderate – Gentle inclines with some uneven terrain", 
            days:"4–5 days", 
            nearby:"Bomdila, Dirang, Monpa Villages" 
        },
        "Mechuka": { 
            description: "Mechuka trek is an offbeat trail through high-altitude alpine meadows, snow-capped mountains, and serene valleys in Arunachal Pradesh. Trekkers experience the untouched beauty of the Himalayas, passing through isolated hamlets, rivers, and forests rich in biodiversity. The trek offers a sense of adventure and solitude, ideal for trekkers who enjoy remote, less-explored destinations with breathtaking landscapes.", 
            image:"images/mechuka.webp", 
            distance:"25–30 km round trip", 
            difficulty:"Difficult – High-altitude trekking with moderate steep sections", 
            days:"5–6 days", 
            nearby:"Mechuka, Gelling, Siyom Valley" 
        },
        "Talle Valley": { 
            description: "Talle Valley Trek takes adventurers through lush green forests, cascading waterfalls, and serene rivers in Arunachal Pradesh. The trek is relatively offbeat and offers peaceful camping spots, abundant wildlife, and rich flora. Trekkers can enjoy the scenic beauty, explore traditional villages, and experience the tranquility of nature away from crowded trails. This trek is perfect for nature enthusiasts and photographers looking for untouched Himalayan landscapes.", 
            image:"images/talley valley.jpg", 
            distance:"15–18 km round trip", 
            difficulty:"Moderate – Forest trails with gentle slopes", 
            days:"3–4 days", 
            nearby:"Along, Talle Village" 
        },
        "Seven Lakes": { 
            description: "The Seven Lakes Trek is a high-altitude, offbeat adventure in Arunachal Pradesh, taking trekkers to a cluster of pristine glacial lakes surrounded by snow-capped peaks. Each lake has its own unique charm and is set amidst untouched natural beauty. The trek involves traversing rugged terrain, alpine meadows, and forested valleys, making it suitable for experienced trekkers seeking solitude, adventure, and spectacular Himalayan scenery. Camping by the lakes provides an unforgettable wilderness experience.", 
            image:"images/seven lakes.webp", 
            distance:"30–35 km round trip", 
            difficulty:"Difficult – High-altitude trekking with rugged paths", 
            days:"6–7 days", 
            nearby:"Tawang, Zemithang, Gelling" 
        }
    }
},
// Western Ghats
"Western Ghats": {
    "Maharashtra": {
        "Kalsubai Peak": { 
            description: "Kalsubai Peak, the highest point in Maharashtra at 1,646 meters, offers trekkers breathtaking sunrise views over the Sahyadri range. The trail passes through lush forests, rocky paths, and small streams, making it an ideal adventure for both beginners and experienced trekkers. During the monsoon, the surrounding hills turn vibrant green, and the peak is often enveloped in mist, creating a magical trekking experience.", 
            image:"images/kalsubai.webp", 
            distance:"6 km trek from Bari village", 
            difficulty:"Moderate – Steep rocky paths near the summit", 
            days:"1 day", 
            nearby:"Bari Village, Igatpuri" 
        },
        "Harishchandragad": { 
            description: "Harishchandragad Trek is famous for its ancient caves, temples, and scenic cliff views. The trek involves navigating through rugged terrain, narrow ridges, and stunning waterfalls during the monsoon season. Apart from trekking, visitors can explore the iconic Konkan Kada cliff, Kedareshwar Cave, and ancient fort structures. This trek offers a perfect blend of adventure, history, and nature.", 
            image:"images/harishchadragad.webp", 
            distance:"16 km round trip from Taluka base", 
            difficulty:"Moderate to Difficult – Steep climbs and rocky terrain", 
            days:"1–2 days", 
            nearby:"Ahmednagar, Pune" 
        },
        "Rajmachi": { 
            description: "Rajmachi Fort Trek near Lonavala is a popular trail offering a combination of historic forts, lush valleys, and scenic views of the Western Ghats. Trekkers pass through dense forests, small villages, and river crossings. The fort has historical significance and provides panoramic views of surrounding hills and forts like Manaranjan and Shrivardhan. The trek is especially beautiful during the monsoon season when the region is covered in mist and greenery.", 
            image:"images/rajmachi.webp", 
            distance:"9 km trek from Kondana Village", 
            difficulty:"Moderate – Gentle climbs with some rocky stretches", 
            days:"1–2 days", 
            nearby:"Lonavala, Kondana Village" 
        },
        "Bhimashankar": { 
            description: "Bhimashankar Trek takes adventurers to the famous Bhimashankar Wildlife Sanctuary, home to diverse flora and fauna, including the Indian Giant Squirrel. The trail passes through dense forests, streams, and rugged terrain, offering nature lovers a mix of trekking and wildlife spotting. The trek culminates at the ancient Bhimashankar temple, which is also a Jyotirlinga, making it spiritually significant.", 
            image:"images/bhimsankar.jpg", 
            distance:"12 km trek from Aambewadi", 
            difficulty:"Moderate – Forest trails with some steep sections", 
            days:"1–2 days", 
            nearby:"Pune, Aambewadi" 
        },
        "AMK": { 
            description: "Alang-Madan-Kulang (AMK) trek is one of the most challenging and thrilling treks in Maharashtra. The trail takes trekkers across three massive forts in the Sahyadri range, with steep climbs, cliffs, and rugged terrain. The trek offers stunning views of valleys, waterfalls, and dense forests, making it a paradise for adventure seekers. This trek requires good fitness and prior trekking experience due to its difficulty.", 
            image:"images/amk.webp", 
            distance:"40 km round trip", 
            difficulty:"Difficult – Steep climbs and rocky terrain", 
            days:"3–4 days", 
            nearby:"Rajmachi, Lonavala" 
        },
        "Takmak Fort": { 
            description: "Takmak Fort is a hidden gem trek in the Western Ghats, lesser-known but full of scenic beauty. The trail passes through thick forests, streams, and rocky paths, culminating at an ancient fort with panoramic views of surrounding hills. It is ideal for trekkers looking for solitude, adventure, and offbeat trekking experiences away from popular tourist trails.", 
            image:"images/takmak fort.webp", 
            distance:"6–8 km round trip", 
            difficulty:"Moderate – Uneven paths and rocky ascents", 
            days:"1 day", 
            nearby:"Igatpuri, Nashik" 
        }
    },
    "Karnataka": {
        "Kumara Parvatha": { 
            description: "Kumara Parvatha Trek is one of Karnataka’s most challenging trails, traversing dense forests, steep slopes, and rocky ridges. The trek offers stunning views of the Western Ghats, rolling valleys, and sunrise vistas from the peak. The trail also passes through diverse flora and fauna, including endemic wildlife. This trek is perfect for experienced trekkers seeking adventure, high-altitude challenges, and a memorable wilderness experience.", 
            image:"images/kumara parvatha.webp", 
            distance:"20 km round trip from Subramanya", 
            difficulty:"Difficult – Steep climbs and rocky paths", 
            days:"1–2 days", 
            nearby:"Subramanya, Kukke Subramanya" 
        },
        "Kodachadri": { 
            description: "Kodachadri Trek is a picturesque trail leading to a peak surrounded by dense forests, ancient temples, and misty valleys. Trekkers can explore the Harihar Temple, diverse flora, and fauna along the way. The peak offers mesmerizing views of the Arabian Sea on clear days. Kodachadri is also famous for its biodiversity and spiritual significance, making it a combination of adventure, nature, and culture.", 
            image:"images/kodachadri.webp", 
            distance:"10 km round trip from Hosagadde", 
            difficulty:"Moderate – Steep trails in some sections", 
            days:"1 day", 
            nearby:"Shimoga, Hosagadde" 
        },
        "Kudremukh": { 
            description: "Kudremukh Trek lies in the heart of the Kudremukh National Park, famous for its rolling hills, grasslands, and rich wildlife. The trek involves traversing dense forests, streams, and vast meadows. Trekkers can spot elephants, tigers, and endemic birds in their natural habitat. The peak offers panoramic views of the Western Ghats and is ideal for nature enthusiasts and adventure seekers looking for offbeat trekking experiences.", 
            image:"images/kudremukh-trek.jpg", 
            distance:"20 km round trip", 
            difficulty:"Moderate – Forest trails with some steep climbs", 
            days:"2 days", 
            nearby:"Karkala, Chikmagalur" 
        },
        "Mullayanagiri": { 
            description: "Mullayanagiri Trek takes adventurers to the highest peak in Karnataka at 1,930 meters. The trek passes through misty forests, steep slopes, and rocky terrain, offering panoramic views of the Western Ghats. Trekkers can enjoy sunrise and sunset vistas from the summit, making it one of Karnataka’s most scenic treks. This trail is ideal for both beginners and experienced trekkers.", 
            image:"images/mullayagiri.png", 
            distance:"5 km round trip from Bylakuppe", 
            difficulty:"Moderate – Steep ascents near the summit", 
            days:"1 day", 
            nearby:"Chikmagalur, Bylakuppe" 
        },
        "Netravati": { 
            description: "Netravati Peak Trek is a challenging trail near Chikmagalur that offers stunning views of the Western Ghats and surrounding coffee plantations. Trekkers traverse dense forests, rocky terrain, and misty valleys, making the journey both adventurous and scenic. The peak is less crowded, providing a serene trekking experience amidst nature.", 
            image:"images/netravati.webp", 
            distance:"15 km round trip", 
            difficulty:"Difficult – Steep and rocky paths", 
            days:"2 days", 
            nearby:"Chikmagalur, Netravati" 
        },
        "Ettina Bhuja": { 
            description: "Ettina Bhuja Trek offers panoramic views of the Charmadi range and surrounding valleys. The trail passes through forests, streams, and rocky slopes. Trekkers enjoy solitude, scenic beauty, and a moderate challenge making it perfect for nature lovers and photography enthusiasts.", 
            image:"images/ettina bhuja.jpg", 
            distance:"10 km round trip", 
            difficulty:"Moderate – Gentle inclines with some rocky stretches", 
            days:"1 day", 
            nearby:"Charmadi, Belur" 
        }
    },
    "Kerala": {
        "Meesapulimala": { 
            description: "Meesapulimala Trek is the second-highest peak in Kerala, offering trekkers panoramic views of the Western Ghats and sprawling tea plantations. The trail passes through misty forests, grasslands, and rocky terrain. This trek is perfect for nature enthusiasts, bird watchers, and photographers seeking a peaceful high-altitude experience.", 
            image:"images/mesapulimala.webp", 
            distance:"9 km round trip from Munnar", 
            difficulty:"Moderate – Steep forested trails near the summit", 
            days:"1 day", 
            nearby:"Munnar, Idukki" 
        },
        "Chembra Peak": { 
            description: "Chembra Peak Trek in Wayanad features a heart-shaped lake at its base, lush green forests, and rolling hills. The trail offers scenic vistas of valleys and plantations, making it ideal for trekking enthusiasts and nature photographers. The heart-shaped lake adds a unique charm to the trek, especially during the monsoon season.", 
            image:"images/chembra peak.jpg", 
            distance:"8 km round trip from Meppadi", 
            difficulty:"Moderate – Steep sections near the peak", 
            days:"1 day", 
            nearby:"Wayanad, Meppadi" 
        }
    },
    "Goa": {
        "Dudhsagar Falls": { 
            description: "Dudhsagar Falls Trek in Goa takes trekkers through dense forests, railway tracks, and streams to reach one of India’s tallest and most spectacular waterfalls. The cascading falls, surrounded by lush greenery, provide a refreshing and scenic trekking experience. The trek is ideal for adventure seekers and nature lovers looking for a short yet thrilling excursion.", 
            image:"images/dudhsagor falls.webp", 
            distance:"6 km round trip", 
            difficulty:"Easy to Moderate – Gentle forest paths with some rocky sections", 
            days:"1 day", 
            nearby:"Mollem, Goa" 
        }
    }
},
  // Eastern Ghats
"Eastern Ghats": {
    "Andhra Pradesh": {
        "Araku Valley": { 
            description: "Araku Valley Trek offers a mix of lush coffee plantations, scenic hills, and ancient caves. Trekkers can explore tribal villages, waterfalls, and verdant landscapes while enjoying moderate trails through dense forests. The valley is known for its vibrant culture and natural beauty, making it ideal for both adventure seekers and those looking to experience rural life amidst serene surroundings.", 
            image:"images/araku valley.webp", 
            distance:"10–12 km round trip from Araku town", 
            difficulty:"Moderate – Gentle inclines with forest trails", 
            days:"1–2 days", 
            nearby:"Araku, Borra Caves, Coffee Plantations" 
        },
        "Mahindra Peak": { 
            description: "Mahindra Peak is one of the highest points in Andhra Pradesh, offering panoramic views of the Eastern Ghats. The trek passes through dense forests, grasslands, and streams. Trekkers can enjoy sunrise views from the peak and explore the surrounding hills and valleys. This trek is perfect for those seeking solitude, natural beauty, and a moderate challenge in a less crowded trekking destination.", 
            image:"images/mahindra peakk.avif", 
            distance:"8 km round trip from base village", 
            difficulty:"Moderate – Steep sections near the summit", 
            days:"1 day", 
            nearby:"Araku Valley, Visakhapatnam" 
        }
    },
    "Odisha": {
        "Devmali": { 
            description: "Devmali Trek leads to the highest point in Odisha, surrounded by rolling hills, dense forests, and panoramic views of the Eastern Ghats. The trail offers a peaceful and less-explored trekking experience. Trekkers can enjoy birdwatching, explore streams and waterfalls along the way, and experience serene landscapes away from crowded tourist spots, making it ideal for nature lovers and adventure enthusiasts.", 
            image:"images/devmali.webp", 
            distance:"10 km round trip from base village", 
            difficulty:"Moderate – Inclined forest and rocky trails", 
            days:"1–2 days", 
            nearby:"Koraput, Odisha" 
        }
    },
    "Tamil Nadu": {
        "Yelagiri": { 
            description: "Yelagiri Trek is a charming trail featuring small hills, temples, and scenic lakes. The trek passes through grassy slopes, forested areas, and rural villages, offering a blend of cultural and natural experiences. Trekkers can explore the serene Punganoor Lake, local plantations, and traditional hilltop temples. This trek is ideal for beginners and those looking for a relaxing and picturesque trekking experience.", 
            image:"images/yelagiri.webp", 
            distance:"6–8 km round trip from Yelagiri town", 
            difficulty:"Easy to Moderate – Gentle slopes and forest paths", 
            days:"1 day", 
            nearby:"Yelagiri, Vaniyambadi" 
        },
        "Kolli Hills": { 
            description: "Kolli Hills Trek offers panoramic views, waterfalls, and traditional villages. The trail passes through dense forests, rocky paths, and spice plantations. Trekkers can explore Arappaleeswarar Temple, Agaya Gangai waterfalls, and viewpoints overlooking valleys. Kolli Hills is a perfect destination for adventure seekers and nature lovers, providing a moderate trekking experience amidst beautiful landscapes.", 
            image:"images/kolli hills.webp", 
            distance:"10–12 km round trip from Namakkal base", 
            difficulty:"Moderate – Steep inclines with rocky terrain", 
            days:"1–2 days", 
            nearby:"Kolli Hills, Namakkal" 
        }
    },
    "Jharkhand": {
        "Parasnath Hill": { 
            description: "Parasnath Hill Trek is a spiritually significant trail and the highest peak in Jharkhand. The trek passes through dense forests, rocky paths, and peaceful hilltop landscapes. Pilgrims and trekkers alike can explore Jain temples and shrines along the way. The trek offers a combination of adventure, cultural heritage, and stunning natural beauty, making it a unique experience for trekkers seeking both spirituality and nature.", 
            image:"images/parashnath.jpg", 
            distance:"13 km round trip from base village", 
            difficulty:"Moderate – Forest and rocky trails with some steep climbs", 
            days:"1–2 days", 
            nearby:"Parasnath, Giridih" 
        },
        "Netarhat": { 
            description: "Netarhat Trek takes trekkers through the hill station often called the 'Queen of Chotanagpur'. The trail features rolling hills, dense forests, waterfalls, and serene viewpoints. Trekkers can enjoy sunrise and sunset vistas over the valleys, explore streams, and spot endemic birds. Netarhat offers a peaceful trekking experience with moderate trails suitable for beginners and nature lovers seeking scenic landscapes.", 
            image:"images/netarhat.webp", 
            distance:"8–10 km round trip from Netarhat town", 
            difficulty:"Easy to Moderate – Gentle forested and hilly paths", 
            days:"1 day", 
            nearby:"Netarhat, Latehar" 
        }
    }
},
// Central India
"Central India": {
    "Madhya Pradesh": {
        "Pench Tiger Reserve": { 
            description: "Pench Tiger Reserve Trek offers a unique experience of trekking through dense forests, open grasslands, and the natural habitat of tigers and other wildlife. Trekkers can enjoy spotting deer, leopards, birds, and if lucky, even tigers from safe viewpoints. The trails take you across streams, valleys, and watchtowers, combining adventure with wildlife observation. Ideal for nature enthusiasts, wildlife photographers, and those looking for an immersive forest trekking experience.", 
            image:"images/panch tiger.webp", 
            distance:"10–12 km trail options within the reserve", 
            difficulty:"Moderate – Uneven forest trails with wildlife viewing points", 
            days:"1–2 days", 
            nearby:"Seoni, Chhindwara, Pench National Park" 
        }
    },
    "Chhattisgarh": {
        "Guru Ghasidas National Park": { 
            description: "Guru Ghasidas National Park Trek is a jungle trail offering dense forest trekking, river crossings, and scenic viewpoints. Trekkers can explore the rich flora and fauna of Chhattisgarh, including rare birds and wildlife. The trail is less crowded, giving an offbeat trekking experience amidst untouched natural beauty. This trek is perfect for adventurers, wildlife enthusiasts, and nature lovers seeking tranquility in a pristine forest environment.", 
            image:"images/guru ghasidas.webp", 
            distance:"8–10 km round trip trails", 
            difficulty:"Moderate – Forest trails with some steep inclines", 
            days:"1–2 days", 
            nearby:"Bilaspur, Chhattisgarh" 
        }
    }
},

// Andaman & Nicobar Islands
"Andaman & Nicobar": {
    "You Can Explore": {
    "Saddle Peak": { 
        description: "Saddle Peak Trek takes you to the highest point of North Andaman, offering breathtaking views of the surrounding islands and the Bay of Bengal. The trail passes through tropical forests, rocky slopes, and streams, providing opportunities to spot endemic wildlife and birds. Trekkers can enjoy the panoramic views from the summit, especially during sunrise and sunset. This trek is ideal for nature lovers, adventure enthusiasts, and anyone looking to explore the unspoiled beauty of the Andaman Islands.", 
        image:"images/saddle peak.webp", 
        distance:"7–9 km round trip from base village", 
        difficulty:"Moderate – Tropical forest and rocky trails", 
        days:"1 day", 
        nearby:"Diglipur, North Andaman" 
    }
  }
   },
    }



// -- rest of the script for navigation remains same --

const statesList = document.getElementById('states-list');
const treksSection = document.getElementById('treks-section');
const detailsSection = document.getElementById('details-section');
const stateTitle = document.getElementById('state-title');
const treksList = document.getElementById('treks-list');
const trekTitle = document.getElementById('trek-title');
const trekImage = document.getElementById('trek-image');
const trekDescription = document.getElementById('trek-description');
const trekDistance = document.getElementById('trek-distance');
const trekDifficulty = document.getElementById('trek-difficulty');
const trekDays = document.getElementById('trek-days');
const trekNearby = document.getElementById('trek-nearby');

for (let state in treksData) {
    const li = document.createElement('li');
    li.textContent = state;
    li.addEventListener('click', () => showCategories(state));
    statesList.appendChild(li);
}

function showCategories(state) {
    stateTitle.textContent = state;
    treksList.innerHTML = '';
    const categories = treksData[state];
    for (let category in categories) {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        treksList.appendChild(categoryHeader);
        const treks = categories[category];
        for (let trek in treks) {
            const trekLi = document.createElement('li');
            trekLi.textContent = trek;
            trekLi.addEventListener('click', () => showTrekDetails(state, category, trek));
            treksList.appendChild(trekLi);
        }
    }
    document.getElementById('states-section').style.display = 'none';
    treksSection.style.display = 'block';
}

function showTrekDetails(state, category, trek) {
    const trekInfo = treksData[state][category][trek];
    trekTitle.textContent = trek;
    trekImage.src = trekInfo.image;
    trekImage.alt = trek;
    trekDescription.textContent = trekInfo.description;
    trekDistance.textContent = trekInfo.distance;
    trekDifficulty.textContent = trekInfo.difficulty;
    trekDays.textContent = trekInfo.days;
    trekNearby.textContent = trekInfo.nearby;
    treksSection.style.display = 'none';
    detailsSection.style.display = 'block';
}

document.getElementById('back-states').addEventListener('click', () => {
    treksSection.style.display = 'none';
    document.getElementById('states-section').style.display = 'block';
});

document.getElementById('back-treks').addEventListener('click', () => {
    detailsSection.style.display = 'none';
    treksSection.style.display = 'block';
});
