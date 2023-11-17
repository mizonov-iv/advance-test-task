<template>
  <div class="events-btns-wrapper">
    <button class="event-btn" v-show="event.status !== 'Выполнен'" @click="completeEvent(event.id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M10.85725,15.7765003 L16.70725,9.92650027 C17.09825,9.53650027 17.09825,8.90350027 16.70725,8.51250027 C16.31625,8.12250027 15.68425,8.12250027 15.29325,8.51250027 L10.85725,12.9485003 L8.70725,10.7985003 C8.31625,10.4075003 7.68425,10.4075003 7.29325,10.7985003 C6.90225,11.1895003 6.90225,11.8215003 7.29325,12.2125003 L10.85725,15.7765003 Z"/>
      </svg>
    </button>
    <button class="event-btn" @click="deleteEvent(event.id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 32 32">
        <circle style="fill:#252a35" cx="16" cy="16" r="14"/>
        <g transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,16,-6.627417)">
          <rect style="fill:#ffffff" width="4" height="20" x="-18" y="6" transform="matrix(0,-1,1,0,0,0)"/>
          <rect style="fill:#ffffff" width="4" height="20" x="14" y="6"/>
        </g>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {useEventsStore} from "../stores/eventsStore";

defineProps<{
  event: object;
}>();

const emit = defineEmits(['delete'])

const eventsStore = useEventsStore();

function completeEvent (eventID) {
  eventsStore.completeEvent(eventID)
}

function deleteEvent(eventID) {
  emit('delete', eventID)
}
</script>