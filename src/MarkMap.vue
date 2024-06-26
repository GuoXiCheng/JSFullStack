<template>
    <div id="container">
        <svg id="markmap" style="width: 100%; height: 90vh"></svg>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { Transformer } from 'markmap-lib';
import { Markmap, loadCSS, loadJS } from 'markmap-view';
import { Toolbar } from 'markmap-toolbar';

export default {
    name: 'MarkMap',
    props: {
        markdown: {
            type: String,
            required: true,
        }
    },
    setup(props) {

        let markmapInstance = null;
        function createOrUpdateMarkmap() {
            const transformer = new Transformer();
            const { root, features } = transformer.transform(props.markdown);

            localStorage.setItem('markmap-state-raw', JSON.stringify(root));

            const assets = transformer.getAssets();

            if (assets.styles) loadCSS(assets.styles);
            if (assets.scripts) loadJS(assets.scripts, { getMarkmap: () => window.markmap });

            if (markmapInstance) {
                markmapInstance.destroy();
            }

            const selected = localStorage.getItem('markmap-state-selected');
            markmapInstance = Markmap.create('#markmap', null, selected ? JSON.parse(selected) : root);

            return markmapInstance;
        }

        onMounted(() => {
            const markmap = createOrUpdateMarkmap();
            addToolbar(markmap);
        });

        // 添加Toolbar
        function addToolbar(markmap) {
            const raw = JSON.parse(localStorage.getItem('markmap-state-raw'));

            Toolbar.defaultItems = [
                {
                    title: 'JavaScript',
                    data: raw.children[0],
                }, {
                    title: 'NodeJS',
                    data: raw.children[2].children[0],
                }, {
                    title: '云原生',
                    data: raw.children[3],
                }, {
                    title: '方法论',
                    data: raw.children[4],
                }, {
                    title: 'React',
                    data: raw.children[1].children[1],
                }, {
                    title: 'Vue',
                    data: raw.children[1].children[0],
                }, {
                    title: 'All',
                    data: raw,
                }
            ].map(item => createToolbarItem(item.title, item.data));

            const toolbar = Toolbar.create(markmap);
            toolbar.setBrand(false)

            toolbar.el.style.position = 'absolute';
            toolbar.el.style.bottom = '0.5rem';
            toolbar.el.style.right = '0.5rem';
            document.getElementById('container').appendChild(toolbar.el);
        }

        function createToolbarItem(title, data) {
            const div = document.createElement('div');
            div.innerHTML = title;
            div.setAttribute('style', 'cursor: pointer;text-align: center;');
            return {
                content: div,
                title,
                onClick: () => {
                    localStorage.setItem('markmap-state-selected', JSON.stringify(data));
                    createOrUpdateMarkmap();
                }
            }
        }
    }
};
</script>