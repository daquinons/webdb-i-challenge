# Database Queries

## Find all customers with postal code 1010
SELECT * FROM customers
WHERE postalCode = 1010;

## Find the phone number for the supplier with the id 11
SELECT phoneNumber FROM supplier
WHERE id=11;

## List first 10 orders ever places, descending by the order date
SELECT place FROM orders
ORDER BY orderDate desc
LIMIT 10;

## Find all customers that live in London, Madrid, or Brazil
SELECT * FROM customers
WHERE city = "London" OR city = "Madrid" OR city = "Brazil";

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT into customers(name, contactName, address, city, postalCode, country)
VALUES ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth");

## Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE customers
SET postalCode = "11122"
WHERE contactName = "Bilbo Baggins";

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT(DISTINCT city) as countDifferentCities FROM customers;

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM suppliers WHERE length(SupplierName) > 20;
