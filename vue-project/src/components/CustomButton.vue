<template>
    <v-btn :variant="type" >{{ value }}</v-btn>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        type: {
            type: String,
            default: ''
        },
        value: {
            value: String,
            default: ''
        }
    }
}
</script>