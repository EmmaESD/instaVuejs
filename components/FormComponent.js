export const FormComponent = {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  props: {
    handlesubmit: Function,
  },
  template: `
    <form @submit.prevent="handlesubmit(title, content)">
        <input type="text" placeholder="title" v-model="title" />
        <input type="text" placeholder="content" v-model="content"/>
        <input type="submit" value="submit" />
    </form>
    `,
};
