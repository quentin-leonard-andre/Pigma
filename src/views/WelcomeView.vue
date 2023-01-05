<script>
    import Button from "../components/Button.vue";

    export default{
        components: {
            Button
        }
    }
</script>

<template>
    <div class="flex p-4 gap-4">
        <Button color="primary">
            Primaire
        </Button>

        <Button color="success">
            Succès
        </Button>
    </div>
</template>