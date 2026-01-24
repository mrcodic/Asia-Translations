export const scrollToSection = (
    id: string,
) => {
    const el = document.getElementById(id)
    if (!el) return

    const y =
        el.getBoundingClientRect().top +
        window.scrollY
    window.scrollTo({ top: y, behavior: "smooth" })
}