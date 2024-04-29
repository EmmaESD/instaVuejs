const { createApp, ref } = Vue;
import { FormComponent } from "./components/FormComponent.js";
import { cardItem } from "./components/cardItem.js";

const vm = createApp({
  components: {
    "card-post": cardItem,
    "form-component": FormComponent,
  },
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    handleSubmit(title, content) {
      const newPost = {
        id: 10,
        title: title,
        content: content,
        image_url:
          "https://cdn.pixabay.com/photo/2023/04/06/07/45/rose-7903170_1280.jpg",
        like: 0,
      };
      this.postList.push(newPost);
    },
    increase(id) {
      console.log("Increase likes for post with id :", id);
      this.postList.find((post) => post.id === id).like += 1;
    },
  },
  mounted() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
  },
}).mount("#app");
