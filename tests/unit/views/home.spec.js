import {mount} from '@vue/test-utils'
import {QueryService} from '@/services'
import HomeView from '@/views/home.vue'

const getResultsSpy = jest.spyOn(QueryService.prototype, 'getResults').mockResolvedValueOnce({data: ['mocked response']})

describe('Home view component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomeView)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders without error', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('results to be null on component mount', () => {
    expect(wrapper.vm.results).toBeFalsy()
  })

  it('results to be empty if query does not exist', async () => {
    const query = 'SELECT * FROM "Houses"'
    wrapper.vm.submitQuery(query)
    expect(wrapper.vm.isLoading).toBeTruthy()
    await wrapper.vm.$nextTick()
    expect(getResultsSpy).toHaveBeenCalled()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isLoading).toBeFalsy()
    expect(wrapper.vm.results).toBeTruthy()
  })
})
