<script>
import { UNREF } from '@vue/compiler-core';

    export default{
        props: {
            color: {
                type: String,
                default: "primary"
            },
            outline: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            toggable: {
                type: Boolean,
                default: false
            },
            init_toggled: {
                type: Boolean,
                default: false
            }
        },
        data(props){
            return {
                toggled: props.init_toggled
            };
        },
        methods: {
            getButtonClassesByColor(color){
                var classes = `
                    bg-primary-600
                    hover:bg-primary-500
                `;

                switch (color){
                    case 'primary':
                        if(this.outline){
                            classes = `
                                outline
                                outline-primary-600
                                outline-2
                                text-primary-600
                            `;
                            
                            if(!this.disabled){
                                classes+=`
                                    hover:bg-primary-600
                                    hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-primary-600
                               
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-primary-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-primary-100"
                            }
                        }
                    break;

                    case 'success':
                        if(this.outline){
                            classes = `
                                outline
                                outline-success-600
                                outline-2
                                text-success-600
                            `;

                            if(!this.disabled){
                                classes+=`
                                hover:bg-success-600
                                hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-success-600
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-success-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-success-100"
                            }
                        }
                    break;

                    case 'secondary':
                        if(this.outline){
                            classes = `
                                outline
                                outline-secondary-600
                                outline-2
                                text-secondary-600
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-success-500
                                    hover:bg-secondary-600
                                    hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-secondary-600
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-secondary-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-secondary-100"
                            }
                        }
                    break;

                    case 'info':
                        if(this.outline){
                            classes = `
                                outline
                                outline-info-600
                                outline-2
                                text-info-600
                                
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-info-600
                                    hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-info-600
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-info-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-info-100"
                            }
                        }
                    break;

                    case 'warning':
                        if(this.outline){
                            classes = `
                                outline
                                outline-warning-600
                                outline-2
                                text-warning-600
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-warning-600
                                    hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-warning-600
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-warning-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-warning-100"
                            }
                        }
                    break;

                    case 'danger':
                        if(this.outline){
                            classes = `
                                outline
                                outline-danger-600
                                outline-2
                                text-danger-600
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-danger-600
                                    hover:text-white
                                `;
                            }
                        }
                        else{
                            classes = `
                                bg-danger-600
                                text-white
                            `;

                            if(!this.disabled){
                                classes+=`
                                    hover:bg-danger-500
                                `;
                            }

                            if(this.toggled){
                                classes+=" ring-offset-0 ring-4 ring-danger-100"
                            }
                        }
                    break;
                }
                
                if(this.disabled){
                    classes+=" opacity-50";
                }

                return classes;
            },
            onClick(event){
                if(this.toggable){
                    this.toggled = !this.toggled;
                }
            }
        }
    }
</script>

<template>
    <button
        @click="onClick"
        class="
            px-2
            py-1
            rounded
            transition-all
            duration-100
            ease-in
            flex
            items-center
        "
        :class="[
            getButtonClassesByColor(color)
        ]"

        :disabled="disabled"
    >
        <div class="flex items-center gap-2">
            <!-- Contenu -->
            <slot />
        </div>
        
    </button>
</template>