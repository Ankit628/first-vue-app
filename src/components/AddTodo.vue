<template>
    <div class="bg-dark">
        <form @submit="addTodo">
            <div class="form-row p-3">
                <div class="col-md-10">
                    <input type="text" v-model="title" name="title" placeholder="Add Todo.." class="form-control">
                </div>
                <div class="col-md-2">
                    <input type="submit" value="submit" class="btn btn-block btn-success">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addTodo(e) {
                e.preventDefault();
                const newTodo = {
                    title: this.title,
                    completed: false
                };
                this.$emit('add-todo', newTodo);
                this.title = "";
            }
        }
    }
</script>