interface NavItem {
  text: string;
  link?: string;
  items?: NavItem[];
}

interface Sidebar {
  [path: string]: NavItem[];
}

export function convertToMarkdown(nav: NavItem[], sidebar: Sidebar) {
  const copyNav = JSON.parse(JSON.stringify(nav)) as NavItem[];
  const copySidebar = JSON.parse(JSON.stringify(sidebar)) as Sidebar;

  const navPart = copyNav.slice(1, -1);

  const jsonData = navPart.map((navItem) => {
    const items = navItem.items as NavItem[];
    const newItems = items.map((it) => {
      if (!it.link) return it;
      return {
        ...it,
        link: undefined,
        items: copySidebar["/" + it.link.split("/").slice(1, 3).join("/")],
      };
    });
    return { ...navItem, items: newItems };
  });

  const formattedText = jsonData
    .map((item) => formatItem(item).join("\n"))
    .join("\n");

  return "# JavaScript 全栈知识体系" + "\n" + formattedText;
}

// 定义一个函数来格式化链接
function formatLink(text: string, link: string) {
  return `[${text}](${link})`;
}

// 递归函数来处理每个项目
function formatItem(item: NavItem, depth = 0) {
  let result: any = [];
  let prefix = "  ".repeat(depth); // 根据深度来增加缩进
  let text = item.text;

  // 如果有链接，就格式化为 Markdown 链接
  if (item.link) {
    text = formatLink(text, item.link);
  }

  // 添加当前项
  if (depth !== 2) result.push(`${prefix}- ${text}`);

  // 如果有子项，递归处理每个子项
  if (item.items) {
    item.items.forEach((subItem) => {
      result.push(...formatItem(subItem, depth + 1));
    });
  }

  return result;
}
