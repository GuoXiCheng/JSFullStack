import { DefaultTheme } from "vitepress";

export function sidebarJS(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'ECMAScript',
            link: '/javascript/ecma-script/index',
            items: [
                {
                    text: '基本引用类型',
                    base: '/javascript/ecma-script/basic-reference',
                    items: [
                        { text: 'Date', link: '/date' },
                        { text: '正则表达式', link: '/reg-exp' }
                    ]
                }, {
                    text: '集合引用类型',
                    base: '/javascript/ecma-script/collection-reference',
                    items: [
                        { text: 'Array', link: '/array' },
                        { text: 'Map', link: '/map' },
                        { text: 'Set', link: '/set' }
                    ]
                }, {
                    text: '迭代器',
                    link: '/javascript/ecma-script/iterator'
                }, {
                    text: '生成器',
                    link: '/javascript/ecma-script/generator'
                }, {
                    text: 'JSON',
                    link: '/javascript/ecma-script/json'
                }
            ]
        }, {
            text: 'BOM',
            base: '/javascript/bom',
            items: [
                { text: 'screen', link: '/screen' }
            ]
        }
    ]
}