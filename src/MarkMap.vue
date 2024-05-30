<template>
    <div>
        <svg id="markmap" style="width: 100%; height: 90vh"></svg>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { Transformer } from 'markmap-lib';
import { Markmap, loadCSS, loadJS } from 'markmap-view';

export default {
    name: 'MarkMap',
    props: {
        markdown: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        onMounted(() => {
            const transformer = new Transformer();
            const { root, features } = transformer.transform(props.markdown);
            const assets = transformer.getAssets();

            if (assets.styles) loadCSS(assets.styles);
            if (assets.scripts) loadJS(assets.scripts, { getMarkmap: () => window.markmap });

            const savedState = JSON.parse(localStorage.getItem('markmap-state'));
            const markmapState = savedState ? savedState : root;

            const markmap = Markmap.create('#markmap', null, markmapState);

            for (const item of document.getElementsByTagName('circle')) {
                item.addEventListener('click', () => {
                    localStorage.setItem('markmap-state', JSON.stringify(markmap.state.data));
                });
            }
        });
    }
};
</script>