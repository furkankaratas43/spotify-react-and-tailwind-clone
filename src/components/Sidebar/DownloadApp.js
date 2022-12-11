import {Icon} from "Icons";

function DownloadApp() {
    return (
        <a href={"foo"} className="h-10 text-sm font-semibold text-link hover:text-white flex flex-shrink-0 items-center px-6 gap-x-4">
            <Icon name="download" size={20} />
            Uygulamayı Yükle
        </a>
    )
}
export default DownloadApp