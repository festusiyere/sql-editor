export default class QueryService {
  constructor(args) {
    this.axios = args.$axios
    this.categoriesPath = '/db/categories.json'
    this.customersPath = '/db/customers.json'
    this.employeesPath = '/db/employees.json'
    this.ordersPath = '/db/orders.json'
    this.productsPath = '/db/products.json'
    this.regionsPath = '/db/regions.json'
    this.shippersPath = '/db/shippers.json'
    this.suppliersPath = '/db/suppliers.json'
  }

  getResults(query) {
    if (query.includes('categories')) {
      return this.getAllCategories()
    } else if (query.includes('customers')) {
      return this.getAllCustomers()
    } else if (query.includes('employees')) {
      return this.getAllEmployees()
    } else if (query.includes('orders')) {
      return this.getAllOrders()
    } else if (query.includes('products')) {
      return this.getAllProducts()
    } else if (query.includes('regions')) {
      return this.getAllRegions()
    } else if (query.includes('shippers')) {
      return this.getAllShippers()
    } else if (query.includes('suppliers')) {
      return this.getAllSuppliers()
    } else {
      return Promise.reject(new Error('No result found'))
    }
  }

  // Get all categories data
  getAllCategories() {
    return this.axios.get(this.categoriesPath)
  }

  // Get all customers data
  getAllCustomers() {
    return this.axios.get(this.customersPath)
  }

  // Get all employees data
  getAllEmployees() {
    return this.axios.get(this.employeesPath)
  }

  // Get all orders data
  getAllOrders() {
    return this.axios.get(this.ordersPath)
  }

  // Get all products data
  getAllProducts() {
    return this.axios.get(this.productsPath)
  }

  // Get all regions data
  getAllRegions() {
    return this.axios.get(this.regionsPath)
  }

  // Get all shippers data
  getAllShippers() {
    return this.axios.get(this.shippersPath)
  }

  // Get all suppliers data
  getAllSuppliers() {
    return this.axios.get(this.suppliersPath)
  }
}
