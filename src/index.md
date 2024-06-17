---
layout: page
sidebar: false
---

<script setup>
import { ref, onMounted } from 'vue';
import MarkMap from './MarkMap.vue';

const markdown = ref('');
const isLoaded = ref(false);

onMounted(async () => {
  const response = await fetch('/markmap.md');
  markdown.value = await response.text();
  console.log(markdown.value);
  isLoaded.value = true;
});
</script>

<div v-if="isLoaded">
    <MarkMap :markdown="markdown" />
</div>
