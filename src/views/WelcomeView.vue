<script>
    import Button from "../components/Basics/Button.vue";
    import ButtonsShowView from "../views/ShowViews/ButtonsShowView.vue";

    export default{
        components: {
            Button,
            ButtonsShowView
        },
        methods: {
            getButtonWithIconLabel(icon, label){
                return "Quentin";
            }
        }
    }
</script>

<template>
    <!-- Boutons standards -->
    <ButtonsShowView
        label="Boutons standards"
        :buttons="[
            {
 
            },
            {
                color: 'secondary',
                label: 'Secondaire'
            },
            {
                color: 'info',
                label: 'Information'
            },
            {
                color: 'success',
                label: 'Succès'
            },
            {
                color: 'warning',
                label: 'Attention'
            },
            {
                color: 'danger',
                label: 'Danger'
            },
        ]"
    >
    </ButtonsShowView>

    <!-- Boutons Contours -->
    <ButtonsShowView
        label="Boutons contours"
        :buttons="[
            {
                color: 'primary',
                label: 'Primaire',
                outline: true
            },
            {
                color: 'secondary',
                label: 'Secondaire',
                outline: true
            },
            {
                color: 'info',
                label: 'Information',
                outline: true
            },
            {
                color: 'success',
                label: 'Succès',
                outline: true
            },
            {
                color: 'warning',
                label: 'Attention',
                outline: true
            },
            {
                color: 'danger',
                label: 'Danger',
                outline: true
            },
        ]"
    >
    </ButtonsShowView>

    <!-- Boutons désactivés -->
    <ButtonsShowView
        label="Boutons désactivés"
        :buttons="[
            {
                color: 'primary',
                label: 'Primaire',
                disabled: true
            },
            {
                color: 'secondary',
                label: 'Secondaire',
                disabled: true
            },
            {
                color: 'info',
                label: 'Information',
                disabled: true
            },
            {
                color: 'success',
                label: 'Succès',
                disabled: true
            },
            {
                color: 'warning',
                label: 'Attention',
                disabled: true
            },
            {
                color: 'danger',
                label: 'Danger',
                disabled: true
            },
        ]"
    >
    </ButtonsShowView>

    <!-- Boutons contours désactivés -->
    <ButtonsShowView
        label="Boutons contours désactivés"
        :buttons="[
            {
                color: 'primary',
                label: 'Primaire',
                outline: true,
                disabled: true
            },
            {
                color: 'secondary',
                label: 'Secondaire',
                outline: true,
                disabled: true
            },
            {
                color: 'info',
                label: 'Information',
                outline: true,
                disabled: true
            },
            {
                color: 'success',
                label: 'Succès',
                outline: true,
                disabled: true
            },
            {
                color: 'warning',
                label: 'Attention',
                outline: true,
                disabled: true
            },
            {
                color: 'danger',
                label: 'Danger',
                outline: true,
                disabled: true
            },
        ]"
    >
    </ButtonsShowView>
</template>