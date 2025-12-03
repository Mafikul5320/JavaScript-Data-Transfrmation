class linklist {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const head = new linklist(10);

head.next = new linklist(20)
head.next.next = new linklist(30)

console.log(head)