import yaml from 'js-yaml';
import fs from 'fs';

export default function getSidebar() {
    return yaml.load(fs.readFileSync('src/.vitepress/sidebar.yaml', 'utf8'));
}