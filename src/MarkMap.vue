<template>
    <div id="container">
        <svg id="markmap" style="width: 100%; height: 90vh"></svg>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Transformer } from 'markmap-lib';
import { Markmap, loadCSS, loadJS } from 'markmap-view';
import { Toolbar } from 'markmap-toolbar';

let markmapInstance: Markmap | null = null;

const props = defineProps({
    markdown: String
})


onMounted(() => {
    const markmapFormat = convertMarkdown(props.markdown);
    localStorage.setItem('markmap-state-raw', JSON.stringify(markmapFormat));
    createOrUpdateMarkmap(markmapFormat);
    addToolbar(markmapInstance);
});

const createOrUpdateMarkmap = (markmapFormat) => {
    if (markmapInstance) {
        markmapInstance.destroy();
    }

    markmapInstance = Markmap.create('#markmap', undefined, markmapFormat);

    // 滚动到当前节点
    document.querySelectorAll(".markmap-node").forEach((node) => {
        node.addEventListener('click', (event) => {
            setTimeout(() => {
                const activeNode = document.querySelector('.is-active');
                if (activeNode) {
                    activeNode.scrollIntoView({ behavior: 'auto', block: 'center' });
                }
            }, 600)
        });
    });
}

const convertMarkdown = (markdown) => {
    const transformer = new Transformer();
    const { root, features } = transformer.transform(markdown);

    const assets = transformer.getAssets();

    if (assets.styles) loadCSS(assets.styles);
    if (assets.scripts) loadJS(assets.scripts, { getMarkmap: () => (window as any).markmap });

    return root;
}

const addToolbar = (markmap) => {
    Toolbar.defaultItems = [{
        content: createElementImg('Docker'),
        title: 'Docker',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw).children[3].children[0]);
        }
    }, {
        content: createElementImg('React'),
        title: 'React',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw).children[1].children[1]);
        }
    }, {
        content: createElementImg('NodeJS'),
        title: 'NodeJS',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw).children[2].children[0]);
        }
    }, {
        content: createElementImg('JavaScript'),
        title: 'JavaScript',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw).children[0]);
        }
    }, {
        content: createElementImg('Vue'),
        title: 'Vue',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw).children[1].children[0]);
        }
    }, {
        content: createElementImg('All'),
        title: 'All',
        onClick: () => {
            const markmapRaw = localStorage.getItem('markmap-state-raw') as string;
            createOrUpdateMarkmap(JSON.parse(markmapRaw));
        }
    }];

    const toolbar = Toolbar.create(markmap);
    toolbar.setBrand(false)

    toolbar.el.style.position = 'absolute';
    toolbar.el.style.bottom = '0.5rem';
    toolbar.el.style.right = '0.5rem';
    document.getElementById('container')?.appendChild(toolbar.el);
}

const createElementImg = (filename) => {
    const img = document.createElement('img');
    img.src = `/images/svg/${filename}.svg`;
    img.style.width = '1.5rem';
    img.style.height = '1.5rem';
    img.style.cursor = 'pointer';
    return img;
}
</script>

<!-- <script>
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
</script> -->