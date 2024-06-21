---
layout: page
sidebar: false
---

<script setup>
import { ref, onMounted } from 'vue';
import MarkMap from './MarkMap.vue';
import { useData } from 'vitepress';
import { convertToMarkdown } from './handle-markmap';

const markdown = ref('');
const { theme: {_value: {nav, sidebar}} } = useData();

markdown.value = convertToMarkdown(nav, sidebar);
</script>

<MarkMap :markdown="markdown" />
