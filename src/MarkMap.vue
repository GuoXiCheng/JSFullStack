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

        // 简单的哈希函数
        function simpleHash(s) {
            var hash = 0;
            for (var i = 0; i < s.length; i++) {
                var character = s.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash = hash & hash; // 将hash转换为32位整数
            }
            return hash;
        }

        // 清理带有指定前缀的localStorage中的键
        function clearLocalStorageWithPrefix(prefix) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith(prefix)) {
                    localStorage.removeItem(key);
                }
            }
        }

        // 添加Toolbar
        function addToolbar(markmap) {
            const js = createElementDiv('JS');
            const all = createElementDiv('All');
            const react = createElementDiv('React');
            const vue = createElementDiv('Vue');
            Toolbar.defaultItems = [{
                content: js,
                title: 'JavaScript',
                onClick: () => {
                    const raw = JSON.parse(localStorage.getItem('markmap-state-raw'));
                    localStorage.setItem('markmap-state-selected', JSON.stringify(raw.children[0]));
                    createOrUpdateMarkmap();
                }
            }, {
                content: react,
                title: 'React',
                onClick: () => {
                    const raw = JSON.parse(localStorage.getItem('markmap-state-raw'));
                    localStorage.setItem('markmap-state-selected', JSON.stringify(raw.children[1].children[1]));
                    createOrUpdateMarkmap();
                }
            }, {
                content: vue,
                title: 'Vue',
                onClick: () => {
                    const raw = JSON.parse(localStorage.getItem('markmap-state-raw'));
                    localStorage.setItem('markmap-state-selected', JSON.stringify(raw.children[1].children[0]));
                    createOrUpdateMarkmap();
                }
            }, {
                content: all,
                title: 'All',
                onClick: () => {
                    localStorage.removeItem('markmap-state-selected');
                    createOrUpdateMarkmap();
                }
            }];
            const toolbar = Toolbar.create(markmap);
            toolbar.setBrand(false)

            toolbar.el.style.position = 'absolute';
            toolbar.el.style.bottom = '0.5rem';
            toolbar.el.style.right = '0.5rem';
            document.getElementById('container').appendChild(toolbar.el);
        }

        function createElementDiv(title) {
            const div = document.createElement('div');
            div.innerHTML = title;
            div.setAttribute('style', 'cursor: pointer;');
            return div;
        }
    }
};
</script>