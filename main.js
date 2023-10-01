const fs = require('node:fs');

fs.readFile('data.json', (err, data) => {
    if (err === null) {
        const stringData = data.toString();
        console.log(stringData);
        
        const json = JSON.parse(stringData);
        let output = '';
    
        for (let item of json) {
            output += `${item.exchangedate}:${item.rate}\n`;
        }
    
        fs.writeFile('output.txt', output, (err) => {
            if (err === null) {
                console.log('Данні успішно записанні у файл output.txt');
            } else {
                console.error(err);
            }
        });
        
    } else {
        console.error(err);
    }
});
