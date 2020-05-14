<template>
    <div class="row mt-5">
        <div class="offset-3 col-md-6 align-items-center">
            <Header/>
            <div class="list-group shadow">
                <div class="list-group-item list-group-item-action" v-bind:key="todo.id" v-for="todo in todos" v-bind:class="{'text-success':todo.completed}">
                    <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./layouts/Header"
    import TodoItem from "./TodoItem";

    export default {
        name: "Todos",
        components: {
            TodoItem, Header
        },
        props: ["todos"]
    }
</script>