import Section from "components/Section";
function Home() {
    const items = [
        {
            id: 1,
            title: "Hot Hits Türkiye",
            description: "Dinlemekten vazgeçemediklerin ve en yeni hitler. Kapak: Mabel Matiz",
            image: "https://i.scdn.co/image/ab67706f000000027e5eb86a8e95a1533b62c212",
            type: "album"
        },
        {
            id: 2,
            title: "popt",
            description: "𝙫𝙞𝙗𝙚𝙨 💫 Kapak: Ece Seçkin x Anıl Piyancı x Genco Ecer",
            image: "https://i.scdn.co/image/ab67706f000000029f82bb5ec40c342950158f7c",
            type: "album"
        },
        {
            id: 3,
            title: "trend",
            description: "internette olan biten📱",
            image: "https://i.scdn.co/image/ab67706f00000002cc0636b16f853a0dbc03bfad",
            type: "album"
        },
        {
            id: 4,
            title: "Slow Pop",
            description: "En sevdiğin slow şarkılar. Kapak: Göksel",
            image: "https://i.scdn.co/image/ab67706f0000000256df50ea4b354ab8d5d88c26",
            type: "album"
        },
        {
            id: 5,
            title: "New Music Friday Türkiye",
            description: "Haftanın en iyi yeni çıkışları. Kapak: Evdeki Saat",
            image: "https://i.scdn.co/image/ab67706f00000002a312f180a1317c282214ee69",
            type: "album"
        },
        {
            id: 6,
            title: "OLAY",
            description: "Son yılların olay yaratan Türkçe şarkıları.",
            image: "https://i.scdn.co/image/ab67706f00000002127e9c23180f0846552821a2",
            type: "album"
        },
        {
            id: 7,
            title: "Yabancı Pop",
            description: "Hit pop trendleri. Kapak: Lana Del Rey",
            image: "https://i.scdn.co/image/ab67706f0000000271a704d359cab9f7d32e7696",
            type: "podcast"
        },
        {
            id: 8,
            title: "Sla",
            description: "Sanatçı",
            image: "https://i.scdn.co/image/ab6761610000f178269fa2ab4209eb7c3487427d",
            type: "artist"
        }
    ]
    return (
        <div className="grid gap-y-10">
            <Section title={"Furkan Karataş İçin Derlendi"} more={"/blabla"} items={items} />
            <Section title={"Pop"} more={"/blabla"} items={items} />
            <Section title={"Yakınlarda Çalınanlar"} more={"/blabla"} items={items} />
            <Section title={"Taptaze yeni müzikler"} more={"/blabla"} items={items} />
            <Section title={"Yerli Alternatif"} more={"/blabla"} items={items} />
        </div>
    )
}

export default Home