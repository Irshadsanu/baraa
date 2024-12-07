import { assets } from "../../Assets/Assets";

const blogData = [
  {
    id: 1,
    title: "UNVEILING SAUDI ARABIA; TOP TRAVEL DESTINATIONS YOU CAN'T MISS!",
    small_thumb: assets.riyadh,
    seeMore:"From budgeting to outlining the itinerary, planning vacations are equally exhausting and overwhelming. A major part of the work goes into deciding the right destination, we can help you out here!",
    discription:"From budgeting to outlining the itinerary, planning vacations are equally exhausting and overwhelming. A major part of the work goes into deciding the right destination, we can help you out here! Where ancient traditions meet modern luxury, and vast deserts give way to vibrant cities and lush oases, Saudi Arabia, with its unique blend of heritage and contemporary allure, offers a treasure trove of destinations waiting to be explored. Whether you're seeking spiritual fulfillment, historical exploration, or simply a memorable adventure, this Middle Eastern gem will have something to offer you. Make sure to add these incredible destinations to your travel list and experience the beauty and grandeur of Saudi Arabia. ",
    // concultion: "Embrace the journey through Saudi Arabia’s top tourist destinations and create unforgettable memories in this captivating kingdom. Happy backpacking.",


    content: [
      {
        subheading: "The Vibrant Capital City",
        section_heading: "Top Places to Visit in <strong>Riyadh:</strong> ",
        img: assets.riyadh,
        text: "<strong>1. Riyadh</strong> , the capital city, is a dynamic fusion of historical charm and modern sophistication as well as a bustling metropolis that seamlessly blends the old with the new. From ancient fortresses to world-class shopping and dining, Riyadh offers a rich cultural experience.",
        places: [
          {
            name: "King Abdulaziz Historical Center",
            details:
              "Dive into Saudi Arabia’s past with exhibitions that showcase the nation’s cultural and historical journey.",
          },
          {
            name: "Edge of The World",
            details:
              "For adventure seekers, this breathtaking cliff offers stunning views of the endless desert horizon.",
          },
          {
            name: "Kingdom Centre Tower",
            details:
              "An iconic skyscraper, where visitors can enjoy panoramic views of the city.",
          },
        ],
      },
      {
        subheading: "The Heritage Haven",
        section_heading: "Top Places to Visit in <strong> Diriyah: </strong>",
        img: assets.diriyah,
        text: "<strong>2. Diriyah</strong>,Known as the original home of the Saudi royal family, Diriyah is a place where history and culture come alive. Wander through this UNESCO World Heritage site to explore the mud-brick fortifications and traditional Najdi architecture. The mudbrick architecture and luxury dining options make it a top destination for those looking to immerse themselves in Saudi heritage",
        places: [
          {
            name: "At-Turaif",
            details:
              "A UNESCO World Heritage Site in Diriyah, At-Turaif features historic mudbrick buildings and museums, offering insights into the Al Saud royal family and Diriyah’s rich heritage.",
          },
          {
            name: "Al Bujairi Heritage Park",
            details:
              "This vibrant park in Diriyah offers rides, markets, food stalls, and activities like pottery.Evening tours with dazzling lights make it a lively destination for families. ",
          },
          {
            name: "Wadi Hanifah",
            details:
              "Perfect for nature lovers, Wadi Hanifah offers hiking trails, local flora, and historic sites like ancient wells, blending Diriyah’s natural beauty with cultural history. ",
          },
        ],
      },
      {
        subheading: "The Spiritual Epicenter",
        section_heading: "Top Places to Visit in <strong> Makkah: </strong>",
        img: assets.Makkah,
        text: "<strong>3. Makkah</strong>, known as Mecca, is the spiritual heart of Saudi Arabia and the holiest city in Islam, drawing millions of pilgrims annually.",
        places: [
          {
            name: "Jabal Al Noor",
            details:
              "The Mountain of Light, where Prophet Muhammad received his first revelation.",
          },
          {
            name: "Masjid al-Haram",
            details:
              "Experience the profound spiritual ambiance surrounding the Kaaba.the focal point of Hajj and Umrah. ",
          },
          {
            name: "Kaaba",
            details:
              "The most sacred site in Islam, located at the heart of the Grand Mosque.",
          },
          {
            name: "Abraj Al-Bait Tower",
            details:
              "A towering skyscraper that’s also home to the Makkah Royal Clock, one of the world’s tallest buildings",
          },
          {
            name: "Mount Arafat",
            details:
              "Known as the Mountain of Mercy, it’s a key site during the Hajj pilgrimage.",
          },
        ],
      },
      {
        subheading: "The Serene Sanctuary",
        section_heading: "Top Places to Visit in <strong> Madinah: </strong>",
        img: assets.Madinah,
        text: "<strong>4. Madinah</strong>, as the second holiest city in Islam, offers tranquility and profound religious significance. The city offers stunning views and is rich in historical sites for pilgrims and visitors alike. Originally known as Yathrib, it was renamed Madinat an-Nabi (the Prophet's City) after Prophet Muhammad's passing, and later became al-Madinah alMunawwarah (The Enlightened City). It's also the fourth most populous city and the capital of Madinah Province in Saudi Arabia",
        places: [
          {
            name: "Masjid an-Nabawi",
            details:
              "Explore the second holiest mosque, known for its stunning green dome and serene atmosphere.",
          },
          {
            name: "Quba Mosque",
            details:
              "Visit the first mosque in Islam, renowned for its historical importance and peaceful environment.",
          },
        ],
      },
      {
        subheading: "Oasis of Culture and Nature",
        section_heading: "Top Places to Visit in <strong> Ahsa: </strong>",
        img: assets.AlAhsa,
        text: "<strong>5. Al Ahsa</strong>,Celebrated for its lush landscapes and rich history, Al-Ahsa is one of the world’s largest natural agricultural oases, with over 3 million palm trees and many hot and cold springs. The oasis, which was recently named as a UNESCO World Heritage Site, is also one of the greenest regions amid the otherwise arid deserts that make up most of Saudi Arabia. ",
        places: [
          {
            name: "Al Ahsa Oasis",
            details:
              "Wander through this expansive oasis, a UNESCO World Heritage site featuring verdant palm groves and historic irrigation systems.",
          },
          {
            name: "Qasr Ibrahim",
            details:
              "Explore this ancient fort, an excellent example of traditional Arabian military architecture.",
          },
        ],
      },
      {
        subheading: "The Coastal Gem",
        section_heading: "Top Places to Visit in <strong> Jeddah: </strong>",
        img: assets.Jeddah,
        text: "<strong>6. Jeddah</strong>,Jeddah is a vibrant city on the Red Sea coast, known for its art galleries, historic sites, and stunning waterfront. One of the must-see attractions in Saudi Arabia's second-largest city is the historic Al Balad district, where winding alleys reveal ancient coral stone and wooden buildings rich with stories. Established in the 7th century, Al Balad was once the heart of Jeddah and continues to be a top destination.",
        places: [
          {
            name: "Nassif House Museum",
            details:
              ": A historic house turned museum, displaying Jeddah’s rich heritage.",
          },
          {
            name: "Historic Jeddah (Al-Balad)",
            details:
              "Discover the traditional charm of Al-Balad with its coralstone buildings and bustling souks. The list of best places to visit in the Middle East is never complete without Al Balad. The picturesque old city of Jeddah, Saudi Arabia is 1300 years old and was the doorway for the Muslims to Mecca. Presently, it is a colorful and buzzing city, and its heritage and display of old-world charm made UNESCO list Al Balad as one of the World Heritage Sites. ",
          },
          {
            name: "King Fahd Fountain",
            details:
              "Admire the world’s tallest fountain, especially captivating when illuminated at night.",
          },
          {
            name: "Jeddah Corniche",
            details:
              "Admire the world’s tallest fountain, especially captivating when illuminated at night. ",
          },
        ],
      },
      {
        subheading: "Gateway to the Eastern Province",
        section_heading: "Top Places to Visit in <strong> Dammam: </strong>",
        img: assets.Dammam,
        text: "<strong>7. Dammam</strong>, is known for its modern amenities and scenic waterfronts and is one of the oldest settlements on the Arabian Peninsula and a city that beautifully blends history with modern life..",
        places: [
          {
            name: "Tarut Castle",
            details:
              "Located on Tarut Island, this ancient fortress is one of the oldest in the region.",
          },
          {
            name: "Dammam Museum",
            details:
              "Operating since 1985, this museum highlights artifacts from archaeological excavations in the area",
          },
          {
            name: "Dammam Corniche",
            details:
              ": A scenic waterfront perfect for a leisurely stroll or family picnic. Half Moon Bay: Relax on the sandy shores and enjoy water sports at this popular beach destination.",
          },
          {
            name: "Half Moon Bay",
            details: "Relax on the sandy shores and enjoy water sports.",
          },
          {
            name: "King Fahd Park",
            details:
              "A vast urban park with lush greenery, walking trails, and recreational facilities",
          },
        ],
      },
      {
        subheading: "Nature’s Paradise",
        section_heading: "Top Places to Visit in <strong>Abha:</strong>",
        img: assets.Abha,
        text: "<strong>8. Abha</strong>, Nestled in the Asir Mountains, Abha is a haven for nature lovers, with its cool climate, lush landscapes, and scenic views  make it an ideal destination for outdoor activities. Distinguished by its resort and beach tourism thanks to its mountainous coastal nature, its pure, moderate air, and its pristine nature, which made it one of the most ideal Saudi spots for family outings.",
        places: [
          {
            name: "Asir National Park",
            details:
              "A sprawling natural reserve offering hiking trails, picnic spots, and stunning views.Discover diverse ecosystems, from lush forests to rugged mountains,ideal for outdoor activities and nature walks",
          },
          {
            name: "Dahna Falls",
            details: "A picturesque waterfall surrounded by lush greenery , perfect for a day trip.",
          },
          {
            // name: "Dahna Falls",
            details: "Embrace the journey through Saudi Arabia’s top tourist destinations and create unforgettable memories in this captivating kingdom. Happy backpacking.",
          },
        ],
      },
    ],
    date: "21-04-2024",
    author: "Mohammed",
  },

  {
    id: 2,
    title: "Coming Soon..",
    small_thumb: assets.Blog2,
    content: [
      // {
      //   subheading: "Coming Soon",
      // section_heading: "Top Places to Visit in Riyadh:",
      // img:assets.Abha,
      // text: "From budgeting to outlining the itinerary, planning vacations are equally exhausting and overwhelming. A major part of the work goes into deciding the right destination, we can help you out here!",
      // places: [
      //   {
      //     name: "King Abdulaziz Historical Center",
      //     details:
      //       "Dive into Saudi Arabia’s past with exhibitions that showcase the nation’s cultural and historical journey.",
      //   },
      //   {
      //     name: "Edge of The World",
      //     details:
      //       "For adventure seekers, this breathtaking cliff offers stunning views of the endless desert horizon.",
      //   },
      //   {
      //     name: "Kingdom Centre Tower",
      //     details:
      //       "An iconic skyscraper, where visitors can enjoy panoramic views of the city.",
      //   },
      // ],
      // },
      //   {
      //     subheading: "Investing in Diriyah",
      //     section_heading: "Top Places to Visit in Diriyah:",
      //     text: "Known as the original home of the Saudi royal family, Diriyah is a place where history and culture come alive. Wander through this UNESCO World Heritage site to explore the mud-brick fortifications and traditional Najdi architecture.",
      //     places: [
      //       {
      //         name: "At-Turaif",
      //         details:
      //           "A UNESCO World Heritage Site in Diriyah, At-Turaif features historic mudbrick buildings and museums, offering insights into the Al Saud royal family and Diriyah’s rich heritage.",
      //       },
      //       {
      //         name: "Al Bujairi Heritage Park",
      //         details:
      //           "This vibrant park in Diriyah offers rides, markets, food stalls, and activities like pottery.",
      //       },
      //       {
      //         name: "Wadi Hanifah",
      //         details:
      //           "Perfect for nature lovers, Wadi Hanifah offers hiking trails, local flora, and historic sites like ancient wells.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Makkah",
      //     section_heading: "Top Places to Visit in Makkah:",
      //     text: "Makkah, known as Mecca, is the spiritual heart of Saudi Arabia and the holiest city in Islam, drawing millions of pilgrims annually.",
      //     places: [
      //       {
      //         name: "Jabal Al Noor",
      //         details:
      //           "The Mountain of Light, where Prophet Muhammad received his first revelation.",
      //       },
      //       {
      //         name: "Masjid al-Haram",
      //         details:
      //           "Experience the profound spiritual ambiance surrounding the Kaaba.",
      //       },
      //       {
      //         name: "Kaaba",
      //         details:
      //           "The most sacred site in Islam, located at the heart of the Grand Mosque.",
      //       },
      //       {
      //         name: "Abraj Al-Bait Tower",
      //         details:
      //           "A towering skyscraper that’s also home to the Makkah Royal Clock.",
      //       },
      //       {
      //         name: "Mount Arafat",
      //         details:
      //           "Known as the Mountain of Mercy, it’s a key site during the Hajj pilgrimage.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Madinah",
      //     section_heading: "Top Places to Visit in Madinah:",
      //     text: "Madinah, the second holiest city in Islam, offers tranquility and religious significance. The city is rich in historical sites and offers stunning views for pilgrims and visitors alike.",
      //     places: [
      //       {
      //         name: "Masjid an-Nabawi",
      //         details:
      //           "Explore the second holiest mosque, known for its stunning green dome and serene atmosphere.",
      //       },
      //       {
      //         name: "Quba Mosque",
      //         details:
      //           "Visit the first mosque in Islam, renowned for its historical importance and peaceful environment.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Al Ahsa",
      //     section_heading: "Top Places to Visit in Ahsa:",
      //     text: "Celebrated for its lush landscapes and rich history, Al Ahsa is one of the world’s largest natural agricultural oases with over 3 million palm trees.",
      //     places: [
      //       {
      //         name: "Al Ahsa Oasis",
      //         details:
      //           "A UNESCO World Heritage site featuring verdant palm groves and historic irrigation systems.",
      //       },
      //       {
      //         name: "Qasr Ibrahim",
      //         details:
      //           "Explore this ancient fort, an excellent example of traditional Arabian military architecture.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Jeddah",
      //     section_heading: "Top Places to Visit in Jeddah:",
      //     text: "Jeddah is a vibrant city on the Red Sea coast, known for its art galleries, historic sites, and stunning waterfront.",
      //     places: [
      //       {
      //         name: "Nassif House Museum",
      //         details:
      //           "A UNESCO World Heritage site featuring verdant palm groves and historic irrigation systems.",
      //       },
      //       {
      //         name: "Historic Jeddah (Al-Balad)",
      //         details:
      //           "Discover the traditional charm of Al-Balad with its coralstone buildings and bustling souks.",
      //       },
      //       {
      //         name: "King Fahd Fountain",
      //         details:
      //           "Admire the world’s tallest fountain, especially captivating when illuminated at night.",
      //       },
      //       {
      //         name: "Jeddah Corniche",
      //         details:
      //           "Enjoy a leisurely stroll along this picturesque waterfront.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Dammam",
      //     section_heading: "Top Places to Visit in Dammam:",
      //     text: "Dammam is known for its modern amenities and scenic waterfronts, blending history with modern life.",
      //     places: [
      //       {
      //         name: "Tarut Castle",
      //         details:
      //           "Located on Tarut Island, this ancient fortress is one of the oldest in the region.",
      //       },
      //       {
      //         name: "Dammam Museum",
      //         details:
      //           "Highlights artifacts from archaeological excavations in the area.",
      //       },
      //       {
      //         name: "Dammam Corniche",
      //         details:
      //           "A scenic waterfront perfect for a leisurely stroll or family picnic.",
      //       },
      //       {
      //         name: "Half Moon Bay",
      //         details: "Relax on the sandy shores and enjoy water sports.",
      //       },
      //       {
      //         name: "King Fahd Park",
      //         details:
      //           "A vast urban park with lush greenery and recreational facilities.",
      //       },
      //     ],
      //   },
      //   {
      //     subheading: "Investing in Abha",
      //     section_heading: "Top Places to Visit in Abha:",
      //     text: "Nestled in the Asir Mountains, Abha is a haven for nature lovers, with its cool climate, lush landscapes, and scenic views.",
      //     places: [
      //       {
      //         name: "Asir National Park",
      //         details:
      //           "A sprawling natural reserve offering hiking trails, picnic spots, and stunning views.",
      //       },
      //       {
      //         name: "Dahna Falls",
      //         details: "A picturesque waterfall surrounded by lush greenery.",
      //       },
      //     ],
      //   },
    ],
    // date: "21-04-2024",
    // author: "Mohammed",
  },
];

export default blogData;
