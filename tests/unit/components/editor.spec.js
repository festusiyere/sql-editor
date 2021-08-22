import {mount} from '@vue/test-utils'
import EditorComponent from '@/components/home/EditorComponent.vue'
import ModalComponent from '@/components/global/Modal.vue'

describe('Editor component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(EditorComponent)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders without error', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('Expect Modal component to mount', () => {
    const modal = wrapper.findComponent(ModalComponent)
    expect(modal.exists()).toBe(true)
  })

  it('textarea to be filled on component mount', () => {
    expect(wrapper.vm.queryString).toBe('SELECT * FROM "Employees"')
  })

  it('remove table name on reset', async () => {
    const resetButton = wrapper.find('button[data-name="reset"]')
    await resetButton.trigger('click')

    expect(wrapper.vm.queryString).toBe('SELECT * FROM ""')
  })

  it('should show modal when database button is clicked', async () => {
    const togglerButton = wrapper.find('button[data-name="modal-toggler"]')
    await togglerButton.trigger('click')
    const modal = wrapper.findComponent(ModalComponent)

    expect(modal.vm.isOpen).toBeTruthy()
  })

  it('it should emit query string when run button is clicked', async () => {
    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('submitQuery')).toBeTruthy()
  })
})
