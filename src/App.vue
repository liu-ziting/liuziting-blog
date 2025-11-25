<template>
    <div class="container">
        <ProfileHeader />
        <main class="bento-grid">
            <ProjectCard v-for="(project, index) in projects" :key="project.title + index" :project="project" :index="index" />
        </main>
    </div>
    <DockBar />
</template>

<script setup lang="ts">
import ProfileHeader from './components/ProfileHeader.vue'
import ProjectCard from './components/ProjectCard.vue'
import DockBar from './components/DockBar.vue'
import { projects } from './data/projects'
</script>
