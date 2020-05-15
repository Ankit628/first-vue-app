<template>
    <div class="list-group shadow">
        <div class="list-group-item list-group-item-action" v-bind:key="todo.id" v-for="todo in todos" v-bind:class="{'text-success':todo.completed}">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "Todos",
        components: {
            TodoItem
        },
        props: ["todos"]
    }
</script>