<template>
    <base-modal :shouldShow="!!msgId" @close="emit('cancel')">
        <div class="px-4 pb-8 max-w-xs">
            <p class="text-slate-900 mb-8 text-center">
                ¿Está seguro de que desea eliminar ese mensaje?
            </p>
            <button
                @click="handleConfirmed"
                class="bg-amber-500 py-2 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Yes </span>
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { ref } from "vue";

const props = defineProps({
    msgId: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(["cancel", "success"]);

const isLoading = ref(false);

const axios = useAxios();

function handleConfirmed() {
    if (props.msgId) {
        isLoading.value = true;
        axios
            .authDelete(`/api/contact/${props.msgId}`)
            .then((response) => {
                if (response.data.message === "success") {
                    emit("success");
                    fireNotification(NotificationTypes.CONTACT_MESSAGE_DELETED);
                }
            })
            .catch((error) => {
                console.log(error.response);
                fireNotification(NotificationTypes.GENERAL_ERROR);
            })
            .finally(() => (isLoading.value = false));
    }
}
</script>
