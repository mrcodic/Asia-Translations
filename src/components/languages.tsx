const asianLanguages = [
    { name: "Chinese", code: "cn" },
    { name: "Japanese", code: "jp" },
    { name: "Hindi", code: "in" },
    { name: "Burmese", code: "mm" },
    { name: "Korean", code: "kr" },
    { name: "Indonesian", code: "id" },
    { name: "Malay", code: "my" },
    { name: "Thai", code: "th" },
    { name: "Khmer", code: "kh" },
    { name: "Vietnamese", code: "vn" },
    { name: "Tamil", code: "in" },
    { name: "Tagalog", code: "ph" },
    { name: "Telugu", code: "in" },
    { name: "Sinhalese", code: "lk" },
    { name: "Farsi", code: "ir" },
    { name: "Dari", code: "af" },
    { name: "Punjabi", code: "pk" },
    { name: "Bengali", code: "bd" },
    { name: "Gujarati", code: "in" },
    { name: "Nepali", code: "np" },
    { name: "Urdu", code: "pk" },
    { name: "Pashto", code: "af" },
    { name: "Cebuano", code: "ph" },
    { name: "Lao", code: "la" },
    { name: "Karen", code: "mm" },
    { name: "Hmong", code: "cn" },
    { name: "Azerbaijani", code: "az" },
]

const europeanLanguages = [
    { name: "French", code: "fr" },
    { name: "Italian", code: "it" },
    { name: "German", code: "de" },
    { name: "Portuguese", code: "pt" },
    { name: "Spanish", code: "es" },
    { name: "Armenian", code: "us" },
]

const middleEasternLanguages = [
    { name: "Arabic", code: "sa" },
    { name: "Turkish", code: "tr" },
]

function Section({
    title,
    languages,
}: {
    title: string
    languages: { name: string; code: string }[]
}) {
    return (
        <section>
            {/* Title */}
            <div className="flex items-center gap-4 py-4">
                <span className="h-8 w-1 bg-[#D4AF37]" />
                <h2 className="text-3xl font-semibold text-[#1F3A4A]">
                    {title}
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 my-4">
                {languages.map((lang, i) => (
                    <div
                        key={i}
                        className="flex justify-center items-center gap-2 rounded-md bg-[#EDEDED] py-1"
                    >
                        <span className={`fi fi-${lang.code}`}></span>
                        <span className="text-md font-medium text-[#1F3A4A]">
                            {lang.name}
                        </span>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default function Languages() {
    return (
        <div className="relative py-20">
            <div className="absolute inset-0 bg-[url('/planet-bg.jpg')] bg-center bg-no-repeat" />

            <div className="relative mx-auto max-w-7xl px-6">
                <Section title="Asian Languages" languages={asianLanguages} />
                <Section title="European Languages" languages={europeanLanguages} />
                <Section
                    title="Middle Eastern Languages"
                    languages={middleEasternLanguages}
                />
            </div>
        </div>
    )
}
