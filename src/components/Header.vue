<template>
    <header class="bg-dark text-center">
        <h1 class="text-white p-4 m-0">Todo List</h1>
        <ul class="nav align-items-center justify-content-center text-white">
            <li class="nav-item">
                <router-link to="/home" class="nav-link text-white">Home</router-link>
            </li>
            |
            <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">About</router-link>
            </li>
        </ul>
    </header>
</template>
<script>
    export default {
        name: "Header",
    }
</script>