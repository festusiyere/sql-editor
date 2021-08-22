import {shallowMount} from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue'

describe('Default layout component', () => {
  it('renders without error', () => {
    const wrapper = shallowMount(DefaultLayout, {
      stubs: ['router-view']
    })
    expect(wrapper.vm).toBeTruthy()
  })
})