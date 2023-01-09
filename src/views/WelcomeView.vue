<script>
    import Button from "../components/Basics/Button.vue";

    export default{
        components: {
            Button
        }
    }
</script>

<template>
    <!-- Boutons -->
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

    <!-- Boutons Contours -->
    <div class="flex p-4 gap-4">
        <Button 
            color="primary"
            :outline="true"
        >
            Primaire
        </Button>

        <Button 
            color="secondary"
            :outline="true"
        >
            Secondaire
        </Button>

        <Button 
            color="info"
            :outline="true"
        >
            Information
        </Button>

        <Button 
            color="success"
            :outline="true"
        >
            Succès
        </Button>

        <Button 
            color="warning"
            :outline="true"
        >
            Attention
        </Button>

        <Button 
            color="danger"
            :outline="true"
        >
            Danger
        </Button>
    </div>

    <!-- Boutons désactivés -->
    <div class="flex p-4 gap-4">
        <Button 
            color="primary"
            disabled
        >
            Primaire
        </Button>

        <Button 
            color="secondary"
            disabled
        >
            Secondaire
        </Button>

        <Button 
            color="info"
            disabled
        >
            Information
        </Button>

        <Button 
            color="success"
            disabled
        >
            Succès
        </Button>

        <Button 
            color="warning"
            disabled
        >
            Attention
        </Button>

        <Button 
            color="danger"
            disabled
        >
            Danger
        </Button>
    </div>

    <!-- Boutons contours désactivés -->
    <div class="flex p-4 gap-4">
        <Button 
            color="primary"
            :outline="true"
            disabled
        >
            Primaire
        </Button>

        <Button 
            color="secondary"
            :outline="true"
            disabled
        >
            Secondaire
        </Button>

        <Button 
            color="info"
            :outline="true"
            disabled
        >
            Information
        </Button>

        <Button 
            color="success"
            :outline="true"
            disabled
        >
            Succès
        </Button>

        <Button 
            color="warning"
            :outline="true"
            disabled
        >
            Attention
        </Button>

        <Button 
            color="danger"
            :outline="true"
            disabled
        >
            Danger
        </Button>
    </div>
</template>