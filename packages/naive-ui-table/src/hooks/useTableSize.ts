import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import type { Ref } from 'vue'
import { debounce } from '../utils'

export function useTableSize(tableRef: Ref<any>, resizeHeightOffset: number) {
  // 表格高度
  const tableMaxHeight = ref(0)

  function handleResize() {
    const clientHeight = window.document.documentElement.clientHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    const headEl = tableRef.value.$el.querySelector('.n-data-table-thead ')
    const { top, height } = headEl.getBoundingClientRect()
    const tableHeight = clientHeight - (top + scrollTop)

    const marginH = 24
    let paginationHeight = 0
    const paginationEl = tableRef.value.$el.querySelector(
      '.n-data-table__pagination'
    ) as HTMLElement
    if (paginationEl) {
      paginationHeight = paginationEl.offsetHeight
    }

    tableMaxHeight.value = tableHeight - height - paginationHeight - marginH - resizeHeightOffset
  }

  const resizeFun = debounce(handleResize, 280)

  onMounted(() => {
    nextTick(() => {
      handleResize()
    })
    window.addEventListener('resize', resizeFun)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeFun)
  })

  return {
    tableMaxHeight
  }
}
