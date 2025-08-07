import { expect, test } from '@playwright/test';

const people = ['Alice', 'Bob'];

for(const name of people ) {
    test(`Testing ${name}`, async () => {
        console.log(name);
    });
}

const map1 = new Map();
map1.set(2, 20);
map1.set(3, 30);

for (const [key, value] of map1) {
    test(`Testing 10x function with ${key} and ${value}`, async () => {
        expect(key * 10).toEqual(value);
    });
}

const inputs = [
    ["a", 1, 2],
    ["b", 3, 4],
    ["c", 5, 6]
];

for (const [a, b, c] of inputs) {
    test(`testing with ${a} ${b} ${c}`, async () => {
        console.log(a, b, c);
    });
}

const inpits2 = [
    ["10", "6 months", "After 6 Months you will earn $0.20 on your deposit"],
    ["20", "1 Year", "After 1 Year you will earn $1.00 on your deposit"]
];

for (const [sum, period, result] of inpits2) {
    test(`testing with ${sum} ${period} ${result}`, async ({ page }) => {

        await page.goto('/savings.html');
        await page.getByTestId('deposit').fill(sum);
        await page.getByTestId('period').selectOption(period);

        await expect(page.getByTestId('result')).toHaveText(result);
    });
}