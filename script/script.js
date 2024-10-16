document
    .querySelector('#escortCheckBox')
    .addEventListener('change', changeDiv);

document
    .querySelector('#buttonSubmit')
    .addEventListener('click', submitUsers)
    
function changeDiv(){
    const escortDiv = document.querySelector('#escortInputs');
    escortDiv.style.display = escortDiv.style.display === 'flex' ? 'none' : 'flex';
};

async function submitUsers(){
    const nameUsers = document.querySelector('#nameInput').value.trim();
    const escortNum = Number(document.querySelector('#escortValue').value);
    if(nameUsers === ''){
        alert('Preencha o campo corretamente!!');
        nameUsers.focus()
    }

    try {
        const result = await fetch("https://parseapi.back4app.com/classes/NameUsersBirthday",{
            method: "POST",
            headers: 
            {"X-Parse-Application-Id": "HDcEEBoBkXkzbC3C4wElSdvEjfddwLpvEdy8i59r",
            "X-Parse-REST-API-Key": "ViO2ZqLDjvbKaDuMkADaylzVnqcpEMJkCWvXUgkp",
            "Content-Type": "application/json"},
            body: JSON.stringify({
                name: nameUsers,
                escort: escortNum
            })
        })
        if(!result.ok){
            alert(`erro no sistema ${result.status}`);
            throw new Error(`erro no sistema ${result.status}`);
        }
        nameUsers.value = '';
        nameUsers.focus();
    } catch (error) {
        console.error('Erro durante a requisição:', error);
    }
}