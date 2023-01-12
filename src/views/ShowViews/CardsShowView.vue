<script>
    import Card from "../../components/Basics/Card.vue";

    export default{
        components: {
            Card
        }
    }
</script>

<template>
    <div class="flex flex-col p-4 gap-4">
            <label
                v-if="label"
            >
                {{ label }}
            </label>

            <div class="flex gap-4 flex-wrap">
                <Card
                    show-card
                    v-for="card in cards"
                >
                    {{ (button.label) ? button.label : "" }}
                </Card>
            </div>
    </div>
</template>