import { reactive } from 'vue';
import blocklyStore from './bockly.js';

export default reactive({
  count: 0,
  modal: '',
  setModal(modalName) {
    this.modal = modalName;
  },
  ...blocklyStore
})