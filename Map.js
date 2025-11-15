const course1 = {name : "Programming Hero Lv_1"};
const course2 = {name : "Next Level Lv_2"};

const obj ={};

obj[course1] ={courseID: "level_1"};
obj[course2] ={courseID: "level_2"};


const map = new Map();
map.set(course1, {Team: "PH Team"});
map.set(course2, {Team: "Next Level Team"});

map.forEach((value, key)=>{
    console.log(value)
});

console.log(map)