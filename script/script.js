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
    const nameInput = document.querySelector('#nameInput');
    const escortNum = Number(document.querySelector('#escortValue').value.trim());
    const nameUsers = nameInput.value.trim(); 


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
        nameInput.value = "";
        nameInput.focus();
    } catch (error) {
        console.error('Erro durante a requisição:', error);
    }
}