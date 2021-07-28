import request from '@/utils/request'

export function login () {
  return request({
    url: '/zst/service/test/getList',
    method: 'get'
  })
}

export function getQuestion () {
  return request({
    url: '/test/question/list',
    method: 'get'
  })
}
