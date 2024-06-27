import { execSync } from "child_process";
import fs from "fs";

(async () => {
    const projectsDir = './projects';
    // 使用数组来支持多个repoURL
    const repoURLs = [
        'https://github.com/GuoXiCheng/react-sandbox.git',
        'https://github.com/GuoXiCheng/javascript-sandbox.git',
        'https://github.com/GuoXiCheng/vue-sandbox.git',
    ];

    if (!fs.existsSync(projectsDir)) {
        fs.mkdirSync(projectsDir);
    }

    repoURLs.forEach(repoURL => {
        let cloneCommand;

        if (process.env.CI) {
            // 在CI环境中
            const token = process.env.GITHUB_TOKEN; // 确保在CI环境中已设置GITHUB_TOKEN
            cloneCommand = `git clone https://${token}:x-oauth-basic@${repoURL.replace('https://', '')}`;
        } else {
            // 在本地环境中
            cloneCommand = `git clone ${repoURL}`;
        }

        // 在projects目录中克隆仓库
        execSync(cloneCommand, { cwd: projectsDir });
    });
})();

