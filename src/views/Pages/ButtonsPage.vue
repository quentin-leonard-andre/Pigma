<script>
    import Button from "../../components/Basics/Button.vue";
    import ButtonsShowView from "../../views/ShowViews/ButtonsShowView.vue";

    export default{
        components: {
            Button,
            ButtonsShowView
        },
        data(){
            return {
                colors: [
                    'primary',
                    'secondary',
                    'info',
                    'success',
                    'warning',
                    'danger'
                ]
            }
        },  
        methods: {
            buttons_content(extra_attributes={}){
                var res = [];
                this.colors.forEach(color => {
                    var new_object = {
                        color: color,
                        label: color
                    };

                    res.push(
                        {...new_object, ...extra_attributes}
                    );
                });
                return res;
            }
        }
    }
</script>

<template>
    <!-- Boutons standards -->
    <ButtonsShowView
        label="Boutons standards"
        :buttons="buttons_content()"
    >
    </ButtonsShowView>

    <!-- Boutons Contours -->
    <ButtonsShowView
        label="Boutons contours"
        :buttons="buttons_content({
            outline: true
        })"
    >
    </ButtonsShowView>

    <!-- Boutons désactivés -->
    <ButtonsShowView
        label="Boutons désactivés"
        :buttons="buttons_content({
            disabled: true
        })"
    >
    </ButtonsShowView>

    <!-- Boutons contours désactivés -->
    <ButtonsShowView
        label="Boutons contours désactivés"
        :buttons="buttons_content({
            outline: true,
            disabled: true
        })"
    >
    </ButtonsShowView>

    <!-- Boutons toggables désactivés -->
    <ButtonsShowView
        label="Boutons d'états non activés et activables"
        :buttons="buttons_content({
            toggable: true
        })"
    >
    </ButtonsShowView>

    <!-- Boutons toggables désactivés -->
    <ButtonsShowView
        label="Boutons d'états activés et non activables"
        :buttons="buttons_content({
            init_toggled: true
        })"
    >
    </ButtonsShowView>
</template>