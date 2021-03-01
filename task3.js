class Node {
  constructor(value){
    this.val = value
    this.next = null
  }
}

let n1 = new Node(2)
let n2 = new Node(4)
let n3 = new Node(3)
n1.next = n2
n2.next = n3

let n4 = new Node(5)
let n5 = new Node(6)
let n6 = new Node(4)
n4.next = n5
n5.next = n6

const parseLinkListToArray = (headLinkList) => {
  let current = headLinkList
  let stack = []
  while (current) {
    stack = [...stack, current.val]
    current = current.next
  }
  return stack
}

const transformArrayToNumber = (arrNumber = []) => {
  const stringNumber = arrNumber.reduce((prev, current) => `${prev}${current}`, "")
  return stringNumber*1
}

const convertNumberToArray = (number) => {
  const convertNumberToString = number + ""
  return convertNumberToString.split("").map(t => +t)
}

const transformArrayToLinkList = (arrNumber = []) => {
  let head
  let current
  let i = 0
  while (i <= arrNumber.length - 1) {
    const tempNode = new Node(arrNumber[i])
    if(!head){
      head = tempNode
      current = head
    }
    if(current){
      current.next = tempNode
      current = tempNode
    }
    i++
  }
  return head
}

const sumLinkedList = (l1, l2) => {
  const array1 = parseLinkListToArray(l1)
  const numberFromLink1 = transformArrayToNumber(array1.reverse())
  const array2 = parseLinkListToArray(l2)
  const numberFromLink2 = transformArrayToNumber(array2.reverse())
  const calculatedNumber = numberFromLink1 + numberFromLink2
  const arrayCalculatedNumber = convertNumberToArray(calculatedNumber)
  const resultLinkList = transformArrayToLinkList(arrayCalculatedNumber.reverse())
  return resultLinkList
}

const result = sumLinkedList(n1, n4)
console.log(result);
