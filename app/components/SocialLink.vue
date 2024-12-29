<script setup lang="ts">
import type { Social } from '~/types';

const props = defineProps<{ social: Social }>();

const icon = computed(() => {
    switch (props.social.type) {
        case 'GITHUB':
            return "i-mdi-github";
        case 'TWITTER':
            return "i-mdi-twitter";
        case 'BLOG':
            return "i-mdi-notebook-edit";
        case 'LINKEDIN':
            return "i-mdi-linkedin";
        case 'BLUESKY':
            return "i-mingcute-bluesky-social-fill";
        default:
            return "default"
    }
})

</script>

<template>
    <a target="_blank" :href="social.link">
        <UIcon :name="icon" class="w-5 h-5" />
    </a>

</template>

<style scoped></style>
