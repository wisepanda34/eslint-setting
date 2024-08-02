<script setup>
import { links } from '~/constants'
const isActive = ref(1)
</script>

<template>
  <div>
    <div class="container">
      <h1>Setting up ESLint and Prettier in a Nuxt 3 project</h1>

      <h3>Links to documentation:</h3>
      <ul class="links">
        <li v-for="(item, index) in links" :key="index" class="link">
          <a :href="item.href" target="_blank">
            {{ item.text }}
          </a>
        </li>
      </ul>

      <div class="wrapper">
        <div class="tabs">
          <div
            :class="['tab', { active: isActive === 1 }]"
            @click="isActive = 1"
          >
            Only JS
          </div>
          <div
            :class="['tab', { active: isActive === 2 }]"
            @click="isActive = 2"
          >
            TS
          </div>
        </div>
        <div class="block">
          <WithoutTs v-if="isActive === 1" />
          <WithTs v-else />
        </div>
      </div>

      <h2>That is ready!</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1240px;
  margin: 20px auto;
}
.links {
  font-size: 24px;
}
.link {
  margin: 10px 0;
}
.wrapper {
  width: 100%;
}
.tabs {
  display: flex;
}
.tab {
  width: 150px;
  height: 50px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom: none;
  cursor: pointer;
  margin-bottom: -4px;
}
.tab:first-child {
  border-right: none;
}
.tab.active {
  font-size: 24px;
  font-weight: 600;
  background: #fff;
  border-bottom: 5px solid #fff;
  z-index: 10;
}
.block {
  max-width: 100%;
  border: 1px solid grey;
  padding: 20px;
}
</style>
