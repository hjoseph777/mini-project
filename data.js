// FAKE API data
var mockData = {
    userProfile: { id: 1, name: "Harry Joseph", email: "harry@example.com" },
    posts: [
        { id: 1, title: "HI everyone", content: "gOOD DAY" }, { id: 2, title: "Hello World", content: "This is my first post." },
        { id: 2, title: " iAM AN EXPERT IN PROGRAMMING JavaScript", content: "LOOKING FORWARD CHRISTMAS 2024" }, { id: 2, title: "Learning JavaScript", content: "Promises are fun!" }
    ],
    comments: [
        { id: 1, postId: 1, comment: "1 STAR" }, { id: 2, postId: 1, comment: "Nice post!" },
        { id: 2, postId: 2, comment: "gOING TO BED TOMORROW" }, { id: 2, postId: 2, comment: "NO MORE COMMENTS" }, { id: 2, postId: 2, comment: "Keep learning!" }, { id: 2, postId: 2, comment: "Keep learning!" }
    ]
};


function simulateError() {
    var errorChance = Math.random();
    if (errorChance < 0.3) {
        return true;
    } else {
        return false;
    }
}