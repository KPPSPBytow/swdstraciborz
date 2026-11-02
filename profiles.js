// --- BAZA PROFILI POWIATÓW I ULIC ---
const RAW_PROFILES = [
    {
        id: "raciborski", 
        name: "KP PSP Racibórz (Powiat Raciborski)", 
        radioCallsign: "Racibórz 998",
        desc: "Woj. śląskie • JRG Racibórz, KP PSP Racibórz + 21 jednostek OSP KSRG",
        voivodeship: "śląskie", 
        countyName: "pow. raciborski", 
        mapCenter: [50.0919, 18.2198], 
        bbox: "17.95,49.90,18.55,50.25",
        jrgList: ["JRG Racibórz"], 
        defaultTown: "Racibórz",
        towns: [
            ["Racibórz", "m. Racibórz", 50.0919, 18.2198, ["ul. Władysława Reymonta", "ul. Opawska", "ul. Głubczycka", "ul. Rybnicka", "ul. Bosacka", "ul. Nowa", "ul. Długa", "ul. Mickiewicza"]],
            ["Kuźnia Raciborska", "gm. Kuźnia Raciborska", 50.2014, 18.3094, ["ul. Słowackiego", "ul. Staszica", "ul. Klasztorna", "ul. Rudzka", "ul. Moniuszki"]],
            ["Rudy", "gm. Kuźnia Raciborska", 50.1942, 18.4481, ["ul. Rogera", "ul. Cysterska", "ul. Raciborska", "ul. Szkolna"]],
            ["Krzanowice", "gm. Krzanowice", 50.0206, 18.1264, ["ul. Zawadzkiego", "ul. Morawska", "ul. Opawska", "ul. Rynek"]],
            ["Bojanów", "gm. Krzanowice", 50.0381, 18.1653, ["ul. Raciborska", "ul. Główna", "ul. Krzanowicka"]],
            ["Wojnowice", "gm. Krzanowice", 50.0522, 18.1489, ["ul. Pocztowa", "ul. Wojska Polskiego", "ul. Szkolna"]],
            ["Krzyżanowice", "gm. Krzyżanowice", 49.9881, 18.2697, ["ul. Główna", "ul. Kolejowa", "ul. Tworkowska"]],
            ["Tworków", "gm. Krzyżanowice", 50.0244, 18.2325, ["ul. Parkowa", "ul. Główna", "ul. Raciborska"]],
            ["Bieńkowice", "gm. Krzyżanowice", 50.0369, 18.2144, ["ul. Pomnikowa", "ul. Raciborska", "ul. Szkolna"]],
            ["Chałupki", "gm. Krzyżanowice", 49.9261, 18.3128, ["ul. Bogumińska", "ul. Raciborska", "ul. Graniczna"]],
            ["Zabełków", "gm. Krzyżanowice", 49.9461, 18.2975, ["ul. Powstańców Śląskich", "ul. Nowa"]],
            ["Nędza", "gm. Nędza", 50.1592, 18.3133, ["ul. Strażacka", "ul. Jana III Sobieskiego", "ul. Kolejowa"]],
            ["Górki Śląskie", "gm. Nędza", 50.1419, 18.3742, ["ul. Ofiar Oświęcimskich", "ul. Rudzka"]],
            ["Pietrowice Wielkie", "gm. Pietrowice Wielkie", 50.0789, 18.0936, ["ul. 1 Maja", "ul. Szkolna", "ul. Konopnickiej"]],
            ["Krowiarki", "gm. Pietrowice Wielkie", 50.1306, 18.1058, ["ul. Wyzwolenia", "ul. Parkowa"]],
            ["Rudnik", "gm. Rudnik", 50.1264, 18.1819, ["ul. Słoneczna", "ul. Kozielska", "ul. Szkolna"]],
            ["Szonowice", "gm. Rudnik", 50.1711, 18.1561, ["ul. Słowackiego", "ul. Główna"]],
            ["Kornowac", "gm. Kornowac", 50.0819, 18.3347, ["ul. Zacisze", "ul. Raciborska"]],
            ["Pogrzebień", "gm. Kornowac", 50.0886, 18.3039, ["ul. Pamiątki", "ul. Brzezka"]]
        ],
        psp: [
            ["JRG Racibórz", "Racibórz", "ul. Władysława Reymonta 8, 47-400 Racibórz", 50.0956, 18.2215, true, [
                ["561[S]21", "GBA 2,5/24 Renault D15/WISS", 6], ["561[S]25", "GCBA 8/50 Renault K440/WISS", 4],
                ["561[S]26", "GCBA 5/32 MAN TGM 18.340/Stolarczyk", 4], ["561[S]43", "SRt Mercedes Atego/Bocar", 3],
                ["561[S]51", "SD-37 Iveco EuroFire/Magirus", 2], ["561[S]90", "SLRr Ford Ranger", 2]
            ]],
            ["KP PSP Racibórz", "Racibórz", "ul. Władysława Reymonta 8, 47-400 Racibórz", 50.0958, 18.2219, true, [
                ["560[S]90", "SLOp Skoda Octavia", 1], ["560[S]81", "SLKw Opel Vivaro", 2]
            ]]
        ],
        osp: [
            [".OSP KSRG Racibórz-Markowice", "Racibórz", "ul. Kpt. St. Myśliwca 9, 47-400 Racibórz", 50.1197, 18.2683, true, [["569[S]67", "GBA 3/16 Volvo FL280/Bocar", 6], ["569[S]68", "SLRr Nissan Pickup", 3]]],
            [".OSP KSRG Racibórz-Brzezie", "Racibórz", "ul. Bitwy Olzańskiej 28, 47-400 Racibórz", 50.0725, 18.2750, true, [["569[S]65", "GBA 2,5/16 Mercedes Atego/Bocar", 6]]],
            [".OSP KSRG Racibórz-Sudół", "Racibórz", "ul. Hulczyńska 164, 47-400 Racibórz", 50.0560, 18.2045, true, [["569[S]70", "GBA 2,5/16 Renault Midlum", 6]]],
            [".OSP KSRG Racibórz-Miedonia", "Racibórz", "ul. Podmiejska 29, 47-400 Racibórz", 50.1112, 18.1872, true, [["569[S]69", "GBA 3/29 Volvo FL/Bocar", 6]]],
            [".OSP KSRG Kuźnia Raciborska", "Kuźnia Raciborska", "ul. Słowackiego 4, 47-420 Kuźnia Raciborska", 50.2014, 18.3094, false, [["569[S]26", "GBA 2,5/16 Mercedes Atego", 6], ["569[S]27", "GCBA 5/32 Tatra 815", 4]]],
            [".OSP KSRG Rudy", "Rudy", "ul. Rogera 2, 47-430 Rudy", 50.1942, 18.4481, false, [["569[S]28", "GBA 3/16 Volvo FL/Bocar", 6], ["569[S]29", "GCBA 6/32 Jelcz", 4]]],
            [".OSP KSRG Krzanowice", "Krzanowice", "ul. Zawadzkiego 3, 47-470 Krzanowice", 50.0206, 18.1264, false, [["569[S]11", "GBA 2,5/16 Mercedes Atego", 6], ["569[S]12", "GCBA 5/32 Scania", 6]]],
            [".OSP KSRG Bojanów", "Bojanów", "ul. Raciborska 36, 47-470 Bojanów", 50.0381, 18.1653, false, [["569[S]13", "GBA 2,5/24 Renault Midlum", 6]]],
            [".OSP KSRG Wojnowice", "Wojnowice", "ul. Pocztowa 19A, 47-470 Wojnowice", 50.0522, 18.1489, false, [["569[S]16", "GBA 2,5/16 Volvo FL", 6]]],
            [".OSP KSRG Krzyżanowice", "Krzyżanowice", "ul. Główna 3, 47-450 Krzyżanowice", 49.9881, 18.2697, false, [["569[S]34", "GBA 3/16 Volvo FL/Bocar", 6]]],
            [".OSP KSRG Tworków", "Tworków", "ul. Parkowa 6, 47-451 Tworków", 50.0244, 18.2325, false, [["569[S]38", "GBA 2,5/16 Mercedes Atego", 6], ["569[S]39", "GLM Ford Transit", 4]]],
            [".OSP KSRG Bieńkowice", "Bieńkowice", "ul. Pomnikowa 11, 47-451 Bieńkowice", 50.0369, 18.2144, false, [["569[S]31", "GBA 3/16 Volvo FL/Bocar", 6]]],
            [".OSP KSRG Chałupki", "Chałupki", "ul. Bogumińska 30, 47-460 Chałupki", 49.9261, 18.3128, false, [["569[S]33", "GBA 2,5/16 MAN TGL", 6]]],
            [".OSP KSRG Nędza", "Nędza", "ul. Strażacka 2, 47-440 Nędza", 50.1592, 18.3133, false, [["569[S]43", "GBA 3/16 Volvo FL/Bocar", 6]]],
            [".OSP KSRG Górki Śląskie", "Górki Śląskie", "ul. Ofiar Oświęcimskich 57, 47-440 Górki Śląskie", 50.1419, 18.3742, false, [["569[S]41", "GBA 2,5/16 Renault", 6]]],
            [".OSP KSRG Pietrowice Wielkie", "Pietrowice Wielkie", "ul. 1 Maja 8B, 47-480 Pietrowice Wielkie", 50.0789, 18.0936, false, [["569[S]51", "GBA 2,5/16 Mercedes Atego", 6], ["569[S]52", "GCBA 5/32 Jelcz", 4]]],
            [".OSP KSRG Krowiarki", "Krowiarki", "ul. Wyzwolenia 20, 47-480 Krowiarki", 50.1306, 18.1058, false, [["569[S]48", "GBA 2,5/16 MAN", 6]]],
            [".OSP KSRG Rudnik", "Rudnik", "ul. Słoneczna 4, 47-411 Rudnik", 50.1264, 18.1819, false, [["569[S]56", "GBA 2,5/16 Mercedes Atego", 6]]],
            [".OSP KSRG Szonowice", "Szonowice", "ul. Słowackiego 19, 47-411 Szonowice", 50.1711, 18.1561, false, [["569[S]61", "GBA 2,5/16 Star Man", 6]]],
            [".OSP KSRG Kornowac", "Kornowac", "ul. Zacisze 4, 47-485 Kornowac", 50.0819, 18.3347, false, [["569[S]01", "GBA 2,5/16 Volvo", 6]]],
            [".OSP KSRG Pogrzebień", "Pogrzebień", "ul. Pamiątki 23, 47-485 Pogrzebień", 50.0886, 18.3039, false, [["569[S]03", "GBA 2,5/16 Mercedes", 6]]]
        ]
    }
];
