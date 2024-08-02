<!-- WithoutTs.vue  -->
<script setup>
import { copyLink, copyTextFile } from '~/utils'
import {
  eslintConfigFile,
  prettierConfigFile,
  scripts,
  settingsJsonFile,
  nuxtConfigFile,
} from '~/constants'
</script>

<template>
  <div class="description">
    <h2>1 Inslall dependencies:</h2>
    <div class="description-image">
      <img src="/images/devDependensies.jpg" alt="img" />
    </div>
    <div class="description-copy">
      <p id="mainPackages" class="row">
        yarn add @nuxt/eslint @types/eslint-config-prettier eslint
        eslint-config-prettier eslint-plugin-prettier prettier typescript --dev
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
    <div class="row" @click="copyTextFile(settingsJsonFile)">settings.json</div>

    <h2>5 Add scripts to the package.json</h2>
    <div class="row" @click="copyTextFile(scripts)">
      scripts for package.json
    </div>

    <h2>6 Add module to the nuxt.config.ts</h2>
    <div class="row" @click="copyTextFile(nuxtConfigFile)">
      module for nuxt.config.ts
    </div>
  </div>
</template>

<style scoped>
@import '~/assets/general.css';
</style>
