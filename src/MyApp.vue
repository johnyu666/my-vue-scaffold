<template>
    <h1>Hello:{{title}}</h1>
</template>
<script lang="ts">
    import myMath from './lib/my-math'
    export default{
        data(){
            let x:number=myMath(5,2)
            return {title:'john'+x}
        }
    }
</script>
