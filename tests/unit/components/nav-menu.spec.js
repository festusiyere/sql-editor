import {shallowMount} from '@vue/test-utils'
import NavMenuComponent from '@/components/global/NavMenu.vue'

describe('Nav menu component', () => {
  it('renders without error', () => {
    const wrapper = shallowMount(NavMenuComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
