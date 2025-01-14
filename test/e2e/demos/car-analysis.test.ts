import {
  expectProperty,
  expectedElement,
  expectedFramedElement,
  getServerFunctions,
} from '../common';

const [startServer, stopServer, expectPage] = getServerFunctions(8801);

beforeAll(startServer);
afterAll(stopServer);

test('car-analysis', async () => {
  await expectPage(`/demos/car-analysis`);
  await expectedElement('h1', 'Car Analysis');
  await expectedFramedElement('aside', 'Dimensions');
  await expectedFramedElement('svg text', 'Chrysler');
  await expectedFramedElement('svg text', '200');
  await expectedFramedElement('svg text', 'Opel Horsepower: 81');

  await (await expectedFramedElement('option.Year', 'Year')).click();
  await expectedFramedElement('svg text', '1973');
  await expectedFramedElement('svg text', '200');
  await expectedFramedElement('svg text', '1972 Horsepower: 120.18');

  await (await expectedFramedElement('option.Cylinders', 'Cylinders')).click();
  await expectedFramedElement('svg text', '1980');
  await expectedFramedElement('svg text', '7');
  await expectedFramedElement('svg text', '1972 Cylinders: 5.82');

  await (await expectedFramedElement('option.Minimum', 'Minimum')).click();
  await expectedFramedElement('svg text', '1973');
  await expectedFramedElement('svg text', '4');
  await expectedFramedElement('svg text', '1972 Cylinders: 3');

  await (await expectedFramedElement('label', 'Show table')).click();
  await (await expectedFramedElement('option.Weight', 'Weight')).click();
  await expectedFramedElement('main', '12 records');
  await expectedFramedElement('tr:nth-child(2) td:nth-child(1)', '1973');
  await expectedFramedElement('tr:nth-child(2) td:nth-child(2)', '1867');

  await (await expectedFramedElement('th.Year', 'Year')).click();
  await expectedFramedElement('tr:nth-child(2) td:nth-child(1)', '1970');
  await expectedFramedElement('tr:nth-child(2) td:nth-child(2)', '1835');

  await (await expectedFramedElement('th.Year', '↑ Year')).click();
  await expectedFramedElement('tr:nth-child(2) td:nth-child(1)', '1982');
  await expectedFramedElement('tr:nth-child(2) td:nth-child(2)', '1755');

  await expectedFramedElement('main', '1 to 10');
  await expectProperty(
    await expectedFramedElement('button.prev'),
    'className',
    'prev disabled',
  );
  await expectProperty(
    await expectedFramedElement('button.next'),
    'className',
    'next',
  );
  await (await expectedFramedElement('button.next')).click();
  await expectedFramedElement('main', '11 to 12');
  await expectProperty(
    await expectedFramedElement('button.prev'),
    'className',
    'prev',
  );
  await expectProperty(
    await expectedFramedElement('button.next'),
    'className',
    'next disabled',
  );
  await expectedFramedElement('tr:nth-child(2) td:nth-child(1)', '1971');
  await expectedFramedElement('tr:nth-child(2) td:nth-child(2)', '1613');
});
