
const inputDataTask1 = {
  users: [
    {
      id: 1,
      name: "user1",
    },
    {
      id: 2,
      name: "user2",
    },
    {
      id: 3,
      name: "user3",
    },
  ],
  messages: [
    {
      id: 1,
      text: "message1",
      userId: 1,
      receiverId: 2,
    },
    {
      id: 2,
      text: "message2",
      userId: 2,
      receiverId: 3,
    },
    {
      id: 3,
      text: "message3",
      userId: 3,
      receiverId: 1,
    },
  ],
};

const normalizeReceivedData = ({ users, messages } = { users: [], messages: []}) => {
  return messages.map(messageData => {
    const senderData = users.find(user => user.id === messageData.userId)
    const receiverData = users.find(user => user.id === messageData.receiverId)
    return {
      messageText: messageData.text,
      userFromName: senderData.name,
      userToName: receiverData.name
    }
  })
}

const result = normalizeReceivedData(inputDataTask1)
console.log("///////////");
console.log("Task1");
console.log(result);
