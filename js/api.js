// URL of the Django API endpoint
const mainSponsorUrl = 'http://127.0.0.1:8000/mainsponsor/';

// Use fetch to get the data
fetch(mainSponsorUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.json();
    })
    .then(data => {
        const responseDiv = document.querySelector('.mainsponsor');

        if (data && data.length > 0) {
            // Loop through all items and append their images
            data.forEach(item => {
            responseDiv.innerHTML += `
                <img src="${item.img_link}" class="img-fluid" alt="Sponsor Image"">
            `;
            });
        } else {
            responseDiv.innerHTML += '<p>No sponsors available at the moment.</p>';
        }
        })
        .catch(error => {
        console.error('There was an error fetching the data:', error);
    });

// URL of the Django API endpoint
const assSponsorUrl = 'http://localhost:8000/associate-sponsors/';

// Use fetch to get the data
fetch(assSponsorUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.json();
    })
    .then(data => {
        const responseDiv = document.querySelector('.asso-sponsors');

        if (data && data.length > 0) {
            // Loop through all items and append their images
            data.forEach(item => {
            responseDiv.innerHTML += `
                <div class="col-lg-3 col-md-2 col-xs-3">
                <div class="sponsor-logo">
                    <img src="${item.img_link}" class="img-fluid" alt="">
                </div>
                </div>
            `;
            });
        } else {
            responseDiv.innerHTML += `
            <div class="col-lg-3 col-md-2 col-xs-3">
            <div class="sponsor-logo">
                <p>No sponsors available at the moment.</p>
            </div>
            </div>
            `;
        }
        })
        .catch(error => {
        console.error('There was an error fetching the data:', error);
    });

// URL of the Django API endpoint
const scoreboardUrl = 'http://localhost:8000/scoreboard/';

// Use fetch to get the data
fetch(scoreboardUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data)
        // Display the response in the HTML
            const responseDiv = document.querySelector('.scoreboard');
            if (data && data.length > 0) {
                // Loop through all items and append their images
                data.forEach(item => {
                responseDiv.innerHTML += `
                    <div class="col-lg-3 col-md-2 col-xs-3">
                    <div class="sponsor-logo">
                        <img src="${item.img_link}" class="img-fluid" alt="">
                    </div>
                    </div>
                `;
                });
            } else {
                responseDiv.innerHTML += `
                <div class="col-lg-3 col-md-2 col-xs-3">
                <div class="sponsor-logo">
                    <p>No sponsors available at the moment.</p>
                </div>
                </div>`;
            }
        })
    .catch(error => {
        console.error('There was an error fetching the data:', error);
    }); 

// URL of the Django API endpoint
const winnersUrl = 'http://localhost:8000/winners/';

// Use fetch to get the data
fetch(winnersUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data)
        // Display the response in the HTML
            const responseDiv = document.querySelector('.winners');
            if (data && data.length > 0) {
                // Loop through all items and append their images
                data.forEach(item => {
                responseDiv.innerHTML += `
                    <div class="col-lg-3 col-md-2 col-xs-3">
                    <div class="sponsor-logo">
                        <img src="${item.img_link}" class="img-fluid" alt="">
                    </div>
                    </div>
                `;
                });
            } else {
                responseDiv.innerHTML += `
                <div class="col-lg-3 col-md-2 col-xs-3">
                <div class="sponsor-logo">
                    <p>No sponsors available at the moment.</p>
                </div>
                </div>`;
            }
        })
    .catch(error => {
        console.error('There was an error fetching the data:', error);
    });