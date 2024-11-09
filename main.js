// Function to fetch user profile
function fetchUserProfile() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (simulateError()) {
                reject(new Error("Failed to fetch user profile."));
            } else {
                resolve(mockData.userProfile);
            }
        }, 1000);
    });
}

// Function to fetch user posts
function fetchPosts() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (simulateError()) {
                reject(new Error("Failed to fetch posts."));
            } else {
                resolve(mockData.posts);
            }
        }, 2000);
    });
}

// Function to fetch comments
function fetchComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (simulateError()) {
                reject(new Error("Failed to fetch comments."));
            } else {
                resolve(mockData.comments);
            }
        }, 3000);
    });
}

// Main function to fetch all data
async function getUserContent() {
    try {
        document.getElementById('output').innerHTML = "Fetching user profile...";
        var userProfile = await fetchUserProfile();
        document.getElementById('output').innerHTML += "<br>User profile retrieved: " + JSON.stringify(userProfile);

        document.getElementById('output').innerHTML += "<br>Fetching posts...";
        var posts = await fetchPosts();
        document.getElementById('output').innerHTML += "<br>Posts retrieved: " + JSON.stringify(posts);

        document.getElementById('output').innerHTML += "<br>Fetching comments...";
        var comments = await fetchComments();
        document.getElementById('output').innerHTML += "<br>Comments retrieved: " + JSON.stringify(comments);

        console.log("All data fetched successfully!");
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('output').innerHTML += "<br>Error: " + error.message;
    }
}

// Event listeners for buttons
document.getElementById('fetchData').addEventListener('click', getUserContent);
document.getElementById('clearData').addEventListener('click', function() {
    document.getElementById('output').innerHTML = '';
});