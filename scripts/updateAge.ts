import fs from 'fs';
import path from 'path';

const calculateAge = (): number => {
    return new Date(Date.now() - new Date("2006-11-08").getTime()).getFullYear() - 1970;
};

const updateReadme = (newAge: number) => {
    const readmePath = path.join(__dirname, '../README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    const ageRegex = /\b\d+(?=-year-old)\b/;
    readmeContent = readmeContent.replace(ageRegex, `${newAge}`);

    fs.writeFileSync(readmePath, readmeContent, 'utf8');
};

const main = () => {
    updateReadme(calculateAge());
};

main();
