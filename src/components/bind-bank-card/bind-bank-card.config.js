module.exports = {
  content: '绑定银行卡',
  router: true,
  vuex: {
    mutations: {
      saveOrigin: true,
      savePurpose: false,
      saveRoute: true,
      saveBankCard: false,
      saveToken: false,
      savePhone: false,
      saveName: false,
      savePublishObject: false,
      clearPublishObject: false
    },
    state: false
  },
  class: {
    'Check': true,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Storage': true,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': `{
        default: [{
          type: 'primary',
          text: '确认绑定'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': 1,
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '绑定银行卡'
      }`,
    'work-card': false
  }
}
