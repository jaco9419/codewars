class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
    console.log('----------LinkedList---------')
  }

  appendAtStart(data) {
    const node = new Node(data, this.head)
    this.head = node
    this.size++
    console.log(`Appended ${data} at start`)
  }

  appendAtEnd(data) {
    this.size++
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      console.log(`Appended ${data} at end (first element)`)
      return
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = node
    console.log(`Appended ${data} at end`)
  }

  appendAt(data, index) {
    if (index < 0 || index > this.size) {
      console.error(`Cannot append ${data} at ${index}`)
      return
    }

    if (!this.head) {
      this.appendAtStart(data)
      return
    }

    const node = new Node(data)
    let current = this.head
    let previous
    let count = 0

    while (count < index) {
      previous = current
      current = current.next
      count++
    }

    node.next = current
    previous.next = node

    this.size++
    console.log(`Appended ${data} at ${index}`)
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      console.error(`Cannot delete data at ${index}`)
      return
    }

    let current = this.head
    let previous
    let count = 0
    this.size--
    
    if (index === 0) {
      this.head = current.next
      console.log(`Deleted ${current.data} at ${index}`)
      return
    }
    
    while (count < index && current.next) {
      previous = current
      current = current.next
      count++
    }
    
		console.log(`Deleted ${current.data} at ${index}`)
    previous.next = current.next
    
  }
  
  logDataAndSize() {
  	let current = this.head
    const data = []
    
    while (current.next) {
    	data.push(current.data)
    	current = current.next
    }
    
    data.push(current.data)
    
  	const logger = {
    	size: this.size,
      data
    }
    
    console.log(logger)
  }
}

const ll = new LinkedList()
ll.appendAtStart("apple")
ll.appendAtStart(1)
ll.appendAtEnd(2)
ll.appendAtEnd('end')
ll.appendAt('banana', 1)
ll.appendAt('pear', 11)
ll.logDataAndSize()
ll.deleteAt(0)
ll.deleteAt(2)
ll.logDataAndSize()
ll.deleteAt(ll.size - 1)
ll.logDataAndSize()
