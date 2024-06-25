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
        onMounted(() => {
            const transformer = new Transformer();
            const { root, features } = transformer.transform(props.markdown);
            const assets = transformer.getAssets();

            if (assets.styles) loadCSS(assets.styles);
            if (assets.scripts) loadJS(assets.scripts, { getMarkmap: () => window.markmap });

            const hashedRoot = "markmap-state-" + simpleHash(JSON.stringify(root));
            const savedState = localStorage.getItem(hashedRoot);

            let markmapState;
            if (savedState == null) { // 当前思维导图没有保存过状态
                markmapState = root;
                clearLocalStorageWithPrefix("markmap-state-");
            } else { // 当前思维导图保存过状态
                markmapState = JSON.parse(savedState);
            }

            const markmap = Markmap.create('#markmap', null, markmapState);

            addToolbar(markmap);

            for (const item of document.getElementsByTagName('circle')) {
                item.addEventListener('click', () => {
                    localStorage.setItem(hashedRoot, JSON.stringify(markmap.state.data));
                });
            }
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
            const js = document.createElement('div');
            js.innerHTML = 'JS';
            js.setAttribute('style', 'cursor: pointer;');
            Toolbar.defaultItems = [{
                content: js,
                onClick: () => {

                }
            }];
            const toolbar = Toolbar.create(markmap);
            toolbar.setBrand(false)

            toolbar.el.style.position = 'absolute';
            toolbar.el.style.bottom = '0.5rem';
            toolbar.el.style.right = '0.5rem';
            document.getElementById('container').appendChild(toolbar.el);
        }
    }
};
</script>