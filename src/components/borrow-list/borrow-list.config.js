module.exports = {
  content: '借入',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Account': false,
    'BM': false,
    'Btn': false,
    'Check': false,
    'Citys': false,
    'Error': false,
    'Hasten': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': 1,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': `'http://iph.href.lu/750x150'`,
    'inputs': false,
    'keyboard': false,
    'modal': false,
    'modals': false,
    'nav': `{
        content: ['当前', '已放款', '已逾期', '已还清', '已失效'],
        active: ''
      }`,
    'pay-password': false,
    'pull-refresh': 1,
    'receipt': `[]`,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借入'
      }`,
    'without': 1,
    'work-card': false
  }
}
