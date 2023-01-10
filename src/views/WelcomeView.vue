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
    <ButtonsShowView
        label="Boutons standards"
    >
    </ButtonsShowView>

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