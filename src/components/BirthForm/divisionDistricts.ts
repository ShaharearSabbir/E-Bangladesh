// mappings.ts
export const divisionDistricts: Record<string, string[]> = {
    Dhaka: ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj",
        "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail",
        "Faridpur", "Gopalganj", "Madaripur"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Bandarban", "Khagrachhari", "Rangamati",
        "Noakhali", "Lakshmipur", "Feni", "Cumilla", "Brahmanbaria", "Chandpur"],
    Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia",
        "Magura", "Meherpur", "Narail", "Satkhira"],
    Rajshahi: ["Rajshahi", "Bogura", "Joypurhat", "Naogaon", "Natore",
        "Chapai Nawabganj", "Pabna", "Sirajganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat",
        "Nilphamari", "Panchagarh", "Thakurgaon"],
    Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    Barishal: ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
};

export const districtThanas: Record<string, string[]> = {
    // --------------------------------------------------------------------------------------------------
    // DHAKA DIVISION (Central Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Dhaka": [
        "Adabor", "Badda", "Bangsal", "Bhashantek", "Cantonment", "Chowkbazar", "Darus Salam",
        "Demra", "Dhanmondi", "Gulshan", "Hazaribagh", "Jatrabari", "Kafrul", "Khilgaon",
        "Kotwali", "Lalbagh", "Motijheel", "New Market", "Ramna", "Savar", "Shahbagh",
        "Shampur", "Sutrapur", "Tejgaon", "Uttara", "Vatara", "Turag", "Mohammadpur",
        "Paltan", "Mirpur", "Pallabi", "Dhamrai", "Keraniganj", "Nawabganj", "Dohar", "Ashulia"
    ],
    "Gazipur": [
        "Gazipur Sadar", "Tongi", "Kaliakoir", "Kapasia", "Sreepur", "Kaliganj"
    ],
    "Kishoreganj": [
        "Kishoreganj Sadar", "Bhairab", "Kuliarchar", "Karimganj", "Hossainpur", "Nikli",
        "Itna", "Pakundia", "Katiadi", "Bajitpur", "Austagram", "Mithamain", "Tarail"
    ],
    "Manikganj": [
        "Manikganj Sadar", "Shibalaya", "Singair", "Daulatpur", "Ghior", "Harirampur", "Saturia"
    ],
    "Munshiganj": [
        "Munshiganj Sadar", "Sirajdikhan", "Gajaria", "Sreenagar", "Louhajang", "Tongibari"
    ],
    "Narayanganj": [
        "Narayanganj Sadar", "Araihazar", "Bandar", "Sonargaon", "Rupganj"
    ],
    "Narsingdi": [
        "Narsingdi Sadar", "Raipura", "Belabo", "Monohardi", "Shibpur", "Palash"
    ],
    "Rajbari": [
        "Rajbari Sadar", "Baliakandi", "Goalundo", "Pangsha"
    ],
    "Shariatpur": [
        "Shariatpur Sadar", "Bhedarganj", "Naria", "Zanjira", "Gosairhat", "Damudya"
    ],
    "Tangail": [
        "Tangail Sadar", "Basail", "Delduar", "Ghatail", "Kalihati", "Mirzapur", "Nagarpur",
        "Sakhipur", "Bhuapur", "Madhupur", "Gopalpur"
    ],
    "Faridpur": [
        "Faridpur Sadar", "Alfadanga", "Bhanga", "Boalmari", "Char Bhadrasan", "Madhukhali",
        "Nagarkanda", "Sadarpur", "Saltha"
    ],
    "Gopalganj": [
        "Gopalganj Sadar", "Kasiani", "Kotalipara", "Muksudpur", "Tungipara"
    ],
    "Madaripur": [
        "Madaripur Sadar", "Shibchar", "Rajoir", "Kalkini", "Dasar"
    ],

    // --------------------------------------------------------------------------------------------------
    // MYMENSINGH DIVISION (North Central Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Mymensingh": [
        "Mymensingh Sadar", "Bhaluka", "Haluaghat", "Fulbaria", "Gafargaon", "Gouripur",
        "Muktagachha", "Nandail", "Tarakanda", "Trishal"
    ],
    "Jamalpur": [
        "Jamalpur Sadar", "Bakshiganj", "Dewanganj", "Islampur", "Madarganj", "Melandaha", "Sharishabari"
    ],
    "Netrokona": [
        "Netrokona Sadar", "Atpara", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Purbadhala"
    ],
    "Sherpur": [
        "Sherpur Sadar", "Nalitabari", "Nokla", "Jhenaigati", "Sreebardi"
    ],

    // --------------------------------------------------------------------------------------------------
    // BARISHAL DIVISION (South Central Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Barishal": [
        "Barishal Sadar", "Agailjhara", "Babuganj", "Bakerganj", "Banaripara",
        "Gournadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur"
    ],
    "Barguna": [
        "Barguna Sadar", "Betagi", "Patharghata", "Taltali", "Amtali", "Bamna"
    ],
    "Bhola": [
        "Bhola Sadar", "Borhanuddin", "Charfassion", "Daulatkhan", "Lalmohan", "Monpura", "Tazumuddin"
    ],
    "Jhalokati": [
        "Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"
    ],
    "Patuakhali": [
        "Patuakhali Sadar", "Bauphal", "Dashmina", "Dumki", "Galachipa", "Kalapara", "Mirzaganj", "Rangabali"
    ],
    "Pirojpur": [
        "Pirojpur Sadar", "Bhandaria", "Kaukhali", "Mathbaria", "Nazirpur", "Nesarabad (Swarupkati)", "Indurkani"
    ],

    // --------------------------------------------------------------------------------------------------
    // CHATTOGRAM DIVISION (South East Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Chattogram": [
        "Chattogram Sadar", "Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari",
        "Karnaphuli", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Sandwip", "Satkania", "Sitakunda",
        "Panchlaish", "Chandgaon", "Pahartali", "Kotwali", "Port"
    ],
    "Cox's Bazar": [
        "Cox's Bazar Sadar", "Chakaria", "Kutubdia", "Maheshkhali", "Pekua", "Ramu", "Teknaf", "Ukhiya"
    ],
    "Bandarban": [
        "Bandarban Sadar", "Rowangchhari", "Ruma", "Thanchi", "Lama", "Alikadam", "Naikhongchhari"
    ],
    "Khagrachhari": [
        "Khagrachhari Sadar", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Dighinala", "Matiranga", "Panchhari", "Ramgarh", "Guimara"
    ],
    "Rangamati": [
        "Rangamati Sadar", "Baghaichhari", "Barkal", "Kaptai", "Kawkhali", "Belaichhari", "Jurachhari", "Longadu", "Naniarchar", "Rajasthali"
    ],
    "Noakhali": [
        "Noakhali Sadar", "Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Senbagh", "Subarnachar"
    ],
    "Lakshmipur": [
        "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"
    ],
    "Feni": [
        "Feni Sadar", "Chhagalnaiya", "Daganbhuiyan", "Fulgazi", "Parshuram", "Sonagazi"
    ],
    "Cumilla": [
        "Cumilla Sadar", "Barura", "Chandina", "Debidwar", "Homna", "Laksham", "Nangalkot", "Meghna", "Muradnagar", "Daudkandi", "Titas", "Monohargonj", "Brahmanpara"
    ],
    "Brahmanbaria": [
        "Brahmanbaria Sadar", "Ashuganj", "Nabinagar", "Kasba", "Sarail", "Bijoynagar", "Nasirnagar", "Banchharampur", "Akhaura"
    ],
    "Chandpur": [
        "Chandpur Sadar", "Faridganj", "Haimchar", "Hajiganj", "Kachua", "Matlab Uttar", "Matlab Dakkhin", "Shahrasti"
    ],

    // --------------------------------------------------------------------------------------------------
    // KHULNA DIVISION (South West Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Khulna": [
        "Khulna Sadar", "Dighalia", "Dumuria", "Fultala", "Koyra", "Paikgachha", "Rupsa", "Terokhada"
    ],
    "Bagerhat": [
        "Bagerhat Sadar", "Chitalmari", "Kachua", "Mongla", "Mollahat", "Morrelganj", "Rampal", "Sharankhola", "Fakirhat"
    ],
    "Chuadanga": [
        "Chuadanga Sadar", "Alamdanga", "Damurhuda", "Jibannagar"
    ],
    "Jashore": [
        "Jashore Sadar", "Abhaynagar", "Bagherpara", "Chaugachha", "Keshabpur", "Manirampur", "Sharsha", "Jhikargachha"
    ],
    "Jhenaidah": [
        "Jhenaidah Sadar", "Harinakundu", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"
    ],
    "Kushtia": [
        "Kushtia Sadar", "Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Mirpur"
    ],
    "Magura": [
        "Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"
    ],
    "Meherpur": [
        "Meherpur Sadar", "Mujibnagar", "Gangni"
    ],
    "Narail": [
        "Narail Sadar", "Kalia", "Lohagara"
    ],
    "Satkhira": [
        "Satkhira Sadar", "Assasuni", "Debhata", "Kaliganj", "Kalaroa", "Shyamnagar", "Tala"
    ],

    // --------------------------------------------------------------------------------------------------
    // RAJSHAHI DIVISION (North West Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Rajshahi": [
        "Rajshahi Sadar", "Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"
    ],
    "Bogura": [
        "Bogura Sadar", "Adamdighi", "Dhupchanchia", "Dhunat", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shibganj", "Sherpur", "Sonatala", "Shahjahanpur"
    ],
    "Jaipurhat": [
        "Jaipurhat Sadar", "Akkelpur", "Kalai", "Khetlal", "Panchbibi"
    ],
    "Naogaon": [
        "Naogaon Sadar", "Atrai", "Badalgachhi", "Dhamoirhat", "Mahadevpur", "Manda", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"
    ],
    "Natore": [
        "Natore Sadar", "Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Singra", "Naldanga"
    ],
    "Nawabganj": [
        "Nawabganj Sadar", "Bholahat", "Gomastapur", "Nachole", "Shibganj"
    ],
    "Pabna": [
        "Pabna Sadar", "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Santhia", "Sujanagar"
    ],
    "Sirajganj": [
        "Sirajganj Sadar", "Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahzadpur", "Tarash", "Ullahpara"
    ],

    // --------------------------------------------------------------------------------------------------
    // RANGPUR DIVISION (North Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Rangpur": [
        "Rangpur Sadar", "Badarganj", "Gangachhara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"
    ],
    "Dinajpur": [
        "Dinajpur Sadar", "Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj", "Parbatipur"
    ],
    "Gaibandha": [
        "Gaibandha Sadar", "Palashbari", "Gobindaganj", "Sadullapur", "Sughatta", "Sundarganj", "Phulchhari"
    ],
    "Kurigram": [
        "Kurigram Sadar", "Bhurungamari", "Chilmari", "Phulbari", "Nageshwari", "Rajarhat", "Raiganj", "Roumari", "Ulipur"
    ],
    "Lalmonirhat": [
        "Lalmonirhat Sadar", "Aditmari", "Hatibandha", "Kaliganj", "Patgram"
    ],
    "Nilphamari": [
        "Nilphamari Sadar", "Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Saidpur"
    ],
    "Panchagarh": [
        "Panchagarh Sadar", "Atwari", "Boda", "Debiganj", "Tentulia"
    ],
    "Thakurgaon": [
        "Thakurgaon Sadar", "Baliadangi", "Haripur", "Pirganj", "Ranisankail"
    ],

    // --------------------------------------------------------------------------------------------------
    // SYLHET DIVISION (North East Bangladesh)
    // --------------------------------------------------------------------------------------------------
    "Sylhet": [
        "Sylhet Sadar", "Balaganj", "Beanibazar", "Bishwanath", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Kompaniganj", "Osmaninagar", "Zakiganj"
    ],
    "Habiganj": [
        "Habiganj Sadar", "Ajmiriganj", "Baniachong", "Bahubal", "Chunarughat", "Madhabpur", "Nabiganj", "Lakhai", "Shayestaganj"
    ],
    "Moulvibazar": [
        "Moulvibazar Sadar", "Barlekha", "Juri", "Kulaura", "Kamalganj", "Rajnagar", "Sreemangal"
    ],
    "Sunamganj": [
        "Sunamganj Sadar", "Bishwambarpur", "Chhatak", "Derai", "Dharamapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Tahirpur"
    ]
};