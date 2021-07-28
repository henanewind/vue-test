const getters = {
  count: state => state.person.count,
  getStateCount: state => state.person.count + 1,
  getCount2: state => state.person.count + 3,
  getCount3: state => state.person.count + 4,
  getList: state => state.appha.contents,
  getFaults: state => state.appha.question[0].faults
}
export default getters
