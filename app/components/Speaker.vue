<script setup lang="ts"></script>

<template>
    <div class="flex flex-col h-[35rem] w-[19rem] border border-grey-500 rounded-md p-2 drop-shadow-2xl">
        <!-- PHOTO -->
        <div class="rounded-md h-[21rem] w-full">
            <img src="public/speakers/AlexandreNedelec.jpeg" class="h-full w-full rounded-md" />
        </div>

        <!-- NAME AND TITLE -->
        <div class="w-full flex flex-col justify-center mt-2">
            <div class="text-3xl text-center font-bold">Alexandre Nedelec</div>
            <div class="text-lg text-center leading-tight">Manager @<a target="_blank"
                    href="https://www.avanade.com/fr-fr">Avanade</a></div>
        </div>

        <!-- Talks -->
        <div class="w-full flex gap-x-2 my-4">
            <div class="flex flex-col items-center">
                <div class="text-center">MTG#3</div>
                <UIcon name="i-mdi-youtube" class="w-5 h-5" />
            </div>
            <div class="border-gray-500 border-l h-full"></div>
            <div class="w-4/5 text-wrap">
                Industrialiser la configuration de ses dépôts Github avec de l'IaC
            </div>
        </div>

        <!-- SOCIALS -->
        <div class="w-full flex justify-center my-auto">
            <UIcon name="i-mdi-twitter" class="w-5 h-5" />
            <UIcon name="i-mdi-github" class="w-5 h-5" />
            <UIcon name="i-mdi-notebook-edit" class="w-5 h-5" />
            <UIcon name="i-mdi-linkedin" class="w-5 h-5" />
        </div>
    </div>
</template>

<style scoped></style>
