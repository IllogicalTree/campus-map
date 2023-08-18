<script setup>

    import { ref } from "vue";
    
    const file = ref()

    const handleFileUpload = async() => {
     
        let formData = new FormData()
        formData.append('file', file.value.files[0])

        const resp = await fetch('/data/upload', {
            method: "POST",
            body: formData,
            redirect: "follow"
        })

        if (resp.ok) {
            console.log("file uploaded")
        } else {
            console.log("file upload failed")
        }
    }
</script>

<template>
    <main>
        <header>
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </header>
        <div class="container">
            <div>
                <label for="input">Upload new csv file of space functions</label>
                <br>
                <input id="input" type="file" ref="file" v-on:change="handleFileUpload()"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 65vh;
    overflow: hidden;
}

</style>