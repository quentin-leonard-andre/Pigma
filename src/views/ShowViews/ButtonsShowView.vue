<script>
    import Button from "../../components/Basics/Button.vue";

    export default{
        components: {
            Button
        },
        props: {
            label: {
                type: String,
                default: null
            },
            buttons: {
                type: Array,
                default: []
            }
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
            <Button
                show-button
                v-for="button in buttons"
                :color="(button.color) ? button.color:''"
                :disabled="button.disabled"
                :outline="button.outline"
                :toggable="button.toggable"
            >
                {{ (button.label) ? button.label : "" }}
            </Button>
        </div>
    </div>
</template>