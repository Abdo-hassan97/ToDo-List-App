<template>
    <div class="container d-flex flex-column align-items-center justify-content-center ">
        <div id="box" class="d-flex flex-column align-items-center justify-content-center  border border-success rounded">
            <h1 >To-Do</h1>
            <form @submit.prevent="login()">
            <label for="Users">Choose a User:</label>
            <select  v-model="username" id="username" name="username" >
                        <option v-for="name in names" :value="name.username"  :key="name.id"> {{name.username}}</option>

            </select>
            <br>
            <label for="pwd">Password:</label>
            <input  v-model="password" type="password" id="password" name="password" placeholder="Enter your password" autocomplete="on"><br>
            <button type="submit" value="login"   class="mb-2 btn btn-success btn-lg" >Login</button>
        </form>
        </div>
        
    </div>
    
</template>

<script src="./Login.js"/>
 <style scoped lang="css" src="./Login.css"></style>
