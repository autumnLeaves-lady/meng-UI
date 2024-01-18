import type { App, Component } from 'vue'
import { NaiveUiTable } from '@meng-ui/naive-ui-table'
import { BasicForm, ModalForm, useForm } from '@meng-ui/naive-ui-form'

export { NaiveUiTable, BasicForm, ModalForm, useForm }
export type * from '@meng-ui/naive-ui-form'

const components: Record<string, Component> = { NaiveUiTable, BasicForm, ModalForm }

export default {
  install(app: App) {
    for (const key in components) {
      app.component(key, components[key])
    }
  }
}
