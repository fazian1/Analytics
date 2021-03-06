//getting API for showing all the data
export const getAmountSendingSalesInvoice = () => fetch("http://localhost:3001/testingAmountSend").then(res => res.json())

//getting API for inserting the data
export const createAmountSendingSalesInvoice = (todo) => fetch("http://localhost:3001/testingAmountSend/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAmountSendingSalesInvoice = (todo, id) => fetch(`http://localhost:3001/testingAmountSend/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
