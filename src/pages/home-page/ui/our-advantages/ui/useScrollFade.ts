import { ref, onMounted, onUnmounted, computed } from 'vue';

const CORNER_CONTAINER_OFFSET = 0;

export function useScrollFade() {
    const containerRef = ref(null);
    const isAtStart = ref(true);
    const isAtEnd = ref(false);

    const checkScrollPosition = () => {
        if (!containerRef.value) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.value;

        isAtStart.value = scrollLeft <= 0;
        isAtEnd.value = scrollLeft + clientWidth + CORNER_CONTAINER_OFFSET >= scrollWidth;
    };

    onMounted(() => {
        if (containerRef.value) {
            containerRef.value.addEventListener('scroll', checkScrollPosition, { passive: true });
            checkScrollPosition(); // Initial check
        }
    });

    onUnmounted(() => {
        if (containerRef.value) {
            containerRef.value.removeEventListener('scroll', checkScrollPosition);
        }
    });

    const fadeClasses = computed(() => ({ 'fade-left': !isAtStart.value, 'fade-right': !isAtEnd.value }))



    return { containerRef, fadeClasses };
}
