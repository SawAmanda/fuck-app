export default class Storage {
  static set origin (origin) {
    window.app.$store.commit('saveOrigin', origin)
  }

  static get origin () {
    return window.app.$store.state.origin
  }

  static set id (id) {
    window.app.$store.commit('saveId', id)
  }

  static get id () {
    return window.app.$store.state.id
  }

  static set oid (oid) {
    window.app.$store.commit('saveOid', oid)
  }

  static get oid () {
    return window.app.$store.state.oid
  }

  static set token (token) {
    window.app.$store.commit('saveToken', token)
  }

  static get token () {
    return window.app.$store.state.token
  }

  static set phone (phone) {
    window.app.$store.commit('savePhone', phone)
  }

  static get phone () {
    return window.app.$store.state.phone
  }

  static set name (name) {
    window.app.$store.commit('saveName', name)
  }

  static get name () {
    return window.app.$store.state.name
  }

  static set paySet (paySet) {
    window.app.$store.commit('savePaySet', paySet)
  }

  static get paySet () {
    return window.app.$store.state.paySet
  }

  static set publishObject (publishObject) {
    window.app.$store.commit('savePublishObject', publishObject)
  }

  static get publishObject () {
    return window.app.$store.state.publishObject
  }

  // static set clearPublishObject (publishObject) {
  //   window.app.$store.commit('clearPublishObject', publishObject)
  // }

  // static get clearPublishObject () {
  //   return window.app.$store.state.publishObject
  // }

  static set purpose (purpose) {
    window.app.$store.commit('savePurpose', purpose)
  }

  static get purpose () {
    return window.app.$store.state.purpose
  }

  static set opinion (opinion) {
    window.app.$store.commit('saveOpinion', opinion)
  }

  static get opinion () {
    return window.app.$store.state.opinion
  }

  static set payedMoney (payedMoney) {
    window.app.$store.commit('savePayedMoney', payedMoney)
  }

  static get payedMoney () {
    return window.app.$store.state.payedMoney
  }

  static set gapMoney (gapMoney) {
    window.app.$store.commit('saveGapMoney', gapMoney)
  }

  static get gapMoney () {
    return window.app.$store.state.gapMoney
  }

  static set borrowId (borrowId) {
    window.app.$store.commit('saveBorrowId', borrowId)
  }

  static get borrowId () {
    return window.app.$store.state.borrowId
  }

  static set borrowOrigin (borrowOrigin) {
    window.app.$store.commit('saveBorrowOrigin', borrowOrigin)
  }

  static get borrowOrigin () {
    return window.app.$store.state.borrowOrigin
  }
  // 可用余额
  static set usableMoney (usableMoney) {
    window.app.$store.commit('saveUsableMoney', usableMoney)
  }

  static get usableMoney () {
    return window.app.$store.state.usableMoney
  }
  // 失信查询结果
  static set credtiQuery (credtiQuery) {
    window.app.$store.commit('saveCreditQuery', credtiQuery)
  }

  static get credtiQuery () {
    return window.app.$store.state.credtiQuery
  }

  static set account (account) {
    window.app.$store.commit('saveAccount', account)
  }

  static get account () {
    return window.app.$store.state.account
  }
  // 投诉对象 complianPhone
  static set complianPhone (complianPhone) {
    window.app.$store.commit('saveComplianPhone', complianPhone)
  }

  static get complianPhone () {
    return window.app.$store.state.complianPhone
  }

  static get info () {
    return window.app.$store.state.info
  }

  static set error (error) {
    window.app.$store.commit('saveError', error)
  }

  static set bank (bank) {
    window.app.$store.commit('saveBank', bank)
  }

  static get bank () {
    return window.app.$store.state.bank
  }

  static set forget (forget) {
    window.app.$store.commit('saveForget', forget)
  }

  static get forget () {
    return window.app.$store.state.forget
  }

  static clear () {
    window.app.$store.commit('saveOrigin', null)
    window.app.$store.commit('saveToken', null)
    window.app.$store.commit('savePhone', null)
    window.app.$store.commit('saveName', null)
    window.app.$store.commit('saveId', null)
    window.app.$store.commit('saveOid', null)
    window.app.$store.commit('savePaySet', null)
    window.app.$store.commit('savePublishObject', null)
    window.app.$store.commit('savePurpose', null)
    window.app.$store.commit('saveOpinion', null)
    window.app.$store.commit('saveBankCard', null)
    window.app.$store.commit('savePayedMoney', null)
    window.app.$store.commit('saveGapMoney', null)
    window.app.$store.commit('saveBorrowId', null)
    window.app.$store.commit('saveBorrowOrigin', null)
    window.app.$store.commit('saveUsableMoney', null)
    window.app.$store.commit('saveCreditQuery', null)
    window.app.$store.commit('saveAccount', null)
    window.app.$store.commit('saveComplianPhone', null)
    window.app.$store.commit('saveInfo', null)
    window.app.$store.commit('saveError', null)
  }
}
