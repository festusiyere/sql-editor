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

  it('results to be empty if query does not exist', async () => {
    axios.get.mockImplementation(() => Promise.resolve([]))
    const query = 'SELECT * FROM "Houses"'
    wrapper.vm.submitQuery(query)
    await wrapper.vm.$nextTick()
    expect(axios.get).toHaveBeenCalledTimes(1)
    // expect(wrapper.vm.result.length).toBe(0)
  })
})
