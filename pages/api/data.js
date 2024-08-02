 const items = [
    {
      "product_id": "1",
      "name": "Nike Air Max",
      "description": "Comfortable and stylish running shoes.",
      "price": "$120",
      "image_link": "https://preview.redd.it/0k09tgr01o421.jpg?auto=webp&s=3a3a09348b199bd7be8448fae4d97400bd263ca8",
      "category": "Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "White", "Red"]
    },
    {
      "product_id": "2",
      "name": "Adidas Ultraboost",
      "description": "High-performance shoes with superior cushioning.",
      "price": "$180",
      "image_link": "https://tse1.mm.bing.net/th?id=OIP.GQ2J9esKKk43pr_yipyhzwHaE8&pid=Api&P=0&h=180",
      "category": "Running Shoes",
      "sizes": ["6", "7", "8", "9", "10"],
      "colors": ["Black", "White"]
    },
    {
      "product_id": "3",
      "name": "Puma Suede Classic",
      "description": "Timeless design with a comfortable fit.",
      "price": "$70",
      "image_link": "https://i.redd.it/9nhl5xk1my511.jpg",
      "category": "Casual Shoes",
      "sizes": ["8", "9", "10", "11", "12"],
      "colors": ["Red", "Black", "Blue"]
    },
    {
      "product_id": "4",
      "name": "Reebok Classic",
      "description": "Vintage style with modern comfort.",
      "price": "$85",
      "image_link": "https://tse1.mm.bing.net/th?id=OIP.0sCwFq1mSWajXCgkrhd9jwHaHa&pid=Api&P=0&h=180",
      "category": "Casual Shoes",
      "sizes": ["6", "7", "8", "9", "10", "11"],
      "colors": ["White", "Grey"]
    },
    {
      "product_id": "5",
      "name": "Asics Gel-Kayano",
      "description": "Supportive and cushioned running shoes.",
      "price": "$160",
      "image_link": "https://runningmagazine.ca/wp-content/uploads/2020/06/ASICS_GEL-KAYANO-27_ProductImage_FW_W_1012A649_300_SB_FR-2048x1135.png",
      "category": "Running Shoes",
      "sizes": ["8", "9", "10", "11", "12"],
      "colors": ["Black", "Blue"]
    },
    {
      "product_id": "6",
      "name": "New Balance 574",
      "description": "Classic design with modern performance.",
      "price": "$80",
      "image_link": "https://i5.walmartimages.com/asr/322d099f-1c79-4126-a5c8-34e97f4ae614_1.a77805f45142e310cfafb465518bab1f.jpeg",
      "category": "Casual Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Grey", "Navy", "Green"]
    },
    {
      "product_id": "7",
      "name": "Vans Old Skool",
      "description": "Iconic skate shoes with a timeless look.",
      "price": "$60",
      "image_link": "https://www.sneakersnstuff.com/images/29491/oldskool.jpg",
      "category": "Skate Shoes",
      "sizes": ["6", "7", "8", "9", "10", "11"],
      "colors": ["Black", "White"]
    },
    {
      "product_id": "8",
      "name": "Converse Chuck Taylor",
      "description": "Classic high-top sneakers.",
      "price": "$55",
      "image_link": "https://tse1.mm.bing.net/th?id=OIP.6D9FNDUNbYiDWlOnJOCZEwHaHa&pid=Api&P=0&h=180",
      "category": "Casual Shoes",
      "sizes": ["5", "6", "7", "8", "9", "10"],
      "colors": ["Black", "White", "Red"]
    },
    {
      "product_id": "9",
      "name": "Under Armour HOVR Phantom",
      "description": "High-performance running shoes with HOVR cushioning.",
      "price": "$140",
      "image_link": "https://www.sportsdirect.com/images/imgzoom/21/21431501_xxl.jpg",
      "category": "Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "Grey"]
    },
    {
      "product_id": "10",
      "name": "Brooks Ghost 12",
      "description": "Versatile running shoes with excellent cushioning.",
      "price": "$130",
      "image_link": "https://tse2.mm.bing.net/th?id=OIP.lIDlvNOYLK3acQMCPQt_dwAAAA&pid=Api&P=0&h=180",
      "category": "Running Shoes",
      "sizes": ["8", "9", "10", "11", "12"],
      "colors": ["Blue", "Black"]
    },
    {
      "product_id": "11",
      "name": "Mizuno Wave Rider 23",
      "description": "Smooth and responsive running shoes.",
      "price": "$120",
      "image_link": "https://i.shgcdn.com/1d99d82e-cb8b-4338-a679-3015e56ea201/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      "category": "Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Navy", "White"]
    },
    {
      "product_id": "12",
      "name": "Saucony Kinvara 11",
      "description": "Lightweight and fast running shoes.",
      "price": "$110",
      "image_link": "https://tse3.mm.bing.net/th?id=OIP.wK02g7t8YuquKHxNtuhuTwAAAA&pid=Api&P=0&h=180",
      "category": "Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Orange", "Black"]
    },
    {
      "product_id": "13",
      "name": "Skechers Go Walk",
      "description": "Comfortable walking shoes with Goga Max technology.",
      "price": "$70",
      "image_link": "https://i5.walmartimages.com/asr/32f96fcc-9d32-454f-8c1c-d814eb66d3a3_1.50d28d29ceba67dbe7c42fcb60a3360b.jpeg",
      "category": "Walking Shoes",
      "sizes": ["6", "7", "8", "9", "10"],
      "colors": ["Black", "Navy"]
    },
    {
      "product_id": "14",
      "name": "Hoka One One Clifton 6",
      "description": "Lightweight and cushioned running shoes.",
      "price": "$130",
      "image_link": "https://dufrl78eaxiu3.cloudfront.net/products/14751/zm_20191230-123622.jpg",
      "category": "Running Shoes",
      "sizes": ["8", "9", "10", "11", "12"],
      "colors": ["Blue", "White"]
    },
    {
      "product_id": "15",
      "name": "Merrell Moab 2",
      "description": "Durable hiking shoes with Vibram soles.",
      "price": "$100",
      "image_link": "https://i5.walmartimages.com/asr/2c3c6e60-793a-487c-81ed-5fcd3d1a96c3_1.fdef797dab0c67a8abea0fcaaae35cba.jpeg",
      "category": "Hiking Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Brown", "Black"]
    },
    {
      "product_id": "16",
      "name": "Timberland 6-Inch Premium",
      "description": "Iconic waterproof boots.",
      "price": "$190",
      "image_link": "https://www.timberland.com.sg/wp-content/uploads/2020/07/10361713-ALT5.jpg",
      "category": "Boots",
      "sizes": ["8", "9", "10", "11", "12"],
      "colors": ["Wheat", "Black"]
    },
    {
      "product_id": "17",
      "name": "Clarks Desert Boot",
      "description": "Classic chukka boots with a crepe sole.",
      "price": "$140",
      "image_link": "https://tse1.mm.bing.net/th?id=OIP.oqJu4wNAfZRA0-6aexmZPAHaFj&pid=Api&P=0&h=180",
      "category": "Boots",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Beeswax", "Sand"]
    },
    {
      "product_id": "18",
      "name": "Dr. Martens 1460",
      "description": "Iconic lace-up boots with a rugged look.",
      "price": "$150",
      "image_link": "https://tse4.mm.bing.net/th?id=OIP.DVnc7y9r3ycX1_-v7f2GPgHaHa&pid=Api&P=0&h=180",
      "category": "Boots",
      "sizes": ["6", "7", "8", "9", "10", "11"],
      "colors": ["Black", "Cherry Red"]
    },
    {
      "product_id": "19",
      "name": "Birkenstock Arizona",
      "description": "Comfortable sandals with a contoured footbed.",
      "price": "$100",
      "image_link":"https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dwb3f142be/images/551251MBLK/BLACK-MENS-FOOTWEAR-BIRKENSTOCK-SLIDES-551251MBLK_5.JPG",
      "category": "Sandals",
      "sizes": ["6", "7", "8", "9", "10"],
      "colors": ["Brown", "Black"]
    },
    {
      "product_id": "20",
      "name": "Teva Hurricane XLT2",
      "description": "Durable and comfortable outdoor sandals.",
      "price": "$70",
      "image_link": "http://cdn-tp2.mozu.com/11961-16493/cms/16493/files/d0641bbd-6970-4c93-ac3f-9eaad609130a?max=1200&_mzcb=_1611088675201",
      "category": "Sandals",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "Blue"]
    },
    {
      "product_id": "21",
      "name": "Fila Disruptor 2",
      "description": "Chunky sneakers with a bold design.",
      "price": "$85",
      "image_link": 'https://www.birkenstockstl.com/wp-content/uploads/2022/02/1022298.jpg',
      "category": "Casual Shoes",
      "sizes": ["6", "7", "8", "9", "10"],
      "colors": ["White", "Black"]
    },
    {
      "product_id": "22",
      "name": "Salomon Speedcross 5",
      "description": "Trail running shoes with aggressive grip.",
      "price": "$130",
      "image_link":"https://www.northernrunner.com/images/brooks-revel-2-womens-normal-width-cushioned-road-running-shoes-blue-island-white-p5089-18060_image.jpg",
      "category": "Trail Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "Red"]
    },
    {
      "product_id": "23",
      "name": "Crocs Classic Clog",
      "description": "Lightweight and comfortable clogs.",
      "price": "$40",
      "image_link": "https://tse3.mm.bing.net/th?id=OIP.8wVIiOWgPxYvbm4mKNA4cwHaFj&pid=Api&P=0&h=180",
      "category": "Clogs",
      "sizes": ["6", "7", "8", "9", "10", "11"],
      "colors": ["Black", "Navy", "White"]
    },
    {
      "product_id": "24",
      "name": "UGG Classic Short II",
      "description": "Cozy and warm sheepskin boots.",
      "price": "$170",
      "image_link": "https://i5.walmartimages.com/asr/4c3f024e-7bb2-44c9-af2f-b27014cde613_1.7e070942851371addebf78a73a795e6b.jpeg",
      "category": "Boots",
      "sizes": ["5", "6", "7", "8", "9", "10"],
      "colors": ["Chestnut", "Black"]
    },
    {
      "product_id": "25",
      "name": "Nike Air Force 1",
      "description": "Iconic basketball sneakers.",
      "price": "$90",
      "image_link": "https://tse2.mm.bing.net/th?id=OIP.CpH6AkieN2m8qqaK8z3LWwHaHa&pid=Api&P=0&h=180",
      "category": "Basketball Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["White", "Black"]
    },
    {
      "product_id": "26",
      "name": "Timberland PRO Work Boot",
      "description": "Durable and comfortable work boots.",
      "price": "$150",
      "image_link": "https://tse2.mm.bing.net/th?id=OIP.Vbfw7xjo2YCD5a1R_GG3xAHaHa&pid=Api&P=0&h=180",
      "category": "Work Boots",
      "sizes": ["7", "8", "9", "10", "11", "12"],
      "colors": ["Brown", "Black"]
    },
    {
      "product_id": "27",
      "name": "Columbia Newton Ridge Plus",
      "description": "Waterproof hiking boots.",
      "price": "$100",
      "image_link": "https://tse1.mm.bing.net/th?id=OIP.gi9QnASe3qdDvD8t_9fulQHaEk&pid=Api&P=0&h=180",
      "category": "Hiking Boots",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Brown", "Grey"]
    },
    {
      "product_id": "28",
      "name": "Keen Newport H",
      "description": "Comfortable and durable sandals.",
      "price": "$100",
      "image_link": "https://tse3.mm.bing.net/th?id=OIP.YSD0H28KhHvAcabNKHsLoAHaHa&pid=Api&P=0&h=180",
      "category": "Sandals",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "Grey"]
    },
    {
      "product_id": "29",
      "name": "ECCO Soft 7",
      "description": "Stylish and comfortable casual shoes.",
      "price": "$150",
      "image_link": "https://au.ecco.com/dw/image/v2/BCNL_PRD/on/demandware.static/-/Sites-ecco/default/dw6c18cf63/productimages/430003-51485-pair.jpg?sw=1400&sh=1400&sm=fit&q=75",
      "category": "Casual Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "White"]
    },
    {
      "product_id": "30",
      "name": "Vibram FiveFingers V-Trail 2.0",
      "description": "Minimalist trail running shoes.",
      "price": "$120",
      "image_link":"https://cdna.lystit.com/photos/3cd3-2016/03/17/vibram-fivefingers-greyblueorange-v-run-gray-product-0-004965365-normal.jpeg",
      "category": "Trail Running Shoes",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["Black", "Grey"]
    }
  ];
  export default items
  