document.querySelector(".btn").addEventListener('click', () => {
    let innome = document.querySelector(".innome");
    let nome = String(innome.value)
    let indata = document.querySelector(".indata");
    let data = String(indata.value)
    let innota1 = document.querySelector(".innota1");
    let nota1 = Number(innota1.value)
    let innota2 = document.querySelector(".innota2");
    let nota2 = Number(innota2.value)
    
    let media = (nota1 + nota2) / 2;
    let users = [];
    
    users.push({
        nome,
        data,
        nota1,
        nota2,
        media
    })


    users.map((user) => {
        const table = document.querySelector('table')
        const tr = document.createElement('tr')
        const tdnome = document.createElement('td')
        const textnome = document.createTextNode(user.nome)

        const tddata = document.createElement('td')
        const textdata = document.createTextNode(user.data)

        const tdnota1 = document.createElement('td')
        const textnota1 = document.createTextNode(user.nota1)

        const tdnota2 = document.createElement('td')
        const textnota2 = document.createTextNode(user.nota2)

        const tdmedia = document.createElement('td')
        const textmedia = document.createTextNode(user.media)

        tdnome.appendChild(textnome);
        tddata.appendChild(textdata);
        tdnota1.appendChild(textnota1);
        tdnota2.appendChild(textnota2);
        tdmedia.appendChild(textmedia)
        
        tr.appendChild(tdnome);
        tr.appendChild(tddata);
        tr.appendChild(tdnota1);
        tr.appendChild(tdnota2);
        tr.appendChild(tdmedia)
        table.appendChild(tr);

        innome.value = ' ';
        indata.value = ' ';
        innota1.value = ' ';
        innota2.value = ' ';

    })

    console.log(users)
})

