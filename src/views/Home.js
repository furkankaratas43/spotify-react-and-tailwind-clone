import Section from "components/Section";
function Home() {
    const items = [
        {
            id: 1,
            title: "Hot Hits Türkiye",
            artist: "test8",
            description: "Dinlemekten vazgeçemediklerin ve en yeni hitler. Kapak: Mabel Matiz",
            image: "https://i.scdn.co/image/ab67706f000000027e5eb86a8e95a1533b62c212",
            type: "album",
            src: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
        },
        {
            id: 2,
            title: "popt",
            artist: "test",
            description: "𝙫𝙞𝙗𝙚𝙨 💫 Kapak: Ece Seçkin x Anıl Piyancı x Genco Ecer",
            image: "https://i.scdn.co/image/ab67706f000000029f82bb5ec40c342950158f7c",
            type: "album",
            src: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3"
        },
        {
            id: 3,
            title: "trend",
            artist: "test2",
            description: "internette olan biten📱",
            image: "https://i.scdn.co/image/ab67706f00000002cc0636b16f853a0dbc03bfad",
            type: "album",
            src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3"
        },
        {
            id: 4,
            title: "Slow Pop",
            artist: "test3",
            description: "En sevdiğin slow şarkılar. Kapak: Göksel",
            image: "https://i.scdn.co/image/ab67706f0000000256df50ea4b354ab8d5d88c26",
            type: "album",
            src: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3"
        },
        {
            id: 5,
            title: "New Music Friday Türkiye",
            artist: "test4",
            description: "Haftanın en iyi yeni çıkışları. Kapak: Evdeki Saat",
            image: "https://i.scdn.co/image/ab67706f00000002a312f180a1317c282214ee69",
            type: "album",
            src: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
        },
        {
            id: 6,
            title: "OLAY",
            artist: "test5",
            description: "Son yılların olay yaratan Türkçe şarkıları.",
            image: "https://i.scdn.co/image/ab67706f00000002127e9c23180f0846552821a2",
            type: "album",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id: 7,
            title: "Yabancı Pop",
            artist: "test6",
            description: "Hit pop trendleri. Kapak: Lana Del Rey",
            image: "https://i.scdn.co/image/ab67706f0000000271a704d359cab9f7d32e7696",
            type: "podcast",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id: 8,
            title: "Sla",
            artist: "test7",
            description: "Sanatçı",
            image: "https://i.scdn.co/image/ab6761610000f178269fa2ab4209eb7c3487427d",
            type: "artist",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
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