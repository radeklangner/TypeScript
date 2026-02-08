module.exports = {
  default: {
    require: [
      'features/steps/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    // Wskazujemy folder, a nie wzorzec z gwiazdką
    paths: ['features']
  }
}