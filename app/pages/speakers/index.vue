<script setup lang="ts">
import type { Speaker } from '~/types'

const { data: speakers } = await useAsyncData('speakers', () => queryContent<Speaker>('/speaker')
  .where({ _extension: 'yml' })
  .find())
</script>

<template>
  <div>
    <h1>Ils ont speak !</h1>
    <div class="p-2 flex flex-row">
      <SpeakerCard
        v-for="(speaker, index) in speakers"
        :key="index"
        :speaker="speaker"
      />
    </div>
  </div>
</template>

<style scoped></style>
