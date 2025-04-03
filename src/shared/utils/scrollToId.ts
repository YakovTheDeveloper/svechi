export function scrollToId(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth'});
}