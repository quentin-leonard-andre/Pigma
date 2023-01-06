<script>
    import Button from "../components/Basics/Button.vue";

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

        <Button color="secondary">
            Secondaire
        </Button>

        <Button color="info">
            Information
        </Button>

        <Button color="success">
            Succès
        </Button>

        <Button color="warning">
            Attention
        </Button>

        <Button color="danger">
            Danger
        </Button>
    </div>
</template>