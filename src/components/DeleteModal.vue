<template>
  <div class="modal-bg">
    <div class="modal-wrapper">
      <h4>Удалить заказ?</h4>
      <div class="modal-btns-wrapper">
        <button class="modal-btn" @click="deleteEvent(eventID)">Да</button>
        <button class="modal-btn" @click="modal.hideModal()">Нет</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useModal} from "../composables/modal";

defineProps<{
  eventID: number;
}>();

const emit = defineEmits(['delete'])

const modal = useModal();

function deleteEvent(eventID) {
  emit('delete', eventID)
}

</script>