<template>
    <div>
      <h1>Kontak Kami</h1>
      <div class="kontak-info">
        <p><i class="fas fa-envelope"></i> Email:{{ contact.email }}</p>
        <p><i class="fab fa-facebook"></i> Facebook: <a href="#">{{ contact.facebook }}</a></p>
        <p><i class="fab fa-twitter"></i> Twitter: <a href="#">{{ contact.twitter }}</a></p>
        <p><i class="fab fa-linkedin"></i> LinkedIn: <a href="#">{{ contact.linkedin }}</a></p>
        <p><i class="fab fa-linkedin"></i> Whatsap: <a href="#">{{ contact.whatsapp }}</a></p>
        <!-- Tambahkan informasi kontak dan tautan media sosial lain sesuai kebutuhan Anda -->
      </div>
    </div>
    <Loading :isLoading=isLoading />
  </template>
  
  <style>
    h1 {
      text-align: center;
      color: #333;
      font-size: 24px;
    }
  
    .kontak-info {
      text-align: left;
      margin: 20px 0;
    }
  
    .kontak-info p {
      margin-bottom: 10px;
    }
  
    .kontak-info i {
      margin-right: 5px;
    }
  </style>
  
  <script>
  import { server } from '../utils/helper';
  import axios from 'axios';
  import Loading from "./Loading.vue";
  export default {
    components: {
      Loading
    },
    data() {
      return {
        isLoading: true,
        contact: {},
        psth:"",
      };
    },
    mounted() {
      this.fetchContact();
    },
    methods: {
      fetchContact() {
        axios.get(`${server.baseURL}/contact?keyword`).then((data) => {
          this.contact = data.data[0];
          this.isLoading = false;
        })
      }
    }
  }
</script>