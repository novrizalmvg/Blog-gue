<template>
    <div>
      <Loading v-if="isLoading" :isLoading="isLoading" /> 
      <div v-else>
        <div class="home">
          <div class="home-body">
            <div class="container">
              <h1 class="title">Hey, I'm {{ homes.name || "Novrizal" }}.</h1>
              <p class="subtitle">
                {{ homes.subtitle }}
              </p>
            </div>
          </div>
        </div>
  
        <div v-for="post in searchResults" :key="post._id">
          <a :href="path + post._id">
            <div class="card">
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { server } from "../utils/helper";
  import Loading from "./Loading.vue";
  
  export default {
    components: {
      Loading
    },
    data() {
      return {
        isLoading: true,
        homes: {},
      };
    },
    mounted() {
      this.fetchHome();
    },
    methods: {
      fetchHome() {
        axios.get(`${server.baseURL}/home?keyword=`).then((response) => {
          this.homes = response.data[0];
          this.isLoading = false; 
        }).catch((error) => {
          console.error("Error fetching home:", error);
          this.isLoading = false; 
        });
      },
    },
  };
  </script>
  

<style>
p.subtitle {
    font-size: 1.2rem;
    border-top: none;
}
</style>