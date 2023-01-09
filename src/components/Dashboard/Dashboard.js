import axios from "axios";

export default {
  name: "DashBord",
  data() {
    return {
      name: "",
      id: "",
      img: "",
      tasks: [],
      newTask: "",
      username: "",
      password: "",
    };
  },
  mounted() {
    this.data();
  },

  methods: {
    hide() {
      if (document.getElementById("aside").style.opacity != 0) {
        document.getElementById("aside").style.opacity = 0;
      } else {
        document.getElementById("aside").style.opacity = 1;
      }
    },
    showAdd() {
      if (document.getElementById("addtask").style.opacity != 0) {
        document.getElementById("addtask").style.opacity = 0;
      } else {
        document.getElementById("addtask").style.opacity = 1;
      }
    },
    async AddTask() {
      const auth = { username: this.username, password: this.password };
      const url = "http://localhost:4000/todos";
      const task = { task: this.newTask };
      this.success = false;
      this.error = null;
      try {
        const res = await axios
          .post(url, task, { auth })
          .then((res) => res.data);
        this.success = true;
        console.log(res.task);

        const res2 = await axios.get(url, { auth }).then((res) => res.data);
        this.tasks = res2;
        this.success = true;
        console.log("Added");
        console.log(res2);
      } catch (err) {
        this.error = err.message;
        console.log(err);
      }
    },
    async data() {
      var name = JSON.parse(window.localStorage.getItem("name"));
      var img = JSON.parse(window.localStorage.getItem("img"));
      var tasks = JSON.parse(window.localStorage.getItem("tasks"));
      var username = JSON.parse(window.localStorage.getItem("username"));
      this.username = username;
      var password = JSON.parse(window.localStorage.getItem("password"));
      this.password = password;

      this.tasks.push(tasks);
      this.name = name;
      this.img = img;

      const auth = { username: this.username, password: this.password };
      const url = "http://localhost:4000/todos";
      this.success = false;
      this.error = null;
      try {
        const res3 = await axios.get(url, { auth }).then((res) => res.data);
        this.tasks = res3;
        this.success = true;
        console.log("Added");
        console.log(res3);
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteNote(id) {
      const auth = { username: this.username, password: this.password };
      const url = "http://localhost:4000/todos/" + id;
      this.success = false;
      this.error = null;
      try {
        const res2 = await axios.delete(url, { auth }).then((res) => res.data);
        this.tasks = res2;
        this.success = true;
        const url2 = "http://localhost:4000/todos";

        const res3 = await axios.get(url2, { auth }).then((res) => res.data);
        this.tasks = res3;
        this.success = true;
        this.tasks = res3;
      } catch (err) {
        this.error = err.message;
      }
    },
    avatar() {
      return JSON.parse(window.localStorage.getItem("img"));
    },
    logout() {
      window.localStorage.removeItem("password");
      window.localStorage.removeItem("firstLogin");
      window.localStorage.removeItem("tasks");
      window.localStorage.removeItem("task");
      window.localStorage.removeItem("selectedObj");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("img");
      window.localStorage.removeItem("selectedUser");
      window.localStorage.removeItem("details");
      window.localStorage.removeItem("authorization");
      this.$router.push("/");
    },
  },
};
