<script setup>
import {
  links,
  eslintConfigFile,
  prettierConfigFile,
  settingsJsonFile,
  scripts,
} from '~/constants'

const copyLink = async () => {
  try {
    const copyText = document.getElementById('mainPackages').textContent
    await navigator.clipboard.writeText(copyText)
    alert('Content copied to clipboard')
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
const copyTextFile = async (fileContent) => {
  try {
    await navigator.clipboard.writeText(fileContent)
    alert('Content copied to clipboard')
  } catch {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <div>
    <h2>
      Setting up ESLint and Prettier in a Nuxt 3 project without Typescript
    </h2>

    <h3>Links to documentation:</h3>
    <ul class="links">
      <li v-for="(item, index) in links" :key="index" class="link">
        <a :href="item.href" target="_blank">
          {{ item.text }}
        </a>
      </li>
    </ul>

    <div class="description">
      <h2>1 Inslall dependencies:</h2>
      <div class="description-image">
        <img src="/images/devDependensies.jpg" alt="img" />
      </div>
      <div class="description-copy">
        <p id="mainPackages" class="row">
          yarn add @nuxt/eslint @types/eslint-config-prettier eslint
          eslint-config-prettier eslint-plugin-prettier prettier typescript
          --dev
        </p>
        <div class="copy" @click="copyLink"></div>
      </div>
      <h2>2 Create eslint.config.mjs in the root of the project</h2>
      <div class="row" @click="copyTextFile(eslintConfigFile)">
        eslint.config.mjs
      </div>

      <h2>3 Create prettier.config.cjs in the root of the project</h2>
      <div class="row" @click="copyTextFile(prettierConfigFile)">
        prettier.config.cjs
      </div>

      <h2>4 Create settings.json in the vs code settings</h2>
      <div class="row" @click="copyTextFile(settingsJsonFile)">
        settings.json
      </div>

      <h2>5 Add scripts to the package.json</h2>
      <div class="row" @click="copyTextFile(scripts)">
        scripts for package.json
      </div>

      <h2>That is ready!</h2>
    </div>
  </div>
</template>

<style scoped>
.links {
  font-size: 24px;
}
.link {
  margin: 10px 0;
}
.description-image img {
  max-width: 100%;
}
.description-copy {
  display: flex;
  align-items: center;
  gap: 20px;
}
.row {
  display: inline-block;
  font-size: 20px;
  background: #444444;
  color: aliceblue;
  padding: 5px 10px;
}
.copy {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-image: url('/svg/copy.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>
