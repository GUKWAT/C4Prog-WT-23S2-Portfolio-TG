function performAPICall() {
    inputValue = 3; 

    fetch('https://api.api-ninjas.com/v1/jokes?limit=' + inputValue, {
        headers: {
            'X-Api-Key': 'Bu2AU+jw2qiBRZYsw8y6+w==uXMl98ISKhHxgX4N'
        }
    })
    .then(response => response.json())
    .then(data => {
        const responseContainer = document.getElementById('responseContainer');
        responseContainer.innerHTML = "<p>API Response:</p>";

        if (Array.isArray(data) && data.length > 0) {
            data.forEach(joke => {
                responseContainer.innerHTML += `<p>${joke.joke}</p>`;
            });
        } else {
            responseContainer.innerHTML += "<p>No jokes found</p>";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const responseContainer = document.getElementById('responseContainer');
        responseContainer.innerHTML = `<p>Error occurred: ${error.message}</p>`;
    });
}
