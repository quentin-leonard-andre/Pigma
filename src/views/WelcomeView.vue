<script>
    import Button from "../components/Basics/Button.vue";
    import ButtonsShowView from "../views/ShowViews/ButtonsShowView.vue";

    export default{
        components: {
            Button,
            ButtonsShowView
        }
    }
</script>

<template>
    <!-- Boutons standards -->
    <ButtonsShowView
        label="Boutons standards"
        :buttons="[
            {
                color: 'primary',
                label: 'Primaire'
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

    <!-- Boutons avec icone -->
    <div class="flex p-4 gap-4">
        <Button 
            color="primary"
        >
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Primaire
                </span>
            </div>
        </Button>

        <Button color="secondary">
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Secondaire
                </span>
            </div>
        </Button>

        <Button color="info">
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Information
                </span>
            </div>
        </Button>

        <Button color="success">
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Succès
                </span>
            </div>
        </Button>

        <Button color="warning">
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Attention
                </span>
            </div>
        </Button>

        <Button color="danger">
            <div class="flex gap-2">
                <svg class="fill-white" width="16" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/>
                </svg>
                <span>
                    Danger
                </span>
            </div>
        </Button>
    </div>
</template>