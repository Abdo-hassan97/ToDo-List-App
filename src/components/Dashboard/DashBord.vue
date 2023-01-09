<template>
  <div class="container-fluid">
    <div id="main" class="row">
      <h1
        class="header d-flex align-items-center justify-content-center p-3 mb-2 bg-success text-whit"
      >
        Tasks
      </h1>
      <svg
        @click="hide()"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M222.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l128-384zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8zM384 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"
        />
      </svg>
      <button @click="logout()" type="submit" id="logout"  class="mb-2 btn btn-success btn-lg" >Logout</button>

    </div>
    <div class="row">
      <div id="aside" class="col-5">
        <img v-bind:src="img" alt="Girl in a jacket" />
        <h3 id="name">{{ name }}</h3>
      </div>
      <div
        id="body"
        class="col-7 body d-flex flex-column align-items-center justify-content-center"
      >
        <ul class="list-group mt-5">
          <li
            v-for="task in tasks"
            :value="tasks"
            :key="task.id"
            class="list-group-item"
          >
            {{ task.task }}
            <svg
              id="delete"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              @click="deleteNote(task.id)"
            >
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
              />
            </svg>
          </li>
        </ul>
        <button
          @click="showAdd()"
          id="Addbtn"
          type="button"
          class="btn btn-success btn-circle btn-xl"
        >
          +
        </button>
        <div id="addtask" class="input">
          <div id="labelForAdd" class="input-group mb-3">
            <input
            v-model="newTask"
              type="text"
              class="form-control"
              placeholder="Add Task"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button @click="AddTask()" class="btn btn-success btn-circle btn-xl" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script src="./Dashboard.js"/>
 <style scoped lang="css" src="./Dashboard.css"></style>