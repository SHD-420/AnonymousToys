<template>
    <transition name="fade">
        <img
            :src="processedSrc"
            :alt="alt"
            v-show="isLoaded"
            @load="isLoaded = true"
        />
    </transition>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    isExternal: {
        type: Boolean,
        default: false,
    },
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: "",
    },
});

const processedSrc = computed(() =>
    props.isExternal ? props.src : window.asset(`images/${props.src}`)
);

const isLoaded = ref(false);
</script>
