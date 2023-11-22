const fs = require('fs')

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err)
        console.log(err);
    else
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (err)
                console.log(err);
            if (data) {
                console.log(data);
                fs.appendFile('employees.json', ',\n{"name": "Employee 2 Name", "salary": 2000}', 'utf8', (err) => {
                    if (err)
                        console.log(err)
                    else {
                        console.log('Veri Eklendi')
                        fs.unlink('employees.json', (err) => {
                            if (err)
                                console.log(err)
                            else
                                console.log('Dosya Başarılı Bir Şekilde Silindi.')
                        })
                    }
                })
            }
        })
})
