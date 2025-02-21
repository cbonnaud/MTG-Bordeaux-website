<script setup lang="ts">
const { data: page } = await useAsyncData('events', () => queryContent('/events').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UContainer>
    <UPageHeader
      :title="page.title"
      class="py-[50px]"
    />

    <UPageBody>
      <UPageGrid>
        <UPageCard
          v-for="(event, index) in page.events"
          :key="index"
          :to="event.url"
          :title="event.name"
          :description="`At ${event.location} on ${event.date}`"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UPageGrid>
    </UPageBody>
  </UContainer>
</template>
