function Playlists() {
    return (
        <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
            <ul>
                { new Array(40).fill(<li>
                    <a href={"foo"} className="text-s text-link hover:text-white flex h-8 items-center">12. Çalma Listem</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Playlists