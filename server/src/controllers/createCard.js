const agent = require('superagent')

const { TRELLO_API } = require('../../../config')

const createCard = async ({
  key,
  token,
  name,
  idList,
  description,
  due,
  members
}) => {
  const card = await agent
    .post(`${TRELLO_API}/cards?key=${key}&token=${token}`)
    .send({
      name,
      idList,
      description,
      due,
      members
    })
    .set('accept', 'application/json; charset=utf-8')

    return card
}


module.exports = {
  createCard
}
