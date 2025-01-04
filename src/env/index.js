const envList = {
  dev: {
    baseUrl: 'http://localhost:8080/api/v1'
  },
  test: {
    baseUrl: 'http://localhost:8080/api/v1'
  },
  prod: {
    baseUrl: 'http://localhost:8080/api/v1'
  }
}

let currentEnv = 'dev'

const params = {
  'dev.com': 'dev',
  'test.com': 'test',
  'prod.com': 'prod'
}

currentEnv = params[window.location.hostname] || 'dev'

export default envList[currentEnv]
