<template>
  <div>
    <h1>{{ post.title }}</h1>

    <div class="entry">
      <h2>{{ post.body }}</h2>
      <p>{{ post.description }}</p>
    </div>
    <div class="interactions">
      <div class="like-comment">
        <!-- Button for liking -->
        <div class="like-container">
          <button @click="likePost" class="like-button">
            <i class="far fa-thumbs-up"></i>
            <span>Like {{ total_like }}</span>
          </button>
          <!-- Display total likes -->
        </div>
        <div class="like-container">
          <button @click="likePost" class="like-button">
            <i class="fa-solid fa-comment"></i>
            <span>Comment {{ total_comment }}</span>
          </button>
          <!-- Display total likes -->
        </div>
      </div>

      <!-- <div class="comment-section">
        <div class="add-comment">
          <input
            v-model="comment"
            placeholder="Add a comment..."
            class="comment-input"
          />
          <button @click="addComment" class="post-button">Post</button>
        </div>

        <div v-if="post.comments && post.comments.length > 0" class="comments">
          <h3>Comments:</h3>
          <ul>
            <li
              v-for="(comment, index) in post.comments"
              :key="index"
              class="comment-item"
            >
              {{ comment }}
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../utils/helper";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  data() {
    return {
      post: {},
      total_like: 0,
      articleId: null,
      total_comment: 0,
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.articleId = urlParams.get("id");
    this.fetchJurnal();
    this.fetchLike();
    this.fetchComment();
  },
  methods: {
    fetchJurnal() {
      axios
        .get(`${server.baseURL}/blog/post/` + this.articleId)
        .then((data) => {
          this.post = data.data;
        });
    },
    likePost() {
      this.fetchLike();
      const payload = {
        post_id: this.articleId,
        email: "sopyan@gmail.com",
        total: 1,
      };
      axios
        .post(`${server.baseURL}/like/`, payload, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          console.log("Like response:", response.data);
          // Update local state or do something with the response
        })
        .catch((error) => {
          console.error("Error liking the post:", error);
          // Handle the error, display a message, or perform other actions
        });
    },
    fetchLike() {
      axios.get(`${server.baseURL}/like/`).then((data) => {
        const totalLikes = data.data.reduce((total, currentItem) => {
          // Konversi nilai 'total' dan 'currentItem.total' ke tipe number dan menjumlahkannya
          return total + parseInt(currentItem.total);
        }, 0);
        console.log("masuk sini", totalLikes);
        this.total_like = totalLikes;
      });
    },
    fetchComment() {
      axios.get(`${server.baseURL}/comment/`).then((data) => {
        this.total_comment = data.data.length;
      });
    },
  },
};
</script>

<style>
/* Your existing styles */

/* New styles for positioning total likes */
.interactions {
  /* ... */
  display: flex;
  justify-content: center;
}

.like-container {
  display: flex;
  align-items: center;
}

.total-likes {
  margin-left: 8px;
  font-size: 14px;
  color: #606770;
}

.fa-thumbs-up:before {
  content: "\f164"; /* Unicode for Facebook thumbs-up icon */
  font-family: "Font Awesome 5 Free";
}

.fa-comment-alt:before {
  content: "\f27a"; /* Unicode for Facebook comment icon */
  font-family: "Font Awesome 5 Free";
}

/* Adjustments for Facebook-like Buttons */
.like-comment {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.like-button,
.comment-button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.like-button {
  background-color: #4267b2; /* Facebook blue */
  color: white;
  margin-right: 10px;
}

.like-button:hover {
  background-color: #2a4888; /* Darker blue on hover */
}

.comment-button {
  background-color: #f0f2f5; /* Facebook comment button color */
  color: #606770;
}

.comment-button:hover {
  background-color: #dedfe3; /* Darker comment button on hover */
}

.post-button {
  padding: 8px 16px;
  background-color: #4267b2; /* Facebook blue for comment post button */
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.post-button:hover {
  background-color: #2a4888; /* Darker blue on hover */
}
</style>
