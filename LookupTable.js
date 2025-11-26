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


console.log(JSON.stringify(userWithPost));