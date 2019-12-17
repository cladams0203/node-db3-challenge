-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT productName, CategoryId FROM Product;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id, shipper.companyName FROM [order]
JOIN shipper ON [order].shipVia = shipper.id
WHERE orderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.productName, orderDetail.quantity FROM orderDetail
JOIN product ON orderDetail.productId =  product.id
WHERE orderDetail.orderId = 10251;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT orderDetail.orderId, customer.companyName, employee.lastName FROM [order]
JOIN orderDetail ON [order].id = orderDetail.orderID
JOIN customer ON [order].customerId = customer.id
Join employee ON [order].employeeId = employee.id;