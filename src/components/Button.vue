<script>
    export default{
        props: {
            color: {
                type: String,
                default: "primary"
            }
        }
    }
</script>

<template>
    <button
        class="
            px-2
            py-1
            rounded
            text-white
            bg-primary-600
            hover:bg-primary-500
            transition-all
            duration-100
            ease-in
        "
        :class="dynamic_classes"
    >
        <slot/>
    </button>
</template>