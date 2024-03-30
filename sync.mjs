import { execSync } from "child_process";
import fs from "fs";

(async () => {
    // 创建projects文件夹
    const projectsDir = './projects';
    if (!fs.existsSync(projectsDir)) {
        fs.mkdirSync(projectsDir);
    }
    
    // 在projects目录中克隆仓库
    execSync('git clone git@github.com:GuoXiCheng/javascript-sandbox.git', { cwd: projectsDir });
})();
