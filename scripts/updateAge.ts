import fs from 'fs';
import path from 'path';

const calculateAge = (): number => {
    return new Date(Date.now() - new Date("2006-08-11").getTime()).getFullYear() - 1970;
};

const updateReadme = (newAge: number) => {
    const readmePath = path.join(__dirname, '../README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    const ageRegex = /(\{age\})/;
    readmeContent = readmeContent.replace(ageRegex, `${newAge}`);

    fs.writeFileSync(readmePath, readmeContent, 'utf8');
};

const main = () => {
    updateReadme(calculateAge());
};

main();
