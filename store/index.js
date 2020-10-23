export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ชื่อ',
      align: 'start',
      sortable: false,
      value: 'Firstname',
    },
    { text: 'นามสกุล', value: 'Lastname' },
    { text: 'ตำแหน่ง', value: 'position' },
    { text: 'ที่อยู่', value: 'loc' },
    { text: 'หมู่ที่/ซอย', value: 'm' },
    { text: 'ถนน', value: 's' },
    { text: 'ตำบล/แขนง', value: 'to' },
    { text: 'อำเภอ/เขต', value: 'o' },
    { text: 'จังหวัด', value: 'ch' },
    { text: 'เบอร์โทร', value: 'call' },
    { text: 'E-mail', value: 'mail' },
    { text: 'ระดับการศึกษา', value: 'row' },
  ],
})
export const mutations = {
  input(
    state,
    { Firstname, Lastname, position, loc, m, s, to, o, ch, call, mail, row }
  ) {
    state.data.push({
      Firstname,
      Lastname,
      position,
      loc,
      m,
      s,
      to,
      o,
      ch,
      call,
      mail,
      row,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
