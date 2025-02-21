<script setup lang="ts">
import type { Speaker } from '~/types';

const props = defineProps<{ speaker: Speaker }>()
console.log(props.speaker)
</script>

<template>
    <div class="flex flex-col h-[35rem] w-[19rem] border border-grey-500 rounded-md p-2 drop-shadow-2xl">
        <!-- PHOTO -->
        <div class="rounded-md h-[21rem] w-full">
            <img :src="speaker.photo" class="h-full w-full rounded-md" />
        </div>

        <!-- NAME AND TITLE -->
        <div class="w-full flex flex-col justify-center mt-2">
            <div class="text-3xl text-center font-bold">{{ speaker.firstname }} {{ speaker.lastname }}</div>
            <div class="text-lg text-center leading-tight">{{ speaker.role }} @<a target="_blank"
                    :href="speaker.company.link">{{ speaker.company.name }}</a></div>
        </div>

        <!-- Talks -->
        <div class="w-full flex gap-x-2 my-4">
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <div class="text-center">MTG#{{ speaker.talk.edition }}</div>
                    <a target="_blank" :href="speaker.talk.replay">
                        <UIcon name="i-mdi-youtube" class="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div class="border-gray-500 border-l h-full"></div>
            <div class="w-4/5 text-wrap">
                {{ speaker.talk.title }}
            </div>
        </div>

        <!-- SOCIALS -->
        <div class="w-full flex justify-center my-auto gap-x-2  ">
            <SocialLink v-for="social in speaker.socials" :social="social" />
        </div>
    </div>
</template>

<style scoped></style>
