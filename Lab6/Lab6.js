document.addEventListener("DOMContentLoaded", function () {
    const limit = 10;

    function fetchData(limit) {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                const postContainer = document.getElementById("post-container");
                postContainer.innerHTML = "";

                data.forEach((post) => {
                    const card = document.createElement("div");
                    card.classList.add("col-lg-4", "col-md-6", "mb-4");

                    card.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.body}</p>
                            </div>
                        </div>
                    `;

                    postContainer.appendChild(card);
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    fetchData(limit);
});
