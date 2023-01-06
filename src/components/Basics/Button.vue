<script>
    export default{
        props: {
            color: {
                type: String,
                default: "primary"
            }
        },
        methods: {
            getButtonClassesByColor(color){
                var classes = `
                    bg-primary-600
                    hover:bg-primary-500
                `;

                switch (color){
                    case 'primary':
                        classes = `
                            bg-primary-600
                            hover:bg-primary-500
                        `;
                    break;

                    case 'success':
                        classes = `
                            bg-success-600
                            hover:bg-success-500
                        `;
                    break;

                    case 'secondary':
                        classes = `
                            bg-secondary-600
                            hover:bg-secondary-500
                        `;
                    break;

                    case 'info':
                        classes = `
                            bg-info-600
                            hover:bg-info-500
                        `;
                    break;

                    case 'warning':
                        classes = `
                            bg-warning-600
                            hover:bg-warning-500
                        `;
                    break;

                    case 'danger':
                        classes = `
                            bg-danger-600
                            hover:bg-danger-500
                        `;
                    break;
                }

                return classes;
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
            transition-all
            duration-100
            ease-in
        "
        :class="[
            getButtonClassesByColor(color)
        ]"
    >
        <slot/>
    </button>
</template>