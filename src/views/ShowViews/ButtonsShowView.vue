<script>
    export default{
        props: {
            label: {
                type: String,
                default: null
            }
        }
    }
</script>

<template>
    <label
        v-if="label"
    >
        {{ label }}
    </label>
</template>