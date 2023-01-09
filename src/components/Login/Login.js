import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      names: [],
      avatar: [],
      username: "Choose your username",
      password: "",
    };
  },
  mounted() {
    this.getnames();
  },

  methods: {
    getnames() {
      axios
        .get("http://localhost:4000/users", true)
        .then((users) => {
          this.names = users.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login: async function () {
      const auth = { username: this.username, password: this.password };
      const url = "http://localhost:4000/todos";
      this.success = false;
      this.error = null;

      try {
        const res = await axios.get(url, { auth }).then((res) => res.data);
        this.success = true;
        window.localStorage.setItem("password", JSON.stringify(this.password)); // Saving
        window.localStorage.setItem("selectedObj", JSON.stringify(this.names)); // Saving
        window.localStorage.setItem(
          "name",
          JSON.stringify(this.names[res[0].user_id - 1].name)
        ); // Saving
        window.localStorage.setItem(
          "username",
          JSON.stringify(this.names[res[0].user_id - 1].username)
        ); // Saving
        window.localStorage.setItem(
          "img",
          JSON.stringify(this.names[res[0].user_id - 1].avatar)
        ); // Saving
        window.localStorage.setItem("selectedUser", JSON.stringify(this.res)); // Saving
        window.localStorage.setItem("details", JSON.stringify(res)); // Saving
        window.localStorage.setItem("authorization", JSON.stringify(auth)); // Saving
        this.$router.push("/DashBord");
      } catch (err) {
        this.error = err.message;
        alert("wrong Password");
        console.log(err);
      }
    },
  },
};
