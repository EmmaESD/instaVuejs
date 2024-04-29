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
    increase(id) {
      console.log("Increase likes for post with id :", id);
      this.postList.find((post) => post.id === id).like += 1;
    },
  },
  mounted() {
    console.log("app mounted");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
  },
}).mount("#app");
