export function scrollToId(id: string, offset = 100) {
    const section = document.getElementById(id);
    if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}