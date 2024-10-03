const Chart = require('chart.js');

const salesData = [100, 200, 300, 400, 500, 600, 700, 800, 900, 10000, 11000, 12000];
const numCustomers = 1000;
const topSales = [
    {product: 'Product A', quantity:100},
    {product: 'Product B', quantity:200},
    {product: 'Product C', quantity:300},
];

module.exports = {salesData, numCustomers, topSales};