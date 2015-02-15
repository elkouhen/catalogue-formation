{before, after} = require 'hooks'
{assert} = require 'chai'

before 'GET /formations -> 200', (test, done) ->
  test.request.query =
    categorie: 'tech-java-ee'
  done()

after 'GET /formations -> 200', (test, done) ->
  assert.lengthOf test.response.body, 3
  done()