const readFiles = require('../readFiles')
const testDirectoryPath = __dirname + '/../../../mock'

describe('readFile', () => {
  test('readDirectory should work as expected', async () => {
    const fileNames = await readFiles.readDirectory(testDirectoryPath)
    expect(fileNames.length).toBe(6)
  })
  test('readCSV should work as expected', async () => {
    const csvData = await readFiles.readCSV(`${testDirectoryPath}/catalogA.csv`)
    expect(csvData.length).toBe(6)
  })
  test('getCatalogLabels should work as expected', async () => {
    const fileNames = await readFiles.readDirectory(testDirectoryPath)
    const catalogLabels = await readFiles.getCatalogLabels(fileNames)
    expect(catalogLabels.length).toBe(2)
  })
  test('getCatalogsData should work as expected', async () => {
    const fileNames = await readFiles.readDirectory(testDirectoryPath)
    const catalogLabels = await readFiles.getCatalogLabels(fileNames)
    const catalogs = await readFiles.getCatalogsData(catalogLabels)
    expect(catalogs.length).toBe(2)
  })
})
