const users = [
    { id: 1, name: "Arman Hossain", age: 24, email: "arman@example.com" },   // 2 posts
    { id: 2, name: "Sadia Ahmed", age: 21, email: "sadia@example.com" },      // 1 post
    { id: 3, name: "Mahmudul Hasan", age: 27, email: "mahmud@example.com" }, // 0 post
    { id: 4, name: "Tania Akter", age: 22, email: "tania@example.com" },      // 3 posts
    { id: 5, name: "Rakib Khan", age: 26, email: "rakib@example.com" },       // 0 post
    { id: 6, name: "Shanto Ali", age: 23, email: "shanto@example.com" }       // 1 post
];



const posts = [
    { postId: 101, userId: 1, title: "Learning JavaScript Basics", likes: 90 },
    { postId: 102, userId: 1, title: "My First Web App", likes: 150 },
    { postId: 103, userId: 2, title: "React Beginners Guide", likes: 80 },
    { postId: 104, userId: 4, title: "Digital Art Showcase", likes: 120 },
    { postId: 105, userId: 4, title: "Sketching With Pencil", likes: 70 },
    { postId: 106, userId: 4, title: "Color Theory Tips", likes: 95 },
    { postId: 107, userId: 6, title: "How I Stay Productive", likes: 60 }
];



const hasTable = posts.reduce((table, post) => {
    const { userId } = post;


    if (!table[userId]) {
        table[userId] = [];
    }
    table[userId].push(post) || [];

    return table;

}, {})

const userWithPost = users.map((user) => {
    return {
        ...user,
        post: hasTable[user.id] || [],
    }
})


// console.log(JSON.stringify(userWithPost));



const events = [
    { timestamp: "2025-11-10T08:03:00Z", type: "click" },
    { timestamp: "2025-11-10T08:12:00Z", type: "scroll" },
    { timestamp: "2025-11-10T08:28:00Z", type: "click" },
    { timestamp: "2025-11-10T08:45:00Z", type: "hover" },
    { timestamp: "2025-11-10T08:52:00Z", type: "click" },
    { timestamp: "2025-11-10T09:10:00Z", type: "scroll" },
    { timestamp: "2025-11-10T09:25:00Z", type: "click" },
    { timestamp: "2025-11-10T09:40:00Z", type: "hover" },
    { timestamp: "2025-11-10T09:55:00Z", type: "scroll" },
    { timestamp: "2025-11-10T10:05:00Z", type: "click" }
];


// ? Output
// binnedEvents = {
//     "2025-11-10T08:00:00.000Z": { "total": 3 },
//     "2025-11-10T08:30:00.000Z": { "total": 2 },
//     "2025-11-10T09:00:00.000Z": { "total": 2 },
//     "2025-11-10T09:30:00.000Z": { "total": 2 },
//     "2025-11-10T10:00:00.000Z": { "total": 1 }
// }


const binnedEvents = events.reduce((table, event) => {


    const { timestamp, type } = event;

    if (!table[timestamp]) {
        table[timestamp] = { total: 0 }
    };

    table[timestamp].total += type;

    return table;


}, {});

console.log(binnedEvents)