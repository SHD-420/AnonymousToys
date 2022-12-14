<template>
    <nav class="bg-slate-900">
        <div
            class="w-11/12 lg:w-3/4 flex justify-between items-center py-4 lg:py-8 mx-auto"
            v-if="$route.name === 'Home'"
        >
            <BaseImage src="logo.png" class="w-40" />
            <nav-links class="hidden md:flex" :links="links"></nav-links>
            <button
                @click="shouldShowSideBar = !shouldShowSideBar"
                class="md:hidden text-slate-200 text-xl"
            >
                <FontAwesomeIcon
                    :icon="shouldShowSideBar ? 'fa-times' : 'fa-bars'"
                ></FontAwesomeIcon>
            </button>
        </div>
        <div v-else>
            <div class="mx-8 md:mx-20 py-4 justify-between flex items-center">
                <BaseImage src="logo.png" class="w-32" />
                <button
                    @click="shouldShowSideBar = !shouldShowSideBar"
                    class="lg:hidden text-slate-200 text-xl"
                >
                    <FontAwesomeIcon
                        :icon="shouldShowSideBar ? 'fa-times' : 'fa-bars'"
                    ></FontAwesomeIcon>
                </button>
                <div class="hidden lg:flex items-center space-x-8">
                    <nav-links :links="links"></nav-links>
                    <product-search-box
                        class="w-60"
                        shouldRedirectOnSuccess
                    ></product-search-box>
                </div>
            </div>
            <NavCart></NavCart>
        </div>
    </nav>

    <nav-mobile
        v-model:shouldShow="shouldShowSideBar"
        :links="links"
    ></nav-mobile>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import NavLinks from "./NavLinks.vue";
import NavCart from "./NavCart.vue";
import NavMobile from "./NavMobile.vue";
import ProductSearchBox from "@/components/global/ProductSearchBox.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const shouldShowSideBar = ref(false);

const { getters } = useStore();
const links = ref([
    { route: "Home", title: "Inicio" },
    { route: "About", title: "Acerca de" },
    { route: "Productos", title: "Productos" },
    { route: "Contacto", title: "Contacto" },
]);

// add or remove admin link from navbar when login or logout
const isAdmin = computed(() => getters["auth/isLoggedIn"]);
const adminLink = { route: "AdminDashboard", title: "Admin" };
if (isAdmin.value) links.value.push(adminLink);
watch(isAdmin, (newVal) => {
    if (newVal) {
        links.value.push(adminLink);
    } else {
        links.value = links.value.filter(
            (link) => link.route !== adminLink.route
        );
    }
});
</script>
