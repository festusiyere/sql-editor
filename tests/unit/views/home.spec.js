import {mount} from '@vue/test-utils'
import HomeView from '@/views/home.vue'
import axios from 'axios'

jest.mock('axios')

describe('Home view component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(HomeView, {
      mocks: {
        axios
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('renders without error', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('results to be null on component mount', () => {
    expect(wrapper.vm.result).toBeFalsy()
  })

})
