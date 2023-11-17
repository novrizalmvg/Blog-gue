<template>
    <div>
      <h1>{{ post.title }}</h1>
  
      <div class="entry">
        <h2>{{ post.body }}</h2>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { server } from "../utils/helper";
  
  export default {
    data() {
      return {
        post:{},
        articleId: null
      };
    },
    mounted() {
      const urlParams = new URLSearchParams(window.location.search); 
      this.articleId  = urlParams.get("id"); 
      this.fetchJurnal();
    },
    methods: {
      fetchJurnal() {
        axios.get(`${server.baseURL}/blog/post/`+this.articleId).then((data) => {
          this.post = data.data;
        });
      },
    },
  };
  </script>
  