<script setup lang="ts">
import type { Speaker } from '~/types';

const { data: speakers } = await useAsyncData('speakers', () => queryContent<Speaker>('/speaker')
  .where({ _extension: 'yml' })
  .find())
</script>

<template>
  <h1>Ils ont speak !</h1>
  <div class="p-2 flex flex-row">
    <Speaker v-for="(speaker, index) in speakers" :key="index" :speaker="speaker" />
  </div>

</template>

<style scoped></style>
