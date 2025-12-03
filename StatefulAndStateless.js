const abc = (value) => {
    const count = 0;
    count + value;
    return value

}
// console.log(abc(5))
// console.log(abc(2))
// console.log(abc(3))


class counter {
    constructor(count) {
        this.count = count;
    }
    add(amount) {
        this.count = this.count + amount;
    }
    print() {
        console.log(this.count)
    }
}


const counter1 = new counter(0);
// counter1.add(2)
// counter1.add(5)
// counter1.print()


class stack {
    constructor() {
        this.elemrnt = [];
    };

    push(value) {
        return this.elemrnt.push(value);
    };

    prop() {
        if(this.isChack()){
            return null
        }
        return this.elemrnt.pop();;
    }
    peek() {

        if(this.isChack()){
            return undefined
        }

        return this.elemrnt.length - 1;
    }
    isChack() {
        return this.elemrnt.length === 0
    }

    print() {
        console.log(this.elemrnt)
    }
}

const Stack = new stack();

Stack.push(6)
Stack.push(2)
Stack.push(3)
Stack.prop()
Stack.prop()
Stack.prop()
Stack.prop()
Stack.prop()
// Stack.peek()
Stack.print()
console.log(Stack.peek())