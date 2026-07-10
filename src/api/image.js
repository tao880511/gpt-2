/**
 * Image API | 图片生成 API
 */

import { request } from '@/utils'

// 生成图片
export const generateImage = (data, options = {}) => {
  const { requestType = 'json', endpoint = '/images/generations' } = options
  
  return request({
    url: endpoint,
    method: 'post',
    data,
    headers: requestType === 'formdata' ? {} : {}
  })
}

// 编辑图片（图生图）
export const editImage = (data, options = {}) => {
  const { requestType = 'formdata', endpoint = '/images/edits' } = options
  
  return request({
    url: endpoint,
    method: 'post',
    data,
    // 不要手动设置 Content-Type，让浏览器自动设置（包含 boundary）
    headers: requestType === 'formdata' ? {} : {}
  })
}
