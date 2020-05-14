<template>

    <div class="row">
        <div class="col-md-2">
            <input type="checkbox" v-on:change="markComplete">
        </div>
        <div class="col-md-8">
            <h3>
                {{todo.title}}
            </h3>
        </div>
        <div class="col-md-2">
            <button class="btn btn-sm btn-danger" @click="$emit('del-todo', todo.id)">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ["todo"],
        methods: {
            markComplete() {
                this.todo.completed = !this.todo.completed;
            }
        }
    }
</script>