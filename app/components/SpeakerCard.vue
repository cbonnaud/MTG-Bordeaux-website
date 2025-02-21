<script setup lang="ts">
import type { Speaker, Talk } from '~/types'

const props = defineProps<{ speaker: Speaker }>()
const lastTalkId = computed(() => props.speaker.talks.at(-1))
const { data: lastTalk } = await useAsyncData(`talk-${lastTalkId.value}`, () => queryContent<Talk>('/talks')
  .where({ _extension: 'yml', id: lastTalkId.value })
  .findOne())
</script>

<template>
  <div class="flex flex-col h-[35rem] w-[19rem] border border-grey-500 rounded-md p-2 drop-shadow-2xl">
    <!-- PHOTO -->
    <div class="rounded-md h-[21rem] w-full">
      <img
        :src="speaker.photo"
        class="h-full w-full rounded-md"
      >
    </div>

    <!-- NAME AND TITLE -->
    <div class="w-full flex flex-col justify-center mt-2">
      <div class="text-3xl text-center font-bold">
        {{ speaker.firstname }} {{ speaker.lastname }}
      </div>
      <div class="text-lg text-center leading-tight">
        {{ speaker.role }}
        <span v-if="speaker.company">
          @
          <a
            target="_blank"
            :href="speaker.company.link"
          >
            {{ speaker.company.name }}
          </a>
        </span>
      </div>
    </div>

    <!-- Talks -->
    <div class="w-full flex gap-x-2 my-4">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <div class="text-center">
            MTG#{{ lastTalk.meetup }}
          </div>
          <a
            target="_blank"
            :href="lastTalk.replay"
          >
            <UIcon
              name="i-mdi-youtube"
              class="w-5 h-5"
            />
          </a>
        </div>
      </div>
      <div class="border-gray-500 border-l h-full" />
      <div class="w-4/5 text-wrap">
        {{ lastTalk.title }}
      </div>
    </div>

    <!-- SOCIALS -->
    <div class="w-full flex justify-center my-auto gap-x-2  ">
      <SocialLink
        v-for="social in speaker.socials"
        :key="social.type"
        :social="social"
      />
    </div>
  </div>
</template>

<style scoped></style>
