const { searchJoke } = require('../src/assets/scripts/searchJoke.js')
const { furySearch } = require('../src/assets/scripts/furySearch.js')

test('searchJoke', (done) => {
    expect(searchJoke().tobe())
})

test('furySearch', () => {
    expect(furySearch().tobe())
})