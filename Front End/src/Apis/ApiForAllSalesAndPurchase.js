import axios from "axios"

export const getAllSalesAndPurchaseInvoiceAccountsValuesController = id => (
	axios.post(`http://localhost:3001/all-sales-purchase-accounts`)
		.then(res => res.data, )
)
export const getAllSalesAndPurchaseInvoiceAccountsSpecificValuesController = id => (
	console.log(id),
	axios.post(`http://localhost:3001/all-sales-purchase-accounts/specific/${id}`)
		.then(res => res.data, )
)

export const createAllSalesAndPurchaseInvoiceAccountsValues = (todo) => fetch("http://localhost:3001/all-sales-purchase-accounts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
